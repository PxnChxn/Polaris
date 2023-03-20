
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
        question : 'The tallest bird on the American continent, the white whooping crane, ________ four and a half feet tall. ',
        answers :[
            {Text: 'stands', correct: true},
            {Text: 'stand', correct: false},
            {Text: 'is stands', correct: false},
            {Text: 'standing', correct: false}
        ],
    },

    {
        question : "Two cups of sugar ___________ extreme for a single batch of filling in Natalie's recipe.",
        answers :[
            {Text: 'seem', correct: true},
            {Text: 'seems', correct: false}
        ],
    },
    {
        question : "Cuba is ________ of the largest sugar-growing areas in this world. ",
        answers :[
            {Text: 'many', correct: false},
            {Text: 'few', correct: false},
            {Text: 'one', correct: true},
            {Text: 'all', correct: false}
        ],
    },
    {
        question : "Home economics ___________ proven to be Naomi's easiest subject this semester.",
        answers :[
            {Text: 'have', correct: false},
            {Text: 'has', correct: true}
        ],
    },
    {
        question : 'Either of the radioisotopes produced artificially ________ its own distinct structure.',
        answers :[
            {Text: 'have', correct: false},
            {Text: 'has', correct: true},
            {Text: 'having', correct: false},
            {Text: 'have had', correct: false}
        ],
    },
    {
        question : 'The department members but not the chairman ___________ decided not to teach on Songkran festival.',
        answers :[
            {Text: 'have', correct: true},
            {Text: 'has', correct: false}
        ],
    },

    {
        question : "From the canteen ___________ the palest tomatoes and the yellow pickle slices that students will ever see.",
        answers :[
            {Text: 'come', correct: true},
            {Text: 'comes', correct: false}
        ],
    },
    {
        question : "__________ of women who earn Master's Degrees has risen sharply in recent years.",
        answers :[
            {Text: 'The amount of', correct: false},
            {Text: 'A number of', correct: false},
            {Text: 'The number of', correct: true},
            {Text: 'The deal of', correct: false}
        ],
    },
    {
        question : "Two thousand pounds of red beans ___________ the bed of Lana's truck.",
        answers :[
            {Text: 'fill', correct: false},
            {Text: 'fills', correct: true}
        ],
    },
    {
        question : 'The Amendments to the Constitution __________ women the right to vote in the elections of 1940. ',
        answers :[
            {Text: 'give', correct: false},
            {Text: 'gives', correct: true}
        ],
    },
////////////////////////////////////
    {
        question : 'Two Diomede Islands __________ to the United States.',
        answers :[
            {Text: 'has belonged', correct: false},
            {Text: 'belong', correct: true},
            {Text: 'belonging', correct: false},
            {Text: 'belongs', correct: false}
        ],
    },

    {
        question : "Neither of the leaders __________ how to trap wild animals or prepare them for mounting.",
        answers :[
            {Text: 'knows', correct: true},
            {Text: 'know' , correct: false},
            {Text: 'knowing', correct: false},
            {Text: 'to know' , correct: false}
        ],
    },
    {
        question : "This weekend, a Black shark, as well as a school of piranha, ___________ threatening the tourists at beach in Pattaya.",
        answers :[
            {Text: 'is', correct: true},
            {Text: 'are', correct: false}
        ],
    },
    {
        question : "Every piece of popcorn and dropped snacks on the theater floor ___________  stuck in Jolie’s shoes.",
        answers :[
            {Text: 'have', correct: false},
            {Text: 'has', correct: true},
        ],
    },
    {
        question : 'All the cereal grains but rice ________ on the prairies and plains of the United States. ',
        answers :[
            {Text: 'grow', correct: true},
            {Text: 'growing', correct: false},
            {Text: 'grows', correct: false},
            {Text: 'is growing', correct: false}
        ],
    },
    {
        question : 'Three hundred and sixty gallons ___________ the amount of liquid the rug in living room can absorb.',
        answers :[
            {Text: 'is', correct: true},
            {Text: 'are', correct: false}
        ],
    },

    {
        question : "Not only big caterpillar but also Elle’s insects ___________ chewed my green plants to leafless nubs.",
        answers :[
            {Text: 'has', correct: false},
            {Text: 'have', correct: true}
        ],
    },
    {
        question : "There ___________ reptiles that sneak in between the window screens that take up house in every bathroom.",
        answers :[
            {Text: 'is', correct: false},
            {Text: 'are', correct: true}
        ],
    },
    {
        question : "Nadia isn't going to the beach for summer break because sixteen dollars ___________ all she has in her vacation budget.",
        answers :[
            {Text: 'is', correct: true},
            {Text: 'are', correct: false}
        ],
    },
    {
        question : 'Irena has many friends who love her drawing, but she has always believed that General Motors ___________ it better.	 ',
        answers :[
            {Text: 'make', correct: false},
            {Text: 'makes', correct: true}
        ],
    },
]