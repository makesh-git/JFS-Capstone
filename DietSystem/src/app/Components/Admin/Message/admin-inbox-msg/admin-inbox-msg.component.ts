import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { AdminInbox } from 'src/app/Model/Admin/admin-inbox';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-inbox-msg',
  templateUrl: './admin-inbox-msg.component.html',
  styleUrls: ['./admin-inbox-msg.component.css']
})
export class AdminInboxMsgComponent implements OnInit {

  constructor(private msgerv: AdminMsgService,private logServ: LoginService, private route: Router, private titleService: Title) { }
  con: boolean = true;

  inbox: AdminInbox[];
  ngOnInit(): void {
    if(this.logServ.isAuth('Admin') === false){
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Message-Inbox');
    this.con = true;
    this.msgerv.adminGetInbox().subscribe(
      data =>{
        this.inbox = data;
        if(this.inbox.length == 0) this.con = false;

      }
    );

  }

  removeMessage(msg: AdminInbox){

    Swal.fire({
      title: 'Are You Sure Want To Delete ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Delete !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {



        this.msgerv.adminDeleteInbox(msg).subscribe(
          data =>{
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
