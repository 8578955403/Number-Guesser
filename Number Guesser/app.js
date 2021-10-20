// Game Function :
//   - Player must guess a number between a min and max number
//   - Player gets a certain amount of guesses
//   - Notify player of guesses remaining
//   - Let player choose to play 


// Game value
let min=4,
    max=10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

    // UI Element
    const game=document.querySelector('#game'),
          minNum=document.querySelector('.min-num'),
          maxNum=document.querySelector('.max-num '),
          guessBtn=document.querySelector('#guess-btn'),
          guessInput=document.querySelector('#guess-input'),
          message=document.querySelector('.message');

    // Assign Ui min And max
    minNum.textContent=min;
    maxNum.textContent=max;

    // play again  event listener
    game.addEventListener('mousedown',function(e){
        if(e.target.className==='play-again'){
            window.location.reload();
        }
    });

    //Listen for guess
    guessBtn.addEventListener('click',function(){
        let guess=parseInt(guessInput.value);
        
        // validate
        if(guess===NaN || guess<min || guess>max){
            setMessage(`Please enter a number between ${min} and ${max}`,'red');
        }
        // check if won
        if(guess===winningNum){

            // game over-win
            gameOver(true,`${winningNum} is Correct ,  Congratulation !!! You Win The Game !`);
            // //Disable Input
            // guessInput.disabled=true;
            // // change border green color
            // guessInput.style.borderColor="green";
            // // set message
            // setMessage(`${winningNum} is Correct ,  Congratulation !!! You Win The Game !`,'green')

        } else{
            // wrong Number
            guessesLeft -=1;

            if(guessesLeft===0){

             // Game Over  -lost 
             gameOver(false,`Game Over  ,  You Lost . The Correct Number Was ${winningNum}`);
            //   // disable input
            //  guessInput.disabled=true;
            //  // change border green color
            //  guessInput.style.borderColor="red";
            //  // set message
            //  setMessage(`Game Over  ,  You Lost . The Correct Number Was ${winningNum}`,'red');


            }else{
                // Game Continue- answer wrong

                // change border color
                guessInput.style.borderColor='red';

                //clear input 
                guessInput.value='';

                //tell user its wrong number
                setMessage(`${guess} is not Correct, ${guessesLeft} guesses left`,'red');

            }
          

        }
    });
    // game over
    function gameOver(won,msg){
         let color;
         won===true ? color ='green':color='red';
          //Disable Input
          guessInput.disabled=true;
          // change border green color
          guessInput.style.borderColor=color;
          // set text color
          message.style.color=color;
          // set message
          setMessage(msg); 

          // play again
          guessBtn.value='Play Again';
          guessBtn.className +='play-again';
 
    }
    // get winning Number
      function getRandomNum(min,max){
           return Math.floor(Math.random()*(max-min+1)+min);

      }

    //set Message
    function setMessage(msg,color){
        message.style.color=color
        message.textContent=msg;

    }