import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/Model/users';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Batches } from 'src/app/Model/batches';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-convert-user',
  templateUrl: './convert-user.component.html',
  styleUrls: ['./convert-user.component.css']
})
export class ConvertUserComponent implements OnInit {

  constructor(private titleService: Title, private logServ: LoginService,private route:Router,
    private userv: UsersService,private msgServ: AdminMsgService) { }


  users: Users[];
  batch: Batches[];
  mod: boolean;
  selBatch: Batches;
  selUser: Users;
  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Convert User-Motivator');
    this.mod = false;
    this.userv.ViewUsers().subscribe(
      data => {
        this.users = data;
      }
    );
    this.userv.getAllBatches().subscribe(
      data=>{
        this.batch = data;
      }
    );
  }


  convert(u: Users){
    this.mod = true;
    this.selUser = u;
  }
  formSubmit(){
    this.selUser.batch = this.selBatch;
    this.msgServ.convertUserToMoti(this.selUser).subscribe(
      data=>{
        Swal.fire({
          icon: 'success',
          title: 'Successfully  Converted User into Motivator !',

        });

        this.mod = false;
        this.ngOnInit();
      }
    );

  }

}
