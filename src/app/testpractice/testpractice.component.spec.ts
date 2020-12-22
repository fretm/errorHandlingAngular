import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpracticeComponent } from './testpractice.component';

describe('TestpracticeComponent', () => {

  let fixture: ComponentFixture<TestpracticeComponent>;
  let component :TestpracticeComponent
beforeEach(()=>{
   component = new TestpracticeComponent();
})

  it('divide 2 value', () => {
    expect(component.safedrive(2, 2)).toBe(2);
  });
});
