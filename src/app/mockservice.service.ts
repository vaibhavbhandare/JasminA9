import { Injectable } from '@angular/core';

export class MockService2 {
  sayHello(){
    console.log("Hi Mockservice 2");
    return "Hi Mockservice 2";
  }
}

@Injectable({
  providedIn: 'root',
  useClass: MockService2
})

export class MockserviceService {

  public showmwnu = {
    name : 'Mock Test 1'
  }

  constructor() { }

  sayHello(){
    console.log("Hi Mockservice 1");
    return "HI Mockservice 1";
  }
}
