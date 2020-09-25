import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Users } from 'src/app/Model/users';
import Swal from 'sweetalert2';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { AdminInbox } from 'src/app/Model/Admin/admin-inbox';
import { UserInbox } from 'src/app/Model/User/user-inbox';
import { MotiOutbox } from 'src/app/Model/Motivator/moti-outbox';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-moti-create-msg',
  templateUrl: './moti-create-msg.component.html',
  styleUrls: ['./moti-create-msg.component.css']
})
export class MotiCreateMsgComponent implements OnInit {

  CURRENT_ID: string;
  mesg: string;
  recepient: string;

  motiOut: MotiOutbox;
  adInbox: AdminInbox;
  userInbox: UserInbox;

  constructor(private userv: UsersService, private mgserv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  user: Users[];
  ngOnInit() {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Create Message');
    this.CURRENT_ID = localStorage.getItem('userid');
    this.userv.ViewUsers().subscribe(
      data => {
        this.user = data;
      }
    );
  }


  formSubmit() {
    if (this.mesg === undefined || this.mesg.trim().length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Message Cannot Be Empty !',
      });
    }

    else if (this.recepient === undefined) {
      //Show error alert
      Swal.fire({
        icon: 'warning',
        title: 'Please Select Valid Recepient !',
      });
    }
    else {
      //show succes alert
      this.sucAlert();

      // save moti out box..
      this.motiOut = new MotiOutbox();
      this.motiOut.frm = this.CURRENT_ID;
      this.motiOut.to = this.recepient;
      this.motiOut.mesg = this.mesg;
      this.motiOut.type = this.recepient;
      this.motiOut.dtm = "DATE";
      if (this.recepient === 'Admin') {
        this.motiOut.type = "Admin";
        //Save in admin inbox
        this.adInbox = new AdminInbox();
        this.adInbox.frm = this.CURRENT_ID;
        this.adInbox.to = this.recepient;
        this.adInbox.mesg = this.mesg;
        this.adInbox.dtm = "DATE";
        this.adInbox.type = "Motivator";

        this.mgserv.adminPostInbox(this.adInbox).subscribe();
      }
      else {
        this.motiOut.type = "User";

        // save in user inbox
        this.userInbox = new UserInbox();
        this.userInbox.frm = this.CURRENT_ID;
        this.userInbox.to = this.recepient;
        this.userInbox.mesg = this.mesg;
        this.userInbox.type = "Motivator"
        this.userInbox.dtm = "DATE";


        this.mgserv.userPostInbox(this.userInbox).subscribe();
      }


      this.mgserv.motiPostOutbox(this.motiOut).subscribe();
    }
  }


  sucAlert() {
    Swal.fire({
      title: 'Message Sent Successfully !',
      icon: 'success'
    });
  }

}
