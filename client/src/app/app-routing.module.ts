import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompleteComponent } from './components/complete/complete.component';
import { IncompleteComponent } from './components/incomplete/incomplete.component';
import { AllComponent } from './components/all/all.component';


const routes: Routes = [
  {
    path: '',
    component: AllComponent
  },
  {
    path: 'complete',
    component: CompleteComponent   
  },
  {
    path: 'incomplete',
    component: IncompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
