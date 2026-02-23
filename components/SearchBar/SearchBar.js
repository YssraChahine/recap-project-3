export function SearchBar(onSubmit) {
  const form = document.createElement("form");
  form.className = "search-bar";

  form.innerHTML = `
    <input name="query" placeholder="search" />
    <button>Search</button>
  `;

  form.addEventListener("submit", onSubmit);

  return form;
}
