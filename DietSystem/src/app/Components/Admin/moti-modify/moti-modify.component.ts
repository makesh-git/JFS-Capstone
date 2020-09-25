import { Component, OnInit } from '@angular/core';
import { Motivator } from 'src/app/Model/motivator';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-moti-modify',
  templateUrl: './moti-modify.component.html',
  styleUrls: ['./moti-modify.component.css']
})
export class MotiModifyComponent implements OnInit {

  id: string;
  moti: Motivator;

  constructor(private userv: UsersService, private route: ActivatedRoute, private router: Router, private logServ: LoginService, private titleService: Title) { }

  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {

      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Modify Motivator');
    this.moti = new Motivator();
    this.id = this.route.snapshot.params.name;

    this.userv.getOneMoti(this.id).subscribe(
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
    else if (this.moti.batches === undefined) {
      this.selectError('Motivating Batch');
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
        this.router.navigate(['/admin/view/motivators']);
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
