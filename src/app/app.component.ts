import {Component} from '@angular/core';
import {AuthenticationService} from "./service/authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catalog-ui';
  public loggedInUser: string | undefined | null = "";

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    console.log("user:", this.authenticationService.getUserEmailFromToken())
  }

  sendLoggedInUserEmail() {
    this.loggedInUser = this.authenticationService.getUserEmailFromToken();
  }

}
