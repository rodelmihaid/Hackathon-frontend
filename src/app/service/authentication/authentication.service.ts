import {Injectable} from '@angular/core';
import {SignInData} from "../../model/signInData";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";
import {JwtToken} from "../../model/jwtToken";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url.service";
import {RequestService} from "../request.service";
import {RoleType} from "../../enum/role.type";
import {BehaviorSubject} from "rxjs";


@Injectable()
export class AuthenticationService {


  /*jwtToken: string | null = "";
  decodedToken: JwtToken | undefined;
  authorities: string = "";
  ZERO_MILLISECONDS = '000';
  private readonly mockedUser = new SignInData('admin@gmail.com', 'admin123');
  isAuthenticated = false;

  constructor(private router: Router, private httpClient: HttpClient, private urlService: UrlService, public requestService: RequestService) {
  }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkEmail((signInData.getEmail())) && this.checkPassword(signInData.getPassword());
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();

  }

  atUserLogin(token: string | null) {

    if (token != null) {
      this.jwtToken = token;
      this.decodedToken = jwtDecode(token);
      // @ts-ignore
      this.authorities = this.decodedToken?.roles[0]['authority'];
      localStorage.setItem("jwt-token", this.jwtToken);
      console.log(this.authorities)

      // console.log("autoritati",this.decodedToken?.roles);
    }
  }

  decodeToken(token: string): JwtToken | undefined {
    if (token != null) {
      this.decodedToken = <JwtToken>jwtDecode(token);
      return this.decodedToken;

    }
    return undefined;
  }

  userHasAuthority(authority: string): boolean {
    return this.authorities == authority;
  }

  userIsAdmin() {
    return this.userHasAuthority(RoleType[RoleType.ADMIN]);
  }

  cleanLocalToken() {
    this.jwtToken = '';
    this.decodedToken = undefined;
    this.authorities = "";
  }

  loadLocalTokenFromStorage() {
    const token = localStorage.getItem("jwt-token");
    if (token == null) {
      return;
    }
    this.jwtToken = token;
    this.decodedToken = this.decodeToken(token);
    // @ts-ignore
    this.authorities = this.decodedToken?.roles[0]['authority'];
  }

  isUserLoggedIn() {
    this.loadLocalTokenFromStorage();
    if (this.jwtToken == null || this.decodedToken == null) {
      return false;
    }
    return this.checkTokenValidity();
  }

  atUserLogout() {
    if (localStorage.getItem("jwt-token") != null) {
      this.cleanLocalToken();
      localStorage.removeItem("jwt-token");
    }
  }


  checkTokenValidity() {
    const userEmail = this.decodedToken?.sub;
    const tokenExpirationDate = this.decodedToken?.exp;

    if (userEmail == null) {
      return false
    }
    if (tokenExpirationDate == null) {
      return false
    }
    const tokenExpirationNumber: Number = Number(tokenExpirationDate + '' + this.ZERO_MILLISECONDS)
    const currentTime: Number = Number(new Date())

    if (tokenExpirationNumber < currentTime) {
      //logout
      return false
    }
    return true;

  }
  getUserEmailFromToken(){
    if(this.decodedToken!=null){
      return this.decodedToken.sub;
    }
    return null;
  }*/
  jwtToken: string | null ="";
  decodedToken: JwtToken | undefined;
  authorities: string = "";
  ZERO_MILLISECONDS = '000';

  constructor(private httpClient: HttpClient, private urlService: UrlService, public requestService: RequestService) {

  }

  // register(userModel: User) {
  //   this.httpClient.post<User>(this.urlService.getRegisterUrl(), userModel, this.urlService.getRequestOptions())
  //     .subscribe(responseData => {
  //         alert("User registered succesfull]y!")
  //       },
  //       error => {
  //         alert("Something went wrong!")
  //       }
  //     );
  // }



  atUserLogout() {
    if (localStorage.getItem("jwt-token") != null) {
      this.cleanLocalToken();
      localStorage.removeItem("jwt-token");
    }
  }

  atUserLogin(token: string | null) {

    if (token != null) {
      this.jwtToken = token;
      this.decodedToken = jwtDecode(token);
      // @ts-ignore
      this.authorities = this.decodedToken?.roles[0]['authority'];
      localStorage.setItem("jwt-token", this.jwtToken);
      console.log(this.authorities)

      // console.log("autoritati",this.decodedToken?.roles);
    }
    // this.jwtService.setToken(token);
    // this.jwtService.decodeToken();
    // console.log(this.jwtService.getUserEmail());
    // console.log(this.jwtService.getExpiryTime());

  }

  isUserLoggedIn() {
    this.loadLocalTokenFromStorage();
    if (this.jwtToken == null || this.decodedToken == null) {
      return false;
    }
    return this.checkTokenValidity();
  }

  cleanLocalToken() {
    this.jwtToken = '';
    this.decodedToken = undefined;
    this.authorities ="";
  }

  loadLocalTokenFromStorage() {
    const token = localStorage.getItem("jwt-token");
    if (token == null) {
      return;
    }
    this.jwtToken = token;
    this.decodedToken = this.decodeToken(token);
    // @ts-ignore
    this.authorities = this.decodedToken?.roles[0]['authority'];
  }

  checkTokenValidity() {
    const userEmail = this.decodedToken?.sub;
    const tokenExpirationDate = this.decodedToken?.exp;

    if (userEmail == null) {
      return false
    }
    if (tokenExpirationDate == null) {
      return false
    }
    const tokenExpirationNumber: Number = Number(tokenExpirationDate + '' + this.ZERO_MILLISECONDS)
    const currentTime: Number = Number(new Date())

    if (tokenExpirationNumber < currentTime) {
      //logout
      return false
    }
    return true;

  }

  getToken() {
    return this.jwtToken;
  }

  getUserEmailFromToken(){
    if(this.decodedToken!=null){
      return this.decodedToken.sub;
    }
    return null;
  }

  userHasAuthority(authority: string):boolean{
    return this.authorities == authority;
  }

  userIsProfessor(){
    // console.log("this.userHasAuthority(RoleType[RoleType.ADMIN])");
    // console.log(this.userHasAuthority(RoleType[RoleType.PROFESSOR]));
    return this.userHasAuthority(RoleType[RoleType.PROFESSOR]);
  }
  userIsAdmin(){
    // console.log("this.userHasAuthority(RoleType[RoleType.ADMIN])");
    // console.log(this.userHasAuthority(RoleType[RoleType.ADMIN]));
    return this.userHasAuthority(RoleType[RoleType.ADMIN]);
  }

  setToken(token: string | null) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken(token: string): JwtToken | undefined {
    if (token != null) {
      this.decodedToken = <JwtToken>jwtDecode(token);
      return this.decodedToken;

    }
    return undefined;
  }

}
