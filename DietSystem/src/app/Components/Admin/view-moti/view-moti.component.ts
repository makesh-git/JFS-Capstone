import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Motivator } from 'src/app/Model/motivator';
import swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-view-moti',
  templateUrl: './view-moti.component.html',
  styleUrls: ['./view-moti.component.css']
})
export class ViewMotiComponent implements OnInit {

  moti: Motivator[];
  constructor(private userv: UsersService, private titleService: Title, private route: ActivatedRoute, private router: Router, private logServ: LoginService) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {
      this.router.navigate(['/login']);
    }
    this.setTit();
    this.loadData();
  }

  setTit() {
    this.titleService.setTitle("View Motivators");
  }

  loadData() {
    this.userv.viewMoti().subscribe(
      data => {
        this.moti = data;
      }
    );

  }

  del(id: string) {



    swal.fire({
      title: 'Are You Sure Want To Remove ?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {

        this.userv.removeMoti(id).subscribe(
          result => this.ngOnInit()

        );

        swal.fire({
          icon: 'success',
          title: 'Removed Successfully !',
        });
      } else if (result.dismiss === swal.DismissReason.cancel) {

      }
    })
  }

}
