import { getCollection, type CollectionEntry } from 'astro:content';
import { execSync } from 'node:child_process';
import { convert } from 'html-to-text';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { toString } from 'mdast-util-to-string';
import { mdxjs } from 'micromark-extension-mdxjs';
import { remove } from 'unist-util-remove';

const getLastModifiedTime = (path: string) => {
  if (import.meta.env.DEV) {
    return new Date();
  }

  const updated = execSync(`git log -1 --pretty="format:%cI" ./src/content/incident/${path}`).toString();

  return !updated ? new Date() : new Date(updated);
};

type IncidentEntry = CollectionEntry<'incident'>;

export type DecoratedIncidentEntry = IncidentEntry & {
  data: IncidentEntry['data'] & {
    snippet: string;
    lastUpdated: Date;
    severity: 'under-maintenance' | 'degraded-performance' | 'partial-outage' | 'major-outage';
  };
};

function getSnippetFromMarkdown(markdown: string, type: 'md' | 'mdx'): string {
  const options = type === 'mdx' ? { extensions: [mdxjs()], mdastExtensions: [mdxFromMarkdown()] } : null;

  const parsedMarkdown = fromMarkdown(markdown, options);
  // if the markdown is just a single HTML node, convert it to text
  if (parsedMarkdown.children.length === 1 && parsedMarkdown.children[0].type === 'html') {
    return convert(parsedMarkdown.children[0].value);
  }

  // remove any non-text nodes such as ESM imports in MDX files
  remove(parsedMarkdown, (node) => !['paragraph', 'heading', 'text', 'link'].includes(node.type));

  return toString(parsedMarkdown, { includeImageAlt: false }).slice(0, 200) ?? 'a blog post';
}

export async function getIncidents(all = false): Promise<DecoratedIncidentEntry[]> {
  const data = (await getCollection('incident'))
    .filter((incident) => all || incident.data.resolved === false)
    .sort((b, a) => a.data.date.valueOf() - b.data.date.valueOf())
    .map((incident): DecoratedIncidentEntry => {
      const documentType = incident.filePath?.split('.').pop() as 'md' | 'mdx';

      return {
        ...incident,
        data: {
          ...incident.data,
          snippet: getSnippetFromMarkdown(incident.body ?? '', documentType),
          lastUpdated: getLastModifiedTime(incident.id),
          severity: incident.data.severity,
        },
      };
    });

  return data;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export type FilteredSystem = {
  slug: string;
  name: string;
  incidents: DecoratedIncidentEntry[];
};

export async function getIncidentsOf(filterType: 'unresolved'): Promise<FilteredSystem[]> {
  const incidents = await getIncidents();

  const organizedIncidents = incidents.reduce(
    (filteredIncidents: Record<string, FilteredSystem>, incident: DecoratedIncidentEntry) => {
      function addValue(incident: DecoratedIncidentEntry) {
        for (const system of incident.data.affectedSystems) {
          const slug = slugify(system);
          if (!filteredIncidents[slug]) {
            filteredIncidents[slug] = { slug, name: system, incidents: [] };
          }

          filteredIncidents[slug].incidents.push(incident);
        }
      }

      if (filterType === 'unresolved') {
        addValue(incident);
      }

      return filteredIncidents;
    },
    {},
  );

  return Object.keys(organizedIncidents)
    .sort()
    .map((slug) => ({
      ...organizedIncidents[slug],
    }));
}
