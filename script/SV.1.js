
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
        question : 'He _______ to the school to study with his friends.',
        answers :[
            {Text: 'go', correct: false},
            {Text: 'goes', correct: true},
            {Text: 'going', correct: false},
            {Text: 'gone', correct: false}
        ],
    },

    {
        question : 'Sabina and Sarah ________ a movie together at their house every weekend.',
        answers :[
            {Text: 'watching', correct: false},
            {Text: 'watched', correct: false},
            {Text: 'watches', correct: false},
            {Text: 'watch', correct: true}
        ],
    },
    {
        question : 'Cigarette and vapor cigarette ________ bad for your health.',
        answers :[
            {Text: 'are', correct: true},
            {Text: 'been', correct: false},
            {Text: 'is', correct: false},
            {Text: 'be', correct: false}
        ],
    },
    {
        question : 'The puppy and kitten at my house _________ with each other all the time.',
        answers :[
            {Text: 'fighting', correct: false},
            {Text: 'fights', correct: true},
            {Text: 'fought', correct: false},
            {Text: 'fight', correct: false}
        ],
    },
    {
        question : 'The shirt and the skirt that you wear today _________ really good on you.',
        answers :[
            {Text: 'looks', correct: false},
            {Text: 'look', correct: true},
            {Text: 'looked', correct: false},
            {Text: 'looking', correct: false}
        ],
    },
]