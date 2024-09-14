let points = 0;
let words = [
    "tree", 
    "planet", 
    "flower",
    "truth",
    "charm",
    "morale",
    "minister",
    "talk",
    "flavor",
    "role",
    "finish",
    "criminal",
    "consciousness",
    "convention",
    "minority",
    "cause",
    "thinker",
    "sale",
    "paradox",
    "patent",
    "incident",
    "enemy",
    "mine"
];

let usedWords = [];


function getRandomWord() {
    if (words.length === usedWords.length) {
        alert("All words have been used.");
        return null; 
    } else {
        let availableWords = words.filter(word => !usedWords.includes(word));
        let randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
        usedWords.push(randomWord);
        return randomWord;
    }
}

function shuffleWord(word) {
    let shuffled;
    do {
        shuffled = word.split('').sort(() => Math.random() - 0.5).join('');
    } while (shuffled === word); 
    return shuffled;
}


function displayWord(shuffledWord, originalWord) {
    let scrambledWordContainer = document.getElementById('scrambledWordContainer');
    scrambledWordContainer.innerHTML = `
        <p>${shuffledWord}</p>
        <input type="text" id="userGuess" placeholder="Type your guess here">
        <button type="button" onClick="compare('${originalWord}')" id="submit">Submit</button>
        <button type="button" id="giveUp">Give Up</button>
        <p id="result"></p>
        <p id="end"></p>
        <p id="points">Points = ${points}</p>
    `;
    document.getElementById('startButton').style.display = 'none';

    document.getElementById('giveUp').addEventListener('click', () => {
        let scrambledWordContainer = document.getElementById('scrambledWordContainer');
        scrambledWordContainer.innerHTML = `
            <p>Correct Answer: ${originalWord}</p>
            <button type="button" id="nextWord">Next Word</button>
        `;
        
        document.getElementById('nextWord').addEventListener('click', () => {
            let newRandomWord = getRandomWord();
            if (newRandomWord) {
                let newShuffledWord = shuffleWord(newRandomWord);
                displayWord(newShuffledWord, newRandomWord);
            }
        });
    });
}

document.getElementById('startButton').addEventListener('click', (event) => {
    event.preventDefault();
    let randomWord = getRandomWord();
    if (!randomWord) return;
    let shuffledWord = shuffleWord(randomWord);
    displayWord(shuffledWord, randomWord);
});


function compare(originalWord) {
    let userGuess = document.getElementById('userGuess').value;
    if (userGuess === originalWord) {
        points++;
        document.getElementById('points').textContent = `Points = ${points}`;
        let newRandomWord = getRandomWord();
        if (newRandomWord) {
            let newShuffledWord = shuffleWord(newRandomWord);
            displayWord(newShuffledWord, newRandomWord);
        }
    } else {
        document.getElementById('result').textContent = 'Incorrect. Try again.';
    }
}
