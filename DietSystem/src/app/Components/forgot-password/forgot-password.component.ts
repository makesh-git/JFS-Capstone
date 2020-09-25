import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Users } from 'src/app/Model/users';
import { Motivator } from 'src/app/Model/motivator';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { GenCode } from 'src/app/Model/gen-code';
import { LoginCredential } from 'src/app/Model/login-credential';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userv: UsersService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  forgotUserid: string;
  code: string;
  useridMod: boolean;
  codeMod: boolean;
  passMod: boolean;

  isUser: boolean;
  isMoti: boolean;
  genCode: GenCode;


  newPass: string;
  conPass: string;
  log: LoginCredential;

  user: Users;
  moti: Motivator;
  ngOnInit(): void {

    this.titleService.setTitle('Forgot Password');
    this.log = new LoginCredential();
    this.genCode = new GenCode();
    this.user = new Users();
    this.moti = new Motivator();
    this.useridMod = true; this.codeMod = false; this.passMod = false;
  }

  getUserid() {

    if (this.forgotUserid === undefined || this.forgotUserid.trim().length === 0) {
      swal.fire({
        title: 'Please Enter User Id!',
        icon: 'warning'
      });
    }
    else {
      this.logServ.isUserAvailable(this.forgotUserid).subscribe(
        data => {
          this.isUser = data;

          this.logServ.isMotivatorAvailable(this.forgotUserid).subscribe(
            data => {
              this.isMoti = data;


              if (!this.isMoti && !this.isUser) {
                swal.fire({
                  title: 'Invalid User Id,Please Check !',
                  icon: 'error'
                });
              }
              else {

                this.logServ.forgotPassword(this.forgotUserid).subscribe(
                  data => {
                    this.genCode = data;
                    this.codeMod = true; this.useridMod = false; this.passMod = false;

                    //this.genCode = data;
                  }
                );
              }
            }
          );

        }
      );

    }





  }

  getCode() {
    if (this.code === undefined || this.code.trim().length === 0) {
      swal.fire({
        title: 'Please Enter 6 Digit Code !',
        icon: 'warning'
      });

    }
    else {


      if (this.code !== this.genCode.code) {
        swal.fire({
          title: 'Wrong Code,Please Check !',
          icon: 'error'
        });
      }
      else {
        this.codeMod = false; this.useridMod = false; this.passMod = true;
      }
    }
  }

  changePass() {


    if (this.newPass === undefined || this.newPass.trim().length === 0) {
      swal.fire({
        icon: 'warning',
        title: 'Please Enter New Password !',
      });
    }
    else if (this.conPass === undefined || this.conPass.trim().length === 0) {
      swal.fire({
        icon: 'warning',
        title: 'Please Enter Confirm Password !',
      });
    }

    else if (this.conPass !== this.newPass) {
      swal.fire({
        icon: 'error',
        title: 'New Password & Confirm Password Mismatch !',
      });
    }

    else if (this.newPass.length < 6) {
      swal.fire({
        icon: 'error',
        title: 'Length Of Password Should Be Minimum 6 !',
      });
    }
    else {
      this.log.userid = this.forgotUserid;
      this.log.password = this.newPass;

      if (this.isUser) {
        this.log.type = 'User';
      }
      else if (this.isMoti) {
        this.log.type = 'Motivator';

      }

      this.logServ.changePassword(this.log).subscribe(
        data => {
          this.router.navigate(['/login']);
          swal.fire({
            icon: 'success',
            title: 'Password Reset Successfull !',
          });
        }
      );


    }


  }

}
