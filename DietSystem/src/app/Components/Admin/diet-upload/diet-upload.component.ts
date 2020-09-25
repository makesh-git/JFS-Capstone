import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/Mesg/users.service';
import { HttpEventType, HttpResponse, HttpRequest } from '@angular/common/http';
import { Batches } from 'src/app/Model/batches';
import Swal from 'sweetalert2';
import { WeeklyDiet } from 'src/app/Model/weekly-diet';
import { catchError } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { saveAs as importedSaveAs } from 'file-saver';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-diet-upload',
  templateUrl: './diet-upload.component.html',
  styleUrls: ['./diet-upload.component.css']
})
export class DietUploadComponent implements OnInit {

  userType: string;
  batch: string;
  tips: string;
  batches: Batches[];
  diet: WeeklyDiet;

  mod: boolean;
  con: boolean;
  recUpl: WeeklyDiet[];








  selectedFiles;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  isFileLoaded: boolean;

  constructor(private userv: UsersService, private logServ: LoginService, private route: Router, private titleService: Title) { }
  ngOnInit(): void {
    if (this.logServ.isAuth('Admin') === false) {
      this.route.navigate(['/login']);
    }
    this.titleService.setTitle('Upload Weekly Diet');
this.con = true;

    this.selectedFile = null;
    selectedFiles: FileList;
    this.mod = false;
    this.userType = "Admin";
    this.isFileLoaded = false;
    this.tips = undefined;
    this.batch = undefined;
    this.diet = new WeeklyDiet();
    this.userv.viewRecentUploads().subscribe(
      data => {
        this.recUpl = data;
        if(this.recUpl.length === 0){
          this.con = false;
        }


      }
    );
    this.userv.getAllBatches().subscribe(
      data => {
        this.batches = data;
      }
    );






  }



  upload() {




    if (this.batch == undefined) { this.batchAlert(); }
    else if (this.isFileLoaded == false) { this.fileAlert(); }
    else if (this.tips === undefined) { this.tipsAlert(); }
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
      title: 'Are You Sure Want To Remove ?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      confirmButtonText: 'Yes, Remove !',
      cancelButtonText: 'No, Keep It !'
    }).then((result) => {
      if (result.value) {


        this.userv.removeFile(f).subscribe(
          result => {
            this.ngOnInit(),
              this.mod = false;
          }
        );

        Swal.fire({
          title: 'Removed Successfully !',
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
