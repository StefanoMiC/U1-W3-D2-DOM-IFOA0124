// con la DOM Manipulation noi potremo alterare il contenuto della pagina già precedentemente caricata
// potremo quindi INSERIRE/MODIFICARE/ELIMINARE qualsiasi cosa renderizzata al suo interno
// e fare delle modifiche nel tempo anche a partire da un'interazione con l'utente

// il processo si compone di DUE FASI:

// 1) SELEZIONE (DOM Traversing) - seleziono l'elemento che mi interessa modificare
// 2) MANIPOLAZIONE (DOM Manipulation) - modifico effettivamente l'elemento per stile o contenuto o presenza nella pagina

// per SELEZIONARE i nostri elementi faremo SEMPRE riferimento al nostro "document", che è un oggetto già reso disponibile dal browser con il suo DOM
// il document ci rappresenta l'intera pagina

// i metodi che applicheremo all'inizio per la selezione partiranno tutti dal document

console.log(document);
// il console.dir ci forza una visualizzazione ad Oggetto, non sempre automatica con il console.log
console.dir(document);

// 1) Selezione per id

const menu = document.getElementById("main-menu"); // DOM Node di <ul> || null
// se uno di questi metodo non trovasse quello che cerchiamo ci tornerà null

console.log("MENU", menu); // ci visualizza il tag html con relativa connessione all'elemento renderizzato nella pagina
console.dir(menu); // ci visualizza le proprietà del nodo

// 2) Selezione per classe
const allTheBodyTexts = document.getElementsByClassName("body-text");
console.log("ALL Ps", allTheBodyTexts);

const subtitle = document.getElementsByClassName("subtitle");
console.log("SOTTOTITOLO in HTMLCollection", subtitle);
console.log("SOTTOTITOLO", subtitle[0]);

// 3) Selezione per tag name
const h1 = document.getElementsByTagName("h1")[0]; // seleziono la prima posizione immediatamente dopo che mi viene tornata la HTMLCollection
console.log("TITOLO", h1);

const allTheLis = document.getElementsByTagName("li");
console.log("secondo li", allTheLis[1]);

for (let i = 0; i < allTheLis.length; i++) {
  console.log(allTheLis[i]);
}

// forEach non esiste su una HTMLCollection, dovrà essere trasformata prima di poter usare tutti i nuovi metodi degli array arrivati con ES6 nel 2015

Array.from(allTheLis).forEach(li => console.log(li));
// così trasformata la collezione potrà avere il forEach disponibile per essere utilizzato (così come map, filter, reduce, ecc...)

// 4) querySelector
// questo metodo fa largo uso di selettori CSS (anche avanzati)
// bisogna assolutamente ricordarsi di aggiungere # per gli id e . per le classi

// col querySelector se cerchiamo una classe ci verrà tornato il primo elemento dall'alto con quella classe

const header = document.querySelector("header");
console.log("HEADER", header);
const subtitleWQ = document.querySelector(".subtitle");
console.log("SUBTITLE", subtitleWQ); // torna un singolo elemento e non una collezione di elementi

const h1WQ = document.querySelector("#main-title"); // tra questo approccio e getElementById preferite l'ultimo, è più performante e non bisogna ricordarsi del #
console.log("H1", h1WQ);

const secondUl = document.querySelector("main ul");
console.log("SECOND UL", secondUl);

// 5) querySelectorAll
// ci torna una collezione di elementi sottoforma di NodeList (ha disponibile il forEach ma non gli altri metodi, nel caso dovreste convertirla allo stesso modo di prima)

let secondUlLis = document.querySelectorAll("main ul li");
console.log("ONLY SECOND LIs as NodeList", secondUlLis);
secondUlLis = Array.from(secondUlLis);
console.log("ONLY SECOND LIs as Array", secondUlLis);

console.log(secondUlLis.map((li, i) => li.innerText + " " + (i + 1)));

const secondMainMenuItem = document.querySelectorAll("header ul li")[1];
console.log("SECOND MENU ITEM1", secondMainMenuItem);
const secondMainMenuItem2 = document.querySelector("header ul li:nth-child(2)");
console.log("SECOND MENU ITEM2", secondMainMenuItem2);

// METODI PER RISALIRE L'ALBERO DI NODI

// .parentNode - non è un metodo è la proprietà che contiene il riferimento al nodo (quindi oggetto) del genitore
console.dir(h1WQ.parentNode); // <main>
console.dir(h1WQ.parentNode.parentNode); // <body>

// .closest() - è un metodo per cercare elementi verso l'alto dal punto in cui siamo, e si aspetta un selettore CSS come argomento

const article = secondUl.closest(".first-article");
console.log(article);

// console.log(article.closest("main"))
const main = article.parentNode; // da article risaliamo fino a trovare main
// da main scendiamo a cercare subtitle
const subtitleAlt = main.querySelector(".subtitle");

console.log(main.querySelector(".subtitle"));

// MANIPOLARE GLI ELEMENTI UNA VOLTA SELEZIONATI...

console.log("TESTO H1:", h1.innerText);
// setTimeout(() => {
//   h1.innerText = "TI HO CAMBIATO AHAHAHAH";
// }, 1000);
h1.innerText = "TI HO CAMBIATO AHAHAHAH";
console.log("TESTO H1:", h1.innerText);

const h3 = document.querySelector("h3"); // selezione l'elemento
h3.className = "title-3"; // modifico l'elemento assegnandogli una nuova classe
h3.id = "tertiary-title";

console.dir(article);
// article.className = "another-class"; // per non andare a sovrascrivere una classe esistente il metodo migliore è con .classList()
article.classList.add("another-class"); // modo migliore per aggiungere una nuova classe
// per rimuovere basterà usare un .classList.remove("nome-classe")

// rimuovere un elemento - metodo .remove()
setTimeout(() => {
  subtitleWQ.remove();
}, 2000);

// cambiare proprietà di stile
// metodo 1) posso applicare più di una proprietà
// header.style = "background-color: lightgray; font-size: 20px";
// metodo 2)

// chiedo a window di computarmi gli stili applicati tramite css ad un elemento (attenzione che è dispendioso di risorse)
const headerStyles = window.getComputedStyle(header);
// vado a prelevare lo stile con il metodo getPropertyValue
console.log("Header Styles", headerStyles.getPropertyValue("background-color"));

header.style.backgroundColor = "lightblue";
header.style.fontSize = "24px";
