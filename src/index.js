import "./pages/index.css";
import {Card} from './js/card.js';
import {CardList} from './js/cardList.js';
import {Api} from './js/api.js';
import {Popup} from './js/popup.js';
import {initialCards} from './js/initial.js';
import {userInfo} from './js/userInfo.js';
import {FormValidator} from './js/FormValidator.js';



const popupEditCard = document.querySelector(".popup__edit_card")
const editName = document.querySelector(".edit-name")
const editJob = document.querySelector(".edit-job")
const popupImageWindow = document.querySelector(".popup_image")
const popupFormCard = document.querySelector(".popup__form_card")
const editCard = document.querySelector(".popup__form_edit")
const placesList = document.querySelector('.places-list');
const cardForm = document.querySelector(".popup__form");
const Popupprofile = document.querySelector(".popup__edit_profile")
const error = document.querySelector(".popup__error-message_profile")
const form = document.forms.new
const prevName = document.querySelector(".user-info__name");
const prevJob = document.querySelector(".user-info__job");
const isDev = process.env.NODE_ENV === 'development'  ? 'http://praktikum.tk/cohort9' : 'https://praktikum.tk/cohort9';

const api = new Api({
  baseUrl: isDev,
  headers: {
    authorization: 'bf18b594-27d5-4ddc-9c1f-d89cf1b43175',
    'Content-Type': 'application/json'
  }
});

api.getInitialCards()
.then(data => {
  cardList.render(data)}
  )


const validityEdit = new FormValidator(editCard)
const validityAdd = new FormValidator(cardForm)
const userInformation = new userInfo(editCard,prevName, prevJob,document.querySelector('.user-info__photo'), api)
// document.forms.edit.addEventListener("submit", userInformation.updateUserInfo)

const popupNew = new Popup(popupEditCard, Popupprofile, prevJob, prevName, cardForm, validityAdd, editCard, userInformation, validityEdit, form)
document.addEventListener("click", popupNew.open.bind(popupNew))
// закрытие попапа редактирования профиля
Popupprofile.addEventListener("click", popupNew.close)
Popupprofile.addEventListener("keydown", popupNew.close)

//закрытие попап редактирования карточки
popupEditCard.addEventListener("click", popupNew.close)
popupEditCard.addEventListener("keydown", popupNew.close);

//закрытие попапа картинки
popupImageWindow.addEventListener("click", popupNew.close)
popupImageWindow.addEventListener("keydown", popupNew.close)

const newcard = (data, placesLists) => new Card(data, placesLists);
newcard(initialCards, placesList);
newcard(initialCards, placesList).remove

const cardList = new CardList(placesList, popupNew, newcard)
document.forms.new.addEventListener('submit', function (event) {
  event.preventDefault()
  cardList.addCard(event)
})

editCard.addEventListener('submit', (event) => {
  event.preventDefault(event);
  validityEdit.setEventListeners();
  api.updateUserInfoApi(editName.value, editJob.value)
    .then(data => {
      console.log(data)
      userInformation.updateUserInfo(data);
      popupNew.close(event);
    })    
    .catch(err => {
      console.log(`Ошибка: ${err}`);
    });
})

userInformation.userInfoLoad(editName, editJob);
document.querySelector(".user-info__button-edit").addEventListener('click', () => {
  userInformation.setUserInfo();
  userInformation.userInfoLoad(editName, editJob);
  userInformation.updateUserAvatar.bind(userInformation);
});

export {placesList, form};
