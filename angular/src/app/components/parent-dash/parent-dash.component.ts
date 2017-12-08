import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-dash',
  templateUrl: './parent-dash.component.html',
  styleUrls: ['./parent-dash.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ParentDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
