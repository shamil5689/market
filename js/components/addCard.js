import { closeMyModal, showModalProducts } from "./modal.js";


function addCard(button, img, description, price) {
    document.querySelectorAll(button).forEach(item => {
        item.addEventListener('click', () => {
            let temp = []
            let object = {
                'img' : item.parentElement.querySelector(img).src,
                'description' : item.parentElement.querySelector(description).textContent,
                'price' : item.parentElement.querySelector(price).textContent,
            }
            if (localStorage.getItem('cards')){
                temp = JSON.parse(localStorage.getItem('cards'))
            }

            temp = temp.filter(item => item.description !== object.description)

            temp.push(object)

            localStorage.setItem('cards', JSON.stringify(temp))
            showModalProducts()
        })
    })
    closeMyModal('.my-modal__close-button', '.my-modal')
}


export {addCard}
