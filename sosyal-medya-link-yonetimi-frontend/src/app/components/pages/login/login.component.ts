import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterUser } from '../../../models/register.model';
import { LoginUser } from '../../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: LoginUser = { username: '', password: '' };
  userData: RegisterUser = { name: '', surname: '', username: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  successMessageVisible = false;
  errorMessageVisible = false;
  errorMessageVisibleLogin = false;

  onSubmitRegister(): void {
    this.authService.register(this.userData).subscribe(response => {

      if (response._id) {
        this.successMessageVisible = true;
        setTimeout(() => {
          this.successMessageVisible = false;
          window.location.reload();
        }, 2000);
      }
    }, error => {
      this.errorMessageVisible = true;
      setTimeout(() => {
        this.errorMessageVisible = false;
        this.resetForm();
      }, 2000);
    });
  }
  
  resetForm(): void {
    this.userData = {name: this.userData.name, surname: this.userData.surname, username: '', email: '', password: this.userData.password};
  }

  resetFormLogin(): void {
    this.loginData = {username: '', password: ''};
  }
  
  onSubmitLogin(): void {
    this.authService.login(this.loginData).subscribe(response => {
      if (response._id) {
        this.router.navigate(['/home']);
      }
    }, error=>{
      this.errorMessageVisibleLogin = true;
      setTimeout(() => {
        this.errorMessageVisibleLogin = false;
        this.resetFormLogin();
      }, 1000);
    });
  }
}