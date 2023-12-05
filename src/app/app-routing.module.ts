import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorebookComponent } from './components/scorebook/scorebook.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationsComponent } from './components/registrations/registrations.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path: "login", component:LoginComponent},
  {path: "registration", component:RegistrationsComponent},
  {path: "scorebook", component:ScorebookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
