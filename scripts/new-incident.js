import fs from 'node:fs';
import { Octokit } from '@octokit/core';
import matter from 'gray-matter';

if (process.env.NODE_ENV !== 'test') {
  const issueNumber = process.argv[2];

  if (!issueNumber) {
    console.error('Missing an issue number');
    process.exit(1);
  }

  const octokit = new Octokit();
  const issue = await octokit.rest.issues.get({
    owner: 'agrc',
    repo: 'status-page',
    issue_number: issueNumber,
  });

  if (!issue.data.body.includes('<!-- bot = {"type":"new-incident"} -->')) {
    console.debug('This issue does not contain the correct metadata');
    process.exit(0);
  }

  const incident = getDataFromIssue(issue.data.body);

  const date = new Date().toISOString();
  const noTime = date.split('T')[0];

  const slug = `${noTime}-${incident.title.toLowerCase().replace(/\s+/g, '-')}`;
  const filePath = `../src/content/incident/${slug}.mdx`;

  createNewIncidentPost(filePath, incident, date);
}

export const getDataFromIssue = (body) => {
  const parts = body.split('### ');

  return {
    title: parts[1].substring(parts[1].indexOf('\n') + 1).trim(),
    description: parts[2].substring(parts[2].indexOf('\n') + 1).trim(),
    systems: parts[3]
      .substring(parts[3].indexOf('\n') + 1)
      .trim()
      .split(', '),
    severity: parts[4].substring(parts[4].indexOf('\n') + 1).trim(),
  };
};

export const createNewIncidentPost = (filePath, incident, date) => {
  const frontmatter = matter.stringify(incident.description, {
    title: startCase(incident.title),
    date,
    severity: incident.severity,
    affectedSystems: incident.systems,
    resolved: false,
  });

  fs.writeFileSync(filePath, frontmatter);
};
