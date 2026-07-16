import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const issues = (await getCollection('issues')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: context.site,
    items: issues.map((issue) => ({
      title: issue.data.title,
      pubDate: issue.data.date,
      description: issue.data.dek ?? '',
      link: `/issues/${issue.id}/`,
    })),
  });
}
