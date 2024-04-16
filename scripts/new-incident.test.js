import fs from 'node:fs';
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import mock from 'mock-fs';

import { getDataFromIssue, createNewIncidentPost } from './new-incident.js';

describe('new-incident', () => {
  it('should parse the body into parts', () => {
    const body = `### Issue title\nNetwork outage\n### Incident description\nThe TURN network is having issues.\nWe are actively looking into it.\n### Affected systems\nturn gps, open sgid\n### Incident Severity\nmajor-outage\n### <!---->\n<!-- bot = {\n      "type": "new-incident"\n    } -->`;
    const incident = getDataFromIssue(body);

    assert.equal(incident.title, 'Network outage');
    assert.equal(incident.description, 'The TURN network is having issues.\nWe are actively looking into it.');
    assert.deepEqual(incident.systems, ['turn gps', 'open sgid']);
    assert.equal(incident.severity, 'major-outage');
  });

  it('create a new incident post', () => {
    const incident = {
      title: 'Network outage',
      description: 'The TURN network is having issues.\nWe are actively looking into it.',
      systems: ['turn gps', 'open sgid'],
      severity: 'major-outage',
    };

    const filePath = '../src/content/incident/2023-10-02-network-outage.mdx';

    createNewIncidentPost(filePath, incident, '2023-10-02T09:24:53.000Z');

    const file = fs.readFileSync(filePath, 'utf-8');

    assert.ok(file.includes('---'));
    assert.ok(file.includes('title: Network Outage'));
    assert.ok(file.includes(`date: '2023-10-02T09:24:53.000Z'`));
    assert.ok(file.includes('severity: major-outage'));
    assert.ok(file.includes('affectedSystems:'));
    assert.ok(file.includes('  - turn gps'));
    assert.ok(file.includes('  - open sgid'));
    assert.ok(file.includes('resolved: false'));

    mock.restore();
  });
});
