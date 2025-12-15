const hpIcons = [
    '⚡',
    '🦉',
    '🦁', 
    '🐍', 
    '🎓', 
    '🧪', 
    '🔮', 
    '⚯'
];

let cardsArray = [];

let flippedCards = [];

let lockBoard = false;

let matchFound = 0;

let attempts = 0;

let body;
let gameBoard;
let attemptsSpan;
let matchesSpan;
let restartButton;
let winnerMessage;
let finalAttemptsSpan;

window.onload = function() {

    body = document.querySelector('body');
    gameBoard = document.querySelector('#game-board');
    attemptsSpan = document.querySelector('#attempts');
    matchesSpan = document.querySelector('#matches');
    restartButton = document.querySelector('#restart-button');
    winnerMessage = document.querySelector('#winner-message');
    finalAttemptsSpan = document.querySelector('#final-attempts');

createThemeToggleButton();

restartButton.addEventListener('click', startGame);

startGame();

        
};

function startGame() {
    // 1. Resetar o estado do jogo
    matchesFound = 0;
    attempts = 0;
    flippedCards = [];
    lockBoard = false;
    gameBoard.innerHTML = '';
    winnerMessage.classList.add('hidden');
    updateScoreBoard();

    cardsArray = [...hpIcons, ...hpIcons];

    shuffleCards(cardsArray);

    createCards(cardsArray);

}

function shuffleCards(array) {


    array.sort(() => Math.random() - 0.5);
}

function createCards(array) {


    array.forEach((icon, index) => {
       
        const card = document.createElement('div');
        card.classList.add('card');
       
        card.dataset.icon = icon; 
        
       
        card.innerHTML = `
            <div class="card-face card-front">${icon}</div>
            <div class="card-face card-back"></div>
        `;

       
        card.addEventListener('click', flipCard);
        
        
        gameBoard.appendChild(card);
    });


}

function flipCard() {

    if (lockBoard || this.classList.contains('flip') || this.classList.contains('matched')) {
        return;
    }
    
    this.classList.add('flip');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
       
        lockBoard = true;
        
       
        attempts++;
        updateScoreBoard();
        
       
        checkMatch();
    }


}

function checkMatch() {

const [card1, card2] = flippedCards;

if (card1.dataset.icon === card2.dataset.icon){


handleMatch();


}else {

    handleMismatch();

}


 }

 function handleMatch() {
    const [card1, card2] = flippedCards;

    
    card1.classList.add('matched');
    card2.classList.add('matched');
    
    
    matchesFound++;
    updateScoreBoard();
    
    
    resetBoard(); 
    
    
    if (matchesFound === hpIcons.length) {
        endGame();
    }
}

function handleMismatch() {
    
    lockBoard = true; 
    
    
    setTimeout(() => {
        const [card1, card2] = flippedCards;
        
        
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        
        
        resetBoard();
    }, 1000); 
}

function resetBoard(){

    [flippedCards, lockBoard] = [[], false];
 
}

function updateScoreBoard() {
    attemptsSpan.textContent = attempts;
    matchesSpan.textContent = matchesFound;
}

function endGame() {
    
    winnerMessage.classList.remove('hidden');
    finalAttemptsSpan.textContent = attempts;
    
   
    document.querySelectorAll('.card').forEach(card => {
        card.removeEventListener('click', flipCard);
    });
}


function createThemeToggleButton() {
    const statusDiv = document.querySelector('.status-bar');
    if (!statusDiv) return;

    const themeButton = document.createElement('button');
    themeButton.id = 'toggle-theme-button';
    themeButton.textContent = '🌞 Modo Dia';
    themeButton.addEventListener('click', toggleTheme);
    
   
    statusDiv.appendChild(themeButton);
}

function toggleTheme() {
    
    body.classList.toggle('light-theme'); 
    
    const themeButton = document.querySelector('#toggle-theme-button');
    if (!themeButton) return;

   
    if (body.classList.contains('light-theme')) {
        themeButton.textContent = '🌙 Modo Noite';
    } else {
        themeButton.textContent = '🌞 Modo Dia';
    }
}



