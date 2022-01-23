import { numberOfCard } from "./numberOfCard.js";

function showProductCard(arr) {

    arr.forEach(item => {
        document.querySelector('.basket-list').innerHTML += `
        <li class="basket-list__item">
        <div class="basket-list__wrapper">
        <img src="${item.img}" alt="" class="basket-list__img">
        </div>
        <h3 class="basket-list__description">${item.description}</h3>
        <strong class="basket-list__price">${item.price}</strong>
        <button class="btn basket-list__button open-popup-link">удалить</button>
    </li>
        `
    });
    numberOfCard(arr)
}
showProductCard(JSON.parse(localStorage.getItem('cards')))