import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminMsgComponent } from '../Admin/Message/adminCreate-msg/admin-msg.component';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { Users } from 'src/app/Model/users';
import { Motivator } from 'src/app/Model/motivator';
import { Batches } from 'src/app/Model/batches';
import { Groups } from 'src/app/Model/groups';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  hh = true;

  CURRENT_TYPE: string;
  u: boolean; m: boolean;
  b: boolean; g: boolean;
  nf: boolean;













  constructor(private route: ActivatedRoute, private msgerv: AdminMsgService) {



    this.u = false; this.m = false; this.b = false; this.g = false; this.nf = false;
  }

  searchValue: string;
  searchType: string;

  user: Users[];
  moti: Motivator[];
  batch: Batches[];
  group: Groups[];
  ngOnInit(): void {
    this.CURRENT_TYPE = localStorage.getItem('USER_TYPE');


    this.searchValue = this.route.snapshot.params['value'];
    this.searchType = this.route.snapshot.params['type'];



    this.u = false; this.m = false; this.b = false; this.g = false; this.nf = false;


    if (this.searchType === 'User') {
      this.u = false; this.m = false; this.b = false; this.g = false; this.nf = false;
      this.msgerv.searchByUser(this.searchValue).subscribe(
        data => {
          this.user = data;
          if (this.user.length === 0) {
            this.nf = true;
          } else {
            this.u = true;
          }
        }
      );
    }


    if (this.searchType === 'Motivator') {
      this.u = false; this.m = false; this.b = false; this.g = false; this.nf = false;
      this.msgerv.searchByMoti(this.searchValue).subscribe(
        data => {
          this.moti = data;
          if (this.moti.length == 0) {
            this.nf = true;
          } else {
            this.m = true;
          }
        }
      );
    }
    if (this.searchType === 'Batch') {
      this.u = false; this.m = false; this.b = false; this.g = false; this.nf = false;
      this.msgerv.searchByBatch(this.searchValue).subscribe(
        data => {
          this.batch = data;
          if (this.batch.length == 0) {
            this.nf = true;
          } else {
            this.msgerv.batchMotivatorDetails(this.searchValue).subscribe(
              data => {
                this.moti = data;

                this.b = true;
              }
            );
            this.msgerv.userFindByBatch(this.searchValue).subscribe(
              data => {
                this.user = data;
              }
            );

          }
        }
      );
    }
    if (this.searchType === 'Group') {
      this.u = false; this.m = false; this.b = false; this.g = false; this.nf = false;
      this.msgerv.searchByGroup(this.searchValue).subscribe(
        data => {
          this.group = data;
          if (this.group.length == 0) {
            this.nf = true;
          } else {
            this.msgerv.userFindByGroup(this.searchValue).subscribe(
              data => {
                this.user = data;
                this.g = true;

              }
            );
          }
        }
      );

    }
  }
}
