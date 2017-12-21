import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;
let letter: any;

@Component({
  selector: 'app-student-work',
  templateUrl: './student-work.component.html',
  styleUrls: ['./student-work.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('JavaScript goes here!');

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


const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');

const output = [];

const quizQuestions =[
    {
        question: "Angelina has 12 apples and Lacey has 7. Lacey gives 2 apples to Angelina. How many more apples does Angelina have than Lacey?",
        answers: {
        A: "9",
        B: "14",
        C: "5"
        },
        correctAnswer: "A",
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
      const userAnswer = (<HTMLInputElement> (answerContainer.querySelector(selector) || {})).value;

      if(userAnswer===currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].setAttribute("style", "color: #00C100");
      }
      else{
          answerContainers[questionNumber].setAttribute("style", "color: #FF1200");
        }
        resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} questions correct.`;
  });
}

buildQuiz();

submitButton.addEventListener('click', showResults);
  }

}
