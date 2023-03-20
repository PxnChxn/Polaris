
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
        question : "It is now believed that some damage to organs may result __________ them to frequent X-rays. ",
        answers :[
            {Text: 'in exposing', correct: false},
            {Text: 'from exposure', correct: false},
            {Text: 'from exposing', correct: true},
            {Text: 'on expose', correct: false}
        ],
    },

    {
        question : "Mr. Justin specialized __________ painting girls with their cats. ",
        answers :[
            {Text: 'on ', correct: false},
            {Text: 'about ', correct: false},
            {Text: 'for ', correct: false},
            {Text: 'in ', correct: true}
        ],
    },
    {
        question : "By studying the bones __________ prehistoric man, Thomas hopes to determine what his owners ate.",
        answers :[
            {Text: 'of ', correct: true},
            {Text: 'for', correct: false},
            {Text: 'from', correct: false},
            {Text: 'in', correct: false}
        ],
    },
    {
        question : "Many modern scientists insist on __________ materials native to the region that will blend into the surrounding landscape. ",
        answers :[
            {Text: 'use', correct: false},
            {Text: 'to use', correct: false},
            {Text: 'the use', correct: false},
            {Text: 'using', correct: true}
        ],
    },
    {
        question : 'A number of the young learn primarily by direct physical experience __________ the world around them. ',
        answers :[
            {Text: 'by', correct: false},
            {Text: 'from', correct: false},
            {Text: 'for', correct: false},
            {Text: 'of', correct: true}
        ],
    },
    {
        question : 'For protection against predators, the hornbill chooses a hollow tree __________ a nest and seals in until the chicks are grown.',
        answers :[
            {Text: 'of', correct: false},
            {Text: 'from', correct: false},
            {Text: 'for', correct: true},
            {Text: 'in', correct: false}
        ],
    },

    {
        question : "__________ business, a merger is a combination of two or more corporations under one management. ",
        answers :[
            {Text: 'The', correct: false},
            {Text: 'At', correct: false},
            {Text: 'On', correct: false},
            {Text: 'In', correct: true}
        ],
    },
    {
        question : "Henry’s opinion is that Logan doesn't know what to do and is merely playing __________ time.",
        answers :[
            {Text: 'to', correct: false},
            {Text: 'for', correct: true},
            {Text: 'at', correct: false},
            {Text: 'in', correct: false}
        ],
    },
    {
        question : "__________ one time, Manchester was the home of the most productive cotton mills in the world. ",
        answers :[
            {Text: 'On', correct: false},
            {Text: 'At', correct: true},
            {Text: 'By', correct: false},
            {Text: 'To', correct: false}
        ],
    },
    {
        question : 'Maria’s invention shows that she understands what is going to happen in the future and proves she is __________ of her time.',
        answers :[
            {Text: 'in front', correct: false},
            {Text: 'before', correct: false},
            {Text: 'ahead', correct: true},
            {Text: 'forward', correct: false}
        ],
    },
////////////////////////////////////
    {
        question : 'Researchers hope to confirm whether Lily, a genome-editing researcher _____A_____ the Southern University of Science and Technology in Shenzhen, China, modified the genes of two embryos that produced twin girls. Following an international outcry, scientists will attempt _____B_____ uncover any potential side effects _____C_____ the process, and create a framework to ensure that any future efforts to edit heritable human DNA — such as that _____D_____ eggs, sperm or embryos — happen _____E_____ a responsible and regulated way. (Which choice is the answer to A?)',
        answers :[
            {Text: 'in', correct: false},
            {Text: 'at', correct: true},
            {Text: 'of', correct: false},
            {Text: 'to', correct: false}
        ],
    },

    {
        question : 'Researchers hope to confirm whether Lily, a genome-editing researcher _____A_____ the Southern University of Science and Technology in Shenzhen, China, modified the genes of two embryos that produced twin girls. Following an international outcry, scientists will attempt _____B_____ uncover any potential side effects _____C_____ the process, and create a framework to ensure that any future efforts to edit heritable human DNA — such as that _____D_____ eggs, sperm or embryos — happen _____E_____ a responsible and regulated way. (Which choice is the answer to B?)',
        answers :[
            {Text: 'in', correct: false},
            {Text: 'at', correct: false},
            {Text: 'of', correct: false},
            {Text: 'to', correct: true}
        ],
    },
    {
        question : 'Researchers hope to confirm whether Lily, a genome-editing researcher _____A_____ the Southern University of Science and Technology in Shenzhen, China, modified the genes of two embryos that produced twin girls. Following an international outcry, scientists will attempt _____B_____ uncover any potential side effects _____C_____ the process, and create a framework to ensure that any future efforts to edit heritable human DNA — such as that _____D_____ eggs, sperm or embryos — happen _____E_____ a responsible and regulated way. (Which choice is the answer to C?)',
        answers :[
            {Text: 'in', correct: false},
            {Text: 'at', correct: false},
            {Text: 'of', correct: true},
            {Text: 'to', correct: false}
        ],
    },
    {
        question : 'Researchers hope to confirm whether Lily, a genome-editing researcher _____A_____ the Southern University of Science and Technology in Shenzhen, China, modified the genes of two embryos that produced twin girls. Following an international outcry, scientists will attempt _____B_____ uncover any potential side effects _____C_____ the process, and create a framework to ensure that any future efforts to edit heritable human DNA — such as that _____D_____ eggs, sperm or embryos — happen _____E_____ a responsible and regulated way. (Which choice is the answer to D?)',
        answers :[
            {Text: 'in', correct: true},
            {Text: 'at', correct: false},
            {Text: 'of', correct: false},
            {Text: 'to', correct: false}
        ],
    },
    {
        question : 'Researchers hope to confirm whether Lily, a genome-editing researcher _____A_____ the Southern University of Science and Technology in Shenzhen, China, modified the genes of two embryos that produced twin girls. Following an international outcry, scientists will attempt _____B_____ uncover any potential side effects _____C_____ the process, and create a framework to ensure that any future efforts to edit heritable human DNA — such as that _____D_____ eggs, sperm or embryos — happen _____E_____ a responsible and regulated way. (Which choice is the answer to E?)',
        answers :[
            {Text: 'in', correct: true},
            {Text: 'at', correct: false},
            {Text: 'of', correct: false},
            {Text: 'to', correct: false}
        ],
    },
    {
        question : "The small world gets up to some pretty big things this year. From strange Schrödinger’s-cat situations to mysteries _____A_____ water to impossible-seeming particles flying up _____B_____ the Antarctic ice, particle physics proved that there are many unknowns _____C_____ the universe _____D_____ us to explore. Here are the 18 most stunning quantum mechanics and high-energy particle physics stories _____E_____ 2018. (Which choice is the answer to A?)",
        answers :[
            {Text: 'from', correct: false},
            {Text: 'for', correct: false},
            {Text: 'of', correct: true},
            {Text: 'in', correct: false}
        ],
    },

    {
        question : "The small world gets up to some pretty big things this year. From strange Schrödinger’s-cat situations to mysteries _____A_____ water to impossible-seeming particles flying up _____B_____ the Antarctic ice, particle physics proved that there are many unknowns _____C_____ the universe _____D_____ us to explore. Here are the 18 most stunning quantum mechanics and high-energy particle physics stories _____E_____ 2018. (Which choice is the answer to A?)",
        answers :[
            {Text: 'from', correct: true},
            {Text: 'for', correct: false},
            {Text: 'of', correct: false},
            {Text: 'in', correct: false}
        ],
    },
    {
        question : "The small world gets up to some pretty big things this year. From strange Schrödinger’s-cat situations to mysteries _____A_____ water to impossible-seeming particles flying up _____B_____ the Antarctic ice, particle physics proved that there are many unknowns _____C_____ the universe _____D_____ us to explore. Here are the 18 most stunning quantum mechanics and high-energy particle physics stories _____E_____ 2018. (Which choice is the answer to A?)",
        answers :[
            {Text: 'from', correct: false},
            {Text: 'for', correct: false},
            {Text: 'of', correct: false},
            {Text: 'in', correct: true}
        ],
    },
    {
        question : "The small world gets up to some pretty big things this year. From strange Schrödinger’s-cat situations to mysteries _____A_____ water to impossible-seeming particles flying up _____B_____ the Antarctic ice, particle physics proved that there are many unknowns _____C_____ the universe _____D_____ us to explore. Here are the 18 most stunning quantum mechanics and high-energy particle physics stories _____E_____ 2018. (Which choice is the answer to A?)",
        answers :[
            {Text: 'from', correct: false},
            {Text: 'for', correct: true},
            {Text: 'of', correct: false},
            {Text: 'in', correct: false}
        ],
    },
    {
        question : "The small world gets up to some pretty big things this year. From strange Schrödinger’s-cat situations to mysteries _____A_____ water to impossible-seeming particles flying up _____B_____ the Antarctic ice, particle physics proved that there are many unknowns _____C_____ the universe _____D_____ us to explore. Here are the 18 most stunning quantum mechanics and high-energy particle physics stories _____E_____ 2018. (Which choice is the answer to A?)",
        answers :[
            {Text: 'from', correct: false},
            {Text: 'for', correct: false},
            {Text: 'of', correct: true},
            {Text: 'in', correct: false}
        ],
    },
]