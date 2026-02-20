import CreateCharacterCard from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
/*
let maxPage = 1;
let page = 1;
let searchQuery = "";
*/

let pageIndex = 1;
await fetchCharacters(pageIndex);

const allTwentyCards = cardContainer.querySelectorAll("li");
console.log("cards`s", allTwentyCards);

async function fetchCharacters(index) {
   const response = await fetch(`https://rickandmortyapi.com/api/character?page=${index}`);
   const data = await response.json();

   console.log(data);

   const NewCharacters = data.results;
   console.log(data.results);

   NewCharacters.forEach((element) => {
      CreateCharacterCard(element);
      cardContainer.append(CreateCharacterCard(element));
   });

   // return data;
}
nextButton.addEventListener("click", () => {
   // Max
   pageIndex++;
   fetchCharacters(pageIndex);
});

prevButton.addEventListener("click", () => {
   pageIndex ? pageIndex-- > 0(pageIndex--) : (pageIndex = 0);

   // delete old page:

   fetchCharacters(pageIndex);
});
