import { drawCards } from './components/drawCards.js';
import { openMenu } from './components/modal.js';
import { numberOfCard } from './components/numberOfCard.js';


drawCards();
numberOfCard(JSON.parse(localStorage.getItem('cards')))
openMenu();

