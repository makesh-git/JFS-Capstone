import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Model/users';
import { Batches } from 'src/app/Model/batches';
import { Groups } from 'src/app/Model/groups';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-view-profile',
  templateUrl: './user-view-profile.component.html',
  styleUrls: ['./user-view-profile.component.css']
})
export class UserViewProfileComponent implements OnInit {

  name: string;
  user: Users;

  ba: Batches;
  gr: Groups;
  constructor(private userv: UsersService, private route: ActivatedRoute, private logServ: LoginService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('View Profile');
    this.user = new Users();
    this.name = localStorage.getItem('userid');

    this.userv.getOneUsers(this.name).subscribe(
      data => {
        this.user = data;
        this.ba = this.user.batch;
        this.gr = this.user.group;
      }
    );

  }

}
