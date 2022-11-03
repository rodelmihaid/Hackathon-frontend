/*
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {SignInData} from "../../model/signInData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }


  loginSubmit(signInForm: NgForm) {
      console.log(signInForm.value);
      const signInData= new SignInData(signInForm.value.email,signInForm.value.password);
      this.authenticationService.authenticate(signInData);

  }
  @Input() error: string | null | undefined   ;

  @Output() submitEM = new EventEmitter();
  hide=true;



  ngOnInit(): void {
  }

  registerClick() {
    console.log(this.authenticationService);
  }



}
*/



import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {User} from "../../model/user";
import {RequestService} from "../../service/request.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../../register/register.component";
import{NotifierService} from "angular-notifier";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  private notifier: NotifierService;
  constructor(public authenticationService: AuthenticationService,public requestService: RequestService,
              public router: Router,public dialog:MatDialog, notifier: NotifierService) {

    this.notifier = notifier;
  }


  public showNotification( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }


  ngOnInit(): void {
  }



  loginSubmit(ngForm: NgForm) {
    if(ngForm.invalid){
      return
    }
    const user = new User(ngForm.value.email,ngForm.value.password,"","", "", "","");
    this.requestService.login(user)
      .subscribe(responseData => {
          const token:string | null  = responseData.headers.get("jwt-token");
          this.authenticationService.atUserLogin(token);
          this.router.navigate(['']);
          this.showNotification( 'success', 'User logged in' );
        },
        error => {
          this.showNotification( 'error', 'Wrong credentials!' );
        })

  }

  registerClick() {
    const dialogRef = this.dialog.open(RegisterComponent);

  }



}
