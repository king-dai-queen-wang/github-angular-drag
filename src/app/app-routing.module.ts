import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { FormTestComponent }      from './form-test/form-test.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component'
import { LifeCycleComponent }      from './life-cycle/life-cycle.component';
import {DragDropComponent} from "./components/drag-drop/drag-drop.component";


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lifeCycle', component: LifeCycleComponent },
  { path: 'formTest', component: FormTestComponent }
];
@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
