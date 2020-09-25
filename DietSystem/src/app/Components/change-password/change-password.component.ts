import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { LoginCredential } from 'src/app/Model/login-credential';
import { Title } from '@angular/platform-browser';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  oldPass: string;
  newPass: string;
  conPass: string;

  logDetails: LoginCredential;
  USER_TYPE: string;
  constructor(private logServ: LoginService, private tittleService: Title, private router: Router) { }

  ngOnInit(): void {

    if (this.logServ.isAuth(localStorage.getItem('USER_TYPE')) === false) {
      this.router.navigate(['/login']);
    }

    this.tittleService.setTitle('Change Password');
    this.logDetails = new LoginCredential();
    this.USER_TYPE = localStorage.getItem('USER_TYPE');

  }


  formSubmit() {

    if (this.oldPass === undefined || this.oldPass.trim().length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Enter Old Password !',
      });
    }
    else if (this.newPass === undefined || this.newPass.trim().length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Enter New Password !',
      });
    }
    else if (this.conPass === undefined || this.conPass.trim().length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Enter Confirm Password !',
      });
    }

    else if (this.conPass !== this.newPass) {
      Swal.fire({
        icon: 'error',
        title: 'New Password & Confirm Password Mismatch !',
      });
    }

    else if (this.newPass.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Length Of Password Should Be Minimum 6 !',
      });
    }


    else if (this.oldPass !== localStorage.getItem('password')) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry, You Old Password Is Wrong !',
      });
    }

    else {
      this.logDetails.userid = localStorage.getItem('userid');
      this.logDetails.password = this.newPass;
      this, this.logDetails.type = localStorage.getItem('USER_TYPE');
      this.logServ.changePassword(this.logDetails).subscribe(
        data => {
          this.logServ.logout();
          this.router.navigate(['/login']);
          Swal.fire({
            icon: 'success',
            title: 'Password Changed Successfully,Please Login Again to Continue.. !',
          });
        }
      );



    }


  }

}
