import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Users } from '../Model/users';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CollapseComponent } from 'angular-bootstrap-md';
import { LoginCredential } from '../Model/login-credential';
import { UsersService } from './Mesg/users.service';
import { GenCode } from '../Model/gen-code';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  private baseUrl: string;
  constructor(private http: HttpClient, private userv: UsersService,private router: Router) { this.baseUrl = 'http://localhost:8080'; }

// To handle the http error response
  handleErr = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      this.router.navigate(['error']);
    }
    if(error.status === 401){

      Swal.fire({
        title: 'Invalid Login, Try Again!',
        icon: 'error'
      });

    }
    return throwError(error.message || error);
  }


  // To check wheather the session is authenticated
  isAuth(role: string) {



    if (localStorage.length === 0 || localStorage.getItem('USER_TYPE') !== role) return false;

    else return true;
    // return true;
  }


  // To login..
  public myLog(username: string, password: string): Observable<LoginCredential> {
    console.log('called');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<LoginCredential>(this.baseUrl + '/login', { headers })
      .pipe(
        catchError(
          this.handleErr
        )
      );

  }



  private invalidLogin(err: HttpErrorResponse | any) {
    Swal.fire({
      title: 'Invalid Login, Try Again!',
      icon: 'error'
    });

    return throwError(err.message || err);
  }

  // To logout..
  public logout() {
    localStorage.clear();

    return this.http.get(this.baseUrl + '/logout') .pipe(
      catchError(
        this.handleErr
      )
    );

  }

  // To change password..
  changePassword(log: LoginCredential) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<LoginCredential>(this.baseUrl + '/changePassword', log) .pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To check is motivator is present with given id
  isMotivatorAvailable(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/isMotivatorAvailable/${id}`) .pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To check is user is present with given id
  isUserAvailable(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/isUserAvailable/${id}`) .pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get code while performing forgot password..
  forgotPassword(id: string): Observable<GenCode> {

    return this.http.get<GenCode>(`${this.baseUrl}/forgotPassword/${id}`) .pipe(
      catchError(
        this.handleErr
      )
    );
  }




}
