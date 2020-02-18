import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http: HttpClient) { }

  subject = new Subject<string>()

  // getdata(): Promise<any> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise()
  // }

  getdatahttp(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
