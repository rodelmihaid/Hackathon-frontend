import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {RequestService} from "../service/request.service";
import {NotifierService} from "angular-notifier";
import {BlockRefreshService} from "../service/block.refresh.service";
import {Observable} from "rxjs";
import {RegisterComponent} from "../register/register.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()  loggedInUser:String|undefined|null = "";
  private notifier: NotifierService;

  constructor(public authenticationService: AuthenticationService, public requestService: RequestService,
              public router: Router, notifier: NotifierService, public blockRefreshService: BlockRefreshService,public dialog:MatDialog) {
    this.notifier = notifier;
  }



  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }


  ngOnInit(): void{

  }

  logout() {
    this.blockRefreshChangeValue();
    this.authenticationService.atUserLogout();
    this.showNotification('default', 'User logged out');
    this.router.navigate(['/login']);
  }

  register() {
    const dialogRef = this.dialog.open(RegisterComponent);

  }

  blockRefreshChangeValue() {
    this.blockRefreshService.setBlockRefresh(!this.blockRefreshService.getBlockRefresh());
  }


  login() {

  }


  admin() {
    this.router.navigate(["/admin"]);
  }

  home() {
    this.router.navigate([""]);
  }

  userSettings() {
    this.router.navigate(["/user-settings"]);
  }

}
