export default function CreateCharacterCard(characterObject) {
    const card = document.createElement("li");

    card.innerhtml=`
    <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${characterImgURL}"
              alt="${characterName}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${characterName}</h2>
            <dl class="card__info">
              <dt class="card__info-title">${characterStatus}</dt>
              <dd class="card__info-description">${characterDescription}</dd>
              <dt class="card__info-title">${characterType}</dt>
              <dd class="card__info-description"></dd>
              <dt class="card__info-title">${characterOccurrences}</dt>
              <dd class="card__info-description">${characterNumber}</dd>
            </dl>
          </div>
        </li>`;
        return card;
}
