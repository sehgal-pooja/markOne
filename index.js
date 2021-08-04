
var readlineSync = require("readline-sync")

var list = [
  {
    question : "Favorite actor? ",
    answer : "Vijay Deverakonda"
  },{
    question : "Favorite singer? ",
    answer : "James Arthur"
  },{
    question : "Red or Black? ",
    answer: "Black"
  },{
    question : "Mountains or Beaches? ",
    answer : "Beaches"
  },{
    question : "Person I love the most, Piyush or You? ",
    answer: "Piyush"
  }
]

var score = 0

function howWellDoYouKnowMe(question, answer){
  var yourAnswer = readlineSync.question(question);

  if(yourAnswer === answer){
    console.log("That's correct!!")
    score = score + 1
    console.log("Score:",score)
  }
  else{
    console.log("I hate you")
    score = score - 1
    console.log("Score:",score)
  }
}

for(var i = 0; i < list.length ; i++){
  howWellDoYouKnowMe(list[i].question, list[i].answer) 
}


function displayHighScore(){
  console.log("----------------FINISHED----------------")
  console.log("Your final score:",score)
  console.log("Here are the high scores:")
  highScore.map(score => console.log(score.name,":",score.score))
}

var highScore = [
  {name: "Pooja",
  score: 5
  },{
    name: "Piyush",
    score: 4
  }
]

displayHighScore();


