import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './Components/Admin/header/header.component';
// MDB Angular Free
import { IconsModule } from 'angular-bootstrap-md'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HttpClientModule } from '@angular/common/http';

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
import { AdminOutboxMsgComponent } from './Components/Admin/Message/admin-outbox-msg/admin-outbox-msg.component';
import { AdminCreatePostComponent } from './Components/Admin/Post/admin-create-post/admin-create-post.component';
import { AdminViewPostComponent } from './Components/Admin/Post/admin-view-post/admin-view-post.component';
import { AdminOlderPostComponent } from './Components/Admin/Post/admin-older-post/admin-older-post.component';
import { MotiHeaderComponent } from './Components/Motivator/moti-header/moti-header.component';
import { MotiCreateMsgComponent } from './Components/Motivator/Message/moti-create-msg/moti-create-msg.component';
import { MotiInboxMsgComponent } from './Components/Motivator/Message/moti-inbox-msg/moti-inbox-msg.component';
import { MotiOutboxMsgComponent } from './Components/Motivator/Message/moti-outbox-msg/moti-outbox-msg.component';
import { MotiCreatePostComponent } from './Components/Motivator/Post/moti-create-post/moti-create-post.component';
import { MotiViewPostComponent } from './Components/Motivator/Post/moti-view-post/moti-view-post.component';
import { MotiOlderPostComponent } from './Components/Motivator/Post/moti-older-post/moti-older-post.component';
import { UserCreateMsgComponent } from './Components/User/Message/user-create-msg/user-create-msg.component';

import { UserInboxMsgComponent } from './Components/User/Message/user-inbox-msg/user-inbox-msg.component';
import { UserOutboxMsgComponent } from './Components/User/Message/user-outbox-msg/user-outbox-msg.component';
import { UserHeaderComponent } from './Components/User/user-header/user-header.component';
import { LoginComponent } from './Components/login/login.component';
import { UpdateDailylogComponent } from './Components/User/update-dailylog/update-dailylog.component';
import { UpdateMonthlymeasComponent } from './Components/User/update-monthlymeas/update-monthlymeas.component';
import { UserCreatePostComponent } from './Components/User/Post/user-create-post/user-create-post.component';
import { UserOlderPostComponent } from './Components/User/Post/user-older-post/user-older-post.component';
import { UserViewPostComponent } from './Components/User/Post/user-view-post/user-view-post.component';
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
import { FooterComponent } from './Components/footer/footer.component';

import { DailyLogComponent } from './Components/Motivator/daily-log/daily-log.component';
import { AdminDailylogComponent } from './Components/Admin/admin-dailylog/admin-dailylog.component';
import { UserViewBatchComponent } from './Components/User/user-view-batch/user-view-batch.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ConvertUserComponent } from './Components/Admin/convert-user/convert-user.component';

import { ErrorHandlerComponent } from './Components/error-handler/error-handler.component';
import { ViewAvailableBatchesComponent } from './Components/Admin/view-available-batches/view-available-batches.component';
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    ViewUsersComponent,
    PendingRequestsComponent,
    RegActionComponent,
    UserProfileComponent,
    UserModifyComponent,
    AdminMsgComponent,
    AdminInboxMsgComponent,
    ViewMotiComponent,
    MotiProfileComponent,
    MotiModifyComponent,
    AdminOutboxMsgComponent,
    AdminCreatePostComponent,
    AdminViewPostComponent,
    AdminOlderPostComponent,
    MotiHeaderComponent,
    MotiCreateMsgComponent,
    MotiInboxMsgComponent,
    MotiOutboxMsgComponent,
    MotiCreatePostComponent,
    MotiViewPostComponent,
    MotiOlderPostComponent,
    UserCreateMsgComponent,
    UserInboxMsgComponent,
    UserOutboxMsgComponent,
    UserHeaderComponent,
    LoginComponent,
    UpdateDailylogComponent,
    UpdateMonthlymeasComponent,
    UserCreatePostComponent,
    UserOlderPostComponent,
    UserViewPostComponent,
    CreateBatchComponent,
    CreateGroupComponent,
    RegisterComponent,
    AddUserComponent,
    AddMotiComponent,
    AssignMotiComponent,
    SearchResultComponent,
    DietUploadComponent,
    ViewReportComponent,
    ViewAllComponent,
    ViewMotibatchComponent,
    MotivatorProfileComponent,
    MotivatorProfileEditComponent,
    MotivatorDietUploadComponent,
    UserViewReportComponent,
    UserViewProfileComponent,
    UserEditProfileComponent,
    UserViewWeeklydietComponent,
    FooterComponent,
    DailyLogComponent,
    AdminDailylogComponent,
    UserViewBatchComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ConvertUserComponent,

    ErrorHandlerComponent,

    ViewAvailableBatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot(),
    IconsModule,
    FontAwesomeModule,
    AngularSvgIconModule.forRoot()

  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
