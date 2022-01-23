import { getData } from "../services/getData.js";
import { addCard } from "./addCard.js";
import { cardsHTML } from "./cardsHTML.js";
import { numberOfCard } from './numberOfCard.js';

numberOfCard(JSON.parse(localStorage.getItem('cards')))


function toGetData() {
    getData(`https://the-loop-ee8d2-default-rtdb.firebaseio.com/clothes.json`)
    .then( data => {renderCards(Object.values(data))})
}
toGetData()

function renderCards(data) {
    data.forEach(el => {
        if (el.sex === 'woman') {
            cardsHTML('.catalog-list--woman', el, 'catalog-list__item', 'catalog-list__wrapper', 'catalog-list__img', 'catalog-list__description', 'catalog-list__price', 'catalog-list__button')
        }
    });
    addCard('.catalog-list__button','.catalog-list__img','.catalog-list__description', '.catalog-list__price')
}
