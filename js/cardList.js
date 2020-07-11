class CardList {
    constructor(container,popupNews, newcards) {
        this.container = container;
        this.popupNews = popupNews;
        this.newcard = newcards;
    }
    addCard(event) {
        const cardObject = { title: form.elements.name.value, link: form.elements.link.value }
        const card = this.newcard(cardObject, placesList)
        const cardElem = card.create();
        this.container.appendChild(cardElem);
        event.preventDefault();
        this.popupNews.close(event);
    }
    render(data) {
        this.data = data
        for (const element of this.data) {
            const cardObject = { title: element.name, link: element.link }
            const card = this.newcard(cardObject, placesList);
            const cardElem = card.create();
            this.container.appendChild(cardElem);
        }
    }
}
