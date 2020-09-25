import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "HH";
  dd: boolean;

  searchValue: string;
  searchType: string;
  constructor(private titleService: Title, private router: Router, private logServ: LoginService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {

    this.setTil();


  }
  setTil() {

    }

  dropDownToggle() {

    this.dd = !this.dd;
  }


  closeDropDown() {
    this.dd = false;

  }



  // a:ActivatedRoute;


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

    swal.fire({
      title: 'Are You Sure Want To Logout ?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout !',
      cancelButtonText: 'No !'
    }).then((result) => {
      if (result.value) {

        this.logServ.logout();
        this.router.navigate(['/login']);


        swal.fire({
          icon: 'success',
          title: 'You have been logged out Sucessfully',
        });
      } else if (result.dismiss === swal.DismissReason.cancel) {

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
