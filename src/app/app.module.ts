import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TabsComponent} from "./catalog/tabs/tabs.component";
import {SubjectComponent} from "./catalog/tabs/subject/subject.component";
import {TeacherListComponent} from "./catalog/tabs/teacher-list/teacher-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TeacherItemComponent} from "./catalog/tabs/teacher-list/teacher-item/teacher-item.component";
import {AddUpdateTeacherComponent} from "./catalog/tabs/teacher-list/add-update-teacher/add-update-teacher.component";
import {RequestService} from "./service/request.service";
import {TeacherSubjectListComponent} from "./catalog/tabs/teacher-list/add-update-teacher/teacher-subject-list/teacher-subject-list.component";
import {TeacherSubjectComponent} from "./catalog/tabs/teacher-list/add-update-teacher/teacher-subject-list/teacher-subject/teacher-subject.component";
import {RouterModule} from "@angular/router";
import {SubjectPageComponent} from "./catalog/subject-page/subject-page.component";
import { AppRoutingModule } from './app-routing.module';
import {
  EnroledSubjectsListComponent
} from "./catalog/subject-page/enroled-subjects-list/enroled-subjects-list.component";
import {
  EnroledSubjectComponent
} from "./catalog/subject-page/enroled-subjects-list/enroled-subject/enroled-subject.component";
import {LoginComponent} from "./components/login/login.component";
import {
  ProjectComponent
} from "./catalog/subject-page/enroled-subjects-list/enroled-subject/project-list/project/project.component";
import {
  ProjectListComponent
} from "./catalog/subject-page/enroled-subjects-list/enroled-subject/project-list/project-list.component";
import {RegisterComponent} from "./register/register.component";
import {MenuComponent} from "./menu/menu.component";
import {NotifierModule} from "angular-notifier";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthenticationService} from "./service/authentication/authentication.service";
import {UrlService} from "./service/url.service";
import {AuthorizeGuard} from "./guards/authorize.guard";
import {SubjectService} from "./service/subject.service";
import {DatePipe} from "@angular/common";
import {AdminGuard} from "./guards/admin.guard";
import {RefreshService} from "./service/refresh.service";
import {BlockRefreshService} from "./service/block.refresh.service";
import {SecurityRequestInterceptor} from "./security.request.interceptor";
import {UtilsService} from "./service/utils.service";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {TeacherPageComponent} from "./catalog/teacher-page/teacher-page.component";
import {
  TeacherUserSubjectListComponent
} from "./catalog/teacher-page/teacher-user-subject-list/teacher-user-subject-list.component";
import {
  TeacherUserSubjectComponent
} from "./catalog/teacher-page/teacher-user-subject-list/teacher-user-subject/teacher-user-subject.component";



@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    TabsComponent,
    SubjectComponent,
    TeacherListComponent,
    TeacherItemComponent,
    AddUpdateTeacherComponent,
    TeacherSubjectListComponent,
    TeacherSubjectComponent,
    SubjectPageComponent,
    EnroledSubjectsListComponent,
    EnroledSubjectComponent,
    LoginComponent,
    ProjectComponent,
    ProjectListComponent,
    RegisterComponent,
    MenuComponent,
    ForgotPasswordComponent,
    TeacherPageComponent,
    TeacherUserSubjectListComponent,
    TeacherUserSubjectComponent



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NotifierModule,
    MatToolbarModule,
    NotifierModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SecurityRequestInterceptor, multi: true},
    AuthenticationService,
    UrlService,
    AuthorizeGuard,
    RequestService,
    SubjectService,
    DatePipe,
    UtilsService,
    AdminGuard,
    RefreshService,
    BlockRefreshService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
