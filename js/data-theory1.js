// MANUALE DI TEORIA – parte 1: la frase e i verbi.
// Ogni capitolo: spiegazione completa (html) + esercizi (items).
C1.theory = [
{
group: 'La frase', id: 'word-order', title: 'Struttura della frase e ordine delle parole',
sum: 'Soggetto–verbo–oggetto, posizione dei complementi, domande dirette e indirette, question tags.',
html: `
<h3>1. L'ordine base</h3>
<p>L'inglese non ha desinenze che dicano chi fa cosa: lo dice <b>la posizione</b>. Per questo l'ordine è rigido.</p>
<table>
<tr><th>Soggetto</th><th>Verbo</th><th>Oggetto</th><th>Modo</th><th>Luogo</th><th>Tempo</th></tr>
<tr><td>She</td><td>read</td><td>the report</td><td>carefully</td><td>in her office</td><td>yesterday.</td></tr>
</table>
<ul>
<li><b>Il soggetto è obbligatorio.</b> <span class="x">Is raining.</span> → <span class="v">It is raining.</span> · <span class="x">Is important to study.</span> → <span class="v">It is important to study.</span></li>
<li><b>Verbo e oggetto non si separano mai.</b> <span class="x">I like very much pizza.</span> → <span class="v">I like pizza very much.</span> · <span class="x">She speaks very well English.</span> → <span class="v">She speaks English very well.</span></li>
<li><b>Luogo prima del tempo.</b> <span class="v">I'll see you at the station at six.</span> Il tempo può andare anche all'inizio: <em>Yesterday, she read…</em></li>
<li><b>Una sola negazione per frase.</b> <span class="x">I didn't see nobody.</span> → <span class="v">I didn't see anybody. / I saw nobody.</span></li>
</ul>
<h3>2. It e There</h3>
<table>
<tr><td><em>There is / are</em></td><td>introduce qualcosa che esiste ("c'è, ci sono")</td><td><em>There are</em> three reasons for this. · <em>There seems to be</em> a problem.</td></tr>
<tr><td><em>It</em> (soggetto "vuoto")</td><td>tempo atmosferico, ora, distanza, giudizi</td><td><em>It</em>'s late. · <em>It</em> is worth trying. · <em>It</em> is said that…</td></tr>
<tr><td><em>It</em> (oggetto anticipato)</td><td>find / make / think + it + aggettivo + to…</td><td>I find <em>it</em> hard <em>to</em> concentrate. · He made <em>it</em> clear <em>that</em> he disagreed.</td></tr>
</table>
<h3>3. Due oggetti: a chi e che cosa</h3>
<p>Con <em>give, send, show, lend, offer, tell, teach, buy</em> ci sono due costruzioni: <em>give <b>me</b> the book</em> = <em>give the book <b>to me</b></em>.</p>
<p>Ma con <b>explain, describe, suggest, say, mention, report, propose, recommend</b> la persona vuole sempre <b>to</b> e va dopo: <span class="x">Explain me the rule.</span> → <span class="v">Explain the rule to me.</span> · <span class="x">He suggested me a book.</span> → <span class="v">He suggested a book to me.</span></p>
<h3>4. Le domande</h3>
<table>
<tr><th>Tipo</th><th>Schema</th><th>Esempio</th></tr>
<tr><td>Normale</td><td>(Wh-) + ausiliare + soggetto + verbo</td><td>Where <em>does she work</em>? · <em>Have you finished</em>?</td></tr>
<tr><td>Domanda sul soggetto</td><td>Who / What + verbo (senza do)</td><td><em>Who called</em> you? (ma: Who <em>did you call</em>?)</td></tr>
<tr><td>Con preposizione</td><td>la preposizione va in fondo</td><td>What are you looking <em>at</em>? · Who did you go <em>with</em>?</td></tr>
<tr><td>Negativa</td><td>ausiliare + n't + soggetto</td><td><em>Isn't it</em> strange? · Why <em>didn't you</em> tell me?</td></tr>
</table>
<h3>5. Domande indirette (fondamentali per speaking e lettere formali)</h3>
<p>Dopo <em>Could you tell me…, Do you know…, I wonder…, I'd like to know…, I have no idea…</em> l'ordine torna quello di una frase <b>affermativa</b>: niente inversione, niente <em>do/does/did</em>.</p>
<p><span class="x">Could you tell me where is the station?</span> → <span class="v">Could you tell me where the station <b>is</b>?</span><br>
<span class="x">I wonder what does he want.</span> → <span class="v">I wonder what he <b>wants</b>.</span><br>
Domande sì/no → <em>if / whether</em>: <span class="v">Do you know <b>whether</b> the museum is open?</span></p>
<h3>6. Question tags</h3>
<p>Frase positiva → tag negativo, e viceversa; si ripete l'ausiliare: <em>You've met her, <b>haven't you</b>?</em> · <em>He doesn't smoke, <b>does he</b>?</em><br>
Casi speciali: <em>I'm late, <b>aren't I</b>?</em> · <em>Let's go, <b>shall we</b>?</em> · <em>Open the door, <b>will you</b>?</em> · <em>Nobody called, <b>did they</b>?</em> · <em>Nothing happened, <b>did it</b>?</em></p>
<h3>7. Mettere in evidenza</h3>
<p>Quando vuoi cambiare l'ordine per dare enfasi, l'inglese usa strutture precise: vedi <a href="#t/g-inversion">Inversion</a>, <a href="#t/g-cleft">Cleft sentences</a> e il passivo.</p>`,
items: [
mc('Which sentence is correct?', ['She speaks English very well.', 'She speaks very well English.', 'She very well speaks English.', 'Speaks she English very well.']),
mc('Which sentence is correct?', ['Could you explain the rule to me?', 'Could you explain me the rule?', 'Could you explain to me the rule?', 'Could you me explain the rule?'], 'explain something TO somebody.'),
mc('Could you tell me ___?', ['where the station is', 'where is the station', 'where does the station is', 'the station where is']),
mc('I wonder ___ to the party.', ['whether she is coming', 'is she coming', 'does she come', 'whether is she coming']),
mc('___ the window? — Tom did.', ['Who broke', 'Who did break', 'Who did broke', 'Whom broke'], 'Domanda sul soggetto: niente did.'),
gap('___ is no point in waiting any longer.', 'There'),
gap('I find ___ difficult to concentrate in an open-plan office.', 'it'),
gap('___ is widely believed that the economy will recover.', 'It'),
gap('You haven\'t seen my keys, ___ you?', 'have'),
gap('Let\'s take a break, ___ we?', 'shall'),
gap('Nobody told you about the meeting, did ___?', 'they'),
mc('Which sentence is correct?', ['I didn\'t say anything to anybody.', 'I didn\'t say nothing to nobody.', 'I didn\'t say nothing to anybody.', 'I said nothing to nobody.']),
]},
{
group: 'La frase', id: 'clauses', title: 'Frasi complesse: relative, scopo, risultato, causa',
sum: 'who / which / whose / whereby, in order to, so that, such… that, too… to, owing to.',
html: `
<h3>1. Relative clauses</h3>
<table>
<tr><th></th><th>Defining (necessaria)</th><th>Non-defining (informazione in più)</th></tr>
<tr><td>Virgole</td><td>no</td><td><b>sì, sempre</b></td></tr>
<tr><td>Pronomi</td><td>who / which / <b>that</b></td><td>who / which (<b>mai that</b>)</td></tr>
<tr><td>Si può omettere?</td><td>sì, se è oggetto: <em>the book (that) I read</em></td><td>mai</td></tr>
<tr><td>Esempio</td><td>The man <em>who lives next door</em> is a doctor.</td><td>My brother, <em>who lives in Rome</em>, is a doctor.</td></tr>
</table>
<ul>
<li><em>whose</em> = il cui: <em>a writer <b>whose</b> books I love</em></li>
<li><em>where / when / why</em>: <em>the town <b>where</b> I grew up</em> · <em>the reason <b>why</b> he left</em></li>
<li><em>which</em> riferito a tutta la frase: <em>He arrived late, <b>which</b> annoyed everyone.</em> (mai <span class="x">what</span>)</li>
<li><em>what</em> = ciò che (senza antecedente): <em><b>What</b> I need is time.</em> <span class="x">Everything what I need</span> → <span class="v">everything (that) I need</span></li>
<li>Formale, con preposizione: <em>the person <b>to whom</b> I spoke</em> · <em>the house <b>in which</b> he lived</em>. Informale: <em>the person I spoke <b>to</b></em>.</li>
<li>Quantità: <em>He has three sisters, <b>two of whom</b> are doctors.</em> · <em>many books, <b>most of which</b> I've read</em> · <em>all of which, none of whom, some of which</em></li>
<li><em>whereby</em> = per mezzo del quale: <em>a system <b>whereby</b> visitors pay a fee</em></li>
</ul>
<p><b>Relative ridotte</b> (molto C1): <em>The people <b>living</b> here</em> (= who live) · <em>The proposals <b>put forward</b> by the council</em> (= which were put forward) · <em>The first person <b>to arrive</b></em> (= who arrived).</p>
<h3>2. Scopo (per, affinché)</h3>
<table>
<tr><td><em>to / in order to / so as to</em> + infinito</td><td>I left early <em>so as not to</em> miss the train. (negativo: in order <b>not</b> to / so as <b>not</b> to)</td></tr>
<tr><td><em>so that</em> + soggetto + can / could / will / would</td><td>Speak up <em>so that</em> everyone <em>can</em> hear.</td></tr>
<tr><td><em>in case</em> + presente/passato (= nel caso che)</td><td>Take an umbrella <em>in case it rains</em>. (mai <span class="x">will rain</span>)</td></tr>
<tr><td><em>for</em> + nome / + -ing (funzione di un oggetto)</td><td>a knife <em>for cutting</em> bread · I went <em>for</em> a walk. <span class="x">I went for buy bread.</span></td></tr>
<tr><td><em>with a view to</em> + -ing · <em>with the aim of</em> + -ing (formali)</td><td>measures taken <em>with a view to reducing</em> traffic</td></tr>
</table>
<h3>3. Risultato</h3>
<table>
<tr><td><em>so</em> + aggettivo/avverbio + <em>that</em></td><td>It was <em>so cold that</em> the lake froze.</td></tr>
<tr><td><em>such</em> (+ a/an) + aggettivo + nome + <em>that</em></td><td>It was <em>such a cold day that</em>… · <em>such bad weather that</em>…</td></tr>
<tr><td><em>so much / many / little / few</em> + nome + that</td><td><em>so many people that</em> we couldn't get in</td></tr>
<tr><td><em>too</em> + agg. (+ for sb) + <em>to</em></td><td>The box is <em>too heavy (for me) to lift</em>.</td></tr>
<tr><td>agg. + <em>enough</em> (+ for sb) + <em>to</em></td><td>He isn't <em>old enough to vote</em>. (enough va <b>dopo</b> l'aggettivo, <b>prima</b> del nome: enough time)</td></tr>
<tr><td><em>therefore, consequently, as a result, thus, hence</em></td><td>nuova frase, registro formale</td></tr>
</table>
<h3>4. Causa</h3>
<table>
<tr><td><em>because, since, as</em> + frase</td><td><em>Since</em> you're here, you can help.</td></tr>
<tr><td><em>because of, due to, owing to, on account of, as a result of</em> + <b>nome / -ing</b></td><td>The flight was cancelled <em>owing to</em> fog.</td></tr>
<tr><td><em>due to the fact that / in view of the fact that</em> + frase</td><td>formale</td></tr>
<tr><td><em>thanks to</em> (causa positiva)</td><td><em>Thanks to</em> your help, we finished.</td></tr>
</table>`,
items: [
mc('My sister, ___ lives in Milan, is getting married.', ['who', 'that', 'which', 'whose'], 'Non-defining: mai that.'),
mc('He arrived an hour late, ___ annoyed everybody.', ['which', 'what', 'that', 'who'], 'which riferito a tutta la frase.'),
mc('She has two brothers, both of ___ live abroad.', ['whom', 'who', 'which', 'them']),
mc('I\'ll give you my number ___ you need to contact me.', ['in case', 'so that', 'in order', 'so as']),
gap('It was ___ a boring film that we left before the end.', 'such'),
gap('The suitcase was ___ heavy for me to carry.', 'too'),
gap('That\'s the writer ___ latest novel won the prize.', 'whose'),
gap('We spoke quietly so ___ not to wake the baby.', 'as'),
gap('He isn\'t experienced ___ to lead the team.', 'enough'),
kwt('The weather was so bad that the match was cancelled.', 'SUCH', 'It was ___ the match was cancelled.', ['such bad weather that']),
kwt('The flight was cancelled because there was thick fog.', 'OWING', 'The flight was cancelled ___ fog.', ['owing to thick', 'owing to the thick']),
kwt('I wrote the date down because I didn\'t want to forget it.', 'SO', 'I wrote the date down ___ forget it.', ['so as not to', 'so I would not', 'so that I would not']),
]},
{
group: 'La frase', id: 'linking', title: 'Connettivi: la mappa completa',
sum: 'Tutti i linkers per funzione, con la grammatica che li segue e la punteggiatura.',
html: `
<p>Il trucco per usarli bene: chiederti <b>che tipo di parola è</b>. Una <b>congiunzione</b> unisce due frasi nella stessa frase; un <b>avverbio connettivo</b> apre una frase nuova (dopo punto o punto e virgola) ed è seguito da virgola; una <b>preposizione</b> vuole un nome o una forma in -ing.</p>
<table>
<tr><th>Funzione</th><th>Congiunzione (+ frase)</th><th>Avverbio (nuova frase, + virgola)</th><th>Preposizione (+ nome / -ing)</th></tr>
<tr><td>Aggiungere</td><td>and, as well as (+ -ing), not only… but also</td><td>Moreover, Furthermore, In addition, What is more, Besides, Likewise</td><td>in addition to, as well as, besides, along with</td></tr>
<tr><td>Contrasto</td><td>but, although, even though, though, while, whereas, yet</td><td>However, Nevertheless, Nonetheless, Even so, On the other hand, By contrast, On the contrary, Still</td><td>despite, in spite of, unlike, as opposed to, contrary to</td></tr>
<tr><td>Causa</td><td>because, since, as, seeing that, given that</td><td>—</td><td>because of, due to, owing to, on account of, in view of, given</td></tr>
<tr><td>Risultato</td><td>so, so… that, such… that</td><td>Therefore, Consequently, As a result, Thus, Hence, Accordingly, For this reason</td><td>as a result of</td></tr>
<tr><td>Scopo</td><td>so that, in order that</td><td>—</td><td>to, in order to, so as to (+ infinito); with a view to (+ -ing)</td></tr>
<tr><td>Condizione</td><td>if, unless, provided (that), as long as, on condition that, supposing, in case</td><td>Otherwise</td><td>in case of, in the event of, but for</td></tr>
<tr><td>Tempo</td><td>when, while, as soon as, once, until, by the time, no sooner… than</td><td>Meanwhile, Subsequently, Eventually, Afterwards, Beforehand, Thereafter</td><td>during, prior to, following, on (+ -ing)</td></tr>
<tr><td>Esempio</td><td>—</td><td>For example, For instance, In particular, Namely</td><td>such as, like, including</td></tr>
<tr><td>Riformulare</td><td>—</td><td>In other words, That is to say, To put it another way</td><td>—</td></tr>
<tr><td>Concludere</td><td>—</td><td>In conclusion, To sum up, On balance, All things considered, On the whole, Overall</td><td>—</td></tr>
</table>
<h3>Errori tipici</h3>
<ul>
<li><span class="x">Despite he was tired</span> → <span class="v">Despite being tired / Although he was tired</span></li>
<li><span class="x">It was raining, however we went out.</span> → <span class="v">It was raining. However, we went out.</span> / <span class="v">It was raining; however, we went out.</span> / <span class="v">It was raining, but we went out.</span></li>
<li><span class="x">On the contrary</span> usato per "d'altra parte": <em>on the contrary</em> nega ciò che è stato detto ("anzi, al contrario"); per confrontare usa <em>on the other hand / by contrast</em>.</li>
<li><span class="x">In the end</span> ≠ <em>at the end</em>: <em>in the end</em> = alla fine, dopo tutto; <em>at the end (of the film)</em> = nel punto finale. <em>Finally / Lastly</em> = ultimo punto di un elenco. <em>Eventually</em> = alla fine, dopo molto tempo (mai "eventualmente").</li>
<li><span class="x">Actually</span> non è "attualmente" (= <em>currently, at present</em>): significa "in realtà".</li>
<li><em>As well as</em> + -ing: <span class="v">As well as <b>creating</b> jobs, tourism brings investment.</span></li>
<li><em>Besides</em> = inoltre / oltre a; <em>beside</em> = accanto a.</li>
</ul>
<p>Per contrasto e concessione in dettaglio: <a href="#t/g-concession">Contrast &amp; concession</a>. Per la lista da memorizzare: mazzo <a href="#lessico/linkers">Linkers e frasi da essay</a>.</p>`,
items: [
mc('___ creating jobs, tourism also brings investment.', ['As well as', 'Moreover', 'Although', 'Furthermore'], 'as well as + -ing; gli altri non reggono -ing.'),
mc('The council has no money. ___, the project has been postponed.', ['Consequently', 'Because', 'Owing to', 'Although']),
mc('The north is industrial, ___ the south is mainly agricultural.', ['whereas', 'however', 'despite', 'nevertheless']),
mc('He\'s not lazy. ___, he works harder than anyone I know.', ['On the contrary', 'On the other hand', 'By contrast', 'In addition'], 'On the contrary = "anzi".'),
mc('We waited for hours and ___ a taxi arrived.', ['eventually', 'at the end', 'lastly', 'actually']),
mc('The match was postponed ___ the heavy rain.', ['due to', 'because', 'since', 'as']),
gap('You can borrow the car ___ that you fill it up afterwards.', ['provided', 'providing']),
gap('Hurry up; ___ we\'ll miss the beginning of the film.', 'otherwise'),
gap('In ___ to the entrance fee, visitors must pay for parking.', 'addition'),
gap('She was exhausted. ___ so, she finished the race.', 'Even'),
gap('Several cities, ___ as Venice and Barcelona, have introduced limits.', 'such'),
mc('Which sentence is correctly punctuated?', ['The plan is expensive. However, it is worth it.', 'The plan is expensive, however it is worth it.', 'The plan is expensive however, it is worth it.', 'The plan is expensive, however, it is worth it.']),
]},
{
group: 'I verbi', id: 'tenses', title: 'Tutti i tempi verbali',
sum: 'Presente, passato, perfect, narrative tenses, stative verbs: forma, uso e parole spia.',
html: `
<h3>1. Quadro generale</h3>
<table>
<tr><th>Tempo</th><th>Forma</th><th>Uso principale</th><th>Parole spia</th></tr>
<tr><td>Present simple</td><td>I work / she work<b>s</b></td><td>abitudini, fatti, orari, stati</td><td>always, usually, every day</td></tr>
<tr><td>Present continuous</td><td>am/is/are + -ing</td><td>adesso, situazioni temporanee, cambiamenti in corso, programmi futuri, lamentele (always)</td><td>now, at the moment, these days</td></tr>
<tr><td>Past simple</td><td>worked / went</td><td>azione finita in un momento passato definito</td><td>yesterday, in 2019, ago, last week, when…</td></tr>
<tr><td>Past continuous</td><td>was/were + -ing</td><td>azione in corso nel passato; sfondo di un racconto</td><td>while, as, at 8 o'clock</td></tr>
<tr><td>Present perfect</td><td>have/has + participio</td><td>legame passato–presente: esperienza, risultato visibile ora, periodo non finito</td><td>ever, never, already, yet, just, so far, recently, since, for, this week</td></tr>
<tr><td>Present perfect continuous</td><td>have/has been + -ing</td><td>durata di un'azione che continua o è appena finita (con effetti visibili)</td><td>for, since, all day, lately, how long</td></tr>
<tr><td>Past perfect</td><td>had + participio</td><td>azione precedente a un'altra azione passata</td><td>by the time, already, before, after</td></tr>
<tr><td>Past perfect continuous</td><td>had been + -ing</td><td>durata prima di un momento passato</td><td>for, since, how long</td></tr>
<tr><td>Future (will)</td><td>will + inf.</td><td>previsioni, decisioni prese ora, promesse, offerte</td><td>I think, probably</td></tr>
<tr><td>be going to</td><td>am/is/are going to</td><td>intenzioni già decise; previsioni basate su ciò che si vede</td><td></td></tr>
<tr><td>Future continuous</td><td>will be + -ing</td><td>azione in corso in un momento futuro</td><td>this time next week</td></tr>
<tr><td>Future perfect</td><td>will have + participio</td><td>azione conclusa entro un momento futuro</td><td>by Friday, by the time</td></tr>
</table>
<h3>2. Present perfect o past simple? (l'errore n. 1 degli italiani)</h3>
<ul>
<li>Se dici <b>quando</b> (o è chiaro quando) → <b>past simple</b>. <span class="x">I have seen him yesterday.</span> → <span class="v">I saw him yesterday.</span></li>
<li>Se il periodo <b>non è finito</b> o conta il <b>risultato adesso</b> → present perfect: <em>I've lost my keys</em> (non le ho ancora). · <em>I've been to Japan twice</em> (nella mia vita).</li>
<li>Azione iniziata nel passato che <b>continua</b>: present perfect (continuous) + <em>for / since</em>. <span class="x">I live here since 2020.</span> → <span class="v">I have lived / have been living here since 2020.</span></li>
<li><em>for</em> + durata (for three years) · <em>since</em> + punto d'inizio (since 2020, since I was a child) · <em>ago</em> + past simple (three years ago).</li>
<li><em>It's the first / second time</em> + present perfect: <span class="v">It's the first time I<b>'ve eaten</b> oysters.</span></li>
<li><em>It's ages / two years since</em> + past simple: <span class="v">It's ages since I <b>saw</b> her.</span></li>
<li><em>gone to</em> (è andato ed è ancora là) ≠ <em>been to</em> (è andato ed è tornato).</li>
</ul>
<h3>3. Simple o continuous nel perfect?</h3>
<p><em>I've <b>written</b> three emails</em> (risultato, quantità) · <em>I've <b>been writing</b> emails all morning</em> (attività, durata; magari non ho finito).</p>
<h3>4. Narrative tenses (per review, lettere, racconti)</h3>
<p><em>I <b>was walking</b> home</em> (sfondo) <em>when I <b>realised</b></em> (evento) <em>that I <b>had left</b> my bag in the café</em> (prima) <em>where I <b>had been working</b> all afternoon</em> (durata prima).</p>
<p>Abitudini passate: <em>used to / would</em> (vedi <a href="#t/g-usedto">Used to</a>).</p>
<h3>5. Stative verbs: niente forma in -ing</h3>
<p>Verbi che indicano uno stato, non un'azione: <b>know, believe, understand, remember, mean, want, need, prefer, like, love, hate, seem, appear, belong, own, contain, consist, depend, deserve, matter, owe</b>. <span class="x">I am knowing</span> · <span class="x">It is depending</span> → <span class="v">It depends.</span></p>
<p>Alcuni cambiano significato:</p>
<table>
<tr><td><em>think</em></td><td>I think you're right (opinione)</td><td>I'm thinking about it (sto riflettendo)</td></tr>
<tr><td><em>have</em></td><td>I have a car (possesso)</td><td>I'm having lunch / a good time (azione)</td></tr>
<tr><td><em>see</em></td><td>I see what you mean (capisco)</td><td>I'm seeing the doctor tomorrow (incontro)</td></tr>
<tr><td><em>be</em></td><td>He is rude (carattere)</td><td>He's being rude (si sta comportando così ora)</td></tr>
<tr><td><em>taste / smell / look</em></td><td>It tastes good (ha sapore)</td><td>I'm tasting the soup (assaggio)</td></tr>
</table>
<h3>6. Il futuro</h3>
<p>Programmi fissati con altre persone → present continuous (<em>I'm meeting Anna at six</em>); orari ufficiali → present simple (<em>The train leaves at 9</em>). Dopo <em>when, as soon as, until, if, unless</em> mai will. Dettagli e forme C1 in <a href="#t/g-future">Futuro e time clauses</a>.</p>`,
items: [
mc('I ___ him yesterday at the station.', ['saw', 'have seen', 'had seen', 'was seeing'], 'yesterday = momento definito → past simple.'),
mc('I ___ here since 2020.', ['have been living', 'live', 'am living', 'lived']),
mc('When I got to the station, the train ___.', ['had already left', 'already left', 'has already left', 'was already leaving'], 'Prima di un\'altra azione passata → past perfect.'),
mc('Sorry I\'m so dirty: I ___ in the garden all morning.', ['have been working', 'have worked', 'worked', 'am working']),
mc('It ___ on what you mean by "success".', ['depends', 'is depending', 'has been depending', 'depend'], 'Stative verb.'),
mc('This is the first time I ___ sushi.', ['have eaten', 'eat', 'am eating', 'ate']),
mc('It\'s ages since I ___ a good film.', ['saw', 'have seen', 'see', 'had seen']),
gap('I was walking home when I realised that I ___ my bag in the café.', ['had left', '\'d left'], '', '(LEAVE)'),
gap('She ___ three novels so far, and she is working on a fourth.', ['has written', '\'s written'], '', '(WRITE)'),
gap('While I ___ dinner, the lights went out.', 'was cooking', '', '(COOK)'),
gap('He started working here three years ___.', 'ago'),
gap('You\'re ___ very quiet today. Is something wrong?', 'being', 'be + being + aggettivo = comportamento temporaneo.', '(BE)'),
kwt('The last time I saw her was in 2019.', 'SEEN', 'I ___ 2019.', ['have not seen her since']),
kwt('He began studying English five years ago.', 'BEEN', 'He ___ five years.', ['has been studying English for']),
]},
{
group: 'I verbi', id: 'verb-patterns', title: 'Verbo + gerundio o infinito: gli elenchi',
sum: 'Quali verbi vogliono -ing, quali to, quali l\'infinito senza to, quali cambiano significato.',
html: `
<p>Non c'è una regola: sono elenchi da sapere. Valgono moltissimo in Part 2 e Part 4, e gli errori nel writing si notano subito.</p>
<h3>1. Verbo + -ing</h3>
<p><b>admit, appreciate, avoid, can't help, can't stand, consider, delay, deny, dislike, enjoy, fancy, feel like, finish, give up, imagine, involve, keep (on), mention, mind, miss, postpone, practise, put off, recommend, resent, resist, risk, suggest</b></p>
<p><em>I <b>avoid driving</b> at night.</em> · <em>She <b>suggested going</b> by train.</em> · <em>It <b>involves working</b> weekends.</em></p>
<p>Sempre -ing anche: dopo <b>ogni preposizione</b> (<em>interested in learning, without saying, instead of going, after leaving</em>); dopo espressioni come <b>it's no use / it's no good / it's (not) worth / there's no point (in) / have difficulty (in) / have trouble / spend time / waste time / be busy</b>; come soggetto (<em><b>Smoking</b> is bad for you</em>).</p>
<div class="note"><b>"to" preposizione + -ing</b> (trappola classica): <em>look forward <b>to seeing</b>, be used <b>to working</b>, get used to, object to, be committed to, be devoted to, in addition to, with a view to, when it comes to, be opposed to, be accustomed to</em>.</div>
<h3>2. Verbo + to + infinito</h3>
<p><b>afford, agree, aim, appear, arrange, ask, attempt, choose, claim, decide, demand, deserve, expect, fail, happen, hesitate, hope, intend, learn, manage, offer, plan, prepare, pretend, promise, refuse, seem, tend, threaten, wait, want, wish, would like</b></p>
<p><em>He <b>refused to help</b>.</em> · <em>I <b>can't afford to buy</b> it.</em> · <em>She <b>tends to exaggerate</b>.</em></p>
<p>Infinito anche dopo aggettivi (<em>happy to help, difficult to say, likely to rain, the first to arrive</em>) e dopo <em>too / enough</em>.</p>
<h3>3. Verbo + oggetto + to + infinito</h3>
<p><b>advise, allow, ask, cause, enable, encourage, expect, force, invite, order, permit, persuade, remind, require, teach, tell, urge, want, warn, would like</b></p>
<p><em>She <b>encouraged me to apply</b>.</em> · <span class="x">I want that you come.</span> → <span class="v">I want <b>you to come</b>.</span></p>
<h3>4. Verbo + oggetto + infinito SENZA to</h3>
<ul>
<li><b>make, let</b>: <em>They <b>made me wait</b>.</em> · <em><b>Let me help</b> you.</em> (al passivo torna "to": <em>I <b>was made to wait</b></em>)</li>
<li><b>help</b>: con o senza to (<em>help me (to) carry</em>)</li>
<li>verbi di percezione <b>see, hear, watch, feel, notice</b>: infinito senza to = azione completa (<em>I saw him <b>cross</b> the road</em>); -ing = azione in corso (<em>I saw him <b>crossing</b> the road</em>)</li>
<li><b>had better, would rather, would sooner</b> + infinito senza to: <em>You'd better <b>go</b>.</em></li>
<li>dopo i modali: <em>can go, must do, should have done</em></li>
</ul>
<h3>5. Stesso significato con -ing o to</h3>
<p><b>begin, start, continue, intend, bother</b>. Con <b>like, love, hate, prefer</b>: -ing (in generale) o to (occasione specifica); dopo <em>would like / would love / would prefer</em> sempre <b>to</b>.</p>
<p><em>prefer</em>: <em>I prefer walking <b>to</b> cycling.</em> · <em>I'd prefer <b>to walk rather than</b> cycle.</em> · <em>I'd rather walk <b>than</b> cycle.</em></p>
<h3>6. Significato diverso</h3>
<table>
<tr><th>Verbo</th><th>+ -ing</th><th>+ to</th></tr>
<tr><td>remember / forget</td><td>ricordare qualcosa di già fatto: <em>I remember locking the door.</em></td><td>ricordarsi di fare: <em>Remember to lock the door.</em></td></tr>
<tr><td>stop</td><td>smettere: <em>He stopped smoking.</em></td><td>fermarsi per: <em>He stopped to smoke.</em></td></tr>
<tr><td>try</td><td>provare come esperimento: <em>Try adding salt.</em></td><td>sforzarsi: <em>I tried to open it.</em></td></tr>
<tr><td>regret</td><td>pentirsi: <em>I regret saying that.</em></td><td>essere spiacenti di: <em>We regret to inform you…</em></td></tr>
<tr><td>go on</td><td>continuare: <em>He went on talking.</em></td><td>passare a: <em>He went on to become a doctor.</em></td></tr>
<tr><td>mean</td><td>comportare: <em>It means getting up early.</em></td><td>avere intenzione: <em>I meant to call you.</em></td></tr>
<tr><td>need</td><td>senso passivo: <em>The car needs washing.</em></td><td>avere bisogno di: <em>I need to wash the car.</em></td></tr>
</table>
<h3>7. Forme perfect e passive</h3>
<p><em>He denied <b>having taken</b> the money.</em> · <em>She seems <b>to have forgotten</b>.</em> · <em>I hate <b>being told</b> what to do.</em> · <em>He expects <b>to be promoted</b>.</em> · <em>He is said <b>to have left</b>.</em></p>
<p>Per i verbi che riportano un discorso: <a href="#t/g-reporting">Reporting verbs</a>.</p>`,
items: [
mc('I\'m really looking forward to ___ you again.', ['seeing', 'see', 'have seen', 'be seeing'], 'to qui è preposizione.'),
mc('They made us ___ for two hours.', ['wait', 'to wait', 'waiting', 'waited']),
mc('We were made ___ for two hours.', ['to wait', 'wait', 'waiting', 'waited'], 'Al passivo make vuole to.'),
mc('I can\'t afford ___ a new car at the moment.', ['to buy', 'buying', 'buy', 'to buying']),
mc('The job involves ___ a lot.', ['travelling', 'to travel', 'travel', 'to travelling']),
mc('I don\'t remember ___ him the money, but I must have.', ['lending', 'to lend', 'lend', 'to have lend']),
mc('We regret ___ you that your application has been unsuccessful.', ['to inform', 'informing', 'inform', 'to informing']),
mc('My parents want ___ a doctor.', ['me to become', 'that I become', 'me becoming', 'I become']),
gap('It\'s no use ___ about it now.', 'worrying', '', '(WORRY)'),
gap('You\'d better ___ now or you\'ll miss the train.', 'leave', '', '(LEAVE)'),
gap('She seems ___ her keys. She\'s been looking for them for an hour.', 'to have lost', 'Infinito perfect: azione precedente.', '(LOSE)'),
gap('He stopped ___ when the doctor told him his lungs were damaged.', 'smoking', '', '(SMOKE)'),
gap('I\'m not used to ___ up so early.', 'getting', '', '(GET)'),
kwt('It\'s pointless to argue with him.', 'POINT', 'There is ___ with him.', ['no point in arguing', 'no point arguing']),
kwt('"You should apply for the job," she said to me.', 'ENCOURAGED', 'She ___ for the job.', ['encouraged me to apply']),
kwt('I managed to finish the report on time.', 'SUCCEEDED', 'I ___ the report on time.', ['succeeded in finishing']),
]},
{
group: 'I verbi', id: 'modals-all', title: 'Modal verbs: il sistema completo',
sum: 'Capacità, permesso, obbligo, consiglio, probabilità — presente, passato e forme sostitutive.',
html: `
<h3>Regole comuni</h3>
<p>I modali (<em>can, could, may, might, must, shall, should, will, would, ought to</em>) non prendono -s, non vogliono do/does, sono seguiti dall'infinito <b>senza to</b> e non hanno infinito né participio: per gli altri tempi si usano <em>be able to, have to, be allowed to</em>. <span class="x">I will can</span> → <span class="v">I will be able to</span> · <span class="x">I must to go</span> → <span class="v">I must go</span></p>
<h3>1. Capacità</h3>
<table>
<tr><td>presente</td><td><em>can / be able to</em></td></tr>
<tr><td>passato, in generale</td><td><em>could</em>: I <em>could</em> swim when I was five.</td></tr>
<tr><td>passato, un'occasione specifica riuscita</td><td><em>was able to / managed to</em> (non could): The door was locked but I <em>managed to</em> get in.</td></tr>
<tr><td>negativo specifico</td><td><em>couldn't</em> va bene: I <em>couldn't</em> find it.</td></tr>
<tr><td>possibilità non realizzata</td><td><em>could have</em> + participio: You <em>could have been</em> killed!</td></tr>
</table>
<h3>2. Obbligo e necessità</h3>
<table>
<tr><th>Forma</th><th>Significato</th></tr>
<tr><td><em>must</em></td><td>obbligo sentito da chi parla; regole scritte</td></tr>
<tr><td><em>have to</em></td><td>obbligo esterno; si usa per tutti i tempi (<em>had to, will have to</em>)</td></tr>
<tr><td><em>mustn't</em></td><td><b>divieto</b>: You mustn't park here.</td></tr>
<tr><td><em>don't have to / needn't / don't need to</em></td><td><b>non è necessario</b>: You don't have to come.</td></tr>
<tr><td><em>needn't have</em> + participio</td><td>l'hai fatto, ma non serviva</td></tr>
<tr><td><em>didn't need to</em> + infinito</td><td>non serviva (e di solito non l'hai fatto)</td></tr>
<tr><td><em>be supposed to</em></td><td>si dovrebbe (regola o aspettativa, spesso non rispettata)</td></tr>
<tr><td><em>be required to / be obliged to</em></td><td>formale</td></tr>
</table>
<h3>3. Consiglio e critica</h3>
<p><em>should / ought to</em> (consiglio) · <em>had better (not)</em> + infinito (consiglio forte, con conseguenza) · <em>should have / ought to have</em> + participio (critica sul passato: <em>You should have told me</em>) · <em>might / could have</em> + participio (rimprovero: <em>You might have warned me!</em>).</p>
<h3>4. Permesso</h3>
<p><em>can / could / may</em> (sempre più formale) · <em>be allowed to</em> per tutti i tempi e per un permesso specifico nel passato: <em>I <b>was allowed to</b> leave early.</em></p>
<h3>5. Probabilità e deduzione</h3>
<table>
<tr><th>Certezza</th><th>Presente</th><th>Passato</th></tr>
<tr><td>sicuramente sì</td><td>He <em>must be</em> tired.</td><td>He <em>must have been</em> tired.</td></tr>
<tr><td>forse</td><td>He <em>may / might / could be</em> at home.</td><td>He <em>may / might / could have missed</em> the bus.</td></tr>
<tr><td>sicuramente no</td><td>He <em>can't be</em> serious.</td><td>He <em>can't / couldn't have known</em>.</td></tr>
</table>
<p>Il contrario di <em>must</em> (deduzione) è <em>can't</em>, non <span class="x">mustn't</span>. Forma continua: <em>She <b>must be joking</b>.</em> · <em>He <b>might have been working</b>.</em></p>
<p>Altre espressioni di probabilità (ottime per essay): <em>be bound to</em> (sicuramente), <em>be likely / unlikely to</em>, <em>be sure / certain to</em>, <em>may well</em> (è molto probabile), <em>there is every likelihood that…</em>, <em>the chances are that…</em></p>
<h3>6. Altri usi</h3>
<ul>
<li><em>would</em>: abitudine passata; rifiuto nel passato (<em>The car <b>wouldn't</b> start</em>)</li>
<li><em>will</em>: comportamento tipico (<em>He <b>will</b> leave his clothes on the floor</em>)</li>
<li><em>shall</em>: proposte e offerte (<em><b>Shall I</b> open the window?</em>)</li>
<li><em>dare, need</em>: semi-modali (<em>How <b>dare</b> you!</em> · <em>You <b>needn't</b> worry</em>)</li>
</ul>
<p>Esercizi mirati sulla deduzione al passato: <a href="#t/g-modals">Modali: deduzione e passato</a>.</p>`,
items: [
mc('You ___ wear a tie; it\'s an informal party.', ['don\'t have to', 'mustn\'t', 'can\'t', 'shouldn\'t have'], 'Non è necessario ≠ è vietato.'),
mc('You ___ touch that wire: it\'s live!', ['mustn\'t', 'don\'t have to', 'needn\'t', 'might not']),
mc('The door was locked, but I ___ get in through a window.', ['managed to', 'could', 'can', 'was able'], 'Occasione specifica riuscita: managed to / was able to.'),
mc('She\'s not answering. She ___ be in a meeting.', ['might', 'can', 'must to', 'ought']),
mc('He ___ be the thief: he was with me all evening.', ['can\'t', 'mustn\'t', 'shouldn\'t', 'needn\'t']),
mc('I\'ll ___ speak fluently by the end of the course.', ['be able to', 'can', 'could', 'able to']),
mc('You ___ leave now, or you\'ll miss the last bus.', ['had better', 'would better', 'had better to', 'better had']),
gap('You ___ have told me you were coming! I would have cooked something.', ['should', 'could', 'might']),
gap('We were ___ to leave early because of the snow.', ['allowed', 'able', 'permitted']),
gap('You\'re not ___ to use your phone during the exam.', ['supposed', 'allowed', 'permitted']),
kwt('It\'s possible that she didn\'t receive my message.', 'MAY', 'She ___ my message.', ['may not have received', 'may not have got']),
kwt('It is very likely that prices will rise next year.', 'WELL', 'Prices ___ next year.', ['may well rise', 'might well rise', 'could well rise']),
kwt('It wasn\'t necessary for me to queue, so I walked straight in.', 'NEED', 'I ___ queue, so I walked straight in.', ['did not need to']),
]},
{
group: 'I verbi', id: 'phrasal-grammar', title: 'Phrasal verbs: come funzionano',
sum: 'I quattro tipi, dove va l\'oggetto e cosa significano le particelle.',
html: `
<h3>1. I quattro tipi</h3>
<table>
<tr><th>Tipo</th><th>Regola</th><th>Esempio</th></tr>
<tr><td>Intransitivo</td><td>nessun oggetto</td><td>The plane <em>took off</em>. · Prices <em>went up</em>. · Something <em>came up</em>.</td></tr>
<tr><td>Transitivo <b>separabile</b></td><td>l'oggetto va prima o dopo la particella; <b>se è un pronome va in mezzo</b></td><td><em>turn down the offer</em> = <em>turn the offer down</em> · <span class="v">turn <b>it</b> down</span> · <span class="x">turn down it</span></td></tr>
<tr><td>Transitivo <b>inseparabile</b> (verbo + preposizione)</td><td>l'oggetto va sempre dopo</td><td><em>look into the matter</em> · <span class="v">look into <b>it</b></span> · <em>come across, deal with, look after, get over</em></td></tr>
<tr><td>A tre parti</td><td>sempre inseparabili</td><td><em>put up with, look forward to, come up with, run out of, get away with, look down on, cut down on, make up for</em></td></tr>
</table>
<p>Separabili frequenti: <em>bring up, call off, carry out, find out, give up, hand in, let down, make up, pick up, point out, put off, set up, sort out, take on, take up, turn down, work out</em>.</p>
<p>Dopo un phrasal verb un altro verbo va in <b>-ing</b>: <em>give up <b>smoking</b>, put off <b>going</b>, look forward to <b>meeting</b></em>.</p>
<h3>2. Il significato delle particelle</h3>
<table>
<tr><th>Particella</th><th>Idea</th><th>Esempi</th></tr>
<tr><td>up</td><td>aumento · completamento</td><td>speed up, go up, turn up (the volume) · eat up, use up, tidy up, end up</td></tr>
<tr><td>down</td><td>diminuzione · fermarsi · mettere per iscritto</td><td>slow down, cut down, calm down · break down, close down · write down, note down</td></tr>
<tr><td>off</td><td>partenza · separazione · annullamento</td><td>set off, take off · cut off, break off · call off, put off</td></tr>
<tr><td>on</td><td>continuazione</td><td>carry on, go on, keep on, move on</td></tr>
<tr><td>out</td><td>scoperta · fine totale · distribuzione</td><td>find out, work out, figure out, point out · run out, sell out, die out, wear out · hand out, give out</td></tr>
<tr><td>over</td><td>da capo · con attenzione</td><td>start over, think over, go over, look over</td></tr>
<tr><td>back</td><td>ritorno · risposta</td><td>give back, call back, pay back, look back on</td></tr>
<tr><td>through</td><td>dall'inizio alla fine</td><td>get through, go through, read through, see through, fall through</td></tr>
<tr><td>away</td><td>allontanamento · senza sosta</td><td>go away, throw away, put away · work away</td></tr>
</table>
<h3>3. Nomi e aggettivi derivati</h3>
<p><em>a breakdown, a breakthrough, a setback, an outbreak, an outcome, the outlook, a drawback, a takeover, turnover, the upbringing, input, a downpour, a let-down, a mix-up</em> · <em>worn-out, run-down, outgoing, off-putting, built-up</em>.</p>
<h3>4. Registro</h3>
<p>I phrasal verbs sono neutri o informali: perfetti in speaking e lettere informali. In essay, report e proposal è meglio il verbo "latino": <em>put off → postpone · find out → discover · look into → investigate · put up with → tolerate · bring about → cause · go up → rise · cut down on → reduce · get rid of → eliminate · set up → establish · carry out → conduct</em>. Vedi il mazzo <a href="#lessico/register">Formale vs informale</a>.</p>
<p>Liste da studiare: <a href="#lessico/phrasal">phrasal verbs essenziali</a>, <a href="#lessico/take">TAKE</a>, <a href="#lessico/come">COME</a>.</p>`,
items: [
mc('The offer was too low, so I ___.', ['turned it down', 'turned down it', 'turned it off', 'turned off it']),
mc('The police promised to ___.', ['look into it', 'look it into', 'look it at', 'look into'], 'Inseparabile: verbo + preposizione.'),
mc('We\'ve ___ milk. Could you get some?', ['run out of', 'run out', 'run off', 'run away of']),
mc('I can\'t ___ what this word means.', ['work out', 'work up', 'work off', 'work over']),
mc('Negotiations ___ after only two days.', ['broke down', 'broke up with', 'broke out of', 'broke off with']),
gap('I\'ve given ___ trying to convince him.', 'up'),
gap('She came ___ with a brilliant solution.', 'up'),
gap('Carry ___ with your work; don\'t let me interrupt you.', 'on'),
gap('The meeting has been put ___ until next week.', ['off', 'back']),
gap('Heavy rain caused a serious set___ to the project.', 'back', 'a setback = battuta d\'arresto'),
kwt('The company was established in 1990.', 'SET', 'The company ___ in 1990.', ['was set up']),
kwt('I can\'t tolerate this noise any longer.', 'PUT', 'I can\'t ___ this noise any longer.', ['put up with']),
kwt('Somebody should do the research first.', 'CARRIED', 'The research should ___ first.', ['be carried out']),
]},
{
group: 'I verbi', id: 'reported', title: 'Reported speech',
sum: 'Backshift dei tempi, cambi di pronomi e tempo, domande e ordini riportati.',
html: `
<h3>1. Il backshift</h3>
<p>Se il verbo che introduce è al passato (<em>said, told, asked</em>), i tempi fanno un passo indietro.</p>
<table>
<tr><th>Discorso diretto</th><th>Discorso indiretto</th></tr>
<tr><td>present simple: "I <em>work</em> here."</td><td>past simple: He said he <em>worked</em> there.</td></tr>
<tr><td>present continuous: "I<em>'m leaving</em>."</td><td>past continuous: She said she <em>was leaving</em>.</td></tr>
<tr><td>past simple / present perfect: "I <em>saw</em> / <em>have seen</em> it."</td><td>past perfect: He said he <em>had seen</em> it.</td></tr>
<tr><td>will → would · can → could · may → might · must → had to</td><td>He said he <em>would</em> call.</td></tr>
<tr><td>would, could, should, might, ought to, past perfect</td><td>non cambiano</td></tr>
</table>
<p>Il backshift si può evitare se la cosa è ancora vera: <em>She said she <b>lives</b> in Rome.</em></p>
<h3>2. Cosa cambia oltre al verbo</h3>
<table>
<tr><td>this → that · these → those · here → there</td><td>now → then / at that moment · today → that day</td></tr>
<tr><td>yesterday → the day before / the previous day</td><td>tomorrow → the next day / the following day</td></tr>
<tr><td>last week → the week before / the previous week</td><td>next week → the following week · ago → before</td></tr>
</table>
<h3>3. Say o tell?</h3>
<p><em>say (to somebody) that…</em> · <em>tell <b>somebody</b> that…</em> <span class="x">He said me</span> → <span class="v">He told me / He said to me</span>. Espressioni fisse: <em>tell the truth, tell a lie, tell a story, tell the difference, tell the time</em>.</p>
<h3>4. Domande riportate</h3>
<p>Ordine da frase affermativa, niente do/does/did, niente punto interrogativo.</p>
<ul>
<li>"Where <em>do you live</em>?" → She asked me where <b>I lived</b>.</li>
<li>"<em>Have you finished</em>?" → He asked <b>if / whether</b> I had finished.</li>
<li>"What <em>is the time</em>?" → She wanted to know what <b>the time was</b>.</li>
</ul>
<h3>5. Ordini, richieste, consigli</h3>
<p><em>tell / ask / order / advise / warn + oggetto + (not) to + infinito</em>: "Don't touch it!" → He told me <b>not to touch</b> it. · "Could you help me?" → She asked me <b>to help</b> her.</p>
<h3>6. Riassumere invece di ripetere</h3>
<p>Al C1 non si riporta parola per parola: si sceglie un verbo che riassume (<em>deny, admit, accuse, apologise, insist, suggest, threaten, warn, urge, congratulate, blame, claim</em>). Sono i protagonisti della Part 4: vedi <a href="#t/g-reporting">Reporting verbs e verb patterns</a>.</p>
<h3>7. Passivo impersonale</h3>
<p><em>People say he is rich.</em> → <em>It is said that he is rich.</em> / <em>He is said to be rich.</em> Vedi <a href="#t/g-passive">Passivo avanzato</a>.</p>`,
items: [
mc('She said she ___ the film the week before.', ['had seen', 'has seen', 'saw yet', 'would see']),
mc('He asked me where ___.', ['I lived', 'did I live', 'do I live', 'I did live']),
mc('She ___ that she was tired.', ['told me', 'said me', 'told to me', 'said to']),
mc('The teacher told us ___ during the test.', ['not to talk', 'to not talking', 'don\'t talk', 'not talk']),
mc('"I\'ll call you tomorrow," he said. → He said he would call me ___.', ['the following day', 'tomorrow day', 'the day before', 'next day before']),
gap('He asked me ___ I had ever been to Scotland.', ['if', 'whether']),
gap('She wanted to know what time the train ___.', ['left', 'was leaving', 'would leave'], '', '(LEAVE)'),
gap('I can\'t ___ the difference between the two colours.', 'tell'),
kwt('"Where did you buy your jacket?" she asked me.', 'HAD', 'She asked me where ___ jacket.', ['I had bought my']),
kwt('"Don\'t forget to lock the door," he said to me.', 'REMINDED', 'He ___ the door.', ['reminded me to lock']),
kwt('"I\'ll resign if you don\'t give me a pay rise," she said.', 'THREATENED', 'She ___ she didn\'t get a pay rise.', ['threatened to resign if', 'threatened to resign unless']),
kwt('"Can you help me with my suitcase?" the woman asked me.', 'TO', 'The woman asked ___ with her suitcase.', ['me to help her']),
]},
];
