import { Component, OnInit } from '@angular/core';
import { UserInbox } from 'src/app/Model/User/user-inbox';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-inbox-msg',
  templateUrl: './user-inbox-msg.component.html',
  styleUrls: ['./user-inbox-msg.component.css']
})
export class UserInboxMsgComponent implements OnInit {

  CURRENT_ID: string;
con:boolean = true;
  constructor( private msgerv: AdminMsgService  ,private logServ: LoginService, private router: Router , private titleService: Title) { }
inbox: UserInbox[];
  ngOnInit(): void {
    if(this.logServ.isAuth('User') === false){
      this.router.navigate(['/login']);
  }
  this.titleService.setTitle('Message-Inbox');
    this.CURRENT_ID = localStorage.getItem('userid');

    this.msgerv.userGetInbox(this.CURRENT_ID).subscribe(
      data =>{
        this.inbox = data;
        if(this.inbox.length == 0) this.con = false;
      }
    );

  }



  removeMessage(msg: UserInbox){

    Swal.fire({
      title: 'Are You Sure Want To Delete ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Delete !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {



        this.msgerv.userDeleteInbox(msg).subscribe(
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
