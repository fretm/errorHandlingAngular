import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-resevation',
  templateUrl: './customer-resevation.component.html',
  styleUrls: ['./customer-resevation.component.css']
})
export class CustomerResevationComponent implements OnInit {

  hotelRoomCapacity = 30;
  customerCount = 10;
  constructor() { }


  ngOnInit(): void {
  }


  registerCustomer(){
    return ++this.customerCount
  }
  unregisterCustomer(){

  return  --this.customerCount

  }
reservedRoom(){
  let roomReserved =false ;
  if(this.customerCount < this.hotelRoomCapacity){
    this.customerCount++;
    roomReserved =true
  }
  return roomReserved;
}

}
