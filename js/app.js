(function () {
'use strict';
const C = window.C1;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const main = $('#main');

//  stato salvato nel browser
const KEY = 'c1site_v1';
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const today = () => iso(new Date());
const addDays = (s, n) => { const d = new Date(s + 'T12:00:00'); d.setDate(d.getDate() + n); return iso(d); };
const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5);
const fmtDate = s => new Date(s + 'T12:00:00').toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' });
let S = {};
try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { S = {}; }
S = Object.assign({ scores: {}, errors: {}, cards: {}, drafts: {}, plan: {}, start: today() }, S);
if (!S.dates) S.dates = { mock: addDays(S.start, 14), exam: addDays(S.start, 31) };
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage non disponibile */ } };

// registro di tutti gli esercizi
const PART = {
  p1: ['Part 1 – Multiple-choice cloze', 'Scegli la parola giusta per ogni spazio (8 domande, 1 punto).', 'Leggi prima tutto il testo. Guarda cosa c\'è subito PRIMA e DOPO lo spazio: quasi sempre la risposta dipende da una preposizione o da una collocazione fissa (cast doubt ON, take INTO account). Le quattro opzioni hanno significato simile: vince quella che "regge" grammaticalmente.'],
  p2: ['Part 2 – Open cloze', 'Scrivi UNA parola per spazio (8 domande, 1 punto).', 'Sono quasi sempre parole grammaticali: preposizioni, articoli, ausiliari, pronomi relativi, linkers, particelle dei phrasal verbs. Chiediti: che tipo di parola manca? C\'è un\'inversione (Not ONLY has…)? Un comparativo (THE more… the more)? Mai due parole, mai contrazioni.'],
  p3: ['Part 3 – Word formation', 'Trasforma la parola in maiuscolo perché si adatti allo spazio (8 domande, 1 punto).', 'Tre controlli fissi: 1) che categoria serve (nome, aggettivo, avverbio, verbo)? 2) serve il NEGATIVO (un-, in-, im-, dis-)? Leggi il senso della frase. 3) serve il PLURALE? Almeno una o due risposte per testo richiedono un prefisso.'],
  p4: ['Part 4 – Key word transformations', 'Completa la seconda frase con 3–6 parole, usando la parola data SENZA modificarla (6 domande, 2 punti).', 'Ogni frase vale 2 punti divisi in due "metà": anche una risposta parziale può dare 1 punto, quindi scrivi sempre qualcosa. Non cambiare la parola chiave. Conta le parole (le contrazioni valgono due). Controlla tempo verbale e soggetto della frase originale.'],
  p5: ['Part 5 – Multiple choice', 'Leggi il testo e scegli la risposta migliore (6 domande, 2 punti).', 'Le domande seguono l\'ordine del testo. Trova il passaggio, rileggi con calma e scegli l\'opzione che dice LA STESSA COSA con parole diverse. Diffida delle opzioni che ripetono parole identiche a quelle del testo.'],
  p6: ['Part 6 – Cross-text multiple matching', 'Quattro testi brevi: confronta le opinioni (4 domande, 2 punti).', 'Fai una griglia: per ogni autore segna + o − su ciascun tema (di solito 3–4 temi). Poi le domande "shares X\'s view" e "has a different opinion from the others" si risolvono da sole.'],
  p7: ['Part 7 – Gapped text', 'Reinserisci i paragrafi mancanti (6 domande, 2 punti).', 'Cerca gli agganci: pronomi (these, such, their), articoli determinativi (THE money → prima si parlava di un finanziamento), linkers (Even so, by contrast), cronologia. Controlla sempre sia PRIMA sia DOPO lo spazio. Un paragrafo avanza.'],
  p8: ['Part 8 – Multiple matching', 'Abbina ogni affermazione alla sezione giusta (10 domande, 1 punto).', 'Leggi PRIMA le affermazioni e sottolinea le parole chiave, poi scorri i testi. Le affermazioni sono parafrasi: non cercare le stesse parole. È la parte dove si recupera tempo: 1 punto a domanda, non impantanarti.'],
};
const LTIPS = 'Usa il tempo prima dell\'ascolto per leggere le domande e prevedere il tipo di informazione. Le risposte seguono l\'ordine della registrazione. Attenzione ai distrattori: spesso si sente prima un\'idea che poi viene corretta ("I assumed… but in fact…").';
const W = { p4: 2, p5: 2, p6: 2, p7: 2 };
const REG = {}, GROUPS = { th: [], g: [], uoe: [], read: [], listen: [] };
C.theory.forEach(t => { const k = { id: 'th-' + t.id, title: t.title, html: t.html, items: t.items, back: 'teoria', backLabel: 'Teoria', sum: t.sum, group: t.group, alone: true }; REG[k.id] = k; GROUPS.th.push(k); });
C.grammar.forEach(t => { const k = { id: 'g-' + t.id, title: t.title, html: t.html, items: t.items, back: 'teoria', backLabel: 'Teoria', tag: t.tag, sum: t.sum, alone: true }; REG[k.id] = k; GROUPS.g.push(k); });
['p1', 'p2', 'p3', 'p4'].forEach(p => C.uoe[p].forEach(t => { Object.assign(t, { kind: p, back: 'uoe', backLabel: 'Use of English', alone: p === 'p4' }); REG[t.id] = t; GROUPS.uoe.push(t); }));
['p5', 'p6', 'p7', 'p8'].forEach(p => C.reading[p].forEach(t => { Object.assign(t, { kind: p, back: 'reading', backLabel: 'Reading' }); REG[t.id] = t; GROUPS.read.push(t); }));
C.listening.forEach(t => { Object.assign(t, { back: 'listening', backLabel: 'Listening' }); REG[t.id] = t; GROUPS.listen.push(t); });

// utilità
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const paras = t => t.trim().split(/\n\s*\n/).map(p => '<p>' + p.trim() + '</p>').join('');
function norm(s) {
  return String(s).toLowerCase().replace(/[’‘`´]/g, "'")
    .replace(/\bwon't\b/g, 'will not').replace(/\bcan't\b/g, 'can not').replace(/\bcannot\b/g, 'can not').replace(/\bshan't\b/g, 'shall not')
    .replace(/n't\b/g, ' not').replace(/'ve\b/g, ' have').replace(/'re\b/g, ' are').replace(/'ll\b/g, ' will').replace(/\bi'm\b/g, 'i am')
    .replace(/[.,;:!?"]/g, ' ').replace(/\s+/g, ' ').trim();
}
const marks = (task, it) => it.w || W[task.kind] || (it.t === 'kwt' ? 2 : 1);
const isRight = (it, v) => it.t === 'mc' ? (v !== '' && +v === it.a) : it.a.some(x => norm(x) === norm(v));
const answerText = it => it.t === 'mc' ? it.o[it.a] : it.a.slice(0, 3).join(' / ');
function badge(id) {
  const s = S.scores[id]; if (!s) return '<span class="badge">da fare</span>';
  const p = s.m ? s.s / s.m : 0;
  return `<span class="badge ${p >= .75 ? 'ok' : p >= .5 ? 'mid' : 'low'}">${s.s}/${s.m}</span>`;
}
const tagBadge = t => t === 'top' ? ' <span class="badge tag">chiave per l\'esame</span>' : '';
const fmtTime = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
let live = [];
function timer(el, secs, onEnd) {
  let left = secs, iv = null;
  const show = () => { el.textContent = fmtTime(Math.max(left, 0)); };
  show();
  const api = {
    start() { if (iv) return; iv = setInterval(() => { left--; show(); if (left <= 0) { api.stop(); if (onEnd) onEnd(); } }, 1000); },
    stop() { clearInterval(iv); iv = null; },
    reset() { api.stop(); left = secs; show(); },
    get left() { return left; },
  };
  live.push(api);
  return api;
}

// motore degli esercizi 
function control(task, i, inline) {
  const it = task.items[i];
  if (it.t === 'mc') {
    const ord = it.fix ? it.o.map((_, j) => j) : shuffle(it.o.map((_, j) => j));
    if (inline || it.sel) return `<select class="in" data-i="${i}"><option value="">${inline ? '(' + (i + 1) + ')' : 'scegli…'}</option>${ord.map(j => `<option value="${j}">${esc(it.o[j])}</option>`).join('')}</select>`;
    return `<div class="opts">${ord.map(j => `<label><input type="radio" name="${task.id}_${i}" data-i="${i}" value="${j}"><span>${esc(it.o[j])}</span></label>`).join('')}</div>`;
  }
  return `<input class="in${it.t === 'kwt' ? ' wide' : ''}" data-i="${i}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"${inline ? ` placeholder="(${i + 1})"` : ''}>`;
}
function itemBody(task, it, i) {
  if (it.t === 'mc') return it.sel ? `<div class="q">${esc(it.q)} ${control(task, i)}</div>` : `<div class="q">${esc(it.q)}</div>${control(task, i)}`;
  if (it.t === 'kwt') return `<div class="q">${esc(it.s)}</div><div class="key">${esc(it.k)}</div><div class="q">${esc(it.g).replace('___', control(task, i))}</div>`;
  return `<div class="q">${esc(it.q).replace('___', control(task, i))}${it.hint ? ` <span class="hint">${esc(it.hint)}</span>` : ''}</div>`;
}
function renderTask(task, host) {
  let h = '';
  if (task.intro) h += `<p>${task.intro}</p>`;
  if (task.sections) h += task.sections.map(s => `<div class="sec"><h4>${esc(s[0])}</h4>${paras(s[1])}</div>`).join('');
  if (task.pre) h += `<div class="passage">${paras(task.pre)}</div>`;
  const inline = new Set();
  if (task.text) {
    const t = paras(task.text).replace(/\{(\d+)\}/g, (m, n) => {
      const i = n - 1, it = task.items[i]; inline.add(i);
      return control(task, i, true) + (it.hint ? ` <span class="root">${esc(it.hint)}</span>` : '') + `<span class="fb" data-fb="${i}"></span>`;
    });
    h += `<div class="passage cloze">${t}</div>`;
  }
  if (task.bank) h += task.bank.map(b => `<div class="sec"><h4>${b[0]}</h4><p>${b[1]}</p></div>`).join('');
  const listed = task.items.map((it, i) => inline.has(i) ? '' : `<li>${itemBody(task, it, i)}<div class="fb" data-fb="${i}"></div></li>`).join('');
  if (listed) h += `<ol class="items">${listed}</ol>`;
  host.innerHTML = h;

  const value = i => {
    const it = task.items[i];
    if (it.t === 'mc') {
      const r = host.querySelector(`input[type=radio][data-i="${i}"]:checked`); if (r) return r.value;
      const s = host.querySelector(`select[data-i="${i}"]`); return s ? s.value : '';
    }
    const e = host.querySelector(`input.in[data-i="${i}"]`); return e ? e.value : '';
  };
  return {
    check() {
      let s = 0, m = 0;
      task.items.forEach((it, i) => {
        const v = value(i), ok = isRight(it, v), w = marks(task, it);
        m += w; if (ok) s += w;
        const el = host.querySelector(`.in[data-i="${i}"]`);
        if (el) { el.classList.toggle('ok', ok); el.classList.toggle('bad', !ok); }
        $$(`input[type=radio][data-i="${i}"]`, host).forEach(r => {
          const lab = r.closest('label'); lab.classList.remove('ok', 'bad');
          if (+r.value === it.a) lab.classList.add('ok'); else if (r.checked) lab.classList.add('bad');
        });
        const fb = host.querySelector(`[data-fb="${i}"]`);
        if (fb) {
          const why = it.why ? ` <span class="why">— ${esc(it.why)}</span>` : '';
          fb.innerHTML = ok ? ` <span class="ok">✓</span>${inline.has(i) ? '' : why}` : ` <span class="bad">✗ ${esc(answerText(it))}</span>${why}`;
        }
        if (!task.noErr) {
          const key = task.map ? task.map[i] : task.id + ':' + i;
          if (ok) delete S.errors[key]; else S.errors[key] = today();
        }
      });
      if (!task.noSave) S.scores[task.id] = { s, m, d: today() };
      save();
      return { s, m };
    },
  };
}

//  voce sintetica per il listening 
const FEM = /Kate|Serena|Samantha|Karen|Moira|Tessa|Fiona|Martha|Susan|Victoria|Ava|Allison|Stephanie|Female|Sonia|Libby|Hazel|Zira|Jenny|Aria/i;
const MAL = /Daniel|Oliver|Arthur|Alex|Rishi|Tom|Fred|Gordon|Male|Ryan|George|Thomas|David|Mark|Guy|Aaron/i;
const TTS = {
  ok: 'speechSynthesis' in window,
  voices() { return this.ok ? speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)) : []; },
  play(lines, rate, onEnd) {
    if (!this.ok) return;
    speechSynthesis.cancel();
    const all = this.voices();
    const best = re => { const m = all.filter(v => re.test(v.name)); return m.filter(v => /GB/i.test(v.lang)).concat(m.filter(v => !/GB/i.test(v.lang))); };
    const fem = best(FEM), mal = best(MAL).filter(v => !FEM.test(v.name));
    const voiceFor = who => {
      const n = /2/.test(who) ? 1 : 0;
      if (who[0] === 'F' && fem.length) return [fem[n % fem.length], n >= fem.length ? 1.2 : 1];
      if (who[0] === 'M' && mal.length) return [mal[n % mal.length], n >= mal.length ? 0.8 : 1];
      if (who === 'N' && mal.length) return [mal[mal.length - 1], 0.9];
      return [null, who[0] === 'F' ? 1.25 : who === 'N' ? 0.7 : 0.9];
    };
    const us = [];
    lines.forEach(([who, text]) => {
      const [voice, pitch] = voiceFor(who);
      (text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text]).forEach(sen => {
        if (!sen.trim()) return;
        const u = new SpeechSynthesisUtterance(sen.trim());
        u.lang = voice ? voice.lang : 'en-GB'; if (voice) u.voice = voice; u.pitch = pitch; u.rate = rate;
        us.push(u);
      });
    });
    if (us.length) us[us.length - 1].onend = onEnd;
    us.forEach(u => speechSynthesis.speak(u));
  },
  stop() { if (this.ok) speechSynthesis.cancel(); },
};
if (TTS.ok) { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => {}; }

//  viste 
const V = {};
const taskCards = arr => `<div class="grid">${arr.map(t => `<a class="card" href="#t/${t.id}"><h3>${esc(t.title)} ${badge(t.id)}</h3>${t.sum ? `<p>${esc(t.sum)}</p>` : ''}${t.tag ? `<p>${tagBadge(t.tag)}</p>` : ''}</a>`).join('')}</div>`;
function groupStat(arr) {
  const done = arr.filter(t => S.scores[t.id]);
  const s = done.reduce((a, t) => a + S.scores[t.id].s, 0), m = done.reduce((a, t) => a + S.scores[t.id].m, 0);
  return { done: done.length, total: arr.length, pct: m ? Math.round(100 * s / m) : null };
}
function planDays() {
  const n = 30;
  const days = C.plan.map(d => ({ title: d[0], tasks: d[1] }));
  for (let i = C.plan.length; i < n; i++) { const c = C.planCycle[(i - C.plan.length) % C.planCycle.length]; days.push({ title: `Giorno ${i + 1} – ${c[0]}`, tasks: c[1] }); }
  return days;
}
function dayHtml(d, i, isToday) {
  return `<div class="plan-day${isToday ? ' today' : ''}"><h3>${esc(d.title)}</h3>${d.tasks.map((t, k) => {
    const key = `d${i}_${k}`, ext = /^http/.test(t[1]);
    return `<label><input type="checkbox" data-plan="${key}"${S.plan[key] ? ' checked' : ''}><span>${esc(t[0])} <a href="${t[1]}"${ext ? ' target="_blank" rel="noopener"' : ''}>${ext ? 'apri ↗' : 'vai →'}</a></span></label>`;
  }).join('')}</div>`;
}
function bindPlan() { $$('[data-plan]').forEach(c => c.onchange = () => { S.plan[c.dataset.plan] = c.checked; save(); }); }

V.home = function () {
  const groups = [['Teoria', GROUPS.th, 'teoria'], ['Strutture C1', GROUPS.g, 'teoria'], ['Use of English', GROUPS.uoe, 'uoe'], ['Reading', GROUPS.read, 'reading'], ['Listening', GROUPS.listen, 'listening']];
  const nErr = Object.keys(S.errors).length;
  const cardsKnown = Object.keys(S.cards).length, cardsTot = C.vocab.reduce((a, d) => a + d.cards.length, 0);
  main.innerHTML = `
  <h1>Da B2 a C1</h1>
  <p>Tutto quello che serve per il C1 Advanced: la teoria da studiare, le parole e i modi di dire, gli esercizi e le prove in formato esame.</p>
  <h2>Da dove partire</h2>
  <div class="grid">
    <a class="card" href="#teoria"><h3>1. Studia la teoria</h3><p>${GROUPS.th.length + GROUPS.g.length} capitoli: frase, verbi, articoli, aggettivi, avverbi, preposizioni, word formation e strutture da C1. Ognuno con esercizi.</p></a>
    <a class="card" href="#lessico"><h3>2. Parole C1 e modi di dire</h3><p>${cardsTot} schede: da B2 a C1, lista Oxford 5000, idioms spiegati, phrasal verbs, collocazioni.</p></a>
    <a class="card" href="#uoe"><h3>3. Esercizi in formato esame</h3><p>Use of English, Reading, Listening, Writing e Speaking, parte per parte, con link ai siti di pratica.</p></a>
    <a class="card" href="#sim"><h3>4. Prove complete</h3><p>Simulazioni a tempo con punteggio, più 20 test di Reading e 30 di Listening sui siti dedicati.</p></a>
  </div>
  <h2>A che punto sei</h2>
  <div class="grid">
  ${groups.map(([name, arr, href]) => { const g = groupStat(arr); return `<a class="card" href="#${href}"><h3>${name}</h3><div class="meter"><i style="width:${100 * g.done / g.total}%"></i></div><p>${g.done}/${g.total} esercizi fatti${g.pct !== null ? ` · media ${g.pct}%` : ''}</p></a>`; }).join('')}
  <a class="card" href="#lessico"><h3>Lessico</h3><div class="meter"><i style="width:${100 * cardsKnown / cardsTot}%"></i></div><p>${cardsKnown}/${cardsTot} carte che sai</p></a>
  <a class="card" href="#sim"><h3>Simulazioni</h3><p>${C.sims.map((s, i) => `Sim ${i + 1}: ${S.scores['sim-' + (i + 1)] ? Math.round(100 * S.scores['sim-' + (i + 1)].s / S.scores['sim-' + (i + 1)].m) + '%' : 'da fare'}`).join(' · ')}</p></a>
  <a class="card" href="#errori"><h3>Quaderno errori</h3><p>${nErr} risposte da ripassare</p></a>
  </div>
  <div class="panel small">
  <p>Ogni risposta sbagliata finisce da sola nel <a href="#errori">quaderno degli errori</a> e sparisce quando la rifai giusta. I progressi restano salvati in questo browser, su questo computer.</p>
  <button class="btn" id="reset">Azzera tutti i progressi</button>
  </div>`;
  $('#reset').onclick = () => { if (confirm('Cancellare punteggi, errori, bozze e piano?')) { localStorage.removeItem(KEY); location.reload(); } };
};

V.piano = function () {
  const days = planDays();
  main.innerHTML = `<h1>Piano di studio</h1>
  <p>Un percorso consigliato di 30 giorni, circa due ore al giorno: nei primi 14 tutta la teoria, il lessico e due simulazioni; poi un ciclo di quattro giorni (prova completa → writing → listening e speaking → ripasso errori). Spunta le attività man mano.</p>
  ${days.map((d, i) => dayHtml(d, i, false)).join('')}`;
  bindPlan();
};

V.esame = function () { main.innerHTML = '<h1>Com\'è fatto l\'esame</h1>' + C.exam; };

V.teoria = function () {
  const order = []; GROUPS.th.forEach(t => { if (!order.includes(t.group)) order.push(t.group); });
  main.innerHTML = `<h1>Teoria e grammatica</h1>
  <p>Il manuale completo: ogni capitolo ha la spiegazione con regole, tabelle ed elenchi da sapere, gli errori tipici, e alla fine gli esercizi. Studia il capitolo, poi fai gli esercizi finché non arrivi almeno al 75%.</p>
  <ol class="toc">${GROUPS.th.concat(GROUPS.g).map(t => `<li><a href="#t/${t.id}">${esc(t.title)}</a></li>`).join('')}</ol>
  ${order.map(g => `<h2>${esc(g)}</h2>${taskCards(GROUPS.th.filter(t => t.group === g))}`).join('')}
  <h2>Strutture avanzate da C1</h2><p class="muted">Le strutture che distinguono un C1 da un B2 e che escono sempre nelle key word transformations.</p>${taskCards(GROUPS.g)}`;
};
V.grammatica = V.teoria;
const practiceLinks = (title, arr) => `<h2>${title}</h2><div class="links">${arr.map(l => `<a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])} ↗</a>`).join('')}</div>`;

function partList(title, intro, parts, src, extra) {
  main.innerHTML = `<h1>${title}</h1><p>${intro}</p>` + (extra || '') + parts.map(p => `<h2>${PART[p][0]}</h2><p class="muted">${PART[p][1]}</p><details class="tip"><summary>Strategia</summary><p>${PART[p][2]}</p></details>${taskCards(src[p])}`).join('');
}
V.uoe = () => partList('Use of English', 'Le prime quattro parti della prova di Reading & Use of English. Gli esercizi già usati nelle <a href="#sim">simulazioni</a> conviene farli lì la prima volta.', ['p1', 'p2', 'p3', 'p4'], C.uoe, practiceLinks('Altri esercizi sui siti dedicati', C.practice.uoe) + practiceLinks('Test completi di Reading & Use of English (EngExam)', C.practice.ruoeTests));
V.reading = () => partList('Reading', 'Parts 5–8. Le parti 5, 6 e 7 valgono 2 punti a domanda. I testi di questo sito sono un po\' più brevi di quelli reali: per allenare la resistenza usa anche i test completi in <a href="#risorse">Risorse</a>.', ['p5', 'p6', 'p7', 'p8'], C.reading, practiceLinks('Altri esercizi sui siti dedicati', C.practice.reading) + practiceLinks('Test completi di Reading & Use of English (EngExam)', C.practice.ruoeTests));
V.listening = function () {
  main.innerHTML = `<h1>Listening</h1>
  <p>Quattro esercizi, uno per ogni parte dell'esame. L'audio è letto dalla <b>voce sintetica del tuo browser</b>: va bene per allenare il metodo, ma per abituarti a voci e accenti veri fai anche i listening di EngExam (in <a href="#risorse">Risorse</a>).</p>
  <details class="tip"><summary>Strategia</summary><p>${LTIPS}</p></details>${taskCards(GROUPS.listen)}
  ${practiceLinks('Listening completi con audio reale (EngExam)', C.practice.listeningTests)}${practiceLinks('Altri siti per l\'ascolto', C.practice.listening)}`;
};

V.t = function (id) {
  const t = REG[id];
  if (!t) { main.innerHTML = '<h1>Esercizio non trovato</h1><p><a href="#home">Torna alla home</a></p>'; return; }
  const tip = t.kind ? PART[t.kind][2] : t.script ? LTIPS : '';
  main.innerHTML = `<a class="back" href="#${t.back}">← ${t.backLabel}</a>
  <h1>${esc(t.title)}</h1>
  ${t.kind ? `<p class="muted">${PART[t.kind][0]} — ${PART[t.kind][1]}</p>` : ''}
  ${tip ? `<details class="tip"><summary>Strategia</summary><p>${tip}</p></details>` : ''}
  ${t.html ? `<div class="explain">${t.html}</div><h2>Esercizi</h2>` : ''}
  ${t.script ? `<div class="panel"><div class="bar" style="margin:0"><button class="btn primary" id="play">▶ Ascolta</button><button class="btn" id="stop">■ Stop</button><label class="small">Velocità <select id="rate" class="in"><option value="0.85">lenta</option><option value="1" selected>normale</option><option value="1.1">veloce</option></select></label><span id="pst" class="muted small"></span></div>${TTS.ok ? '' : '<p class="note">Questo browser non supporta la sintesi vocale: apri la trascrizione qui sotto e leggila.</p>'}</div>` : ''}
  <div id="task"></div>
  <div class="bar"><button id="chk" class="btn primary">Controlla</button><button id="rst" class="btn">Ricomincia</button><span id="res"></span></div>
  ${t.script ? `<details class="tip"><summary>Trascrizione (aprila solo dopo aver controllato)</summary>${t.script.map(l => `<p>${l[0] === 'N' ? '<i>' + esc(l[1]) + '</i>' : '<b>' + l[0][0] + ':</b> ' + esc(l[1])}</p>`).join('')}</details>` : ''}`;
  let api = renderTask(t, $('#task'));
  $('#chk').onclick = () => { const r = api.check(); $('#res').textContent = `Punteggio: ${r.s}/${r.m} (${Math.round(100 * r.s / r.m)}%)`; };
  $('#rst').onclick = () => { api = renderTask(t, $('#task')); $('#res').textContent = ''; };
  if (t.script) {
    let n = 0;
    $('#play').onclick = () => { n++; $('#pst').textContent = `Ascolto n. ${n}${n > 2 ? ' (all\'esame sono solo due)' : ''}…`; TTS.play(t.script, +$('#rate').value, () => { $('#pst').textContent = `Fine dell'ascolto n. ${n}.`; }); };
    $('#stop').onclick = () => { TTS.stop(); $('#pst').textContent = ''; };
  }
};

V.lessico = function (id, mode) {
  if (!id) {
    main.innerHTML = `<h1>Parole C1 e modi di dire</h1><p>Le parole per passare da B2 a C1, la lista Oxford 5000 di livello C1, i modi di dire spiegati e altro lessico utile. Ogni mazzo ha tre modalità: <b>lista</b> da studiare, <b>schede</b> (giri la carta e dici se la sai) e <b>quiz</b> a scelta multipla. Per usarle davvero: scrivi una frase tua con ogni espressione nuova.</p>
    ${[...new Set(C.vocab.map(d => d.group))].map(g => `<h2>${esc(g)}</h2><div class="grid">${C.vocab.filter(d => d.group === g).map(d => { const k = d.cards.filter((_, i) => S.cards[d.id + ':' + i]).length; return `<a class="card" href="#lessico/${d.id}"><h3>${esc(d.title)}</h3><p>${esc(d.sum)}</p><div class="meter"><i style="width:${100 * k / d.cards.length}%"></i></div><p>${k}/${d.cards.length} ${tagBadge(d.tag)}</p></a>`; }).join('')}</div>`).join('')}`;
    return;
  }
  const d = C.vocab.find(x => x.id === id); if (!d) return V.lessico();
  const rich = d.cards.some(c => c[3]);
  mode = mode || 'lista';
  main.innerHTML = `<a class="back" href="#lessico">← Lessico</a><h1>${esc(d.title)}</h1><p class="muted">${esc(d.sum)}</p>
  <div class="tabs">${['lista', 'schede', 'quiz'].map(m => `<a href="#lessico/${id}/${m}" class="${m === mode ? 'on' : ''}">${m[0].toUpperCase() + m.slice(1)}</a>`).join('')}</div><div id="deck"></div>`;
  const host = $('#deck');
  if (mode === 'lista') {
    if (rich) host.innerHTML = d.cards.map(c => `<div class="idiom"><h4>${esc(c[0])}</h4><p><b>Significato:</b> ${esc(c[1])}</p>${c[3] ? `<p class="use"><b>Come si usa:</b> ${esc(c[3])}</p>` : ''}<p class="ex">“${esc(c[2])}”</p>${c[4] ? `<p class="ex">“${esc(c[4])}”</p>` : ''}</div>`).join('');
    else host.innerHTML = `<table class="tbl"><tr><th>Espressione</th><th>Significato</th><th>Esempio / nota</th></tr>${d.cards.map(c => `<tr><td><b>${esc(c[0])}</b></td><td>${esc(c[1])}</td><td class="muted">${esc(c[2] || '')}</td></tr>`).join('')}</table>`;
  } else if (mode === 'quiz') {
    const meanings = [...new Set(d.cards.map(c => c[1]))];
    const items = shuffle(d.cards).slice(0, 10).map(c => mc(c[0], [c[1]].concat(shuffle(meanings.filter(m => m !== c[1])).slice(0, 3))));
    const task = { id: 'quiz-' + id, items, noErr: true };
    host.innerHTML = '<div id="qz"></div><div class="bar"><button class="btn primary" id="chk">Controlla</button><a class="btn" id="again">Altre 10</a><span id="res"></span></div>';
    const api = renderTask(task, $('#qz'));
    $('#chk').onclick = () => { const r = api.check(); $('#res').textContent = `${r.s}/${r.m}`; };
    $('#again').onclick = () => V.lessico(id, 'quiz');
  } else {
    let queue = shuffle(d.cards.map((_, i) => i).filter(i => !S.cards[id + ':' + i]));
    const all = !queue.length; if (all) queue = shuffle(d.cards.map((_, i) => i));
    let pos = 0, flipped = false;
    const draw = () => {
      if (pos >= queue.length) { host.innerHTML = `<div class="panel"><p><b>Mazzo finito.</b> Carte che sai: ${d.cards.filter((_, i) => S.cards[id + ':' + i]).length}/${d.cards.length}.</p><a class="btn primary" href="#lessico/${id}/quiz">Fai il quiz</a> <button class="btn" id="re">Ricomincia</button></div>`; $('#re').onclick = () => V.lessico(id, 'schede'); return; }
      const c = d.cards[queue[pos]];
      host.innerHTML = `<p class="muted small">${all ? 'Le sai già tutte: ripasso completo. ' : ''}Carta ${pos + 1} di ${queue.length} — clicca la carta per girarla</p>
      <div class="flash" id="fc"><div class="term">${esc(c[0])}</div>${flipped ? `<div class="mean">${esc(c[1])}</div><div class="ex">${esc(c[2] || '')}</div>${c[3] ? `<div class="small muted" style="margin-top:8px">${esc(c[3])}</div>` : ''}${c[4] ? `<div class="ex">${esc(c[4])}</div>` : ''}` : ''}</div>
      <div class="bar">${flipped ? '<button class="btn" id="no">Da ripassare</button><button class="btn primary" id="yes">La so ✓</button>' : '<button class="btn primary" id="flip">Gira</button>'}</div>`;
      const flip = () => { flipped = true; draw(); };
      $('#fc').onclick = flip;
      if (!flipped) $('#flip').onclick = flip;
      else {
        $('#yes').onclick = () => { S.cards[id + ':' + queue[pos]] = 1; save(); pos++; flipped = false; draw(); };
        $('#no').onclick = () => { delete S.cards[id + ':' + queue[pos]]; save(); queue.push(queue[pos]); pos++; flipped = false; draw(); };
      }
    };
    draw();
  }
};

V.writing = function (id) {
  const Wd = C.writing;
  if (!id) {
    main.innerHTML = `<h1>Writing</h1>${Wd.criteria}
    <h2>Tipi di testo</h2><div class="grid">${Wd.types.map(t => `<a class="card" href="#writing/${t.id}"><h3>${esc(t.title)}</h3><p>${esc(t.sum)}</p></a>`).join('')}</div>
    ${practiceLinks('Guide ed esempi sui siti dedicati', C.practice.writing)}
    <div class="note">Il sito non può dare un voto ai tuoi testi. Nell'editor trovi il pulsante <b>"Copia per la correzione"</b>: incolla il testo in una chat con Claude (o mandalo a un insegnante) per avere una valutazione sui quattro criteri Cambridge.</div>`;
    return;
  }
  const t = Wd.types.find(x => x.id === id); if (!t) return V.writing();
  main.innerHTML = `<a class="back" href="#writing">← Writing</a><h1>${esc(t.title)}</h1><div class="explain">${t.guide}</div>
  <h2>Frasi utili</h2>${t.phrases.map(p => `<h3>${esc(p[0])}</h3><ul class="phr">${p[1].map(x => `<li>${esc(x)}</li>`).join('')}</ul>`).join('')}
  <h2>Tracce</h2>${t.prompts.map((p, i) => `<div class="panel"><p>${p}</p><a class="btn primary" href="#scrivi/${t.id}/${i}">Scrivi (45 min)</a> ${S.drafts[t.id + '-' + i] ? '<span class="badge ok">bozza salvata</span>' : ''}</div>`).join('')}
  <h2>Model answer</h2><details class="tip"><summary>Mostra il modello — ${esc(t.model.task)}</summary><div class="model">${esc(t.model.text)}</div></details>`;
};

const CHECKLIST = ['Ho risposto a TUTTI i punti della traccia', 'Sono tra 220 e 260 parole', 'Formato giusto (titoletti per report/proposal, saluti per la lettera, titolo per la review)', 'Registro coerente dall\'inizio alla fine', 'Almeno un\'inversione o una cleft sentence', 'Almeno una participle clause o un condizionale avanzato', 'Linkers vari (non solo "but", "and", "so")', 'Nessun "nice / good / bad / very / a lot of"', 'Verb patterns controllati (recommend + -ing, despite + -ing…)', 'Riletto per spelling, -s della terza persona, articoli'];
V.scrivi = function (type, n) {
  const t = C.writing.types.find(x => x.id === type), p = t && t.prompts[+n];
  if (!p) return V.writing();
  const key = type + '-' + n;
  main.innerHTML = `<a class="back" href="#writing/${type}">← ${esc(t.title)}</a><h1>Scrivi: ${esc(t.title)}</h1>
  <div class="panel"><p>${p}</p><p class="muted small">Scrivi 220–260 parole.</p></div>
  <div class="sticky"><span class="clock" id="clock"></span><button class="btn primary" id="go">Avvia timer</button><button class="btn" id="pause">Pausa</button><span id="wc" class="badge"></span></div>
  <textarea id="txt" spellcheck="false" placeholder="Scrivi qui il tuo testo…">${esc(S.drafts[key] || '')}</textarea>
  <div class="bar"><button class="btn" id="copy">Copia per la correzione</button><span id="msg" class="muted small"></span></div>
  <h2>Checklist prima di consegnare</h2><div class="panel">${CHECKLIST.map(c => `<label style="display:block"><input type="checkbox"> ${esc(c)}</label>`).join('')}</div>
  <details class="tip"><summary>Frasi utili</summary>${t.phrases.map(x => `<p><b>${esc(x[0])}:</b> ${x[1].map(esc).join(' · ')}</p>`).join('')}</details>`;
  const tm = timer($('#clock'), 45 * 60, () => { $('#msg').textContent = 'Tempo scaduto: rileggi e chiudi.'; });
  $('#go').onclick = () => tm.start(); $('#pause').onclick = () => tm.stop();
  const txt = $('#txt'), wc = $('#wc');
  const count = () => { const w = (txt.value.trim().match(/\S+/g) || []).length; wc.textContent = w + ' parole'; wc.className = 'badge ' + (w >= 220 && w <= 260 ? 'ok' : w > 260 ? 'low' : w >= 180 ? 'mid' : ''); S.drafts[key] = txt.value; if (!txt.value) delete S.drafts[key]; save(); };
  txt.oninput = count; count();
  $('#copy').onclick = () => {
    const out = `Please assess this Cambridge C1 Advanced ${t.title} using the four official criteria (Content, Communicative Achievement, Organisation, Language), give a mark out of 5 for each, list my mistakes with corrections, and show me how to upgrade B2 phrases to C1. Rispondi in italiano.\n\nTASK: ${p.replace(/<[^>]+>/g, '')}\n\nMY ANSWER:\n${txt.value}`;
    const done = () => { $('#msg').textContent = 'Copiato: incollalo in una chat con Claude o mandalo a un insegnante.'; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(out).then(done, () => { txt.select(); document.execCommand('copy'); done(); });
    else { txt.select(); document.execCommand('copy'); done(); }
  };
};

V.speaking = function () {
  const Sp = C.speaking;
  main.innerHTML = `<h1>Speaking</h1>${Sp.info}` + Sp.parts.map((p, i) => `<h2>${esc(p.title)}</h2><p class="muted">${p.info}</p>
  <div class="panel"><div id="sq${i}" style="min-height:3em">Premi "Nuova domanda".</div><div class="bar" style="margin-bottom:0"><button class="btn primary" data-new="${i}">Nuova domanda</button><button class="btn" data-go="${i}">Avvia timer</button><span class="clock" id="sc${i}"></span></div></div>`).join('') +
  `<h2>Frasi utili</h2>${Sp.phrases.map(p => `<h3>${esc(p[0])}</h3><ul class="phr">${p[1].map(x => `<li>${esc(x)}</li>`).join('')}</ul>`).join('')}${practiceLinks('Domande ed esempi sui siti dedicati', C.practice.speaking)}`;
  Sp.parts.forEach((p, i) => {
    let order = shuffle(p.sets), k = 0;
    const tm = timer($('#sc' + i), p.time, () => { $('#sc' + i).textContent = 'Tempo!'; });
    $(`[data-new="${i}"]`).onclick = () => { $('#sq' + i).innerHTML = order[k % order.length]; k++; tm.reset(); };
    $(`[data-go="${i}"]`).onclick = () => { tm.reset(); tm.start(); };
  });
};

function band(p) { return p >= 88 ? 'Grade A (livello C2)' : p >= 75 ? 'Grade B — C1 superato bene' : p >= 60 ? 'Grade C — C1 superato' : p >= 45 ? 'Livello B2: non basta ancora per il C1' : 'Sotto il livello B2'; }
V.sim = function (n) {
  const sim = C.sims[n - 1];
  if (!sim) {
    main.innerHTML = `<h1>Simulazioni d'esame</h1>
    <p>Prova completa di <b>Reading & Use of English</b>: 8 parti, 56 domande, <b>90 minuti</b>, punteggio calcolato come all'esame (78 punti). Falla in un'unica seduta, senza dizionario e senza pause.</p>
    <div class="grid">${C.sims.map((s, i) => `<a class="card" href="#sim/${i + 1}"><h3>${esc(s.title)} ${badge('sim-' + (i + 1))}</h3><p>${S.scores['sim-' + (i + 1)] ? band(100 * S.scores['sim-' + (i + 1)].s / S.scores['sim-' + (i + 1)].m) : '90 minuti · 8 parti'}</p></a>`).join('')}</div>
    <h2>Altre prove complete sui siti dedicati</h2>
    <p>Quando hai finito queste due, continua con i test completi di EngExam: si fanno online, con soluzioni e spiegazioni. Falli sempre cronometrati (90 minuti il Reading & UoE, 40 il Listening).</p>
    ${practiceLinks('Reading & Use of English – test completi', C.practice.ruoeTests)}${practiceLinks('Listening – test completi con audio', C.practice.listeningTests)}${practiceLinks('Altri siti', C.practice.reading)}
    <table class="tbl"><tr><th>Simulazione completa di una giornata d'esame</th><th>Tempo</th></tr>
    <tr><td><a href="#sim/1">Reading & Use of English</a></td><td>90 min</td></tr>
    <tr><td><a href="#writing">Writing</a>: un essay + un testo a scelta</td><td>90 min</td></tr>
    <tr><td><a href="#listening">Listening</a>: le quattro parti di fila (o un test EngExam)</td><td>40 min</td></tr>
    <tr><td><a href="#speaking">Speaking</a>: le quattro parti con timer</td><td>15 min</td></tr></table>`;
    return;
  }
  main.innerHTML = `<a class="back" href="#sim">← Simulazioni</a><h1>${esc(sim.title)}</h1>
  <div class="panel"><p>Hai <b>90 minuti</b> per 8 parti. Il timer parte quando premi il pulsante e alla fine la prova viene consegnata da sola. Tempi consigliati: Parts 1–3 circa 8 minuti l'una, Part 4 dieci minuti, Parts 5–8 circa 13 minuti l'una.</p><button class="btn primary" id="start">Inizia la simulazione</button></div>`;
  $('#start').onclick = () => {
    main.innerHTML = `<div class="sticky"><b>${esc(sim.title)}</b><span class="clock" id="clock"></span><button id="done" class="btn primary">Consegna</button></div><div id="simres"></div>` +
      sim.tasks.map((id, k) => { const t = REG[id]; return `<section class="simpart"><h2>${PART[t.kind][0]}</h2><p class="muted">${PART[t.kind][1]}</p><h3>${esc(t.title)}</h3><div id="s${k}"></div></section>`; }).join('');
    const apis = sim.tasks.map((id, k) => renderTask(REG[id], $('#s' + k)));
    let finished = false;
    const finish = () => {
      if (finished) return; finished = true; tm.stop();
      let s = 0, m = 0;
      const rows = apis.map((a, k) => { const r = a.check(); s += r.s; m += r.m; return `<tr><td>${PART[REG[sim.tasks[k]].kind][0]}</td><td>${r.s}/${r.m}</td></tr>`; });
      S.scores['sim-' + n] = { s, m, d: today() }; save();
      const p = Math.round(100 * s / m);
      $('#simres').innerHTML = `<div class="panel"><div class="big">${s}/${m} <span class="small muted">= ${p}%</span></div><p><b>${band(p)}</b> <span class="muted small">(stima: la soglia per il C1 è intorno al 60%)</span></p><table class="tbl"><tr><th>Parte</th><th>Punti</th></tr>${rows.join('')}</table><p>Scorri in basso per vedere le correzioni. Gli errori sono già nel <a href="#errori">quaderno degli errori</a>.</p></div>`;
      $('#done').remove(); window.scrollTo(0, 0);
    };
    const tm = timer($('#clock'), 90 * 60, finish);
    tm.start();
    $('#done').onclick = () => { if (confirm('Consegnare la prova adesso?')) finish(); };
    window.scrollTo(0, 0);
  };
};

function context(task, i) {
  const it = task.items[i];
  if (it.t === 'kwt') return `${esc(it.s)} <span class="key">${esc(it.k)}</span> ${esc(it.g)}`;
  if (it.q) return esc(it.q) + (it.hint ? ` <span class="hint">${esc(it.hint)}</span>` : '');
  if (task.text) {
    const flat = task.text.replace(/\s+/g, ' ');
    const sen = (flat.match(/[^.!?]+[.!?]+/g) || [flat]).find(x => x.includes('{' + (i + 1) + '}')) || '';
    return esc(sen.trim().replace('{' + (i + 1) + '}', '___').replace(/\{\d+\}/g, '[…]')) + (it.hint ? ` <span class="hint">${esc(it.hint)}</span>` : '');
  }
  return '';
}
V.errori = function () {
  const keys = Object.keys(S.errors).filter(k => { const [id, i] = k.split(':'); return REG[id] && REG[id].items[+i]; });
  if (!keys.length) { main.innerHTML = '<h1>Quaderno degli errori</h1><div class="panel"><p>Nessun errore da ripassare. Ogni risposta sbagliata negli esercizi finisce qui da sola, e sparisce quando la rifai giusta.</p></div>'; return; }
  const by = {}; keys.forEach(k => { const id = k.split(':')[0]; (by[id] = by[id] || []).push(k); });
  const quick = keys.filter(k => REG[k.split(':')[0]].alone);
  main.innerHTML = `<h1>Quaderno degli errori</h1><p>${keys.length} risposte da ripassare. Spariscono quando le rifai giuste.</p>
  ${quick.length ? `<div class="panel"><h3>Ripasso rapido</h3><p class="muted small">${quick.length} frasi di grammatica e key word transformations sbagliate, in ordine casuale.</p><div id="quick"></div><div class="bar"><button class="btn primary" id="qgo">Inizia il ripasso</button><span id="res"></span></div></div>` : ''}
  <h2>Tutti gli errori</h2>` + Object.keys(by).map(id => { const t = REG[id]; return `<div class="sec"><h4>${esc(t.title)} <a class="small" href="#t/${id}">rifai l'esercizio →</a></h4>${by[id].map(k => { const i = +k.split(':')[1]; return `<p>${context(t, i) || 'Domanda ' + (i + 1)}<br><span class="v">→ ${esc(answerText(t.items[i]))}</span>${t.items[i].why ? ` <span class="muted small">— ${esc(t.items[i].why)}</span>` : ''}</p>`; }).join('')}</div>`; }).join('');
  if (quick.length) $('#qgo').onclick = () => {
    const ks = shuffle(quick).slice(0, 12);
    const task = { id: 'ripasso', noSave: true, map: ks, items: ks.map(k => { const [id, i] = k.split(':'); return REG[id].items[+i]; }) };
    const api = renderTask(task, $('#quick'));
    const b = $('#qgo'); b.textContent = 'Controlla';
    b.onclick = () => { const r = api.check(); $('#res').textContent = `${r.s}/${r.m}`; b.textContent = 'Aggiorna il quaderno'; b.onclick = () => V.errori(); };
  };
};

V.risorse = function () {
  main.innerHTML = `<h1>Risorse utili</h1><p>Link utili per prepararsi, ordinati per uso. Quelli in cima sono le prove d'esame complete: sono il complemento naturale di questo sito.</p>` +
    C.resources.map(g => `<h2>${esc(g[0])}</h2><div class="grid">${g[1].map(r => `<a class="card" href="${r[1]}" target="_blank" rel="noopener"><h3>${esc(r[0])} ↗</h3>${r[2] ? `<p>${esc(r[2])}</p>` : ''}</a>`).join('')}</div>`).join('');
};

//  navigazione 
const NAV = [['home', 'Home'], ['esame', 'L\'esame'], null, ['teoria', 'Teoria e grammatica'], ['lessico', 'Parole C1 e idioms'], null, ['uoe', 'Use of English'], ['reading', 'Reading'], ['listening', 'Listening'], ['writing', 'Writing'], ['speaking', 'Speaking'], null, ['sim', 'Simulazioni'], ['errori', 'Quaderno errori'], ['piano', 'Piano di studio'], ['risorse', 'Risorse']];
$('#navlinks').innerHTML = NAV.map(n => n ? `<a href="#${n[0]}" data-r="${n[0]}">${n[1]}</a>` : '<div class="sep"></div>').join('');
function route() {
  live.forEach(t => t.stop()); live = []; TTS.stop();
  const [r, a, b] = decodeURIComponent(location.hash.slice(1) || 'home').split('/');
  (V[r] || V.home)(a, b);
  const sect = r === 't' ? (REG[a] ? REG[a].back : '') : r === 'scrivi' ? 'writing' : r === 'grammatica' ? 'teoria' : r;
  $$('#navlinks a').forEach(x => x.classList.toggle('on', x.dataset.r === sect));
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
route();
})();
