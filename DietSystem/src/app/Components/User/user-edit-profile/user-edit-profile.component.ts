import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Users } from 'src/app/Model/users';
import { Batches } from 'src/app/Model/batches';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  name: string;
  user: Users;
  selB: Batches;
  batch: Batches[];
  constructor(private userv: UsersService, private route: ActivatedRoute, private logServ: LoginService, private router: Router, private titleService: Title) {
    //  this.batch =[];
  }
  bb: string;
  ngOnInit() {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Edit Profile');
    this.user = new Users();
    this.name = localStorage.getItem('userid');
    this.userv.getOneUsers(this.name).subscribe(
      data => {
        this.user = data;
        this.bb = this.user.batch.batchname;



      }
    );

    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;

      }

    );
    this.arrMod();
  }

  cll() {
    var h = parseInt(this.user.height)
    var bmi = Math.round(parseInt(this.user.weight) / (h * h) * (10000));
    return bmi
  }

  arrMod() {



  }
  formSubmit() {




    var MOB_REGEXP = /^\d{10}$/;
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (this.user.name === undefined || this.user.name.trim().length === 0) {
      this.enterError('Name');
    } else if (this.user.age === undefined  || parseFloat(this.user.age) < 0) {
      this.enterError('Age');
      // tslint:disable-next-line: max-line-length
    } else if (this.user.gender === undefined) { this.selectError('Gender') }
    else if (this.user.email === undefined || !EMAIL_REGEXP.test(this.user.email.toString())) {
      this.enterError('Email Id');
    } else if (this.user.mobile === undefined || !MOB_REGEXP.test(this.user.mobile)) {
      this.enterError('Mobile Number');
    }
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
    }



else{
    swal.fire({
      title: 'Updated Successfully !',
      icon: 'success'
    });
    this.userv.modifyUser(this.user).subscribe(
      result => this.router.navigate(['/user/profile'])
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
