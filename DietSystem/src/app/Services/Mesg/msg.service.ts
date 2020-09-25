import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Users } from 'src/app/Model/users';
import { Motivator } from 'src/app/Model/motivator';
import { AdminOutbox } from 'src/app/Model/Admin/admin-outbox';
import { Observable, throwError } from 'rxjs';
import { UserInbox } from 'src/app/Model/User/user-inbox';
import { MotiInbox } from 'src/app/Model/Motivator/moti-inbox';
import { AdminOlderPost } from 'src/app/Model/Admin/admin-older-post';
import { UserViewPost } from 'src/app/Model/User/user-view-post';
import { MotiViewPost } from 'src/app/Model/Motivator/moti-view-post';
import { MotiOutbox } from 'src/app/Model/Motivator/moti-outbox';
import { AdminInbox } from 'src/app/Model/Admin/admin-inbox';
import { MotiOlderPost } from 'src/app/Model/Motivator/moti-older-post';
import { AdminViewPost } from 'src/app/Model/Admin/admin-view-post';
import { UserOutbox } from 'src/app/Model/User/user-outbox';
import { UserDailylog } from 'src/app/Model/User/user-dailylog';
import { UserMonthlymeas } from 'src/app/Model/User/user-monthlymeas';
import { CurrentUser } from 'src/app/Model/current-user';
import { UserOlderPost } from 'src/app/Model/User/user-older-post';
import { Batches } from 'src/app/Model/batches';
import { Groups } from 'src/app/Model/groups';
import { MotiBatch } from 'src/app/Model/moti-batch';
import { AssignMoti } from 'src/app/Model/assign-moti';
import { MotivatingBatches } from 'src/app/Model/Motivator/motivating-batches';
import { WeeklyDiet } from 'src/app/Model/weekly-diet';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AdminMsgService {

  cus = new Users();
  // cus: CurrentUser = new CurrentUser('UNMAE','UID');

  constructor(private http: HttpClient, private router: Router) {

    this.baseUrl = 'http://localhost:8080';
  }







  private baseUrl: string;

  private users: Users[];
  private moti: Motivator[];
  in: UserInbox

// To handle the http error response
  handleErr = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      this.router.navigate(['error']);
    }
    return throwError(error.message || error);
  }

  ////////////////////////////////     ADMIN SERVICES ///////////////////////////////////////////////////////

  /**
   *
   * Admin related services..
   */

  // To Post Admin Outbox messages
  public adminOutbox(out: AdminOutbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminOutbox>(this.baseUrl + '/postAdminOutbox', out, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get Admin outbox messages
  public adminGetOutbox(): Observable<AdminOutbox[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<AdminOutbox[]>(this.baseUrl + '/getAdminOutbox', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get admin Inbox messages
  public adminGetInbox(): Observable<AdminInbox[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<AdminInbox[]>(this.baseUrl + '/getAdminInbox', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // To save in admin older post
  public adminOlderPost(post: AdminOlderPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminOlderPost>(this.baseUrl + '/postAdminOlderPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get admin older post
  public getAdminOlderPost(): Observable<AdminOlderPost[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<AdminOlderPost[]>(this.baseUrl + '/getAdminOlderPost', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // To save in admin inbox
  public adminPostInbox(inb: AdminInbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminInbox>(this.baseUrl + '/postAdminInbox', inb, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To save in admin view post
  public adminPostViewPost(post: AdminViewPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminViewPost>(this.baseUrl + '/postAdminViewPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get admin view post
  public getAdminViewPost(): Observable<AdminViewPost[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<AdminViewPost[]>(this.baseUrl + '/getAdminViewPost', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }



  // Admin create batch
  public adminPostCreateBatch(b: Batches): Observable<any> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Batches>(this.baseUrl + '/postCreateBatch', b, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Admin create new group
  public adminPostCreateGroup(g: Groups) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Groups>(this.baseUrl + '/postCreateGroup', g, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Admin adding new motivator
  public adminAddMoti(moti: Motivator) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Motivator>(this.baseUrl + '/postAddMoti', moti, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Admin  adding new user
  public adminAddUser(user: Users) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Users>(this.baseUrl + '/postAddUser', user, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Admin to get motivators of each batch
  public adminGetAssignMoti(): Observable<MotiBatch[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<MotiBatch[]>(this.baseUrl + '/getAssignMotiDetails', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // To check is motivator is available in batch ?
  public isMotiAvail(moti: string, batch: string): Observable<AssignMoti[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<AssignMoti[]>(`${this.baseUrl}/isMotiAvail/${moti}/${batch}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );

  }

  // Assigning new motivator for a batch
  public assignNewMotivator(m: AssignMoti) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AssignMoti>(this.baseUrl + '/postAssignMotivator', m, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Removing motivator from a batch
  public deAssignMoti(b: string, id: string) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.delete<void>(`${this.baseUrl}/deAssignMoti/${b}/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get users dailylog
  public getDailyLog(): Observable<UserDailylog[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserDailylog[]>(this.baseUrl + '/getDailyLog', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get users dailylog based on date
  public getDailyLogByDate(date: string): Observable<UserDailylog[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserDailylog[]>(`${this.baseUrl}/getDailyLogByDate/${date}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Admin to detele posted post
  public adminDeletePost(post: AdminOlderPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminOlderPost>(this.baseUrl + '/adminDeletePost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // Admin to delete sent messages
  public adminDeleteMessage(msg: AdminOutbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminOutbox>(this.baseUrl + '/adminDeleteMessage', msg, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Admin to delete inbox messages
  public adminDeleteInbox(msg: AdminInbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminInbox>(this.baseUrl + '/adminDeleteInbox', msg, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // Admin to delete view post
  public adminDeleteViewPost(post: AdminViewPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<AdminViewPost>(this.baseUrl + '/adminDeleteViewPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // To conver user into motivator by admin
  public convertUserToMoti(user: Users) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<Users>(this.baseUrl + '/convertUserToMoti', user, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  //////////////////////////////////////////     USER SERVICES     ////////////////////////////////////////

  /**
   *
   * Services related to users..
   *
   */

  // To post messages in user inbox
  public userPostInbox(inb: UserInbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserInbox>(this.baseUrl + '/postUserInbox', inb, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To post in user view post
  public userPostViewPost(post: UserViewPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserViewPost>(this.baseUrl + '/postUserViewPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To post message in user outbox
  public userPostOutbox(out: UserOutbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserOutbox>(this.baseUrl + '/postUserOutbox', out, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get user outbox
  public userGetOutbox(id: string): Observable<UserOutbox[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserOutbox[]>(`${this.baseUrl}/getUserOutbox/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get user inbox messages
  public userGetInbox(id: string): Observable<UserInbox[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserInbox[]>(`${this.baseUrl}/getUserInbox/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // User to update dailylogs
  public userPostDailylog(log: UserDailylog) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserDailylog>(this.baseUrl + '/postUserDailylog', log, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // User to update monthly measurements
  public userPostMonthlyMeas(mes: UserMonthlymeas) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserMonthlymeas>(this.baseUrl + '/postUserMonthlyMeas', mes, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // User to get updated monthly measurements
  public adminGetMonthlyMeas(id: string): Observable<UserMonthlymeas[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserMonthlymeas[]>(`${this.baseUrl}/getMonthlyReport/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To save in user older post
  public userPostOlderPost(post: UserOlderPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserOlderPost>(this.baseUrl + '/postUserOlderPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get user older post
  public userGetOlderPost(id: string): Observable<UserOlderPost[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserOlderPost[]>(`${this.baseUrl}/getUserOlderPost/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );

  }

  // To get user view post
  public userGetViewPost(id: string): Observable<UserViewPost[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserViewPost[]>(`${this.baseUrl}/getUserViewPost/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );

  }

  // To get user weekly diet plan
  public getUserWeeklyDiet(id: string): Observable<WeeklyDiet[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<WeeklyDiet[]>(`${this.baseUrl}/getUserWeeklyDiet/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );

  }


  // User to delete post
  public userDeletePost(post: UserOlderPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserOlderPost>(this.baseUrl + '/userDeletePost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // User to delete sent messages
  public userDeleteMessage(msg: UserOutbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserOutbox>(this.baseUrl + '/userDeleteMessage', msg, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // User to delete inbox messages
  public userDeleteInbox(msg: UserInbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserInbox>(this.baseUrl + '/userDeleteInbox', msg, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // User to delete view post
  public userDeleteViewPost(post: UserViewPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<UserViewPost>(this.baseUrl + '/userDeleteViewPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }




  /////////////////////////////////////////////////    MOTIVATOR    SERVICES     ///////////////////////////////////

  /**
   *
   * Services related to Motivators
   *
   */

  //  To post message in motivator inbox
  public motiPostInbox(inb: MotiInbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiInbox>(this.baseUrl + '/postMotiInbox', inb, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To post in motivator View post
  public motiPostViewPost(post: MotiViewPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiViewPost>(this.baseUrl + '/postMotiViewPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To post in motivator older post
  public motiPostOlderPost(post: MotiOlderPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiOlderPost>(this.baseUrl + '/postMotiOlderPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get moticvator older post
  public motiGetOlderPost(id: string): Observable<MotiOlderPost[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<MotiOlderPost[]>(`${this.baseUrl}/getMotiOlderPost/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );

  }

  // To get motivator view post
  public motiGetViewPost(): Observable<MotiViewPost[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<MotiViewPost[]>(`${this.baseUrl}/getMotiViewPost/`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );

  }
  // To save messages in motivator outbox
  public motiPostOutbox(out: MotiOutbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiOutbox>(this.baseUrl + '/postMotiOutbox', out, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get motivator outbox
  public motiGetOutbox(id: string): Observable<MotiOutbox[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<MotiOutbox[]>(`${this.baseUrl}/getMotiOutbox/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get motivator inbox
  public motiGetInbox(id: string): Observable<MotiInbox[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<MotiInbox[]>(`${this.baseUrl}/getMotiInbox/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // to get batch and group combined name..
  public batchAndGroup(): Observable<string[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<string[]>(this.baseUrl + '/getBatchAndGroup', { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get batches of particular motivator
  public getMotivatingBatches(id: string): Observable<Batches[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Batches[]>(`${this.baseUrl}/getMotivatingBatches/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get user of batches that motivator is motivating
  public getMotivatingUsers(id: string): Observable<Users[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Users[]>(`${this.baseUrl}/getMotivatingUsers/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // To get dailylogs based on date and batch
  public getDailyLogByDateAndBatch(id: string, d: string): Observable<UserDailylog[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserDailylog[]>(`${this.baseUrl}/getDailyLogByDate/${id}/${d}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }


  // To get dailylog based on batches
  public getDailyLogByBatch(b: string): Observable<UserDailylog[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserDailylog[]>(`${this.baseUrl}/getDailyLogByBatch/${b}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get users dailylog
  public getDailyLogByMotivator(id: string): Observable<UserDailylog[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<UserDailylog[]>(`${this.baseUrl}/getDailyLogByMotivator/${id}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }






  // To delete motivator post
  public motiDeletePost(post: MotiOlderPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiOlderPost>(this.baseUrl + '/motivatorDeletePost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To delete motivator sent messages
  public motiDeleteMessage(msg: MotiOutbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiOutbox>(this.baseUrl + '/motivatorDeleteMessage', msg, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To delete motivator inbox messages
  public motiDeleteInbox(msg: MotiInbox) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiInbox>(this.baseUrl + '/motivatorDeleteInbox', msg, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To delete motivator view post
  public motiDeleteViewPost(post: MotiViewPost) {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.post<MotiViewPost>(this.baseUrl + '/motivatorDeleteViewPost', post, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }






  ///////////////////////////////////////////// SEARCH //////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  /**
   *
   * It contains the services related to searc..
   *
   *
   */

  // To search by user
  public searchByUser(value: string): Observable<Users[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Users[]>(`${this.baseUrl}/searchByUser/${value}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To search by motivator
  public searchByMoti(value: string): Observable<Motivator[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Motivator[]>(`${this.baseUrl}/searchByMoti/${value}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To search by batch
  public searchByBatch(value: string): Observable<Batches[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Batches[]>(`${this.baseUrl}/searchByBatch/${value}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To search by group
  public searchByGroup(value: string): Observable<Groups[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Groups[]>(`${this.baseUrl}/searchByGroup/${value}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get batch motivator details.
  public batchMotivatorDetails(value: string): Observable<Motivator[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Motivator[]>(`${this.baseUrl}/batchMotivatorDetails/${value}`, { headers }
    ).pipe(
      catchError(
        this.handleErr
      )
    );
  }
  // To get users in particular batch
  public userFindByBatch(batch: string): Observable<Users[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Users[]>(`${this.baseUrl}/userFindByBatch/${batch}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

  // To get users in particular group
  public userFindByGroup(group: string): Observable<Users[]> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(localStorage.getItem('userid') + ':' + localStorage.getItem('password'))
      }
    );
    return this.http.get<Users[]>(`${this.baseUrl}/userFindByGroup/${group}`, { headers }).pipe(
      catchError(
        this.handleErr
      )
    );
  }

}












