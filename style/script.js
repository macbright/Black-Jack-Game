let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

hitButton.style.display = 'none';
stayButton.style.display = 'none';


newGameButton.addEventListener('click', function() {
    textArea.innerText = 'Started......';
    newGameButton.style.display = 'none';
    hitButton.style.display = 'block';
    stayButton.style.display = 'block';
});