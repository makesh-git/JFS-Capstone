import { Component, OnInit } from '@angular/core';
import { UserDailylog } from 'src/app/Model/User/user-dailylog';
import { Batches } from 'src/app/Model/batches';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-dailylog',
  templateUrl: './admin-dailylog.component.html',
  styleUrls: ['./admin-dailylog.component.css']
})
export class AdminDailylogComponent implements OnInit {

  CURRENT_ID: string;
  byDate: boolean = true;
  byBatch: boolean = false;
  resCon: boolean = false;
  resConNull: boolean = false;
  byAll: boolean = false;

  head: string;

  fetchDate: string;
  fetchBatch: string;

  dlogs: UserDailylog[];
  batch: Batches[];
  constructor(private userv: UsersService, private msgerv: AdminMsgService, private logServ: LoginService, private route: Router, private titleService: Title) { }

  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {

      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('View Daily Log');
    this.head = 'date';
    this.userv.getAllBatches().subscribe(
      data => {
        this.batch = data;
      }
    );


  }


  selDate() {
    this.head = 'date';
    this.byDate = true; this.byBatch = false;
    this.resConNull = false;
    this.resCon = false;

  }
  selBatch() {
    this.head = 'batch';
    this.byDate = false; this.byBatch = true;
    this.resConNull = false;
    this.resCon = false;
    this.byAll = false;

  }

  selAll() {
    this.head = 'all';
    this.byDate = false;
    this.byBatch = false;
    this.byAll = true;
    this.resConNull = false; this.resConNull = false; this.resCon = false;
    this.msgerv.getDailyLog().subscribe(
      data => {
        this.dlogs = data;
        if (this.dlogs.length == 0) this.resConNull = true;
        else this.resCon = true;
      }
    );

  }


  formSubmit() {
    if (this.fetchDate == undefined) {
      Swal.fire({
        title: 'Please Select Valid Date !',
        icon: 'warning'
      });
    }
    else {
      this.byDate = false;
      this.byBatch = false;
      this.resConNull = false;
      this.byAll = false;
      this.msgerv.getDailyLogByDate(this.fetchDate).subscribe(
        data => {
          this.dlogs = data;
          if (this.dlogs.length == 0) {
            this.resConNull = true;
          }

          else this.resCon = true;
        }
      );

    }
  }
  batchSubmit() {
    if (this.fetchBatch == undefined) {
      Swal.fire({
        title: 'Please Select Valid Batch !',
        icon: 'warning'
      });
    }

    else {
      this.byDate = false;
      this.byBatch = false;
      this.resConNull = false;
      this.byAll = false;
      this.msgerv.getDailyLogByBatch(this.fetchBatch).subscribe(
        data => {
          this.dlogs = data;
          if (this.dlogs.length == 0) this.resConNull = true;
          else {
            this.resCon = true;
          }
        }
      );
    }

  }

}
