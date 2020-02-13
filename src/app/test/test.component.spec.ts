import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { DebugElement } from '@angular/core';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de:DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create TestComponent', () => {
    expect(component).toBeTruthy();
  });

  // it('should have name' , ()=>{
  //   expect(component.name).toEqual('vaibhav')
  // })

  // it('should Renderer name title' ,()=>{
  //   fixture = TestBed.createComponent(TestComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('My Name is vaibhav');
  // })

  it("Add Number Method Call" , ()=>{
    fixture = TestBed.createComponent(TestComponent)
    const app = fixture.debugElement.componentInstance;
    expect(app.addNumber(10,10)).toEqual(20);
  })

  it('Should Constructor Call' , ()=>{
    fixture = TestBed.createComponent(TestComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.methodCall).toEqual(['Hi I am Constructor Call']);
  })

  it("should Call Life Cycle Hook ngOnit",()=>{
    fixture = TestBed.createComponent(TestComponent)
    expect(component.methodCall).toEqual(['Hi I am ngOnInit Call'])
  })
});
