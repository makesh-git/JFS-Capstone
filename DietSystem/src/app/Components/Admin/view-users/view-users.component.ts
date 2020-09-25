import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Users } from 'src/app/Model/users';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  title = "AAA";
  users: Users[];
  constructor(private userv: UsersService, private route: ActivatedRoute, private router: Router, private titleService: Title, private logServ: LoginService) {
    this.loadUsers();




  }


  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {
      this.router.navigate(['/login']);
    }
    this.setTit();









    this.loadUsers();
  }
  setTit() {
    this.titleService.setTitle("View Users");
  }

  loadUsers() {
    this.userv.ViewUsers().subscribe(
      data => {
        this.users = data;
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

        this.userv.removeUser(id).subscribe(
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
