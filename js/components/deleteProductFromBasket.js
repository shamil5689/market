function deleteProductFromBasket() {
    document.querySelectorAll('.basket-list__button').forEach(item => {
        item.addEventListener('click', () => {
            let description = item.parentElement.querySelector('.basket-list__description').textContent;
            let productArr = JSON.parse(localStorage.getItem('cards'))
            
            productArr = productArr.filter(item => item.description !== description)

            localStorage.setItem('cards', JSON.stringify(productArr))

            location.reload()
        })
    })
}


deleteProductFromBasket()