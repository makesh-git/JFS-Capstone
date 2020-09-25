import { Component, OnInit } from '@angular/core';
import { Motivator } from 'src/app/Model/motivator';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-moti-profile',
  templateUrl: './moti-profile.component.html',
  styleUrls: ['./moti-profile.component.css']
})
export class MotiProfileComponent implements OnInit {

  id: string;
  moti: Motivator;

  constructor(private userv: UsersService, private route: ActivatedRoute, private router: Router, private logServ: LoginService, private titleService: Title) { }

  ngOnInit() {
    if (this.logServ.isAuth('Admin') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Motivator Profile');
    this.moti = new Motivator();
    this.id = this.route.snapshot.params['name'];

    this.userv.getOneMoti(this.id).subscribe(
      data => {
        this.moti = data;
      }
    );

  }

}
