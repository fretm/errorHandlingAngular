import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor(private autservice :UserService) {
    this.autservice.authenticate()
   }

  ngOnInit(): void {
  }

getsalarySlip(){
  if(this.autservice.checkauthentication()){
    return "Salary Slip"
  }
  return "Not Authenticated"
  
}

}
