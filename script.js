const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
var timer = document.getElementById("time");
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");

var currentQuestion = 0;
var secondsLeft = 5;

function setTime() {
    var timerInterval = setInterval(function() {
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
  localStorage.setItem("questions", JSON.stringify(questions))
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

  nextQuestion();
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

setTime();
