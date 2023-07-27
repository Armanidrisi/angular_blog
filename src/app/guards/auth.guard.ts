import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    const isAuthenticated = !!localStorage.getItem("user");

    if (isAuthenticated) {
      return true;
    } else {
      // User is not authenticated, redirect to the login page
      return this.router.createUrlTree(["/login"]);
    }
  }
}
