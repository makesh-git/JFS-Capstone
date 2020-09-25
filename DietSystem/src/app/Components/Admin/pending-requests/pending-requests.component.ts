import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { RegUsers } from 'src/app/Model/reg-users';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  regUser: RegUsers[];
  con: boolean = true;
  constructor(private userv: UsersService, private titleService: Title, private logServ: LoginService, private route: Router) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle("Pending Requests");
    this.load();
  }

  load() {
    this.userv.getRegUsers().subscribe(
      data => {
        this.regUser = data;
        if (this.regUser.length == 0) this.con = false;
      }
    );
  }

}
