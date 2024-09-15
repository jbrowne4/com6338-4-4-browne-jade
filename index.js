var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];

// display game from HTML
var wordToGuessEl = document.getElementById('word-to-guess')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')
var previousWordEl = document.getElementById('previous-word')
var answer = words[Math.floor(Math.random() * words.length)]
var incorrectLetters = document.getElementById('incorrect-letters')
var guesses = 10
var wins = 0
var losses = 0
var lastLetters = answer.length
var correct = false
var valid = []
var invalid = []


remainingGuessesEl.textContent = guesses
var wordPlayed = answer.split('')
wordToGuessEl.textContent = "" //word as underscores

//fill underscore for each letter
for (i=0; i < answer.length; i++){
  wordPlayed[i] = '_'
}

var board = wordPlayed.join("")
console.log(answer) //log correct word
wordToGuessEl.textContent = board

document.body.onkeyup = function(e){
  var key = e.key.toLowerCase() //pressed key
 
  //check if key was pressed already in session
  if (invalid.includes(key) == false && valid.includes(key) == false) {
    for(i=0; i < answer.length; i++){
      if (answer[i] == key){
       correct = true //mark correct
       lastLetters-- //decrease remaining letters
       valid.push(key)
       wordPlayed[i] = key
    }
  }

  //if guessed correct
  if(correct == true){
    board = wordPlayed.join("")
    wordToGuessEl.textContent = board
  
    //check if all letters were guessed
  if(lastLetters == 0){
    wins++ //add a win point
    winsEl.textContent = wins
    previousWordEl.textContent = answer
    wordToGuessEl.textContent = "" //new word
    answer = words[Math.floor(Math.random() * words.length)]
    wordPlayed = answer.split('')
    
    for(i=0; i < answer.length; i++){
      wordToGuessEl.textContent = wordToGuessEl.textContent + "_"
      wordPlayed[i]='_'
    }
     
    //game variables
    guesses = 10
      remainingGuessesEl.textContent = guesses
      board = wordPlayed.join("")
      console.log(answer)
      wordToGuessEl.textContent = board
      invalid = [] //clear invalid guesses
      valid = [] //clear valid guesses
      lastLetters = answer.length
      incorrectLetters.textContent = "" //clear incorrect letter spots
      }
    } else {
      //if guessed incorrect
      guesses-- //decrease guess point
      remainingGuessesEl.textContent = guesses
      invalid.push(key)
      incorrectLetters.textContent = invalid
      
      //if ran out of guesses
    if (guesses == 0) {
        losses++ //add a loss point
        lossesEl.textContent = losses
        previousWordEl.textContent = answer
        wordToGuessEl.textContent = ""
        answer = words[Math.floor(Math.random() * words.length)]
        wordPlayed = answer.split ('')
        
        //underscores for a new word
        for(i=0; i < answer.length; i++){
          wordToGuessEl.textContent = wordToGuessEl.textContent + "_"
          wordPlayed[i] = '_'
        }

        guesses = 10
        remainingGuessesEl.textContent = guesses
        board = wordPlayed.join("") //update score
        console.log(answer)
        wordToGuessEl.textContent = board
        invalid = []
        valid = []
        lastLetters = answer.length
        incorrectLetters.textContent = ""
      }
    }
      var correct = false

  }
}