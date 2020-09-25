import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { Users } from 'src/app/Model/users';
import { Motivator } from 'src/app/Model/motivator';
import Swal from 'sweetalert2';
import { AdminOutbox } from 'src/app/Model/Admin/admin-outbox';
import { UserInbox } from 'src/app/Model/User/user-inbox';
import { MotiInbox } from 'src/app/Model/Motivator/moti-inbox';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-msg',
  templateUrl: './admin-msg.component.html',
  styleUrls: ['./admin-msg.component.css']
})
export class AdminMsgComponent implements OnInit {

  users: Users[];
  moti: Motivator[];

  out: AdminOutbox;
  uinb: UserInbox;
  minb: MotiInbox;


  mesg: string;
  recType: string;
  receiver: string;


  constructor(private titleService: Title, private userv: UsersService, private msgserv: AdminMsgService, private logServ: LoginService, private route: Router) { }

  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }

    this.titleService.setTitle("Message-Create");
    this.userv.ViewUsers().subscribe(
      data => { this.users = data; }
    );
    this.userv.viewMoti().subscribe(
      data => { this.moti = data; }
    );
  }


  formSubmit() {
    if (this.mesg === undefined || this.mesg.trim().length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Message Cannot Be Empty !',
      });

    }

    else if (this.receiver === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Select Valid Recepient !',
      });

    } else {
      // Success alert..
      this.sucAlert();
      // Storing in Admin Outbox..
      this.out = new AdminOutbox();
      this.out.frm = "Admin";
      this.out.to = this.receiver;
      this.out.mesg = this.mesg;
      this.out.dtm = '12';
      this.out.type = this.recType;
      this.msgserv.adminOutbox(this.out).subscribe();

      // Storing in Inbox based on type of receiver..
      if (this.recType === 'User') {

        this.uinb = new UserInbox();
        this.uinb.frm = 'Admin';
        this.uinb.to = this.receiver;
        this.uinb.mesg = this.mesg;
        this.uinb.dtm = 'DATE';
        this.uinb.type = 'Admin';
        this.msgserv.userPostInbox(this.uinb).subscribe();
        // Storing in user inbox..

      } else {
        // Storing in motivator inbox..
        this.minb = new MotiInbox();
        this.minb.frm = 'Admin';
        this.minb.to = this.receiver;
        this.minb.mesg = this.mesg;
        this.minb.dtm = 'DATE';
        this.minb.type = 'Admin';
        this.msgserv.motiPostInbox(this.minb).subscribe();
      }

    }
  }


  sucAlert() {
    Swal.fire({
      title: 'Message Sent Successfully !',
      icon: 'success'
    });
  }

}
