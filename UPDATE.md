# Install latest Ionic/Angular
Update @ionic/angular and @ionic/angular-toolkit to the latest release
``` bash
npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save
```

# Install latest [Angular 10](https://update.angular.io/#9.1:10.0l3)
``` bash
ng update @angular/core @angular/cli --create-commits
```

> Now most packages should be updated, just to be sure, we also need to update these 

Install the latest angular devkit updates by running:
``` bash
npm install --save-dev @angular-devkit/architect@latest @angular-devkit/build-angular@latest @angular-devkit/core@latest @angular-devkit/schematics@latest
```

``` bash
ng update rxjs --create-commits
```

---

## npm outdated
### Dependencies
``` bash
npm install --save google-libphonenumber

npm install --save dayjs@latest
```

### Dev Dependencies
``` bash
npm install --save-dev @commitlint/cli@11

npm install --save-dev @commitlint/config-angular@11

npm install --save-dev husky@4.3

npm install --save-dev codelyzer@latest
```
