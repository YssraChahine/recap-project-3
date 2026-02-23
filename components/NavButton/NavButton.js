export function NavButton({ Clicknext, Clickprev }) {
  const nav = document.createElement("nav");

  const prevButton = document.createElement("button");
  prevButton.classList.add("button");
  prevButton.textContent = "previous";

  const nextButton = document.createElement("button");
  nextButton.classList.add("button");
  nextButton.textContent = "next";

  //CLICK

  prevButton.addEventListener("click", Clickprev);
  nextButton.addEventListener("click", Clicknext);

  nav.append(prevButton, nextButton);

  return nav;
}
