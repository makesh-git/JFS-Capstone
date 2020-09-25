import { Component, OnInit } from '@angular/core';
import { MotiInbox } from 'src/app/Model/Motivator/moti-inbox';
import { MotiOutbox } from 'src/app/Model/Motivator/moti-outbox';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-moti-inbox-msg',
  templateUrl: './moti-inbox-msg.component.html',
  styleUrls: ['./moti-inbox-msg.component.css']
})
export class MotiInboxMsgComponent implements OnInit {

  inbox: MotiInbox[];
  CURRENT_ID: string;
  con: boolean = true;
  // outbox: MotiOutbox[];
  constructor(private msgserv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Message-Inbox');
    this.CURRENT_ID = localStorage.getItem('userid');
    this.msgserv.motiGetInbox(this.CURRENT_ID).subscribe(
      data => {
        this.inbox = data;
        if (this.inbox.length == 0) this.con = false;


      }
    );
  }


  removeMessage(msg: MotiInbox) {

    Swal.fire({
      title: 'Are You Sure Want To Delete ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Delete !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {



        this.msgserv.motiDeleteInbox(msg).subscribe(
          data => {
            this.ngOnInit();
          }
        );

        Swal.fire({
          icon: 'success',
          title: 'Message Deleted Successfully !',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // swal.fire(
        //   'Cancelled',
        //   'Your imaginary file is safe :)',
        //   'error'
        // )
      }
    })


  }
}
