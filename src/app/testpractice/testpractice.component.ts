import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpractice',
  templateUrl: './testpractice.component.html',
  styleUrls: ['./testpractice.component.css']
})
export class TestpracticeComponent implements OnInit {
count:number ;
  constructor() {
this.count=0
   }

  ngOnInit(): void {
  }
increment(){

  this.count++
}

  safedrive (num ,num2){

    return num / num2
 }
}
