import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { StudentDashComponent } from './components/student-dash/student-dash.component';
import { StudentWorkComponent } from './components/student-work/student-work.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessageModule } from 'angular-flash-message';
import { AuthGuard } from './guards/auth.guard'


const appRoutes: Routes = [
  {path:'',  redirectTo: 'login', pathMatch: 'full'},
  {path:'new-account', component: NewAccountComponent},
  {path:'login', component: LoginComponent},
  {path: 'student-dash', component: StudentDashComponent},
  {path:'student-work', component: StudentWorkComponent,}
]

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    LoginComponent,
    StudentDashComponent,
    StudentWorkComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), 
    FlashMessageModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
//Complete