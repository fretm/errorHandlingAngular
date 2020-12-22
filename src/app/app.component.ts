import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'errorHandling';

  public data;
  public fre=[]
  public bk =[]
  constructor(public service: UserService) {}
  ngOnInit() {
    this.service.gettodo().subscribe((res: any) => {
      this.data = res;
      console.log(res);
    });
  }

  showob() {
    this.service.myob().subscribe((res: any) => {
     this.fre = [...this.fre , res]
      console.log(res);
    });
    this.service.secondob().subscribe((dd:any)=>{
      this.bk = [...this.bk ,dd ]
      console.log(dd)
     })
   }
}
