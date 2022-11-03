import {Injectable} from "@angular/core";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {RoleType} from "../enum/role.type";
import {CanActivate} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {

  constructor(public authenticationService: AuthenticationService,  public router: Router) {
}

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any> | Promise<any> | boolean
{
  if (this.authenticationService.isUserLoggedIn() && this.authenticationService.userHasAuthority(RoleType[RoleType.PROFESSOR])) {

    // this.router.navigate(['']);
    return true;
  }
  this.router.navigate([''])
  return false;
}
}
