import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { Batches } from 'src/app/Model/batches';
import { Groups } from 'src/app/Model/groups';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { variable } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
import { MotiOlderPost } from 'src/app/Model/Motivator/moti-older-post';
import { AdminViewPost } from 'src/app/Model/Admin/admin-view-post';
import { UserViewPost } from 'src/app/Model/User/user-view-post';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-moti-create-post',
  templateUrl: './moti-create-post.component.html',
  styleUrls: ['./moti-create-post.component.css']
})
export class MotiCreatePostComponent implements OnInit {

  CURRENT_ID: string;
  batch: Batches[];
  group: Groups[];
  batchAndGroup: string[];


  post: string;
  aud: string;

  older: MotiOlderPost;
  admPost: AdminViewPost;
  usePost: UserViewPost;

  constructor(private userv: UsersService, private meserv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Create Post');
    this.CURRENT_ID = localStorage.getItem('userid')

    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;
      }
    );
    this.userv.getAllGroups().subscribe(
      data => {
        this.group = data;
      }
    );
    this.meserv.batchAndGroup().subscribe(
      data => {
        this.batchAndGroup = data;
      }
    );
  }

  formSubmit() {

    if (this.post === undefined || this.post.trim().length === 0) {
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

      // Save in Moti Older Post
      this.older = new MotiOlderPost();
      this.older.frm = this.CURRENT_ID;
      this.older.to = this.aud;
      this.older.post = this.post;
      this.older.dtm = 'DATE';
      this.meserv.motiPostOlderPost(this.older).subscribe();
      if (this.aud === 'Everyone') {
        this.UU();
        this.AA();
        // Store to all Users

      }
      else if (this.aud === 'Admin') {
        this.AA();
      }
      else if (this.aud === 'Users') {
        this.UU();

      }
      else {
        this.UU();
      }

    }

  }

  UU() {
    this.usePost = new UserViewPost();
    this.usePost.frm = this.CURRENT_ID;
    this.usePost.post = this.post;
    this.usePost.dtm = "DATE";
    this.usePost.aud = this.aud;
    this.usePost.type = "Motivator";
    this.meserv.userPostViewPost(this.usePost).subscribe();

  }

  AA() {
    this.admPost = new AdminViewPost();
    this.admPost.frm = this.CURRENT_ID;
    this.admPost.post = this.post;
    this.admPost.dtm = "DATE";
    this.admPost.aud = this.aud;
    this.admPost.type = "Motivator";
    this.meserv.adminPostViewPost(this.admPost).subscribe();

  }


  sucAlert() {
    Swal.fire({
      title: 'Posted Successfully !',
      icon: 'success'
    });
  }








}
