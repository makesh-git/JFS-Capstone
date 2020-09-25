import { Component, OnInit } from '@angular/core';
import { Batches } from 'src/app/Model/batches';
import { Motivator } from 'src/app/Model/motivator';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Users } from 'src/app/Model/users';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Groups } from 'src/app/Model/groups';

@Component({
  selector: 'app-user-view-batch',
  templateUrl: './user-view-batch.component.html',
  styleUrls: ['./user-view-batch.component.css']
})
export class UserViewBatchComponent implements OnInit {

  constructor(private msgerv: AdminMsgService, private userv: UsersService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  CURRENR_USER_BATCH: string;
  CURRENR_USER_GROUP: string;
  CURRENT_USER_ID: string;

  user: Users;
  batch: Batches[];
  group: Groups[];
  moti: Motivator[];

  ngOnInit(): void {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('View Batch');
    this.CURRENT_USER_ID = localStorage.getItem('userid');

    this.userv.getOneUsers(this.CURRENT_USER_ID).subscribe(
      data => {
        this.user = data;
        this.CURRENR_USER_BATCH = this.user.batch.batchname;
        this.CURRENR_USER_GROUP = this.user.group.groupname;
        this.msgerv.batchMotivatorDetails(this.CURRENR_USER_BATCH).subscribe(
          data => {
            this.moti = data;
          }
        )
      }
    );





    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;
      }
    );

    this.userv.getAllGroups().subscribe(
      data =>{
        this.group = data;
      }
    );
  }

}
