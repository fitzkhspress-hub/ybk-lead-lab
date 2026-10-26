/* YBK Leadership Lab — homepage + module player. Data lives in modules.js. */
(function () {
  'use strict';
  const MODS = window.MODULES, TRACKS = window.TRACKS;
  const byN = n => MODS.find(m => m.n === n);
  const trackOf = m => TRACKS.find(t => t.id === m.track);
  const slug = m => m.title.toLowerCase().replace(/['’]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const KEY = 'ybkLeadLab';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function shuffled(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

  /* ================= HOME ================= */
  function renderHome(root) {
    const data = load(), done = new Set(data.done || []);
    const href = m => `${slug(m)}/`;
    const card = m => `<a class="m${done.has(m.n) ? ' done' : ''}" href="${href(m)}"><span class="no">${done.has(m.n) ? '✓ ' : ''}${m.n}</span><b>${esc(m.title)}</b><em class="t">About ${m.min} min</em><span>${esc(m.hook)}</span></a>`;
    const pct = Math.round(done.size / MODS.length * 100);
    root.innerHTML = `
<header><div class="spot" aria-hidden="true"></div>
  <div class="kicker">2027 Prowler Yearbook · In the Spotlight</div>
  <h1>Yearbook Leadership Lab</h1>
  <p class="lede">Short leadership modules for Prowler editors. Each one is a real staff situation, one tool, one decision and one commitment. Finish a module, then download your press pass and turn it in.</p>
  <div class="prog">${done.size} of ${MODS.length} complete on this device<div class="barline"><i style="width:${pct}%"></i></div></div>
</header>
<main>
${TRACKS.map(t => { const ms = MODS.filter(m => m.track === t.id); return `
<section><div class="gh"><h2>${t.id} · ${esc(t.name)}</h2><span class="ct">${ms.length} modules</span></div>
  <p class="sub">${esc(t.blurb)}</p>
  <div class="grid">${ms.map(card).join('')}</div></section>`; }).join('')}
</main>
<footer>${MODS.length} modules · The Prowler Yearbook · Kempner High School</footer>`;
  }

  /* ================= MODULE ================= */
  function renderModule(n) {
    const M = byN(n), T = trackOf(M);
    document.title = `${M.title} · Yearbook Leadership Lab`;
    const STEPS = ['The situation', 'The big idea', 'The tool', 'Your call', 'Quick check', 'Your commitment', 'Finish'];
    const data = load();
    const st = {
      step: 0,
      decide: { first: null, solved: false, wrong: new Set(), order: shuffled(M.decide.options.map((o, i) => i)) },
      check: { first: null, solved: false, wrong: new Set(), order: shuffled(M.check.options.map((o, i) => i)) },
      commit: (data.commits && data.commits[n]) || ''
    };

    const header = document.querySelector('header .wrap');
    header.innerHTML = `<a class="home" href="../">← All modules</a>
      <div class="kicker">Yearbook Leadership Lab · Track ${T.id}: ${esc(T.name)} · Module ${M.n}</div>
      <h1>${esc(M.title)}</h1><p class="hook">${esc(M.hook)}</p>
      <div class="progress" aria-hidden="true">${STEPS.map(() => '<span></span>').join('')}</div>
      <div class="steplabel" aria-live="polite"></div>`;
    const main = document.querySelector('main');
    const back = document.getElementById('back'), next = document.getElementById('next'), hint = document.getElementById('hint');

    function canAdvance() {
      if (st.step === 3) return st.decide.solved;
      if (st.step === 4) return st.check.solved;
      if (st.step === 5) return st.commit.trim().length >= 8;
      return st.step < STEPS.length - 1;
    }
    function hintText() {
      if (st.step === 3 && !st.decide.solved) return 'Pick the best response to continue.';
      if (st.step === 4 && !st.check.solved) return 'Answer to continue.';
      if (st.step === 5 && !canAdvance()) return 'Finish your sentence to continue.';
      return '';
    }
    function updateNav() {
      back.disabled = st.step === 0;
      next.disabled = !canAdvance();
      next.style.visibility = st.step === STEPS.length - 1 ? 'hidden' : 'visible';
      next.textContent = st.step === 5 ? 'Finish' : 'Next';
      hint.textContent = hintText();
    }

    function choice(key, prompt, items, onRight, onWrong) {
      const s = st[key], card = el('div', 'card');
      card.appendChild(el('div', 'q', esc(prompt)));
      const opts = el('div', 'opts'), fb = el('div', 'fb');
      fb.setAttribute('aria-live', 'polite');
      s.order.forEach(i => {
        const it = items[i], b = el('button', 'opt', esc(it.text)); b.type = 'button';
        if (s.wrong.has(i)) { b.classList.add('wrong'); b.disabled = true; }
        if (s.solved) { b.disabled = true; if (it.correct) b.classList.add('right'); else if (!s.wrong.has(i)) b.classList.add('dim'); }
        b.addEventListener('click', () => {
          if (s.solved) return;
          if (s.first === null) s.first = !!it.correct;
          if (it.correct) {
            s.solved = true;
            opts.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (!x.classList.contains('wrong')) x.classList.add('dim'); });
            b.classList.remove('dim'); b.classList.add('right');
            fb.className = 'fb show good'; fb.innerHTML = `<strong>${s.first ? 'Yes.' : 'There it is.'}</strong> ${esc(onRight(it))}`;
          } else {
            s.wrong.add(i); b.classList.add('wrong'); b.disabled = true;
            fb.className = 'fb show bad'; fb.innerHTML = `<strong>Not the best move.</strong> ${esc(onWrong(it))}`;
          }
          updateNav();
        });
        opts.appendChild(b);
      });
      card.appendChild(opts);
      if (s.solved) { const it = items.find(x => x.correct); fb.className = 'fb show good'; fb.innerHTML = `<strong>Yes.</strong> ${esc(onRight(it))}`; }
      card.appendChild(fb);
      return card;
    }

    function toolCard() {
      return `<div class="card"><div class="toolname">The tool</div><h2>${esc(M.tool.name)}</h2>
        <ol class="steps">${M.tool.steps.map((s, i) => `<li><span class="sn">${i + 1}</span><div><b>${esc(s[0])}</b><span>${esc(s[1])}</span></div></li>`).join('')}</ol></div>`;
    }

    function render() {
      header.querySelectorAll('.progress span').forEach((s, i) => { s.className = i < st.step ? 'done' : i === st.step ? 'now' : ''; });
      header.querySelector('.steplabel').textContent = `Step ${st.step + 1} of ${STEPS.length} · ${STEPS[st.step]}`;
      main.innerHTML = '';
      const s = st.step;
      if (s === 0) {
        main.innerHTML = `<div class="card"><h3>The situation</h3><p class="scene">${esc(M.scenario)}</p></div>
          <p class="intro">Hold that picture. You'll come back to it.</p>`;
      } else if (s === 1) {
        main.innerHTML = `<div class="card"><h3>The big idea</h3><p class="big">${esc(M.idea)}</p></div>`;
      } else if (s === 2) {
        main.innerHTML = toolCard() + `<p class="intro">Next, use it on the situation.</p>`;
      } else if (s === 3) {
        main.appendChild(el('div', 'card', `<h3>Back to the situation</h3><p class="scene">${esc(M.scenario)}</p>`));
        const items = M.decide.options.map(o => ({ text: o.t, r: o.r, correct: !!o.best }));
        main.appendChild(choice('decide', M.decide.prompt, items, it => it.r, it => it.r + ' Try another.'));
      } else if (s === 4) {
        const items = M.check.options.map((t, i) => ({ text: t, correct: i === M.check.a }));
        main.appendChild(choice('check', M.check.q, items, () => M.check.why, () => 'Try another.'));
      } else if (s === 5) {
        const c = el('div', 'card');
        c.innerHTML = `<h3>Your commitment</h3><p class="intro">One small, specific action you'll take this week. Finish the sentence.</p><div class="starter">${esc(M.commit)}</div>`;
        const ta = document.createElement('textarea');
        ta.setAttribute('aria-label', M.commit); ta.maxLength = 240; ta.value = st.commit;
        ta.placeholder = 'Be specific: who, what, when.';
        ta.addEventListener('input', () => {
          st.commit = ta.value; const d = load(); d.commits = d.commits || {}; d.commits[n] = ta.value; save(d); updateNav();
        });
        c.appendChild(ta);
        c.appendChild(el('p', 'small', 'Saved on this device only.'));
        main.appendChild(c);
      } else {
        renderFinish();
      }
      updateNav();
      main.focus({ preventScroll: true });
      window.scrollTo({ top: 0 });
    }

    function renderFinish() {
      const first = (st.decide.first ? 1 : 0) + (st.check.first ? 1 : 0), total = 2, pct = Math.round(first / total * 100);
      const d = load(); d.done = Array.from(new Set([...(d.done || []), n])); save(d);
      main.appendChild(el('div', 'card', `<p class="intro">Right on the first try</p><div class="score">${first} / ${total}</div><p class="intro">${pct}%</p>`));
      main.insertAdjacentHTML('beforeend', toolCard());
      const commitText = `${M.commit.replace(/…$/, '')} ${st.commit.trim()}`.replace(/\s+/g, ' ');
      main.appendChild(el('div', 'card', `<h3>Your commitment</h3><p class="big">${esc(commitText)}</p><p class="small">Check back at the end of the week. Did you do it?</p>`));

      const cert = el('div', 'card');
      cert.innerHTML = `<h3>Show your teacher</h3><p class="intro">Type your first and last name, download your press pass, then upload it on the submission form.</p>`;
      const inp = document.createElement('input'); inp.type = 'text'; inp.placeholder = 'First and last name'; inp.setAttribute('aria-label', 'Your first and last name');
      inp.value = d.name || '';
      const box = el('div', 'cert'); box.style.marginTop = '12px';
      const nm = el('div', 'nm'); nm.textContent = inp.value.trim() || '—';
      const stamp = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
      box.appendChild(el('div', 'kicker', `Leadership Lab · ${esc(M.title)} module complete`));
      box.appendChild(nm);
      box.appendChild(el('div', null, `${first} / ${total} first try (${pct}%) · ${stamp}`));
      const cm = el('div', 'cm'); cm.textContent = `“${commitText}”`; box.appendChild(cm);
      const dl = el('button', 'btn', 'Download press pass (PNG)'); dl.type = 'button'; dl.style.marginTop = '12px';
      const valid = () => inp.value.trim().split(/\s+/).length >= 2;
      dl.disabled = !valid();
      inp.addEventListener('input', () => { const v = inp.value.trim(); nm.textContent = v || '—'; dl.disabled = !valid(); const dd = load(); dd.name = v; save(dd); });
      dl.addEventListener('click', () => savePressPass({ lab: 'Yearbook Leadership Lab', role: 'Leadership', name: inp.value.trim(), module: M.title, first, total, pct, stamp, commit: commitText }));
      const sub = el('a', 'btn ghost', 'Submit your press pass ↗'); sub.href = 'https://khspress.fillout.com/certificate-upload'; sub.target = '_blank'; sub.rel = 'noopener'; sub.style.marginTop = '12px';
      const brow = el('div', 'btnrow'); brow.appendChild(dl); brow.appendChild(sub);
      cert.appendChild(inp); cert.appendChild(box); cert.appendChild(brow);
      main.appendChild(cert);

      const row = el('div', 'btnrow');
      const again = el('button', 'btn ghost', 'Start over'); again.type = 'button';
      again.addEventListener('click', () => {
        ['decide', 'check'].forEach(k => { st[k].first = null; st[k].solved = false; st[k].wrong.clear(); st[k].order = shuffled(st[k].order); });
        st.step = 0; render();
      });
      row.appendChild(again);
      main.appendChild(row);
    }

    back.addEventListener('click', () => { if (st.step > 0) { st.step--; render(); } });
    next.addEventListener('click', () => { if (canAdvance()) { st.step++; render(); } });
    render();
  }

  /* ---------- press pass PNG ---------- */
  async function drawPressPass(o) {
    try { await document.fonts.ready; } catch (e) {}
    const W = 900, H = o.commit ? 1520 : 1360, c = document.createElement('canvas'); c.width = W; c.height = H;
    const x = c.getContext('2d');
    const sans = 'Barlow, "Segoe UI", Arial, sans-serif', cond = '"Barlow Condensed", "Arial Narrow", Arial, sans-serif';
    const sp = v => { if ('letterSpacing' in x) x.letterSpacing = v; };
    const rr = (X, Y, w, h, r) => { x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + w, Y, X + w, Y + h, r); x.arcTo(X + w, Y + h, X, Y + h, r); x.arcTo(X, Y + h, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath(); };
    const fit = (t, maxW, wt, size, min, fam) => { x.font = `${wt} ${size}px ${fam}`; while (x.measureText(t).width > maxW && size > min) { size -= 2; x.font = `${wt} ${size}px ${fam}`; } return size; };
    const wrap = (t, maxW, maxLines) => { const ws = t.split(/\s+/), L = []; let l = ''; for (const w of ws) { const tt = l ? l + ' ' + w : w; if (x.measureText(tt).width > maxW && l) { L.push(l); l = w; } else l = tt; } if (l) L.push(l); if (L.length > maxLines) { const k = L.slice(0, maxLines); k[maxLines - 1] = k[maxLines - 1].replace(/\s*\S*$/, '') + '…'; return k; } return L; };
    const grad = (y0, y1) => { const g = x.createLinearGradient(0, y0, W, y1); g.addColorStop(0, '#4492C8'); g.addColorStop(1, '#AD84B4'); return g; };

    // page + card
    x.fillStyle = '#f7f5f1'; x.fillRect(0, 0, W, H);
    const CX = 40, CY = 40, CW = W - 80, CH = H - 80;
    x.save(); x.shadowColor = 'rgba(0,0,0,.12)'; x.shadowBlur = 24; x.shadowOffsetY = 6;
    rr(CX, CY, CW, CH, 34); x.fillStyle = '#ffffff'; x.fill(); x.restore();
    x.save(); rr(CX, CY, CW, CH, 34); x.clip();
    // header band
    x.fillStyle = grad(CY, CY + 400); x.fillRect(CX, CY, CW, 400);
    x.fillStyle = 'rgba(255,255,255,.12)'; x.beginPath(); x.arc(CX + CW - 40, CY + 40, 190, 0, Math.PI * 2); x.fill();
    // footer band
    x.fillStyle = grad(CY + CH - 24, CY + CH); x.fillRect(CX, CY + CH - 24, CW, 24);
    x.restore();
    // lanyard slot
    rr(W / 2 - 70, CY + 30, 140, 26, 13); x.fillStyle = '#f7f5f1'; x.fill();
    x.strokeStyle = 'rgba(255,255,255,.6)'; x.lineWidth = 2; x.stroke();

    x.textAlign = 'center';
    x.fillStyle = '#ffffff'; sp('6px'); x.font = `600 24px ${sans}`;
    x.fillText('2027 PROWLER YEARBOOK', W / 2, CY + 108);
    sp('14px'); x.font = `800 160px ${cond}`;
    x.fillText('PRESS', W / 2 + 7, CY + 262);
    sp('5px'); x.font = `600 22px ${sans}`;
    x.fillText(o.lab.toUpperCase(), W / 2, CY + 310);
    sp('0px');

    // initials badge
    const initials = o.name.split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
    const by = CY + 420;
    x.beginPath(); x.arc(W / 2, by, 78, 0, Math.PI * 2); x.fillStyle = '#ffffff'; x.fill();
    x.beginPath(); x.arc(W / 2, by, 66, 0, Math.PI * 2); x.fillStyle = grad(by - 66, by + 66); x.fill();
    x.fillStyle = '#ffffff'; x.font = `700 62px ${cond}`; x.textBaseline = 'middle'; x.fillText(initials, W / 2, by + 3); x.textBaseline = 'alphabetic';

    // name + role
    fit(o.name, CW - 100, 700, 84, 40, cond); x.fillStyle = '#262626';
    x.fillText(o.name, W / 2, by + 165);
    sp('4px'); x.font = `700 22px ${sans}`;
    const role = o.role.toUpperCase(), rw = x.measureText(role).width + 44;
    rr(W / 2 - rw / 2, by + 192, rw, 44, 22); x.fillStyle = 'rgba(68,146,200,.14)'; x.fill();
    x.fillStyle = '#4492C8'; x.fillText(role, W / 2 + 2, by + 222); sp('0px');

    // fields
    let fy = by + 290; const LX = CX + 70, RW = CW - 140;
    const field = (label, val, opts = {}) => {
      x.textAlign = 'left'; sp('3px'); x.fillStyle = '#AD84B4'; x.font = `700 18px ${sans}`; x.fillText(label, LX, fy); sp('0px');
      fy += 40;
      if (opts.lines) { x.fillStyle = '#262626'; x.font = `italic 400 28px ${sans}`; const L = wrap(val, RW, 3); L.forEach(l => { x.fillText(l, LX, fy); fy += 38; }); fy -= 38; }
      else { fit(val, RW, opts.wt || 600, opts.size || 40, 24, opts.fam || cond); x.fillStyle = opts.color || '#262626'; x.fillText(val, LX, fy); }
      fy += 26; x.fillStyle = '#e2ddd4'; x.fillRect(LX, fy, RW, 2); fy += 46;
    };
    field('CLEARED FOR', o.module);
    field('FIRST-TRY SCORE', `${o.first} / ${o.total}  (${o.pct}%)`, { color: '#4492C8', wt: 700 });
    if (o.commit) field('MY COMMITMENT', `“${o.commit}”`, { lines: true });
    field('ISSUED', o.stamp, { size: 30, wt: 500, fam: sans });

    // barcode + footer
    let h = 0; for (const ch of (o.name + o.module + o.stamp)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const bY = CY + CH - 150, bW = 420; let bx = W / 2 - bW / 2; x.fillStyle = '#262626';
    while (bx < W / 2 + bW / 2 - 6) { h = (h * 1103515245 + 12345) >>> 0; const w = 2 + (h % 4) * 2; x.fillRect(bx, bY, w, 64); bx += w + 3 + ((h >> 5) % 3) * 2; }
    x.textAlign = 'center'; sp('4px'); x.fillStyle = '#666666'; x.font = `600 18px ${sans}`;
    x.fillText('KHS PRESS · KEMPNER HIGH SCHOOL', W / 2, bY + 104); sp('0px');
    return c;
  }
  async function savePressPass(o) {
    const c = await drawPressPass(o);
    const blob = await new Promise(r => c.toBlob(r, 'image/png'));
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${o.module.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-press-pass-${o.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  window.LeadLab = { slug };
  document.addEventListener('DOMContentLoaded', () => {
    const n = Number(document.body.dataset.module);
    if (n) renderModule(n); else renderHome(document.getElementById('home'));
  });
})();
