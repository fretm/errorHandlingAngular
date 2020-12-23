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
    expect(component.safedrive(2, 2)).toBe(2);
  });
});
