import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorebookComponent } from './components/scorebook/scorebook.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "scorebook", component:ScorebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
