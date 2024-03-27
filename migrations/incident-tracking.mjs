import { readFileSync, readdirSync, renameSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { stringify } from 'yaml';

const folder = '../src/content/incident';
const filenames = readdirSync(folder);

const trackingRegex = /(\*\*update\*\*:?\s*)?(\n*)(?<update>.*\n*(?={{))\s*\{\{<\s*track\s*(?<date>.*)>\}\}/gim;

for (const filename of filenames) {
  const file = readFileSync(`${folder}/${filename}`, 'utf8');
  const { data: frontMatter, content } = matter(file);

  let matches;
  let hasUpdate = false;
  let updatedContent = content;
  const dates = new Set();
  while ((matches = trackingRegex.exec(content)) !== null) {
    hasUpdate = true;

    let { date, update } = matches.groups;

    date = date.replaceAll('"', '').trim();
    if (!dates.has(date)) {
      dates.add(date);
    } else {
      console.warn(`Duplicate date: ${date} in ${filename}`);
    }
    update = update.trim();

    updatedContent = updatedContent.replace(matches[0], `\n\n<Update date="${date}">${update}</Update>\n`);
  }

  let newFileContent = `---\n${stringify(frontMatter)}---\n`;
  if (hasUpdate) {
    newFileContent += `\nimport Update from '@components/status/Update.astro';\n`;
  }

  newFileContent += updatedContent;

  writeFileSync(`${folder}/${filename}`, newFileContent);

  if (hasUpdate) {
    renameSync(`${folder}/${filename}`, `${folder}/${filename.replace('.md', '.mdx')}`);
  }
}

// rename file

process.exit(0);
