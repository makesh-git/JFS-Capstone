import { Component, OnInit } from '@angular/core';
import { UserDailylog } from 'src/app/Model/User/user-dailylog';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { getLocaleDateTimeFormat, DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Users } from 'src/app/Model/users';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-dailylog',
  templateUrl: './update-dailylog.component.html',
  styleUrls: ['./update-dailylog.component.css']
})
export class
  UpdateDailylogComponent implements OnInit {


  CURRENT_ID: string;
  CURRENT_USER: Users;
  ;
  constructor(private msgerv: AdminMsgService, private userv: UsersService, private logServ: LoginService, private router: Router, private titleService: Title) { }
  dlg: UserDailylog;
  availUserlog: UserDailylog[];
  flag: boolean;
  ngOnInit(): void {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Update Daily Log');
    this.CURRENT_ID = localStorage.getItem('userid');
    this.flag = true;
    this.userv.getOneUsers(this.CURRENT_ID).subscribe(
      data => {
        this.CURRENT_USER = data;
      }
    );
    this.dlg = new UserDailylog();
  }

  formSubmit() {



    if (this.dlg.datee === undefined || this.dlg.datee.trim().length === 0) {
      Swal.fire({
        title: 'Please Select Valid Date !',
        icon: 'warning'
      })
    }
    else if (this.dlg.breakfast === undefined || this.dlg.breakfast.trim().length === 0) {
      this.enterAlert('Breakfast');
    }
    else if (this.dlg.lunch === undefined || this.dlg.lunch.trim().length === 0) {
      this.enterAlert('Lunch');
    }
    else if (this.dlg.dinner === undefined || this.dlg.dinner.trim().length === 0) {
      this.enterAlert('Dinner');
    }
    else if (this.dlg.fruits === undefined || this.dlg.fruits.trim().length === 0) {
      this.enterAlert('Fruits & Vegetables');
    }

    else if (this.dlg.workout === undefined || this.dlg.workout.trim().length === 0) {
      this.enterAlert('Wrokouts');
    }
    else {


      this.dlg.frm = this.CURRENT_ID;
      this.dlg.batch = this.CURRENT_USER.batch.batchname;


      this.msgerv.getDailyLogByDate(this.dlg.datee).subscribe(
        data => {
          this.availUserlog = data;
          for (let i = 0; i < this.availUserlog.length; i++) {
            if (this.availUserlog[i].datee === this.dlg.datee && this.availUserlog[i].frm === this.CURRENT_ID) {
              this.flag = false;
            }
          }

          if (this.flag === true) {


            this.sucAlert();
            this.msgerv.userPostDailylog(this.dlg).subscribe(
              data => {
                this.ngOnInit();
              }
            );
          }
          else {


            this.ngOnInit();
            Swal.fire({
              title: 'You have already updated for selected date !',
              icon: 'error'
            });
          }
        }
      );


    }
  }

  sucAlert() {
    Swal.fire({
      title: 'Updated Successfully !',
      icon: 'success'
    });
  }

  enterAlert(s: string) {
    Swal.fire({
      title: 'Please Enter ' + s + ' Details !',
      icon: 'warning'
    })
  }

}
