import { Component, OnInit } from '@angular/core';
import { Batches } from 'src/app/Model/batches';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { MotivatingBatches } from 'src/app/Model/Motivator/motivating-batches';
import { Users } from 'src/app/Model/users';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-motibatch',
  templateUrl: './view-motibatch.component.html',
  styleUrls: ['./view-motibatch.component.css']
})
export class ViewMotibatchComponent implements OnInit {

  motiBatch: Batches[];

  CURRENT_ID: string;
  mod: boolean;
  iterBatch: Batches;
  constructor(private msgerv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }

  user: Users[];
  ngOnInit(): void {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Motivating Batch');

    this.CURRENT_ID = localStorage.getItem('userid');
    this.iterBatch = new Batches();
    this.mod = false;


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

  callModal(b: Batches) {
    this.mod = true;
    this.iterBatch = b;
  }

}
