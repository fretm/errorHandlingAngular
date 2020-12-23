import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { TestpracticeComponent } from './testpractice.component';

describe('TestpracticeComponent', () => {
   let de :DebugElement
   let el :HTMLElement;
  let fixture: ComponentFixture<TestpracticeComponent>;
  let component :TestpracticeComponent
beforeEach(()=>{
  fixture=TestBed.createComponent(TestpracticeComponent)
   component = new TestpracticeComponent();
   de = fixture.debugElement.query(By.css('div' ))
   el=de.nativeElement;
})

  it('divide 2 value', () => {
    expect(component.safedrive(4, 2)).toBe(2);
  });
 
  it("initalation the number 'count=0 "   ,()=>{
    expect(component.count).toBe(0)
  })

  it("incrementCount() increment the count property by 1 ", () =>{
    component.increment()
    expect(component.count).toBe(1)
  })

 it("the count number gets interpolated to the component DOM" ,()=>{
   component.count=5
   fixture.detectChanges();
   expect(el.textContent).toContain('5')
 })

});
