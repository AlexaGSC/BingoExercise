const TOTALBOLAS = 90;
const dom = {
    divBingo: document.querySelector('.bingo'),
    button: document.querySelector('button')
}
​
const createCard = (items = 15) => {
  const bolas = _.shuffle(_.range(1, TOTALBOLAS + 1));  // Generamos 90 bolas y las desordenamos
  return bolas.splice(0, items); // Elegimos 15 números al azar
}
​
const showCard = (element, card) => {
  const divCard = document.querySelector(element);
  divCard.innerHTML = '';
  for (let i = 0; i < card.length; i++)
    divCard.innerHTML += `<div class="number number${card[i]}">${card[i]}</div>`;
}
​
// Bingo, player and CPU
const bolas = _.shuffle(_.range(1, TOTALBOLAS + 1));
const playerCard = createCard();
showCard('.player_card', playerCard);
const cpuCard = createCard();
showCard('.cpu_card', cpuCard);
​
const newNumber = () => { 
  const newBola = bolas.pop();
  dom.divBingo.textContent = newBola;
  
  const findBola = document.querySelectorAll('.number' + newBola);
  for (let i = 0; i < findBola.length; i++) {
    findBola[i].classList.add('strike');
    _.pull(playerCard, newBola);
    _.pull(cpuCard, newBola);
  }  
  checkWinner();
}
​
const checkWinner = () => {
  if (playerCard.length == 0) {
    alert('¡Has ganado!');
    document.querySelector('button').remove();
  }
  if (cpuCard.length == 0) {
    alert('¡Has perdido!');
    document.querySelector('button').remove();
  }  
}
​
dom.button.addEventListener('click', newNumber);
