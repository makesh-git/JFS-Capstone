import { Component, OnInit } from '@angular/core';
import { Batches } from 'src/app/Model/batches';
import Swal from 'sweetalert2';
import { AdminMsgComponent } from '../Message/adminCreate-msg/admin-msg.component';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsersService } from 'src/app/Services/Mesg/users.service';
@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent implements OnInit {

  constructor(private msgserv: AdminMsgService, private logServ: LoginService,
    private userv: UsersService, private route: Router, private titleService: Title) { }

  batch: Batches;
  availBatch: Batches[];
  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {


      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Create Batch');
    this.batch = new Batches();



  }

  formSubmit() {

    if (this.batch.batchname === undefined || this.batch.batchname.trim().length === 0) {
      Swal.fire({
        title: 'Please Enter Batch Name !',
        icon: 'warning'
      });
    }
    else if (this.batch.batchid === undefined || this.batch.batchid.trim().length === 0) {
      Swal.fire({
        title: 'Please Enter Batch Id !',
        icon: 'warning'
      });
    }
    else if (this.batch.batchdesc === undefined || this.batch.batchdesc.trim().length === 0) {
      Swal.fire({
        title: 'Please Enter Batch Description !',
        icon: 'warning'
      });
    }
    else {



      this.msgserv.searchByBatch(this.batch.batchname).subscribe(
        data => {
          this.availBatch = data;
          if (this.availBatch.length === 0) {
            this.sucAlert();
            this.batch.strtdate = "DATE";
            this.msgserv.adminPostCreateBatch(this.batch).subscribe(
              data => {
                this.route.navigate(['/view/batch-group']);
              }
            );
          }
          else {
            Swal.fire({
              title: 'Batch with same name is present !',
              icon: 'error'
            });
          }
        }
      );




    }
  }
  sucAlert() {
    Swal.fire({
      title: 'Batch Created Successfully !',
      icon: 'success'
    });
  }

}
