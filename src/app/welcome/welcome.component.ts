import { Component, OnInit } from '@angular/core';
import { MockserviceService , MockService2 } from '../mockservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  
  providers:[{ provide: MockserviceService , useClass: MockService2}]
})
export class WelcomeComponent implements OnInit {

  public welcome:string;

  constructor(private mockser:MockserviceService) { }

  ngOnInit() {
    // following method call from useclass Mockservice2 using service MockserviceService
    this.mockser.sayHello();
  }

}
