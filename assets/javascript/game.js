// 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, 
// and the user has to guess which letter the app chose. Put the following text on your page: However, the text will be 
// updated via the script. The actual code goes on the HTML?
var remainingTurns = 7;
document.getElementById("remainingTurns").innerHTML = remainingTurns;
var losses = 0;
document.getElementById("losses").innerHTML = losses;
var wins = 0;
document.getElementById("wins").innerHTML = wins;
var failedAttempt = [];
document.getElementById("failedAttempt").innerHTML = failedAttempt;

var gameStarted = false;
var userGuess;
var golden = 

document.onkeyup = function(e) {
    if (e.key === "Control" && !gameStarted) {
        gameStarted = true;
        console.log("Started game.");
        remainingTurns = 7;
        failedAttempt = [];  
        function compTurn(){
            return psychicChoices[Math.floor(Math.random() * psychicChoices.length)
            ]};
        golden = compTurn();
        console.log(golden)
    }
    if (gameStarted) {
        userGuess = e.key.toLowerCase;
        if (userGuess === golden) {
            alert("You guessed my letter! Shall we play again? (press 'cntrl')");
            gameStarted = false;
            console.log("Round over: User won");
            wins++;
        }
        if (userGuess !== golden) {
            if (remainingTurns >1){
                remainingTurns--;
                failedAttempt.push (e.key);
                console.log(e.key);
                alert("Sorry, but that guess is incorrect. Please try again")
            }
            else {
                remainingTurns--;
                failedAttempt.push (e.key);
                console.log(e.key);
                losses++;
                gameStarted = false;
                alert("You have failed to guess my letter in your alloted turns. The correct letter was " + golden + ". Press 'cntrl' to play again.");
            }

        }

    }
    else {
        alert("Press control to start guessing.");
        }
        }
    

// var stroke = document.getElementById()
// <text>. Guess what letter I'm thinking of
var psychicChoices = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

    // document.onkeydown = function(start) {
    //    document.addEvent 
    //     if(start){
        //         var key = window.event
        //     }
    
// <text>. Wins: (# of times the user has guessed the letter correctly)

// <text>. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// <text>. Guesses Left: (# of guesses left. This will update)

// <text>. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// Research a function similar to Math.random that uses the alphabet instead. Otherwise you may need an array consisting of


// all letters in the alphabet. One plus to this would be the further random factor to the letter choice should you follow a 
// keyboard layout rather than in a-order/. 

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// assume a loop function here with conditions for continuation and cessation.


// set guesses for user.

// I think my .onKeyUp goes here to start listening for guesses.


// ***I want the game to officially end once a player has lost three rounds in a row.


// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like 
// when the user wins).

// Part of the same loop as a condition of the if then statement? Will need an extra value in my code and 
// in my loop that will watch for 'consecutive losses' and end the game on the thrid back to back loss.

//Close the game out once it is over with some of the computer remarks from the movie.

// If you have time employee the typewriter effect during the game to simulate Joshua from War Games 
// and put some easter egg sound bytes in. Game will only stop looping if the player meets the 'game over' conditions or 
// simply quits by leaving. Otherwise they could go on forever. Infitesimally likely.. but still.

// Why do I have the feeling I am missing something????
// ..Oh yeah.. forgotten factor #1 - Non-alphabet keystrokes count against the player. Try to find a solution or 
// at the very least give them a warning somewhere in the intro.
