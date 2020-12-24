import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerResevationComponent } from './customer-resevation.component';

describe('CustomerResevationComponent', () => {
  let customService;
  beforeEach(() => {
    customService = new CustomerResevationComponent();
    let fixture: ComponentFixture<CustomerResevationComponent>;
  });
  afterEach(()=>{

  })
 beforeAll(()=>{

 })
 afterAll(()=>{

})
  it('should register customer / should increas by one ', () => {
    let customcount = customService.registerCustomer();
    expect(customcount).toEqual(11);
  });

  it("Testing Romm Reserved or not " ,()=>{

   let isReseved = customService.reserveRoom()

   expect(isReseved).toBeTruthy()
  })
});
