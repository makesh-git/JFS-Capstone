import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { Groups } from 'src/app/Model/groups';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsersService } from 'src/app/Services/Mesg/users.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {


  constructor(private msgserv: AdminMsgService, private logServ: LoginService,
    private userv: UsersService, private route: Router, private titleService: Title) { }

  group: Groups;
  availGroups: Groups[];
  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {


      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Create Group');
    this.group = new Groups();
  }

  formSubmit() {

    if (this.group.groupname === undefined || this.group.groupname.trim().length == 0) {
      Swal.fire({
        title: 'Please Enter Group Name !',
        icon: 'warning'
      });
    }
    else if (this.group.groupid === undefined || this.group.groupid.trim().length == 0) {
      Swal.fire({
        title: 'Please Enter Group Id !',
        icon: 'warning'
      });
    }
    else if (this.group.groupdesc === undefined || this.group.groupdesc.trim().length == 0) {
      Swal.fire({
        title: 'Please Enter Group Description !',
        icon: 'warning'
      });
    }
    else {



      this.msgserv.searchByGroup(this.group.groupname).subscribe(
        data =>{
          this.availGroups = data;
          if(this.availGroups.length === 0){
            this.sucAlert();

            this.group.strtdate = "DATE";
            this.msgserv.adminPostCreateGroup(this.group).subscribe(
              data => {
                this.route.navigate(['/view/batch-group']);
              }
            );
          }
          else{
            Swal.fire({
              title: 'Group with same name is present !',
              icon: 'error'
            });
          }
        }
      );


    }
  }

  sucAlert() {
    Swal.fire({
      title: 'Group Created Successfully !',
      icon: 'success'
    });
  }
}
