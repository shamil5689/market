function showSuccessfulMessage() {
        alert('Вы успшено отправили данные')
}

function addedMessage() {
        alert('уже добавлено')
}

function openMenu() {
 document.querySelector('.burger').addEventListener('click', () => {
         document.querySelector('#menu').classList.toggle('is-active') 
 })
}

function showModalProducts() {
            document.querySelector('.my-modal').classList.remove('hidden')
            document.querySelector('.my-modal').classList.add('show')
}
function closeMyModal(ElementClassButton, ElementClass) {
 document.querySelector(ElementClassButton).addEventListener('click', () => {
        document.querySelector(ElementClass).classList.remove('show')
        document.querySelector(ElementClass).classList.add('hidden')
        location.reload()
        })
}
function showFillingMessage() {
        alert('Пожалуйста, заполните поля')
}

export {showSuccessfulMessage, openMenu, showModalProducts, closeMyModal, showFillingMessage, addedMessage};