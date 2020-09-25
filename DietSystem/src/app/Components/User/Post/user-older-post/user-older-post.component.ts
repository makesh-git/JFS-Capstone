import { Component, OnInit } from '@angular/core';
import { UserOlderPost } from 'src/app/Model/User/user-older-post';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-older-post',
  templateUrl: './user-older-post.component.html',
  styleUrls: ['./user-older-post.component.css']
})
export class UserOlderPostComponent implements OnInit {

  CURRENT_ID: string;
  con: boolean = true;
  constructor(private msgserv: AdminMsgService  ,private logServ: LoginService, private router: Router , private titleService: Title) { }
  older: UserOlderPost[];
  ngOnInit() {
    if(this.logServ.isAuth('User') === false){
      this.router.navigate(['/login']);
  }
  this.titleService.setTitle('Older Post');
    this.CURRENT_ID = localStorage.getItem('userid');

    this.msgserv.userGetOlderPost(this.CURRENT_ID).subscribe(
      data =>{
        this.older = data;
        if(this.older.length == 0) this.con = false;
      }
    );
  }


  removePost(p: UserOlderPost){

    Swal.fire({
      title: 'Are You Sure Want To Remove ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {

        this.msgserv.userDeletePost(p).subscribe(
          data =>{
            this.ngOnInit();
          }
        );


        Swal.fire({
          icon: 'success',
          title: 'Post Removed Successfully !',
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
