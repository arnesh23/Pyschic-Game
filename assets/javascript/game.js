// Array to store letters for all ten rounds
var letters = ['a','e','z','k','m','s','t','q','i','j']
var count = 0;

var wins = 0;
var loss = 0;
var guessLeft = 10;
var guessSoFar = []

wordGame();

function wordGame(){

  

    document.addEventListener('keydown', function (event) {
        key = letters[count];
        console.log("looking for key: " + key)
        gameLogic(event.key, key)
   // wordGame();
    })
   
    }



function gameLogic(guess, guesskey){
            if(guess === guesskey)
            {
                
                wins++;
                guessLeft = 0;
                guessSoFar.push(guess);

                document.getElementById('wins').innerHTML = 'Wins: '+wins;
                document.getElementById('guessSoFar').innerHTML = 'Your Guess so far:';
                document.getElementById('guessLeft').innerHTML = 'Guess Left: 0';

                count++;
                guessLeft = 10;
                guessSoFar = [];
            
                
            }
            else { 
                guessLeft = guessLeft - 1;
                guessSoFar.push(guess)    
                
                document.getElementById('guessLeft').innerHTML = 'Guess Left: '+guessLeft;
                document.getElementById('guessSoFar').innerHTML = 'Your Guess so far: '+guessSoFar; 

                if(guessLeft === 0)
                {
                    loss++;
                    document.getElementById('losses').innerHTML = 'Losses: '+loss;
                    count++;
                    guessLeft = 10;
                    guessSoFar = [];
                }
        }  
      
        }