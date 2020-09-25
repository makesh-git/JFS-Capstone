import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { Users } from 'src/app/Model/users';
import { LoginService } from 'src/app/Services/login.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private userv: UsersService, private msgerv: AdminMsgService, private logServ: LoginService,
    private route: Router, private titleService: Title) { }

  user: Users[];

  ngOnInit(): void {
    if (this.logServ.isAuth('Motivator') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('View All');


    this.userv.ViewUsers().subscribe(
      data => {
        this.user = data;
      }
    );
  }

}
