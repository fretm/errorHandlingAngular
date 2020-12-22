import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpErrorInterceptor } from './htt-error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestpracticeComponent } from './testpractice/testpractice.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestpracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  ,
 
    RouterModule.forRoot([{path:"" ,component :HomeComponent},
  
  {path:"feature", loadChildren:()=> import("./feature/feature.module").then(m=>m.FeatureModule)}
  ])
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,
 
      useClass: HttpErrorInterceptor,
 
      multi: true
 
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
