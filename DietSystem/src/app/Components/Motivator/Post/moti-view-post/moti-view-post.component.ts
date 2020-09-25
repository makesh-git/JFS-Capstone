import { Component, OnInit } from '@angular/core';
import { MotiViewPost } from 'src/app/Model/Motivator/moti-view-post';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-moti-view-post',
  templateUrl: './moti-view-post.component.html',
  styleUrls: ['./moti-view-post.component.css']
})
export class MotiViewPostComponent implements OnInit {

  view: MotiViewPost[];
  con: boolean = true;
  constructor(private msgerv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('View Post');
    this.msgerv.motiGetViewPost().subscribe(
      data => {
        this.view = data;
        if (this.view.length == 0) {
          this.con = false;
        }
      }
    );
  }

  removePost(post: MotiViewPost) {

    Swal.fire({
      title: 'Are You Sure Want To Remove ?',


      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {

        this.msgerv.motiDeleteViewPost(post).subscribe(
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
