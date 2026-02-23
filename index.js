import CreateCharacterCard from "./components/CharacterCard/CharacterCard.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";
import { NavButton } from "./components/NavButton/NavButton.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// let pageIndex = 1;
// await fetchCharacters(pageIndex);

// const allTwentyCards = cardContainer.querySelectorAll("li");
// console.log("cards`s", allTwentyCards);

// async function fetchCharacters(index) {
//    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${index}`);
//    const data = await response.json();

//    console.log(data);

//    const NewCharacters = data.results;
//    console.log(data.results);

//    NewCharacters.forEach((element) => {
//       CreateCharacterCard(element);
//       cardContainer.append(CreateCharacterCard(element));
//    });

//    // return data;
// }
// nextButton.addEventListener("click", () => {
//    // Max
//    pageIndex++;
//    fetchCharacters(pageIndex);
// });

// prevButton.addEventListener("click", () => {
//    pageIndex ? pageIndex-- > 0(pageIndex--) : (pageIndex = 0);

//    // delete old page:

//    fetchCharacters(pageIndex);
// });

// States

let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
  );
  const data = await response.json();

  // Maximale Seiten speichern
  maxPage = data.info.pages;

  //Container leeren
  cardContainer.innerHTML = "";

  //Für jeden Character eine neue Karte erstellen
  data.results.forEach((character) => {
    const card = CreateCharacterCard(character);
    cardContainer.append(card);
  });

  //Pagination aktualisieren = aktuelle Seite + Gesamtseiten
  pagination.textContent = `${page} / ${maxPage}`;
}

fetchCharacters();

// Button in seperatem JS anlegen

const nav = NavButton({
  Clickprev: () => {
    if (page > 1) {
      page--;
      fetchCharacters();
    }
  },
  Clicknext: () => {
    if (page < maxPage) {
      page++;
      fetchCharacters();
    }
  },
});

navigation.append(nav);

//ALTER CODE BUTTON IN HTML
// nextButton.addEventListener("click", () =>{
//    if (page < maxPage) {
//       page++;
//       fetchCharacters();
//    }
// });

const search = SearchBar((event) => {
  event.preventDefault();

  //Formular auslesen
  const formData = new FormData(event.target);

  //Suchbegriffe speichern
  searchQuery = formData.get("query");

  //Seite zurücksetzten = Suche wird immer auf Seite 1 gestartet
  page = 1;
  fetchCharacters();
});
searchBarContainer.append(search);
