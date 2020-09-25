import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { UserMonthlymeas } from 'src/app/Model/User/user-monthlymeas';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-monthlymeas',
  templateUrl: './update-monthlymeas.component.html',
  styleUrls: ['./update-monthlymeas.component.css']
})
export class UpdateMonthlymeasComponent implements OnInit {

  AllMonths: string[];
  constructor(private msgserv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) {
    this.AllMonths = ['January', 'February ', 'March ', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'];
  }
  meas: UserMonthlymeas;


  availMeas: UserMonthlymeas[];
  flag: boolean;
  mon: string[];
  ngOnInit(): void {
    this.flag = true;
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Update Monthly Measurement');


    this.meas = new UserMonthlymeas();
  }

  formSubmit() {



    if (this.meas.month === undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Please select Valid Month',
      });
    }

    else if (this.meas.height === undefined || this.meas.height === null || parseFloat(this.meas.height) < 0) {
      this.enterError('Height');
    }
    else if (this.meas.weight === undefined || this.meas.weight === null  || parseFloat(this.meas.weight) < 0 ) {
      this.enterError('Weight');
    }
    else if (this.meas.chest === undefined || this.meas.chest === null  || parseFloat(this.meas.chest) < 0) {
      this.enterError('Chest');
    }
    else if (this.meas.waist === undefined || this.meas.waist === null  || parseFloat(this.meas.waist) < 0) {
      this.enterError('Waist');
    }
    else if (this.meas.shoulder === undefined || this.meas.shoulder === null  || parseFloat(this.meas.shoulder) < 0) {
      this.enterError('Shoulder');
    }
    else if (this.meas.biceps === undefined || this.meas.biceps === null  || parseFloat(this.meas.biceps) < 0) {
      this.enterError('Biceps');
    }
    else if (this.meas.forearm === undefined || this.meas.forearm === null  || parseFloat(this.meas.forearm) < 0) {
      this.enterError('Forearm');
    }
    else if (this.meas.legs === undefined || this.meas.legs === null  || parseFloat(this.meas.legs) < 0) {
      this.enterError('Leg');
    }

    else if (this.meas.thigh === undefined || this.meas.thigh === null  || parseFloat(this.meas.thigh) < 0) {
      this.enterError('Thigh');
    }

    else if (this.meas.hip === undefined || this.meas.hip === null  || parseFloat(this.meas.hip) < 0) {
      this.enterError('Hip');
    }



    else {




      this.meas.userid = localStorage.getItem('userid');
      this.msgserv.adminGetMonthlyMeas(localStorage.getItem('userid')).subscribe(
        data => {
          this.availMeas = data;
          for (let i = 0; i < this.availMeas.length; i++) {
            if (this.availMeas[i].month === this.meas.month) {
              this.flag = false;
            }
          }

          if (this.flag === true) {
            this.sucAlert();
            this.msgserv.userPostMonthlyMeas(this.meas).subscribe(
              data => {
                this.ngOnInit();
              }
            );

          }
          else {
            this.ngOnInit();
            Swal.fire({
              title: 'You have already upadted for selected month !',
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


  enterError(s: string) {
    Swal.fire({
      title: 'Please Enter Valid ' + s + ' Measurement !',
      icon: 'warning'
    });
  }
}
