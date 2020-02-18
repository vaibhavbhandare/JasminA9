import { TestBed } from '@angular/core/testing';
import { TestserviceService } from './testservice.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpTestingController , HttpClientTestingModule} from '@angular/common/http/testing'

describe('TestserviceService', () => {
  let service: TestserviceService;
  let httpcontroller : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule , HttpClientTestingModule ],
      providers : [TestserviceService]
    });
    service = TestBed.get(TestserviceService);
    httpcontroller = TestBed.get(HttpTestingController)
  });

  it('should be created Test servicwe', () => {
    expect(service).toBeTruthy();
  });

  it('should have get data from json placeholder',()=>{
     service =  TestBed.get(TestserviceService);
     service.getdatahttp().subscribe(data=>{
        expect(data.length).toEqual(10);
     })
  })

  it('shoud have name Bret in id 1',()=>{
      service.getdatahttp().subscribe(data=>{
        expect(data[0].username).toEqual('Bret')
      })
  })

  it('It should be post api for get method',()=>{
    service.getdatahttp().subscribe(data=>{
      expect(data.length).toEqual(10)
    })
    const req = httpcontroller.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET')
  })
});
