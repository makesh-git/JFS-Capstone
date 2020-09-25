import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/Services/Mesg/users.service';


import { fas, faUmbrella, faUser } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { AdminMsgComponent } from '../Admin/Message/adminCreate-msg/admin-msg.component';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { Users } from 'src/app/Model/users';
import { CurrentUser } from 'src/app/Model/current-user';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { LoginService } from 'src/app/Services/login.service';
import { LoginCredential } from 'src/app/Model/login-credential';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import swal from 'sweetalert2';
// MDB Angular Free
import { IconsModule } from 'angular-bootstrap-md';
// MDB Angular Pro

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userv: UsersService, private msgserv: AdminMsgService, private titleService: Title,
    private localStorage: LocalStorage, private logServ: LoginService, private router: Router) {
    library.add(fas, faUmbrella, faUser);
  }
  faUmbrella = faUmbrella;

  username: string;
  password: string;
  user: Users;
  logCred: LoginCredential;


  forgotUserid: string;
  mod: boolean;
  ngOnInit() {

    if (localStorage.length !== 0) {
      if (localStorage.getItem('USER_TYPE') === 'Admin') {
        this.router.navigate(['admin/home']);
      }
      else if (localStorage.getItem('USER_TYPE') === 'Motivator') {

        this.router.navigate(['motivator/home']);
      }
      else if (localStorage.getItem('USER_TYPE') === 'User') {
        this.router.navigate(['user/home']);
      }
    }

    this.titleService.setTitle('Login Here');
    this.user = new Users();
    this.logCred = new LoginCredential();
    this.mod = false;

  }

  login() {


    if (this.username === undefined || this.username.trim().length === 0) {
      swal.fire({
        title: 'Plase Enter User ID !',
        icon: 'warning'
      });
    }
    else if (this.password === undefined || this.password.trim().length === 0) {
      swal.fire({
        title: 'Plase Enter Password !',
        icon: 'warning'
      });
    }
    else {
      this.logServ.myLog(this.username, this.password).subscribe(
        data => {

          this.logCred = data;
          if (data.type === 'Admin') {


            localStorage.setItem('userid', data.userid);
            localStorage.setItem('password', data.password);
            localStorage.setItem('USER_TYPE', 'Admin');
            this.router.navigate(['admin/home']);
          }
          if (data.type === 'Motivator') {


            localStorage.setItem('userid', data.userid);
            localStorage.setItem('password', data.password);
            localStorage.setItem('USER_TYPE', 'Motivator');
            this.router.navigate(['motivator/home']);
          }

          if (data.type === 'User') {


            localStorage.setItem('userid', data.userid);
            localStorage.setItem('password', data.password);
            localStorage.setItem('USER_TYPE', 'User');
            this.router.navigate(['user/home']);
          }



        }

      );
    }



  }









}


















