import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessage } from 'angular-flash-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewAccountComponent implements OnInit {
  firstname: String;
  lastname: String;
  email: String;
  createUsername: String;
  createPassword: String;
  userType: String;


  constructor(private validateService: ValidateService, private flashMessage: FlashMessage, private authService: AuthService, private router: Router,) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      username: this.createUsername,
      password: this.createPassword,
      userType: this.userType, 
    }

    //Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.info('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.info('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success){
        this.flashMessage.info('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);

      } else {
        this.flashMessage.info('Something went wrong', {cssClass: 'alert-danger', timeout: 3000}); 
        this.router.navigate(['/register']); //navigate back to the new-account page//
        
       }
    })
  }
}
/*Complete*/
