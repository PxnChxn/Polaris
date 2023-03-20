
// Declaration 
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('q-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('a-button');



let shuffledQuestions,currentQuestionIndex;
let quizScore = 0;

//Event Click mouse
startButton.addEventListener('click',startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerText = answer.Text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonElement.appendChild(button);
    });
  }

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body,correct);
    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else{
        startButton.innerText =  "คะแนนทั้งหมด";
        startButton.classList.remove("hide");
        startButton.addEventListener('click', reportScore);
    }
    if (selectedButton.dataset.correct) {        
        quizScore++;
        document.getElementById('right-answers').innerText = quizScore;
    }
}

function reportScore() {
    const totalQuestions = shuffledQuestions.length;
    let scorePercentage = (quizScore / totalQuestions) * 100;
    const message = `You scored ${scorePercentage}% (${quizScore} out of ${totalQuestions} correct)`;
    alert(message);
    quizScore = 0;
}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add("correct");
    } else{
        element.classList.add("wrong");
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [
    {
        question : 'The __________ of apples produced in Chaiyaphum this year has doubled from last year.',
        answers :[
            {Text: 'amount of', correct: false},
            {Text: 'deal of', correct: false},
            {Text: 'number of', correct: true},
            {Text: 'amounts of', correct: false}
        ],
    },

    {
        question : 'Mathematics ___________ an important subject for further development.',
        answers :[
            {Text: 'has', correct: false},
            {Text: 'are', correct: false},
            {Text: 'do', correct: false},
            {Text: 'is', correct: true}
        ],
    },
    {
        question : "All students in the class __________not going to do their works.",
        answers :[
            {Text: 'is', correct: false},
            {Text: 'been', correct: false},
            {Text: 'are', correct: true},
            {Text: 'being', correct: false}
        ],
    },
    {
        question : "The police in Thailand __________ responsible for maintaining peace in this country.",
        answers :[
            {Text: 'is', correct: false},
            {Text: 'am', correct: false},
            {Text: 'are', correct: true},
            {Text: 'being', correct: false}
        ],
    },
    {
        question : 'People __________ to see what is going on in the streets.',
        answers :[
            {Text: 'gather', correct: true},
            {Text: 'gathers', correct: false},
            {Text: 'gathered', correct: false},
            {Text: 'gathering', correct: false}
        ],
    },
]