import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { UserMonthlymeas } from 'src/app/Model/User/user-monthlymeas';
import { ActivatedRoute, Router } from '@angular/router';
import * as CanvasJS from 'src/app/canvasjs.min.js';
import { LoginService } from 'src/app/Services/login.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-user-view-report',
  templateUrl: './user-view-report.component.html',
  styleUrls: ['./user-view-report.component.css']
})
export class UserViewReportComponent implements OnInit {

  constructor(private msgerv: AdminMsgService, private route: ActivatedRoute, private logServ: LoginService, private router: Router, private titleService: Title) { }
  userId: string;


  mod: boolean;
  con: boolean;

  report: UserMonthlymeas[];
  userType: string;
  ngOnInit(): void {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.con = true;
    this.titleService.setTitle('Monthly Report');
    this.mod = false;
    this.userType = 'Motivator';
    this.userId = this.route.snapshot.params.id;
    this.msgerv.adminGetMonthlyMeas(localStorage.getItem('userid')).subscribe(
      data => {
        this.report = data;
        if(this.report.length === 0){
          this.con = false;
        }


      }
    );
  }

  heightGraph() {
    this.mod = true;

    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'HEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;


      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].height)
      });
    }
    chart.render();
  }


  weightGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;


      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].weight)
      });
    }
    chart.render();
  }


  chestGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'ChEST GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].chest)
      });
    }
    chart.render();
  }




  waistGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].waist)
      });
    }
    chart.render();
  }


  shoulderGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].shoulder)
      });
    }
    chart.render();
  }


  bicepsGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].biceps)
      });
    }
    chart.render();
  }



  forearmGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].forearm)
      });
    }
    chart.render();
  }

  legGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].legs)
      });
    }
    chart.render();
  }


  thighGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].thigh)
      });
    }
    chart.render();
  }



  hipsGraph() {
    this.mod = true;
    let dps = [[]];
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'WEIGHT GRAPH'
      },
      data: [{
        type: 'line',
        dataPoints: dps[0]

      }]
    });
    for (let i = 0; i < this.report.length; i++) {
      r: UserMonthlymeas;

      dps[0].push({
        label: this.report[i].month,
        y: parseFloat(this.report[i].hip)
      });
    }
    chart.render();
  }











  //   let chart1 = new CanvasJS.Chart('WeightChart', {
  // 	animationEnabled: true,
  // 	exportEnabled: true,
  // 	title: {
  // 		text: 'Weiight'
  // 	},
  // 	data: [{
  // 		type: 'column',
  // 		dataPoints: [
  // 			{ y: 71, label: 'Apple' },
  // 			{ y: 55, label: 'Mango' },
  // 			// { y: 50, label: "Orange" },
  // 			// { y: 65, label: "Banana" },
  // 			// { y: 95, label: "Pineapple" },
  // 			// { y: 68, label: "Pears" },
  // 			// { y: 28, label: "Grapes" },
  // 			// { y: 34, label: "Lychee" },
  // 			// { y: 14, label: "Jackfruit" }
  // 		]
  // 	}]
  // });

  //   chart1.render();






}
