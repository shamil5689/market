import { getData } from "../services/getData.js";
import {addCard} from './addCard.js';
import {cardsHTML} from '../components/cardsHTML.js'

function drawCards() {
    getData('https://the-loop-ee8d2-default-rtdb.firebaseio.com/clothes.json')
    .then(data => {renderCards(Object.values(data)), addCard('.modal-list__button','.modal-list__img','.modal-list__description', '.modal-list__price')})
}


function renderCards(data) {
    data.forEach(item => {
    cardsHTML('.modal-list', item, 'modal-list__item', 'modal-list__wrapper', 'modal-list__img', 'modal-list__description', 'modal-list__price', 'modal-list__button')
    });
    hideCards(4)
}

function hideCards(step) {

   let arrayData = Array.from(document.querySelectorAll('.modal-list__item'));

   arrayData.slice(step).forEach(e => {
       e.style.display = 'none';
   })
   showMore(arrayData, step)
}

function showMore(arrayData, step) {
    document.querySelector('.modal-button').addEventListener('click', () => {
        arrayData.slice(step).forEach(e => {
            e.style.display = 'block'
        })
    })
}


export {drawCards}