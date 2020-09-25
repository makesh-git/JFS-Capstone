import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { MotiBatch } from 'src/app/Model/moti-batch';
import { Motivator } from 'src/app/Model/motivator';
import { AssignMoti } from 'src/app/Model/assign-moti';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-assign-moti',
  templateUrl: './assign-moti.component.html',
  styleUrls: ['./assign-moti.component.css']
})
export class AssignMotiComponent implements OnInit {

  constructor(
    private userv: UsersService,
    private msgerv: AdminMsgService,
    private logServ: LoginService,
    private route: Router
    , private titleService: Title
  ) { }

  mot: MotiBatch[];
  mod: boolean;

  allMoti: Motivator[];
  assignMoti: AssignMoti[];

  newAssign: AssignMoti;
  bname: string;

  moti: string;

  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Assign Motivator');
    this.mod = false;
    this.newAssign = new AssignMoti();
    this.msgerv.adminGetAssignMoti().subscribe(
      data => {
        this.mot = data;

      }

    );

    this.userv.viewMoti().subscribe(
      data => {
        this.allMoti = data;
      }
    );

  }


  batVal(b: string) {
    this.mod = true;
    this.bname = b;

  }

  rem(b: string, id: string) {



    Swal.fire({
      title: 'Are you sure want to remove ?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Remove',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.msgerv.deAssignMoti(b, id).subscribe(
          data => {
            this.ngOnInit();
          }
        );


        Swal.fire({
          icon: 'success',
          title: 'Removed Successfully',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })



  }








  formSubmit() {

    if (this.moti === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Select Motivator To Assign',
      });

    }
    else {

      this.msgerv.isMotiAvail(this.moti, this.bname).subscribe(
        data => {
          this.assignMoti = data;

          if (this.assignMoti.length == 0) {
            this.sucAlert();
            this.newAssign.motiid = this.moti;
            this.newAssign.batch = this.bname;
            this.msgerv.assignNewMotivator(this.newAssign).subscribe(
              data => {
                this.ngOnInit();
              }
            );
          }
          else {
            this.failAlert();

          }
        }
      );
    }
  }


  failAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Sorry,Selected Motivator already in this batch',
    });
  }
  sucAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Motivator Assigned Successfully',
    });

  }

}
