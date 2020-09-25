import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Motivator } from 'src/app/Model/motivator';
import Swal from 'sweetalert2';
import { UserOutbox } from 'src/app/Model/User/user-outbox';
import { AdminInbox } from 'src/app/Model/Admin/admin-inbox';
import { MotiInbox } from 'src/app/Model/Motivator/moti-inbox';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { CurrentUser } from 'src/app/Model/current-user';
import { Users } from 'src/app/Model/users';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-user-create-msg',
  templateUrl: './user-create-msg.component.html',
  styleUrls: ['./user-create-msg.component.css']
})
export class UserCreateMsgComponent implements OnInit {

  rec: string;
  mesg: string;
  CURRENT_USERID: string;
  out: UserOutbox;
  admInb: AdminInbox;
  motiInb: MotiInbox;

  pus: Users;

  constructor(private userv: UsersService, private msgserv: AdminMsgService, private localStorage: LocalStorage
    , private logServ: LoginService, private router: Router, private titleService: Title) { }

  moti: Motivator[];
  ngOnInit() {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Create Message');
    this.CURRENT_USERID = localStorage.getItem('userid');



    this.pus = this.msgserv.cus;



    this.userv.viewMoti().subscribe(
      data => {
        this.moti = data;
      }
    );
  }


  formSubmit() {


    //localStorage.removeItem('blog');

    if (this.mesg === undefined || this.mesg.trim().length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Message Cannot Be Empty !',
      });
    }
    else if (this.rec === undefined) {
      // Show error alert
      Swal.fire({
        icon: 'warning',
        title: 'Please Select Valid Recepient !',
      });
    }
    else {
      //show succes alert
      this.sucAlert();

      // save moti out box..
      this.out = new UserOutbox();
      this.out.frm = this.CURRENT_USERID;
      this.out.to = this.rec;
      this.out.mesg = this.mesg;
      this.out.type = this.rec;
      this.out.dtm = "DATE";
      if (this.rec === 'Admin') {
        this.out.type = "Admin";
        //Save in admin inbox
        this.admInb = new AdminInbox();
        this.admInb.frm = this.CURRENT_USERID;
        this.admInb.to = this.rec;
        this.admInb.mesg = this.mesg;
        this.admInb.dtm = "DATE";
        this.admInb.type = "User";

        this.msgserv.adminPostInbox(this.admInb).subscribe();
      }
      else {
        this.out.type = "Motivator";

        // save in user inbox
        this.motiInb = new MotiInbox();
        this.motiInb.frm = this.CURRENT_USERID;
        this.motiInb.to = this.rec;
        this.motiInb.mesg = this.mesg;
        this.motiInb.type = "User"
        this.motiInb.dtm = "DATE";

        this.msgserv.motiPostInbox(this.motiInb).subscribe();
      }

      this.msgserv.userPostOutbox(this.out).subscribe();


    }

  }

  sucAlert() {
    Swal.fire({
      title: 'Message Sent Successfully !',
      icon: 'success'
    });
  }

}
