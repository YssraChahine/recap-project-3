export function NavPagination(page,maxPage){

    const span = document.createElement("span");

    span.className = "navigation__pagination";
    span.textContent = `${page} / ${maxPage}`;

    return span;
}