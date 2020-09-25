import { Component, OnInit } from '@angular/core';
import { Motivator } from 'src/app/Model/motivator';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-motivator-profile-edit',
  templateUrl: './motivator-profile-edit.component.html',
  styleUrls: ['./motivator-profile-edit.component.css']
})
export class MotivatorProfileEditComponent implements OnInit {

  moti: Motivator;
  constructor(private userv: UsersService, private router: Router, private logServ: LoginService, private titleService: Title) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Edit Profile');
    this.moti = new Motivator();
    this.userv.getOneMoti(localStorage.getItem('userid')).subscribe(
      data => {
        this.moti = data;

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
      this.selectError('Gender');
    }
    else if (this.moti.email === undefined || !EMAIL_REGEXP.test(this.moti.email.toString())) {
      this.enterError("Email Id");
    }
    else if (this.moti.mobile === undefined || !MOB_REGEXP.test(this.moti.mobile)) {
      this.enterError("Mobile Number");
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
    else if (this.moti.height === undefined || parseFloat(this.moti.height) < 0) {
      this.enterError("Height");
    }
    else if (this.moti.weight === undefined || parseFloat(this.moti.weight) < 0) {
      this.enterError("Weight");
    }
else{





    swal.fire({
      title: 'Updated Successfully !',
      icon: 'success'
    });
    this.userv.modifyMoti(this.moti).subscribe(
      result => {
        this.router.navigate(['motivator/profile']);
      }
    );
}
  }


  enterError(s: string) {
    swal.fire({
      icon: 'warning',
      title: 'Please Enter Valid ' + s,
    });
  }
  selectError(s: string) {
    swal.fire({
      icon: 'warning',
      title: 'Please Select Valid ' + s,
    });
  }


}
