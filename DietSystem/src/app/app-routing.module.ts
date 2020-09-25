import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/Admin/header/header.component';
import { ViewUsersComponent } from './Components/Admin/view-users/view-users.component';
import { PendingRequestsComponent } from './Components/Admin/pending-requests/pending-requests.component';
import { RegActionComponent } from './Components/Admin/reg-action/reg-action.component';
import { UserProfileComponent } from './Components/Admin/user-profile/user-profile.component';
import { UserModifyComponent } from './Components/Admin/user-modify/user-modify.component';
import { AdminMsgComponent } from './Components/Admin/Message/adminCreate-msg/admin-msg.component';
import { AdminInboxMsgComponent } from './Components/Admin/Message/admin-inbox-msg/admin-inbox-msg.component';
import { ViewMotiComponent } from './Components/Admin/view-moti/view-moti.component';
import { MotiProfileComponent } from './Components/Admin/moti-profile/moti-profile.component';
import { MotiModifyComponent } from './Components/Admin/moti-modify/moti-modify.component';
import { AdminOutbox } from './Model/Admin/admin-outbox';
import { AdminOutboxMsgComponent } from './Components/Admin/Message/admin-outbox-msg/admin-outbox-msg.component';
import { AdminCreatePostComponent } from './Components/Admin/Post/admin-create-post/admin-create-post.component';
import { AdminViewPostComponent } from './Components/Admin/Post/admin-view-post/admin-view-post.component';
import { AdminOlderPostComponent } from './Components/Admin/Post/admin-older-post/admin-older-post.component';
import { MotiHeaderComponent } from './Components/Motivator/moti-header/moti-header.component';
import { MotiCreateMsgComponent } from './Components/Motivator/Message/moti-create-msg/moti-create-msg.component';
import { MotiOutboxMsgComponent } from './Components/Motivator/Message/moti-outbox-msg/moti-outbox-msg.component';
import { MotiInboxMsgComponent } from './Components/Motivator/Message/moti-inbox-msg/moti-inbox-msg.component';
import { MotiCreatePostComponent } from './Components/Motivator/Post/moti-create-post/moti-create-post.component';
import { MotiViewPostComponent } from './Components/Motivator/Post/moti-view-post/moti-view-post.component';
import { MotiOlderPostComponent } from './Components/Motivator/Post/moti-older-post/moti-older-post.component';
import { UserCreateMsgComponent } from './Components/User/Message/user-create-msg/user-create-msg.component';
import { UserHeaderComponent } from './Components/User/user-header/user-header.component';
import { UserInboxMsgComponent } from './Components/User/Message/user-inbox-msg/user-inbox-msg.component';
import { UserOutboxMsgComponent } from './Components/User/Message/user-outbox-msg/user-outbox-msg.component';
import { LoginComponent } from './Components/login/login.component';
import { UpdateDailylogComponent } from './Components/User/update-dailylog/update-dailylog.component';
import { UpdateMonthlymeasComponent } from './Components/User/update-monthlymeas/update-monthlymeas.component';
import { UserCreatePostComponent } from './Components/User/Post/user-create-post/user-create-post.component';
import { UserViewPostComponent } from './Components/User/Post/user-view-post/user-view-post.component';
import { UserOlderPostComponent } from './Components/User/Post/user-older-post/user-older-post.component';
import { CreateBatchComponent } from './Components/Admin/create-batch/create-batch.component';
import { CreateGroupComponent } from './Components/Admin/create-group/create-group.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { AddUserComponent } from './Components/Admin/add-user/add-user.component';
import { AddMotiComponent } from './Components/Admin/add-moti/add-moti.component';
import { AssignMotiComponent } from './Components/Admin/assign-moti/assign-moti.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { DietUploadComponent } from './Components/Admin/diet-upload/diet-upload.component';
import { ViewReportComponent } from './Components/view-report/view-report.component';
import { ViewAllComponent } from './Components/Motivator/view-all/view-all.component';
import { ViewMotibatchComponent } from './Components/Motivator/view-motibatch/view-motibatch.component';
import { MotivatorProfileComponent } from './Components/Motivator/motivator-profile/motivator-profile.component';
import { MotivatorProfileEditComponent } from './Components/Motivator/motivator-profile-edit/motivator-profile-edit.component';
import { MotivatorDietUploadComponent } from './Components/Motivator/motivator-diet-upload/motivator-diet-upload.component';
import { UserViewReportComponent } from './Components/User/user-view-report/user-view-report.component';
import { UserViewProfileComponent } from './Components/User/user-view-profile/user-view-profile.component';
import { UserEditProfileComponent } from './Components/User/user-edit-profile/user-edit-profile.component';
import { UserViewWeeklydietComponent } from './Components/User/user-view-weeklydiet/user-view-weeklydiet.component';
import { DailyLogComponent } from './Components/Motivator/daily-log/daily-log.component';
import { AdminDailylogComponent } from './Components/Admin/admin-dailylog/admin-dailylog.component';
import { UserViewBatchComponent } from './Components/User/user-view-batch/user-view-batch.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ConvertUserComponent } from './Components/Admin/convert-user/convert-user.component';
import { ErrorHandlerComponent } from './Components/error-handler/error-handler.component';
import { ViewAvailableBatchesComponent } from './Components/Admin/view-available-batches/view-available-batches.component';

const routes: Routes = [

  // Login & Logout related routes..

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorHandlerComponent },


  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },


  { path: 'admin/home', component: ViewUsersComponent },
  { path: 'motivator/home', component: ViewMotibatchComponent },
  { path: 'user/home', component: UpdateDailylogComponent },



// Admin component routes

  { path: 'admin', component: ViewUsersComponent },
  { path: 'admin/message', component: AdminMsgComponent },
  { path: 'admin/post', component: AdminCreatePostComponent },
  { path: 'admin/view/users', component: ViewUsersComponent, data: { tit: 'User Profile' } },
  { path: 'admin/view/motivators', component: ViewMotiComponent },
  { path: 'admin/pending-request', component: PendingRequestsComponent },
  { path: 'request-action/:name', component: RegActionComponent },
  { path: 'view/report/:id', component: ViewReportComponent },
  { path: 'view/batch-group', component: ViewAvailableBatchesComponent },
  { path: 'create/batch', component: CreateBatchComponent },
  { path: 'create/group', component: CreateGroupComponent },
  { path: 'add/new/user', component: AddUserComponent },
  { path: 'add/new/motivator', component: AddMotiComponent },
  { path: 'assignMotivator', component: AssignMotiComponent },
  { path: 'admin/diet-upload', component: DietUploadComponent },
  { path: 'profile/user/:name', component: UserProfileComponent },
  { path: 'modify/user/:name', component: UserModifyComponent },
  { path: 'profile/motivator/:name', component: MotiProfileComponent },
  { path: 'modify/motivator/:name', component: MotiModifyComponent },
  { path: 'admin/message/create', component: AdminMsgComponent },
  { path: 'admin/message/inbox', component: AdminInboxMsgComponent },
  { path: 'admin/message/outbox', component: AdminOutboxMsgComponent },
  { path: 'admin/post/create', component: AdminCreatePostComponent },
  { path: 'admin/post/view', component: AdminViewPostComponent },
  { path: 'admin/post/older', component: AdminOlderPostComponent },
  { path: 'admin/view/daily-log', component: AdminDailylogComponent },
  { path: 'admin/convert-user', component: ConvertUserComponent },

  // Motivator componnts routes

  { path: 'motivator', component: ViewMotibatchComponent },
  { path: 'motivator/message/', component: MotiCreateMsgComponent },
  { path: 'motivator/post/', component: MotiCreatePostComponent },

  { path: 'motivator/view-all', component: ViewAllComponent },
  { path: 'motivator/batch', component: ViewMotibatchComponent },
  { path: 'motivator/profile', component: MotivatorProfileComponent },

  { path: 'motivator/profile/edit', component: MotivatorProfileEditComponent },
  { path: 'motivator/diet-upload', component: MotivatorDietUploadComponent },
  { path: 'motivator/daily-log', component: DailyLogComponent },
  { path: 'view/report/:id', component: ViewReportComponent },
  { path: 'motivator/message/new', component: MotiCreateMsgComponent },
  { path: 'motivator/message/inbox', component: MotiInboxMsgComponent },
  { path: 'motivator/message/outbox', component: MotiOutboxMsgComponent },
  { path: 'motivator/post/create', component: MotiCreatePostComponent },
  { path: 'motivator/post/view', component: MotiViewPostComponent },
  { path: 'motivator/post/older', component: MotiOlderPostComponent },


  // User component routes

  { path: 'user', component: UpdateDailylogComponent },
  { path: 'user/message', component: UserCreateMsgComponent },
  { path: 'user/post', component: UserCreatePostComponent },
  { path: 'user/update', component: UpdateDailylogComponent },
  { path: 'user/view-batch', component: UserViewBatchComponent },
  { path: 'user/view-batch', component: UserViewBatchComponent },
  { path: 'user/view-report', component: UserViewReportComponent },
  { path: 'user/profile', component: UserViewProfileComponent },
  { path: 'user/profile/edit', component: UserEditProfileComponent },
  { path: 'user/weekly-diet', component: UserViewWeeklydietComponent },
  { path: 'user/message/new', component: UserCreateMsgComponent },
  { path: 'user/message/inbox', component: UserInboxMsgComponent },
  { path: 'user/message/outbox', component: UserOutboxMsgComponent },
  { path: 'user/update/daily-log', component: UpdateDailylogComponent },
  { path: 'user/update/monthly-measurement', component: UpdateMonthlymeasComponent },
  { path: 'user/post/create', component: UserCreatePostComponent },
  { path: 'user/post/view', component: UserViewPostComponent },
  { path: 'user/post/older', component: UserOlderPostComponent },

  // Search component routes
  { path: 'search/:type/:value', component: SearchResultComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
