
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
        question : "Unlike that of other men, ________ actor's life is in many ways.",
        answers :[
            {Text: 'A', correct: true},
            {Text: 'An', correct: false},
            {Text: 'As the', correct: false},
            {Text: 'That the', correct: false}
        ],
    },

    {
        question : "________ the news from global warming is inevitably censored. ",
        answers :[
            {Text: 'Little of ', correct: false},
            {Text: 'A little of ', correct: false},
            {Text: 'Much of ', correct: true},
            {Text: 'Many of ', correct: false}
        ],
    },
    {
        question : "___ angles of any triangle always add up to 180 degrees",
        answers :[
            {Text: 'Any three ', correct: false},
            {Text: 'The three ', correct: true},
            {Text: 'Three of ', correct: false},
            {Text: 'Three are ', correct: false}
        ],
    },
    {
        question : "For the investor who has ________ money, silver, or bonds are good options. ",
        answers :[
            {Text: 'so little a', correct: false},
            {Text: 'very little ', correct: true},
            {Text: 'so few', correct: false},
            {Text: 'very few', correct: false}
        ],
    },
    {
        question : '________ psychologists believe there is a close correlation between stress and illness. ',
        answers :[
            {Text: 'Some', correct: true},
            {Text: 'Each', correct: false},
            {Text: 'Every', correct: false},
            {Text: 'Little of', correct: false}
        ],
    },
    {
        question : '________ physicist, Gabriel Fahrenheit, invented the mercury thermometer in 1714. ',
        answers :[
            {Text: 'Many', correct: false},
            {Text: 'Few', correct: false},
            {Text: 'A', correct: true},
            {Text: 'No', correct: false}
        ],
    },

    {
        question : "Because the first pair of shorts does not fit properly, Jack asks for ________. ",
        answers :[
            {Text: 'another pants', correct: false},
            {Text: 'others pants', correct: false},
            {Text: 'the others ones', correct: false},
            {Text: 'another pair', correct: true}
        ],
    },
    {
        question : "________ 1000 species of finch have been identified. ",
        answers :[
            {Text: 'As many as', correct: true},
            {Text: 'As little as', correct: false},
            {Text: 'As much as', correct: false},
            {Text: 'Much as', correct: false}
        ],
    },
    {
        question : "________ different combinations of foods can give Andrew the essentials he needs for an adequate diet. ",
        answers :[
            {Text: 'Every', correct: false},
            {Text: 'Each', correct: false},
            {Text: 'Many', correct: true},
            {Text: 'Much', correct: false}
        ],
    },
    {
        question : 'While searching for the wreckage of ________ unidentified aircraft, the Sofia encounters severe squid at sea. ',
        answers :[
            {Text: 'a', correct: false},
            {Text: 'little', correct: false},
            {Text: 'an', correct: true},
            {Text: 'a few', correct: false}
        ],
    },
////////////////////////////////////
    {
        question : '_________ social crusade aroused Alexa’s enthusiasm more than the expansion of educational facilities for immigrants to the United States.',
        answers :[
            {Text: 'No', correct: true},
            {Text: 'Nothing', correct: false},
            {Text: 'Not', correct: false},
            {Text: 'None', correct: false}
        ],
    },

    {
        question : "________ fuel that is used today is a chemical form of solar energy.",
        answers :[
            {Text: 'Most of', correct: false},
            {Text: 'The most' , correct: false},
            {Text: 'Most', correct: false},
            {Text: 'Almost the' , correct: true}
        ],
    },
    {
        question : "________ executive and administrative authority in the United States government rests with a president who is elected for a 4-year term.",
        answers :[
            {Text: 'Some', correct: false},
            {Text: 'The' , correct: true},
            {Text: 'Few', correct: false},
            {Text: 'Many' , correct: false}
        ],
    },
    {
        question : "My science teachers believe that the beaver's instinct to build dams is more complex than ________ other animal instinct. ",
        answers :[
            {Text: 'most', correct: false},
            {Text: 'all' , correct: false},
            {Text: 'any', correct: true},
            {Text: 'these' , correct: false}
        ],
    },
    {
        question : 'Even though southern California is densely populated, ________ live in the northern part of the state.',
        answers :[
            {Text: 'a little people', correct: false},
            {Text: 'a few the people', correct: false},
            {Text: 'few people', correct: true},
            {Text: 'a little of people', correct: false}
        ],
    },
    {
        question : 'Yoga has a positive effect on the body in __________ ways such as being healthy, reducing the risk of diseases, and normal body function.',
        answers :[
            {Text: 'many', correct: true},
            {Text: 'much', correct: false},
            {Text: 'little', correct: false},
            {Text: 'every', correct: false}
        ],
    },

    {
        question : "This shirt is too small. Do you have __________ shirt that is the same but larger than this one?",
        answers :[
            {Text: 'other', correct: false},
            {Text: 'others', correct: false},
            {Text: 'a few', correct: false},
            {Text: 'another', correct: true}
        ],
    },
    {
        question : "This wallet belongs to Cherry. Why didn't you return it to Cherry? Aren't you __________ best friend?",
        answers :[
            {Text: 'its', correct: false},
            {Text: 'his', correct: false},
            {Text: 'her', correct: true},
            {Text: 'my', correct: false}
        ],
    },
    {
        question : "I just went to an amusement park on Saturday. There are __________ types of rides there. Let's go to another theme park next time.",
        answers :[
            {Text: 'very few', correct: true},
            {Text: 'very little', correct: false},
            {Text: 'so much', correct: false},
            {Text: 'every', correct: false}
        ],
    },
    {
        question : 'Their owners are very mean. Abandoning dogs on the side of the road results in them becoming stray dogs with no owners like __________ dogs over there.',
        answers :[
            {Text: 'this', correct: false},
            {Text: 'that', correct: false},
            {Text: 'these', correct: false},
            {Text: 'those', correct: true}
        ],
    },
]