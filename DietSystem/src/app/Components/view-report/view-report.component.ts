import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { UserMonthlymeas } from 'src/app/Model/User/user-monthlymeas';
import { ActivatedRoute } from '@angular/router';
import * as CanvasJS from 'src/app/canvasjs.min.js';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {


  constructor(private msgerv: AdminMsgService, private route: ActivatedRoute, private tit: Title) { }
  userId: string;


  mod: boolean;
  showCon: boolean;


  report: UserMonthlymeas[];
  userType: string;
  ngOnInit(): void {
    this.showCon = true;
    this.tit.setTitle("Monthly-Report");
    this.mod = false;
    this.userType = localStorage.getItem('USER_TYPE');
    this.userId = this.route.snapshot.params.id;
    this.msgerv.adminGetMonthlyMeas(this.userId).subscribe(
      data => {
        this.report = data;


        if (this.report.length == 0) this.showCon = false;


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
        text: 'Height Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Height",
        suffix: "cm"
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
        text: 'Weight Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Weight",
        suffix: "kg"
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
        text: 'Chest Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Chest",
        suffix: "cm"
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
        text: 'Waist Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Waist",
        suffix: "inch"
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
        text: 'Shoulder Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Shoulder",
        suffix: "cm"
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
        text: 'Biceps Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Biceps",
        suffix: "inch"

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
        text: 'Forearm Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Forearm",
        suffix: "inch"
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
        text: 'Leg Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Leg",
        suffix: "inch"
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
        text: 'Thigh Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Thigh",
        suffix: "inch"
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
        text: 'Hip Graph'
      },
      axisX: {
        title: "Month"
      },
      axisY: {
        title: "Hip",
        suffix: "inch"
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
