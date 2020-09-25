import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Model/users';
import { Batches } from 'src/app/Model/batches';
import { Groups } from 'src/app/Model/groups';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string;
  user: Users;

  ba: Batches;
  gr: Groups;

  CURRENT_USER_TYPE: string
  constructor(private userv: UsersService, private route: ActivatedRoute, private router: Router, private logServ: LoginService, private tit: Title) { }

  ngOnInit() {


    if (this.logServ.isAuth(localStorage.getItem('USER_TYPE')) === false) {
      this.router.navigate(['/login']);
    }
    this.CURRENT_USER_TYPE = localStorage.getItem('USER_TYPE');
    this.tit.setTitle("User Profile");
    this.user = new Users();
    this.name = this.route.snapshot.params['name'];

    this.userv.getOneUsers(this.name).subscribe(
      data => {
        this.user = data;
        this.ba = this.user.batch;
        this.gr = this.user.group;
      }
    );

  }

}
