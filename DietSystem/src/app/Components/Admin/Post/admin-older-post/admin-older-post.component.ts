import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { AdminOlderPost } from 'src/app/Model/Admin/admin-older-post';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MotiOlderPost } from 'src/app/Model/Motivator/moti-older-post';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-older-post',
  templateUrl: './admin-older-post.component.html',
  styleUrls: ['./admin-older-post.component.css']
})
export class AdminOlderPostComponent implements OnInit {

  con: boolean = true;
  constructor(private msgserv: AdminMsgService, private logServ: LoginService, private route: Router, private titleService: Title) { }
  olderPost: AdminOlderPost[];
  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Older Post');
    this.msgserv.getAdminOlderPost().subscribe(
      data => {
        this.olderPost = data;
        if (this.olderPost.length == 0) {
          this.con = false;
        }
      }
    );

  }


  removePost(p: MotiOlderPost) {

    Swal.fire({
      title: 'Are You Sure Want To Remove ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {

        this.msgserv.adminDeletePost(p).subscribe(
          data => {
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
