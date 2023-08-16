'use strict';
let number = document.querySelector('.number')
let again = document.querySelector('.again');
let check = document.querySelector('.check');
let guess = document.querySelector('.guess');
let body = document.querySelector('body');
let highscore = document.querySelector('.highscore').textContent;
let score = document.querySelector('.score').textContent;

function message(message) {
    document.querySelector('.message').textContent = message;
}

let hiddenNum = Math.trunc(Math.random() * 20) + 1;
console.log(hiddenNum);

    
score = 20;
highscore = 0;

check.addEventListener( 'click', function(){
    let value = Number(guess.value)

    if (value === hiddenNum) {
        message("🏆 YOu are correct 🥇🥇🥇");
        body.style.backgroundColor = 'green';
        number.textContent = hiddenNum;
        check.disabled = true;
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if (value === 0){
         message( "no input");
        body.style.backgroundColor = 'red';
        number.innerHTML = "?";

    }else if (value !== hiddenNum) {
            if(score > 1){
                message( value < hiddenNum ? '😡Too Low' : '😡Too High');
                body.style.backgroundColor =  'palevioletred';
                score--;
              document.querySelector('.score').textContent = score;
            //   document.querySelector('.message').style.transition = '3s'

            }else{
                message("GAME OVER 😂😂🤣🤣🤣🤣");
            }
            
        }
    })
        

again.addEventListener( 'click', function() {
    score = 20
    number.textContent = "?";
    guess.value = ""; 
    message("Start guessing...");
    body.style.backgroundColor = '#222';    
    document.querySelector('.score').textContent = score;
    // location.reload(true);
     hiddenNum = Math.trunc(Math.random() * 20) + 1;
     console.log(hiddenNum);
     check.disabled = false;

})