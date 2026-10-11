// Namespace + piccoli costruttori usati dai file data-*.js
window.C1 = {};
// multiple choice: la risposta corretta è SEMPRE la prima in "o" (le opzioni vengono mescolate a schermo)
const mc = (q, o, why) => ({ t: 'mc', q, o, a: 0, why });
// gap: "___" nel testo; a = risposta o elenco di risposte accettate; hint = parola tra parentesi / radice
const gap = (q, a, why, hint) => ({ t: 'gap', q, a: [].concat(a), why, hint });
// key word transformation: frase originale, parola chiave, frase con ___, risposte accettate
const kwt = (s, k, g, a, why) => ({ t: 'kwt', s, k, g, a: [].concat(a), why });
// scelta tra lettere fisse (A-D, A-G): ab('domanda','ABCD','C')
const ab = (q, letters, ans, why) => ({ t: 'mc', q, o: letters.split(''), a: letters.indexOf(ans), fix: true, sel: true, why });
// scelta da un elenco fisso di opzioni (indice della corretta)
const pick = (q, o, a) => ({ t: 'mc', q, o, a, fix: true, sel: true });
