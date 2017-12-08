import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { TeacherDashComponent } from './components/teacher-dash/teacher-dash.component';
import { StudentDashComponent } from './components/student-dash/student-dash.component';
import { ParentDashComponent } from './components/parent-dash/parent-dash.component';
import { StudentWorkComponent } from './components/student-work/student-work.component';
//import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
//import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessageModule } from 'angular-flash-message';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  {path:'',  redirectTo: 'login', pathMatch: 'full'},
  {path:'new-account', component:NewAccountComponent},
  {path:'login', component:LoginComponent},
  {path:'teacher-dash', component:TeacherDashComponent, canActivate:[AuthGuard]},
  {path:'student-dash', component:StudentDashComponent, canActivate:[AuthGuard]},
  {path:'parent-dash', component:ParentDashComponent},
  {path:'student-work', component:StudentWorkComponent, canActivate:[AuthGuard]},
  //{path:'navbar', component:NavbarComponent},
  //{path:'user-details/:id', component:UserDetailsComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    LoginComponent,
    TeacherDashComponent,
    StudentDashComponent,
    ParentDashComponent,
    StudentWorkComponent
    //NavbarComponent,
    //UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    //NgbModule, 
    RouterModule.forRoot(appRoutes), 
    FlashMessageModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
//Complete