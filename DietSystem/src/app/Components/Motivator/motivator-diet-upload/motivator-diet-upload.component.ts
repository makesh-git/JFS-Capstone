import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Batches } from 'src/app/Model/batches';
import { WeeklyDiet } from 'src/app/Model/weekly-diet';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { AdminMsgService } from 'src/app/Services/Mesg/msg.service';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { saveAs as importedSaveAs } from 'file-saver';
@Component({
  selector: 'app-motivator-diet-upload',
  templateUrl: './motivator-diet-upload.component.html',
  styleUrls: ['./motivator-diet-upload.component.css']
})
export class MotivatorDietUploadComponent implements OnInit {


  userType: string;
  batch: string;
  tips: string;
  batches: Batches[];
  diet: WeeklyDiet;

  mod: boolean;
  recUpl: WeeklyDiet[];

con:boolean;



CURRENT_USER: string;



  selectedFiles;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  isFileLoaded: boolean;

  constructor(private userv: UsersService, private msgerv: AdminMsgService, private logServ: LoginService, private router: Router, private titleService: Title) { }
  ngOnInit(): void {
    if (this.logServ.isAuth('Motivator') === false) {
      this.router.navigate(['/login']);
    }
    this.titleService.setTitle('Weekly Diet Upload');

    this.CURRENT_USER = localStorage.getItem('userid');
this.con = true;
    this.isFileLoaded = false;
    this.selectedFile = null;
    selectedFiles: FileList;
    this.mod = false;
    this.userType =  localStorage.getItem('userid');

    this.tips = undefined;
    this.batch = undefined;
    this.diet = new WeeklyDiet();
    this.userv.viewRecentUploads().subscribe(
      data => {
        this.recUpl = data;
        if(this.recUpl.length === 0){

          this.con = false;
          console.log('Status'+this.con);
        }



      }
    );



    this.msgerv.getMotivatingBatches(localStorage.getItem('userid')).subscribe(
      data => {
        this.batches = data;

      }
    );




  }


  upload() {


    if (this.batch == undefined) { this.batchAlert(); }
    else if (this.isFileLoaded == false) { this.fileAlert(); }
    else if (this.tips === undefined || this.tips.trim().length === 0) { this.tipsAlert(); }
    else {
      this.currentFileUpload = this.selectedFiles.item(0);

      this.diet.fileName = this.currentFileUpload.name;
      this.diet.batch = this.batch;
      this.diet.by = this.userType;
      this.diet.tips = this.tips;
      this.userv.updateWeeklyDiet(this.diet).subscribe();
      this.userv.uploadFile(this.currentFileUpload).subscribe(
        data => {

          this.ngOnInit();
        }

      );

      this.sucAlert();
    }
  }
  selectFile(event) {
    this.isFileLoaded = true;
    this.selectedFiles = event.target.files;
    event.target.remove;
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













  fileRemove(f: number) {

    this.userv.removeFile(f).subscribe();





    Swal.fire({
      title: 'Are you sure want to remove ?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, keep it !'
    }).then((result) => {
      if (result.value) {


        this.userv.removeFile(f).subscribe(
          result => {
            this.ngOnInit(),
            this.mod = false;
          }
        );

        Swal.fire({
          text: 'Removed Successfully !',
          icon: 'success'
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })


  }



  sucAlert() {
    Swal.fire({
      title: 'Uploaded Successfully !',
      icon: 'success'
    });
  }
  batchAlert() {
    Swal.fire({
      title: 'Please Select Batch !',
      icon: 'warning'
    });
  }
  tipsAlert() {
    Swal.fire({
      title: 'Please Add Any Workout Tips !',
      icon: 'warning'
    });
  }
  fileAlert() {
    Swal.fire({
      title: 'Please Select Any Files !',
      icon: 'warning'
    });
  }


}
