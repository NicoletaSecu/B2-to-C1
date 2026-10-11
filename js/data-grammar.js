// GRAMMATICA: spiegazione breve (in italiano) + esercizi in stile esame.
// tag 'corso' = argomento di base del programma (non mostrato a schermo).
C1.grammar = [
{
id: 'inversion', title: 'Inversion (inversione dopo avverbi negativi)', tag: 'top',
sum: 'Never have I…, Not only does…, Hardly had… — il classico delle key word transformations.',
html: `
<p>Quando una frase <b>inizia</b> con un'espressione negativa o restrittiva, soggetto e ausiliare si invertono, come in una domanda. È registro formale: perfetto per essay, report e proposal, e compare quasi sempre nella Part 4.</p>
<table>
<tr><th>Espressione</th><th>Esempio</th></tr>
<tr><td>Never (before) / Rarely / Seldom</td><td><em>Seldom have I</em> seen such dedication.</td></tr>
<tr><td>Hardly / Scarcely … when<br>No sooner … than</td><td><em>Hardly had we</em> arrived <em>when</em> it started to rain.<br><em>No sooner had we</em> arrived <em>than</em> it started to rain.</td></tr>
<tr><td>Not only … but also</td><td><em>Not only does</em> tourism create jobs, <em>but</em> it <em>also</em> brings investment.</td></tr>
<tr><td>Under no circumstances / On no account / At no time / In no way</td><td><em>On no account should you</em> open this door.</td></tr>
<tr><td>Little</td><td><em>Little did I know</em> what was about to happen.</td></tr>
<tr><td>Only when / Only after / Not until + frase</td><td><em>Only when</em> I got home <em>did I realise</em>… (l'inversione è nella <b>seconda</b> parte!)</td></tr>
<tr><td>So + agg. / Such + be</td><td><em>So boring was the film</em> that we left.</td></tr>
</table>
<p>Se non c'è un ausiliare, si usa <em>do / does / did</em>: <em>Rarely does he</em> complain.</p>
<div class="note">Esempi da essay: <b>Not only does international tourism generate…</b> e <b>Rare are the occasions when…</b>. Una (massimo due) inversioni per testo bastano.</div>`,
items: [
kwt('I had never seen such a beautiful sunset before.', 'NEVER', '___ such a beautiful sunset.', ['never before had I seen', 'never had I seen']),
kwt('As soon as we left the house, it started to rain.', 'SOONER', 'No ___ the house than it started to rain.', ['sooner had we left']),
kwt('You must not open this door under any circumstances.', 'SHOULD', 'Under no circumstances ___ opened.', ['should this door be']),
kwt('She didn\'t realise how serious the problem was.', 'LITTLE', '___ how serious the problem was.', ['little did she realise', 'little did she realize', 'little did she know']),
kwt('He only understood the truth when he read the letter.', 'DID', 'Only when he read the letter ___ the truth.', ['did he understand'], 'Con "Only when…" l\'inversione va nella frase principale.'),
kwt('The film was so boring that we left early.', 'SO', '___ the film that we left early.', ['so boring was']),
kwt('I had just sat down when the phone rang.', 'HARDLY', '___ down when the phone rang.', ['hardly had I sat']),
mc('Hardly ___ the meeting started when the fire alarm went off.', ['had', 'did', 'has', 'was'], 'Hardly + past perfect … when + past simple.'),
mc('Not until the results were published ___ how wrong they had been.', ['did they realise', 'they realised', 'had they realise', 'they did realise']),
mc('Seldom ___ such dedication in a new employee.', ['have I seen', 'I have seen', 'I saw', 'did I seen']),
gap('Not only ___ he arrive late, but he also forgot the documents.', 'did'),
gap('On no ___ should you share your password with anyone.', 'account'),
]},
{
id: 'cleft', title: 'Cleft sentences (frasi scisse)', tag: 'corso',
sum: 'What I need is…, It was John who…, All I want is… — per dare enfasi.',
html: `
<p>Le <b>cleft sentences</b> "spezzano" la frase per mettere in evidenza un elemento. Utilissime nello speaking e nel writing per sembrare più C1.</p>
<table>
<tr><th>Struttura</th><th>Esempio</th></tr>
<tr><td>What + frase + be + …</td><td><em>What I really admire is</em> her determination.</td></tr>
<tr><td>What happened was (that) …</td><td><em>What happened was that</em> the train broke down.</td></tr>
<tr><td>It + be + elemento + that / who …</td><td><em>It was Tom who</em> broke the window. · <em>It was in Bath that</em> I met her.</td></tr>
<tr><td>It wasn't until … that …</td><td><em>It wasn't until I got home that</em> I realised.</td></tr>
<tr><td>All (that) + frase + be + …</td><td><em>All I want is</em> a quiet weekend. (= l'unica cosa)</td></tr>
<tr><td>The thing / person / place / reason + that/who/where/why … be …</td><td><em>The reason why he resigned was that</em> he felt undervalued.</td></tr>
</table>
<p>Dopo <em>What… is/was</em> con un verbo si usa l'infinito (con o senza <em>to</em>): <em>What I did was (to) call the police.</em></p>`,
items: [
kwt('I really admire her determination.', 'WHAT', '___ her determination.', ['what I really admire is', 'what I admire is']),
kwt('Tom broke the window, not me.', 'WHO', 'It ___ the window, not me.', ['was Tom who broke']),
kwt('I only want a quiet weekend.', 'ALL', '___ a quiet weekend.', ['all I want is', 'all that I want is']),
kwt('I didn\'t realise I\'d lost my keys until I got home.', 'WASN\'T', 'It ___ home that I realised I\'d lost my keys.', ['wasn\'t until I got']),
kwt('The noise annoys me most.', 'THING', 'The ___ most is the noise.', ['thing that annoys me', 'thing which annoys me']),
kwt('He resigned because he felt undervalued.', 'REASON', 'The ___ that he felt undervalued.', ['reason why he resigned was', 'reason he resigned was', 'reason that he resigned was']),
kwt('We need more time, nothing else.', 'ONLY', 'The ___ is more time.', ['only thing we need', 'only thing that we need']),
mc('___ happened was that the train broke down.', ['What', 'That', 'It', 'Which']),
mc('It was in Bath ___ I first met her.', ['that', 'what', 'which', 'when']),
gap('What we need ___ a completely new approach.', 'is'),
gap('It\'s the humidity, not the heat, ___ makes summer unbearable.', ['that', 'which']),
]},
{
id: 'conditionals', title: 'Conditionals avanzati: mixed, inverted, alternative a "if"', tag: 'top',
sum: 'Had I known…, Were I to…, Should you need…, but for, provided that.',
html: `
<h3>Mixed conditionals</h3>
<table>
<tr><th>Condizione</th><th>Risultato</th><th>Esempio</th></tr>
<tr><td>passato (had + pp)</td><td>presente (would + inf.)</td><td>If I <em>had taken</em> that job, I <em>would be living</em> in London now.</td></tr>
<tr><td>presente irreale (past simple)</td><td>passato (would have + pp)</td><td>If she <em>weren't</em> so shy, she <em>would have asked</em> him.</td></tr>
</table>
<h3>Inversione al posto di "if" (formale)</h3>
<table>
<tr><td>If I had known → <em>Had I known</em>, I would have cooked.</td></tr>
<tr><td>If I were to win → <em>Were I to win</em>, I would give up my job.</td></tr>
<tr><td>If you (should) need → <em>Should you need</em> any help, please contact me.</td></tr>
</table>
<h3>Alternative a "if"</h3>
<ul>
<li><em>provided / providing (that), as long as, so long as, on condition that</em> = solo se</li>
<li><em>unless</em> = if… not · <em>supposing / suppose</em> = e se… · <em>otherwise</em> = altrimenti</li>
<li><em>but for</em> + nome = se non fosse stato per: <em>But for your help, I would have failed.</em></li>
<li><em>if it weren't for / if it hadn't been for</em> + nome</li>
</ul>
<div class="note">Ricorda: dopo <em>when, as soon as, until, unless, if</em> con senso futuro si usa il <b>presente</b>, mai <span class="x">will</span>. Vedi anche "Futuro e time clauses".</div>`,
items: [
kwt('I didn\'t know you were coming, so I didn\'t cook.', 'HAD', '___ you were coming, I would have cooked.', ['had I known', 'had I known that']),
kwt('Without your help, I would have failed.', 'BEEN', 'If it ___ your help, I would have failed.', ['had not been for']),
kwt('If you need any further information, please contact me.', 'SHOULD', '___ any further information, please contact me.', ['should you need', 'should you require']),
kwt('You can borrow my car if you bring it back by six.', 'LONG', 'You can borrow my car ___ you bring it back by six.', ['as long as', 'so long as']),
kwt('We lost because the goalkeeper made a mistake.', 'BUT', '___ the goalkeeper\'s mistake, we would have won.', ['but for']),
kwt('I\'m not rich, so I didn\'t buy that flat.', 'WERE', 'If I ___ have bought that flat.', ['were rich I would']),
mc('If I ___ that job in London five years ago, I would be living there now.', ['had taken', 'took', 'would take', 'have taken'], 'Mixed: condizione passata → risultato presente.'),
mc('If she weren\'t so shy, she ___ him to dance last night.', ['would have asked', 'would ask', 'had asked', 'asked'], 'Mixed: condizione sempre vera → risultato passato.'),
mc('___ you had the chance to live abroad, would you take it?', ['Supposing', 'Unless', 'Otherwise', 'But for']),
gap('___ I to win the lottery, I would give up my job immediately.', 'Were'),
gap('I\'ll lend you the money ___ condition that you pay me back by Friday.', 'on'),
gap('You\'d better leave now; ___ you\'ll miss the last train.', 'otherwise'),
]},
{
id: 'wish', title: 'Wish, if only, would rather, it\'s time', tag: 'corso',
sum: 'I wish I had…, I\'d rather you didn\'t…, It\'s high time we left.',
html: `
<table>
<tr><th>Per parlare di…</th><th>Struttura</th><th>Esempio</th></tr>
<tr><td>presente irreale</td><td>wish / if only + <b>past simple</b></td><td>She wishes she <em>had</em> more free time.</td></tr>
<tr><td>rimpianto sul passato</td><td>wish / if only + <b>past perfect</b></td><td>If only I <em>hadn't made</em> that comment.</td></tr>
<tr><td>irritazione per il comportamento altrui</td><td>wish + sogg. + <b>would</b></td><td>I wish people <em>wouldn't use</em> their phones here.</td></tr>
<tr><td>capacità che non ho</td><td>wish + <b>could</b></td><td>I wish I <em>could put</em> my feet up.</td></tr>
<tr><td>preferenza (stesso soggetto)</td><td>would rather + <b>infinito senza to</b></td><td>I'd rather <em>stay</em> in.</td></tr>
<tr><td>preferenza (soggetto diverso)</td><td>would rather + sogg. + <b>past simple</b> (presente/futuro) / <b>past perfect</b> (passato)</td><td>I'd rather you <em>didn't smoke</em>. · I'd rather he <em>had bought</em> tickets.</td></tr>
<tr><td>è ora che…</td><td>it's (high / about) time + sogg. + <b>past simple</b></td><td>It's high time the government <em>did</em> something.</td></tr>
</table>
<p>Mai <span class="x">I wish I would</span>: con lo stesso soggetto si usa <em>could</em> o il past simple.</p>
<div class="note"><b>Errori tipici:</b><br>
<span class="x">Only I hadn't made</span> → <span class="v">If only I hadn't made…</span><br>
<span class="x">Not having try</span> → <span class="v">Not having tried</span> (participio passato, vedi Participle clauses)<br>
<span class="x">Would rather he/had bought</span> → <span class="v">would rather he had bought</span></div>`,
items: [
gap('She wishes she ___ more free time these days.', 'had', '', '(HAVE)'),
gap('I wish people ___ their phones in the cinema. It drives me mad.', ['wouldn\'t use', 'didn\'t use'], 'wish + would per comportamenti che ci irritano.', '(NOT USE)'),
gap('If only I ___ that stupid comment yesterday.', 'hadn\'t made', '', '(NOT MAKE)'),
gap('I\'d rather he ___ the tickets in advance last week.', 'had bought', '', '(BUY)'),
gap('I\'d rather you ___ in here, if you don\'t mind.', 'didn\'t smoke', '', '(NOT SMOKE)'),
gap('It\'s high time the government ___ something about housing.', 'did', '', '(DO)'),
gap('I wish students ___ more attention in class.', ['would pay', 'paid'], '', '(PAY)'),
kwt('I regret not studying harder at school.', 'WISH', 'I ___ harder at school.', ['wish I had studied']),
kwt('I\'d prefer you not to tell anyone about this.', 'RATHER', 'I ___ anyone about this.', ['would rather you did not tell', '\'d rather you did not tell']),
kwt('It\'s a pity I can\'t put my feet up this weekend.', 'COULD', 'I wish ___ up this weekend.', ['I could put my feet']),
kwt('We should leave now.', 'TIME', 'It\'s ___.', ['time we left', 'high time we left', 'about time we left']),
mc('I wish I ___ come to your party tomorrow, but I\'ll be away.', ['could', 'would', 'can', 'will']),
]},
{
id: 'participle', title: 'Participle clauses', tag: 'corso',
sum: 'Having started a row…, Not knowing the way…, Built in 1900…',
html: `
<p>Le participle clauses accorciano la frase e alzano subito il registro. <b>Il soggetto deve essere lo stesso</b> della frase principale.</p>
<table>
<tr><th>Forma</th><th>Uso</th><th>Esempio</th></tr>
<tr><td>-ing</td><td>azione contemporanea / causa</td><td><em>Not knowing</em> the way, she asked for directions.</td></tr>
<tr><td>Having + participio passato</td><td>azione precedente</td><td><em>Having started</em> a row, he felt embarrassed.</td></tr>
<tr><td>Not having + pp</td><td>negativa, precedente</td><td><em>Not having tried</em> sushi before, I didn't know what to order.</td></tr>
<tr><td>Participio passato</td><td>significato passivo</td><td><em>Built</em> in the 12th century, the castle attracts many visitors.</td></tr>
<tr><td>on / after / before / while + -ing</td><td>tempo</td><td><em>On arriving</em>, we were given champagne.</td></tr>
</table>
<p>Errore tipico (dangling participle): <span class="x">Walking down the street, a dog bit me.</span> (sembra che camminasse il cane) → <span class="v">Walking down the street, I was bitten by a dog.</span></p>`,
items: [
kwt('After he had started a row, he felt embarrassed.', 'HAVING', '___ a row, he felt embarrassed.', ['having started']),
kwt('Because I hadn\'t tried sushi before, I didn\'t know what to order.', 'NOT', '___ sushi before, I didn\'t know what to order.', ['not having tried']),
kwt('As she didn\'t know the way, she asked for directions.', 'KNOWING', '___ the way, she asked for directions.', ['not knowing']),
kwt('The castle, which was built in the 12th century, attracts many visitors.', 'BUILT', '___ the 12th century, the castle attracts many visitors.', ['built in']),
kwt('When we arrived at the hotel, we were given a glass of champagne.', 'ON', '___ the hotel, we were given a glass of champagne.', ['on arriving at', 'on our arrival at']),
mc('___ in a hurry, the essay was full of mistakes.', ['Written', 'Writing', 'Having written', 'To write'], 'L\'essay "è stato scritto": serve il participio passato (passivo).'),
mc('___ the report, she sent it to her boss.', ['Having finished', 'Finished', 'Being finished', 'To finish']),
mc('Which sentence is correct?', ['Walking down the street, I was bitten by a dog.', 'Walking down the street, a dog bit me.', 'Walked down the street, a dog bit me.', 'Having walking down the street, a dog bit me.']),
gap('___ the choice, I\'d rather work from home.', 'Given', '', '(GIVE)'),
gap('Not ___ been invited, he felt rather left out.', 'having', '', '(HAVE)'),
gap('___ exhausted after the journey, we went straight to bed.', ['Feeling', 'Being'], '', '(FEEL)'),
]},
{
id: 'concession', title: 'Contrast & concession', tag: 'corso',
sum: 'although, despite, whereas, nevertheless, no matter, that said, mind you…',
html: `
<p>La differenza la fa <b>quello che segue</b>.</p>
<table>
<tr><th>Espressione</th><th>Seguita da</th><th>Esempio</th></tr>
<tr><td>although / even though / though</td><td>frase</td><td><em>Even though</em> she felt under the weather, she went.</td></tr>
<tr><td>despite / in spite of</td><td>nome / -ing / the fact that</td><td><em>Despite being</em> tired… · <em>In spite of the</em> rain…</td></tr>
<tr><td>while / whilst / whereas</td><td>frase (confronto tra due fatti)</td><td>Northerners are reserved, <em>whereas</em> …</td></tr>
<tr><td>however / nevertheless / nonetheless / even so / all the same / at the same time</td><td>nuova frase, + virgola</td><td>The plan is fraught with problems. <em>Nevertheless,</em> we should go ahead.</td></tr>
<tr><td>no matter how / what / who / where</td><td>frase</td><td><em>No matter what</em> you do…</td></tr>
<tr><td>however + agg./avv.</td><td>sogg. + verbo</td><td><em>However hard</em> I try…</td></tr>
<tr><td>agg. + as / though + sogg. + verbo</td><td></td><td><em>Tired as she was</em>, she kept going.</td></tr>
<tr><td>much as</td><td>frase</td><td><em>Much as</em> I like him, I can't lend him money.</td></tr>
<tr><td>mind you / that said / having said that / then again</td><td>parlato: aggiunge un ripensamento</td><td>He isn't so bright. <em>That said,</em> he's good-looking.</td></tr>
</table>
<div class="note">Mai <span class="x">despite of</span> e mai <span class="x">although + nome</span>. <em>Even if</em> = ipotesi ("anche se dovesse…"), <em>even though</em> = fatto reale.</div>`,
items: [
mc('She went to the party ___ she felt under the weather.', ['even though', 'despite', 'whereas', 'nevertheless']),
mc('This plan is fraught with problems. ___, we should go ahead with it.', ['Nevertheless', 'Although', 'Despite', 'Whereas']),
mc('Your mum will always be there for you ___ you do.', ['no matter what', 'even so', 'in spite', 'however']),
mc('Northerners are said to be reserved, ___ southerners are thought to be more outgoing.', ['whereas', 'despite', 'even so', 'mind you']),
mc('She\'s really rude and arrogant. ___, guys fall at her feet.', ['Even so', 'Even though', 'Whereas', 'Despite']),
gap('There is still some discrimination in ___ of the new legislation.', 'spite'),
gap('He isn\'t so bright. That ___, he\'s rather good-looking and certainly has that going for him.', 'said'),
gap('I\'m of half a mind to quit my job. Then ___, maybe not: the labour market is really tight.', 'again'),
kwt('Although he was tired, he kept working.', 'DESPITE', 'He kept working ___ tired.', ['despite being', 'despite the fact he was', 'despite the fact that he was']),
kwt('It doesn\'t matter how hard I try, I can\'t remember his name.', 'HOWEVER', '___ try, I can\'t remember his name.', ['however hard I']),
kwt('Although I like him a lot, I can\'t lend him the money.', 'MUCH', '___ like him, I can\'t lend him the money.', ['much as I']),
kwt('Even though it was raining, they went for a picnic.', 'SPITE', 'They went for a picnic ___ rain.', ['in spite of the']),
kwt('She is rich but she is not happy.', 'THOUGH', 'Rich ___, she is not happy.', ['though she is']),
]},
{
id: 'passive', title: 'Passivo avanzato e causative', tag: 'top',
sum: 'He is said to have…, have something done, need doing, be made to.',
html: `
<table>
<tr><th>Struttura</th><th>Esempio</th></tr>
<tr><td>It is said / believed / thought / reported / alleged that…</td><td><em>It is said that</em> phones cause brain damage.</td></tr>
<tr><td>sogg. + is said + <b>to + inf.</b> (presente)</td><td>Phones <em>are said to cause</em> brain damage.</td></tr>
<tr><td>… + <b>to have + pp</b> (passato)</td><td>The thief <em>is believed to have escaped</em>.</td></tr>
<tr><td>… + <b>to be + -ing</b> (in corso)</td><td>The company <em>is thought to be losing</em> money.</td></tr>
<tr><td>have / get + oggetto + pp (farsi fare)</td><td>I'm <em>having my car repaired</em>. · She <em>had her bag stolen</em>.</td></tr>
<tr><td>need + -ing (= need to be done)</td><td>These windows <em>need cleaning</em>.</td></tr>
<tr><td>make → be made <b>to</b> do</td><td>He <em>was made to work</em> at weekends.</td></tr>
<tr><td>passivo di -ing / infinito</td><td>I hate <em>being told</em> what to do. · She expects <em>to be promoted</em>.</td></tr>
</table>`,
items: [
kwt('People say that mobile phones cause brain damage.', 'SAID', 'Mobile phones ___ brain damage.', ['are said to cause']),
kwt('People believe that the thief escaped through the window.', 'HAVE', 'The thief is ___ through the window.', ['believed to have escaped']),
kwt('A mechanic is repairing my car tomorrow.', 'HAVING', 'I ___ tomorrow.', ['am having my car repaired']),
kwt('They made him work at weekends.', 'WAS', 'He ___ at weekends.', ['was made to work']),
kwt('Someone needs to clean these windows.', 'CLEANING', 'These windows ___.', ['need cleaning']),
kwt('They think that the company is losing money.', 'THOUGHT', 'The company ___ money.', ['is thought to be losing']),
mc('I hate ___ what to do.', ['being told', 'to be telling', 'been told', 'telling']),
mc('She ___ her bag stolen while she was on holiday.', ['had', 'was', 'made', 'did']),
gap('The new law is expected ___ take effect in January.', 'to'),
gap('It is widely ___ that laughter is good for your health.', ['believed', 'accepted', 'thought'], '', '(BELIEVE)'),
]},
{
id: 'modals', title: 'Modali: deduzione e passato', tag: 'top',
sum: 'must have, can\'t have, needn\'t have, should have, be bound to.',
html: `
<table>
<tr><th>Forma</th><th>Significato</th><th>Esempio</th></tr>
<tr><td>must have + pp</td><td>sono sicuro che è successo</td><td>He <em>must have forgotten</em>.</td></tr>
<tr><td>can't / couldn't have + pp</td><td>è impossibile che sia successo</td><td>She <em>can't have seen</em> us.</td></tr>
<tr><td>may / might / could have + pp</td><td>forse è successo</td><td>They <em>might have missed</em> the train.</td></tr>
<tr><td>should / ought to have + pp</td><td>era giusto farlo (ma non è successo)</td><td>We <em>should have booked</em>.</td></tr>
<tr><td>needn't have + pp</td><td>l'hai fatto ma non serviva</td><td>You <em>needn't have brought</em> wine.</td></tr>
<tr><td>didn't need to + inf.</td><td>non serviva (e probabilmente non l'hai fatto)</td><td>I <em>didn't need to queue</em>.</td></tr>
<tr><td>be bound to / be likely to</td><td>succederà di sicuro / probabilmente</td><td>He <em>is bound to pass</em>.</td></tr>
<tr><td>might have (rimprovero)</td><td>potevi almeno…</td><td>You <em>might have told</em> me!</td></tr>
</table>
<p>Altre: <em>can't help + -ing</em> (non riesco a non…), <em>may/might as well</em> (tanto vale).</p>`,
items: [
kwt('I\'m sure he forgot about the meeting.', 'MUST', 'He ___ about the meeting.', ['must have forgotten']),
kwt('It\'s impossible that she saw us.', 'HAVE', 'She ___ us.', ['cannot have seen', 'could not have seen']),
kwt('It wasn\'t necessary for you to bring wine, but thank you.', 'NEED', 'You ___ wine, but thank you.', ['need not have brought']),
kwt('Perhaps they missed the train.', 'MIGHT', 'They ___ the train.', ['might have missed']),
kwt('It was a mistake not to book in advance.', 'SHOULD', 'We ___ in advance.', ['should have booked']),
kwt('I\'m certain he will pass the exam.', 'BOUND', 'He ___ the exam.', ['is bound to pass']),
mc('You ___ have told me you were vegetarian! I\'ve cooked steak.', ['might', 'must', 'can\'t', 'needn\'t'], '"You might have told me" = rimprovero.'),
mc('The lights are off and the car is gone. They ___ gone out.', ['must have', 'can\'t have', 'should have', 'needn\'t have']),
gap('I couldn\'t help ___ when he fell off the chair.', 'laughing', '', '(LAUGH)'),
gap('There\'s nothing else to do here, so we might as ___ go home.', 'well'),
]},
{
id: 'usedto', title: 'Used to, would, be/get used to', tag: 'corso',
sum: 'I used to live… / I\'m used to living… / I\'ll get used to living…',
html: `
<table>
<tr><th>Struttura</th><th>Significato</th><th>Esempio</th></tr>
<tr><td>used to + <b>infinito</b></td><td>abitudini <b>e stati</b> passati, ora non più</td><td>I <em>used to have</em> a dog. · Did you <em>use to</em> play?</td></tr>
<tr><td>would + infinito</td><td>azioni ripetute nel passato (<b>non stati</b>)</td><td>Every summer we <em>would go</em> to the farm.</td></tr>
<tr><td>be used to + <b>-ing / nome</b></td><td>essere abituato a</td><td>I<em>'m used to driving</em> on the left.</td></tr>
<tr><td>get used to + <b>-ing / nome</b></td><td>abituarsi a (processo)</td><td>I can't <em>get used to getting up</em> at 5.</td></tr>
</table>
<p>Attenzione: in <em>be/get used to</em>, "to" è una preposizione → dopo va <b>-ing</b>. Stessa cosa per <em>look forward to, object to, be accustomed to</em>.</p>`,
items: [
mc('When I was a child, I ___ have a dog called Rex.', ['used to', 'would', 'was used to', 'got used to'], '"have a dog" è uno stato: would non va bene.'),
mc('I\'ve lived in England for years, so I ___ on the left.', ['am used to driving', 'used to drive', 'am used to drive', 'would drive']),
mc('It took me months to ___ up at 5 a.m.', ['get used to getting', 'be used to get', 'used to get', 'get used to get']),
mc('There ___ be a cinema on this corner.', ['used to', 'would', 'was used to', 'use to']),
gap('Did you ___ to play an instrument when you were younger?', 'use'),
gap('Every summer we ___ go to my grandparents\' farm and help with the harvest.', ['would', 'used to']),
kwt('Working nights is no longer strange for me.', 'USED', 'I have ___ nights.', ['got used to working', 'gotten used to working', 'become used to working', 'grown used to working']),
kwt('She isn\'t accustomed to speaking in public.', 'USED', 'She ___ in public.', ['is not used to speaking']),
kwt('He smoked when he was younger, but he doesn\'t now.', 'USED', 'He ___ when he was younger.', ['used to smoke']),
]},
{
id: 'future', title: 'Futuro e time clauses', tag: 'corso',
sum: 'as soon as I get…, will have finished, be about to, be due to.',
html: `
<h3>Time clauses</h3>
<p>Dopo <em>when, as soon as, once, until, before, after, by the time, the moment, unless, if</em> → <b>presente</b> (o present perfect), mai will: <em>I'll call you as soon as I <b>get</b> home.</em> · <em>Once you <b>have finished</b>, check your answers.</em></p>
<h3>Forme di futuro da C1</h3>
<table>
<tr><td>will have + pp</td><td>azione conclusa entro un momento futuro</td><td>By Friday he <em>will have finished</em> the report.</td></tr>
<tr><td>will be + -ing</td><td>azione in corso in un momento futuro</td><td>This time next week I<em>'ll be lying</em> on a beach.</td></tr>
<tr><td>be about to / be on the point (verge) of + -ing</td><td>stare per</td><td>The film <em>is about to</em> start.</td></tr>
<tr><td>be due to</td><td>previsto per (orari, programmi)</td><td>The train <em>is due to arrive</em> at 6.15.</td></tr>
<tr><td>be bound / likely / set to</td><td>certezza / probabilità</td><td>Prices <em>are set to rise</em>.</td></tr>
<tr><td>was going to / was about to</td><td>futuro nel passato</td><td>I <em>was going to</em> call you, but I forgot.</td></tr>
</table>`,
items: [
mc('I\'ll call you as soon as I ___ home.', ['get', 'will get', 'would get', 'am getting']),
mc('By the time you arrive, we ___ dinner.', ['will have finished', 'will finish', 'finish', 'are finishing']),
mc('This time next week I ___ on a beach in Sardinia.', ['will be lying', 'will have lain', 'lie', 'am lying']),
mc('I won\'t speak to him until he ___.', ['apologises', 'will apologise', 'would apologise', 'is going to apologise']),
gap('The train is ___ to arrive at 6.15, but it\'s usually late.', 'due'),
gap('Once you ___ the mock exam, check every answer carefully.', ['have finished', 'finish'], '', '(FINISH)'),
kwt('The film is going to start in a moment.', 'ABOUT', 'The film ___ start.', ['is about to']),
kwt('They were going to resign, but then they changed their minds.', 'POINT', 'They were ___ resigning when they changed their minds.', ['on the point of']),
kwt('He will finish the report on Friday at the latest.', 'HAVE', 'He ___ the report by Friday.', ['will have finished']),
kwt('I won\'t leave before you get back.', 'UNTIL', 'I will stay here ___ back.', ['until you get', 'until you have got', 'until you come']),
]},
{
id: 'soneither', title: 'So, neither, nor', tag: 'corso',
sum: 'So do I, Neither have I, I hope not, nor did she…',
html: `
<table>
<tr><th>Situazione</th><th>Struttura</th><th>Esempio</th></tr>
<tr><td>Anch'io (frase positiva)</td><td>So + ausiliare + soggetto</td><td>"I'd love a coffee." — "<em>So would I.</em>"</td></tr>
<tr><td>Neanch'io (frase negativa)</td><td>Neither / Nor + ausiliare + soggetto</td><td>"I can't stand queues." — "<em>Neither can I.</em>"</td></tr>
<tr><td>Io invece sì / no</td><td>soggetto + ausiliare</td><td>"I don't like jazz." — "<em>I do.</em>"</td></tr>
<tr><td>Risposte brevi</td><td>think so / hope so / hope not / don't think so / I'm afraid so</td><td>"Will it rain?" — "<em>I hope not.</em>"</td></tr>
<tr><td>Formale, scritto</td><td>…, nor / neither + ausiliare + soggetto</td><td>She didn't reply, <em>nor did she</em> return my calls.</td></tr>
<tr><td>Correlativi</td><td>neither … nor … / either … or …</td><td><em>Neither</em> the manager <em>nor</em> his assistant was available.</td></tr>
</table>
<p>L'ausiliare è quello della frase a cui rispondi: <em>have → have, can → can, would → would</em>; con present/past simple → <em>do / does / did</em>.</p>`,
items: [
mc('"I can\'t stand queues." — "___."', ['Neither can I', 'So can I', 'Neither do I', 'So can\'t I']),
mc('"I\'ve never been to Scotland." — "___."', ['Neither have I', 'So have I', 'Neither did I', 'Nor I have']),
mc('"I\'d love a coffee." — "___."', ['So would I', 'So did I', 'So had I', 'Neither would I'], '\'d love = would love.'),
mc('"He should apologise." — "___."', ['So should she', 'So does she', 'Neither should she', 'So she ought']),
gap('"We went to bed early." — "So ___ we."', 'did'),
gap('"Is it going to rain?" — "I hope ___. We\'re having a barbecue."', 'not'),
gap('She didn\'t reply to my email, ___ did she return my calls.', ['nor', 'neither']),
gap('Neither the manager ___ his assistant was available.', 'nor'),
kwt('Tom doesn\'t eat meat and Anna doesn\'t either.', 'DOES', 'Tom doesn\'t eat meat and ___ Anna.', ['neither does', 'nor does']),
]},
{
id: 'reporting', title: 'Reporting verbs e verb patterns', tag: 'top',
sum: 'deny doing, accuse sb of doing, recommend doing, suggest that…',
html: `
<table>
<tr><th>Pattern</th><th>Verbi</th></tr>
<tr><td>verbo + <b>to + inf.</b></td><td>agree, offer, refuse, promise, threaten, claim</td></tr>
<tr><td>verbo + <b>oggetto + to + inf.</b></td><td>advise, encourage, urge, warn, remind, persuade, invite, tell</td></tr>
<tr><td>verbo + <b>-ing</b></td><td>admit, deny, suggest, <b>recommend</b>, regret, mention</td></tr>
<tr><td>verbo + <b>prep. + -ing</b></td><td>apologise <em>for</em>, insist <em>on</em>, object <em>to</em>, confess <em>to</em></td></tr>
<tr><td>verbo + <b>ogg. + prep. + -ing</b></td><td>accuse sb <em>of</em>, blame sb <em>for</em>, congratulate sb <em>on</em>, thank sb <em>for</em>, prevent sb <em>from</em></td></tr>
<tr><td>verbo + <b>that + sogg. + (should) + inf.</b></td><td>suggest, recommend, insist, demand, propose → <em>I recommend that the council (should) approve the plan.</em></td></tr>
</table>
<div class="note"><b>Errore tipico:</b> <span class="x">I strongly recommend to accept them</span> → <span class="v">I strongly recommend accepting them</span> / <span class="v">I strongly recommend that they (should) be accepted</span>. È un errore che gli esaminatori notano subito.</div>
<h3>Gerundio o infinito? Cambia il significato</h3>
<ul>
<li><em>remember / forget doing</em> = ricordo di averlo fatto · <em>remember to do</em> = ricordarsi di farlo</li>
<li><em>stop doing</em> = smettere · <em>stop to do</em> = fermarsi per fare</li>
<li><em>try doing</em> = provare come esperimento · <em>try to do</em> = sforzarsi</li>
<li><em>regret doing</em> = pentirsi · <em>regret to say</em> = sono spiacente di dire</li>
<li><em>go on doing</em> = continuare · <em>go on to do</em> = passare a fare un'altra cosa</li>
<li><em>mean doing</em> = comportare · <em>mean to do</em> = avere intenzione</li>
</ul>`,
items: [
kwt('"I didn\'t break the vase," said the child.', 'DENIED', 'The child ___ the vase.', ['denied breaking', 'denied having broken']),
kwt('"You stole my idea!" she said to him.', 'ACCUSED', 'She ___ her idea.', ['accused him of stealing', 'accused him of having stolen']),
kwt('"I\'m sorry I\'m late," he said.', 'APOLOGISED', 'He ___ late.', ['apologised for being', 'apologized for being']),
kwt('"Why don\'t we go for a walk?" said Mary.', 'SUGGESTED', 'Mary ___ for a walk.', ['suggested going', 'suggested we go', 'suggested that we go', 'suggested we should go', 'suggested that we should go', 'suggested we went', 'suggested that we went']),
kwt('"I\'ll take the blame," he said.', 'OFFERED', 'He ___ the blame.', ['offered to take']),
kwt('"Well done for passing your exam!" she told me.', 'CONGRATULATED', 'She ___ my exam.', ['congratulated me on passing']),
kwt('"Don\'t take it personally," she told me.', 'ADVISED', 'She ___ it personally.', ['advised me not to take']),
mc('I strongly recommend ___ these changes.', ['accepting', 'to accept', 'accept', 'to accepting']),
mc('I remember ___ the door, but now it\'s wide open.', ['locking', 'to lock', 'lock', 'to have lock']),
mc('After explaining the theory, she went on ___ some examples.', ['to give', 'giving', 'give', 'to giving'], 'go on to do = passare a fare una cosa nuova.'),
gap('They objected to ___ treated like children.', 'being', '', '(BE)'),
gap('The doctor insisted that he ___ a week off.', ['take', 'should take', 'took'], '', '(TAKE)'),
]},
{
id: 'comparatives', title: 'Comparativi avanzati', tag: '',
sum: 'the more… the more, nowhere near as, by far the most.',
html: `
<table>
<tr><th>Struttura</th><th>Esempio</th></tr>
<tr><td>the + comparativo, the + comparativo</td><td><em>The more</em> you practise, <em>the more fluent</em> you become.</td></tr>
<tr><td>far / much / a great deal / considerably + comparativo</td><td><em>A great deal more</em> expensive.</td></tr>
<tr><td>slightly / a bit / marginally + comparativo</td><td><em>Slightly</em> cheaper.</td></tr>
<tr><td>not nearly as / nowhere near as … as</td><td>This test was <em>nowhere near as hard as</em> the last one.</td></tr>
<tr><td>by far / easily + superlativo</td><td>Milan is <em>by far the most expensive</em> city.</td></tr>
<tr><td>twice / three times as … as</td><td><em>Twice as heavy as</em> mine.</td></tr>
<tr><td>comparativo + and + comparativo</td><td>It's getting <em>harder and harder</em>.</td></tr>
<tr><td>not so much A as B</td><td>He's <em>not so much</em> lazy <em>as</em> bored.</td></tr>
</table>`,
items: [
kwt('If you practise more, you will become more fluent.', 'THE', 'The more you practise, ___ you will become.', ['the more fluent']),
kwt('This test was much easier than the last one.', 'NEARLY', 'This test was ___ difficult as the last one.', ['not nearly as', 'not nearly so']),
kwt('No other city in Italy is as expensive as Milan.', 'BY', 'Milan is ___ expensive city in Italy.', ['by far the most']),
kwt('The exam was far less hard than I expected.', 'NOWHERE', 'The exam was ___ hard as I expected.', ['nowhere near as', 'nowhere near so']),
mc('The flat was ___ more expensive than we had expected.', ['a great deal', 'very', 'by far', 'so']),
mc('It\'s getting ___ to find affordable housing.', ['harder and harder', 'more hard', 'the harder', 'hardest']),
gap('This suitcase is twice ___ heavy as mine.', 'as'),
gap('The sooner we leave, the ___ we\'ll arrive.', ['earlier', 'sooner'], '', '(EARLY)'),
]},
{
id: 'adverbs', title: 'Comment adverbs ed enfasi', tag: 'corso',
sum: 'Admittedly, arguably, presumably… + do/does/did enfatico.',
html: `
<p>I <b>comment adverbs</b> mostrano l'atteggiamento di chi parla. Di solito vanno all'inizio, seguiti da virgola. In un essay valgono oro.</p>
<table>
<tr><td><em>Admittedly</em></td><td>lo ammetto / bisogna riconoscere che</td></tr>
<tr><td><em>Arguably</em></td><td>si può sostenere che</td></tr>
<tr><td><em>Apparently</em></td><td>a quanto pare (l'ho sentito dire)</td></tr>
<tr><td><em>Presumably</em></td><td>presumibilmente (lo suppongo)</td></tr>
<tr><td><em>Undoubtedly</em></td><td>senza dubbio</td></tr>
<tr><td><em>Understandably</em></td><td>comprensibilmente</td></tr>
<tr><td><em>Regrettably</em></td><td>purtroppo (formale)</td></tr>
<tr><td><em>Ironically</em></td><td>ironia della sorte</td></tr>
<tr><td><em>Frankly / To be honest</em></td><td>francamente</td></tr>
<tr><td><em>Evidently / Clearly</em></td><td>evidentemente</td></tr>
<tr><td><em>Allegedly</em></td><td>a quanto si dice (non provato)</td></tr>
<tr><td><em>Inevitably</em></td><td>inevitabilmente</td></tr>
</table>
<h3>Enfasi</h3>
<ul>
<li><em>do / does / did</em> + verbo: <em>I <b>do</b> like your haircut!</em></li>
<li><em>whatsoever</em> dopo un negativo: <em>no evidence whatsoever</em></li>
<li>avverbi con aggettivi "estremi": <em>absolutely breathtaking, utterly ridiculous</em> (mai <span class="x">very breathtaking</span>)</li>
<li><em>by no means, not in the least</em> = per niente</li>
</ul>`,
items: [
mc('___, tourism is the most important industry in the region, although some economists would disagree.', ['Arguably', 'Regrettably', 'Ironically', 'Frankly']),
mc('___, nobody was hurt in the accident.', ['Fortunately', 'Arguably', 'Admittedly', 'Allegedly']),
mc('He\'s not answering his phone. ___ he\'s still on the plane.', ['Presumably', 'Regrettably', 'Admittedly', 'Frankly']),
mc('___, the plan is expensive. Nevertheless, it is worth every penny.', ['Admittedly', 'Apparently', 'Ironically', 'Presumably']),
mc('___, it was the fire station that burnt down.', ['Ironically', 'Arguably', 'Understandably', 'Frankly']),
mc('She was ___ upset when she heard she had failed by one mark.', ['understandably', 'arguably', 'presumably', 'allegedly']),
mc('___, the minister has resigned — at least that\'s what the papers are saying.', ['Apparently', 'Frankly', 'Admittedly', 'Understandably']),
mc('The view from the top was ___ breathtaking.', ['absolutely', 'very', 'fairly', 'slightly'], '"breathtaking" è un aggettivo estremo: vuole absolutely / utterly.'),
gap('I ___ like your new haircut — I wasn\'t being sarcastic!', 'do'),
gap('There is no evidence ___ to support this claim.', 'whatsoever', '', '(WHAT)'),
]},
];
