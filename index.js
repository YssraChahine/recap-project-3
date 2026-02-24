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
  try {
   const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
  );
  if (!response.ok){
   throw new Error("API returned Error");
  }

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
  renderPagination();

} catch (error){
   console.error(error);
   cardContainer.innerHTML="<p>Loading failed. Please wait and try again.</p>";
}

   function renderPagination(){

      navigation.innerHTML = "";

      // // Button in seperatem JS anlegen
      
      navigation.append(prevButton);
      navigation.append(NavPagination(page, maxPage));
      navigation.append(nextButton);

}; 
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