
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
        question : 'When you make a mistake, you should sincerely apologize __________ the person.',
        answers :[
            {Text: 'for', correct: false},
            {Text: 'of', correct: false},
            {Text: 'to', correct: true},
            {Text: 'on', correct: false}
        ],
    },

    {
        question : "He was a very courageous person, but he was afraid __________ ghosts.",
        answers :[
            {Text: 'for', correct: false},
            {Text: 'of', correct: true},
            {Text: 'to', correct: false},
            {Text: 'on', correct: false}
        ],
    },
    {
        question : 'Please let me introduce you to Richard. He is the person in charge ___________ our marketing department.',
        answers :[
            {Text: 'for', correct: false},
            {Text: 'of', correct: true},
            {Text: 'to', correct: false},
            {Text: 'on', correct: false}
        ],
    },
    {
        question : "From now on, everyone is strictly prohibited from inviting me to try Shabu. I'm ___________ a diet.",
        answers :[
            {Text: 'for', correct: false},
            {Text: 'of', correct: false},
            {Text: 'to', correct: false},
            {Text: 'on', correct: true}
        ],
    },
    {
        question : "I have traveled to London with my parents. They are responsible ___________ all expenses as they have promised me.",
        answers :[
            {Text: 'for', correct: true},
            {Text: 'of', correct: false},
            {Text: 'to', correct: false},
            {Text: 'on', correct: false}
        ],
    },
]