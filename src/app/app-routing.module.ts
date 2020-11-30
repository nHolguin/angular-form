import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSoporteComponent } from './components/add-soporte/add-soporte.component';

const routes: Routes = [
	{ path: '', redirectTo: 'add', pathMatch: 'full' },
	{ path: 'add', component: AddSoporteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
