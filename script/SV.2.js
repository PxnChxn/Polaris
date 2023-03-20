
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
        question : 'Everyone ________ to submit the assignment before midnight.',
        answers :[
            {Text: 'needs', correct: true},
            {Text: 'need', correct: false},
            {Text: 'needing', correct: false},
            {Text: 'needed', correct: false}
        ],
    },

    {
        question : 'Every student taking this class _________ his or her kind professor.',
        answers :[
            {Text: 'love', correct: false},
            {Text: 'loves', correct: true},
            {Text: 'loved', correct: false},
            {Text: 'loving', correct: false}
        ],
    },
    {
        question : "Neither of the rooms _________ cleaned. It’s very dirty.",
        answers :[
            {Text: 'are', correct: false},
            {Text: 'be', correct: false},
            {Text: 'is', correct: true},
            {Text: 'were', correct: false}
        ],
    },
    {
        question : "No one _________ what it's like to be me.",
        answers :[
            {Text: 'knew', correct: false},
            {Text: 'knows', correct: true},
            {Text: 'know', correct: false},
            {Text: 'known', correct: false}
        ],
    },
    {
        question : 'Either ice cream or bingsu _________ me happy every time.',
        answers :[
            {Text: 'make', correct: false},
            {Text: 'making', correct: false},
            {Text: 'makes', correct: true},
            {Text: 'made', correct: false}
        ],
    },
]