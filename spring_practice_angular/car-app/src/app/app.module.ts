import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { CarComponent } from './components/car/car.component';
import { CarService } from 'src/app/services/car.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    UserComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
