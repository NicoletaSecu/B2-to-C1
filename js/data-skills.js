// LISTENING (letto dalla voce sintetica del browser), WRITING, SPEAKING
C1.listening = [
{ id: 'l-1', title: 'Part 1 – Three short conversations', part: 1,
intro: 'Sentirai tre brevi conversazioni. Per ognuna ci sono due domande. Leggi prima le domande, poi ascolta (all\'esame ogni estratto si sente due volte).',
script: [
['N', 'Extract one. You hear two friends talking about a comedy show.'],
['F', 'So, what did you make of the show last night?'],
['M', 'Honestly? I was a bit taken aback. Everyone told me he was hilarious, but most of it was him making fun of people in the front row. I spent the whole evening hoping he wouldn\'t pick on me.'],
['F', 'Oh, I see what you mean, and I thought that was the weakest part too. The bits I enjoyed were when he talked about his own disastrous cooking. He\'s so good at laughing at himself.'],
['M', 'True, that was the best part by far. If he\'d stuck to that, I\'d have loved it.'],
['F', 'Well, he\'s back in the spring. I\'m tempted to go again, actually.'],
['M', 'Hmm. I think I\'ll wait for the reviews this time.'],
['N', 'Extract two. You hear part of an interview with a woman who works from home.'],
['M', 'You\'ve been working from home for two years now. Has it lived up to your expectations?'],
['F', 'In some ways it\'s exceeded them. I get through far more than I ever did in the office. What I hadn\'t bargained for was how much I\'d miss the small talk. You know, the chat by the coffee machine that seems like a waste of time. It turns out that\'s where I used to hear about half the things I needed to know.'],
['M', 'So would you go back?'],
['F', 'Not full time, no. But I\'ve started going in on Wednesdays, purely to catch up with people. My boss thinks I\'ve come round to her way of thinking. I haven\'t had the heart to tell her it\'s only for the gossip.'],
['N', 'Extract three. You hear two students discussing a lecture about risk.'],
['M', 'That lecture on risk was fascinating, wasn\'t it? The idea that we\'re terrified of flying but perfectly happy to drive, even though driving is far more dangerous.'],
['F', 'It was, though I\'m not sure I buy her explanation. She put it all down to control: we feel safe when we\'re holding the steering wheel. I think it\'s got more to do with the news. A plane crash is on every front page. Car accidents barely get a mention.'],
['M', 'Mm, I hadn\'t thought of that. Anyway, are you going to do the essay on it?'],
['F', 'I\'d like to, but it\'s due the same week as my statistics project, so I\'ll probably go for the other title. Shame, really.'],
],
items: [
mc('Extract 1 — What do the two friends agree about?', ['The comedian was at his best when joking about himself.', 'The jokes about the audience were the highlight.', 'The show did not deserve its reputation at all.']),
mc('Extract 1 — How does the man feel about seeing the comedian again?', ['He is reluctant to commit himself.', 'He is keen to book tickets.', 'He is determined never to go again.']),
mc('Extract 2 — What does the woman say is a disadvantage of working from home?', ['She misses out on useful information.', 'She is distracted by things at home.', 'She gets less work done.']),
mc('Extract 2 — Why does she go to the office on Wednesdays?', ['to keep in touch with her colleagues', 'because her boss has insisted on it', 'because she concentrates better there']),
mc('Extract 3 — The woman thinks people fear flying mainly because of', ['the way accidents are reported.', 'the feeling of not being in control.', 'their lack of experience of it.']),
mc('Extract 3 — Why will she probably not write the essay on risk?', ['She has another deadline at the same time.', 'She found the lecture unconvincing.', 'She thinks the topic is too difficult.']),
]},
{ id: 'l-2', title: 'Part 2 – A mountain guide (sentence completion)', part: 2,
intro: 'Sentirai una guida alpina parlare del suo lavoro. Completa le frasi con UNA parola, esattamente come la senti.',
script: [
['F', 'Good evening, everyone. My name\'s Helen Carter and I\'ve been working as a mountain guide for nearly twenty years. People often assume I grew up in the mountains, but in fact I was born in a fishing village, and I didn\'t see proper snow until I was a teenager. I originally trained as a nurse, which has turned out to be surprisingly useful in my present job.'],
['F', 'What first drew me to climbing wasn\'t the excitement. It was the silence. On my first trip to the Alps, I remember standing at the top of a pass and realising I couldn\'t hear a single engine. I\'ve been chasing that feeling ever since.'],
['F', 'Clients usually expect that the biggest danger in the mountains is falling. Actually, the thing that causes most accidents is tiredness. People make poor decisions on the way down, when they\'re exhausted and thinking about dinner. That\'s why I always tell my groups that the summit is only the halfway point.'],
['F', 'The piece of equipment I\'d never go without isn\'t a rope or an ice axe. It\'s a simple whistle. It weighs nothing, and it can be heard much further away than a human voice. I\'ve only had to use mine once in an emergency, when thick fog came down and one of my clients wandered off the path.'],
['F', 'The quality I value most in a client is honesty. I\'d much rather somebody told me they were frightened than pretended to be fine. The people who worry me are the over-confident ones.'],
['F', 'Finally, people ask whether I\'ll ever give it up. My knees complain more than they used to, so I\'ve started running photography courses in the valleys, which is less demanding. But I can\'t imagine stopping altogether. I take a great deal of pride in what I do.'],
],
items: [
gap('Helen was born in a ___ village.', ['fishing']),
gap('Before becoming a guide, Helen trained as a ___.', ['nurse']),
gap('What first attracted Helen to climbing was the ___.', ['silence']),
gap('According to Helen, most accidents are caused by ___.', ['tiredness']),
gap('Helen tells her groups that the summit is only the ___ point.', ['halfway', 'half-way', 'half way']),
gap('The item Helen never goes without is a ___.', ['whistle']),
gap('Helen once used it in an emergency caused by thick ___.', ['fog']),
gap('The quality Helen values most in clients is ___.', ['honesty']),
gap('Helen has started running ___ courses in the valleys.', ['photography']),
]},
{ id: 'l-3', title: 'Part 3 – Interview: playfulness in adults', part: 3,
intro: 'Sentirai un\'intervista con una psicologa. Per ogni domanda scegli la risposta migliore.',
script: [
['M', 'My guest today is the psychologist Doctor Ruth Evans, who studies playfulness in adults. Ruth, isn\'t play something we\'re supposed to grow out of?'],
['F', 'That\'s certainly the common assumption, and I shared it myself when I started out. I was actually researching stress in the workplace, and I kept noticing that the employees who coped best weren\'t the most organised or the most ambitious. They were the ones who could turn a dull task into a sort of game. That observation is what changed the direction of my career.'],
['M', 'How do you define a playful adult?'],
['F', 'People imagine someone who tells jokes all the time, but that\'s not it at all. Playfulness is really about how you frame situations. A playful person stuck in a queue might start inventing life stories for the people in front. It\'s a way of making everyday life interesting to yourself, and it doesn\'t necessarily involve other people at all.'],
['M', 'And what are the benefits?'],
['F', 'There\'s good evidence for higher life satisfaction and for more stable relationships. But the finding that I find most striking is about problem-solving. Playful people come up with more original solutions, probably because they\'re less afraid of looking foolish when an idea doesn\'t work.'],
['M', 'Can it be learned, or are you born with it?'],
['F', 'There\'s a genetic element, no doubt. Having said that, our studies show that even a week of simple exercises makes a measurable difference. We ask people to write down three playful things they did each day. What\'s interesting is that most participants don\'t actually do more playful things. They simply start noticing what they were already doing, and that seems to be enough.'],
['M', 'Is there a downside?'],
['F', 'Well, playful people are sometimes taken less seriously, particularly at work. A manager may read a light-hearted attitude as a lack of commitment, which is unfair, because the research suggests the opposite. I wouldn\'t call that a downside of playfulness itself, though. It\'s a problem with how we judge each other.'],
['M', 'Finally, what would you say to listeners who feel they\'re just not playful people?'],
['F', 'I\'d say don\'t try to become the life and soul of the party. That would be miserable for everyone. Start by taking yourself a little less seriously. The next time something goes wrong, a missed train, a burnt dinner, ask yourself how you\'d tell it as a funny story tomorrow. That small habit is where it all begins.'],
],
items: [
mc('What led Ruth to study playfulness?', ['something she observed while researching another subject', 'an interest she had had since childhood', 'a suggestion made by a colleague', 'her dissatisfaction with research into stress']),
mc('According to Ruth, playful adults', ['find ways of making ordinary situations entertaining.', 'are constantly making jokes.', 'need other people in order to enjoy themselves.', 'tend to avoid boring tasks.']),
mc('Which benefit of playfulness impresses Ruth most?', ['greater creativity in dealing with problems', 'a higher level of satisfaction with life', 'longer-lasting relationships', 'reduced stress at work']),
mc('What did Ruth\'s studies of the daily exercise reveal?', ['People became more aware of their existing playful behaviour.', 'People did far more playful things than before.', 'Playfulness is determined entirely by genetics.', 'A week is too short to produce any change.']),
mc('What does Ruth say about playfulness in the workplace?', ['It may be wrongly interpreted by those in charge.', 'It tends to reduce employees\' commitment.', 'It is increasingly encouraged by managers.', 'It ought to be kept hidden from colleagues.']),
mc('What advice does Ruth give to people who do not feel playful?', ['Learn to see the funny side of minor misfortunes.', 'Make an effort to be more sociable at parties.', 'Practise telling stories to friends.', 'Avoid situations in which things might go wrong.']),
]},
{ id: 'l-4', title: 'Part 4 – Five people who took a course', part: 4,
intro: 'Sentirai cinque persone parlare di un corso che hanno seguito da adulti. Ci sono DUE compiti da svolgere mentre ascolti: perché hanno iniziato (Task 1) e cosa li ha sorpresi (Task 2). All\'esame si fanno contemporaneamente.',
script: [
['N', 'Speaker one.'],
['F', 'My daughter gave me a voucher for a pottery course for my fiftieth birthday, and to be honest I\'d never have signed up otherwise. I\'d pictured a room full of retired people, but nearly everyone was in their twenties, which I hadn\'t expected at all. They were very patient with me. I\'m still hopeless, but I go every week.'],
['N', 'Speaker two.'],
['M', 'My nephew was born deaf, and I wanted to be able to talk to him properly, so I enrolled on a sign language course. I assumed I\'d only ever use it with the family, but it\'s changed my working life. I\'m a receptionist at a hospital, and I now use it with patients nearly every week.'],
['N', 'Speaker three.'],
['F2', 'After I moved to Leeds I didn\'t know a soul, so I joined a salsa class, simply as a way of getting to know people. And I did make friends. What I wasn\'t prepared for was how exhausting it would be. I thought of dancing as gentle fun. After the first lesson I could hardly climb the stairs.'],
['N', 'Speaker four.'],
['M2', 'I\'d been in sales for fifteen years and wanted out, so I took an evening course in programming, hoping to find a completely different job. I\'m still looking, actually. The funny thing is how hooked I got on the theoretical side, the mathematics behind it, which I\'d dreaded. I\'d always believed I was bad at that sort of thing.'],
['N', 'Speaker five.'],
['F', 'My brother said I\'d never have the patience for chess, and that was enough for me. I signed up for lessons the following week just to show him. What I\'ve discovered is a side of myself I don\'t much like. I can\'t bear losing, even to children. I never knew I had it in me.'],
],
items: (function () {
  const t1 = ['A – to change career', 'B – to meet people', 'C – on medical advice', 'D – to keep a promise', 'E – to communicate with a relative', 'F – out of boredom', 'G – it was a present', 'H – to prove somebody wrong'];
  const t2 = ['A – how much they enjoyed the theory', 'B – the age of the other participants', 'C – how physically demanding it was', 'D – how friendly the teacher was', 'E – how quickly they improved', 'F – how competitive they became', 'G – how expensive it was', 'H – how useful it was at work'];
  return [
    pick('Task 1 (why they started) — Speaker 1', t1, 6), pick('Task 1 — Speaker 2', t1, 4), pick('Task 1 — Speaker 3', t1, 1), pick('Task 1 — Speaker 4', t1, 0), pick('Task 1 — Speaker 5', t1, 7),
    pick('Task 2 (what surprised them) — Speaker 1', t2, 1), pick('Task 2 — Speaker 2', t2, 7), pick('Task 2 — Speaker 3', t2, 2), pick('Task 2 — Speaker 4', t2, 0), pick('Task 2 — Speaker 5', t2, 5),
  ];
})()
},
];

C1.writing = {
criteria: `
<p>Il Writing dura <b>90 minuti</b> per <b>due testi</b> da <b>220–260 parole</b> ciascuno (circa 45 minuti l'uno). <b>Part 1</b>: essay obbligatorio. <b>Part 2</b>: scegli uno tra proposal, report, review, letter/email.</p>
<table class="tbl">
<tr><th>Criterio (0–5 ciascuno)</th><th>Cosa guardano</th></tr>
<tr><td><b>Content</b></td><td>Hai risposto a <u>tutti</u> i punti della traccia? Il lettore è informato?</td></tr>
<tr><td><b>Communicative Achievement</b></td><td>Registro e formato giusti per il tipo di testo (titoli nel report/proposal, tono nella lettera…).</td></tr>
<tr><td><b>Organisation</b></td><td>Paragrafi chiari, linkers vari, coesione.</td></tr>
<tr><td><b>Language</b></td><td>Lessico ricco e preciso, strutture complesse (inversioni, cleft, participle clauses, condizionali), pochi errori.</td></tr>
</table>
<p><b>Metodo in 45 minuti:</b> 5' piano (idee + 3–4 strutture "C1" che vuoi usare) · 30' scrittura · 10' rilettura (conta le parole, controlla -s della terza persona, articoli, verb patterns, spelling).</p>`,
types: [
{ id: 'essay', title: 'Essay (Part 1 – obbligatorio)', sum: 'Discuti DUE dei tre punti dati e spiega quale è più importante, motivando.',
guide: `
<p><b>La traccia</b> ti dà un tema, tre punti (es. <i>economy, environment, local culture</i>) e tre opinioni. Devi: discutere <b>due</b> punti, dire <b>quale dei due è più importante</b> e <b>perché</b>. Puoi usare le opinioni date ma con <b>parole tue</b>.</p>
<table class="tbl">
<tr><th>Paragrafo</th><th>Contenuto</th></tr>
<tr><td>1. Introduzione</td><td>Presenta il tema in modo generale + annuncia i due punti. Non dare ancora la tua conclusione.</td></tr>
<tr><td>2. Primo punto</td><td>Idea + spiegazione + esempio/conseguenza.</td></tr>
<tr><td>3. Secondo punto</td><td>Idem, collegato al primo con un linker.</td></tr>
<tr><td>4. Conclusione</td><td>Quale dei due è più importante e <b>perché</b> (è il punto che molti dimenticano).</td></tr>
</table>
<p>Registro <b>formale e impersonale</b>: niente contrazioni, niente "I think" a ogni riga, niente domande retoriche a raffica.</p>`,
phrases: [
['Introduzione', ['It is generally accepted that…', 'There is no denying that…', 'In recent years, … has become a matter of considerable debate.', 'This essay will consider…']],
['Sviluppare', ['The first thing to remember is…', 'Another point to bear in mind is…', 'Not only does…, but it also…', 'A further consideration is that…', 'This is largely due to…']],
['Contrasto', ['That said, …', 'Nevertheless, …', 'Whereas…, …', 'Despite + -ing / noun, …']],
['Conclusione', ['On balance, I believe that…', 'Of the two, … is undoubtedly the more significant.', 'All things considered, …', 'If…, … must therefore take priority.']],
],
prompts: [
'Your class has attended a panel discussion on <b>the effects of tourism on popular destinations</b>. Notes: • the local economy • the environment • local culture. Opinions: "Tourism creates jobs for local people." · "Flights and hotels damage the planet." · "Traditions are turned into shows for visitors." Write an essay discussing <b>two</b> of the effects in your notes. Explain <b>which effect is more significant</b>, giving reasons in support of your answer.',
'Your class has watched a documentary on <b>what helps people stay focused in the digital age</b>. Notes: • limiting technology • education • changes in the workplace. Opinions: "Phones should be banned in meetings." · "Children should be taught how to concentrate." · "Open-plan offices make deep work impossible." Write an essay discussing <b>two</b> of the approaches. Explain <b>which would be more effective</b>, giving reasons.',
'Your class has had a discussion on <b>how governments can encourage young people to take more risks in their careers</b>. Notes: • financial support • education • role models. Opinions: "Start-up grants would make a difference." · "Schools punish failure too harshly." · "Young people need to see others succeed." Write an essay discussing <b>two</b> of the methods. Explain <b>which is more important</b>, giving reasons.',
],
model: { task: 'Traccia 1 (tourism)', text: `The impact of tourism on popular destinations

It is generally accepted that tourism plays a pivotal role in the modern world, yet its consequences for the places that attract visitors are far from straightforward. This essay will consider its effects on the local economy and on the environment.

There is no denying that tourism brings considerable economic benefits. Not only does it generate substantial revenue, but it also creates employment for local people, from hotel staff to tour guides. That said, an economy which relies too heavily on a single, unpredictable industry is fragile. Moreover, the influx of foreign money tends to push up prices, so that everyday life becomes unaffordable for the very residents who are supposed to benefit.

The environmental consequences are arguably even more serious. Seldom do fragile ecosystems remain undamaged once large-scale construction begins, and the pollution caused by ever-increasing air travel affects the planet as a whole rather than one resort. Although many destinations now promote so-called sustainable tourism, such initiatives have so far done little to reduce the overall carbon footprint of the industry.

On balance, I believe the environmental impact is the more significant of the two. Whereas economic problems can be addressed through sensible regulation, damage to the natural world is frequently irreversible. If popular destinations are to have a future at all, protecting the environment must therefore take priority over short-term profit.` },
},
{ id: 'proposal', title: 'Proposal', sum: 'Proponi cosa fare in futuro e convinci chi decide. Con titoletti.',
guide: `
<p>Un <b>proposal</b> guarda al <b>futuro</b>: suggerisci azioni e persuadi il lettore (un preside, il comune, un capo). Il <b>report</b> invece descrive qualcosa che è già successo e poi raccomanda.</p>
<table class="tbl">
<tr><th>Sezione (con titolo)</th><th>Contenuto</th></tr>
<tr><td>Introduction</td><td>Scopo del documento in 1–2 frasi.</td></tr>
<tr><td>2–3 sezioni centrali</td><td>Situazione attuale + le tue proposte, ognuna con il suo titolo descrittivo.</td></tr>
<tr><td>Benefits / Recommendations / Conclusion</td><td>Perché conviene + raccomandazione finale chiara.</td></tr>
</table>
<p>Registro <b>formale e persuasivo</b>. Usa condizionali (<i>would, could, Were the council to…</i>), passivi e verbi di raccomandazione con il pattern giusto: <span class="v">I recommend building / that the council (should) build</span>, mai <span class="x">recommend to build</span>.</p>`,
phrases: [
['Scopo', ['The purpose / aim of this proposal is to…', 'This proposal puts forward…', 'This proposal outlines… and suggests ways in which…']],
['Proporre', ['I would suggest + -ing…', 'I propose that… (should)…', 'One possibility would be to…', 'Were… to…, … would…', 'It would be advisable to…']],
['Benefici', ['This would enable … to…', 'A further advantage would be…', 'Not only would this…, but it would also…', 'Residents and visitors alike would benefit.']],
['Chiusura', ['In light of the above, …', 'I am convinced that…', 'I would strongly recommend that…', 'Should funds be limited, priority should be given to…']],
],
prompts: [
'The town council wants to make your town <b>more attractive to tourists while improving life for residents</b>. Write a proposal suggesting <b>two improvements</b>, explaining how each would benefit both visitors and local people.',
'Your college wants to help students <b>cope with stress</b> during exam periods and has asked for proposals. Write a proposal describing the main causes of stress among students and <b>recommending two or three measures</b> the college could introduce.',
'Your company is considering allowing staff to <b>work from home three days a week</b>. Your manager has asked you to write a proposal outlining the possible benefits and problems, and making <b>recommendations</b> for how the scheme should be organised.',
],
model: { task: 'Traccia 1 (town)', text: `Proposal: making our town more attractive to visitors and residents

Introduction
The purpose of this proposal is to put forward two improvements which would enhance our town's appeal to tourists while also raising the quality of life of those who live here.

A riverside promenade
At present, the area alongside the river is largely neglected. I would suggest converting it into a pedestrianised promenade lined with trees, benches and a small number of cafés. This would provide visitors with a picturesque spot to stroll and take photographs, and residents with a much-needed green space away from the traffic.

A covered market
My second recommendation is the creation of a covered market where local farmers and artisans could sell regional produce and handmade goods. Were such a market to open throughout the week, tourists would be able to discover our local culture, while residents would have access to fresh, affordable food close to home.

Benefits
Both projects would make use of sites that are currently standing empty and would create a considerable number of jobs. Furthermore, they would encourage visitors to spend longer, and therefore more, in the town centre.

Conclusion
In light of the above, I am convinced that the promenade and the market would benefit tourists and residents alike. I would strongly recommend that the council approve both projects and, should funds be limited, give priority to the promenade, as it could be completed at relatively low cost.` },
},
{ id: 'report', title: 'Report', sum: 'Descrivi e valuti qualcosa che è successo, poi raccomanda. Con titoletti.',
guide: `
<p>Il <b>report</b> informa un superiore o un gruppo su una situazione o un'esperienza (un corso, un evento, un servizio) e si chiude con raccomandazioni. Tono <b>oggettivo e formale</b>, molti passivi.</p>
<table class="tbl">
<tr><th>Sezione (con titolo)</th><th>Contenuto</th></tr>
<tr><td>Introduction</td><td>Scopo del report (ed eventualmente su cosa si basa).</td></tr>
<tr><td>Sezioni centrali</td><td>Aspetti positivi / problemi riscontrati — un titolo per ciascuno.</td></tr>
<tr><td>Recommendations</td><td>Cosa migliorare.</td></tr>
<tr><td>Conclusion</td><td>Giudizio complessivo in 1–2 frasi.</td></tr>
</table>`,
phrases: [
['Scopo', ['The aim of this report is to evaluate…', 'This report is based on…', 'This report outlines… and suggests…']],
['Risultati', ['On the whole, …', 'It was felt that…', 'The vast majority of participants…', 'A number of shortcomings were identified.', '… left a great deal to be desired.']],
['Raccomandare', ['In view of the above, I would recommend that…', 'It would be highly beneficial to…', 'Consideration should be given to…']],
['Conclusione', ['Despite the weaknesses outlined above, …', 'Provided that these changes are made, …', 'Overall, the programme can be considered a success.']],
],
prompts: [
'You recently completed a <b>four-week work experience programme</b>. The organiser has asked for a report. Describe what you gained from the programme, explain any problems you encountered and <b>recommend improvements</b> for future participants.',
'Your language school held an <b>"English-only weekend"</b> in the mountains. The director has asked you to write a report saying how successful it was, which activities worked best and <b>what should be changed</b> next year.',
'Your local council is collecting information about <b>leisure facilities for young people</b> in your area. Write a report describing what is currently available, evaluating its quality and <b>suggesting what should be added</b>.',
],
model: { task: 'Traccia 1 (work experience)', text: `Report on the summer work experience programme

Introduction
The aim of this report is to evaluate the four-week work experience programme I completed at a local marketing agency in July, and to suggest how it might be improved for future participants.

Benefits
On the whole, the placement was extremely worthwhile. I was given the opportunity to shadow experienced members of staff and, in the final week, to take charge of a small project of my own. This gave me a real sense of accomplishment as well as a far clearer insight into what the profession involves. My confidence in dealing with clients also increased considerably.

Problems encountered
The programme was not, however, without its shortcomings. During the first week, little had been planned for us, and a good deal of time was spent on routine tasks such as photocopying. In addition, participants received hardly any feedback, which made it difficult to judge our progress.

Recommendations
In view of the above, I would recommend that each participant be assigned a mentor from the first day, and that a timetable of activities be drawn up in advance. A short feedback session at the end of every week would also be highly beneficial.

Conclusion
Despite the weaknesses outlined above, I would not hesitate to recommend the programme. Were these changes to be introduced, it would be of even greater value to students.` },
},
{ id: 'review', title: 'Review', sum: 'Descrivi, valuta e consiglia (o sconsiglia): film, libro, corso, ristorante, app…',
guide: `
<p>La <b>review</b> è il testo più libero: registro <b>semi-formale ma vivace</b>, deve <b>interessare</b> il lettore. Non raccontare tutta la trama: massimo un terzo di descrizione, il resto è <b>valutazione</b>.</p>
<table class="tbl">
<tr><th>Paragrafo</th><th>Contenuto</th></tr>
<tr><td>Titolo + apertura</td><td>Un titolo accattivante e un inizio che incuriosisce (un'aspettativa smentita, una domanda).</td></tr>
<tr><td>Descrizione breve</td><td>Di cosa si tratta.</td></tr>
<tr><td>Punti di forza</td><td>Con dettagli concreti e aggettivi precisi.</td></tr>
<tr><td>Punti deboli</td><td>Almeno una critica: dimostra capacità di giudizio.</td></tr>
<tr><td>Raccomandazione</td><td>A chi lo consigli e perché.</td></tr>
</table>`,
phrases: [
['Apertura', ['I sat down expecting… Little did I know that…', 'If you only see one film this year, make it…', 'Rarely have I been so…']],
['Valutare', ['What sets it apart from… is…', 'gripping / thought-provoking / moving / stunning / overrated / predictable / far-fetched', 'Far from + -ing, …', 'The highlight is undoubtedly…']],
['Criticare', ['If I have one criticism, it is that…', 'The middle section drags slightly.', '… fails to live up to expectations.', '…, touching though it is, …']],
['Consigliare', ['All in all, …', 'I would recommend it not only to… but to anyone who…', 'It is well worth + -ing.', 'You will come away feeling…']],
],
prompts: [
'A website for students of English has asked for reviews of <b>a film, series or documentary that changed the way you think about something</b>. Write a review describing it, explaining how it affected you and saying who you would recommend it to.',
'An international magazine wants reviews of <b>an app or website you have used to learn something</b>. Describe what it offers, evaluate its strengths and weaknesses and say whether it is worth using.',
'A travel website has asked for reviews of <b>a place you visited that did not match its reputation</b> (for better or worse). Describe the place, explain how it differed from your expectations and say whether you would recommend it.',
],
model: { task: 'Traccia 1 (documentary)', text: `The Quiet Peak: a documentary that takes your breath away

I sat down to watch "The Quiet Peak" expecting ninety minutes of spectacular scenery and not much else. Little did I know that I would spend most of it on the edge of my seat.

The film follows Lena, a nurse in her fifties, as she attempts to climb an Alpine summit that defeated her thirty years earlier. What sets it apart from other mountaineering documentaries is its refusal to turn her into a superhero. We see her frightened, exhausted and, at one point, on the verge of giving up. Far from weakening the film, these moments are precisely what make it so gripping.

Visually, it is stunning. The camerawork captures both the vastness of the landscape and the tiniest details, such as frost forming on a rope. The soundtrack, by contrast, is used sparingly; long stretches are accompanied by nothing but wind, which adds to the sense of isolation.

If I have one criticism, it is that the middle section drags slightly. The interviews with Lena's family, touching though they are, tell us little that we have not already understood.

All in all, though, this is a remarkable piece of film-making. I would recommend it not only to climbers but to anyone who has ever wondered whether it is too late to take a risk. You will come away feeling that it probably is not.` },
},
{ id: 'letter', title: 'Letter / Email (formale e informale)', sum: 'Il registro è tutto: capisci a chi scrivi e mantieni il tono dall\'inizio alla fine.',
guide: `
<p>Può essere <b>informale</b> (a un amico: consigli, notizie, inviti) o <b>formale</b> (a un giornale, a un'azienda, una candidatura, un reclamo). Per il linguaggio della lettera informale vedi anche il mazzo <a href="#lessico/register">Formale vs informale</a>.</p>
<table class="tbl">
<tr><th></th><th>Informale</th><th>Formale</th></tr>
<tr><td>Apertura</td><td>Dear Sam, / Hi Sam,</td><td>Dear Sir or Madam, / Dear Ms Brown,</td></tr>
<tr><td>Prima frase</td><td>It was great to hear from you!</td><td>I am writing with regard to / to enquire about / to express…</td></tr>
<tr><td>Stile</td><td>contrazioni, phrasal verbs, idioms, punti esclamativi (pochi)</td><td>niente contrazioni, verbi latini (obtain, require), passivi</td></tr>
<tr><td>Chiusura</td><td>Drop me a line soon. / Lots of love, / All the best,</td><td>I look forward to hearing from you. / Yours faithfully (Sir/Madam) · Yours sincerely (nome)</td></tr>
</table>
<p>Rispondi a <b>tutte</b> le domande della traccia: di solito sono tre.</p>`,
phrases: [
['Informale – consigli', ['If I were you, I\'d…', 'Have you thought about + -ing?', 'You\'d be mad not to…', 'It\'s high time you…', 'Whatever you decide, I\'m behind you.']],
['Informale – naturalezza', ['To be honest, …', 'Mind you, …', 'Anyway, …', 'By the way, …', 'I was over the moon / taken aback to hear…']],
['Formale – scopo e richieste', ['I am writing to draw your attention to…', 'I would be grateful if you could…', 'I wonder whether it would be possible to…', 'I feel I must express my dissatisfaction with…']],
['Formale – chiusura', ['I trust this matter will receive your prompt attention.', 'Please do not hesitate to contact me should you require further information.', 'I look forward to hearing from you.']],
],
prompts: [
'You have received this email from an English-speaking friend: <i>"I\'m seriously thinking of quitting my job and travelling for a year. Everyone says I\'m mad! You\'ve travelled on your own — what do you think? Is it worth the risk? Any practical tips?"</i> Write your <b>reply</b>.',
'You read a newspaper article claiming that <b>young people today are incapable of concentrating because of their phones</b>. You disagree with some of its points. Write a <b>letter to the editor</b> giving your views and suggesting what could really help.',
'You recently stayed at a hotel that was advertised as "a peaceful retreat" but was next to a construction site, and the staff were unhelpful. Write a <b>letter of complaint</b> to the manager explaining what happened and saying what you expect them to do.',
],
model: { task: 'Traccia 1 (informal reply)', text: `Dear Sam,

It was great to hear from you — and what news! I must admit I was a bit taken aback at first, but the more I think about it, the more it sounds like exactly what you need.

You asked whether I think you'd be mad to hand in your notice. Honestly? Not at all. You've been saying for ages that the job is taking a toll on you, and it's high time you did something about it. That said, if I were you, I'd have a word with your boss before resigning. You never know, they might agree to keep your job open for a year, which would take a lot of the pressure off.

As for travelling alone, I wouldn't worry. When I went to South America on my own, I was terrified for the first week, but I soon got used to it, and I ended up meeting far more people than I would have with a friend in tow. My only regret is not having learnt some Spanish beforehand, so do brush up on the language before you set off.

Money-wise, it's worth putting aside more than you think you'll need. Things always crop up!

Anyway, whatever you decide, I'm behind you all the way. Drop me a line when your plans start to take shape — and if you fancy company for a couple of weeks, just say the word.

Lots of love,
Alex` },
},
],
};

C1.speaking = {
info: `<p>Lo Speaking dura <b>15 minuti</b>, si fa <b>in coppia</b> con un altro candidato, davanti a due esaminatori. Vale il 20% del voto. Valutano: grammatica e lessico, gestione del discorso, pronuncia, interazione. <b>Non serve dire cose intelligenti: serve parlare in modo fluido, organizzato e reagire al partner.</b></p>
<p><b>Come allenarti da solo:</b> fai partire il timer, registrati con il telefono, riascoltati e annota: esitazioni, parole ripetute, linkers usati. Poi rifai la stessa domanda.</p>`,
parts: [
{ title: 'Part 1 – Interview (2 minuti)', time: 30, info: 'Domande personali. Rispondi con 2–3 frasi: risposta + motivo + esempio. Non recitare testi imparati a memoria.', sets: [
'What do you enjoy most about the place where you live?',
'How do you usually spend your free time?',
'Is there a skill you would like to learn in the future? Why?',
'How important is it for you to have a routine?',
'Do you consider yourself a risk-taker? Why (not)?',
'What kind of things make you laugh?',
'How do you think you will use English in the future?',
'Do you prefer to work or study alone or with other people?',
'What was the last thing that gave you a real sense of accomplishment?',
'Is there something you used to do as a child that you miss?',
'How do you feel about speaking in public?',
'Would you rather live in a quaint small town or a big city? Why?',
]},
{ title: 'Part 2 – Long turn (1 minuto da soli)', time: 60, info: 'Ricevi tre foto: ne confronti DUE e rispondi alle due domande scritte sopra. Non descrivere: <b>confronta e specula</b> (might, must, could, seem). Poi il partner risponde a una breve domanda (30 secondi).', sets: [
'<b>Immagina tre foto:</b> (1) una persona che scala una parete di roccia da sola · (2) un chirurgo in sala operatoria · (3) una giovane coppia che firma un contratto in banca.<br><b>Compare two of the pictures and say:</b> what risks the people might be taking, and how they might be feeling.<br><i>Follow-up per il partner:</i> Which of these situations would you find most stressful?',
'<b>Immagina tre foto:</b> (1) un gruppo di colleghi che ride attorno a un tavolo · (2) un comico su un palco davanti al pubblico · (3) due bambini che fanno le boccacce.<br><b>Compare two of the pictures and say:</b> why the people might be laughing, and how important humour is in these situations.<br><i>Follow-up:</i> In which situation is the laughter most genuine?',
'<b>Immagina tre foto:</b> (1) una donna che lavora al computer mentre parla al telefono e mangia · (2) un artigiano concentrato su un orologio · (3) uno studente in biblioteca circondato da libri e con lo smartphone in mano.<br><b>Compare two of the pictures and say:</b> how effectively the people are working, and what might be distracting them.<br><i>Follow-up:</i> Who do you think will be most satisfied at the end of the day?',
'<b>Immagina tre foto:</b> (1) turisti in fila davanti a un monumento famoso · (2) un escursionista solo su un sentiero di montagna · (3) una famiglia in un mercato locale.<br><b>Compare two of the pictures and say:</b> what the people are getting from the experience, and what effect they might have on the place.<br><i>Follow-up:</i> Which kind of holiday would you choose?',
]},
{ title: 'Part 3 – Collaborative task (2 min + 1 min di decisione)', time: 120, info: 'Tu e il partner discutete una domanda con cinque spunti, poi dovete arrivare (o provare ad arrivare) a una decisione. <b>Conta l\'interazione:</b> chiedi l\'opinione dell\'altro, reagisci, costruisci su ciò che dice. Non serve parlare di tutti e cinque i punti.', sets: [
'<b>How can these things help people cope with stress?</b><br>• a sense of humour • physical exercise • time in nature • a supportive community • a clear routine<br><b>Then decide:</b> which would be most effective for students preparing for exams?',
'<b>What are the advantages and disadvantages of these ways of making a town more attractive?</b><br>• a pedestrianised centre • a covered market • more festivals • limits on tourist numbers • better public transport<br><b>Then decide:</b> which would benefit residents the most?',
'<b>Why might people decide to take these risks?</b><br>• changing career • moving abroad • starting a business • taking up an extreme sport • investing their savings<br><b>Then decide:</b> which risk is most worth taking?',
'<b>How important are these things in learning a language as an adult?</b><br>• a good teacher • living abroad • technology and apps • a clear goal such as an exam • not being afraid of mistakes<br><b>Then decide:</b> which two are the most important?',
]},
{ title: 'Part 4 – Discussion (5 minuti)', time: 60, info: 'Domande più astratte legate al tema della Part 3. Dai un\'opinione, motivala, fai un esempio, considera l\'altro lato.', sets: [
'Some people say modern life is more stressful than in the past. Do you agree?',
'Is there an issue that governments are not treating with the sense of urgency it deserves?',
'Should cities limit the number of tourists they accept? Why (not)?',
'Do you think people take social media too seriously?',
'Is it better to take things at face value or to question everything?',
'What can local governments do to promote a greater sense of community?',
'Do you think being able to laugh at yourself is a strength or a weakness?',
'Is multitasking a useful skill or a myth?',
'Do we take things like peace and clean water for granted?',
'Should schools teach children how to take risks?',
]},
{ title: 'Espressioni – "Take" e "sense of" (1 minuto ciascuna)', time: 60, info: 'Prova a riusare l\'espressione nella risposta.', sets: [
'Talk about something that has given you a sense of accomplishment in your life.',
'Talk about something the local government can do to promote a greater sense of community.',
'Talk about something important to do so as to improve your personal sense of well-being.',
'Tell me about an accomplishment of yours that you TAKE PRIDE IN.',
'What is one thing that can really TAKE A TOLL ON one\'s mental health?',
'What is one social issue that you believe we do not TAKE SERIOUSLY enough?',
'Should we TAKE statistics about young people AT FACE VALUE?',
'If you\'re working in a team, are you typically the one who TAKES CHARGE?',
'Tell me two things you should TAKE INTO ACCOUNT when deciding whether to share a flat with someone.',
'Finish and continue: "Bath is a really small and quaint city. That said, …"',
'Finish and continue: "People will always believe conspiracy theories no matter…"',
'Are you a risk-taker? Which is riskier: quitting your job without having another one, or investing all your money in Bitcoin?',
]},
],
phrases: [
['Dare un\'opinione', ['As far as I\'m concerned, …', 'I\'m inclined to think that…', 'To my mind, …', 'I\'d go so far as to say…', 'What\'s your take on this?']],
['Confrontare (Part 2)', ['Whereas the first picture shows…, the second…', 'Both pictures show…, but…', 'The most striking difference is…', 'In contrast to…']],
['Speculare (Part 2)', ['She must be feeling…', 'He might well be…', 'I\'d imagine that…', 'They look as if / as though…', 'It\'s hard to tell, but presumably…']],
['Interagire (Part 3)', ['What do you reckon?', 'I see what you mean, but…', 'That\'s a good point; on top of that…', 'Wouldn\'t you agree that…?', 'Shall we move on to…?', 'So, are we agreed that…?']],
['Prendere tempo', ['That\'s an interesting question.', 'Let me think…', 'I\'ve never really thought about it, but…', 'How shall I put it…', 'What I mean is…']],
['Concedere e ribattere', ['That said, …', 'Mind you, …', 'Having said that, …', 'Then again, …', 'Admittedly, … but…']],
],
};
