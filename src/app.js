import {
  PROFILE,
  HERO_PILLARS,
  PROJECTS,
  SKILL_GROUPS,
  INNOVATION_LAB,
  DATA_SPOTLIGHTS
} from './data.js';

let activeFilter = 'all';
let activeSearch = '';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

/* ---------- HERO TERMINAL TABS ---------- */
function renderHeroTerminal(pillarKey) {
  const target = document.getElementById('heroTerminalBody');
  const data = HERO_PILLARS[pillarKey] || HERO_PILLARS.fullstack;
  target.replaceChildren();

  const cmd = el('div', 'term-cmd', data.command);
  target.append(cmd);

  data.lines.forEach(({ k, v }) => {
    const row = el('div', 'term-kv');
    row.append(el('span', 'term-k', `${k}:`), el('span', 'term-v', v));
    target.append(row);
  });

  const foot = el('div', 'term-footer');
  foot.append(el('span', '', data.file), el('span', '', data.badge));
  target.append(foot);
}

/* ---------- ECOSYSTEM SKILL PROOF ---------- */
function selectSkill(skill, buttonEl) {
  document.querySelectorAll('.skill-pill').forEach((b) => b.classList.remove('active'));
  buttonEl?.classList.add('active');

  document.getElementById('ecoProofTitle').textContent = skill.name;
  document.getElementById('ecoProofDesc').textContent = `Demonstrated across ${skill.projects.length} verified portfolio repository${skill.projects.length > 1 ? 'ies' : ''}:`;

  const list = document.getElementById('ecoProjectList');
  list.replaceChildren();

  skill.projects.forEach((slug) => {
    const proj = PROJECTS.find((p) => p.slug === slug);
    if (!proj) return;

    const item = el('div', 'eco-item');
    const info = el('div');
    info.append(el('strong', '', proj.title), el('small', '', proj.subtitle));

    const actions = el('div', 'eco-actions');
    const inspectBtn = el('button', 'btn btn-secondary btn-sm', 'Inspect');
    inspectBtn.type = 'button';
    inspectBtn.addEventListener('click', () => openProjectModal(proj));

    const liveLink = el('a', 'btn btn-primary btn-sm', 'Live ↗');
    liveLink.href = proj.liveUrl;
    liveLink.target = '_blank';
    liveLink.rel = 'noreferrer';

    actions.append(inspectBtn, liveLink);
    item.append(info, actions);
    list.append(item);
  });
}

function renderEcosystem() {
  const container = document.getElementById('ecosystemControls');
  container.replaceChildren();
  let firstButton = null;
  let firstSkill = null;

  SKILL_GROUPS.forEach((group) => {
    const card = el('div', 'glass-card skill-group');
    card.append(el('h3', '', group.label));
    const pills = el('div', 'skill-pills');

    group.skills.forEach((skill) => {
      const btn = el('button', 'skill-pill', skill.name);
      btn.type = 'button';
      btn.addEventListener('click', () => selectSkill(skill, btn));
      pills.append(btn);
      if (!firstButton) {
        firstButton = btn;
        firstSkill = skill;
      }
    });

    card.append(pills);
    container.append(card);
  });

  if (firstSkill && firstButton) selectSkill(firstSkill, firstButton);
}

/* ---------- 11 PROJECTS GRID + FILTER ---------- */
const CATEGORY_LABEL = { web: 'Web Dev', data: 'Data Analytics', security: 'Cybersecurity' };

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.replaceChildren();

  const q = activeSearch.trim().toLowerCase();
  const visible = PROJECTS.filter((p) => {
    const matchCat = activeFilter === 'all' || p.categories.includes(activeFilter);
    const haystack = `${p.title} ${p.subtitle} ${p.summary} ${p.stack.join(' ')} ${p.origin}`.toLowerCase();
    return matchCat && (!q || haystack.includes(q));
  });

  if (!visible.length) {
    const empty = el('div', 'glass-card about-main');
    empty.style.gridColumn = '1 / -1';
    empty.append(el('h3', '', 'No matching projects found'), el('p', 'muted', 'Try clearing your search query or switching to All Projects.'));
    grid.append(empty);
    return;
  }

  visible.forEach((p) => {
    const card = el('article', `glass-card project-card${p.featured ? ' is-featured' : ''}`);

    const shot = el('div', 'project-shot');
    const img = el('img');
    img.src = p.screenshot;
    img.alt = `${p.title} live application screenshot`;
    img.loading = 'lazy';
    shot.append(img, el('span', 'cat-badge', CATEGORY_LABEL[p.primaryCategory] || p.primaryCategory));

    const body = el('div', 'project-body');
    body.append(
      el('div', 'project-origin', p.origin),
      el('h3', '', p.title),
      el('div', 'project-sub', p.subtitle),
      el('p', 'project-desc', p.summary)
    );

    const tags = el('div', 'tag-row');
    p.stack.slice(0, 4).forEach((t) => tags.append(el('span', 'tag', t)));
    body.append(tags);

    const footer = el('div', 'project-footer');
    const liveA = el('a', 'btn btn-primary btn-sm', `${p.liveLabel} ↗`);
    liveA.href = p.liveUrl;
    liveA.target = '_blank';
    liveA.rel = 'noreferrer';

    const repoA = el('a', 'btn btn-secondary btn-sm', 'GitHub ↗');
    repoA.href = p.repoUrl;
    repoA.target = '_blank';
    repoA.rel = 'noreferrer';

    const detailBtn = el('button', 'btn btn-ghost btn-sm', 'Architecture');
    detailBtn.type = 'button';
    detailBtn.addEventListener('click', () => openProjectModal(p));

    footer.append(liveA, repoA, detailBtn);
    body.append(footer);
    card.append(shot, body);
    grid.append(card);
  });
}

/* ---------- CASE STUDY MODAL ---------- */
let lastFocusedElement = null;

function openProjectModal(project) {
  lastFocusedElement = document.activeElement;
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  content.replaceChildren();

  content.append(
    el('span', 'mono-tag', project.origin),
    el('h2', '', project.title),
    el('p', 'muted', project.subtitle)
  );
  content.querySelector('h2').id = 'modalTitle';

  const gallery = el('div', 'modal-gallery');
  project.gallery.forEach((g) => {
    const fig = el('figure');
    const img = el('img');
    img.src = g.src;
    img.alt = `${project.title} — ${g.caption}`;
    fig.append(img, el('figcaption', '', g.caption));
    gallery.append(fig);
  });
  content.append(gallery);

  const specs = el('div', 'modal-specs');
  [
    ['Problem & Context', project.problem],
    ['Engineering Architecture', project.architecture],
    ['Testing & Verification', project.testing]
  ].forEach(([label, text]) => {
    const box = el('div', 'modal-spec');
    box.append(el('strong', '', label), el('span', '', text));
    specs.append(box);
  });
  content.append(specs);

  const tags = el('div', 'tag-row');
  project.stack.forEach((s) => tags.append(el('span', 'tag', s)));
  content.append(tags);

  const actions = el('div', 'hero-actions');
  actions.style.marginBottom = '0';
  const liveA = el('a', 'btn btn-primary', `Launch ${project.liveLabel} ↗`);
  liveA.href = project.liveUrl; liveA.target = '_blank'; liveA.rel = 'noreferrer';
  const repoA = el('a', 'btn btn-secondary', 'View Repository ↗');
  repoA.href = project.repoUrl; repoA.target = '_blank'; repoA.rel = 'noreferrer';
  actions.append(liveA, repoA);
  content.append(actions);

  modal.hidden = false;
  document.getElementById('modalClose').focus();
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal.hidden) return;
  modal.hidden = true;
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

/* ---------- DATA INTELLIGENCE SPOTLIGHT ---------- */
function renderDataSpotlight(key) {
  const container = document.getElementById('dataSpotlightBody');
  const d = DATA_SPOTLIGHTS[key] || DATA_SPOTLIGHTS.datalens;
  container.replaceChildren();

  const left = el('div');
  left.append(
    el('span', 'mono-tag', d.badge),
    el('h3', '', d.title),
    el('p', 'muted', d.description)
  );
  left.querySelector('h3').style.marginTop = '8px';

  const metrics = el('div', 'spot-metrics');
  d.metrics.forEach((m) => {
    const box = el('div', 'spot-metric');
    box.append(el('small', '', m.label), el('strong', '', m.value), el('small', '', m.sub));
    metrics.append(box);
  });
  left.append(metrics, el('div', 'spot-note', d.sampleNote));

  const right = el('div', 'spot-bars');
  d.bars.forEach((b) => {
    const row = el('div');
    const head = el('div', 'bar-row-head');
    head.append(el('span', '', b.label), el('span', '', b.val));
    const track = el('div', 'bar-track');
    const fill = el('div', 'bar-fill');
    fill.style.width = `${b.pct}%`;
    track.append(fill);
    row.append(head, track);
    right.append(row);
  });

  container.append(left, right);
}

/* ---------- CYBERSECURITY INTERACTIVE LINKLENS PREVIEW ---------- */
export function inspectUrlSignals(rawInput) {
  const raw = String(rawInput || '').trim();
  if (!raw) return { error: 'Enter a URL starting with https:// or http:// to inspect.' };

  let parsed;
  try {
    parsed = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  } catch {
    return { error: 'Malformed URL syntax — could not parse host or protocol cleanly.' };
  }

  const findings = [];
  let score = 0;

  if (parsed.protocol === 'http:') {
    score += 25;
    findings.push('Unencrypted HTTP protocol — credentials and tokens travel in cleartext.');
  }
  if (parsed.username || parsed.password) {
    score += 45;
    findings.push(`Deceptive "@"-userinfo prefix detected ("${parsed.username}") masking real destination host "${parsed.hostname}".`);
  }
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(parsed.hostname)) {
    score += 30;
    findings.push('IPv4 literal hostname instead of a verified organizational domain.');
  }
  if (parsed.hostname.includes('xn--')) {
    score += 35;
    findings.push('Punycode (xn--) internationalized domain detected — verify against homograph lookalikes.');
  }
  if (parsed.hostname.split('.').length >= 4) {
    score += 15;
    findings.push('Deep multi-level subdomain chain often used to spoof trusted brands.');
  }

  const trackerParams = [];
  for (const key of parsed.searchParams.keys()) {
    if (/^(utm_|fbclid|gclid|mc_|ref$)/i.test(key)) trackerParams.push(key);
  }
  if (trackerParams.length) {
    findings.push(`Strippable tracking query parameter(s): ${trackerParams.join(', ')}.`);
  }

  const level = score >= 50 ? 'High Risk Pattern' : score >= 20 ? 'Caution / Review' : 'Low Structural Risk';
  return {
    host: parsed.hostname,
    protocol: parsed.protocol.replace(':', ''),
    score: Math.min(100, score),
    level,
    findings: findings.length ? findings : ['No deceptive URL structure or common tracking parameters detected.']
  };
}

function runSecurityPreview() {
  const input = document.getElementById('secUrlInput').value;
  const box = document.getElementById('secUrlResult');
  box.replaceChildren();

  const res = inspectUrlSignals(input);
  if (res.error) {
    const err = el('p', '', res.error);
    err.style.color = '#f87171';
    err.style.margin = '0';
    box.append(err);
    return;
  }

  const summary = el('div');
  summary.append(
    el('strong', '', `${res.level} (${res.score}/100) `),
    el('code', '', `host: ${res.host}`)
  );

  const list = el('ul', 'finding-list');
  res.findings.forEach((f) => list.append(el('li', '', f)));
  box.append(summary, list);
}

/* ---------- FUTURE INNOVATION LAB ---------- */
function renderRoadmap() {
  const grid = document.getElementById('roadmapGrid');
  grid.replaceChildren();

  INNOVATION_LAB.forEach((item) => {
    const card = el('article', 'glass-card road-card');
    const top = el('div', 'road-top');
    top.append(
      el('span', 'mono-tag', item.domain),
      el('span', `status-badge status-${item.status.replace(/\s+/g, '-')}`, item.status)
    );
    card.append(
      top,
      el('h3', '', item.title),
      el('p', '', item.summary),
      el('div', 'road-next', `Next step: ${item.nextStep}`)
    );
    grid.append(card);
  });
}

/* ---------- CONTACT BRIEF VALIDATOR ---------- */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const copyBtn = document.getElementById('cfCopyBtn');
  const feedback = document.getElementById('cfFeedback');

  function validateInputs() {
    const name = document.getElementById('cfName').value.trim();
    const email = document.getElementById('cfEmail').value.trim();
    const topic = document.getElementById('cfTopic').value;
    const msg = document.getElementById('cfMessage').value.trim();

    if (name.length < 2) return { error: 'Please enter your name (at least 2 characters).' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: 'Please enter a valid email address.' };
    if (msg.length < 10) return { error: 'Please include a short brief (at least 10 characters).' };
    return { name, email, topic, msg };
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = validateInputs();
    if (data.error) {
      feedback.className = 'form-feedback error';
      feedback.textContent = data.error;
      return;
    }
    const subject = encodeURIComponent(`[Portfolio] ${data.topic} — ${data.name}`);
    const body = encodeURIComponent(`From: ${data.name} (${data.email})\nTopic: ${data.topic}\n\n${data.msg}`);
    feedback.className = 'form-feedback';
    feedback.textContent = `Draft prepared for ${PROFILE.email}. Launching your email client...`;
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });

  copyBtn.addEventListener('click', async () => {
    const data = validateInputs();
    if (data.error) {
      feedback.className = 'form-feedback error';
      feedback.textContent = data.error;
      return;
    }
    const text = `To: ${PROFILE.email}\nTopic: ${data.topic}\nFrom: ${data.name} <${data.email}>\n\n${data.msg}`;
    try {
      await navigator.clipboard.writeText(text);
      feedback.className = 'form-feedback';
      feedback.textContent = 'Brief copied to clipboard — ready to paste into email or LinkedIn.';
    } catch {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Clipboard unavailable in this context — use Open Email Draft instead.';
    }
  });
}

/* ---------- BOOTSTRAP ---------- */
function init() {
  if (typeof document === 'undefined') return;

  renderHeroTerminal('fullstack');
  document.querySelectorAll('.pillar-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pillar-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderHeroTerminal(btn.dataset.pillar);
    });
  });

  renderEcosystem();
  renderProjects();

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  document.getElementById('projectSearch').addEventListener('input', (e) => {
    activeSearch = e.target.value;
    renderProjects();
  });

  renderDataSpotlight('datalens');
  document.querySelectorAll('.spot-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.spot-btn').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderDataSpotlight(btn.dataset.spot);
    });
  });

  document.querySelectorAll('.chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById('secUrlInput').value = btn.dataset.url;
      runSecurityPreview();
    });
  });
  document.getElementById('secAnalyzeBtn').addEventListener('click', runSecurityPreview);
  runSecurityPreview();

  renderRoadmap();
  setupContactForm();

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('open', !open);
  });
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const progress = document.getElementById('scrollProgress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add('is-visible'));
  }
}

init();
