
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
        question : 'When an earthquake strikes, we should seek shelter. For example, hiding _________ the table because it will keep you safe from falling objects.',
        answers :[
            {Text: 'on', correct: false},
            {Text: 'under', correct: true},
            {Text: 'outside', correct: false},
            {Text: 'above', correct: false}
        ],
    },

    {
        question : "You're late. Didn't we make an appointment to arrive __________ 10 a.m.?",
        answers :[
            {Text: 'with', correct: false},
            {Text: 'as', correct: false},
            {Text: 'at', correct: true},
            {Text: 'along', correct: false}
        ],
    },
    {
        question : 'Students who study hard and diligently have a higher chance of getting __________ the university they want than those who are not attentive.',
        answers :[
            {Text: 'toward', correct: false},
            {Text: 'at', correct: false},
            {Text: 'to', correct: false},
            {Text: 'into', correct: true}
        ],
    },
    {
        question : 'I have to cut these vegetables __________ cooking. Could you bring me a knife?',
        answers :[
            {Text: 'for', correct: true},
            {Text: 'by', correct: false},
            {Text: 'on', correct: false},
            {Text: 'with', correct: false}
        ],
    },
    {
        question : "I didn't like it when my parents compared me __________ others.",
        answers :[
            {Text: 'toward', correct: false},
            {Text: 'about', correct: false},
            {Text: 'by', correct: false},
            {Text: 'to', correct: true}
        ],
    },
]