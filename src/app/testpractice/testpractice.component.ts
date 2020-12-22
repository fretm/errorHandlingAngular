import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpractice',
  templateUrl: './testpractice.component.html',
  styleUrls: ['./testpractice.component.css']
})
export class TestpracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  safedrive (num ,num2){

    return num / num2
 }
}
