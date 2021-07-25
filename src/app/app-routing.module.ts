import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  Child2Component } from './child2/child2.component';
import {  ChildComponent } from './child/child.component';


const routes: Routes = [
 
  { path: 'child', component: ChildComponent },
  { path: 'child2', component: Child2Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }