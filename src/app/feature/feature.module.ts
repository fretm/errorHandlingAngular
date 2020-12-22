import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub.component';
import { Sub2Component } from './sub2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubComponent, Sub2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'sub1', component: SubComponent },
      { path: 'sub2', component: Sub2Component },
    ]),
  ],

  exports: [SubComponent, Sub2Component],
})
export class FeatureModule {}
