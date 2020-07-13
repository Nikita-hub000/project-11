export class FormValidator {
    constructor(element) {
        this.element = element;
    }
    checkInputValidity(event) {
        const words =
        {
            validationLenght: 'Должно быть от 2 до 30 символов',
            validationZeroLength: 'Это обязательное поле',
            validationNoLink: 'Здесь должна быть ссылка'
        }
        let errorText = '';
        const errorElement = event.target.nextElementSibling
        const errorShow = () => errorElement.classList.add("popup__error-message_active")
        if (event.target.validity.valueMissing) {
            errorText = words.validationZeroLength;
            errorShow()
        }
        if (event.target.validity.tooShort) {
            errorText = words.validationLenght;
            errorShow()
        }
        if (event.target.name === "link" && event.target.validity.typeMismatch) {
            errorText = words.validationNoLink
            errorShow()
        }
        if (event.target.validity.valid) {
            errorElement.classList.remove("popup__error-message_active")
        }
        errorElement.textContent = errorText;
    }
    setSubmitButtonState(event) {
        const windowPopup = event.target.closest(".popup")
        const button = windowPopup.querySelector(".popup__button")
        const name = document.getElementById("el1")
        const link = document.getElementById('el2')
        const author = document.getElementById('el3')
        const about = document.getElementById("el4")
        if ((name.validity.valid && link.validity.valid) || (author.validity.valid && about.validity.valid))  {
            button.removeAttribute("disabled");
            button.classList.remove("popup__button_disabled");  
        }
        else {
            button.setAttribute("disabled", true);
            button.classList.add("popup__button_disabled"); 
        }
    }
    setEventListeners() {
        this.element.addEventListener('input', this.setSubmitButtonState)
        this.element.addEventListener('input', this.checkInputValidity)
        this.element.addEventListener('click', this.setSubmitButtonState)
        this.element.addEventListener('click', this.checkInputValidity)
    }
}
