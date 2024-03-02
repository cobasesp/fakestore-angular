import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginPage implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
