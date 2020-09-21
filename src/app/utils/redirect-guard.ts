import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // In browser, redirect to walkthrough page
    if (isPlatformBrowser(this.platformId)) {
      return this.router.parseUrl('/walkthrough');
    } else {
      // In SSR (for SEO reasons), redirect direclty to categories page
      return this.router.parseUrl('/app/categories');
    }
  }
}
