import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'vaibhav';
  public methodCall:Array<any> = [];

  constructor() {
    this.methodCall.push('Hi I am Constructor Call')
   }

  ngOnInit() {
   if(this.methodCall.length > 0){
     this.methodCall.splice(0,this.methodCall.length)
   }
   this.methodCall.push('Hi I am ngOnInit Call')
  }


  addNumber(a,b):Number{
    return a+b
  }
}
