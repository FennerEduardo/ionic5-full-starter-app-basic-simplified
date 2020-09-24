import { Injectable, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { DOCUMENT, PlatformLocation } from '@angular/common';
import { SeoDataModel } from './seo-data.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService implements OnDestroy {
  _routerSubscription: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    private platformLocation: PlatformLocation
  ) {
    this._routerSubscription = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    )
    .subscribe(event => {
      // tslint:disable-next-line:no-string-literal
      const routeData = event['data'];

      const currentRouteSeoData = new SeoDataModel();

      if (routeData && routeData.seo) {
        routeData.seo.subscribe((seoData: SeoDataModel) => {
          currentRouteSeoData.title = seoData.title;
          currentRouteSeoData.description = seoData.description;
          currentRouteSeoData.keywords = seoData.keywords;
          currentRouteSeoData.image = seoData.image;

          this.setSeoMetaTags(currentRouteSeoData);
        });
      } else {
        // Set default SEO values here
        currentRouteSeoData.title = 'Ionic Full Starter App';
        currentRouteSeoData.description = 'Ionic 5 Full Starter App Template - by IonicThemes';
        currentRouteSeoData.keywords = '';
        currentRouteSeoData.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/imgs/logofacebook.png';

        this.setSeoMetaTags(currentRouteSeoData);
      }

      // Set Canonical URL
      // If you don't want to set cannonical URL comment the following line
      this.updateCanonicalUrl(this.getCurrentUrl(this.platformLocation));
    });
  }

  setSeoMetaTags(seoData: SeoDataModel) {
    this.title.setTitle(seoData.title);

    this.meta.updateTag({ name: 'description', content: seoData.description }, 'name="description"');
    this.meta.updateTag({ name: 'keywords', content: seoData.keywords }, 'name="keywords"');

    this.meta.updateTag({ name: 'twitter:title', content: seoData.title }, 'name="twitter:title"');
    this.meta.updateTag({ name: 'twitter:description', content: seoData.description }, 'name="twitter:description"');
    this.meta.updateTag({ name: 'twitter:image', content: seoData.image }, 'name="twitter:image"');

    this.meta.updateTag({ name: 'DC.title', content: seoData.title }, 'name="DC.title"');
    this.meta.updateTag({ name: 'DC.description', content: seoData.description }, 'name="DC.description"');

    this.meta.updateTag({ property: 'og:title', content: seoData.title }, 'property="og:title"');
    this.meta.updateTag({ property: 'og:description', content: seoData.description }, 'property="og:description"');
    this.meta.updateTag({ property: 'og:image', content: seoData.image }, 'property="og:image"');

    // You can add more tags here if you need.
  }

  updateCanonicalUrl(url: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement = this.document.querySelector(`link[rel='canonical']`) || null;
    if (element == null) {
      element = this.document.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url);
  }

  getCurrentUrl(platformLocation: any) {
    return platformLocation.location.origin + platformLocation.location.pathname;
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }
}
