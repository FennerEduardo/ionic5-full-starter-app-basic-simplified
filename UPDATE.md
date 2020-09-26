# Install latest Ionic/Angular
Update @ionic/angular and @ionic/angular-toolkit to the latest release
``` bash
npm install --save @ionic/angular@latest @ionic/angular-toolkit@latest
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

---

# Server Side Rendering
``` bash
ng add @nguniversal/express-engine
```

``` bash
npm install --save @ionic/angular-server
```

<!-- Required by @angular/platform-server (from @ionic/angular-server) -->
``` bash
npm install --save @angular/animations
```

---

# Capacitor
<!-- Need to update to latest version to fix SSR issue -->
``` bash
npm install --save-dev @capacitor/cli@latest
npm install --save @capacitor/core@latest

npm install --save @capacitor/android@latest
npm install --save @capacitor/ios@latest
```
