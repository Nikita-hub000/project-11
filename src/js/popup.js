export class Popup {
    constructor(popupEdit, popupProf, job, name, cardform, validityadd, editcard, userinfo, validityedit, form) {
        this.job = job;
        this.name = name;
        this.cardform = cardform
        this.popupEdit = popupEdit
        this.popupProf = popupProf
        this.validityadd = validityadd
        this.editcard = editcard
        this.userinfo = userinfo
        this.validityedit = validityedit
        this.form = form
    }
    popupOpened(element) {
        element.classList.add("popup_is-opened")
    }
    disactivateButton(element) {
        element.classList.add("popup__button_disabled")
    }
    open(event) {
        // попап карточек
        if (event.target.classList.contains("user-info__button")) {
            this.popupOpened(this.popupEdit);
            this.form.reset()
            this.disactivateButton(this.cardform.querySelector(".popup__button"))
            this.validityadd.setEventListeners()
        }
        if (event.target.classList.contains('user-info__button-edit')) {
            this.userinfo.setUserInfo()
            this.popupOpened(this.popupProf);
            document.forms.edit.reset();
            this.disactivateButton(this.editcard.querySelector(".popup__button"))
            this.popupProf.querySelector(".popup__button").setAttribute("disabled", true)
            this.validityedit.setEventListeners()
        }
        if (event.target.classList.contains("place-card__image")) {
            const popupImageWindow = document.querySelector(".popup_image")
            const pictureLink = event.target.attributes.style.value
            const picElement = document.querySelector('.popup_image_big')
            picElement.setAttribute('src', pictureLink.slice(22, -1))
            this.popupOpened(popupImageWindow)
        }
    }
    close(event) {
        if (event.type === "submit" || event.key === "Escape") {
            event.target.closest(".popup").classList.remove("popup_is-opened")
            event.preventDefault()
        }
        if (event.target.closest(".popup__content") === null || event.target.classList.contains("popup__close")) {
            event.target.closest(".popup").classList.remove("popup_is-opened")
        }

    }
}
