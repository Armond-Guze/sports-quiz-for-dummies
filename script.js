const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

var sumbitInitialsButton = document.getElementById("initials");
var initialInput = document.getElementById("initials-input");
var initialsContainerElement = document.getElementById("initials-container")

var scoresContainerElement = document.getElementById("scores-container")
var scoresInnerElement = document.getElementById("scores-inner")

var timer = document.getElementById("time");
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");

var currentQuestion = 0;
var secondsLeft = 30;
var timerInterval = {};

function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left"

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
    }

    }, 1000)
}

function sendMessage() {
    timer.textContent = "You ran out of time!";
}

var questions = [
  {
    question: " Who is a pro golfer?",
    answers: ["Tiger Woods", "Tim Mack", "Kobe Bryant", "Pete The Clown"],
    correctAnswer: 0,
  },
  {
    question: " Who is the best football team in New York",
    answers: ["Rams", "Giants", "Patriots", "Chiefs"],
    correctAnswer: 1,
  },
  {
    question: " What football player  has the most championships in the NFL?",
    answers: ["Mike Davis", "Tom Brady", "Michael Jordan", "Daniel Jones"],
    correctAnswer: 1,
  },
  {
    question: " What city do the Knicks Play for?",
    answers: ["Idaho", "Nebraska", "Atlanta", "New York"],
    correctAnswer: 3,
  },
];

startButton.addEventListener("click", playQuestion);
button1.addEventListener("click", checkAnswer1);
button2.addEventListener("click", checkAnswer2);
button3.addEventListener("click", checkAnswer3);
button4.addEventListener("click", checkAnswer4);

function checkAnswer1() {
  if (questions[currentQuestion].correctAnswer === 0) {
    alert("you are correct");
  } else {
    alert("you are wrong");
  }

  nextQuestion();
}

function checkAnswer2() {
  if (questions[currentQuestion].correctAnswer === 1) {
    alert("you are correct");
  } else {
    alert("you are wrong");
  }

  nextQuestion();
}

function checkAnswer3() {
  if (questions[currentQuestion].correctAnswer === 1) {
    alert("you are correct");
  } else {
    alert("you are wrong");
  }

  nextQuestion();
}

function checkAnswer4() {
  if (questions[currentQuestion].correctAnswer === 3) {
    alert("you are correct");
  } else {
    alert("you are wrong");
  }


  clearInterval(timerInterval);
  questionContainerElement.classList.add("hide");
  initialsContainerElement.classList.remove("hide");
}

function nextQuestion() {
  currentQuestion++;
  playQuestion();
}

function playQuestion() {
  
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  document.getElementById("question").textContent =
    questions[currentQuestion].question;
  button1.textContent = questions[currentQuestion].answers[0];
  document.getElementById("answer2").textContent =
    questions[currentQuestion].answers[1];
  document.getElementById("answer3").textContent =
    questions[currentQuestion].answers[2];
  document.getElementById("answer4").textContent =
    questions[currentQuestion].answers[3];
}



sumbitInitialsButton.addEventListener("click", function() {
  var initials = initialInput.value;
  var scores = secondsLeft;


  // objective: save initial and score to localstorage AMONG all previous scores
  // hint: localstorage can ONLY save/get strings
  var players = []
  // Does leaderboard exist in localStorage?
  if(localStorage.getItem("leaderboard")) {
    players = JSON.parse(localStorage.getItem("leaderboard")); // convert json string into array
  }
  // save initial and score with all previous scores
  players.push({
    initials: initials,
    scores: scores
  })

  // save to leaderboard at localstorage
  localStorage.setItem("leaderboard", JSON.stringify(players)); // convert array back into json string for the localSTorage

  var row = document.createElement("section")
  row.classList.add("player-row")
  row.style.display="flex"
  row.style.width="100%"

  var col1 = document.createElement("div")
  col1.style.width="100%";
  col1.textContent = initials
  
  var col2 = document.createElement("div")
  col2.style.width="100%";
  col2.textContent = scores

  row.append(col1)
  row.append(col2)

  scoresInnerElement.append(row)
  initialsContainerElement.classList.add("hide");
  scoresContainerElement.classList.remove("hide");
})

startButton.addEventListener("click", setTime);