$( init );

const firstContainer = document.querySelector('#one');
const secondContainer = document.querySelector('#two');

let amount1 = 0;
let amount2 = 0;

firstContainer.innerHTML = `Angelina: ${amount1}`
secondContainer.innerHTML = `Lacey: ${amount2}`

function init() {
 $('.apple').draggable({
    cursor: 'move',
    containment: 'window',
 });
 $('#one').droppable( {
    drop: addAmountOne,
    out: subAmountOne
  });
  $('#two').droppable( {
    drop: addAmountTwo,
    out: subAmountTwo
  });
}

function addAmountOne (event, ui){
    amount1++;
    firstContainer.innerHTML = `Angelina: ${amount1}`
}
function subAmountOne (event, ui){
    amount1--;
    firstContainer.innerHTML = `Angelina: ${amount1}`
}
function addAmountTwo (event, ui){
    amount2++;
    secondContainer.innerHTML = `Lacey: ${amount2}`
}
function subAmountTwo (event, ui){
    amount2--;
    secondContainer.innerHTML = `Lacey: ${amount2}`
}



//-------------------------- Quiz Scripts ------------------------------
const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');

const output = [];

const quizQuestions =[
    {
        question: "Angelina has 12 apples and Lacey has 7. Lacey gives 2 apples to Angelina. How many more apples does Angelina have than Lacey?",
        answers: {
        a: "9",
        b: "14",
        c: "5"
        },
        correctAnswer: "a",
    }
];


function buildQuiz(){
    const output = [];

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers =[];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                ); 
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        }
    );
    quizContainer.innerHTML = output.join(''); 
}

quizQuestions.forEach( (currentQuestion, questionNumber) => {
    const answers = [];
    for(letter in currentQuestion.answers){
        answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>` 
        );
    }
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
    );
    quizContainer.innerHTML = output.join('');
  });

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer===currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
          }
          resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} questions correct.`;
    });
}

buildQuiz();

submitButton.addEventListener('click', showResults);