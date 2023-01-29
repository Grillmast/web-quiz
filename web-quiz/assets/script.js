const startQuizEl = document.getElementById("starting-page");
const quizBody = document.getElementById("quiz");
const gameEnd = document.getElementById("game-end");
const startQuizbtn = document.getElementById("start-btn");
const quizTimer = document.getElementById("timer");
const questionsEl = document.getElementById("questions");
const btnA = document.getElementById("a");
const btnB = document.getElementById("b");
const btnC = document.getElementById("c");
const btnD = document.getElementById("d");
const finEl = document.getElementById("final-score");
const resultEl = document.getElementById("result");
const highScrCnt = document.getElementById("high-score-container");
const highScrEl = document.getElementById("high-score-page");
const highScrInt = document.getElementById("initials");
const highScrName = document.getElementById("high-score-int");
const endBtns = document.getElementById("end-btns");
const submitBtn = document.getElementById("submit");
const highScrScores = document.getElementById("high-score-scores");

const quizQuestions = [{
    question: "What is the main difference between var and let keywords in JavaScript?",
    choiceA: "var defines a variable while let defines a constant",
    choiceB: "var defined function scoped variable while let define block scoped variable",
    choiceC: "The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed",
    choiceD: "All of the above",
    correctAnswer: "b"
  },
  {
    question: "The const keyword is used to define a ______",
    choiceA: "Function scopes variable",
    choiceB: "Block scoped variable",
    choiceC: "Constant",
    choiceD: "Constant with no initial value",
    correctAnswer: "c"
  },
  {
    question: "Which JavaScript method is used to create a new array with array elements that passes a test",
    choiceA: "forEach()",
    choiceB: "map()",
    choiceC: "forMap()",
    choiceD: "filter()",
    correctAnswer: "d"
  },
  {
    question: "Which JavaScript method is used to call a function (a callback function) once for each array element?",
    choiceA: "for()",
    choiceB: "traverse()",
    choiceC: "forEach()",
    choiceD: "foreach()",
    correctAnswer: "c"
  },
  {
    question: "Which JavaScript operator is used to determine the type of a variable?",
    choiceA: "typeof",
    choiceB: "TypeOf",
    choiceC: "typeOf",
    choiceD: "sizeof",
    correctAnswer: "a"
  },
  ];

  let finalQuestionIndex = quizQuestions.length;
  let currentQuestionIndex = 0;
  let timeLeft = 60;
  let timerInterval;
  let score = 0;
  let correct;

  function startQuiz() {
    startQuizEl.style.display = "none";
    gameEnd.style.display = "none";
    generateQuestions()

    timerInterval = setInterval(function () {
        timeLeft--;
        quizTimer.textContent = "Time Left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval)
            displayFinalScore();           
        }
    }, 1000)
    quizBody.style.display = "block";

    
  }

  function generateQuestions() {
    gameEnd.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return displayFinalScore()
    }

    let currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    btnA.innerHTML = currentQuestion.choiceA;
    btnB.innerHTML = currentQuestion.choiceB;
    btnC.innerHTML = currentQuestion.choiceC;
    btnD.innerHTML = currentQuestion.choiceD;
  }

  function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        currentQuestionIndex++;
        generateQuestions();
    
      } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        timeLeft = timeLeft - 10;
        currentQuestionIndex++;
        generateQuestions();  
      } else {
        displayFinalScore();
      }
  }

  function displayFinalScore() {
    quizBody.style.display = "none"
    clearInterval(timerInterval);
    
  }

  //Needs a score function figured out. Quiz isnt showing when we press 'Start' button. We need to be able to submit our buttons. Cursor is not currently working from CSS. We need to generate high-scores and show high-scores. We need functions to clear the quiz and replay the quiz. 
