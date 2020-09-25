import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Model/users';
import swal from 'sweetalert2';
import { Batches } from 'src/app/Model/batches';
import { Title } from '@angular/platform-browser';
import { Groups } from 'src/app/Model/groups';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {

  name: string;
  user: Users;
  selB: Batches;
  batch: Batches[];
  group: Groups[];
  constructor(private userv: UsersService, private route: ActivatedRoute, private logServ: LoginService, private router: Router, private tit: Title) {
    //  this.batch =[];
  }
  bb: string;
  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.router.navigate(['/login']);
    }
    this.tit.setTitle("Modify User");
    this.user = new Users();
    this.name = this.route.snapshot.params['name'];

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
    this.userv.getAllGroups().subscribe(
      data => {
        this.group = data;

      }
    );
    this.arrMod();
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
    } else if (this.user.batch === undefined) {
      this.selectError('Batch');
    } else if (this.user.group === undefined) {this.selectError('Group'); }
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









    else if (this.user.gender == 'Female' && this.user.preg == 'Not Applicable') {
      swal.fire({
        title: 'Please Mention  Preganancy Status !',
        icon: 'warning'
      });
    }

    else {
      swal.fire({
        title: 'Updated Successfully !',
        icon: 'success'
      });
      this.userv.modifyUser(this.user).subscribe(
        result => this.router.navigate(['/admin/view/users'])
      );
    }
  }
  cll() {
    var h = parseInt(this.user.height)
    var bmi = Math.round(parseInt(this.user.weight) / (h * h) * (10000));
    return bmi
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
