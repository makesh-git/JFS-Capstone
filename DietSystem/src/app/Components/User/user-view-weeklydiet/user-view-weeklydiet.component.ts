import { Component, OnInit } from '@angular/core';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { WeeklyDiet } from 'src/app/Model/weekly-diet';
import { saveAs as importedSaveAs } from 'file-saver';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-user-view-weeklydiet',
  templateUrl: './user-view-weeklydiet.component.html',
  styleUrls: ['./user-view-weeklydiet.component.css']
})
export class UserViewWeeklydietComponent implements OnInit {


  id: string;
  con: boolean;
  constructor(private msgerv: AdminMsgService, private userv: UsersService, private logServ: LoginService, private router: Router, private titleService: Title) { }
  diet: WeeklyDiet[];
  ngOnInit(): void {
    if (this.logServ.isAuth('User') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Weekly Diet Plan');
    this.id = localStorage.getItem('userid');

    this.con = true;
    this.msgerv.getUserWeeklyDiet(this.id).subscribe(
      data => {
        this.diet = data;


        if (this.diet.length === 0) {
          this.con = false;
        }
      }
    );

  }

  fileDownload(f: string) {
    this.userv.downloadFile(f).subscribe(
      (response) => {
        const filename = response.headers.get('filename');
        const filetype = response.headers.get('filetype');
        const cc = response.headers.get('Content-Disposition');
        const blob = new Blob([response.body]);

        importedSaveAs.saveAs(blob, filename);
      }
    );


  }

}
