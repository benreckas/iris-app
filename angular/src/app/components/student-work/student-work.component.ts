import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

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
  }

}
