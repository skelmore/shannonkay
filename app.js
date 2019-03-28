
// hide destination 
// when wander button pressed 
// show suggestion
// hide wander button



var NumberOfWords = 10

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Bermuda"
words[2] = "Banff"
words[3] = "Iceland"
words[4] = "Havana"
words[5] = "Sydney"
words[6] = "Barcelona"
words[7] = "New Orleans"
words[8] = "Rome"
words[9] = "London"
words[10] = "Croatia"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}