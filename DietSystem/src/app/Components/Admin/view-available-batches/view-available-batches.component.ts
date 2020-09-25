import { Component, OnInit } from '@angular/core';
import { Batches } from 'src/app/Model/batches';
import { Groups } from 'src/app/Model/groups';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-available-batches',
  templateUrl: './view-available-batches.component.html',
  styleUrls: ['./view-available-batches.component.css']
})
export class ViewAvailableBatchesComponent implements OnInit {

  constructor(private logServ: LoginService, private router: Router,private userv: UsersService,private titleService:Title) { }
batch: Batches[];
group: Groups[];

  ngOnInit(): void {
    if (this.logServ.isAuth(localStorage.getItem('USER_TYPE')) === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('View Batch-Group');

    this.userv.getAllBatches().subscribe(
      data =>{
        this.batch = data;
      }
    );
    this.userv.getAllGroups().subscribe(
      data =>{
        this.group = data;
      }
    );
  }

}
