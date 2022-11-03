import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SubjectPageComponent} from "./catalog/subject-page/subject-page.component";
import {TabsComponent} from "./catalog/tabs/tabs.component";
import {LoginComponent} from "./components/login/login.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {AuthorizeGuard} from "./guards/authorize.guard";
import {AdminGuard} from "./guards/admin.guard";
import {MenuComponent} from "./menu/menu.component";
import {TeacherPageComponent} from "./catalog/teacher-page/teacher-page.component";
import {TeacherGuard} from "./guards/teacher.guard";

const routes: Routes = [
  // {path:'', redirectTo:'login', pathMatch:'full'},
 /* {path:'', component:StudentSocialComponent,canActivate: [AuthorizeGuard],},
  {path:'login', component:LoginComponent},
  {path:'student-social', component:StudentSocialComponent,canActivate: [AuthorizeGuard]},
  {path:'admin',component:AdminPageComponent, canActivate:[AdminGuard]},
  {path:'user-settings',component:UserSettingsComponent, canActivate:[AuthorizeGuard]},*/


  {path:'', component:CatalogComponent,canActivate: [AuthorizeGuard]},
  {path:'login', component:LoginComponent},
  {path:'home', component:CatalogComponent,canActivate: [AuthorizeGuard]},
  {path:'student-catalog', component:SubjectPageComponent,canActivate: [AuthorizeGuard]},
  {path:'admin',component:TabsComponent,canActivate:[AdminGuard]},
  {path:'teacher',component:TeacherPageComponent,canActivate:[TeacherGuard]},

  {path:'user-settings',component:CatalogComponent, canActivate:[AuthorizeGuard]}

];

/*
const routes: Routes =[
  {path:'login', component:LoginComponent},
  {path:'' , redirectTo:'/login',pathMatch:'full'},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'**', component:NotFoundComponent},
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



