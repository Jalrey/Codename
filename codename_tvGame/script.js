'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CODENAME DESKTOP APP

/////////////////////////////////////////////////
// Data

// All Possible Words
const allWords = new Set([
  'Agent',
  'Alien',
  'Apple',
  'Armor',
  'Arrow',
  'Baby',
  'Banana',
  'Beach',
  'Bear',
  'Bird',
  'Bomb',
  'Book',
  'Boots',
  'Bottle',
  'Bridge',
  'Butterfly',
  'Cactus',
  'Cake',
  'Camera',
  'Camp',
  'Car',
  'Castle',
  'Cat',
  'Chair',
  'Cheese',
  'Chicken',
  'Chocolates',
  'Church',
  'Circle',
  'City',
  'Clown',
  'Coffee',
  'Compass',
  'Computer',
  'Cookie',
  'Cow',
  'Crown',
  'Crystal',
  'Cup',
  'Dance',
  'Deck',
  'Diamond',
  'Dinosaur',
  'Doctor',
  'Dragon',
  'Dress',
  'Duck',
  'Eagle',
  'Egg',
  'Elephant',
  'Engine',
  'Eye',
  'Fairy',
  'Farm',
  'Feather',
  'Fence',
  'Festival',
  'Film',
  'Fire',
  'Fish',
  'Flag',
  'Flower',
  'Football',
  'Forest',
  'Fountain',
  'Frog',
  'Fruit',
  'Garden',
  'Gate',
  'Ghost',
  'Giant',
  'Glasses',
  'Glove',
  'God',
  'Grass',
  'Guitar',
  'Hammer',
  'Hand',
  'Hat',
  'Hawk',
  'Heart',
  'Helicopter',
  'Helmet',
  'Horse',
  'Hospital',
  'House',
  'Ice',
  'Insect',
  'Island',
  'Jacket',
  'Jam',
  'Jet',
  'Jewelry',
  'Joker',
  'Juice',
  'Key',
  'King',
  'Kitchen',
  'Knife',
  'Knight',
  'Lamp',
  'Leaf',
  'Leather',
  'Lemon',
  'Lion',
  'Lizard',
  'Lock',
  'Magic',
  'Magnet',
  'Map',
  'Mask',
  'Medicine',
  'Microscope',
  'Milk',
  'Mist',
  'Money',
  'Monkey',
  'Moon',
  'Mountain',
  'Mouse',
  'Mouth',
  'Mushroom',
  'Music',
  'Nail',
  'Navy',
  'Needle',
  'Ninja',
  'Nose',
  'Olive',
  'Onion',
  'Orange',
  'Owl',
  'Palm',
  'Panda',
  'Paper',
  'Parachute',
  'Party',
  'Pencil',
  'Penguin',
  'Piano',
  'Pig',
  'Pilot',
  'Pirate',
  'Pizza',
  'Planet',
  'Police',
  'Pool',
  'Potato',
  'Princess',
  'Pumpkin',
  'Puppet',
  'Queen',
  'Rain',
  'Rainbow',
  'Robot',
  'Rock',
  'Rocket',
  'Roller',
  'Roof',
  'Rope',
  'Rose',
  'Sail',
  'Salsa',
  'Sand',
  'Santa',
  'School',
  'Scissors',
  'Sea',
  'Seal',
  'Shadow',
  'Ship',
  'Shoe',
  'Shop',
  'Shower',
  'Singer',
  'Skate',
  'Ski',
  'Skull',
  'Sleep',
  'Slipper',
  'Smoke',
  'Snake',
  'Snow',
  'Soap',
  'Sock',
  'Soldier',
  'Soul',
  'Space',
  'Spider',
  'Spoon',
  'Sport',
  'Spring',
  'Spy',
  'Square',
  'Star',
  'State',
  'Stone',
  'Storm',
  'Story',
  'Sun',
  'Sword',
  'Table',
  'Tail',
  'Tape',
  'Tea',
  'Teacher',
  'Telephone',
  'Telescope',
  'Thief',
  'Thumb',
  'Tiger',
  'Toilet',
  'Tooth',
  'Torch',
  'Tower',
  'Train',
  'Triangle',
  'Truck',
  'Turtle',
  'Umbrella',
  'Unicorn',
  'Vampire',
  'Van',
  'Vase',
  'Vegetable',
  'Viking',
  'Virus',
  'Volcano',
  'Vulture',
  'Wall',
  'Water',
  'Wave',
  'Web',
  'Wheel',
  'Whistle',
  'Window',
  'Wing',
  'Winter',
  'Witch',
  'Wizard',
  'Wolf',
  'Worm',
  'X-ray',
  'Yacht',
  'Yogurt',
  'Zebra',
  'Zero',
  'Zombie',
  'Philippines',
  'Britain',
  'Beijing',
  'China',
  'Canada',
  'India',
  'Australia',
  'Sydney',
  'Melbourne',
  'Brisbane',
  'Manila',
  'Japan',
  'Tokyo',
  'Spain',
  'Portugal',
  'Nepal',
  'Ireland',
]);

const nsfwWords = new Set([
  'Banana',
  'Peaches',
  'Melons',
  'Cucumber',
  'Sausage',
  'Eggplant',
  'Pickle',
  'Carrot',
  'Pineapple',
  'Zucchini',
  'Hot Dog',
  'Scissors',
  'Tubol',
  'Helicopter',
  'Missionary',
  'Cream pie',
  'Dildo',
  'Naked',
  'Finger',
  'Vibration',
  'Plug',
  'Oral',
  'Wet',
  'French',
  'Tasty',
  'Milk',
  'Nuts',
  'Hair',
  'Balls',
  'Tongue',
  'Pound',
  'Beat',
  'Hard',
  'Mother',
  'Toys',
  'Harem',
  'Anime',
  'Wood',
  'Shaft',
  'Pipe',
  'Load',
  'Bang',
  'Stroke',
  'Pump',
  'Hammer',
  'Slippery',
  'Grind',
  'Suck',
  'Moan',
  'Release',
  'Smack',
  'Massage',
  'Squirt',
  'Insert',
  'Blow',
  'Job',
  'Bone',
  'Climax',
  'Tease',
  'Tight',
  'Hole',
  'Lick',
  'Black',
  'BBC',
  'Lubricant',
  'Lotion',
  'Booking',
  'Fetish',
]);

const insideJokesWords = [
  'Bottoms Up',
  'Candy Crush',
  'Lady Gaga',
  'Glow in the Dark',
  'Sam Serhan',
  'Rain and Horne',
  'Kingsgrove',
  'Mascot',
  'Passport',
  'Cherry Picking',
  'Yoghurt',
  'Queenstown',
];

//SELECTING  Elements on the screen
const newGameButton = document.querySelector('#newGameButton');
const backGroundHeader = document.querySelector('header');
const backGroundfooter = document.querySelector('footer');
const endTurnButton = document.querySelector('#end-turn');
const startTurnButton = document.querySelector('#start-turn');
const numGuessTurn = document.querySelector('#number-input');
const inputClue = document.querySelector('#clue-input');
const turnDisplay = document.querySelector('#turn-display');
const guessesLeftDisplay = document.querySelector('#guesses-left');
const board = document.querySelector('.board');
const button = document.querySelectorAll('.button');
const redPastClues = document.querySelector('#red-past-clues');
const bluePastClues = document.querySelector('#blue-past-clues');
const redCardsLeft = document.querySelector('#red-cards-left');
const blueCardsLeft = document.querySelector('#blue-cards-left');
const spyQR = document.querySelector('#spy-qr');

const startButton = document.querySelector('#startButton');
const cancelButton = document.querySelector('#cancelButton');

//GAME SETTING
let numWords;
let nsfwPercent;
let numNSFWWords = Math.floor(numWords * nsfwPercent);
let startingWords = 8;
let team1Starting = true;
let numWordPerTeam = Math.floor(0.32 * numWords);

//Team Objects
const firstTeam = {
  color: 'blue',
  guessedWords: [],
  totalWords: team1Starting ? numWordPerTeam + 1 : numWordPerTeam,
  spyWords: new Set(),
  clues: [],
  remainingGuess: 0,
};

const secondTeam = {
  color: 'red',
  guessedWords: [],
  totalWords: team1Starting ? numWordPerTeam : numWordPerTeam + 1,
  spyWords: new Set(),
  clues: [],
  remainingGuess: 0,
};

const teams = [firstTeam, secondTeam];

let currentTeam = team1Starting ? firstTeam : secondTeam;
let otherTeam = team1Starting ? secondTeam : firstTeam;

//INITIATE THE GAME WORDS
let gameWords = new Set();
let killWord = new Set();
let drinkWord = new Set();
let gameWordsCopy = new Set();
let numdrinkWord = Math.floor(numWords / 5);
//The words array below populates the board
let words = [];

//Function to add words to the game from the 2 library of words
const addWordsToSet = function (set1, set2, num) {
  let array1 = Array.from(set1);

  //Shuffle Array
  array1.sort(() => 0.5 - Math.random());

  //Take number of words from array
  for (let i = 0; i < num; i++) {
    if (array1.length > 0) {
      let word = array1.pop();
      set2.add(word);
    } else {
      console.log('Not enough words on first array');
      break;
    }
  }
};

const resetGameState = function () {
  numWordPerTeam = Math.floor(0.32 * numWords);
  numdrinkWord = Math.floor(numWords / 5);
  gameWords.clear();
  killWord.clear();
  drinkWord.clear();
  gameWordsCopy.clear();
  teams.forEach(team => {
    team.guessedWords.length = 0;
    team.remainingGuess = 0;
    team.clues.length = 0;
    team.spyWords.clear();
  });

  secondTeam.totalWords = team1Starting ? numWordPerTeam : numWordPerTeam + 1;
  firstTeam.totalWords = team1Starting ? numWordPerTeam + 1 : numWordPerTeam;
  board.innerHTML = '';
  words.length = 0;
};

const initiateWordsToGame = function () {
  numWordPerTeam = Math.floor(0.32 * numWords);
  numdrinkWord = Math.floor(numWords / 5);
  addWordsToSet(nsfwWords, gameWords, numNSFWWords);
  addWordsToSet(allWords, gameWords, numWords - numNSFWWords);

  // Checks if the Game words matches the designated size
  while (gameWords.size !== numWords) {
    addWordsToSet(allWords, gameWords, numWords - gameWords.size);
  }

  gameWordsCopy = new Set([...gameWords]);
  //Add words to the teams
  //Adds words to  the first team
  addWordsToSet(gameWordsCopy, firstTeam.spyWords, firstTeam.totalWords);

  //Removes the added word to the gamewords copy
  firstTeam.spyWords.forEach(word => gameWordsCopy.delete(word));
  //Adds words to the second team
  addWordsToSet(gameWordsCopy, secondTeam.spyWords, secondTeam.totalWords);

  //Removes words from the second team
  secondTeam.spyWords.forEach(word => gameWordsCopy.delete(word));

  addWordsToSet(gameWordsCopy, killWord, 1);
  //Removes words from the GameWords
  killWord.forEach(word => gameWordsCopy.delete(word));

  addWordsToSet(gameWordsCopy, drinkWord, numdrinkWord);
  drinkWord.forEach(word => gameWordsCopy.delete(word));
};

console.log(gameWords);
console.log([...firstTeam.spyWords].join('\n'));
console.log(secondTeam.spyWords);
console.log(killWord);
console.log(`drinks ${drinkWord}`);

//CUSTOM FUNCTIONS
function showModal() {
  document.getElementById('myModal').style.display = 'block';
}

const backGroundColor = [backGroundHeader, backGroundfooter, ...button];
backGroundColor.forEach(element => {
  element.classList.remove('turn-red', 'turn-blue');
});

const changeColor = function (bgcolor) {
  backGroundColor.forEach(element => {
    element.classList.remove('turn-red', 'turn-blue');
    element.classList.add(`turn-${bgcolor}`);
  });
};

const enableInput = function () {
  inputClue.disabled = false;
  numGuessTurn.disabled = false;
};

const disableInput = function () {
  inputClue.disabled = true;
  numGuessTurn.disabled = true;
};

const disableCards = function () {
  const cards = document.querySelectorAll('.card');

  //DISABLE THE CARDS INITIALLY
  cards.forEach(card => {
    card.style.pointerEvents = 'none';
  });
};

const displayRemainingCards = function () {
  const secondRemainingCards =
    secondTeam.totalWords - secondTeam.guessedWords.length;

  let displayRedFlag = '';
  for (let i = 0; i <= secondRemainingCards; i++) {
    displayRedFlag += '🟥';
  }

  redCardsLeft.innerHTML = `Cards Left: ${secondRemainingCards} <br>  ${displayRedFlag}`;

  const firstRemainingCards =
    firstTeam.totalWords - firstTeam.guessedWords.length;

  let displayBlueFlag = '';
  for (let i = 0; i <= firstRemainingCards; i++) {
    displayBlueFlag += '🟦';
  }
  blueCardsLeft.innerHTML = `Cards Left: ${firstRemainingCards} <br> ${displayBlueFlag}`;
};
const enableHiddenCards = function () {
  const hiddenCards = document.querySelectorAll('.card.hidden');
  hiddenCards.forEach(card => {
    card.style.pointerEvents = 'auto';
  });
};

const generateSpyText = function () {
  const blue = [...firstTeam.spyWords].join(', ');
  const red = [...secondTeam.spyWords].join(', ');
  const kill = [...killWord].join(', ');
  const drink = [...drinkWord].join(', ');
  return `Blue team: ${blue}\nRed team: ${red}\nKill word: ${kill}\nDrink words: ${drink}`;
};

let spyQRGenerator;

const generateSpyQR = function () {
  const text = generateSpyText();
  spyQRGenerator = new QRious({
    element: spyQR,
    value: text,
    size: 200,
  });
};

const endTheTurn = function () {
  enableInput();
  numGuessTurn.value = '';
  inputClue.value = '';

  if (currentTeam === firstTeam) {
    currentTeam = secondTeam;
    otherTeam = firstTeam;
  } else {
    currentTeam = firstTeam;
    otherTeam = secondTeam;
  }
  changeColor(currentTeam.color);
  turnDisplay.innerHTML = `${currentTeam.color.toUpperCase()} team's turn`;
  guessesLeftDisplay.innerHTML = '';
  disableCards();
  bluePastClues.innerHTML = `Past Clues: <br> ${firstTeam.clues.join('<br> ')}`;
  redPastClues.innerHTML = `Past Clues: <br>  ${secondTeam.clues.join('<br>')}`;
};

const selectCard = function (card) {
  card.classList.add('revealed');
  card.classList.remove('hidden');

  if (killWord.has(card.dataset.word)) {
    alert('YOU LOSE!');
  } else if (otherTeam.spyWords.has(card.dataset.word)) {
    alert('Haha Noob shit word ng ibang team yun');
    otherTeam.guessedWords.push(card.dataset.word);
    endTheTurn();
  } else if (gameWordsCopy.has(card.dataset.word)) {
    endTheTurn();
    alert('Nope, pero neutral word lang naman');
  } else if (drinkWord.has(card.dataset.word)) {
    card.classList.add('shot');
    alert("BOTOM'S UP 🍺");
  } else if (currentTeam.spyWords.has(card.dataset.word)) {
    currentTeam.remainingGuess -= 1;
    currentTeam.guessedWords.push(card.dataset.word);
    guessesLeftDisplay.innerHTML = `Guesses left: ${currentTeam.remainingGuess}`;
    if (currentTeam.remainingGuess <= 0) {
      endTheTurn();
    }
  }
  displayRemainingCards();
};

//Close Modal
document.getElementById('closeButton').addEventListener('click', function () {
  document.getElementById('myModal').style.display = 'none';
});

//Add the boards
newGameButton.addEventListener('click', function () {
  //Selects the board and clears them
  showModal();
});

//EVENT HANDLER FOR START BUTTON
startButton.addEventListener('click', function () {
  bluePastClues.innerHTML = `Past Clues:`;
  redPastClues.innerHTML = `Past Clues:`;
  let sliderValue = document.getElementById('greenPercentage').value;
  let numWordsValue = document.getElementById('numWords').value;
  numWords = Number(numWordsValue);
  nsfwPercent = Number(sliderValue) / 100;
  numNSFWWords = Math.floor(numWords * nsfwPercent);
  // Get the value from the radio buttons
  var radios = document.getElementsByName('team');
  var selectedTeam = null; // default value in case neither is selected

  gameWords.clear();
  killWord.clear();
  gameWordsCopy.clear();
  drinkWord.clear();

  for (var i = 0; i < radios.length; i++) {
    console.log('Radio ' + i + ' is checked: ' + radios[i].checked);
    if (radios[i].checked) {
      selectedTeam = radios[i].value;
      break;
    }
  }
  console.log(numWords);

  if (selectedTeam === 'red') {
    team1Starting = false;
    currentTeam = secondTeam;
    otherTeam = firstTeam;
  } else {
    team1Starting = true;
    currentTeam = firstTeam;
    otherTeam = secondTeam;
  }

  resetGameState();

  document.getElementById('myModal').style.display = 'none';

  initiateWordsToGame();

  words = [];

  firstTeam.spyWords.forEach(function (spyword) {
    words.push({ word: spyword, team: 'blue' });
  });

  secondTeam.spyWords.forEach(function (spyword) {
    words.push({ word: spyword, team: 'red' });
  });

  killWord.forEach(function (spyword) {
    words.push({ word: spyword, team: 'black' });
  });

  drinkWord.forEach(function (spyword) {
    words.push({ word: spyword, team: 'neutral' });
  });

  gameWordsCopy.forEach(function (spyword) {
    words.push({ word: spyword, team: 'neutral' });
  });

  //SHUFFLES THE ARRAY

  words.sort(() => 0.5 - Math.random());

  //CREATES THE CARDS ON THE BOARD

  function createCard(word, team) {
    const card = document.createElement('div');
    card.className = `card ${team} hidden`;
    card.setAttribute('data-word', word);
    card.innerText = word.toUpperCase();
    card.addEventListener('click', function () {
      selectCard(card);
    });
    return card;
  }

  words.forEach(({ word, team }) => {
    const card = createCard(word, team);
    board.appendChild(card);
  });

  changeColor(currentTeam.color);
  turnDisplay.innerText = `${currentTeam.color.toUpperCase()} Team's Turn`;

  guessesLeftDisplay.innerText = '';
  enableInput();
  const cards = document.querySelectorAll('.card');

  //DISABLE THE CARDS INITIALLY
  cards.forEach(card => {
    card.style.pointerEvents = 'none';
  });

  displayRemainingCards();

  //Display the END Turn button and show QR code for spies

  spyQR.classList.remove('invisible-button');
  generateSpyQR();
  endTurnButton.classList.remove('invisible-button');
});
//EVENT HANDLER FOR START TURN
startTurnButton.addEventListener('click', function () {
  if (
    inputClue.value === '' ||
    numGuessTurn.value === '' ||
    numGuessTurn.value < 1
  ) {
    prompt('Huy magbigay ka naman ng clue sa team mates mo');
  } else {
    disableInput();
    currentTeam.remainingGuess = Number(numGuessTurn.value) + 1;
    currentTeam.clues.push(inputClue.value);
    enableHiddenCards();

    guessesLeftDisplay.innerText = `Number of Guesses Left: ${currentTeam.remainingGuess}`;
  }
});

//EVENT HANDLER FOR ENDTURN

endTurnButton.addEventListener('click', function () {
  endTheTurn();
});

//Close the spies modal

function closeSpyModal() {
  document.getElementById('spyModal').style.display = 'none';
}

// Save a screenshot
// function downloadModalScreenshot() {
//   var modal = document.getElementById('spyModal'); // Replace 'yourModalId' with the ID of your modal

//   if (modal) {
//     // Temporarily display the modal
//     modal.style.display = 'block';

//     // Take screenshot
//     html2canvas(modal, { logging: true, useCORS: true })
//       .then(function (canvas) {
//         // Hide the modal again
//         modal.style.display = 'none';

//         // Download the screenshot
//         var link = document.createElement('a');
//         link.download = 'CodeName_Cheatsheet.png';
//         link.href = canvas.toDataURL();
//         document.body.appendChild(link); // Required for Firefox
//         link.click();
//         document.body.removeChild(link);
//       })
//       .catch(function (error) {
//         console.error('Error capturing canvas:', error);
//       });
//   } else {
//     console.error('Modal element not found');
//   }
// }

// Close the spies modal
// function closeSpyModal() {
//   document.getElementById('spyModal').style.display = 'none';
// }

// Save a screenshot
function downloadModalScreenshot() {
  var modal = document.getElementById('spyModal'); // Replace 'yourModalId' with the ID of your modal

  if (modal) {
    // Temporarily display the modal
    modal.style.display = 'block';

    // Resize the cards to fit the available space
    var cards = modal.querySelectorAll('.card-spy');
    var cardCount = cards.length;
    var cardWidth = 100;
    var cardHeight = 100;

    // Adjust the card size based on the available space
    var availableWidth = modal.clientWidth;
    var availableHeight = modal.clientHeight;

    var maxCardWidth = Math.floor(
      availableWidth / Math.ceil(Math.sqrt(cardCount))
    );
    var maxCardHeight = Math.floor(
      availableHeight / Math.ceil(Math.sqrt(cardCount))
    );

    cardWidth = Math.min(cardWidth, maxCardWidth);
    cardHeight = Math.min(cardHeight, maxCardHeight);

    cards.forEach(function (card) {
      card.style.width = cardWidth + 'px';
      card.style.height = cardHeight + 'px';
    });

    // Take screenshot
    html2canvas(modal, { logging: true, useCORS: true })
      .then(function (canvas) {
        // Hide the modal again
        modal.style.display = 'none';

        // Download the screenshot
        var link = document.createElement('a');
        link.download = 'CodeName_Cheatsheet.png';
        link.href = canvas.toDataURL();
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
        console.error('Error capturing canvas:', error);
      });
  } else {
    console.error('Modal element not found');
  }
}
