import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-moti-header',
  templateUrl: './moti-header.component.html',
  styleUrls: ['./moti-header.component.css']
})
export class MotiHeaderComponent implements OnInit {

  dd: boolean;
  constructor(private titleService: Title, private router: Router, private logService: LoginService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  searchValue: string;
  searchType: string;

  ngOnInit(): void {



  }

  dropDownToggle() {
    this.dd = !this.dd;
  }
  closeDropDown() {
    this.dd = false;
  }


  searchSubmit() {

    if (this.searchValue === undefined || this.searchValue.trim().length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Please Enter Something To Search !',
      });
    }
    else if (this.searchType === undefined) {
      this.searchAlert();
    }
    else {
      this.router.navigate(['/search', this.searchType, this.searchValue]);

    }
  }


  logout() {





    Swal.fire({
      title: 'Are You Sure Want To Logout ?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout !',
      cancelButtonText: 'No !'
    }).then((result) => {
      if (result.value) {



        this.logService.logout();
        this.router.navigate(['/login']);

        Swal.fire({
          icon: 'success',
          title: 'You have been logged out Sucessfully',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })

  }

  searchAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Please Select Search Type !',
    });
  }

}
