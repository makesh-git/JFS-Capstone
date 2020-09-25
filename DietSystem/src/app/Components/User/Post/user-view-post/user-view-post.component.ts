import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { UserViewPost } from 'src/app/Model/User/user-view-post';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-view-post',
  templateUrl: './user-view-post.component.html',
  styleUrls: ['./user-view-post.component.css']
})
export class UserViewPostComponent implements OnInit {

  CURRENT_ID: string;
  view: UserViewPost[];
  con: boolean = true;
  constructor(private msgserv: AdminMsgService  ,private logServ: LoginService, private router: Router , private titleService: Title) { }

  ngOnInit(): void {
    if(this.logServ.isAuth('User') === false){
      this.router.navigate(['/login']);
  }
  this.titleService.setTitle('View Post');
    this.CURRENT_ID =localStorage.getItem('userid');
    this.msgserv.userGetViewPost(this.CURRENT_ID).subscribe(
      data =>{
        this.view = data;
        if(this.view.length == 0) this.con = false;
      }
    );
  }


  removePost(post: UserViewPost){

    Swal.fire({
      title: 'Are You Sure Want To Remove ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {

        this.msgserv.userDeleteViewPost(post).subscribe(
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
