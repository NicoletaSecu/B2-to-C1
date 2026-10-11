// FORMATO ESAME, PIANO DI STUDIO, RISORSE DELLA DOCENTE
C1.exam = `
<p>Il <b>C1 Advanced (CAE)</b> ha quattro prove. Il voto finale è la media di <b>cinque</b> punteggi (Reading, Use of English, Writing, Listening, Speaking), ognuno vale il 20%: <b>puoi compensare una prova debole con le altre</b>.</p>
<table class="tbl">
<tr><th>Prova</th><th>Durata</th><th>Struttura</th></tr>
<tr><td><b>Reading &amp; Use of English</b></td><td>90 min</td><td>8 parti, 56 domande (vedi sotto)</td></tr>
<tr><td><b>Writing</b></td><td>90 min</td><td>Part 1: essay obbligatorio · Part 2: uno a scelta tra proposal, report, review, letter/email. 220–260 parole ciascuno.</td></tr>
<tr><td><b>Listening</b></td><td>circa 40 min</td><td>4 parti, 30 domande. Ogni registrazione si sente due volte.</td></tr>
<tr><td><b>Speaking</b></td><td>15 min</td><td>4 parti, in coppia con un altro candidato.</td></tr>
</table>
<h2>Reading &amp; Use of English: le 8 parti</h2>
<table class="tbl">
<tr><th>Part</th><th>Compito</th><th>Domande</th><th>Punti</th><th>Tempo consigliato</th></tr>
<tr><td>1</td><td>Multiple-choice cloze (lessico, collocazioni)</td><td>8</td><td>1 ciascuna</td><td>8 min</td></tr>
<tr><td>2</td><td>Open cloze (grammatica: preposizioni, articoli, linkers)</td><td>8</td><td>1</td><td>8 min</td></tr>
<tr><td>3</td><td>Word formation</td><td>8</td><td>1</td><td>8 min</td></tr>
<tr><td>4</td><td>Key word transformations (3–6 parole)</td><td>6</td><td>fino a 2</td><td>10 min</td></tr>
<tr><td>5</td><td>Testo lungo + scelta multipla</td><td>6</td><td>2</td><td>13 min</td></tr>
<tr><td>6</td><td>Cross-text: quattro testi brevi, confronto di opinioni</td><td>4</td><td>2</td><td>12 min</td></tr>
<tr><td>7</td><td>Gapped text: paragrafi da reinserire</td><td>6</td><td>2</td><td>13 min</td></tr>
<tr><td>8</td><td>Multiple matching</td><td>10</td><td>1</td><td>13 min</td></tr>
</table>
<p class="muted small">Restano circa 5 minuti per ricontrollare e riportare le risposte.</p>
<h2>Listening: le 4 parti</h2>
<table class="tbl">
<tr><th>Part</th><th>Compito</th><th>Domande</th></tr>
<tr><td>1</td><td>Tre brevi dialoghi, 2 domande a scelta multipla (3 opzioni) ciascuno</td><td>6</td></tr>
<tr><td>2</td><td>Monologo: completare frasi con una parola o breve espressione</td><td>8</td></tr>
<tr><td>3</td><td>Intervista: scelta multipla (4 opzioni)</td><td>6</td></tr>
<tr><td>4</td><td>Cinque monologhi brevi, due compiti di abbinamento contemporanei</td><td>10</td></tr>
</table>
<h2>Punteggio (Cambridge English Scale)</h2>
<table class="tbl">
<tr><th>Scala</th><th>Risultato</th></tr>
<tr><td>200–210</td><td>Grade A: certificato di livello C2</td></tr>
<tr><td>193–199</td><td>Grade B: C1</td></tr>
<tr><td><b>180–192</b></td><td><b>Grade C: C1 — è la soglia per passare</b></td></tr>
<tr><td>160–179</td><td>Non superato, ma ricevi un certificato di livello B2</td></tr>
</table>
<p>Come riferimento pratico: per arrivare a 180 serve all'incirca il <b>60% delle risposte giuste</b> in ogni prova. È una stima: la conversione esatta cambia leggermente a ogni sessione.</p>
<h2>Dove si vincono i punti in poco tempo</h2>
<ul>
<li><b>Part 4 (key word transformations)</b>: poche strutture che tornano sempre (inversioni, wish, passivo impersonale, modali al passato, phrasal verbs). Si allena in fretta e vale 12 punti.</li>
<li><b>Part 3 (word formation)</b>: prefissi negativi e suffissi. Controlla sempre: serve un plurale? un negativo? un avverbio?</li>
<li><b>Writing</b>: impara le strutture dei cinque tipi di testo e una decina di frasi per ciascuno. Rispetta le 220–260 parole e rispondi a tutti i punti della traccia.</li>
<li><b>Reading Parts 5–7</b>: valgono doppio. Non bruciare tutto il tempo sulle prime quattro parti.</li>
</ul>`;

// Piano: 14 giorni fino al mock, poi un ciclo fino all'esame. [titolo, [[attività, link]]]
C1.plan = [
['Giorno 1 – Capire l\'esame e partire', [['Leggi il formato dell\'esame', '#esame'], ['Grammatica: Inversion', '#t/g-inversion'], ['Lessico: espressioni con TAKE', '#lessico/take'], ['Part 4 – Set C', '#t/p4-c']]],
['Giorno 2 – Test diagnostico', [['Simulazione 1 completa (90 minuti, senza interruzioni)', '#sim/1'], ['Rivedi ogni errore nel quaderno degli errori', '#errori']]],
['Giorno 3 – Enfasi e condizionali', [['Grammatica: Cleft sentences', '#t/g-cleft'], ['Grammatica: Conditionals avanzati', '#t/g-conditionals'], ['Lessico: phrasal verbs con COME', '#lessico/come'], ['Part 1 – The price of popularity', '#t/p1-c'], ['Writing: guida all\'essay + il tuo essay corretto', '#writing/miei']]],
['Giorno 4 – Wish + primo essay', [['Grammatica: Wish / would rather', '#t/g-wish'], ['Lessico: idioms', '#lessico/idioms'], ['Part 4 – Set D', '#t/p4-d'], ['Listening Part 1', '#t/l-1'], ['Scrivi un essay in 45 minuti (traccia 2)', '#scrivi/essay/1']]],
['Giorno 5 – Participi e concessive', [['Grammatica: Participle clauses', '#t/g-participle'], ['Grammatica: Contrast & concession', '#t/g-concession'], ['Lessico: collocations', '#lessico/colloc'], ['Part 2 – A town reborn', '#t/p2-c'], ['Speaking: Part 1 e Part 2 con timer', '#speaking']]],
['Giorno 6 – Passivo e modali', [['Grammatica: Passivo avanzato', '#t/g-passive'], ['Grammatica: Modali', '#t/g-modals'], ['Lessico: phrasal verbs essenziali', '#lessico/phrasal'], ['Part 4 – Set E', '#t/p4-e'], ['Listening Part 2', '#t/l-2'], ['Writing: guida al proposal + il tuo proposal corretto', '#writing/miei']]],
['Giorno 7 – Prova completa esterna', [['Un Reading & UoE completo su EngExam (Test 1), cronometrato', 'https://engexam.info/cae-reading-and-use-of-english-practice-tests/'], ['Scrivi un proposal in 45 minuti', '#scrivi/proposal/1'], ['Quaderno degli errori', '#errori']]],
['Giorno 8 – Verb patterns e word formation', [['Grammatica: Reporting verbs e verb patterns', '#t/g-reporting'], ['Lessico: prefissi negativi', '#lessico/prefixes'], ['Lessico: word families', '#lessico/families'], ['Part 3 – Lost in translation', '#t/p3-c'], ['Listening Part 3', '#t/l-3']]],
['Giorno 9 – Used to, futuro, preposizioni', [['Grammatica: Used to / be used to', '#t/g-usedto'], ['Grammatica: Futuro e time clauses', '#t/g-future'], ['Lessico: preposizioni dipendenti', '#lessico/preps'], ['Part 4 – Set F', '#t/p4-f'], ['Speaking: Part 3 e Part 4', '#speaking'], ['Un Listening completo su EngExam (Test 1)', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-1/']]],
['Giorno 10 – Rifiniture di grammatica + writing', [['Grammatica: So / neither / nor', '#t/g-soneither'], ['Grammatica: Comparativi', '#t/g-comparatives'], ['Grammatica: Comment adverbs', '#t/g-adverbs'], ['Lessico: linkers e frasi da essay', '#lessico/linkers'], ['Part 4 – Set G', '#t/p4-g'], ['Scrivi un report o una review in 45 minuti', '#writing']]],
['Giorno 11 – Prova completa esterna', [['Reading & UoE Test 11 su EngExam (condiviso dalla docente)', 'https://engexam.info/cae-reading-and-use-of-english-practice-tests/cae-reading-and-use-of-english-practice-test-11/'], ['Listening Part 4', '#t/l-4'], ['Lessico: formale vs informale', '#lessico/register']]],
['Giorno 12 – Seconda simulazione', [['Simulazione 2 completa (90 minuti)', '#sim/2'], ['Quaderno degli errori', '#errori'], ['Scrivi una lettera informale in 45 minuti', '#scrivi/letter/0']]],
['Giorno 13 – Ripasso mirato', [['Ripasso rapido di tutti gli errori', '#errori'], ['Part 4 – Set H', '#t/p4-h'], ['Rifai gli argomenti di grammatica sotto il 70%', '#grammatica'], ['Un Listening completo su EngExam (Test 10)', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-10/'], ['Speaking: tutte e quattro le parti di fila, registrandoti', '#speaking']]],
['Giorno 14 – Vigilia del mock', [['Flashcard: solo le carte "da ripassare"', '#lessico'], ['Rileggi i model answer di essay e proposal', '#writing'], ['Rileggi il formato e i tempi per parte', '#esame'], ['Stop entro sera: dormi bene, domani c\'è il mock', '#home']]],
];
// Dopo il mock: ciclo di 4 giorni ripetuto fino all'esame
C1.planCycle = [
['Prova completa', [['Un Reading & UoE completo su EngExam, cronometrato (test successivo)', 'https://engexam.info/cae-reading-and-use-of-english-practice-tests/'], ['Segna gli errori e ripassa le strutture corrispondenti', '#grammatica']]],
['Writing + lessico', [['Scrivi un testo in 45 minuti (alterna i cinque tipi)', '#writing'], ['Flashcard: due mazzi, modalità quiz', '#lessico'], ['Un set di Part 4 da rifare a memoria', '#uoe']]],
['Listening + speaking', [['Un Listening completo su EngExam', 'https://engexam.info/cae-listening-practice-tests/'], ['Speaking: quattro parti con timer, registrandoti', '#speaking'], ['Un episodio di 6 Minute English senza trascrizione', 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english']]],
['Ripasso errori', [['Quaderno degli errori: ripasso rapido', '#errori'], ['Rifai due argomenti di grammatica', '#grammatica'], ['Rifai una simulazione o le sue parti peggiori', '#sim']]],
];

// Link condivisi dalla docente, raggruppati
C1.resources = [
['Prove d\'esame complete (da fare cronometrate)', [
['EngExam – tutti i test CAE', 'https://engexam.info/cae/', 'Indicato dalla docente come "exam practice da usare". Reading & UoE e Listening completi con soluzioni.'],
['EngExam – Reading & UoE Test 11', 'https://engexam.info/cae-reading-and-use-of-english-practice-tests/cae-reading-and-use-of-english-practice-test-11/8/', 'Assegnato a lezione (Part 8).'],
['EngExam – Reading & UoE Test 14', 'https://engexam.info/cae-reading-and-use-of-english-practice-tests/cae-reading-and-use-of-english-practice-test-14/8/', 'Assegnato a lezione (Part 8).'],
['EngExam – Listening Test 1', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-1/', ''],
['EngExam – Listening Test 10, Part 4', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-10/4/', ''],
['EngExam – Listening Test 23, Part 2', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-23/2/', ''],
['EngExam – Listening Test 26, Part 2', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-26/2/', ''],
['EngExam – Listening Test 26, Part 3', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-26/3/', ''],
['EngExam – Listening Test 29, Part 4', 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-29/4/', ''],
['Engxam – Listening 1', 'https://app.engxam.com/cae/listening/1/', ''],
['Virtuaule – Listening Test 3, Part 4', 'https://virtuaule.com/cae-listening-test-3/cae-listening-test-3-part-5.html', ''],
['Exam English – CAE', 'https://www.examenglish.com/CAE/index.php', 'Test brevi per ogni parte.'],
['English Revealed – CAE', 'https://www.englishrevealed.co.uk/cae.php', 'Tantissimi esercizi di Use of English divisi per parte.'],
['ESL Lounge – Advanced', 'https://www.esl-lounge.com/student/advanced.php', ''],
]],
['Grammatica vista a lezione', [
['Test-English – Used to', 'https://test-english.com/grammar-points/b1-b2/used-to/', ''],
['Test-English – First conditional e future time clauses', 'https://test-english.com/grammar-points/b1/first-conditional-future-time-clauses/', ''],
['Test-English – So, neither', 'https://test-english.com/grammar-points/a2/so-neither/', ''],
['Test-English – Cleft sentences', 'https://test-english.com/grammar-points/b2/cleft-sentences/', ''],
]],
['Lessico e word formation', [
['English Revealed – Forming adjectives 1', 'https://www.englishrevealed.co.uk/AV/word_building/forming_adjectives_1.php', ''],
['English Revealed – Forming adjectives 2', 'https://www.englishrevealed.co.uk/AV/word_building/forming_adjectives_2.php', ''],
['ESL Inventory – Phrasal verbs with COME', 'https://esl-inventory.com/phrasal-verbs-with-come/', ''],
['Wordwall – UN vs IN (quiz)', 'https://wordwall.net/resource/116398543', ''],
['Wordwall – Comment adverbs (advanced)', 'https://wordwall.net/resource/37638965', ''],
['Wordwall – C1 tourism essay language', 'https://wordwall.net/resource/115313495', ''],
['Wordwall – C1 informal letter language', 'https://wordwall.net/resource/113906125', ''],
['Liveworksheets – worksheet della lezione', 'https://www.liveworksheets.com/worksheet/en/english-second-language-esl/2140934', ''],
['Video – Difference between in- and un- prefixes', 'https://www.youtube.com/watch?v=PcwzXqpV4aA', ''],
]],
['Ascolto e video', [
['BBC Ideas – What multitasking does to your brain', 'https://www.youtube.com/watch?v=tMiyzuO1qMs', 'Video della lezione sul multitasking.'],
['The Myth of Multitasking exercise', 'https://www.youtube.com/watch?v=5eQyfirx2HA', 'L\'esercizio lettere/numeri.'],
['Scottish Elevator – Voice Recognition', 'https://www.youtube.com/watch?v=NMS2VnDveP8', 'Sketch sugli accenti.'],
['BBC 6 Minute English – How reading shapes your brain', 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english_2026/ep-260514', ''],
['BBC Learning English – corsi', 'https://www.bbc.co.uk/learningenglish/english/hard_course', ''],
['BBC Audio', 'https://www.bbc.com/audio/brand/p07mdbhg', ''],
['ELLLO – C1 lessons', 'https://www.elllo.org/levels/C1-English-Lessons/index.html', 'Ascolti brevi con quiz.'],
['TED-Ed lessons', 'https://ed.ted.com/lessons?sort=featured-position', ''],
['TED in 3 minutes', 'https://www.ted.com/playlists/81/ted_in_3_minutes', ''],
['Thinking in English podcast', 'https://thinkinginenglish.blog/podcasts/thinking-in-english-podcast/', ''],
['AsapSCIENCE (YouTube)', 'https://www.youtube.com/@AsapSCIENCE', ''],
]],
['Lettura', [
['New York Times – articolo letto a lezione', 'https://www.nytimes.com/2026/05/19/us/politics/trump-stock-trades.html', ''],
]],
];

// Capitoli di teoria da studiare, giorno per giorno (indice del giorno, id capitolo)
[[0, 'word-order'], [0, 'tenses'], [2, 'clauses'], [2, 'articles'], [3, 'verb-patterns'], [4, 'linking'], [4, 'nouns'], [5, 'modals-all'], [5, 'adjectives'],
 [7, 'word-formation'], [7, 'reported'], [8, 'prepositions'], [8, 'phrasal-grammar'], [9, 'adverbs-all'], [9, 'collocations'], [10, 'italian-mistakes'], [12, 'italian-mistakes']]
  .forEach(([d, id]) => { const t = C1.theory.find(x => x.id === id); if (t) C1.plan[d][1].unshift(['Teoria: ' + t.title, '#t/th-' + id]); });
[[1, 'up-adj'], [3, 'up-verb'], [5, 'up-other'], [7, 'ox-adv'], [9, 'ox-adj'], [10, 'ox-verb'], [11, 'ox-noun'], [6, 'idioms']]
  .forEach(([d, id]) => { const k = C1.vocab.find(x => x.id === id); if (k) C1.plan[d][1].push(['Parole: ' + k.title, '#lessico/' + id]); });

// Siti dedicati per fare altre prove, sezione per sezione. [etichetta, url]
(function () {
  const R = 'https://engexam.info/cae-reading-and-use-of-english-practice-tests/cae-reading-and-use-of-english-practice-test-';
  const L = 'https://engexam.info/cae-listening-practice-tests/cae-listening-practice-test-';
  const range = (n, f) => Array.from({ length: n }, (_, i) => f(i + 1));
  C1.practice = {
    ruoeTests: range(20, n => ['Test ' + n, R + n + '/']),
    listeningTests: range(30, n => ['Test ' + n, L + n + '/']),
    uoe: [['EngExam – Use of English C1', 'https://engexam.info/cae-use-of-english-c1/'], ['English Revealed – esercizi per ogni parte', 'https://www.englishrevealed.co.uk/cae.php'], ['Flo-Joe – practice tests', 'https://www.flo-joe.co.uk/cae/students/tests/'], ['Exam English – CAE', 'https://www.examenglish.com/CAE/index.php'], ['ESL Lounge – Advanced', 'https://www.esl-lounge.com/student/advanced.php']],
    reading: [['EngExam – tutti i Reading & UoE', 'https://engexam.info/cae-reading-and-use-of-english-practice-tests/'], ['Flo-Joe – practice tests', 'https://www.flo-joe.co.uk/cae/students/tests/'], ['Exam English – CAE', 'https://www.examenglish.com/CAE/index.php'], ['Cambridge – materiali ufficiali', 'https://www.cambridgeenglish.org/exams-and-tests/advanced/preparation/']],
    listening: [['EngExam – tutti i Listening', 'https://engexam.info/cae-listening-practice-tests/'], ['Engxam – Listening', 'https://app.engxam.com/cae/listening/1/'], ['Exam English – CAE', 'https://www.examenglish.com/CAE/index.php'], ['Cambridge – materiali ufficiali', 'https://www.cambridgeenglish.org/exams-and-tests/advanced/preparation/'], ['BBC 6 Minute English', 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english']],
    writing: [['EngExam – CAE Writing (guide ed esempi)', 'https://engexam.info/cae/cae-writing/'], ['Flo-Joe – CAE', 'https://www.flo-joe.co.uk/cae/students/'], ['Cambridge – materiali ufficiali', 'https://www.cambridgeenglish.org/exams-and-tests/advanced/preparation/']],
    speaking: [['EngExam – CAE Speaking (domande ed esempi)', 'https://engexam.info/cae/cae-speaking/'], ['Cambridge – materiali ufficiali e video', 'https://www.cambridgeenglish.org/exams-and-tests/advanced/preparation/']],
  };
})();
