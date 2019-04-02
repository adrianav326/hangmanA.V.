//GLOBAL VARIABLES (accessible by all functions)
//--------------------------------------------------------------------------------

//Array of Word Options (all lowercase)
var wordsList = ["mary poppins", "avengers", "justice league"]

//Solutions will be held here
var chosenWord = "";

//This will break the solution into individual lettersto be started in an array
var lettersInChosenWord = [];

//This will be the number of blanks we show based on the solution
var numBlanks = 0;

//Holds a mix of blank and solved letters (ex: a_ple)
var blanksAndSuccesses = [];

//Holdsall of the wrong guesses
var wrongGuesses = [];

//Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


//FUNCTIONS
//---------------------------------------------------------

//Note: The startGame() function is not being run here. It's just being
//      made for future use.
function startGame(){
    //Resets the guesses back to specified amount
    numGuesses = 9;

    //Solution is chosen randomly from wordList
    chosenWord = wordsList[Math.floor()(Math.random() * wordsList.length)];

    //The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    //We count the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    //We print the solution in console (for testing)
    console.log(chosenWord);

    //CRITICAL LINE - Here we reset the guess and success array at each round
    blanksAndSuccesses = [];
    //CRITICAL LINE - Here we reset the wrong guesses from the previous round 
    wrongGuesses = [];

    //Fill up the blanksAndSuccesses list with appropriate number of blanks, which 
    //is based on the number of letters in the solution 
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_";)
    }
    
    //Print the initial blanks in the console
    console.log(blanksAndSuccesses);

    //Reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;

    //Prints the blanks at the beginning of each round in the HTML 
    document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ")
    
}

//It's where we'll do all of the comparisons for watches 
function checkLetter(letter) {

    //This boolean will be toggled based on whether or not a user letter is found in the word
    var letterInWord = false;

    //Check if the letter exists inside the array at all 
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {

            //If the letter exists then toggle this boolean to true. This will be used in the next step
            letterInWord = true;
        }
    }


    //If the letter exists somewhere in the word, then figure out exactly where (which indices)
    if (letterInWord) {

        //Loop through the word
        for (var j = 0; j < numBlanks; j++) {

            //Populate the blanksAndSuccesses with every instance of the letter 
            if (chosenWord[j === letter) {

                //Here we set the specific space in blanks and letter equal to the letter when it matches 
                blanksAndSuccesses[j] = letter;
            }
        }

        //Logging for the testing
        console.log(blanksAndSuccesses);
    }
    //If the letter doesn't exist at all...
    else {

        //...then we add the letter to the list of wrong letters; and we subtractone of the guesses
        wrongGuesses.push(letter);
        numGuesses--;
    }
}

//Here we will have all of the code that will need to be run after each guess is made
function roundComplete() {

    //First, log an initial status update in the console telling us how many wins, losses, and guesses are 
    console.log(`WinCount: ${winCounter} | LossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);

    //Update the HTML to reflect the number of guesses. Also update the correct guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    //This will print the array of guesses and blanks onto the page
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    //This will print the wrong guesses onto the page
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //If we have gotten all the letters to match the solution...
    if (letterInChosenWord.toString() === blanksAndSuccesses.toString()) {

        //...add to the win counter and give the useran alert
    }


}