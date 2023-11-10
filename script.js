const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById("question-container");
var button1 = document.getElementById("answer1")

var currentQuestion = 0;

var questions = [{
    question: "What color is the sky?",
    answers: ["blue", "green", "red", "purple"],
    correctAnswer: 0
}, {
    question: "What color is the grass?",
    answers: ["blue", "green", "red", "purple"],
    correctAnswer: 1
}]

startButton.addEventListener("click", playQuestion);
button1.addEventListener("click", checkAnswer1);

function checkAnswer1() {
    if (questions[currentQuestion].correctAnswer === 0) {
        alert("you are correct")
    } else {
        alert("you are wrong")
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    playQuestion();
}


function playQuestion() {
console.log("started");
startButton.classList.add('hide');
questionContainerElement.classList.remove('hide');
document.getElementById("question").textContent = questions[currentQuestion].question;
button1.textContent = questions[currentQuestion].answers[0];
document.getElementById("answer2").textContent = questions[currentQuestion].answers[1];
document.getElementById("answer3").textContent = questions[currentQuestion].answers[2];
document.getElementById("answer4").textContent = questions[currentQuestion].answers[3];
}