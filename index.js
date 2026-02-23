import CreateCharacterCard from "./components/CharacterCard/CharacterCard.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

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

   function renderPagination(){

      navigation.innerHTML = "";

      // // Button in seperatem JS anlegen
      
      navigation.append(prevButton);
      navigation.append(NavPagination(page, maxPage));
      navigation.append(nextButton);

}; renderPagination();
}; fetchCharacters();

// Button
 const prevButton = NavButton("Prev", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

const nextButton = NavButton("Next", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }});


//Searchbar
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

//ALTER CODE BUTTON IN HTML
// nextButton.addEventListener("click", () =>{
   //    if (page < maxPage) {
      //       page++;
//       fetchCharacters();
//    }
// });

//Pagination aktualisieren = aktuelle Seite + Gesamtseiten
// pagination.textContent = `${page} / ${maxPage}`;
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');
// const searchBar = document.querySelector('[data-js="search-bar"]');

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

//Button vorher

// const pagElement = NavPagination(page, maxPage);
// const nav = NavButton({
 // onPrev: () => {
//    if (page > 1) {
//       page--;
//       fetchCharacters();
//    }
// },
// onNext: () => {
//    if (page < maxPage) {
//       page++;
//       fetchCharacters();
//    }
// },
//    pagElement,
// });
//    navigation.append(nav);