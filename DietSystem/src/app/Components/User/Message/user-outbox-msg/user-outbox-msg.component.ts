import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { UserOutbox } from 'src/app/Model/User/user-outbox';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-outbox-msg',
  templateUrl: './user-outbox-msg.component.html',
  styleUrls: ['./user-outbox-msg.component.css']
})
export class UserOutboxMsgComponent implements OnInit {

  CURRENT_ID: string;
  con: boolean = true;
  constructor(private msgserv: AdminMsgService  ,private logServ: LoginService, private router: Router , private titleService: Title) { }
  out: UserOutbox[];
  ngOnInit(){
    if(this.logServ.isAuth('User') === false){
      this.router.navigate(['/login']);
  }
  this.titleService.setTitle('Message-Outbox');
    this.CURRENT_ID = localStorage.getItem('userid');
    this.msgserv.userGetOutbox(this.CURRENT_ID).subscribe(
      data =>{
        this.out = data;
        if(this.out.length == 0) this.con = false;
      }
    );
  }

  deleteMessage(msg: UserOutbox){
    Swal.fire({
      title: 'Are You Sure Want To Delete  ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Delete !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {


        this.msgserv.userDeleteMessage(msg).subscribe(
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
