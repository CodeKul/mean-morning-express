import { RegComponent } from './reg/reg.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgnComponent } from './lgn/lgn.component';

const routes: Routes = [
  { path: '', component: LgnComponent },
  { path: 'reg', component: RegComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
