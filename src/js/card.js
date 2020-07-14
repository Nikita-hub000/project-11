 export class Card {
    constructor(data) {
        this.data = data;
    }
    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked')
    }
    remove(event) {
        event.target.closest('.place-card').remove();
      }
    create(data) {
        const card = document.createElement('div');
        const cardImage = document.createElement('div');
        const deleteIcon = document.createElement('button');
        const cardDescription = document.createElement('div')
        const cardName = document.createElement('h3');
        const cardLike = document.createElement('button');
        card.classList.add('place-card');
        cardImage.classList.add('place-card__image');
        cardImage.setAttribute('style', `background-image: url(${this.data.link})`)
        deleteIcon.classList.add('place-card__delete-icon');
        cardDescription.classList.add('place-card__description');
        cardName.classList.add('place-card__name');
        cardName.textContent = this.data.title
        cardLike.classList.add('place-card__like-icon')
        card.appendChild(cardImage);
        card.appendChild(cardDescription);
        cardImage.appendChild(deleteIcon);
        cardDescription.appendChild(cardName)
        cardDescription.appendChild(cardLike)
        card.querySelector('.place-card__like-icon').addEventListener("click", this.like)
        card.querySelector('.place-card__delete-icon').addEventListener("click", this.remove)
        return card;
    }
}

    