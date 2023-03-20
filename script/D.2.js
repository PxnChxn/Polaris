
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
        question : 'I want _________ comics on that bookshelf. Could you please help me bring them down?',
        answers :[
            {Text: 'this', correct: false},
            {Text: 'that', correct: false},
            {Text: 'these', correct: false},
            {Text: 'those', correct: true}
        ],
    },

    {
        question : 'Bank wants to propose to __________ girlfriend. I think we should help him.',
        answers :[
            {Text: 'him', correct: false},
            {Text: 'his', correct: true},
            {Text: 'her', correct: false},
            {Text: 'my', correct: false}
        ],
    },
    {
        question : 'Do we have any _________ pens left? My pen ran out of ink.',
        answers :[
            {Text: 'much', correct: false},
            {Text: 'others', correct: false},
            {Text: 'other', correct: true},
            {Text: 'another', correct: false}
        ],
    },
    {
        question : 'Minnie likes to play _________ badminton on her weekends.',
        answers :[
            {Text: 'A', correct: false},
            {Text: 'An', correct: true},
            {Text: 'The', correct: false},
            {Text: 'no article (blank)', correct: false}
        ],
    },
    {
        question : 'The _________ of stray dogs is increasing every year. I think the government should take this seriously.',
        answers :[
            {Text: 'number', correct: true},
            {Text: 'amount', correct: false},
            {Text: 'other', correct: false},
            {Text: 'another', correct: false}
        ],
    },
]