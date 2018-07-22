import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../security/login/login.service';
import { Router } from '@angular/router';
import { User } from '../../security/login/user.model';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {



  constructor(private loginService: LoginService, private router: Router) {
    this.router.events.subscribe(e => console.log(e))
  }

  ngOnInit() {
  }

  user(): User {
    return this.loginService.user
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn()
  }

  login() {
    this.loginService.handleLogin()
  }

  logout() {
    this.loginService.logout()
  }
}
