import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Batches } from 'src/app/Model/batches';
import Swal from 'sweetalert2';
import { AdminOlderPost } from 'src/app/Model/Admin/admin-older-post';
import { UserViewPost } from 'src/app/Model/User/user-view-post';
import { MotiViewPost } from 'src/app/Model/Motivator/moti-view-post';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css']
})
export class AdminCreatePostComponent implements OnInit {

  batch: Batches[];
  olderPost: AdminOlderPost;

  userView: UserViewPost;
  motiView: MotiViewPost;

  constructor(private msgserv: AdminMsgService, private userv: UsersService, private logServ: LoginService, private route: Router, private titleService: Title) { }
  post: string;
  aud: string;
  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Create Post');
    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;
      }
    );
  }



  formSubmit() {


    if (this.post === undefined || this.post === "") {
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
    } else {
      this.sucAlert();

      // Save in Admin Older Post
      this.olderPost = new AdminOlderPost();
      this.olderPost.frm = "Admin";
      this.olderPost.to = this.aud;
      this.olderPost.post = this.post;
      this.olderPost.dtm = "DATE";
      this.msgserv.adminOlderPost(this.olderPost).subscribe();
      if (this.aud === 'Everyone') {
        this.UU();
        this.MM();

        
        // Store to all Users

      } else if (this.aud === 'Motivators') {
        this.MM();
      } else if (this.aud === 'Users') {
        this.UU();

      } else {
        this.UU();
      }

    }

  }

  sucAlert() {
    Swal.fire({
      title: 'Posted Successfully !',
      icon: 'success'
    });
  }

  UU() {
    this.userView = new UserViewPost();
    this.userView.frm = "Admin";
    this.userView.post = this.post;
    this.userView.aud = this.aud;
    this.userView.dtm = "DATE";
    this.userView.type = "Admin"
    this.msgserv.userPostViewPost(this.userView).subscribe();

  }
  MM() {
    this.motiView = new MotiViewPost();
    this.motiView.frm = "Admin";
    this.motiView.post = this.post;
    this.motiView.aud = this.aud;
    this.motiView.dtm = "DATE";
    this.motiView.type = "Admin"
    this.msgserv.motiPostViewPost(this.motiView).subscribe();
  }

}
