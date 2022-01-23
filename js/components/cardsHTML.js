
function cardsHTML(elementClass, item, i, wrapper, img, description, price, button) {
    document.querySelector(elementClass).innerHTML += `
    <li class="${i}">
    <div class="${wrapper}">
    <img src="${item.img}" alt="" class="${img}">
    </div>
    <h3 class="${description}">${item.description}</h3>
    <strong class="${price}">${item.price} ${item.currency}</strong>
    <button class="btn ${button} open-popup-link">В корзину</button>
</li>
    `   
}

export {cardsHTML}
