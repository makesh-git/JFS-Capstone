import { Component, OnInit } from '@angular/core';
import { RegUsers } from 'src/app/Model/reg-users';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { LoginService } from 'src/app/Services/login.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg: RegUsers;
  countySel: string;
  stateSel;
  districtSel;
  constructor(private userv: UsersService, private logServ: LoginService, private router: Router, private titleService: Title) { }
  bm: string;
  bmi: number;
  allReg: RegUsers;
  isUser: boolean;
  isMoti: boolean;


  ss: string[][];


  ngOnInit(): void {

    this.titleService.setTitle('Register');
    this.reg = new RegUsers();
    this.allReg = new RegUsers();
    this.isMoti = false;
    this.isUser = false;
  }

  cll() {
    var h = parseInt(this.reg.height)
    var bmi = Math.round(parseInt(this.reg.weight) / (h * h) * (10000));
    return bmi
  }


  formSubmit() {
    this.reg.bmi = this.cll() + "";
    var MOB_REGEXP = /^\d{10}$/;
    // tslint:disable-next-line: max-line-length
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (this.reg.name === undefined || this.reg.name.trim().length === 0) {
      this.enterError('Name');
    } else if (this.reg.age === undefined  || parseFloat(this.reg.age) < 0) {
      this.enterError('Age');
      // tslint:disable-next-line: max-line-length
    } else if (this.reg.gender === undefined) { this.genAlert(); } else if (this.reg.email === undefined || !EMAIL_REGEXP.test(this.reg.email.toString())) {
      this.enterError('Email Id');
    } else if (this.reg.mobile === undefined || !MOB_REGEXP.test(this.reg.mobile)) {
      this.enterError('Mobile Number');
    }

    else if (this.reg.country === undefined) { this.selectError('Country'); }
    else if (this.reg.state === undefined) { this.selectError('State'); }
    else if (this.reg.city === undefined) { this.selectError('City'); }
    else if (this.reg.address === undefined || this.reg.address.trim().length == 0) {
      this.enterError('Address');
    }
    else if (this.reg.pincode === undefined || this.reg.pincode.trim().length === 0) {
      this.enterError('Pincode');
    } else if (this.reg.height === undefined  || parseFloat(this.reg.height) < 0) {
      this.enterError('Height');
    } else if (this.reg.weight === undefined  || parseFloat(this.reg.weight) < 0) {
      this.enterError('Weight');
    } else if (this.reg.reason === undefined || this.reg.reason.trim().length === 0) {
      this.enterError('Reason');
    } else if (this.reg.food === undefined) {
      this.dietAlert();
    } else if (this.reg.preg === undefined && this.reg.gender === 'Female') {
      this.pregAlert();
    }


    else {








      this.userv.getOneRegUsers(this.reg.email).subscribe(
        data => {

          this.allReg = data;

          this.logServ.isUserAvailable(this.reg.email).subscribe(
            data => {

              this.isUser = data;
              console.log('cehecking for user' + this.isUser);


              this.logServ.isMotivatorAvailable(this.reg.email).subscribe(
                data => {
                  this.isMoti = data;


                  //
                  if (this.isUser === true) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Sorry,User with given mail id present ! Please Check..',
                    });
                    this.ngOnInit();
                  }

                  else if (this.isMoti === true) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Sorry,Motivator with given mail id present ! Please Check..',
                    }); this.ngOnInit();
                  }


                  else if (this.allReg !== null) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Sorry, You have already registered ! Please Check..',
                    }); this.ngOnInit();
                  }


                  else {

                    this.sucAlert();
                    this.userv.postSaveRegisterUser(this.reg).subscribe(
                      data => {
                        this.router.navigate(['/login']);
                      }
                    );
                  }

                }
              );

            }
          );





        }

      );





    }



  }


  pregAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please select Preganant Status',
    });
  }

  genAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please select Gender',
    });
  }

  sucAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Registered Successfully !',
      text: 'You will get Mail if your Registration is processed'
    });
  }

  invAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Sorry, You have already registered',
    });
  }
  dietAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please select dietery type',
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


