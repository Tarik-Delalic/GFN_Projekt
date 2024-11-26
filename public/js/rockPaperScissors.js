const enemyImage = document.getElementById('enemyImage');
const rps = document.getElementsByClassName('rps');
const myScore = document.getElementById('myScore');
const enemyScore = document.getElementById('enemyScore');
let myS = 0;
let enS = 0;
let mySign = '';
let enemySign = '';

const updateScore = () => {
    myScore.innerText = myS;
    enemyScore.innerText = enS;
}
const displayResult = (message) => {
    result.innerText = message;
}
const randomize = (value) => {

    enemyScore.innerText = enS;

    mySign = value;
    const randomNumber = (Math.random() * 10);

    if (randomNumber < 4) {
        enemySign = 'rock';
    } else if (randomNumber < 7) {
        enemySign = 'paper';
    } else {
        enemySign = 'scissors';
    }


    console.log(mySign);
    console.log(enemySign);
    enemyImage.src = `assets/${enemySign}.png`;

    if (enemySign === mySign) {


       
       
        displayResult("It's a Draw!!!")
        return;
    }
    if(
        (mySign === 'scissors' && enemySign === 'paper') || 
        (mySign === 'paper' && enemySign === 'rock') || 
        (mySign === 'rock' && enemySign === 'scissors') 
    ){
        myS++;
        displayResult("You have won!!!")
    }else {
        enS++;
        displayResult("Enemy wins!!!")
    }

    updateScore();

}

for (i = 0; i < rps.length; i++) {
    rps[i].addEventListener('click', function () {
        randomize(this.dataset.value);
    })
}
