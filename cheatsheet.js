window.addEventListener('DOMContentLoaded', () => {
  const spyBoard = document.querySelector('.spy-board');
  if (!spyBoard || !window.opener) return;

  const words = window.opener.words || [];
  const drinkWord = window.opener.drinkWord || new Set();

  function createCard(word, team) {
    const card = document.createElement('div');
    card.className = `card-spy ${team}`;
    card.setAttribute('data-word', word);
    card.innerText = word.toUpperCase();
    if (typeof drinkWord.has === 'function' && drinkWord.has(word)) {
      card.classList.add('shot');
    }
    return card;
  }

  words.forEach(({ word, team }) => {
    const card = createCard(word, team);
    spyBoard.appendChild(card);
  });
});
