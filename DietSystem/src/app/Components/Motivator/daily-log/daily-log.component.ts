import { Component, OnInit } from '@angular/core';
import { UserDailylog } from 'src/app/Model/User/user-dailylog';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { Batches } from 'src/app/Model/batches';
import { Users } from 'src/app/Model/users';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { SelectControlValueAccessor } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.component.html',
  styleUrls: ['./daily-log.component.css'],
  providers: [DatePipe]
})
export class DailyLogComponent implements OnInit {

  CURRENT_ID: string;
  byDate: boolean = true;
  byBatch: boolean = false;
  resCon: boolean = false;
  resConNull: boolean = false;

  fetchDate: string;
  fetchBatch: string;

  constructor(private msgerv: AdminMsgService, private dp: DatePipe
    , private logServ: LoginService, private router: Router, private titleService: Title) { }

  dlog: UserDailylog[];
  d = new Date();

  date: string;
  motiBatch: Batches[];
  user: Users[];
  head: string;
  motiLogs: UserDailylog[];
  ngOnInit(): void {


    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('View Daily Log');

    this.head = 'date'
    this.CURRENT_ID = localStorage.getItem('userid');
    this.date = this.dp.transform(this.d, 'yyyy-MM-dd');




    this.msgerv.getDailyLog().subscribe(
      data => {
        this.dlog = data;
      }
    );

    this.msgerv.getMotivatingBatches(this.CURRENT_ID).subscribe(
      data => {
        this.motiBatch = data;

      }
    );

    this.msgerv.getMotivatingUsers(this.CURRENT_ID).subscribe(
      data => {
        this.user = data;


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
    this.byDate = false;
    this.byBatch = true;

    this.resCon = false;
    this.resConNull = false;

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
      this.msgerv.getDailyLogByDateAndBatch(this.CURRENT_ID, this.fetchDate).subscribe(
        data => {
          this.motiLogs = data;


          if (this.motiLogs.length == 0) this.resConNull = true;
          else this.resCon = true;
        }
      );
    }
  }

  batchSubmit() {

    if (this.fetchBatch == undefined) {
      Swal.fire({
        title: 'Please Select Batch Name!',
        icon: 'warning'
      });
    }
    else {
      this.byDate = false;
      this.byBatch = false;
      this.resConNull = false;
      this.msgerv.getDailyLogByBatch(this.fetchBatch).subscribe(
        data => {
          this.motiLogs = data;
          if (this.motiLogs.length == 0) this.resConNull = true;
          else this.resCon = true;
        }
      );
    }
  }

  selAll() {
    this.head = 'all';

    this.byDate = false;
    this.byBatch = false;
    this.resConNull = false; this.resConNull = false; this.resCon = false;
    this.msgerv.getDailyLogByMotivator(this.CURRENT_ID).subscribe(
      data => {
        this.motiLogs = data;
        console.log(this.motiLogs);
        if (this.motiLogs.length == 0) this.resConNull = true;
        else this.resCon = true;
      }
    );
  }
}
