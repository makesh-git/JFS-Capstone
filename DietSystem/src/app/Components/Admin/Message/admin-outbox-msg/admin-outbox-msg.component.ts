import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { AdminOutbox } from 'src/app/Model/Admin/admin-outbox';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-outbox-msg',
  templateUrl: './admin-outbox-msg.component.html',
  styleUrls: ['./admin-outbox-msg.component.css']
})
export class AdminOutboxMsgComponent implements OnInit {

  con: boolean = true;
  constructor(private mserv: AdminMsgService, private logServ: LoginService, private route: Router, private titleService: Title) { }
  out: AdminOutbox[];
  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Message-Outbox');
    this.mserv.adminGetOutbox().subscribe(
      data => {
        this.out = data;


        if (this.out.length == 0) {
          this.con = false;
        }
      }
    );
  }

  deleteMessage(msg: AdminOutbox) {
    Swal.fire({
      title: 'Are You Sure Want To Delete  ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Delete !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {


        this.mserv.adminDeleteMessage(msg).subscribe(
          data => {
            this.ngOnInit();
          }
        );

        Swal.fire({
          icon: 'success',
          title: 'Message Deleted Successfully !',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
    
      }
    })




  }

}
