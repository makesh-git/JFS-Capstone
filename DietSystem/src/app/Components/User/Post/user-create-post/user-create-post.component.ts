import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import Swal from 'sweetalert2';
import { UserOlderPost } from 'src/app/Model/User/user-older-post';
import { AdminViewPost } from 'src/app/Model/Admin/admin-view-post';
import { MotiViewPost } from 'src/app/Model/Motivator/moti-view-post';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create-post',
  templateUrl: './user-create-post.component.html',
  styleUrls: ['./user-create-post.component.css']
})
export class UserCreatePostComponent implements OnInit {

  CURRENT_USERID: string;

  userOld: UserOlderPost;
  admPost: AdminViewPost;
  motView: MotiViewPost;

  constructor(private msgserv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }
  aud: string;
  post: string;

  ngOnInit(): void {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Create Post');
    this.CURRENT_USERID = localStorage.getItem('userid');
  }

  formSubmit(f: NgForm) {

    if (this.post === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Post Cannot Be Empty !',
      });
    }
    else if (this.aud === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Select Valid Audience !',
      });
    }
    else {
      this.sucAlert();
      this.userOld = new UserOlderPost();
      this.userOld.frm = this.CURRENT_USERID;
      this.userOld.post = this.post;
      this.userOld.to = this.aud;
      this.userOld.dtm = "DATE";

      this.msgserv.userPostOlderPost(this.userOld).subscribe(
        data => {


          // f.resetForm();
          this.ngOnInit();
        }
      );

      if (this.aud === "Everyone") {
        this.MM();
        this.AA();
      }
      else if (this.aud === "Admin") {
        this.AA();
      }
      else {
        this.MM();
      }

      this.ngOnInit();
    }

  }
  MM() {
    this.motView = new MotiViewPost();
    this.motView.frm = this.CURRENT_USERID;
    this.motView.post = this.post;
    this.motView.dtm = "DATE";
    this.motView.aud = this.aud;
    this.motView.type = "User";
    this.msgserv.motiPostViewPost(this.motView).subscribe();

  }

  AA() {
    this.admPost = new AdminViewPost();
    this.admPost.frm = this.CURRENT_USERID;
    this.admPost.post = this.post;
    this.admPost.dtm = "DATE";
    this.admPost.aud = this.aud;
    this.admPost.type = "User";
    this.msgserv.adminPostViewPost(this.admPost).subscribe();

  }



  sucAlert() {

    Swal.fire({
      title: 'Posted Successfully !',
      icon: 'success',


    });
  }
}
