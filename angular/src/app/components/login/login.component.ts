import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessage } from 'angular-flash-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;


  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessage) { }

  ngOnInit() {
  
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
  }
  
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.info('You are logged in', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['student-dash']);
        

      } else {
        this.flashMessage.info(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['login']);
        
      }
    });
  }
}



