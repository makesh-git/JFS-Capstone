import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { Motivator } from 'src/app/Model/motivator';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-motivator-profile',
  templateUrl: './motivator-profile.component.html',
  styleUrls: ['./motivator-profile.component.css']
})
export class MotivatorProfileComponent implements OnInit {

  constructor(private userv: UsersService, private logServ: LoginService, private router: Router, private titleService: Title) { }
  moti: Motivator;
  ngOnInit(): void {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('View Profile');
    this.moti = new Motivator();
    this.userv.getOneMoti(localStorage.getItem('userid')).subscribe(
      data => {
        this.moti = data;
      }
    );
  }

}
