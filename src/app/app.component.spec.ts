import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { TestComponent } from './test/test.component';

describe('AppComponent', () => {
  let fixture:ComponentFixture<any>
  let component:any;
  let de:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'data'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('data');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain('data app is running!');
  });

  // following test cases for Test Component
  it('from App specs file testing the TestComponent name is vaibhav',()=>{
    fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('vaibhav');   
  });

  it('Is name render from test comp',()=>{
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('vaibhav')
  })

  it('should add method call from Test Component',()=>{
    fixture = TestBed.createComponent(TestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.addNumber(20,20)).toBe(40)
  })

  it('compare str with toBe ===',()=>{
    fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app.str1).toBe(app.str2)
  })

  it('compare str with toEqual ==',()=>{
    fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app.str1).toEqual(app.str2)
  })

  // it('compare object a with toBe ===',()=>{  // this case fail because compare objects or Array used to Equal
  //   fixture = TestBed.createComponent(TestComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.a).toBe(app.b)
  // })

  it('Compare object b with toEqual == ',()=>{
    fixture = TestBed.createComponent(TestComponent);
    const app  = fixture.componentInstance;
    expect(app.a).toEqual(app.b)
  })

  it('compare Array with toEqual ===',()=>{
    fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app.arr1).toEqual(app.arr2);
  })
});
