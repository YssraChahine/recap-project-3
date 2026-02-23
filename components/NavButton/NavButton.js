// export function NavButton({ onNext, onPrev, pagElement }) {
//   const nav = document.createElement("nav");

//   const prevButton = document.createElement("button");
//   prevButton.classList.add("button");
//   prevButton.textContent = "previous";
  
//   prevButton.addEventListener("click", onPrev);

//   const nextButton = document.createElement("button");
//   nextButton.classList.add("button");
//   nextButton.textContent = "next";

//   nextButton.addEventListener("click", onNext);

//   nav.append(prevButton, pagElement ,nextButton);

//   return nav;
// }

export function NavButton(label, onClick) {

  const button = document.createElement("button");

  button.textContent = label;
  button.className = "button";

  button.addEventListener("click", onClick);

  return button;
};