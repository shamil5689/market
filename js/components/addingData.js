import { postData } from "../services/postData.js";
import { showSuccessfulMessage, showFillingMessage } from "./modal.js";


function addingData() {
    document.querySelector('.form__button').addEventListener('click', () => {
        let img = document.querySelector('.form__img').value;
        let description = document.querySelector('.form__description').value;
        let price = document.querySelector('.form__price').value;
        let currency = document.querySelector('.form__currency').value;
        let sex = document.querySelector('.form__sex').value

        let cards = {
            'img' : img,
            'description': description,
            'price': price,
            'currency': currency,
            'sex': sex
        }
        if (img, description, price, currency, sex == '') {
            showFillingMessage()
            return false
        }
        postData('https://the-loop-ee8d2-default-rtdb.firebaseio.com/clothes.json', JSON.stringify(cards))
        showSuccessfulMessage()  
        clearFormAfterSubmitting()

    })
}
addingData()


function clearFormAfterSubmitting () {
    document.querySelectorAll('.form__input').forEach(item => {
        item.value = '';
    })
}