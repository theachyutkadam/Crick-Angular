import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationsComponent } from './components/registrations/registrations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScorebookComponent } from './components/scorebook/scorebook.component';
import { PlayerIndexComponent } from './components/players/player-index/player-index.component';
import { PlayerOprationComponent } from './components/players/player-opration/player-opration.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationsComponent,
    DashboardComponent,
    ScorebookComponent,
    PlayerIndexComponent,
    PlayerOprationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
