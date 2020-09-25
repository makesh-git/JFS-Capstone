import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegUsers } from 'src/app/Model/reg-users';
import { Batches } from 'src/app/Model/batches';
import { Groups } from 'src/app/Model/groups';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reg-action',
  templateUrl: './reg-action.component.html',
  styleUrls: ['./reg-action.component.css']
})
export class RegActionComponent implements OnInit {

  regUser: RegUsers;
  name: string;
  batch: Batches[];
  group: Groups[];

  selBatch: string; selGroup: string;
  reason: string;

  //Modal variables
  appModal: boolean; rejModal: boolean;
  constructor(private userv: UsersService, private route: ActivatedRoute, private router: Router, private logServ: LoginService, private titleService: Title) { }

  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Request Action');
    this.regUser = new RegUsers();

    this.name = this.route.snapshot.params['name'];

    this.userv.getOneRegUsers(this.name).subscribe(
      data => {
        this.regUser = data;
      }
    );

    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;
      }
    );

    this.userv.getAllGroups().subscribe(data => { this.group = data });


  }


  appSubmit() {

    if (this.selBatch == undefined) {


      swal.fire({
        title: 'Please Select Batch',
        icon: 'warning'
      });
    }
    else if (this.selGroup == undefined) {
      swal.fire({

        title: 'Please Select Group',
        icon: 'warning'
      });
    }
    else {

      this.userv.approveUser(this.name, this.selBatch, this.selGroup).subscribe(
        result => {
          this.router.navigate(['/admin/pending-request']);
          swal.fire({
            title: 'Approved  Successfully!',
            icon: 'success'
          });
        }
      );

    }

  }

  rejSubmit() {


    if (this.reason == undefined || this.reason.trim().length === 0) {


      swal.fire({

        title: 'Please Mention Reason',
        icon: 'warning'
      });
    }
    else {
      this.userv.rejectUser(this.name, this.reason).subscribe(
        data => {
          this.router.navigate(['/admin/pending-request']);

        }
      )
      swal.fire({
        title: 'Rejected Successfully!',
        icon: 'success'
      });
    }

  }

}
