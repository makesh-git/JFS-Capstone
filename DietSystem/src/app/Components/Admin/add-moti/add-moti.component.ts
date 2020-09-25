import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Batches } from 'src/app/Model/batches';
import { Motivator } from 'src/app/Model/motivator';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Users } from 'src/app/Model/users';
import { RegUsers } from 'src/app/Model/reg-users';

@Component({
  selector: 'app-add-moti',
  templateUrl: './add-moti.component.html',
  styleUrls: ['./add-moti.component.css']
})
export class AddMotiComponent implements OnInit {

  moti: Motivator;
  batch: Batches[];
  availMoti: Motivator;
  availUser: Users;
  availReg: RegUsers
  constructor(private userv: UsersService, private logServ: LoginService, private route: Router, private titleService: Title) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle("Add Motivator");
    this.moti = new Motivator();
    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;
      }
    );
  }


  formSubmit() {
    var MOB_REGEXP = /^\d{10}$/;
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.moti.name === undefined || this.moti.name.trim().length === 0) {
      this.enterError("Name");
    }
    else if (this.moti.age === undefined || parseFloat(this.moti.age) < 0) {
      this.enterError("Age");
    }
    else if (this.moti.gender === undefined) {
      this.genAlert();
    }
    else if (this.moti.email === undefined || !EMAIL_REGEXP.test(this.moti.email.toString())) {
      this.enterError("Email Id");
    }
    else if (this.moti.mobile === undefined || !MOB_REGEXP.test(this.moti.mobile)) {
      this.enterError("Mobile Number");
    }
    else if (this.moti.batches === undefined) {
      this.batchAlert();
    }
    else if (this.moti.country === undefined) {
      this.selectError("Country");
    }
    else if (this.moti.state === undefined) {
      this.selectError("State");
    }
    else if (this.moti.city === undefined) {
      this.selectError("City");
    }

    else if (this.moti.address === undefined || this.moti.address.trim().length === 0) {
      this.enterError("Address");
    }
    else if (this.moti.height === undefined  || parseFloat(this.moti.height) < 0) {
      this.enterError("Height");
    }
    else if (this.moti.weight === undefined || parseFloat(this.moti.weight) < 0) {
      this.enterError("Weight");
    }


    else {

      this.userv.getOneUsers(this.moti.email).subscribe(
        data => {
          this.availUser = data;
        }
      );

      this.userv.getOneRegUsers(this.moti.email).subscribe(
        data => {
          this.availReg = data;
        }
      );

      this.userv.getOneMoti(this.moti.email).subscribe(
        data => {
          this.availMoti = data;
          if(this.availMoti!==null){
            Swal.fire({
              icon: 'error',
              title: 'Sorry, Motivator With Same Email Id  Is Present',
            });this.ngOnInit();
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
            this.userv.addMotivator(this.moti).subscribe();

          }
          // if (this.availMoti == null) {
          //   this.sucAlert();
          //   this.userv.addMotivator(this.moti).subscribe();
          // }
          // else {
          //   this.duplicateAlert();
          // }

        }
      );



    }
  }


  batchAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Motivating Batch',
    });

  }
  genAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Gender',
    });
  }

  sucAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Motivator Added Successfully',
    });
  }

  duplicateAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Sorry,Motivator With Same Mail Id Is  Present',
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
