import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { catchError, map, of, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginPage {

  public username: string = 'mor_2314'; // For debug purposes
  public password: string = '83r5^_'; // for debug purposes
  public waitingLoging: boolean = false;
  public error: boolean = false;
  public errorMsg: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  doLogin() {
    // show waiting svg and get email and password
    this.waitingLoging = true;
    const username = this.username;
    const password = this.password;

    // reset email and password
    // this.email = '';
    // this.password = '';

    console.log("Login", {username, password})

    // Call login service to do login
    this.loginService.doLoginApi(username, password)
    .pipe(
      catchError(err => of(null)) // error handler, return null if the request gives error
    )
    .subscribe(data => {
      console.log(data)
      if( data == null) {
        this.error = true;
        this.errorMsg = 'Username or password incorrect'
      } else {
        localStorage.setItem('auth-token', data.token)
        this.router.navigate(['/catalogue'])
      }

      this.waitingLoging = false;
    });

  }

}
