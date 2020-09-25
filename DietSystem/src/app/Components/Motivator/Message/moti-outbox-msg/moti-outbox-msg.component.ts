import { Component, OnInit } from '@angular/core';
import { MotiOutbox } from 'src/app/Model/Motivator/moti-outbox';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-moti-outbox-msg',
  templateUrl: './moti-outbox-msg.component.html',
  styleUrls: ['./moti-outbox-msg.component.css']
})
export class MotiOutboxMsgComponent implements OnInit {

  outbox: MotiOutbox[];
  CURRENT_ID: string;
  con: boolean = true;
  constructor(private msgserv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Message-Outbox');
    this.CURRENT_ID = localStorage.getItem('userid');
    this.msgserv.motiGetOutbox(this.CURRENT_ID).subscribe(
      data => {
        this.outbox = data;
        if (this.outbox.length == 0) this.con = false;
      }
    );
  }


  deleteMessage(msg: MotiOutbox) {
    Swal.fire({
      title: 'Are You Sure Want To Delete  ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Delete !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {


        this.msgserv.motiDeleteMessage(msg).subscribe(
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
