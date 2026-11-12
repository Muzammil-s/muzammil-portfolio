import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  INNOVATION_LAB
} from '../src/data.js';
import { inspectUrlSignals } from '../src/app.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('all 11 required projects are defined with authentic screenshots and verified HTTPS URLs', () => {
  assert.equal(PROJECTS.length, 11);
  const slugs = new Set(PROJECTS.map((p) => p.slug));
  [
    'socialsphere',
    'commercehub',
    'freshbasket',
    'linklens',
    'devkit',
    'networkscope',
    'marketplace',
    'stockflow',
    'studyroute',
    'datalens',
    'careeros'
  ].forEach((required) => assert.ok(slugs.has(required), `Missing slug ${required}`));

  PROJECTS.forEach((p) => {
    assert.ok(p.repoUrl.startsWith('https://github.com/Muzammil-s/'), `Bad repoUrl for ${p.slug}`);
    assert.ok(p.liveUrl.startsWith('https://'), `Bad liveUrl for ${p.slug}`);
    const shotPath = path.join(rootDir, p.screenshot);
    assert.ok(fs.existsSync(shotPath), `Missing screenshot file: ${p.screenshot}`);
    assert.ok(fs.statSync(shotPath).size > 20000, `Screenshot unexpectedly tiny: ${p.screenshot}`);
    p.gallery.forEach((g) => {
      assert.ok(fs.existsSync(path.join(rootDir, g.src)), `Missing gallery asset: ${g.src}`);
    });
  });
});

test('portrait asset exists and verified contact channels match user details', () => {
  assert.equal(PROFILE.name, 'Muzammil Shabbir');
  assert.equal(PROFILE.email, 'muzammilw10@gmail.com');
  assert.equal(PROFILE.github, 'https://github.com/Muzammil-s');
  assert.ok(PROFILE.linkedin.includes('muzammil-shabbir-7368a7382'));
  assert.ok(PROFILE.whatsapp.includes('923105522970'));
  assert.ok(fs.existsSync(path.join(rootDir, PROFILE.portrait)));
});

test('all 8 Future Innovation Lab items carry honest non-completed statuses', () => {
  assert.equal(INNOVATION_LAB.length, 8);
  const allowed = new Set(['Planned', 'Exploring', 'In Progress', 'Prototype']);
  INNOVATION_LAB.forEach((item) => {
    assert.ok(allowed.has(item.status), `Disallowed status "${item.status}" for ${item.title}`);
  });
});

test('ecosystem skill project references point to valid project slugs', () => {
  const validSlugs = new Set(PROJECTS.map((p) => p.slug));
  SKILL_GROUPS.forEach((group) => {
    group.skills.forEach((skill) => {
      assert.ok(skill.projects.length > 0);
      skill.projects.forEach((slug) => assert.ok(validSlugs.has(slug), `Unknown slug ${slug} in ${skill.name}`));
    });
  });
});

test('cybersecurity URL preview analyzer flags phishing signals accurately', () => {
  const suspicious = inspectUrlSignals('https://login.example.com@198.51.100.42/auth?utm_source=test');
  assert.ok(suspicious.score >= 50);
  assert.equal(suspicious.host, '198.51.100.42');

  const idn = inspectUrlSignals('https://xn--pple-43d.com/login');
  assert.ok(idn.findings.some((f) => f.includes('Punycode')));

  const clean = inspectUrlSignals('https://github.com/Muzammil-s');
  assert.equal(clean.score, 0);
});
