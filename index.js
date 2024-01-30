const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

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

// modifico l'immagine non funzionante
// prima la seleziono
// poi le aggiorno le proprietà!

const imgNode = document.querySelector("img");
imgNode.src = "https://images.unsplash.com/photo-1706378500840-928668179818?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
imgNode.style.width = "100%";
imgNode.style.cursor = "pointer";

imgNode.alt = "snowy mountain";
console.dir(imgNode);

// CREARE UN NUOVO ELEMENTO ED INSERIRLO NEL DOM
// metodo .createElement()

// creo gli elementi...
const footer = document.createElement("footer");
// li modifico nelle caratteristiche...
// footer.style = "background-color: black; color: white; padding-block: 6rem";
footer.className = "footer-styles";

const p = document.createElement("p");
p.style.margin = "0";
p.innerText = "Blah Blah Blahhh";

// inserisco il nodo del figlio dentro al nodo del padre
footer.appendChild(p);
document.body.appendChild(footer);

console.log(footer);
console.log(p);

const item6 = document.createElement("li");
item6.innerText = "item6";

menu.appendChild(item6);

const newDiv = document.createElement("div");
newDiv.className = "extra-div-container";
newDiv.innerHTML = `
<div style="padding: 2rem; background-color: red; border: 2px solid blue">
    <span style='color: purple'>blah <a href="https://epicode.com">blahhhhh</a></span>
</div>`;

// uso il genitore comune per comunicare la posizione precisa del mio nuovo elemento, che dovrà apparire in questo caso prima di footer
document.body.insertBefore(newDiv, footer);

// applicare una funzionalità al click di un qualche elemento della pagina

const button = document.getElementById("remove-list-item");
button.onclick = function () {
  secondUl.lastElementChild.remove();
};

imgNode.onclick = function () {
  imgNode.src = "https://images.unsplash.com/photo-1706505754377-ae2ebd8142af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  imgNode.alt = "another mountain";
};

const imageContainer = document.getElementById("movies-container");

movies.forEach(movie => {
  const movieImg = document.createElement("img");
  movieImg.src = movie.Poster;

  imageContainer.appendChild(movieImg);
});

const generateTitles = function () {
  const ul = document.createElement("ul");

  movies.forEach(movie => {
    const li = document.createElement("li");
    li.innerText = movie.Title;

    ul.appendChild(li);
  });

  imageContainer.appendChild(ul);
};
