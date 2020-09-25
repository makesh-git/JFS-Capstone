import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpClientJsonpModule, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Users } from '../../Model/users';
import { RegUsers } from '../../Model/reg-users';
import { Batches } from '../../Model/batches';
import { Groups } from '../../Model/groups';
import { Motivator } from '../../Model/motivator';
import { WeeklyDiet } from 'src/app/Model/weekly-diet';
import { fileURLToPath } from 'url';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string;
  public head: HttpHeaders;
  constructor(private http: HttpClient, private router: Router) {
    // tslint:disable-next-line: max-line-length
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    this.baseUrl = 'http://localhost:8080';
  }
  // tslint:disable-next-line: max-line-length






  private users: Users[];
  private moti: Motivator[];

  // To handle the http error response
  handleErr = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      this.router.navigate(['error']);
    }
    return throwError(error.message || error);
  }

  // To get all users
  public ViewUsers(): Observable<Users[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );

    return this.http.get<Users[]>(this.baseUrl + '/viewUsers', { headers })
      .pipe(
        catchError(
          this.handleErr
        )
      );
  }





  // To get particular one user
  public getOneUsers(id: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get(`${this.baseUrl}/getOneUsers/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To upadate user
  public modifyUser(user: Users) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Users>(this.baseUrl + '/modifyUser', user, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To remove user
  public removeUser(id: string) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.delete<void>(`${this.baseUrl}/removeUser/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get all motivator
  public viewMoti(): Observable<Motivator[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Motivator[]>(this.baseUrl + '/viewMoti', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get one motivator
  public getOneMoti(id: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get(`${this.baseUrl}/getOneMoti/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To upadate motivator
  public modifyMoti(moti: Motivator) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Motivator>(this.baseUrl + '/modifyMoti', moti, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To remove motivator
  public removeMoti(id: string) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.delete<void>(`${this.baseUrl}/removeMoti/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }



  // To get all registered users
  public getRegUsers(): Observable<RegUsers[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<RegUsers[]>(this.baseUrl + '/getRegUsers', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get particular one Registered user
  public getOneRegUsers(id: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get(`${this.baseUrl}/getOneRegUsers/${id}`).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To save Registered User
  public postSaveRegisterUser(reg: RegUsers) {



    return this.http.post<RegUsers>(this.baseUrl + '/postSaveRegUsers', reg).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get all batches
  public getAllBatches(): Observable<Batches[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Batches[]>(this.baseUrl + '/getAllBatches', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get all groups
  public getAllGroups(): Observable<Groups[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Groups[]>(this.baseUrl + '/getAllGroups', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To approve Users
  public approveUser(id: string, batch: string, group: string) {

    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post(`${this.baseUrl}/setApproveUsers/${id}/${batch}/${group}`, null, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To reject users
  public rejectUser(id: string, reason: string) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post(`${this.baseUrl}/setRejectUsers/${id}/${reason}`, null, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To add new user
  public addUser(u: Users) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Users>(this.baseUrl + '/addUser', u, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To add new motivator
  public addMotivator(m: Motivator) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Motivator>(this.baseUrl + '/addMotivator', m, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To upload file
  public uplaodFile(f: FormData) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<File>(this.baseUrl + '/fileUpload', f, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  public uploadFile(f: File) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    const fd: FormData = new FormData();
    fd.append("file", f);
    return this.http.post<FormData>(this.baseUrl + '/savefile', fd, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Uplaoding weekly diet plan
  public updateWeeklyDiet(diet: WeeklyDiet) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<WeeklyDiet>(this.baseUrl + '/uploadWeeklyDiet', diet, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // To get recent weekly diet uplaods
  public viewRecentUploads(): Observable<WeeklyDiet[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<WeeklyDiet[]>(this.baseUrl + '/viewRecentUploads', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To download file..
  public downloadFile(name: string): Observable<HttpResponse<Blob>> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get(`${this.baseUrl}/downloadFile/${name}`
      , {
        observe: 'response',
        responseType: 'blob'
      }
    );
  }









  public removeFile(id: number) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post(`${this.baseUrl}/removeFile/${id}`, null, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }






}
