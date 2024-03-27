import { readFileSync, readdirSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { stringify } from 'yaml';

const folder = '../src/content/incident';
const filenames = readdirSync(folder);

for (const filename of filenames) {
  const file = readFileSync(`${folder}/${filename}`, 'utf8');
  const { data: frontMatter, content } = matter(file);

  const date = new Date(frontMatter.date);
  const filenameWithDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${filename}`;

  const newFileContent = `---\n${stringify({
    title: frontMatter.title,
    date: frontMatter.date,
    severity: frontMatter.severity,
    affectedSystems: frontMatter.affectedSystems,
    resolved: frontMatter.resolved,
  })}---\n${content}`;

  writeFileSync(`${folder}/${filenameWithDate}`, newFileContent);
}

process.exit(0);
