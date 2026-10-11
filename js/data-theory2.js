// MANUALE DI TEORIA – parte 2: nomi, articoli, aggettivi, avverbi, preposizioni, lessico.
C1.theory.push(
{
group: 'Nomi e articoli', id: 'articles', title: 'Articoli: a / an, the, nessun articolo',
sum: 'La regola per scegliere e tutti i casi in cui l\'italiano inganna.',
html: `
<h3>1. La domanda da farsi</h3>
<table>
<tr><th>Situazione</th><th>Articolo</th><th>Esempio</th></tr>
<tr><td>Una cosa qualsiasi, nominata per la prima volta (singolare numerabile)</td><td><b>a / an</b></td><td>I saw <em>a</em> film last night.</td></tr>
<tr><td>Una cosa precisa, che chi ascolta sa identificare</td><td><b>the</b></td><td><em>The</em> film was great. · Close <em>the</em> door.</td></tr>
<tr><td>Cose <b>in generale</b> (plurali e non numerabili)</td><td><b>nessun articolo</b></td><td><em>Life</em> is short. · <em>Tourists</em> bring <em>money</em>. · I love <em>music</em>.</td></tr>
</table>
<div class="note">È l'errore più frequente degli italiani nel writing: <span class="x">The tourism damages the nature.</span> → <span class="v">Tourism damages nature.</span> · <span class="x">The people think that the life is hard.</span> → <span class="v">People think that life is hard.</span> Si usa <em>the</em> solo se specifichi: <em><b>the</b> life <b>of a student</b></em>, <em><b>the</b> music <b>I listen to</b></em>.</div>
<h3>2. A / an obbligatorio</h3>
<ul>
<li>Professioni: <span class="v">She is <b>a</b> doctor.</span> <span class="x">She is doctor.</span></li>
<li>Dopo <em>what, such, quite, rather, half</em>: <em>What <b>a</b> day! · such <b>a</b> good idea · quite <b>a</b> long way · half <b>an</b> hour</em></li>
<li>Frequenza e prezzo: <em>twice <b>a</b> week, 50 km <b>an</b> hour, €3 <b>a</b> kilo</em></li>
<li><em>an</em> dipende dal suono: <em>an hour, an honest man, an MP</em> ma <em>a university, a European country, a one-way street</em></li>
</ul>
<h3>3. The obbligatorio</h3>
<ul>
<li>Cose uniche: <em>the sun, the internet, the government, the environment, the economy, the past / present / future</em></li>
<li>Superlativi e ordinali: <em>the best, the first, the only, the same, the next, the last</em></li>
<li>Strumenti musicali e invenzioni: <em>play the piano · the wheel</em></li>
<li>Gruppi con aggettivo: <em>the rich, the unemployed, the elderly, the young</em> (verbo plurale)</li>
<li>Geografia: fiumi, mari, oceani, catene montuose, arcipelaghi, deserti (<em>the Thames, the Alps, the Sahara</em>); paesi al plurale o con "Republic / Kingdom / States" (<em>the Netherlands, the UK, the USA</em>)</li>
<li><em>the cinema, the theatre, the radio, the news, the countryside, the seaside</em></li>
<li>Con <em>of</em>: <em>the University of Trento, the history of art</em></li>
</ul>
<h3>4. Nessun articolo</h3>
<ul>
<li>Paesi, città, continenti, laghi, monti singoli, strade: <em>Italy, Lake Garda, Mount Everest, Oxford Street</em></li>
<li>Pasti, lingue, sport, materie, giorni, mesi: <em>have breakfast, speak English, play tennis, study law, on Monday</em></li>
<li>Luoghi usati per la loro funzione: <em>go to school / university / work / bed / hospital / prison / church</em>; <em>at home, by car, on foot</em></li>
<li>Possessivi invece dell'articolo per parti del corpo e vestiti: <span class="v">He put <b>his</b> hand in <b>his</b> pocket.</span></li>
<li><em>next / last</em> + week, month, year: <span class="v">last year</span> <span class="x">the last year</span> (the last year = l'ultimo anno di qualcosa)</li>
<li>Titoli + nome: <em>President Biden, Queen Elizabeth, Professor Rossi</em></li>
<li><em>most</em> = la maggior parte: <span class="v">Most people agree.</span> <span class="x">The most people</span> · <span class="v">most of <b>the</b> people I know</span></li>
<li><em>society, nature, space (= cosmo), man/mankind, television</em> in senso generale</li>
</ul>
<h3>5. Coppie che cambiano significato</h3>
<p><em>in hospital</em> (ricoverato) / <em>in the hospital</em> (nell'edificio) · <em>a little / a few</em> (un po', positivo) / <em>little / few</em> (poco, negativo) · <em>go to sea</em> (fare il marinaio) / <em>go to the sea</em>.</p>`,
items: [
mc('___ is one of the biggest industries in the world.', ['Tourism', 'The tourism', 'A tourism', 'Tourisms']),
mc('She wants to become ___ when she grows up.', ['an engineer', 'engineer', 'the engineer', 'a engineer']),
mc('___ should receive more help from the state.', ['The unemployed', 'Unemployed', 'The unemployeds', 'An unemployed']),
mc('We crossed ___ by train.', ['the Alps', 'Alps', 'an Alps', 'the Alp']),
mc('I went to ___ to visit my grandmother, who had broken her leg.', ['the hospital', 'hospital', 'a hospital\'s', 'hospitals'], 'Come visitatore → the hospital.'),
mc('___ people I spoke to agreed with the idea.', ['Most of the', 'The most', 'Most of', 'The most of']),
gap('What ___ beautiful day!', 'a'),
gap('He plays ___ guitar in a band.', 'the'),
gap('It was such ___ interesting lecture that nobody wanted to leave.', 'an'),
gap('It takes about half ___ hour to get there.', 'an'),
mc('I think ___ is more important than money.', ['health', 'the health', 'a health', 'healths']),
mc('We moved here ___.', ['last year', 'the last year', 'in last year', 'at the last year']),
mc('___ life of a student can be stressful.', ['The', 'A', '—', 'Some'], 'Specificata da "of a student" → the.'),
mc('There are ___ tickets left, so we can still go.', ['a few', 'few', 'a little', 'little'], 'a few = alcuni (positivo); few = pochi (negativo).'),
]},
{
group: 'Nomi e articoli', id: 'nouns', title: 'Nomi, quantificatori e accordo soggetto–verbo',
sum: 'Non numerabili traditori (advice, information…), much / many / few / little, either / neither / none.',
html: `
<h3>1. Nomi NON numerabili (niente plurale, niente a/an, verbo singolare)</h3>
<p><b>advice, information, news, furniture, luggage / baggage, equipment, homework, housework, work, research, evidence, knowledge, progress, traffic, accommodation, behaviour, weather, money, luck, permission, scenery, software, rubbish, damage, health, fun</b></p>
<p><span class="x">an advice / advices / informations / furnitures / a research / a news</span> → <span class="v">some advice, a piece of advice, a lot of information, a piece of furniture, a piece of research / a study, a piece of news</span>. <span class="v">The news <b>is</b> good.</span></p>
<p>Alcuni cambiano significato: <em>work</em> (lavoro) / <em>a work</em> (un'opera) · <em>experience</em> (esperienza in generale) / <em>an experience</em> (un episodio) · <em>paper</em> (carta) / <em>a paper</em> (un giornale, un articolo) · <em>time</em> / <em>a time, three times</em> · <em>damage</em> (danno) / <em>damages</em> (risarcimento) · <em>room</em> (spazio) / <em>a room</em>.</p>
<h3>2. Sempre plurali · irregolari</h3>
<p><em>people, police, cattle, clothes, trousers, jeans, glasses, scissors, goods, earnings, surroundings, premises, outskirts, belongings, stairs</em> → verbo plurale: <span class="v">The police <b>are</b> looking into it.</span></p>
<p><em>person → people · child → children · man → men · woman → women · foot → feet · tooth → teeth · mouse → mice · life → lives · criterion → criteria · phenomenon → phenomena · analysis → analyses · crisis → crises · a species → two species · a series → two series · a means → two means</em>.</p>
<h3>3. Quantificatori</h3>
<table>
<tr><th></th><th>Numerabili (plurale)</th><th>Non numerabili</th></tr>
<tr><td>molto</td><td>many, a (large) number of, several, numerous</td><td>much, a great deal of, a large amount of</td></tr>
<tr><td>molto (entrambi)</td><td colspan="2">a lot of, lots of, plenty of</td></tr>
<tr><td>un po' (positivo)</td><td>a few</td><td>a little, a bit of</td></tr>
<tr><td>poco (negativo)</td><td>few, very few, hardly any</td><td>little, very little, hardly any</td></tr>
<tr><td>meno</td><td>fewer</td><td>less</td></tr>
<tr><td>troppo / abbastanza</td><td>too many · enough</td><td>too much · enough</td></tr>
</table>
<p><em>much / many</em> si usano soprattutto in negative e domande; nelle affermative, <em>a lot of</em> (informale) o <em>a great deal of / a large number of</em> (formale). <span class="x">a large amount of people</span> → <span class="v">a large number of people</span>.</p>
<h3>4. All, both, either, neither, none, each, every</h3>
<table>
<tr><td><em>both</em> (tutti e due) + plurale</td><td><em>Both (of the) plans are good.</em></td></tr>
<tr><td><em>either</em> (l'uno o l'altro) + singolare</td><td><em>Either day is fine.</em> · <em>either of them</em></td></tr>
<tr><td><em>neither</em> (nessuno dei due) + singolare</td><td><em>Neither answer is correct.</em> · <em>neither of them is / are</em></td></tr>
<tr><td><em>none</em> (nessuno, tra tre o più)</td><td><em>None of the students has / have passed.</em></td></tr>
<tr><td><em>each / every</em> + singolare</td><td><em>Every student has a book.</em> · <em>each of them has</em> · mai <span class="x">every of</span></td></tr>
<tr><td><em>all</em> + plurale / non numerabile</td><td><em>All (of) the students · all day</em> · "tutto" pronome = <em>everything</em>: <span class="x">All is ready</span> → <span class="v">Everything is ready</span></td></tr>
<tr><td><em>whole</em></td><td><em>the whole day, my whole life</em></td></tr>
<tr><td><em>no</em> + nome / <em>none of</em> + the…</td><td><em>No student passed. · None of the students passed.</em></td></tr>
</table>
<h3>5. Accordo soggetto–verbo</h3>
<ul>
<li><em>everybody, everyone, nobody, someone, each, every</em> → verbo <b>singolare</b>: <span class="v">Everybody <b>knows</b>.</span> (ma si riprende con <em>they / their</em>)</li>
<li><em>the number of</em> + plurale → verbo <b>singolare</b>: <span class="v">The number of visitors <b>has</b> risen.</span></li>
<li><em>a number of</em> + plurale → verbo <b>plurale</b>: <span class="v">A number of problems <b>have</b> arisen.</span></li>
<li><em>one of the</em> + plurale → verbo singolare: <span class="v">One of my friends <b>lives</b> there.</span></li>
<li>Nomi collettivi (<em>team, government, family, staff, audience</em>): singolare o plurale in inglese britannico.</li>
<li>Somme, distanze, periodi come unità → singolare: <span class="v">Ten kilometres <b>is</b> a long way.</span></li>
</ul>
<h3>6. Genitivo sassone e nomi composti</h3>
<p><em>'s</em> per persone, animali, organizzazioni, tempo: <em>my sister<b>'s</b> car · the company<b>'s</b> profits · today<b>'s</b> paper · two weeks<b>'</b> holiday</em>. Plurale in -s: <em>my parents<b>'</b> house</em>. Per le cose, di solito <em>of</em> o nome composto: <em>the end of the film · the car door · a bus stop · a two-hour journey · a five-year-old child</em> (senza -s!).</p>`,
items: [
mc('Can you give me ___?', ['some advice', 'an advice', 'some advices', 'advices']),
mc('The news ___ better than we expected.', ['is', 'are', 'were', 'have been']),
mc('The police ___ investigating the case.', ['are', 'is', 'has been', 'was']),
mc('The number of tourists ___ doubled since 2010.', ['has', 'have', 'are', 'were']),
mc('A number of problems ___ arisen.', ['have', 'has', 'is', 'was']),
mc('There are ___ cars on the roads than there used to be.', ['fewer', 'less', 'lesser', 'little']),
mc('___ of the two candidates was suitable, so the job was advertised again.', ['Neither', 'None', 'Both', 'Either']),
mc('She did ___ research before writing the article.', ['a great deal of', 'a large number of', 'many', 'several']),
gap('Could you give me a ___ of information about the course?', ['piece', 'bit']),
gap('___ of my friends has been to Australia: they all want to go.', 'None'),
gap('We had very ___ time, so we took a taxi.', 'little'),
gap('It was a three-___ journey.', 'hour', 'Nome composto: niente -s.'),
mc('___ is ready for the party.', ['Everything', 'All', 'Every', 'All of']),
mc('Everybody ___ that the exam is difficult.', ['knows', 'know', 'are knowing', 'have known']),
]},
{
group: 'Aggettivi', id: 'adjectives', title: 'Aggettivi: ordine, gradazione, forme',
sum: 'Posizione e ordine, -ed / -ing, gradable e ungradable, aggettivi composti, comparativi.',
html: `
<h3>1. Posizione</h3>
<p>Prima del nome (<em>a <b>difficult</b> exam</em>) o dopo un verbo copulativo: <em>be, seem, appear, look, feel, sound, taste, smell, become, get, remain, stay</em> (<em>It <b>sounds interesting</b></em>, non <span class="x">interestingly</span>).</p>
<p>Solo dopo il verbo: <em>afraid, alive, alone, asleep, awake, aware, ashamed, glad, ill, content</em> (<span class="x">an asleep child</span> → <span class="v">a sleeping child</span>). Solo prima del nome: <em>main, chief, sole, mere, former, utter, sheer</em> (<em>the main reason</em>).</p>
<p>Gli aggettivi non hanno plurale: <span class="x">differents ideas</span> → <span class="v">different ideas</span>.</p>
<h3>2. Ordine di più aggettivi</h3>
<table>
<tr><th>Opinione</th><th>Dimensione</th><th>Età</th><th>Forma</th><th>Colore</th><th>Origine</th><th>Materiale</th><th>Scopo</th><th>Nome</th></tr>
<tr><td>a lovely</td><td>small</td><td>old</td><td>round</td><td>brown</td><td>Italian</td><td>wooden</td><td>dining</td><td>table</td></tr>
</table>
<p>In pratica: l'opinione viene sempre prima dei fatti. Non usarne più di due o tre.</p>
<h3>3. -ed o -ing</h3>
<p><b>-ed</b> = come mi sento · <b>-ing</b> = com'è la cosa che provoca la sensazione. <em>I'm <b>bored</b> because the film is <b>boring</b>.</em> <span class="x">I'm very interesting in history.</span> → <span class="v">interested</span>. Coppie: <em>amazed/amazing, confused/confusing, disappointed/disappointing, embarrassed/embarrassing, exhausted/exhausting, frustrated/frustrating, overwhelmed/overwhelming, thrilled/thrilling</em>.</p>
<h3>4. Gradable e ungradable (extreme)</h3>
<table>
<tr><th>Gradable</th><th>Extreme</th></tr>
<tr><td>good</td><td>excellent, superb, outstanding</td></tr>
<tr><td>bad</td><td>awful, dreadful, appalling</td></tr>
<tr><td>big</td><td>huge, enormous, immense, vast</td></tr>
<tr><td>small</td><td>tiny, minute</td></tr>
<tr><td>tired</td><td>exhausted</td></tr>
<tr><td>hungry / angry / cold / hot</td><td>starving / furious / freezing / boiling</td></tr>
<tr><td>interesting / surprising</td><td>fascinating / astonishing</td></tr>
<tr><td>important / necessary</td><td>crucial, vital, essential</td></tr>
<tr><td>funny / frightening</td><td>hilarious / terrifying</td></tr>
</table>
<table>
<tr><th>Con i gradable</th><th>Con gli extreme</th><th>Con entrambi</th></tr>
<tr><td>very, extremely, fairly, rather, slightly, a bit, incredibly</td><td>absolutely, utterly, completely, totally</td><td>really, quite (= abbastanza con i gradable; = del tutto con gli extreme)</td></tr>
</table>
<p><span class="x">very exhausted · very essential · absolutely tired</span> → <span class="v">absolutely exhausted · absolutely essential · very tired</span></p>
<p><b>Collocazioni avverbio + aggettivo</b> (da C1): <em>highly unlikely / qualified / successful / controversial · deeply concerned / moved / rooted · bitterly disappointed / cold · fully aware · perfectly clear / normal · widely known / accepted · strongly opposed · heavily dependent / influenced · painfully slow · greatly appreciated · virtually impossible</em>.</p>
<h3>5. Aggettivi composti</h3>
<p>Con il trattino prima del nome: <em>a <b>well-known</b> writer, a <b>three-hour</b> flight, a <b>ten-year-old</b> boy, a <b>part-time</b> job, <b>long-term</b> goals, <b>large-scale</b> construction, a <b>thought-provoking</b> film, a <b>time-consuming</b> task, <b>English-speaking</b> countries, an <b>open-minded</b> person, <b>short-sighted</b>, <b>hard-working</b>, <b>well-paid</b>, <b>so-called</b>, <b>high-profile</b>, <b>long-standing</b></em>.</p>
<h3>6. Comparativi e superlativi</h3>
<table>
<tr><td>1 sillaba, o 2 in -y</td><td>-er / -est: <em>cheaper, the cheapest · happier, the happiest</em></td></tr>
<tr><td>2+ sillabe</td><td><em>more / the most expensive</em></td></tr>
<tr><td>irregolari</td><td><em>good–better–best · bad–worse–worst · far–further–furthest · little–less–least · much/many–more–most</em></td></tr>
<tr><td>uguaglianza</td><td><em>as … as · not as/so … as · the same as · twice as … as</em></td></tr>
<tr><td>dopo il superlativo</td><td><em>in</em> + luogo / gruppo (<em>the best <b>in</b> the world</em>), <em>of</em> + periodo o insieme (<em>the best day <b>of</b> my life</em>)</td></tr>
<tr><td>tra due</td><td>comparativo con the: <em>the <b>more</b> significant of the two</em></td></tr>
</table>
<p>Forme avanzate (<em>the more… the more, nowhere near as, by far</em>): <a href="#t/g-comparatives">Comparativi avanzati</a>.</p>
<h3>7. Aggettivi usati come nomi · nazionalità</h3>
<p><em>the rich, the poor, the elderly, the disabled, the homeless</em> = categoria (plurale). Per una persona: <em>a rich <b>person</b></em>. <em>the Italians, the British, the French, the Chinese</em>.</p>
<h3>8. Aggettivo + preposizione</h3>
<p>Elenco completo in <a href="#t/th-prepositions">Preposizioni</a>.</p>`,
items: [
mc('I was ___ by the final result.', ['disappointed', 'disappointing', 'disappoint', 'disappointedly']),
mc('That soup smells ___.', ['delicious', 'deliciously', 'delicacy', 'more deliciously']),
mc('The view was ___ stunning.', ['absolutely', 'very', 'fairly', 'slightly']),
mc('She bought a ___ table.', ['beautiful old wooden', 'wooden old beautiful', 'old beautiful wooden', 'beautiful wooden old']),
mc('It is ___ unlikely that the plan will be approved.', ['highly', 'strongly', 'bitterly', 'heavily']),
mc('We were ___ disappointed by the decision.', ['bitterly', 'highly', 'widely', 'perfectly']),
mc('It was a ___ flight.', ['ten-hour', 'ten-hours', 'ten hour\'s', 'ten hours']),
mc('This is the best restaurant ___ the city.', ['in', 'of', 'from', 'at']),
gap('The more you read, the ___ your vocabulary becomes.', ['richer', 'better', 'bigger', 'wider'], '', '(RICH)'),
gap('It was the ___ film I have ever seen: I nearly walked out.', 'worst', '', '(BAD)'),
gap('The task was extremely time-___.', 'consuming'),
gap('Of the two proposals, the second is the ___ realistic.', 'more'),
mc('After the marathon I was ___.', ['absolutely exhausted', 'very exhausted', 'absolutely tired', 'utterly tired']),
mc('Which is correct?', ['a sleeping child', 'an asleep child', 'a sleep child', 'an asleeping child']),
]},
{
group: 'Avverbi', id: 'adverbs-all', title: 'Avverbi: formazione, posizione, trappole',
sum: 'hard / hardly, late / lately, dove mettere always, only, even, probably; avverbi di grado.',
html: `
<h3>1. Formazione</h3>
<table>
<tr><td>aggettivo + -ly</td><td><em>slow → slowly · careful → carefully</em></td></tr>
<tr><td>-y → -ily</td><td><em>happy → happily · easy → easily</em></td></tr>
<tr><td>-le → -ly</td><td><em>simple → simply · terrible → terribly · possible → possibly</em></td></tr>
<tr><td>-ic → -ically</td><td><em>basic → basically · dramatic → dramatically</em> (eccezione: <em>publicly</em>)</td></tr>
<tr><td>-ue → -uly · -ll → -lly</td><td><em>true → truly · due → duly · full → fully</em></td></tr>
<tr><td>irregolare</td><td><em>good → well</em></td></tr>
</table>
<p><b>Aggettivi in -ly</b> (non sono avverbi!): <em>friendly, lovely, lonely, lively, silly, elderly, costly, deadly, cowardly, likely, timely</em>. Per l'avverbio: <em>in a friendly way / manner</em>.</p>
<h3>2. Stessa forma per aggettivo e avverbio · coppie pericolose</h3>
<table>
<tr><th>Forma base (avverbio)</th><th>Forma in -ly (altro significato)</th></tr>
<tr><td><em>hard</em>: He works hard. (duramente)</td><td><em>hardly</em>: He hardly works. (quasi per niente)</td></tr>
<tr><td><em>late</em>: She arrived late. (in ritardo)</td><td><em>lately</em>: I haven't seen her lately. (ultimamente)</td></tr>
<tr><td><em>near</em>: Come nearer.</td><td><em>nearly</em>: I nearly fell. (quasi)</td></tr>
<tr><td><em>high</em>: The plane flew high.</td><td><em>highly</em>: highly recommended (molto)</td></tr>
<tr><td><em>free</em>: Children travel free. (gratis)</td><td><em>freely</em>: speak freely (liberamente)</td></tr>
<tr><td><em>deep</em>: dig deep</td><td><em>deeply</em>: deeply moved (profondamente, figurato)</td></tr>
<tr><td><em>wide</em>: open wide</td><td><em>widely</em>: widely known (diffusamente)</td></tr>
<tr><td><em>most</em>: what I like most</td><td><em>mostly</em>: mostly students (per lo più)</td></tr>
<tr><td><em>short</em>: stop short</td><td><em>shortly</em>: shortly after (poco dopo)</td></tr>
<tr><td><em>right / wrong</em>: do it right</td><td><em>rightly / wrongly</em>: rightly or wrongly (a ragione o a torto)</td></tr>
</table>
<p>Uguali: <em>fast, early, daily, weekly, straight, long, far, enough</em>. <span class="x">fastly</span> non esiste.</p>
<h3>3. Posizione: tre punti possibili</h3>
<table>
<tr><th>Posizione</th><th>Che cosa ci va</th><th>Esempio</th></tr>
<tr><td><b>Inizio</b></td><td>comment adverbs, connettivi, tempo</td><td><em>Fortunately,</em> nobody was hurt. · <em>Yesterday</em> I met Tom.</td></tr>
<tr><td><b>Centro</b> (prima del verbo principale; dopo <em>be</em>; dopo il primo ausiliare)</td><td>frequenza (<em>always, often, never, rarely</em>), certezza (<em>probably, definitely, certainly</em>), grado (<em>almost, nearly, hardly, completely</em>), <em>also, just, still, already, even, only</em></td><td>She <em>always arrives</em> late. · He <em>is always</em> late. · I <em>have never seen</em> it. · It <em>will probably rain</em>.</td></tr>
<tr><td><b>Fine</b></td><td>modo, luogo, tempo (in quest'ordine)</td><td>She sang <em>beautifully at the concert last night</em>.</td></tr>
</table>
<ul>
<li>Con il negativo, <em>probably / certainly / definitely</em> vanno <b>prima</b> di won't / don't: <span class="v">It <b>probably won't</b> rain.</span> <span class="x">It won't probably rain.</span></li>
<li>Mai tra verbo e oggetto: <span class="x">He speaks fluently English.</span></li>
<li><em>enough</em> va dopo aggettivi e avverbi: <em>fast <b>enough</b></em>; <em>too / very / quite</em> prima.</li>
<li><em>still</em> (centro, positivo: <em>He still lives here</em>; prima del negativo: <em>He still hasn't called</em>) · <em>yet</em> (fine, negative e domande) · <em>already</em> (centro) · <em>any more / any longer</em> (fine: <em>He doesn't live here any more</em>) · <em>no longer</em> (centro: <em>He no longer lives here</em>).</li>
</ul>
<h3>4. Focus adverbs: only, even, just, also, too</h3>
<p>Vanno subito prima di ciò che mettono in evidenza: <em><b>Only</b> John passed</em> (nessun altro) ≠ <em>John <b>only</b> passed</em> (non ha preso un bel voto). <em>also</em> al centro; <em>too / as well</em> alla fine; nelle negative <em>either</em>: <span class="v">I don't like it <b>either</b>.</span></p>
<h3>5. Avverbi di grado</h3>
<table>
<tr><td>forti</td><td><em>extremely, incredibly, remarkably, particularly, exceptionally, highly, deeply, utterly, thoroughly</em></td></tr>
<tr><td>medi</td><td><em>fairly, quite, rather, pretty</em> (informale), <em>reasonably, relatively, somewhat</em></td></tr>
<tr><td>deboli</td><td><em>slightly, a little, a bit, marginally, barely, hardly, scarcely</em></td></tr>
<tr><td>con i verbi</td><td><em>strongly recommend / believe · fully understand / agree · firmly believe · greatly appreciate · thoroughly enjoy · deeply regret · sincerely hope · entirely agree · categorically deny · vaguely remember</em></td></tr>
</table>
<p><em>rather</em> spesso ha tono negativo (<em>rather expensive</em>); <em>fairly</em> positivo (<em>fairly easy</em>). <em>quite a / rather a</em> + nome: <em>quite a difficult exam</em>.</p>
<h3>6. Avverbi negativi all'inizio → inversione</h3>
<p><em>Never, Rarely, Seldom, Hardly, Scarcely, Little, Not only, Only then</em>: <a href="#t/g-inversion">Inversion</a>.</p>
<h3>7. Comment adverbs</h3>
<p><em>Admittedly, Arguably, Apparently, Presumably, Undoubtedly…</em>: <a href="#t/g-adverbs">Comment adverbs ed enfasi</a>.</p>`,
items: [
mc('He was so tired that he could ___ keep his eyes open.', ['hardly', 'hard', 'nearly', 'lately']),
mc('I haven\'t been sleeping well ___.', ['lately', 'late', 'lastly', 'latest']),
mc('The film is ___ recommended.', ['highly', 'high', 'deep', 'widely high']),
mc('Which sentence is correct?', ['It probably won\'t rain tomorrow.', 'It won\'t probably rain tomorrow.', 'It won\'t rain probably tomorrow.', 'Probably it won\'t rain tomorrow rain.']),
mc('Which sentence is correct?', ['She has always wanted to live abroad.', 'She always has wanted to live abroad.', 'She has wanted always to live abroad.', 'Always she has wanted to live abroad.']),
mc('The staff treated us ___.', ['in a friendly way', 'friendly', 'friendlily', 'with friendly']),
mc('I ___ agree with you.', ['entirely', 'utterly very', 'highly', 'bitterly']),
mc('He doesn\'t work here ___.', ['any more', 'no longer', 'no more', 'yet more']),
gap('She speaks English very ___.', 'well', '', '(GOOD)'),
gap('Prices have risen ___ over the last year.', 'dramatically', '', '(DRAMATIC)'),
gap('I don\'t like horror films, and my sister doesn\'t ___.', 'either'),
gap('You\'re not driving fast ___: we\'ll be late.', 'enough'),
gap('She ___ lives in the same flat she moved into twenty years ago.', 'still'),
kwt('He doesn\'t live in Trento any more.', 'LONGER', 'He ___ in Trento.', ['no longer lives']),
]},
{
group: 'Preposizioni', id: 'prepositions', title: 'Preposizioni: tempo, luogo e preposizioni dipendenti',
sum: 'at / in / on, e gli elenchi verbo, aggettivo, nome + preposizione da sapere a memoria.',
html: `
<h3>1. Tempo</h3>
<table>
<tr><td><b>at</b></td><td>ore e momenti precisi: <em>at 6, at midnight, at the weekend, at Christmas, at the moment, at the end of May</em></td></tr>
<tr><td><b>on</b></td><td>giorni e date: <em>on Monday, on 5 May, on my birthday, on Friday morning</em></td></tr>
<tr><td><b>in</b></td><td>periodi lunghi e parti del giorno: <em>in July, in 2020, in summer, in the morning</em>; "fra": <em>in two weeks</em></td></tr>
<tr><td>—</td><td>niente preposizione con <em>last, next, this, every, today, tomorrow</em>: <em>next week</em></td></tr>
<tr><td><b>by</b> / <b>until</b></td><td><em>by Friday</em> = entro venerdì · <em>until Friday</em> = fino a venerdì</td></tr>
<tr><td><b>for</b> / <b>during</b> / <b>while</b></td><td><em>for two hours</em> (quanto) · <em>during the film</em> (quando, + nome) · <em>while I was watching</em> (+ frase)</td></tr>
<tr><td><b>in time</b> / <b>on time</b></td><td><em>in time</em> = in tempo (per qualcosa) · <em>on time</em> = puntuale</td></tr>
</table>
<h3>2. Luogo</h3>
<p><b>at</b> un punto o un'attività (<em>at the station, at work, at home, at the party, at the top</em>) · <b>in</b> uno spazio chiuso o un'area (<em>in the room, in Italy, in the photo, in the sky, in bed</em>) · <b>on</b> una superficie o una linea (<em>on the wall, on the left, on the coast, on the first floor, on the bus / train / plane</em>, ma <em>in the car</em>).</p>
<p><em>arrive <b>at</b> the station / <b>in</b> Rome</em> (mai <span class="x">arrive to</span>) · <em>go <b>to</b>, get <b>to</b></em> ma <em>go home</em> · <em>in the north of Italy</em> · <em>on the internet / on TV / on the radio / on the phone</em>.</p>
<h3>3. Verbo + preposizione</h3>
<table>
<tr><td><b>about</b></td><td>complain, worry, care, dream, think (opinione: think of), hear</td></tr>
<tr><td><b>at</b></td><td>look, stare, glance, laugh, smile, aim, shout (con rabbia)</td></tr>
<tr><td><b>for</b></td><td>apologise, apply, ask, blame sb, care, pay, search, wait, account, thank sb, forgive sb, vote, opt, cater, long</td></tr>
<tr><td><b>from</b></td><td>suffer, benefit, recover, differ, prevent / stop / discourage sb, result (= derivare da), protect, refrain, stem, distinguish</td></tr>
<tr><td><b>in</b></td><td>believe, succeed, specialise, result (= portare a), invest, participate, take part, confide, persist</td></tr>
<tr><td><b>of</b></td><td>accuse sb, approve, consist, remind sb, deprive sb, dispose, think, dream, convince sb, suspect sb, die</td></tr>
<tr><td><b>on</b></td><td>depend, rely, insist, concentrate, focus, comment, congratulate sb, spend (money), decide, base, impose, elaborate, count</td></tr>
<tr><td><b>to</b></td><td>belong, object, refer, listen, apply (rivolgersi / riguardare), contribute, react, respond, adapt, adjust, lead, amount, resort, confess, attribute, devote, adhere, appeal</td></tr>
<tr><td><b>with</b></td><td>agree, cope, deal, provide sb, comply, collide, interfere, sympathise, charge sb, associate, confront sb</td></tr>
</table>
<p><b>Senza preposizione</b> (trappole per italiani): <em>discuss <span class="x">about</span> a problem · enter <span class="x">in</span> a room · marry <span class="x">with</span> somebody · reach <span class="x">to</span> a place · phone <span class="x">to</span> somebody · answer <span class="x">to</span> a question · approach <span class="x">to</span> somebody · resemble <span class="x">to</span> · lack <span class="x">of</span> (verbo) · tell <span class="x">to</span> somebody · ask <span class="x">to</span> somebody · attend <span class="x">to</span> a course · influence <span class="x">on</span> · contact <span class="x">with</span></em>.</p>
<p><b>Con preposizione diversa dall'italiano</b>: <em>depend <b>on</b> · think <b>about/of</b> · dream <b>about/of</b> · laugh <b>at</b> · consist <b>of</b> · participate <b>in</b> · congratulate <b>on</b> · be married <b>to</b> · look <b>at</b> · listen <b>to</b> · wait <b>for</b> · explain <b>to</b> · pay <b>for</b> · ask <b>for</b></em>.</p>
<h3>4. Aggettivo + preposizione</h3>
<table>
<tr><td><b>about</b></td><td>anxious, worried, excited, enthusiastic, concerned, sceptical, curious, passionate</td></tr>
<tr><td><b>at</b></td><td>good, bad, brilliant, hopeless, surprised, amazed, skilled</td></tr>
<tr><td><b>for</b></td><td>responsible, famous, known, suitable, eligible, grateful, ready, sorry, notorious, renowned</td></tr>
<tr><td><b>from</b></td><td>different, absent, free, safe, exempt, distinct</td></tr>
<tr><td><b>in</b></td><td>interested, involved, experienced, rich, lacking, successful, fluent</td></tr>
<tr><td><b>of</b></td><td>afraid, aware, capable, fond, full, proud, tired, typical, ashamed, conscious, guilty, short, jealous, critical, worthy, wary, indicative, reminiscent</td></tr>
<tr><td><b>on</b></td><td>keen, dependent, reliant, intent, based</td></tr>
<tr><td><b>to</b></td><td>similar, married, related, used, accustomed, addicted, opposed, committed, devoted, prone, liable, sensitive, equivalent, superior, inferior, essential, vulnerable, resistant, relevant, entitled, subject, due, harmful, kind / rude / polite</td></tr>
<tr><td><b>with</b></td><td>satisfied, pleased, disappointed, bored, fed up, familiar, compatible, popular, crowded, angry / annoyed (with sb, about sth), consistent, faced, obsessed, acquainted</td></tr>
</table>
<h3>5. Nome + preposizione</h3>
<table>
<tr><td><b>in</b></td><td>an increase / rise / fall / drop / decline / reduction / change in · an interest in · a belief in · difficulty in · success in · confidence in</td></tr>
<tr><td><b>of</b></td><td>a lack of · the cause of · the risk of · the possibility of · a way of · an example of · a number of · the cost of · evidence of · awareness of · knowledge of · in favour of · at the expense of</td></tr>
<tr><td><b>for</b></td><td>a reason for · a need for · a demand for · respect for · responsibility for · a cure for · room for · a talent for · an excuse for · support for · a preference for</td></tr>
<tr><td><b>to</b></td><td>a solution to · an answer / reply to · access to · an alternative to · damage to · a threat to · an approach to · a reaction to · an invitation to · the key to · an exception to · a commitment to · an objection to</td></tr>
<tr><td><b>on</b></td><td>an effect / impact / influence on · a ban on · an attack on · a tax on · emphasis on · a report on · advice on · pressure on · an expert on · a limit on</td></tr>
<tr><td><b>with / between</b></td><td>a relationship with · contact with · trouble with · a problem with · the difference / link / connection between</td></tr>
</table>
<h3>6. Espressioni fisse</h3>
<p><em><b>at</b> first, at last, at least, at once, at risk, at stake, at a loss, at all costs, at a glance, at fault, at random, at short notice, at the latest, at ease</em><br>
<em><b>by</b> chance, by mistake, by heart, by far, by all means, by no means, by and large, by the way, by accident, by hand</em><br>
<em><b>in</b> advance, in charge of, in common, in fact, in favour of, in general, in particular, in practice, in public, in a hurry, in doubt, in the long run, in terms of, in the end, in vain, in turn, in touch, in control, in danger, in debt, in detail, in person</em><br>
<em><b>on</b> average, on behalf of, on purpose, on the whole, on the contrary, on duty, on strike, on sale, on time, on second thoughts, on the verge of, on condition that, on account of, on foot, on holiday, on business, on offer, on fire</em><br>
<em><b>out of</b> date, out of order, out of control, out of the question, out of reach, out of work, out of breath, out of stock, out of the blue</em><br>
<em><b>under</b> pressure, under control, under the impression that, under no circumstances, under way, under construction, under threat</em><br>
<em><b>beyond</b> doubt, beyond belief, beyond repair · <b>within</b> reach, within reason · <b>for</b> good, for the time being, for the sake of, for a change, for granted</em></p>
<p>Flashcard: mazzo <a href="#lessico/preps">Preposizioni dipendenti</a>.</p>`,
items: [
mc('We arrived ___ the airport two hours early.', ['at', 'to', 'in', 'on']),
mc('You must hand in the essay ___ Friday at the latest.', ['by', 'until', 'within', 'for']),
mc('We need to discuss ___ before the meeting.', ['the problem', 'about the problem', 'on the problem', 'of the problem']),
mc('It depends ___ the weather.', ['on', 'from', 'of', 'by']),
mc('She is married ___ a doctor.', ['to', 'with', 'at', 'by']),
mc('He congratulated me ___ passing the exam.', ['on', 'for', 'of', 'about']),
mc('There has been a sharp increase ___ unemployment.', ['in', 'of', 'on', 'at']),
mc('Smoking has a harmful effect ___ your health.', ['on', 'to', 'in', 'for']),
gap('I\'m not very good ___ maths.', 'at'),
gap('She is perfectly capable ___ doing it herself.', 'of'),
gap('Nobody could think of a solution ___ the problem.', 'to'),
gap('He insisted ___ paying for everything.', 'on'),
gap('I broke the vase ___ mistake.', 'by'),
gap('The lift is out ___ order again.', 'of'),
gap('I\'m writing on ___ of all the residents of the building.', 'behalf'),
gap('The plane took off exactly ___ time.', 'on'),
gap('They were deprived ___ their basic rights.', 'of'),
gap('The talks are aimed ___ reducing tension.', 'at'),
]},
{
group: 'Lessico e formazione delle parole', id: 'word-formation', title: 'Word formation: prefissi e suffissi',
sum: 'Le tabelle complete per la Part 3: come si formano nomi, aggettivi, verbi e avverbi.',
html: `
<h3>Metodo per la Part 3</h3>
<p>1) Guarda cosa c'è prima e dopo lo spazio per capire la <b>categoria</b> (dopo <em>a / the / of</em> → nome; prima di un nome → aggettivo; accanto a un verbo o un aggettivo → avverbio). 2) Leggi il <b>senso</b>: serve il <b>negativo</b>? 3) Serve il <b>plurale</b> o la terza persona? 4) Controlla lo <b>spelling</b>.</p>
<h3>1. Suffissi per formare NOMI</h3>
<table>
<tr><th>Suffisso</th><th>Esempi</th></tr>
<tr><td>-tion / -sion / -ation</td><td>produce → production · decide → decision · explain → explanation · pronounce → pronunciation · reduce → reduction · conclude → conclusion · permit → permission · compete → competition · repeat → repetition</td></tr>
<tr><td>-ment</td><td>develop → development · achieve → achievement · improve → improvement · require → requirement · argue → argument (senza e)</td></tr>
<tr><td>-ness</td><td>aware → awareness · happy → happiness · weak → weakness · lonely → loneliness · playful → playfulness</td></tr>
<tr><td>-ity / -ty</td><td>able → ability · secure → security · similar → similarity · curious → curiosity · anxious → anxiety · certain → certainty · safe → safety · popular → popularity · generous → generosity</td></tr>
<tr><td>-ance / -ence</td><td>appear → appearance · perform → performance · differ → difference · exist → existence · rely → reliance · resist → resistance · occur → occurrence · prefer → preference</td></tr>
<tr><td>-ancy / -ency</td><td>efficient → efficiency · tend → tendency · frequent → frequency · pregnant → pregnancy</td></tr>
<tr><td>-al</td><td>arrive → arrival · refuse → refusal · propose → proposal · survive → survival · approve → approval · deny → denial · remove → removal</td></tr>
<tr><td>-th</td><td>long → length · strong → strength · wide → width · deep → depth · grow → growth · true → truth · warm → warmth · die → death · high → height</td></tr>
<tr><td>-ship / -hood / -dom</td><td>friendship, relationship, membership, leadership, ownership · childhood, neighbourhood, likelihood · freedom, boredom, wisdom</td></tr>
<tr><td>-ure / -age / -y</td><td>fail → failure · press → pressure · depart → departure · marry → marriage · short → shortage · discover → discovery · recover → recovery</td></tr>
<tr><td>persone: -er / -or / -ist / -ant / -ee / -ian</td><td>employer / employee · competitor · scientist · participant · applicant · assistant · politician · musician · survivor · resident · representative</td></tr>
<tr><td>irregolari</td><td>choose → choice · lose → loss · prove → proof · believe → belief · succeed → success · think → thought · fly → flight · give → gift · know → knowledge · behave → behaviour · complain → complaint · weigh → weight · sell → sale · see → sight · speak → speech · respond → response · pursue → pursuit · hate → hatred · proud → pride · poor → poverty · brave → bravery · hot → heat · angry → anger · hungry → hunger</td></tr>
</table>
<h3>2. Suffissi per formare AGGETTIVI</h3>
<table>
<tr><td>-able / -ible</td><td>rely → reliable · afford → affordable · sustain → sustainable · access → accessible · respond → responsible · sense → sensible · notice → noticeable · advise → advisable</td></tr>
<tr><td>-al / -ial / -ical</td><td>environment → environmental · finance → financial · benefit → beneficial · influence → influential · history → historical / historic · economy → economic / economical</td></tr>
<tr><td>-ful / -less</td><td>harm → harmful / harmless · care → careful / careless · use → useful / useless · doubt → doubtful · point → pointless · end → endless · success → successful</td></tr>
<tr><td>-ous / -ious</td><td>danger → dangerous · ambition → ambitious · vary → various · space → spacious · mystery → mysterious · anxiety → anxious · disaster → disastrous · number → numerous</td></tr>
<tr><td>-ive</td><td>create → creative · compete → competitive · attract → attractive · effect → effective · decide → decisive · destroy → destructive · persuade → persuasive · defend → defensive</td></tr>
<tr><td>-ic</td><td>science → scientific · energy → energetic · drama → dramatic · enthusiasm → enthusiastic · sympathy → sympathetic · apology → apologetic</td></tr>
<tr><td>-y / -ly / -ish</td><td>health → healthy · risk → risky · friend → friendly · cost → costly · child → childish</td></tr>
<tr><td>-ant / -ent</td><td>signify → significant · resist → resistant · differ → different · depend → dependent · please → pleasant · rely → reliant · persist → persistent</td></tr>
<tr><td>-ed / -ing</td><td>surprise → surprised / surprising · overwhelm → overwhelmed / overwhelming</td></tr>
<tr><td>-ary / -ory</td><td>imagine → imaginary · satisfy → satisfactory · contradict → contradictory · legend → legendary</td></tr>
</table>
<p>Attenzione alle coppie: <em>economic</em> (dell'economia) / <em>economical</em> (che fa risparmiare) · <em>historic</em> (di importanza storica) / <em>historical</em> (relativo alla storia) · <em>sensible</em> (ragionevole) / <em>sensitive</em> (sensibile) · <em>imaginary</em> (immaginario) / <em>imaginative</em> (fantasioso) · <em>industrial</em> / <em>industrious</em> (laborioso) · <em>considerable</em> (notevole) / <em>considerate</em> (premuroso).</p>
<h3>3. Per formare VERBI</h3>
<table>
<tr><td>-ise / -ize</td><td>modern → modernise · critic → criticise · apology → apologise · summary → summarise · emphasis → emphasise · symbol → symbolise · minimum → minimise</td></tr>
<tr><td>-en</td><td>wide → widen · short → shorten · strength → strengthen · length → lengthen · threat → threaten · weak → weaken · height → heighten · deep → deepen · worse → worsen · broad → broaden</td></tr>
<tr><td>-ify</td><td>simple → simplify · clear → clarify · class → classify · identity → identify · just → justify · pure → purify · intense → intensify</td></tr>
<tr><td>-ate</td><td>active → activate · motive → motivate · origin → originate · different → differentiate</td></tr>
<tr><td>en- / em-</td><td>able → enable · large → enlarge · sure → ensure · rich → enrich · courage → encourage · danger → endanger · force → enforce · power → empower</td></tr>
</table>
<h3>4. Prefissi</h3>
<table>
<tr><th>Prefisso</th><th>Significato</th><th>Esempi</th></tr>
<tr><td>un-</td><td>negativo (il più comune)</td><td>unaware, unable, uncertain, unexpected, unreliable, unusual, unlikely, unemployed, undo, unlock</td></tr>
<tr><td>in- / im- / il- / ir-</td><td>negativo: <b>im-</b> davanti a p, m, b · <b>il-</b> davanti a l · <b>ir-</b> davanti a r</td><td>inaccurate, incapable, insecure · impossible, immature, imbalance · illegal, illogical · irregular, irrelevant, irresponsible</td></tr>
<tr><td>dis-</td><td>opposto / negativo</td><td>disagree, disappear, dislike, dishonest, disadvantage, disapprove, dissatisfied, disorganised, disobey, disability</td></tr>
<tr><td>mis-</td><td>in modo sbagliato</td><td>misunderstand, mislead, misbehave, misuse, misinterpret, misjudge, misfortune, mistrust</td></tr>
<tr><td>non-</td><td>non</td><td>non-existent, non-profit, non-fiction, nonsense</td></tr>
<tr><td>over- / under-</td><td>troppo / troppo poco</td><td>overestimate, overcrowded, overpriced, overwork, overreact · underestimate, underpaid, undervalued, undergo</td></tr>
<tr><td>re-</td><td>di nuovo</td><td>rebuild, reconsider, rewrite, reunite, replace, reassure</td></tr>
<tr><td>out-</td><td>superare</td><td>outnumber, outlive, outperform, outweigh, outgrow</td></tr>
<tr><td>pre- / post-</td><td>prima / dopo</td><td>prearrange, predate, prehistoric · postpone, postgraduate, post-war</td></tr>
<tr><td>co- / inter-</td><td>insieme / tra</td><td>cooperate, co-worker, coexist · international, interact, interdependent</td></tr>
<tr><td>self-</td><td>se stesso</td><td>self-confident, self-esteem, self-employed, self-sufficient, self-deprecating</td></tr>
<tr><td>counter- / anti- / pro-</td><td>contro / a favore</td><td>counterproductive, counterpart, antisocial, anti-war, pro-European</td></tr>
<tr><td>sub- / super- / semi- / multi-</td><td>sotto / sopra / mezzo / molti</td><td>subconscious, substandard · supernatural · semi-final · multicultural, multitasking</td></tr>
<tr><td>up- / down-</td><td>su / giù</td><td>upgrade, update, upbringing, uphold · downgrade, download, downturn, downside</td></tr>
</table>
<p><b>un- o in-?</b> (lezione della docente) Non c'è regola sicura, ma: <em>un-</em> si attacca a quasi tutte le parole di origine germanica e ai participi (<em>unknown, unfinished, unpredictable, unforgettable</em>); <em>in-/im-/il-/ir-</em> a parole di origine latina (<em>incorrect, inevitable, impatient</em>). Coppie irregolari: <em>able → <b>un</b>able</em> ma <em>ability → <b>in</b>ability</em>; <em>stable → <b>un</b>stable</em> ma <em><b>in</b>stability</em>; <em>equal → <b>un</b>equal</em> ma <em><b>in</b>equality</em>; <em>just → <b>un</b>just</em> ma <em><b>in</b>justice</em>; <em>grateful → <b>un</b>grateful</em> ma <em><b>in</b>gratitude</em>. Flashcard: <a href="#lessico/prefixes">prefissi negativi</a>.</p>
<h3>5. Spelling</h3>
<ul>
<li>-y → -i- davanti al suffisso: <em>happy → happiness, rely → reliable, vary → various</em> (ma <em>enjoy → enjoyment</em>)</li>
<li>-e muta cade davanti a vocale: <em>create → creative, argue → arguable</em>; resta davanti a consonante: <em>hope → hopeful</em> (eccezioni: <em>argument, truly</em>)</li>
<li>raddoppio della consonante: <em>begin → beginning, occur → occurrence, regret → regrettable, prefer → preferred</em> (ma <em>preference</em>)</li>
<li>-ful ha una sola l: <em>beautiful</em>; l'avverbio ne ha due: <em>beautifully</em></li>
</ul>
<p>Famiglie di parole: mazzo <a href="#lessico/families">Word families</a>.</p>`,
items: [
gap('There is a serious ___ of affordable housing in the city.', 'shortage', '', 'SHORT'),
gap('The ___ of the bridge is over two kilometres.', 'length', '', 'LONG'),
gap('Her ___ to accept the offer surprised everyone.', 'refusal', '', 'REFUSE'),
gap('The new system is far more ___ than the old one.', 'efficient', '', 'EFFICIENCY'),
gap('It was a ___ decision that changed the course of the match.', 'decisive', '', 'DECIDE'),
gap('The instructions were so ___ that nobody understood them.', 'misleading', '', 'LEAD'),
gap('Regular exercise ___ the heart and lungs.', 'strengthens', 'Verbo alla terza persona.', 'STRONG'),
gap('The results were ___, so the experiment had to be repeated.', 'inconclusive', '', 'CONCLUDE'),
gap('The government has promised to ___ the tax system.', 'simplify', '', 'SIMPLE'),
gap('There is growing ___ between rich and poor.', 'inequality', '', 'EQUAL'),
gap('He was fired for his ___ behaviour.', 'irresponsible', '', 'RESPONSE'),
gap('The staff are badly ___ and often work unpaid overtime.', 'underpaid', '', 'PAY'),
gap('In all ___, the match will be postponed.', ['likelihood', 'probability'], 'in all likelihood = con ogni probabilità', 'LIKE'),
gap('Electric cars are much more ___ to run than petrol ones.', 'economical', 'economical = che fa risparmiare', 'ECONOMY'),
gap('Her ___ of the city\'s history is remarkable.', 'knowledge', '', 'KNOW'),
gap('The benefits clearly ___ the costs.', 'outweigh', '', 'WEIGH'),
]},
{
group: 'Lessico e formazione delle parole', id: 'collocations', title: 'Collocazioni: make, do, have, take, get, give e altre',
sum: 'Quale verbo va con quale nome: l\'area dove un B2 si riconosce subito.',
html: `
<p>Le <b>collocazioni</b> sono coppie di parole che i madrelingua usano sempre insieme. Non si deducono: si imparano. Sono la materia della Part 1.</p>
<h3>1. Make o do?</h3>
<table>
<tr><th>MAKE (creare, produrre un risultato)</th><th>DO (svolgere un'attività, un lavoro)</th></tr>
<tr><td>a mistake, a decision, a choice, an effort, an attempt, progress, a difference, a suggestion, a complaint, an excuse, a promise, a profit, a living, money, a noise, a mess, a phone call, an appointment, arrangements, plans, a speech, a comment, a point, an impression, an exception, a discovery, a contribution, sense, sure, friends, room for, the most of, up your mind, do with (= arrangiarsi)</td><td>homework, housework, the shopping, the washing-up, research, a course, an exam, an exercise, business, a job, your best, damage, harm, good, a favour, well / badly, without, sport / yoga, a degree, your duty, the right thing, wonders</td></tr>
</table>
<h3>2. Have, take, give, get</h3>
<table>
<tr><td><b>have</b></td><td>a look, a rest, a chat, a word with sb, an argument, a go, an effect / impact on, access to, difficulty (in) doing, trouble, a good time, a tendency to, no idea, the opportunity, second thoughts, a say in</td></tr>
<tr><td><b>take</b></td><td>a break, a seat, a photo, an exam, notes, a risk, a chance, action, measures, steps, place, part in, advantage of, care of, responsibility for, pride in, notice of, into account, for granted, time, turns, the blame, charge of, offence, effect, a toll on</td></tr>
<tr><td><b>give</b></td><td>advice, a hand, a speech / talk / presentation, an example, permission, priority to, rise to (= causare), way to, the impression, a reason, a warning, sb a lift, sb a call, birth, it a try, sb the benefit of the doubt</td></tr>
<tr><td><b>get</b></td><td>a job, a degree, the impression, the chance, rid of, in touch with, to know, used to, on sb's nerves, the message / the point, hold of, lost, married, ready, worse, nowhere, your own way</td></tr>
</table>
<h3>3. Altri verbi chiave</h3>
<table>
<tr><td><b>pay</b></td><td>attention to, a visit, a compliment, tribute to, the price</td></tr>
<tr><td><b>keep</b></td><td>a promise, a secret, in touch, an eye on, track of, pace with, sb waiting, your word, calm, a diary</td></tr>
<tr><td><b>break</b></td><td>the law, a promise, a record, the news, the ice, a habit, new ground</td></tr>
<tr><td><b>catch</b></td><td>a cold, a bus, sb's attention, sight of, fire, up with</td></tr>
<tr><td><b>raise</b></td><td>awareness, a question, an issue, concerns, funds, standards, children, your voice</td></tr>
<tr><td><b>reach</b></td><td>a conclusion, an agreement, a decision, a compromise, a target, a peak</td></tr>
<tr><td><b>meet</b></td><td>a deadline, a need, requirements, expectations, a target, the cost, demand</td></tr>
<tr><td><b>draw</b></td><td>a conclusion, attention to, a distinction, a comparison, a line, up a plan</td></tr>
<tr><td><b>set</b></td><td>a goal, an example, a record, a precedent, a date, fire to, foot in, the standard</td></tr>
<tr><td><b>run</b></td><td>a business, a risk, a course, late, out of, into trouble</td></tr>
<tr><td><b>hold</b></td><td>a meeting, an election, a view, a record, sb responsible, your breath</td></tr>
<tr><td><b>pose / face / tackle / address</b></td><td>pose a threat / a problem · face a challenge / difficulties · tackle a problem · address an issue</td></tr>
<tr><td><b>gain / lose</b></td><td>experience, weight, access, an insight, momentum · your temper, touch with, track of, patience, face</td></tr>
<tr><td><b>bear</b></td><td>in mind, a resemblance to, the cost, responsibility, no relation to</td></tr>
<tr><td><b>commit / conduct / carry out</b></td><td>commit a crime · conduct / carry out research, a survey, an experiment</td></tr>
<tr><td><b>express / voice</b></td><td>concern, an opinion, doubts, gratitude</td></tr>
</table>
<h3>4. Aggettivo + nome</h3>
<p><em><b>heavy</b> rain / traffic / smoker / workload · <b>strong</b> wind / coffee / accent / feeling / argument / possibility · <b>high</b> price / speed / standard / quality / expectations · <b>deep</b> sleep / breath / trouble · <b>great</b> importance / success / pleasure · <b>big</b> decision / mistake / difference · <b>serious</b> problem / illness / damage · <b>close</b> friend / relationship / look · <b>wide</b> range / variety · <b>vast</b> majority · <b>slight</b> difference / chance · <b>keen</b> interest · <b>fierce</b> competition · <b>mixed</b> feelings · <b>golden</b> opportunity · <b>vicious</b> circle · <b>bare</b> minimum · <b>sole</b> purpose · <b>mere</b> coincidence · <b>stark</b> contrast · <b>profound</b> effect</em></p>
<p><span class="x">strong rain · big importance · high possibility · do a mistake · make a research · do a decision · say a lie · make a party · do an effort</span> → <span class="v">heavy rain · great importance · strong possibility · make a mistake · do research · make a decision · tell a lie · have a party · make an effort</span></p>
<p>Flashcard: <a href="#lessico/colloc">Collocations da C1</a>.</p>`,
items: [
mc('I think we need to ___ a decision soon.', ['make', 'do', 'have', 'give']),
mc('Scientists have been ___ research into the disease for years.', ['doing', 'making', 'giving', 'having']),
mc('The storm ___ serious damage to the coast.', ['did', 'made', 'gave', 'put']),
mc('The government must ___ action immediately.', ['take', 'do', 'make', 'have']),
mc('His behaviour ___ rise to a number of complaints.', ['gave', 'made', 'took', 'did']),
mc('It was difficult to ___ the deadline.', ['meet', 'reach', 'catch', 'arrive']),
mc('We had ___ rain all weekend.', ['heavy', 'strong', 'big', 'hard']),
mc('The vast ___ of students passed.', ['majority', 'most', 'part', 'number']),
mc('She ___ an excellent impression at the interview.', ['made', 'did', 'gave to', 'had done']),
mc('The campaign aims to ___ awareness of the problem.', ['raise', 'rise', 'lift', 'grow']),
gap('Could you ___ me a favour and post this letter?', 'do'),
gap('You should ___ the most of your time abroad.', 'make'),
gap('Don\'t ___ any notice of what he says.', 'take'),
gap('Please ___ in mind that the office closes at five.', ['bear', 'keep']),
gap('I\'d like to ___ a complaint about the service.', 'make'),
gap('It doesn\'t ___ any sense to me.', 'make'),
kwt('He didn\'t try at all to help us.', 'EFFORT', 'He ___ to help us.', ['made no effort', 'did not make any effort', 'did not make an effort']),
kwt('The new law will not affect small businesses.', 'IMPACT', 'The new law will ___ small businesses.', ['have no impact on', 'not have an impact on', 'not have any impact on']),
]},
{
group: 'Lessico e formazione delle parole', id: 'italian-mistakes', title: 'Errori tipici degli italiani e false friends',
sum: 'La lista di controllo da ripassare prima di ogni writing e speaking.',
html: `
<h3>1. False friends</h3>
<table>
<tr><th>Parola inglese</th><th>NON significa</th><th>Significa</th><th>Per dire l'italiano…</th></tr>
<tr><td>actually</td><td>attualmente</td><td>in realtà</td><td>currently, at present, nowadays</td></tr>
<tr><td>eventually</td><td>eventualmente</td><td>alla fine</td><td>possibly, if necessary</td></tr>
<tr><td>sensible</td><td>sensibile</td><td>ragionevole</td><td>sensitive</td></tr>
<tr><td>sympathetic</td><td>simpatico</td><td>comprensivo</td><td>nice, friendly, likeable</td></tr>
<tr><td>argument</td><td>argomento</td><td>discussione, lite; tesi</td><td>topic, subject, issue</td></tr>
<tr><td>to pretend</td><td>pretendere</td><td>fingere</td><td>expect, demand, claim</td></tr>
<tr><td>to attend</td><td>attendere</td><td>frequentare, partecipare</td><td>wait (for)</td></tr>
<tr><td>to assist</td><td>assistere a</td><td>aiutare</td><td>attend, witness</td></tr>
<tr><td>library</td><td>libreria</td><td>biblioteca</td><td>bookshop</td></tr>
<tr><td>factory</td><td>fattoria</td><td>fabbrica</td><td>farm</td></tr>
<tr><td>parents</td><td>parenti</td><td>genitori</td><td>relatives</td></tr>
<tr><td>education</td><td>educazione (buone maniere)</td><td>istruzione</td><td>manners, upbringing; polite = educato</td></tr>
<tr><td>to realise</td><td>realizzare (fare)</td><td>rendersi conto</td><td>carry out, achieve, make</td></tr>
<tr><td>to control</td><td>controllare (verificare)</td><td>comandare, tenere sotto controllo</td><td>check</td></tr>
<tr><td>to annoy</td><td>annoiare</td><td>dare fastidio</td><td>bore</td></tr>
<tr><td>convenient</td><td>conveniente (economico)</td><td>comodo</td><td>cheap, affordable, good value</td></tr>
<tr><td>fabric</td><td>fabbrica</td><td>tessuto</td><td>factory</td></tr>
<tr><td>to support</td><td>sopportare</td><td>sostenere</td><td>stand, bear, put up with</td></tr>
<tr><td>morbid</td><td>morbido</td><td>morboso</td><td>soft</td></tr>
<tr><td>confident</td><td>confidente</td><td>sicuro di sé</td><td>close friend; to confide in</td></tr>
<tr><td>rumour</td><td>rumore</td><td>voce, pettegolezzo</td><td>noise</td></tr>
<tr><td>to retire</td><td>ritirare</td><td>andare in pensione</td><td>withdraw, collect, pick up</td></tr>
<tr><td>to propose (a persona)</td><td>proporre</td><td>fare una proposta di matrimonio</td><td>suggest</td></tr>
<tr><td>terrific</td><td>terrificante</td><td>fantastico</td><td>terrifying</td></tr>
<tr><td>comprehensive</td><td>comprensivo</td><td>completo, esauriente</td><td>understanding</td></tr>
<tr><td>lecture</td><td>lettura</td><td>lezione universitaria</td><td>reading</td></tr>
<tr><td>novel</td><td>novella</td><td>romanzo</td><td>short story</td></tr>
<tr><td>casual</td><td>casuale</td><td>informale</td><td>random, by chance</td></tr>
<tr><td>to demand</td><td>domandare</td><td>esigere</td><td>ask</td></tr>
<tr><td>ultimately</td><td>ultimamente</td><td>in definitiva</td><td>lately, recently</td></tr>
<tr><td>incident</td><td>incidente (stradale)</td><td>episodio</td><td>accident</td></tr>
<tr><td>to discuss</td><td>discutere (litigare)</td><td>parlare di</td><td>argue</td></tr>
</table>
<h3>2. Strutture calcate sull'italiano</h3>
<table>
<tr><th>✗</th><th>✓</th></tr>
<tr><td>I am agree.</td><td>I agree.</td></tr>
<tr><td>I have 25 years.</td><td>I am 25 (years old).</td></tr>
<tr><td>It depends from…</td><td>It depends on…</td></tr>
<tr><td>I am here since / from two years.</td><td>I have been here for two years.</td></tr>
<tr><td>I'm used to go.</td><td>I'm used to going.</td></tr>
<tr><td>I want that you come.</td><td>I want you to come.</td></tr>
<tr><td>He explained me / He said me / He suggested me</td><td>He explained to me / He told me / He suggested that I…</td></tr>
<tr><td>People is / The people thinks</td><td>People are / People think</td></tr>
<tr><td>I didn't know nothing.</td><td>I didn't know anything.</td></tr>
<tr><td>How do you call this?</td><td>What do you call this?</td></tr>
<tr><td>How is the weather like?</td><td>What is the weather like?</td></tr>
<tr><td>I'm thinking to go.</td><td>I'm thinking of going.</td></tr>
<tr><td>I lost the train.</td><td>I missed the train.</td></tr>
<tr><td>I knew her at a party.</td><td>I met her at a party.</td></tr>
<tr><td>to do a photo / a party / a question</td><td>to take a photo / have a party / ask a question</td></tr>
<tr><td>to make a travel</td><td>to go on a trip / journey; travel (non numerabile)</td></tr>
<tr><td>I'm boring. (= mi annoio)</td><td>I'm bored.</td></tr>
<tr><td>It's two years that I study.</td><td>I've been studying for two years.</td></tr>
<tr><td>More easy / more better</td><td>easier / better</td></tr>
<tr><td>I prefer to stay at home than go out.</td><td>I prefer staying at home to going out. / I'd rather stay at home than go out.</td></tr>
<tr><td>In my opinion, I think…</td><td>In my opinion, … (non ripetere)</td></tr>
<tr><td>According to me</td><td>In my view / To my mind (according to solo per altri)</td></tr>
<tr><td>the same of / different than (BrE)</td><td>the same as / different from</td></tr>
<tr><td>It's a problem very serious.</td><td>It's a very serious problem.</td></tr>
<tr><td>to say a lie / to tell that…</td><td>to tell a lie / to say that…</td></tr>
<tr><td>I hope to see you soon and that you are fine.</td><td>I hope you are well…</td></tr>
<tr><td>Thanks God / Thanks to have come</td><td>Thank God / Thanks for coming</td></tr>
<tr><td>I look forward to hear from you.</td><td>I look forward to hearing from you.</td></tr>
<tr><td>She is used to wake up early every day. (abitudine presente)</td><td>She usually wakes up early.</td></tr>
<tr><td>Despite of / In spite the rain</td><td>Despite / In spite of the rain</td></tr>
</table>
<h3>3. Coppie che si confondono</h3>
<p><em><b>say</b> (something) / <b>tell</b> (somebody) · <b>lend</b> (dare in prestito) / <b>borrow</b> (prendere in prestito) · <b>bring</b> (verso chi parla) / <b>take</b> (via) · <b>rise</b> (salire, senza oggetto) / <b>raise</b> (alzare qualcosa) · <b>lie – lay – lain</b> (giacere) / <b>lay – laid – laid</b> (posare) · <b>affect</b> (verbo) / <b>effect</b> (nome) · <b>remember</b> / <b>remind</b> (far ricordare a qualcuno) · <b>rob</b> (una persona, una banca) / <b>steal</b> (una cosa) · <b>win</b> (una gara) / <b>beat</b> (un avversario) · <b>earn</b> (guadagnare lavorando) / <b>gain</b> (acquisire) · <b>hear</b> / <b>listen to</b> · <b>see</b> / <b>look at</b> / <b>watch</b> · <b>job</b> (numerabile) / <b>work</b> (non numerabile) · <b>trip</b> / <b>journey</b> / <b>travel</b> · <b>fun</b> (divertente) / <b>funny</b> (buffo) · <b>economic</b> / <b>economical</b> · <b>lose</b> (perdere) / <b>loose</b> (largo) · <b>its</b> (suo) / <b>it's</b> (it is) · <b>advice</b> (nome) / <b>advise</b> (verbo) · <b>practice</b> (nome) / <b>practise</b> (verbo, BrE) · <b>principal</b> / <b>principle</b> · <b>beside</b> / <b>besides</b> · <b>especially</b> / <b>specially</b> · <b>historic</b> / <b>historical</b> · <b>all together</b> / <b>altogether</b> · <b>continual</b> (ripetuto) / <b>continuous</b> (ininterrotto)</em></p>
<h3>4. Punteggiatura e spelling</h3>
<ul>
<li><b>Maiuscole</b>: giorni, mesi, nazionalità, lingue (<em>Monday, July, Italian, English</em>) e il pronome <em>I</em>.</li>
<li><b>Niente virgola</b> tra soggetto e verbo, né prima di <em>that</em>: <span class="x">I think, that he is right.</span></li>
<li><b>Virgola</b> dopo un avverbio o una subordinata iniziale: <em>However, … · If it rains, we'll stay in. · Having finished, she left.</em> E attorno alle relative non-defining.</li>
<li><b>Apostrofo</b>: contrazioni (solo testi informali) e possesso. Mai per i plurali: <span class="x">the 1990's, photo's</span>.</li>
<li><b>Numeri</b>: virgola per le migliaia, punto per i decimali: <em>1,500 people · 3.5 per cent</em>.</li>
<li><b>Spelling britannico</b> (sii coerente): <em>colour, behaviour, centre, organise, travelled, programme, defence, licence (nome)</em>. Va bene anche l'americano, ma non mischiare.</li>
<li><b>Parole che si sbagliano sempre</b>: <em>accommodation, necessary, definitely, separate, government, environment, receive, believe, achieve, beginning, occurred, successful, independent, responsible, recommend, opportunity, immediately, although, through, which, because, their / there / they're, whether / weather, until (una l), tomorrow, address, business, different, embarrassed, foreign, knowledge, privilege, questionnaire, rhythm, surprise, truly, unfortunately, writing (una t), written (due t)</em>.</li>
</ul>`,
items: [
mc('She\'s very ___: she always listens to other people\'s problems.', ['sympathetic', 'simpatic', 'sensible to', 'comprehensive']),
mc('He ___ to be asleep so that he wouldn\'t have to answer.', ['pretended', 'faked himself', 'expected', 'claimed himself']),
mc('___, there are about 2,000 students at the school. (= in questo momento)', ['Currently', 'Actually', 'Eventually', 'Ultimately']),
mc('I borrowed three books from the ___.', ['library', 'bookshop\'s', 'bookstore lending', 'librarian']),
mc('Which sentence is correct?', ['I agree with you.', 'I am agree with you.', 'I\'m agreeing with you.', 'I am agreed with you.']),
mc('Which sentence is correct?', ['I\'ve been living here for two years.', 'I live here since two years.', 'I\'m living here from two years.', 'It\'s two years that I live here.']),
mc('I ___ the train, so I was late for work.', ['missed', 'lost', 'failed', 'left']),
mc('I first ___ my wife at university.', ['met', 'knew', 'have known', 'encountered to']),
mc('Could you ___ me your pen for a moment?', ['lend', 'borrow', 'loan to', 'give back']),
mc('Prices have ___ sharply this year.', ['risen', 'raised', 'rised', 'arisen up']),
mc('The new law will ___ thousands of families.', ['affect', 'effect', 'influence on', 'affect to']),
mc('Can you ___ me to call the dentist tomorrow?', ['remind', 'remember', 'recall', 'memorise']),
gap('What do you ___ this in English?', 'call'),
gap('I\'m thinking ___ changing my job.', ['of', 'about']),
gap('Your results are the same ___ mine.', 'as'),
gap('My flat is very different ___ yours.', ['from', 'to']),
mc('Which word is spelt correctly?', ['accommodation', 'accomodation', 'acommodation', 'accommodasion']),
mc('Which word is spelt correctly?', ['definitely', 'definately', 'definitly', 'defenitely']),
]}
);
