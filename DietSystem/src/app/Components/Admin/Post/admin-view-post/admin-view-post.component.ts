import { Component, OnInit } from '@angular/core';
import { AdminViewPost } from 'src/app/Model/Admin/admin-view-post';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  con: boolean = true;

  constructor(private msgserv: AdminMsgService,private logServ: LoginService, private route: Router, private titleService: Title) { }
  view: AdminViewPost[];
  ngOnInit(): void {
    if(this.logServ.isAuth('Admin') === false){
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('View Post');
    this.msgserv.getAdminViewPost().subscribe(
      data =>{
        this.view = data;
        console.log("ADMIN VWWW - "+this.view)
        if(this.view.length ==0){
          this.con = false;
        }



      }
    );
  }

  removePost(post: AdminViewPost){

    Swal.fire({
      title: 'Are You Sure Want To Remove ?',
      // titleText: 'User will be completely removed from program !',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {

        this.msgserv.adminDeleteViewPost(post).subscribe(
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
