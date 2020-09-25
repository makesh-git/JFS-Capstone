import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Batches } from 'src/app/Model/batches';
import { Motivator } from 'src/app/Model/motivator';

import Swal from 'sweetalert2';
import { Groups } from 'src/app/Model/groups';
import { Users } from 'src/app/Model/users';
import { EmailValidator } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RegUsers } from 'src/app/Model/reg-users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: Users;
  batch: Batches[];
  group: Groups[];
  availUser: Users;
  availMoti: Motivator;
  availReg : RegUsers;
  mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';

  constructor(private userv: UsersService, private logServ: LoginService, private route: Router, private titleService: Title) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Add User');
    this.user = new Users();
    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;
      }
    );

    this.userv.getAllGroups().subscribe(
      data => {
        this.group = data;
      }
    );
  }


  formSubmit() {
    // let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    // tslint:disable-next-line: max-line-length
    var MOB_REGEXP = /^\d{10}$/;
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.user.ref = 'Added by Admin';
    this.user.bmi = this.cll() + '';

    if (this.user.name === undefined || this.user.name.trim().length === 0) {
      this.enterError('Name');
    } else if (this.user.age === undefined  || parseFloat(this.user.age) < 0) {
      this.enterError('Age');
      // tslint:disable-next-line: max-line-length
    } else if (this.user.gender === undefined) { this.genAlert(); }
    else if (this.user.email === undefined || !EMAIL_REGEXP.test(this.user.email.toString())) {
      this.enterError('Email Id');
    } else if (this.user.mobile === undefined || !MOB_REGEXP.test(this.user.mobile)) {
      this.enterError('Mobile Number');
    } else if (this.user.batch === undefined) {
      this.batAlert();
    } else if (this.user.group === undefined) { this.groupAlert(); }
    else if (this.user.country === undefined) { this.selectError('Country'); }
    else if (this.user.state === undefined) { this.selectError('State'); }
    else if (this.user.city === undefined) { this.selectError('City'); }
    else if (this.user.address === undefined || this.user.address.trim().length == 0) {
      this.enterError('Address');
    } else if (this.user.pincode === undefined || this.user.pincode.trim().length === 0) {
      this.enterError('Pincode');
    } else if (this.user.height === undefined  || parseFloat(this.user.height) < 0) {
      this.enterError('Height');
    } else if (this.user.weight === undefined  || parseFloat(this.user.weight) < 0) {
      this.enterError('Weight');
    } else if (this.user.reason === undefined || this.user.reason.trim().length === 0) {
      this.enterError('Reason');
    } else if (this.user.food === undefined) {
      this.dietAlert();
    } else if (this.user.preg === undefined && this.user.gender === 'Female') {
      this.pregAlert();
    } else {
      if (this.user.preg === undefined && this.user.gender === 'Male') { this.user.preg = 'Not Applicable'; }


this.userv.getOneMoti(this.user.email).subscribe(
data =>{
  this.availMoti = data;
}
);

this.userv.getOneRegUsers(this.user.email).subscribe(
  data=>{
    this.availReg = data;
  }
);

      this.userv.getOneUsers(this.user.email).subscribe(
        data => {
          this.availUser = data;
          if(this.availMoti!==null){
            Swal.fire({
              icon: 'error',
              title: 'Sorry, Motivator With Same Email Id  Is Present',
            }); this.ngOnInit();
          }
          else if(this.availReg !== null){
            Swal.fire({
              icon: 'error',
              title: 'Sorry, Given email id is already registered',
            });this.ngOnInit();
          }
          else if(this.availUser!== null){

            Swal.fire({
              icon: 'error',
              title: 'Sorry, User With Same Email Id  Is Present',
            });this.ngOnInit();
          }
          else{
            this.sucAlert();
              this.userv.addUser(this.user).subscribe();
          }

          // if (this.availUser == null) {
          //   this.sucAlert();
          //   this.userv.addUser(this.user).subscribe();

          // } else {
          //   this.duplicateAlert();
          // }
        }
      );





    }

  }


  cll() {
    const h = parseInt(this.user.height);
    const bmi = Math.round(parseInt(this.user.weight) / (h * h) * (10000));
    return bmi;
  }


  batchAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Batch',
    });

  }
  genAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Gender',
    });
  }
  batAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Batch',
    });
  }
  groupAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Group',
    });
  }

  sucAlert() {
    Swal.fire({
      icon: 'success',
      title: 'User Added Successfully',
    });
  }

  pregAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Preganancy Status',
    });
  }
  dietAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Dieterty Type',
    });
  }

  duplicateAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Sorry, User With Same Email Id  Is Present',
    });
  }

  enterError(s: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Please Enter Valid ' + s,
    });
  }
  selectError(s: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Valid ' + s,
    });
  }
}
