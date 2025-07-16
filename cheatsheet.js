// Script for spies cheat sheet page
window.addEventListener('DOMContentLoaded', function () {
  var openerWindow = window.opener;
  if (!openerWindow || !openerWindow.words) return;

  var words = openerWindow.words;
  var drinkWord = openerWindow.drinkWord || new Set();

  var spyBoard = document.querySelector('.spy-board');

  function createCard(word, team) {
    var card = document.createElement('div');
    card.className = 'card-spy ' + team;
    card.setAttribute('data-word', word);
    card.innerText = word.toUpperCase();
    if (drinkWord.has(word)) {
      card.classList.add('shot');
    }
    return card;
  }

  words.forEach(function (item) {
    var card = createCard(item.word, item.team);
    spyBoard.appendChild(card);
  });
});

// Screenshot of the cheat sheet
var downloadBtn = document.getElementById('download-button');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function () {
    var board = document.querySelector('.spy-board');
    html2canvas(board, { logging: true, useCORS: true }).then(function (canvas) {
      var link = document.createElement('a');
      link.download = 'CodeName_Cheatsheet.png';
      link.href = canvas.toDataURL();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}
