import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { AdminOlderPost } from 'src/app/Model/Admin/admin-older-post';
import { MotiOlderPost } from 'src/app/Model/Motivator/moti-older-post';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-moti-older-post',
  templateUrl: './moti-older-post.component.html',
  styleUrls: ['./moti-older-post.component.css']
})
export class MotiOlderPostComponent implements OnInit {

  CURRENT_ID: string;
  con: boolean = true;
  constructor(private msgserv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }
  older: MotiOlderPost[];
  ngOnInit() {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Older Post');
    this.CURRENT_ID = localStorage.getItem('userid');
    this.msgserv.motiGetOlderPost(this.CURRENT_ID).subscribe(
      data => {
        this.older = data;
        if (this.older.length == 0) this.con = false;
      }
    );

  }


  removePost(p: MotiOlderPost) {

    Swal.fire({
      title: 'Are You Sure Want To Remove ?',


      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {

        this.msgserv.motiDeletePost(p).subscribe(
          data => {
            this.ngOnInit();
          }
        );


        Swal.fire({
          icon: 'success',
          title: 'Post Removed Successfully !',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {


      }
    })

  }

}
