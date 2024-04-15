import rss from '@astrojs/rss';
import { getIncidents } from '@utils/collections';

export async function GET(context) {
  const items = await getIncidents(true);

  return rss({
    title: 'UGRC systems status page',
    description: 'Get the latest updates on the status of UGRC systems.',
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/incident/${item.slug}/`,
    })),
  });
}
