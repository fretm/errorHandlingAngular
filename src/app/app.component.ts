import { Component ,OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'errorHandling';

public  data
constructor(public service : UserService){

}
  ngOnInit() {
    
     this.service.gettodo().subscribe( 
(res:any)=>{
  this.data = res
  console.log(res)
}
     )
  }



}
