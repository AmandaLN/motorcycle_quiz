// start button and store
var startBtn = document.getElementById("start");
var questionsElement = document.getElementById("questions");
var startScreen = document.querySelector("#start-screen");
var timeEll = document.getElementById("time");
var mainEl = document.querySelector("#end-screen");
var questionsChoices = document.querySelector("#choices");
var questionTitle = document.querySelector("#questions-title");
var pElement = document.querySelector("#msgCorrect");
var questionsIndex = -1;
var currentQuestion;
var correctAnswer;
var secondsLeft = 100;
var submitScoreElement = document.querySelector("#submit-score");
var userScoreElement = document.getElementById("user-score");
var userNameInput;
// event listener
startBtn.onclick = startQuiz;

// funtion to start quiz
function startQuiz() {
    
    startScreen.setAttribute("class", "hide");
   
   
// unhide the questions
    questionsElement.removeAttribute("class");
    console.log(questions[0].title)
    console.log(questions[0].choices)
    timeEl();
    getCurrentQuestion();
   // getCurrentChoices();
}

function getCurrentQuestion() {
    questionsIndex++
    questionsChoices.innerHTML = "";
//print the title of the question
    questionTitle.textContent = questions[questionsIndex].title;
    correctAnswer = questions[questionsIndex].answer;
    currentQuestions = questions[questionsIndex].choices;
console.log(currentQuestion);


//var currentChoices = currentQuestion[questionsIndex].choices;

// for loop 

for (let i = 0; i < currentQuestions.length; i++) {
    var choices2 = document.createElement("li");
    choices2.textContent = currentQuestions[i];
    answerBtn = questionsChoices.appendChild(choices2).setAttribute("class", "list-group-item");

    }
}



function timeEl() {
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEll.textContent = secondsLeft + " seconds left till Game Over";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
        
    
      }, 1000);

}

function sendMessage() {
    timeEll.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "./assets/images/game-over-escape-room_LI.jpg");

    mainEl.appendChild(imgEl);
    mainEl.removeAttribute("class");
    questionsElement.setAttribute("class", "hide");
 
}

questionsChoices.addEventListener("click", function(event) {

    if (correctAnswer === event.target.textContent) {   
        pElement.innerHTML = "YES!";
     //   setTimeout(hideFeedback,1225);
     //   showFeedback();   
        
    } else {
        pElement.innerHTML = "BOOO. NO!";
      //  setTimeout(hideFeedback,1225);
        secondsLeft = secondsLeft - 10;
      //  showFeedback();
    } 

getCurrentQuestion();

})