(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-firebase-integration-module"],{

/***/ "./node_modules/@angular/fire/es2015/angularfire2.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/fire/es2015/angularfire2.js ***!
  \***********************************************************/
/*! exports provided: RealtimeDatabaseURL, DATABASE_URL, ɵZoneScheduler, ɵBlockUntilFirstOperator, ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, runOutsideAngular, runInZone, FirebaseZoneScheduler, ɵlazySDKProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return RealtimeDatabaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATABASE_URL", function() { return DATABASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵZoneScheduler", function() { return ɵZoneScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵBlockUntilFirstOperator", function() { return ɵBlockUntilFirstOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAngularFireSchedulers", function() { return ɵAngularFireSchedulers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵkeepUnstableUntilFirstFactory", function() { return ɵkeepUnstableUntilFirstFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runOutsideAngular", function() { return runOutsideAngular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInZone", function() { return runInZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseZoneScheduler", function() { return FirebaseZoneScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵlazySDKProxy", function() { return ɵlazySDKProxy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const RealtimeDatabaseURL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.realtimeDatabaseURL');
const DATABASE_URL = RealtimeDatabaseURL;
function noop() { }
class ɵZoneScheduler {
    constructor(zone, delegate = rxjs__WEBPACK_IMPORTED_MODULE_2__["queueScheduler"]) {
        this.zone = zone;
        this.delegate = delegate;
    }
    now() {
        return this.delegate.now();
    }
    schedule(work, delay, state) {
        const targetZone = this.zone;
        const workInZone = function (state) {
            targetZone.runGuarded(() => {
                work.apply(this, [state]);
            });
        };
        return this.delegate.schedule(workInZone, delay, state);
    }
}
class ɵBlockUntilFirstOperator {
    constructor(zone) {
        this.zone = zone;
        this.task = null;
    }
    call(subscriber, source) {
        const unscheduleTask = this.unscheduleTask.bind(this);
        this.task = this.zone.run(() => Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop));
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(unscheduleTask, unscheduleTask, unscheduleTask)).subscribe(subscriber).add(unscheduleTask);
    }
    unscheduleTask() {
        if (this.task != null && this.task.state === 'scheduled') {
            this.task.invoke();
            this.task = null;
        }
    }
}
class ɵAngularFireSchedulers {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.outsideAngular = ngZone.runOutsideAngular(() => new ɵZoneScheduler(Zone.current));
        this.insideAngular = ngZone.run(() => new ɵZoneScheduler(Zone.current, rxjs__WEBPACK_IMPORTED_MODULE_2__["asyncScheduler"]));
    }
}
function ɵkeepUnstableUntilFirstFactory(schedulers, platformId) {
    return function keepUnstableUntilFirst(obs$) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId)) {
            obs$ = obs$.lift(new ɵBlockUntilFirstOperator(schedulers.ngZone));
        }
        return obs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["subscribeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(schedulers.insideAngular));
    };
}
const runOutsideAngular = (zone) => (obs$) => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
        return zone.runOutsideAngular(() => {
            runInZone(zone)(obs$).subscribe(subscriber);
        });
    });
};
const runInZone = (zone) => (obs$) => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
        return obs$.subscribe(value => zone.run(() => subscriber.next(value)), error => zone.run(() => subscriber.error(error)), () => zone.run(() => subscriber.complete()));
    });
};
class FirebaseZoneScheduler {
    constructor(zone, platformId) {
        this.zone = zone;
        this.platformId = platformId;
    }
    schedule(...args) {
        return this.zone.runGuarded(function () { return rxjs__WEBPACK_IMPORTED_MODULE_2__["queueScheduler"].schedule.apply(rxjs__WEBPACK_IMPORTED_MODULE_2__["queueScheduler"], args); });
    }
    keepUnstableUntilFirst(obs$) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
                const noop = () => { };
                const task = Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop);
                obs$.subscribe(next => {
                    if (task.state === 'scheduled') {
                        task.invoke();
                    }
                    ;
                    subscriber.next(next);
                }, error => {
                    if (task.state === 'scheduled') {
                        task.invoke();
                    }
                    subscriber.error(error);
                }, () => {
                    if (task.state === 'scheduled') {
                        task.invoke();
                    }
                    subscriber.complete();
                });
            });
        }
        else {
            return obs$;
        }
    }
    runOutsideAngular(obs$) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            return this.zone.runOutsideAngular(() => {
                return obs$.subscribe(value => this.zone.run(() => subscriber.next(value)), error => this.zone.run(() => subscriber.error(error)), () => this.zone.run(() => subscriber.complete()));
            });
        });
    }
}
const noopFunctions = ['ngOnDestroy'];
const ɵlazySDKProxy = (klass, observable, zone) => {
    return new Proxy(klass, {
        get: (_, name) => zone.runOutsideAngular(() => {
            if (klass[name]) {
                return klass[name];
            }
            if (noopFunctions.includes(name)) {
                return () => { };
            }
            let promise = observable.toPromise().then(mod => {
                const ret = mod && mod[name];
                if (typeof ret == 'function') {
                    return ret.bind(mod);
                }
                else if (ret && ret.then) {
                    return ret.then((res) => zone.run(() => res));
                }
                else {
                    return zone.run(() => ret);
                }
            });
            return new Proxy(() => undefined, {
                get: (_, name) => promise[name],
                apply: (self, _, args) => promise.then(it => it && it(...args))
            });
        })
    });
};
//# sourceMappingURL=angularfire2.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/es2015/firebase.app.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/fire/es2015/firebase.app.module.js ***!
  \******************************************************************/
/*! exports provided: FirebaseOptionsToken, FirebaseNameOrConfigToken, FIREBASE_OPTIONS, FIREBASE_APP_NAME, FirebaseApp, VERSION, _firebaseAppFactory, AngularFireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseOptionsToken", function() { return FirebaseOptionsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseNameOrConfigToken", function() { return FirebaseNameOrConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_OPTIONS", function() { return FIREBASE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_NAME", function() { return FIREBASE_APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseApp", function() { return FirebaseApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_firebaseAppFactory", function() { return _firebaseAppFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireModule", function() { return AngularFireModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AngularFireModule_1;


const FirebaseOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.app.options');
const FirebaseNameOrConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.app.nameOrConfig');
const FIREBASE_OPTIONS = FirebaseOptionsToken;
const FIREBASE_APP_NAME = FirebaseNameOrConfigToken;
class FirebaseApp {
}
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('5.4.2');
function _firebaseAppFactory(options, zone, nameOrConfig) {
    const name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
    const config = typeof nameOrConfig === 'object' && nameOrConfig || {};
    config.name = config.name || name;
    const existingApp = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.filter(app => app && app.name === config.name)[0];
    return (existingApp || zone.runOutsideAngular(() => firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(options, config)));
}
const FirebaseAppProvider = {
    provide: FirebaseApp,
    useFactory: _firebaseAppFactory,
    deps: [
        FIREBASE_OPTIONS,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), FIREBASE_APP_NAME]
    ]
};
let AngularFireModule = AngularFireModule_1 = class AngularFireModule {
    constructor(platformId) {
        if (firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.registerVersion) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.registerVersion('angularfire', VERSION.full, platformId.toString());
            firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.registerVersion('angular', _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full);
        }
    }
    static initializeApp(options, nameOrConfig) {
        return {
            ngModule: AngularFireModule_1,
            providers: [
                { provide: FIREBASE_OPTIONS, useValue: options },
                { provide: FIREBASE_APP_NAME, useValue: nameOrConfig }
            ]
        };
    }
};
AngularFireModule = AngularFireModule_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        providers: [FirebaseAppProvider],
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [Object])
], AngularFireModule);

//# sourceMappingURL=firebase.app.module.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/es2015/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/fire/es2015/index.js ***!
  \****************************************************/
/*! exports provided: RealtimeDatabaseURL, DATABASE_URL, ɵZoneScheduler, ɵBlockUntilFirstOperator, ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, runOutsideAngular, runInZone, FirebaseZoneScheduler, ɵlazySDKProxy, FirebaseOptionsToken, FirebaseNameOrConfigToken, FIREBASE_OPTIONS, FIREBASE_APP_NAME, FirebaseApp, VERSION, _firebaseAppFactory, AngularFireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/@angular/fire/es2015/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RealtimeDatabaseURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATABASE_URL", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DATABASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵZoneScheduler", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵZoneScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵBlockUntilFirstOperator", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵBlockUntilFirstOperator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵAngularFireSchedulers", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵAngularFireSchedulers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵkeepUnstableUntilFirstFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵkeepUnstableUntilFirstFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runOutsideAngular", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["runOutsideAngular"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runInZone", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["runInZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseZoneScheduler", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FirebaseZoneScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵlazySDKProxy", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵlazySDKProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseOptionsToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FirebaseOptionsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseNameOrConfigToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FirebaseNameOrConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_OPTIONS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FIREBASE_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_NAME", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FIREBASE_APP_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseApp", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FirebaseApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_firebaseAppFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["_firebaseAppFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/es2015/public_api.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/fire/es2015/public_api.js ***!
  \*********************************************************/
/*! exports provided: RealtimeDatabaseURL, DATABASE_URL, ɵZoneScheduler, ɵBlockUntilFirstOperator, ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, runOutsideAngular, runInZone, FirebaseZoneScheduler, ɵlazySDKProxy, FirebaseOptionsToken, FirebaseNameOrConfigToken, FIREBASE_OPTIONS, FIREBASE_APP_NAME, FirebaseApp, VERSION, _firebaseAppFactory, AngularFireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularfire2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularfire2 */ "./node_modules/@angular/fire/es2015/angularfire2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RealtimeDatabaseURL", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["RealtimeDatabaseURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATABASE_URL", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["DATABASE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵZoneScheduler", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["ɵZoneScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵBlockUntilFirstOperator", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["ɵBlockUntilFirstOperator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵAngularFireSchedulers", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["ɵAngularFireSchedulers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵkeepUnstableUntilFirstFactory", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["ɵkeepUnstableUntilFirstFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runOutsideAngular", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["runOutsideAngular"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runInZone", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["runInZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseZoneScheduler", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["FirebaseZoneScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵlazySDKProxy", function() { return _angularfire2__WEBPACK_IMPORTED_MODULE_0__["ɵlazySDKProxy"]; });

/* harmony import */ var _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.app.module */ "./node_modules/@angular/fire/es2015/firebase.app.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseOptionsToken", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseOptionsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseNameOrConfigToken", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseNameOrConfigToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_OPTIONS", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["FIREBASE_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_NAME", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["FIREBASE_APP_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirebaseApp", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["FirebaseApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_firebaseAppFactory", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["_firebaseAppFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireModule", function() { return _firebase_app_module__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"]; });



//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/collection-group/collection-group.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/collection-group/collection-group.js ***!
  \******************************************************************************************/
/*! exports provided: AngularFirestoreCollectionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function() { return AngularFirestoreCollectionGroup; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/firestore/es2015/observable/fromRef.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _collection_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collection/collection */ "./node_modules/@angular/fire/firestore/es2015/collection/collection.js");
/* harmony import */ var _collection_changes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../collection/changes */ "./node_modules/@angular/fire/firestore/es2015/collection/changes.js");





class AngularFirestoreCollectionGroup {
    constructor(query, afs) {
        this.query = query;
        this.afs = afs;
    }
    stateChanges(events) {
        if (!events || events.length === 0) {
            return Object(_collection_changes__WEBPACK_IMPORTED_MODULE_4__["docChanges"])(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return Object(_collection_changes__WEBPACK_IMPORTED_MODULE_4__["docChanges"])(this.query, this.afs.schedulers.outsideAngular)
            .pipe(this.afs.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.filter(change => events.indexOf(change.type) > -1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(changes => changes.length > 0));
    }
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((current, action) => [...current, ...action], []));
    }
    snapshotChanges(events) {
        const validatedEvents = Object(_collection_collection__WEBPACK_IMPORTED_MODULE_3__["validateEventsArray"])(events);
        const scheduledSortedChanges$ = Object(_collection_changes__WEBPACK_IMPORTED_MODULE_4__["sortedChanges"])(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    valueChanges() {
        const fromCollectionRefScheduled$ = Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_1__["fromCollectionRef"])(this.query, this.afs.schedulers.outsideAngular);
        return fromCollectionRefScheduled$
            .pipe(this.afs.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.payload.docs.map(a => a.data())));
    }
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
//# sourceMappingURL=collection-group.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/collection/changes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/collection/changes.js ***!
  \***************************************************************************/
/*! exports provided: docChanges, sortedChanges, combineChanges, combineChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docChanges", function() { return docChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedChanges", function() { return sortedChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChanges", function() { return combineChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChange", function() { return combineChange; });
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/firestore/es2015/observable/fromRef.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


function docChanges(query, scheduler) {
    return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromCollectionRef"])(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(action => action.payload.docChanges()
        .map(change => ({ type: change.type, payload: change }))));
}
function sortedChanges(query, events, scheduler) {
    return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_0__["fromCollectionRef"])(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.payload.docChanges()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])((current, changes) => combineChanges(current, changes, events), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.map(c => ({ type: c.type, payload: c }))));
}
function combineChanges(current, changes, events) {
    changes.forEach(change => {
        if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
        }
    });
    return current;
}
function combineChange(combined, change) {
    switch (change.type) {
        case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
            }
            else {
                combined.splice(change.newIndex, 0, change);
            }
            break;
        case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                if (change.oldIndex !== change.newIndex) {
                    combined.splice(change.oldIndex, 1);
                    combined.splice(change.newIndex, 0, change);
                }
                else {
                    combined.splice(change.newIndex, 1, change);
                }
            }
            break;
        case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                combined.splice(change.oldIndex, 1);
            }
            break;
    }
    return combined;
}
//# sourceMappingURL=changes.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/collection/collection.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/collection/collection.js ***!
  \******************************************************************************/
/*! exports provided: validateEventsArray, AngularFirestoreCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return validateEventsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function() { return AngularFirestoreCollection; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/firestore/es2015/observable/fromRef.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changes */ "./node_modules/@angular/fire/firestore/es2015/collection/changes.js");
/* harmony import */ var _document_document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document/document */ "./node_modules/@angular/fire/firestore/es2015/document/document.js");





function validateEventsArray(events) {
    if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
    }
    return events;
}
class AngularFirestoreCollection {
    constructor(ref, query, afs) {
        this.ref = ref;
        this.query = query;
        this.afs = afs;
    }
    stateChanges(events) {
        if (!events || events.length === 0) {
            return Object(_changes__WEBPACK_IMPORTED_MODULE_3__["docChanges"])(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return Object(_changes__WEBPACK_IMPORTED_MODULE_3__["docChanges"])(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.filter(change => events.indexOf(change.type) > -1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(changes => changes.length > 0));
    }
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((current, action) => [...current, ...action], []));
    }
    snapshotChanges(events) {
        const validatedEvents = validateEventsArray(events);
        const scheduledSortedChanges$ = Object(_changes__WEBPACK_IMPORTED_MODULE_3__["sortedChanges"])(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    valueChanges(options = {}) {
        return Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_1__["fromCollectionRef"])(this.query, this.afs.schedulers.outsideAngular)
            .pipe(this.afs.keepUnstableUntilFirst, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.payload.docs.map(a => {
            if (options.idField) {
                return Object.assign({}, a.data(), { [options.idField]: a.id });
            }
            else {
                return a.data();
            }
        })));
    }
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
    add(data) {
        return this.ref.add(data);
    }
    doc(path) {
        return new _document_document__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreDocument"](this.ref.doc(path), this.afs);
    }
}
//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/document/document.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/document/document.js ***!
  \**************************************************************************/
/*! exports provided: AngularFirestoreDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function() { return AngularFirestoreDocument; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/fromRef */ "./node_modules/@angular/fire/firestore/es2015/observable/fromRef.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firestore */ "./node_modules/@angular/fire/firestore/es2015/firestore.js");
/* harmony import */ var _collection_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../collection/collection */ "./node_modules/@angular/fire/firestore/es2015/collection/collection.js");





class AngularFirestoreDocument {
    constructor(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    set(data, options) {
        return this.ref.set(data, options);
    }
    update(data) {
        return this.ref.update(data);
    }
    delete() {
        return this.ref.delete();
    }
    collection(path, queryFn) {
        const collectionRef = this.ref.collection(path);
        const { ref, query } = Object(_firestore__WEBPACK_IMPORTED_MODULE_3__["associateQuery"])(collectionRef, queryFn);
        return new _collection_collection__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreCollection"](ref, query, this.afs);
    }
    snapshotChanges() {
        const scheduledFromDocRef$ = Object(_observable_fromRef__WEBPACK_IMPORTED_MODULE_1__["fromDocRef"])(this.ref, this.afs.schedulers.outsideAngular);
        return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
    }
    valueChanges() {
        return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(action => {
            return action.payload.data();
        }));
    }
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
//# sourceMappingURL=document.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/firestore.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/firestore.js ***!
  \******************************************************************/
/*! exports provided: EnablePersistenceToken, PersistenceSettingsToken, FirestoreSettingsToken, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, DefaultFirestoreSettings, associateQuery, AngularFirestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnablePersistenceToken", function() { return EnablePersistenceToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistenceSettingsToken", function() { return PersistenceSettingsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreSettingsToken", function() { return FirestoreSettingsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function() { return ENABLE_PERSISTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function() { return PERSISTENCE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFirestoreSettings", function() { return DefaultFirestoreSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "associateQuery", function() { return associateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestore", function() { return AngularFirestore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _document_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document/document */ "./node_modules/@angular/fire/firestore/es2015/document/document.js");
/* harmony import */ var _collection_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection/collection */ "./node_modules/@angular/fire/firestore/es2015/collection/collection.js");
/* harmony import */ var _collection_group_collection_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection-group/collection-group */ "./node_modules/@angular/fire/firestore/es2015/collection-group/collection-group.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








const EnablePersistenceToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
const PersistenceSettingsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
const FirestoreSettingsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
const ENABLE_PERSISTENCE = EnablePersistenceToken;
const PERSISTENCE_SETTINGS = PersistenceSettingsToken;
const SETTINGS = FirestoreSettingsToken;
const major = parseInt(firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.SDK_VERSION.split('.')[0]);
const minor = parseInt(firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.SDK_VERSION.split('.')[1]);
const DefaultFirestoreSettings = ((major < 5 || (major == 5 && minor < 8)) ? { timestampsInSnapshots: true } : {});
function associateQuery(collectionRef, queryFn = ref => ref) {
    const query = queryFn(collectionRef);
    const ref = collectionRef;
    return { query, ref };
}
let AngularFirestore = class AngularFirestore {
    constructor(options, nameOrConfig, shouldEnablePersistence, settings, platformId, zone, persistenceSettings) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers, platformId);
        this.firestore = zone.runOutsideAngular(() => {
            const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["_firebaseAppFactory"])(options, zone, nameOrConfig);
            const firestore = app.firestore();
            firestore.settings(settings || DefaultFirestoreSettings);
            return firestore;
        });
        if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(platformId)) {
            const enablePersistence = () => {
                try {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.enablePersistence(persistenceSettings || undefined).then(() => true, () => false));
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                }
            };
            this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
        }
        else {
            this.persistenceEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
    }
    collection(pathOrRef, queryFn) {
        let collectionRef;
        if (typeof pathOrRef === 'string') {
            collectionRef = this.firestore.collection(pathOrRef);
        }
        else {
            collectionRef = pathOrRef;
        }
        const { ref, query } = associateQuery(collectionRef, queryFn);
        return new _collection_collection__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreCollection"](ref, query, this);
    }
    collectionGroup(collectionId, queryGroupFn) {
        if (major < 6) {
            throw "collection group queries require Firebase JS SDK >= 6.0";
        }
        const queryFn = queryGroupFn || (ref => ref);
        const firestore = this.firestore;
        const collectionGroup = firestore.collectionGroup(collectionId);
        return new _collection_group_collection_group__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreCollectionGroup"](queryFn(collectionGroup), this);
    }
    doc(pathOrRef) {
        let ref;
        if (typeof pathOrRef === 'string') {
            ref = this.firestore.doc(pathOrRef);
        }
        else {
            ref = pathOrRef;
        }
        return new _document_document__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreDocument"](ref, this);
    }
    createId() {
        return this.firestore.collection('_').doc().id;
    }
};
AngularFirestore = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"])),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"])),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(ENABLE_PERSISTENCE)),
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(SETTINGS)),
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
    __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(PERSISTENCE_SETTINGS)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], Object])
], AngularFirestore);

//# sourceMappingURL=firestore.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/firestore.module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/firestore.module.js ***!
  \*************************************************************************/
/*! exports provided: AngularFirestoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function() { return AngularFirestoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestore */ "./node_modules/@angular/fire/firestore/es2015/firestore.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AngularFirestoreModule_1;



let AngularFirestoreModule = AngularFirestoreModule_1 = class AngularFirestoreModule {
    static enablePersistence(persistenceSettings) {
        return {
            ngModule: AngularFirestoreModule_1,
            providers: [
                { provide: _firestore__WEBPACK_IMPORTED_MODULE_1__["EnablePersistenceToken"], useValue: true },
                { provide: _firestore__WEBPACK_IMPORTED_MODULE_1__["PersistenceSettingsToken"], useValue: persistenceSettings },
            ]
        };
    }
};
AngularFirestoreModule = AngularFirestoreModule_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        providers: [_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]]
    })
], AngularFirestoreModule);

//# sourceMappingURL=firestore.module.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/index.js ***!
  \**************************************************************/
/*! exports provided: EnablePersistenceToken, PersistenceSettingsToken, FirestoreSettingsToken, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, DefaultFirestoreSettings, associateQuery, AngularFirestore, AngularFirestoreModule, validateEventsArray, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, docChanges, sortedChanges, combineChanges, combineChange, fromRef, fromDocRef, fromCollectionRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/@angular/fire/firestore/es2015/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnablePersistenceToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["EnablePersistenceToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistenceSettingsToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PersistenceSettingsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirestoreSettingsToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FirestoreSettingsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ENABLE_PERSISTENCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PERSISTENCE_SETTINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFirestoreSettings", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DefaultFirestoreSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "associateQuery", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["associateQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestore", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFirestoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["validateEventsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFirestoreCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFirestoreCollectionGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFirestoreDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "docChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["docChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["sortedChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineChanges", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["combineChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineChange", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["combineChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fromRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromDocRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fromDocRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fromCollectionRef"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/observable/fromRef.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/observable/fromRef.js ***!
  \***************************************************************************/
/*! exports provided: fromRef, fromDocRef, fromCollectionRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDocRef", function() { return fromDocRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function() { return fromCollectionRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


function _fromRef(ref, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let unsubscribe;
        if (scheduler != null) {
            scheduler.schedule(() => {
                unsubscribe = ref.onSnapshot(subscriber);
            });
        }
        else {
            unsubscribe = ref.onSnapshot(subscriber);
        }
        return function () {
            if (unsubscribe != null) {
                unsubscribe();
            }
        };
    });
}
function fromRef(ref, scheduler) {
    return _fromRef(ref, scheduler);
}
function fromDocRef(ref, scheduler) {
    return fromRef(ref, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(payload => ({ payload, type: 'value' })));
}
function fromCollectionRef(ref, scheduler) {
    return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(payload => ({ payload, type: 'query' })));
}
//# sourceMappingURL=fromRef.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/firestore/es2015/public_api.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/fire/firestore/es2015/public_api.js ***!
  \*******************************************************************/
/*! exports provided: EnablePersistenceToken, PersistenceSettingsToken, FirestoreSettingsToken, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, DefaultFirestoreSettings, associateQuery, AngularFirestore, AngularFirestoreModule, validateEventsArray, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, docChanges, sortedChanges, combineChanges, combineChange, fromRef, fromDocRef, fromCollectionRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firestore */ "./node_modules/@angular/fire/firestore/es2015/firestore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnablePersistenceToken", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["EnablePersistenceToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistenceSettingsToken", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["PersistenceSettingsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirestoreSettingsToken", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["FirestoreSettingsToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["ENABLE_PERSISTENCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["PERSISTENCE_SETTINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["SETTINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFirestoreSettings", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["DefaultFirestoreSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "associateQuery", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["associateQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestore", function() { return _firestore__WEBPACK_IMPORTED_MODULE_0__["AngularFirestore"]; });

/* harmony import */ var _firestore_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestore.module */ "./node_modules/@angular/fire/firestore/es2015/firestore.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function() { return _firestore_module__WEBPACK_IMPORTED_MODULE_1__["AngularFirestoreModule"]; });

/* harmony import */ var _collection_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection/collection */ "./node_modules/@angular/fire/firestore/es2015/collection/collection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return _collection_collection__WEBPACK_IMPORTED_MODULE_2__["validateEventsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function() { return _collection_collection__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreCollection"]; });

/* harmony import */ var _collection_group_collection_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection-group/collection-group */ "./node_modules/@angular/fire/firestore/es2015/collection-group/collection-group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function() { return _collection_group_collection_group__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreCollectionGroup"]; });

/* harmony import */ var _document_document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document/document */ "./node_modules/@angular/fire/firestore/es2015/document/document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function() { return _document_document__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreDocument"]; });

/* harmony import */ var _collection_changes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection/changes */ "./node_modules/@angular/fire/firestore/es2015/collection/changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "docChanges", function() { return _collection_changes__WEBPACK_IMPORTED_MODULE_5__["docChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedChanges", function() { return _collection_changes__WEBPACK_IMPORTED_MODULE_5__["sortedChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineChanges", function() { return _collection_changes__WEBPACK_IMPORTED_MODULE_5__["combineChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineChange", function() { return _collection_changes__WEBPACK_IMPORTED_MODULE_5__["combineChange"]; });

/* harmony import */ var _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observable/fromRef */ "./node_modules/@angular/fire/firestore/es2015/observable/fromRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__["fromRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromDocRef", function() { return _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__["fromDocRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function() { return _observable_fromRef__WEBPACK_IMPORTED_MODULE_6__["fromCollectionRef"]; });








//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

var name$1 = "@firebase/app";
var version = "0.6.2";

var name$2 = "@firebase/analytics";

var name$3 = "@firebase/auth";

var name$4 = "@firebase/database";

var name$5 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$7 = "@firebase/messaging";

var name$8 = "@firebase/performance";

var name$9 = "@firebase/remote-config";

var name$a = "@firebase/storage";

var name$b = "@firebase/firestore";

var name$c = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$1] = 'fire-core',
    _a$1[name$2] = 'fire-analytics',
    _a$1[name$3] = 'fire-auth',
    _a$1[name$4] = 'fire-rtdb',
    _a$1[name$5] = 'fire-fn',
    _a$1[name$6] = 'fire-iid',
    _a$1[name$7] = 'fire-fcm',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$9] = 'fire-rc',
    _a$1[name$a] = 'fire-gcs',
    _a$1[name$b] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$c] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component$1 = _c.value;
                this._addComponent(component$1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.14.1";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new component.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */, {
                appName: name
            });
        }
        logger$1.setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

exports.default = firebase$1;
exports.firebase = firebase$1;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t, e = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), n = (t = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js")) && "object" == typeof t && "default" in t ? t.default : t, r = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js"), i = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js"), o = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js"), s = __webpack_require__(/*! @firebase/webchannel-wrapper */ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js"), u = n.SDK_VERSION, a = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.t = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.s = function() {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/** A user with a null UID. */ a.UNAUTHENTICATED = new a(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
a.i = new a("google-credentials-uid"), a.h = new a("first-party-uid");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, c = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return e.__extends(n, t), n;
}(Error), f = function(t, e) {
    this.user = e, this.type = "OAuth", this.o = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.o.Authorization = "Bearer " + t;
}, l = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.u = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype._ = function() {}, t.prototype.l = function(t) {
        this.u = t, 
        // Fire with initial user.
        t(a.UNAUTHENTICATED);
    }, t.prototype.T = function() {
        this.u = null;
    }, t;
}(), p = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.I = null, 
        /** Tracks the current User. */
        this.currentUser = a.UNAUTHENTICATED, this.R = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.A = 0, 
        /** The listener registered with setChangeListener(). */
        this.u = null, this.forceRefresh = !1, this.I = function() {
            e.A++, e.currentUser = e.m(), e.R = !0, e.u && e.u(e.currentUser);
        }, this.A = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.I) : (
        // if auth is not available, invoke tokenListener once with null token
        this.I(null), t.get().then((function(t) {
            e.auth = t, e.I && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.I);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.A, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            if (t.A !== e) throw new c(h.ABORTED, "getToken aborted due to token change.");
            return n ? (_e("string" == typeof n.accessToken), new f(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype._ = function() {
        this.forceRefresh = !0;
    }, t.prototype.l = function(t) {
        this.u = t, 
        // Fire the initial event
        this.R && t(this.currentUser);
    }, t.prototype.T = function() {
        this.auth && this.auth.removeAuthTokenListener(this.I), this.I = null, this.u = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.m = function() {
        var t = this.auth && this.auth.getUid();
        return _e(null === t || "string" == typeof t), new a(t);
    }, t;
}(), d = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e, this.type = "FirstParty", this.user = a.h;
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.V
            }, e = this.P.auth.g([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), y = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new d(this.P, this.V));
    }, t.prototype.l = function(t) {
        // Fire with initial uid.
        t(a.h);
    }, t.prototype.T = function() {}, t.prototype._ = function() {}, t;
}(), v = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new c(h.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new c(h.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new c(h.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new c(h.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.p = function(t) {
        return this.seconds === t.seconds ? Ie(this.nanoseconds, t.nanoseconds) : Ie(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), m = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.v = function(e) {
        return new t(e);
    }, t.S = function() {
        return t.MIN;
    }, t.prototype.D = function(t) {
        return this.timestamp.p(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.C = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.F = function() {
        return this.timestamp;
    }, t;
}();

/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */ m.MIN = new m(new v(0, 0));

/**
 * Path represents an ordered sequence of string segments.
 */
var g = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && Ee(), void 0 === n ? n = t.length - e : n > t.length - e && Ee(), 
        this.segments = t, this.offset = e, this.N = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.N;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.k(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.$(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.M = function(t) {
        return t = void 0 === t ? 1 : t, this.$(this.segments, this.offset + t, this.length - t);
    }, t.prototype.L = function() {
        return this.$(this.segments, this.offset, this.length - 1);
    }, t.prototype.O = function() {
        return this.segments[this.offset];
    }, t.prototype.B = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.q = function() {
        return 0 === this.length;
    }, t.prototype.U = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.W = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.j = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.k = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), w = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.K = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.j().join("/");
    }, n.prototype.toString = function() {
        return this.K();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.G = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n;
}(g);

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ w.H = new w([]);

var E = /^[_a-zA-Z][_a-zA-Z0-9]*$/, _ = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.Y = function(t) {
        return E.test(t);
    }, n.prototype.K = function() {
        return this.j().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.Y(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.K();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.J = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.X = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.Z = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new c(h.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new c(h.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new c(h.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n;
}(g);

/** A dot-separated path for navigating sub-objects within a document. */ _.H = new _([]);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.tt = function(e) {
        return new t(w.G(e).M(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.et = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === w.k(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.k = function(t, e) {
        return w.k(t.path, e.path);
    }, t.st = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.it = function(e) {
        return new t(new w(e.slice()));
    }, t;
}();

b.EMPTY = new b(new w([]));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var I = /** @class */ function() {
    function t(t, e) {
        this.k = t, this.root = e || N.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.nt = function(e, n) {
        return new t(this.k, this.root.nt(e, n, this.k).rt(null, null, N.ht, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.k, this.root.remove(e, this.k).rt(null, null, N.ht, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.q(); ) {
            var n = this.k(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.q(); ) {
            var r = this.k(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.q = function() {
        return this.root.q();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.ot = function() {
        return this.root.ot();
    }, 
    // Returns the maximum key in the map.
    t.prototype.at = function() {
        return this.root.at();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.root.ut(t);
    }, t.prototype.forEach = function(t) {
        this.ut((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ut((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ct = function(t) {
        return this.root.ct(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype._t = function() {
        return new T(this.root, null, this.k, !1);
    }, t.prototype.lt = function(t) {
        return new T(this.root, t, this.k, !1);
    }, t.prototype.dt = function() {
        return new T(this.root, null, this.k, !0);
    }, t.prototype.ft = function(t) {
        return new T(this.root, t, this.k, !0);
    }, t;
}(), T = /** @class */ function() {
    function t(t, e, n, r) {
        this.Tt = r, this.Et = [];
        for (var i = 1; !t.q(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.Tt ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Et.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.Et.push(t), t = this.Tt ? t.right : t.left;
        }
    }
    return t.prototype.It = function() {
        var t = this.Et.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.Tt) for (t = t.left; !t.q(); ) this.Et.push(t), t = t.right; else for (t = t.right; !t.q(); ) this.Et.push(t), 
        t = t.left;
        return e;
    }, t.prototype.wt = function() {
        return this.Et.length > 0;
    }, t.prototype.Rt = function() {
        if (0 === this.Et.length) return null;
        var t = this.Et[this.Et.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), N = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.rt = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.q = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.left.ut(t) || t(this.key, this.value) || this.right.ut(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ct = function(t) {
        return this.right.ct(t) || t(this.key, this.value) || this.left.ct(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.q() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.ot = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.at = function() {
        return this.right.q() ? this.key : this.right.at();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.nt = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.rt(null, null, null, r.left.nt(t, e, n), null) : 0 === i ? r.rt(null, e, null, null, null) : r.rt(null, null, null, null, r.right.nt(t, e, n))).At();
    }, t.prototype.Pt = function() {
        if (this.left.q()) return t.EMPTY;
        var e = this;
        return e.left.Vt() || e.left.left.Vt() || (e = e.gt()), (e = e.rt(null, null, null, e.left.Pt(), null)).At();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.q() || i.left.Vt() || i.left.left.Vt() || (i = i.gt()), 
        i = i.rt(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.Vt() && (i = i.pt()), i.right.q() || i.right.Vt() || i.right.left.Vt() || (i = i.yt()), 
            0 === n(e, i.key)) {
                if (i.right.q()) return t.EMPTY;
                r = i.right.min(), i = i.rt(r.key, r.value, null, null, i.right.Pt());
            }
            i = i.rt(null, null, null, null, i.right.remove(e, n));
        }
        return i.At();
    }, t.prototype.Vt = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.At = function() {
        var t = this;
        return t.right.Vt() && !t.left.Vt() && (t = t.bt()), t.left.Vt() && t.left.left.Vt() && (t = t.pt()), 
        t.left.Vt() && t.right.Vt() && (t = t.vt()), t;
    }, t.prototype.gt = function() {
        var t = this.vt();
        return t.right.left.Vt() && (t = (t = (t = t.rt(null, null, null, null, t.right.pt())).bt()).vt()), 
        t;
    }, t.prototype.yt = function() {
        var t = this.vt();
        return t.left.left.Vt() && (t = (t = t.pt()).vt()), t;
    }, t.prototype.bt = function() {
        var e = this.rt(null, null, t.RED, null, this.right.left);
        return this.right.rt(null, null, this.color, e, null);
    }, t.prototype.pt = function() {
        var e = this.rt(null, null, t.RED, this.left.right, null);
        return this.left.rt(null, null, this.color, null, e);
    }, t.prototype.vt = function() {
        var t = this.left.rt(null, null, !this.left.color, null, null), e = this.right.rt(null, null, !this.right.color, null, null);
        return this.rt(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.St = function() {
        var t = this.Dt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Dt = function() {
        if (this.Vt() && this.left.Vt()) throw Ee();
        if (this.right.Vt()) throw Ee();
        var t = this.left.Dt();
        if (t !== this.right.Dt()) throw Ee();
        return t + (this.Vt() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
N.EMPTY = null, N.RED = !0, N.ht = !1, 
// end LLRBEmptyNode
N.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw Ee();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw Ee();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw Ee();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw Ee();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw Ee();
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.rt = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.nt = function(t, e, n) {
        return new N(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.q = function() {
        return !0;
    }, t.prototype.ut = function(t) {
        return !1;
    }, t.prototype.ct = function(t) {
        return !1;
    }, t.prototype.ot = function() {
        return null;
    }, t.prototype.at = function() {
        return null;
    }, t.prototype.Vt = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.St = function() {
        return !0;
    }, t.prototype.Dt = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var A = /** @class */ function() {
    function t(t) {
        this.k = t, this.data = new I(this.k);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.ot();
    }, t.prototype.last = function() {
        return this.data.at();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.Ct = function(t, e) {
        for (var n = this.data.lt(t[0]); n.wt(); ) {
            var r = n.It();
            if (this.k(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.Ft = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.lt(e) : this.data._t(); n.wt(); ) if (!t(n.It().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Nt = function(t) {
        var e = this.data.lt(t);
        return e.wt() ? e.It().key : null;
    }, t.prototype._t = function() {
        return new S(this.data._t());
    }, t.prototype.lt = function(t) {
        return new S(this.data.lt(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.rt(this.data.remove(t).nt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.rt(this.data.remove(t)) : this;
    }, t.prototype.q = function() {
        return this.data.q();
    }, t.prototype.kt = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data._t(), r = e.data._t(); n.wt(); ) {
            var i = n.It().key, o = r.It().key;
            if (0 !== this.k(i, o)) return !1;
        }
        return !0;
    }, t.prototype.j = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.rt = function(e) {
        var n = new t(this.k);
        return n.data = e, n;
    }, t;
}(), S = /** @class */ function() {
    function t(t) {
        this.$t = t;
    }
    return t.prototype.It = function() {
        return this.$t.It().key;
    }, t.prototype.wt = function() {
        return this.$t.wt();
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function k(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function x(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var R = /** @class */ function() {
    function t(t) {
        this.Mt = t;
    }
    return t.fromBase64String = function(e) {
        return new t(pe.Lt().atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return pe.Lt().btoa(this.Mt);
    }, t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.Mt);
    }, t.prototype.Ot = function() {
        return 2 * this.Mt.length;
    }, t.prototype.D = function(t) {
        return Ie(this.Mt, t.Mt);
    }, t.prototype.isEqual = function(t) {
        return this.Mt === t.Mt;
    }, t;
}();

function L(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function V(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function O(t) {
    return "number" == typeof t && Number.isInteger(t) && !V(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function P(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function C(t) {
    var e = z(t.mapValue.fields.__local_write_time__.timestampValue);
    return new v(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
R.xt = new R("");

var U = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function q(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? P(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : Ee();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function M(t, e) {
    var n = q(t);
    if (n !== q(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return C(t).isEqual(C(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = z(t.timestampValue), r = z(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return Y(t.bytesValue).isEqual(Y(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return K(t.geoPointValue.latitude) === K(e.geoPointValue.latitude) && K(t.geoPointValue.longitude) === K(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return K(t.integerValue) === K(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = K(t.doubleValue), r = K(e.doubleValue);
                return n === r ? V(n) === V(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return Te(t.arrayValue.values || [], e.arrayValue.values || [], M);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (D(n) !== D(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !M(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return Ee();
    }
}

function j(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return M(t, e);
    }));
}

function F(t, e) {
    var n = q(t), r = q(e);
    if (n !== r) return Ie(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return Ie(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = K(t.integerValue || t.doubleValue), r = K(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return G(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return G(C(t), C(e));

      case 5 /* StringValue */ :
        return Ie(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = Y(t), r = Y(e);
            return n.D(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = Ie(n[i], r[i]);
                if (0 !== o) return o;
            }
            return Ie(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = Ie(K(t.latitude), K(e.latitude));
            return 0 !== n ? n : Ie(K(t.longitude), K(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = F(n[i], r[i]);
                if (o) return o;
            }
            return Ie(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Ie(r[s], o[s]);
                if (0 !== u) return u;
                var a = F(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return Ie(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw Ee();
    }
}

function G(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return Ie(t, e);
    var n = z(t), r = z(e), i = Ie(n.seconds, r.seconds);
    return 0 !== i ? i : Ie(n.nanos, r.nanos);
}

function B(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = z(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? Y(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        b.tt(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : Ee();
        var n, r;
    }(t);
}

function z(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (_e(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = U.exec(t);
        if (_e(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: K(t.seconds),
        nanos: K(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function K(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function Y(t) {
    return "string" == typeof t ? R.fromBase64String(t) : R.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function Q(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.K()
    };
}

/** Returns true if `value` is an IntegerValue . */ function Z(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function W(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function H(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function X(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function J(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Transforms a value into a server-generated timestamp. */ var $ = /** @class */ function() {
    function t() {}
    return t.prototype.Bt = function(t, e) {
        return function(t, e) {
            var n = {
                fields: {
                    __type__: {
                        stringValue: "server_timestamp"
                    },
                    __local_write_time__: {
                        timestampValue: {
                            seconds: t.seconds,
                            nanos: t.nanoseconds
                        }
                    }
                }
            };
            return e && (n.fields.__previous_value__ = e), {
                mapValue: n
            };
        }(e, t);
    }, t.prototype.qt = function(t, e) {
        return e;
    }, t.prototype.Ut = function(t) {
        return null;
        // Server timestamps are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t;
    }, t;
}();

$.instance = new $;

/** Transforms an array value via a union operation. */
var tt = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Bt = function(t, e) {
        return this.apply(t);
    }, t.prototype.qt = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = rt(t), n = function(t) {
            e.some((function(e) {
                return M(e, t);
            })) || e.push(t);
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.Ut = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Te(this.elements, e.elements, M);
    }, t;
}(), et = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Bt = function(t, e) {
        return this.apply(t);
    }, t.prototype.qt = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = rt(t), n = function(t) {
            e = e.filter((function(e) {
                return !M(e, t);
            }));
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.Ut = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Te(this.elements, e.elements, M);
    }, t;
}(), nt = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.Qt = e;
    }
    return t.prototype.Bt = function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = this.Ut(t), r = this.asNumber(n) + this.asNumber(this.Qt);
        return Z(n) && Z(this.Qt) ? this.serializer.Wt(r) : this.serializer.jt(r);
    }, t.prototype.qt = function(t, e) {
        return e;
    }, 
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced value of 0.
     */
    t.prototype.Ut = function(t) {
        return Z(e = t) || function(t) {
            return !!t && "doubleValue" in t;
        }(e) ? t : {
            integerValue: 0
        };
        var e;
    }, t.prototype.isEqual = function(e) {
        return e instanceof t && M(this.Qt, e.Qt);
    }, t.prototype.asNumber = function(t) {
        return K(t.integerValue || t.doubleValue);
    }, t;
}();

/** Transforms an array value via a remove operation. */ function rt(t) {
    return W(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var it = /** @class */ function() {
    function t(t) {
        this.fields = t;
        // TODO(dimond): validation of FieldMask
        }
    return t.Kt = function(e) {
        return new t(e);
    }, t.Gt = function(e) {
        var n = new A(_.k);
        return e.forEach((function(t) {
            return n = n.add(t);
        })), new t(n);
    }, 
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    t.prototype.zt = function(t) {
        var e = !1;
        return this.fields.forEach((function(n) {
            n.U(t) && (e = !0);
        })), e;
    }, t.prototype.isEqual = function(t) {
        return this.fields.isEqual(t.fields);
    }, t;
}(), ot = /** @class */ function() {
    function t(t, e) {
        this.field = t, this.transform = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
    }, t;
}(), st = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, ut = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new Precondition with an exists flag. */;
    }
    return t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Ht", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    t.prototype.Yt = function(t) {
        return void 0 !== this.updateTime ? t instanceof mt && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof mt;
    }, t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/** A field path and the TransformOperation to perform upon it. */ ut.NONE = new ut;

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */
var at = /** @class */ function() {
    function t() {}
    return t.prototype.Jt = function(t) {}, 
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.MIN.
     */
    t.Xt = function(t) {
        return t instanceof mt ? t.version : m.MIN;
    }, t;
}(), ht = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).key = e, i.value = n, i.Zt = r, i.type = 0 /* Set */ , 
        i;
    }
    return e.__extends(n, t), n.prototype.qt = function(t, e) {
        this.Jt(t);
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var n = e.version;
        return new mt(this.key, n, this.value, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        if (this.Jt(t), !this.Zt.Yt(t)) return t;
        var r = at.Xt(t);
        return new mt(this.key, r, this.value, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Zt.isEqual(t.Zt);
    }, n;
}(at), ct = /** @class */ function(t) {
    function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this) || this).key = e, o.data = n, o.se = r, o.Zt = i, o.type = 1 /* Patch */ , 
        o;
    }
    return e.__extends(n, t), n.prototype.qt = function(t, e) {
        if (this.Jt(t), !this.Zt.Yt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new wt(this.key, e.version);
        var n = this.ie(t);
        return new mt(this.key, e.version, n, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        if (this.Jt(t), !this.Zt.Yt(t)) return t;
        var r = at.Xt(t), i = this.ie(t);
        return new mt(this.key, r, i, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.se.isEqual(t.se) && this.Zt.isEqual(t.Zt);
    }, 
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    n.prototype.ie = function(t) {
        var e;
        return e = t instanceof mt ? t.data() : dt.EMPTY, this.ne(e);
    }, n.prototype.ne = function(t) {
        var e = this, n = t.re();
        return this.se.fields.forEach((function(t) {
            if (!t.q()) {
                var r = e.data.field(t);
                null !== r ? n.set(t, r) : n.delete(t);
            }
        })), n.he();
    }, n;
}(at), ft = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Zt = ut.exists(!0), r;
    }
    return e.__extends(n, t), n.prototype.qt = function(t, e) {
        if (this.Jt(t), _e(null != e.transformResults), !this.Zt.Yt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new wt(this.key, e.version);
        var n = this.oe(t), r = this.ae(t, e.transformResults), i = e.version, o = this.ue(n.data(), r);
        return new mt(this.key, i, o, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        if (this.Jt(t), !this.Zt.Yt(t)) return t;
        var r = this.oe(t), i = this.ce(n, t, e), o = this.ue(r.data(), i);
        return new mt(this.key, r.version, o, {
            te: !0
        });
    }, n.prototype.ee = function(t) {
        for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
            var i = r[n], o = t instanceof mt ? t.field(i.field) : void 0, s = i.transform.Ut(o || null);
            null != s && (e = null == e ? dt._e().set(i.field, s) : e.set(i.field, s));
        }
        return e ? e.he() : null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && Te(this.fieldTransforms, t.fieldTransforms, (function(t, e) {
            return t.isEqual(e);
        })) && this.Zt.isEqual(t.Zt);
    }, 
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    n.prototype.oe = function(t) {
        return t;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    n.prototype.ae = function(t, e) {
        var n = [];
        _e(this.fieldTransforms.length === e.length);
        for (var r = 0; r < e.length; r++) {
            var i = this.fieldTransforms[r], o = i.transform, s = null;
            t instanceof mt && (s = t.field(i.field)), n.push(o.qt(s, e[r]));
        }
        return n;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    n.prototype.ce = function(t, e, n) {
        for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
            var s = o[i], u = s.transform, a = null;
            e instanceof mt && (a = e.field(s.field)), null === a && n instanceof mt && (
            // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            a = n.field(s.field)), r.push(u.Bt(a, t));
        }
        return r;
    }, n.prototype.ue = function(t, e) {
        for (var n = t.re(), r = 0; r < this.fieldTransforms.length; r++) {
            var i = this.fieldTransforms[r].field;
            n.set(i, e[r]);
        }
        return n.he();
    }, n;
}(at), lt = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Zt = n, r.type = 3 /* Delete */ , r;
    }
    return e.__extends(n, t), n.prototype.qt = function(t, e) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.Jt(t), new gt(this.key, e.version, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Bt = function(t, e, n) {
        return this.Jt(t), this.Zt.Yt(t) ? new gt(this.key, m.S()) : t;
    }, n.prototype.ee = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Zt.isEqual(t.Zt);
    }, n;
}(at), pt = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Zt = n, r.type = 4 /* Verify */ , r;
    }
    return e.__extends(n, t), n.prototype.qt = function(t, e) {
        Ee();
    }, n.prototype.Bt = function(t, e, n) {
        Ee();
    }, n.prototype.ee = function(t) {
        Ee();
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Zt.isEqual(t.Zt);
    }, n;
}(at), dt = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    /** Returns a new Builder instance that is based on an empty object. */    return t._e = function() {
        return t.EMPTY.re();
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.q()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!J(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.B()]) || null;
    }, 
    /**
     * Returns a FieldMask built from all FieldPaths starting from this
     * ObjectValue, including paths from nested objects.
     */
    t.prototype.se = function() {
        return this.le(this.proto.mapValue);
    }, t.prototype.le = function(t) {
        var e = this, n = new A(_.k);
        return k(t.fields || {}, (function(t, r) {
            var i = new _([ t ]);
            if (10 /* ObjectValue */ === q(r)) {
                var o = e.le(r.mapValue).fields;
                o.q() ? 
                // Preserve the empty map by adding it to the FieldMask.
                n = n.add(i) : 
                // For nested and non-empty ObjectValues, add the FieldPath of the
                // leaf nodes.
                o.forEach((function(t) {
                    n = n.add(i.child(t));
                }));
            } else 
            // For nested and non-empty ObjectValues, add the FieldPath of the leaf
            // nodes.
            n = n.add(i);
        })), it.Kt(n);
    }, t.prototype.isEqual = function(t) {
        return M(this.proto, t.proto);
    }, 
    /** Creates a ObjectValueBuilder instance that is based on the current value. */ t.prototype.re = function() {
        return new yt(this);
    }, t;
}();

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ dt.EMPTY = new dt({
    mapValue: {}
});

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */
var yt = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        this.de = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.fe = new Map
        /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */;
    }
    return t.prototype.set = function(t, e) {
        return this.Te(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Te(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Te = function(t, e) {
        for (var n = this.fe, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === q(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.B(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.he = function() {
        var t = this.Ee(_.H, this.fe);
        return null != t ? new dt(t) : this.de;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.EMPTY_PATH to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.Ee = function(t, e) {
        var n = this, r = !1, i = this.de.field(t), o = J(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.Ee(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}(), vt = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.version = e;
    }
    return t.Ie = function(t, e) {
        return b.k(t.key, e.key);
    }, t;
}(), mt = /** @class */ function(t) {
    function n(e, n, r, i) {
        var o = this;
        return (o = t.call(this, e, n) || this).we = r, o.te = !!i.te, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return e.__extends(n, t), n.prototype.field = function(t) {
        return this.we.field(t);
    }, n.prototype.data = function() {
        return this.we;
    }, n.prototype.Re = function() {
        return this.we.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.te === t.te && this.hasCommittedMutations === t.hasCommittedMutations && this.we.isEqual(t.we);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.we.toString() + ", {hasLocalMutations: " + this.te + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.te || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.Ae = function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? F(r, i) : Ee();
    }, n;
}(vt), gt = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return e.__extends(n, t), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(vt), wt = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(vt), Et = /** @class */ function() {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function t(t, e, n, r, i, o, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
        this.startAt = o, this.endAt = s, this.me = null;
    }
    return t.prototype.canonicalId = function() {
        if (null === this.me) {
            var t = this.path.K();
            null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:", 
            t += this.filters.map((function(t) {
                return t.canonicalId();
            })).join(","), t += "|ob:", t += this.orderBy.map((function(t) {
                return t.canonicalId();
            })).join(","), L(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", 
            t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), 
            this.me = t;
        }
        return this.me;
    }, t.prototype.toString = function() {
        var t = this.path.K();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 
        this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), 
        L(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), 
        this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), 
        "Target(" + t + ")";
    }, t.prototype.isEqual = function(t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var e = 0; e < this.orderBy.length; e++) if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (var n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
        return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt);
    }, t.prototype.Pe = function() {
        return b.st(this.path) && null === this.collectionGroup && 0 === this.filters.length;
    }, t;
}(), _t = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.Ve = n, 
        this.filters = r, this.limit = i, this.ge = o, this.startAt = s, this.endAt = u, 
        this.pe = null, 
        // The corresponding `Target` of this `Query` instance.
        this.ye = null, this.startAt && this.be(this.startAt), this.endAt && this.be(this.endAt);
    }
    return t.ve = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.pe) {
                var t = this.Se(), e = this.De();
                if (null !== t && null === e) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.J() ? this.pe = [ Ot ] : this.pe = [ new Vt(t), Ot ]; else {
                    this.pe = [];
                    for (var n = !1, r = 0, i = this.Ve; r < i.length; r++) {
                        var o = i[r];
                        this.pe.push(o), o.field.J() && (n = !0);
                    }
                    if (!n) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.Ve.length > 0 ? this.Ve[this.Ve.length - 1].dir : kt.ASCENDING;
                        this.pe.push(s === kt.ASCENDING ? Ot : Pt);
                    }
                }
            }
            return this.pe;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ce = function(e) {
        var n = this.filters.concat([ e ]);
        return new t(this.path, this.collectionGroup, this.Ve.slice(), n, this.limit, this.ge, this.startAt, this.endAt);
    }, t.prototype.Fe = function(e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.Ve.concat([ e ]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.ge, this.startAt, this.endAt);
    }, t.prototype.Ne = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), e, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype.ke = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), e, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.$e = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), this.limit, this.ge, e, this.endAt);
    }, t.prototype.Me = function(e) {
        return new t(this.path, this.collectionGroup, this.Ve.slice(), this.filters.slice(), this.limit, this.ge, this.startAt, e);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.Le = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.Ve.slice(), this.filters.slice(), this.limit, this.ge, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.Oe = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.Ve.length || 1 === this.Ve.length && this.Ve[0].field.J());
    }, 
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    t.prototype.canonicalId = function() {
        return this.xe().canonicalId() + "|lt:" + this.ge;
    }, t.prototype.toString = function() {
        return "Query(target=" + this.xe().toString() + "; limitType=" + this.ge + ")";
    }, t.prototype.isEqual = function(t) {
        return this.xe().isEqual(t.xe()) && this.ge === t.ge;
    }, t.prototype.Be = function(t, e) {
        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
            var o = i[r], s = o.compare(t, e);
            if (0 !== s) return s;
            n = n || o.field.J();
        }
        return 0;
    }, t.prototype.matches = function(t) {
        return this.qe(t) && this.Ue(t) && this.Qe(t) && this.We(t);
    }, t.prototype.je = function() {
        return !L(this.limit) && "F" /* First */ === this.ge;
    }, t.prototype.Ke = function() {
        return !L(this.limit) && "L" /* Last */ === this.ge;
    }, t.prototype.De = function() {
        return this.Ve.length > 0 ? this.Ve[0].field : null;
    }, t.prototype.Se = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n instanceof It && n.Ge()) return n.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.ze = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (r instanceof It && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t.prototype.Pe = function() {
        return this.xe().Pe();
    }, t.prototype.He = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.xe = function() {
        if (!this.ye) if ("F" /* First */ === this.ge) this.ye = new Et(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                var r = n[e], i = r.dir === kt.DESCENDING ? kt.ASCENDING : kt.DESCENDING;
                t.push(new Vt(r.field, i));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var o = this.endAt ? new Lt(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new Lt(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
                        this.ye = new Et(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.ye;
    }, t.prototype.qe = function(t) {
        var e = t.key.path;
        return null !== this.collectionGroup ? t.key.et(this.collectionGroup) && this.path.U(e) : b.st(this.path) ? this.path.isEqual(e) : this.path.W(e);
    }, 
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    t.prototype.Ue = function(t) {
        for (var e = 0, n = this.Ve; e < n.length; e++) {
            var r = n[e];
            // order by key always matches
                        if (!r.field.J() && null === t.field(r.field)) return !1;
        }
        return !0;
    }, t.prototype.Qe = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            if (!n[e].matches(t)) return !1;
        }
        return !0;
    }, 
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    t.prototype.We = function(t) {
        return !(this.startAt && !this.startAt.Ye(this.orderBy, t) || this.endAt && this.endAt.Ye(this.orderBy, t));
    }, t.prototype.be = function(t) {}, t;
}(), bt = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.G = function(e) {
        switch (e) {
          case "<":
            return t.LESS_THAN;

          case "<=":
            return t.LESS_THAN_OR_EQUAL;

          case "==":
            return t.EQUAL;

          case ">=":
            return t.GREATER_THAN_OR_EQUAL;

          case ">":
            return t.GREATER_THAN;

          case "array-contains":
            return t.ARRAY_CONTAINS;

          case "in":
            return t.IN;

          case "array-contains-any":
            return t.ARRAY_CONTAINS_ANY;

          default:
            return Ee();
        }
    }, t.prototype.toString = function() {
        return this.name;
    }, t.prototype.isEqual = function(t) {
        return this.name === t.name;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */ bt.LESS_THAN = new bt("<"), bt.LESS_THAN_OR_EQUAL = new bt("<="), bt.EQUAL = new bt("=="), 
bt.GREATER_THAN = new bt(">"), bt.GREATER_THAN_OR_EQUAL = new bt(">="), bt.ARRAY_CONTAINS = new bt("array-contains"), 
bt.IN = new bt("in"), bt.ARRAY_CONTAINS_ANY = new bt("array-contains-any");

var It = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return e.__extends(n, t), n.create = function(t, e, r) {
        if (t.J()) return e === bt.IN ? new Nt(t, r) : new Tt(t, e, r);
        if (H(r)) {
            if (e !== bt.EQUAL) throw new c(h.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (X(r)) {
            if (e !== bt.EQUAL) throw new c(h.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return e === bt.ARRAY_CONTAINS ? new At(t, r) : e === bt.IN ? new St(t, r) : e === bt.ARRAY_CONTAINS_ANY ? new Dt(t, r) : new n(t, e, r);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && q(this.value) === q(e) && this.Je(F(e, this.value));
    }, n.prototype.Je = function(t) {
        switch (this.op) {
          case bt.LESS_THAN:
            return t < 0;

          case bt.LESS_THAN_OR_EQUAL:
            return t <= 0;

          case bt.EQUAL:
            return 0 === t;

          case bt.GREATER_THAN:
            return t > 0;

          case bt.GREATER_THAN_OR_EQUAL:
            return t >= 0;

          default:
            return Ee();
        }
    }, n.prototype.Ge = function() {
        return [ bt.LESS_THAN, bt.LESS_THAN_OR_EQUAL, bt.GREATER_THAN, bt.GREATER_THAN_OR_EQUAL ].indexOf(this.op) >= 0;
    }, n.prototype.canonicalId = function() {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.K() + this.op.toString() + B(this.value);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.op.isEqual(t.op) && this.field.isEqual(t.field) && M(this.value, t.value);
    }, n.prototype.toString = function() {
        return this.field.K() + " " + this.op + " " + B(this.value);
    }, n;
}((function() {})), Tt = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = b.tt(r.referenceValue), i;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = b.k(t.key, this.key);
        return this.Je(e);
    }, n;
}(It), Nt = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this, e, bt.IN, n) || this).keys = (n.arrayValue.values || []).map((function(t) {
            return b.tt(t.referenceValue);
        })), r;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(It), At = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, bt.ARRAY_CONTAINS, n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return W(e) && j(e.arrayValue, this.value);
    }, n;
}(It), St = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, bt.IN, n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && j(this.value.arrayValue, e);
    }, n;
}(It), Dt = /** @class */ function(t) {
    function n(e, n) {
        return t.call(this, e, bt.ARRAY_CONTAINS_ANY, n) || this;
    }
    return e.__extends(n, t), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!W(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return j(e.value.arrayValue, t);
        }));
    }, n;
}(It), kt = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.prototype.toString = function() {
        return this.name;
    }, t;
}();

/** Filter that matches on key fields (i.e. '__name__'). */ kt.ASCENDING = new kt("asc"), 
kt.DESCENDING = new kt("desc");

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */
var xt, Rt, Lt = /** @class */ function() {
    function t(t, e) {
        this.position = t, this.before = e;
    }
    return t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return (this.before ? "b" : "a") + ":" + this.position.map((function(t) {
            return B(t);
        })).join(",");
    }, 
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    t.prototype.Ye = function(t, e) {
        for (var n = 0, r = 0; r < this.position.length; r++) {
            var i = t[r], o = this.position[r];
            if (n = i.field.J() ? b.k(b.tt(o.referenceValue), e.key) : F(o, e.field(i.field)), 
            i.dir === kt.DESCENDING && (n *= -1), 0 !== n) break;
        }
        return this.before ? n <= 0 : n < 0;
    }, t.prototype.isEqual = function(t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
        for (var e = 0; e < this.position.length; e++) if (!M(this.position[e], t.position[e])) return !1;
        return !0;
    }, t;
}(), Vt = /** @class */ function() {
    function t(t, e) {
        this.field = t, void 0 === e && (e = kt.ASCENDING), this.dir = e, this.Xe = t.J();
    }
    return t.prototype.compare = function(t, e) {
        var n = this.Xe ? mt.Ie(t, e) : mt.Ae(this.field, t, e);
        switch (this.dir) {
          case kt.ASCENDING:
            return n;

          case kt.DESCENDING:
            return -1 * n;

          default:
            return Ee();
        }
    }, t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return this.field.K() + this.dir.toString();
    }, t.prototype.toString = function() {
        return this.field.K() + " (" + this.dir + ")";
    }, t.prototype.isEqual = function(t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
    }, t;
}(), Ot = new Vt(_.X(), kt.ASCENDING), Pt = new Vt(_.X(), kt.DESCENDING), Ct = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = m.MIN), void 0 === o && (o = m.MIN), void 0 === s && (s = R.xt), 
        this.target = t, this.targetId = e, this.Ze = n, this.sequenceNumber = r, this.ts = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.es = function(e) {
        return new t(this.target, this.targetId, this.Ze, e, this.ts, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.ss = function(e, n) {
        return new t(this.target, this.targetId, this.Ze, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.ns = function(e) {
        return new t(this.target, this.targetId, this.Ze, this.sequenceNumber, this.ts, e, this.resumeToken);
    }, t;
}(), Ut = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function qt(t) {
    switch (t) {
      case h.OK:
        return Ee();

      case h.CANCELLED:
      case h.UNKNOWN:
      case h.DEADLINE_EXCEEDED:
      case h.RESOURCE_EXHAUSTED:
      case h.INTERNAL:
      case h.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case h.UNAUTHENTICATED:
        return !1;

      case h.INVALID_ARGUMENT:
      case h.NOT_FOUND:
      case h.ALREADY_EXISTS:
      case h.PERMISSION_DENIED:
      case h.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case h.ABORTED:
      case h.OUT_OF_RANGE:
      case h.UNIMPLEMENTED:
      case h.DATA_LOSS:
        return !0;

      default:
        return Ee();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function Mt(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return ge("GRPC error has no .code"), h.UNKNOWN;
    switch (t) {
      case xt.OK:
        return h.OK;

      case xt.CANCELLED:
        return h.CANCELLED;

      case xt.UNKNOWN:
        return h.UNKNOWN;

      case xt.DEADLINE_EXCEEDED:
        return h.DEADLINE_EXCEEDED;

      case xt.RESOURCE_EXHAUSTED:
        return h.RESOURCE_EXHAUSTED;

      case xt.INTERNAL:
        return h.INTERNAL;

      case xt.UNAVAILABLE:
        return h.UNAVAILABLE;

      case xt.UNAUTHENTICATED:
        return h.UNAUTHENTICATED;

      case xt.INVALID_ARGUMENT:
        return h.INVALID_ARGUMENT;

      case xt.NOT_FOUND:
        return h.NOT_FOUND;

      case xt.ALREADY_EXISTS:
        return h.ALREADY_EXISTS;

      case xt.PERMISSION_DENIED:
        return h.PERMISSION_DENIED;

      case xt.FAILED_PRECONDITION:
        return h.FAILED_PRECONDITION;

      case xt.ABORTED:
        return h.ABORTED;

      case xt.OUT_OF_RANGE:
        return h.OUT_OF_RANGE;

      case xt.UNIMPLEMENTED:
        return h.UNIMPLEMENTED;

      case xt.DATA_LOSS:
        return h.DATA_LOSS;

      default:
        return Ee();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Rt = xt || (xt = {}))[Rt.OK = 0] = "OK", Rt[Rt.CANCELLED = 1] = "CANCELLED", 
Rt[Rt.UNKNOWN = 2] = "UNKNOWN", Rt[Rt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Rt[Rt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Rt[Rt.NOT_FOUND = 5] = "NOT_FOUND", 
Rt[Rt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Rt[Rt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Rt[Rt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Rt[Rt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Rt[Rt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Rt[Rt.ABORTED = 10] = "ABORTED", 
Rt[Rt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Rt[Rt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Rt[Rt.INTERNAL = 13] = "INTERNAL", Rt[Rt.UNAVAILABLE = 14] = "UNAVAILABLE", Rt[Rt.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jt = new I(b.k);

function Ft() {
    return jt;
}

function Gt() {
    return Ft();
}

var Bt = new I(b.k);

function zt() {
    return Bt;
}

var Kt = new I(b.k);

function Yt() {
    return Kt;
}

var Qt = new A(b.k);

function Zt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Qt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var Wt = new A(Ie);

function Ht() {
    return Wt;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Xt = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.k = t ? function(e, n) {
            return t(e, n) || b.k(e.key, n.key);
        } : function(t, e) {
            return b.k(t.key, e.key);
        }, this.rs = zt(), this.hs = new I(this.k)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.os = function(e) {
        return new t(e.k);
    }, t.prototype.has = function(t) {
        return null != this.rs.get(t);
    }, t.prototype.get = function(t) {
        return this.rs.get(t);
    }, t.prototype.first = function() {
        return this.hs.ot();
    }, t.prototype.last = function() {
        return this.hs.at();
    }, t.prototype.q = function() {
        return this.hs.q();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.rs.get(t);
        return e ? this.hs.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.hs.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.hs.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.rt(e.rs.nt(t.key, t), e.hs.nt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.rt(this.rs.remove(t), this.hs.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.hs._t(), r = e.hs._t(); n.wt(); ) {
            var i = n.It().key, o = r.It().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.rt = function(e, n) {
        var r = new t;
        return r.k = this.k, r.rs = e, r.hs = n, r;
    }, t;
}(), Jt = /** @class */ function() {
    function t() {
        this.as = new I(b.k);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.as.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.as = this.as.nt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.as = this.as.nt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.as = this.as.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.as = this.as.nt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.as = this.as.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.as = this.as.nt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.as = this.as.nt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        Ee() : this.as = this.as.nt(e, t);
    }, t.prototype.us = function() {
        var t = [];
        return this.as.ut((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), $t = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.cs = n, this.docChanges = r, this._s = i, this.fromCache = o, 
        this.ls = s, this.ds = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.fs = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, Xt.os(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this._s.q();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.ls === t.ls && this._s.isEqual(t._s) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.cs.isEqual(t.cs))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), te = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.ts = t, this.Ts = e, this.Es = n, this.Is = r, this.ws = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Rs = function(e, n) {
        var r = new Map;
        return r.set(e, ee.As(e, n)), new t(m.MIN, r, Ht(), Ft(), Zt());
    }, t;
}(), ee = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.ms = e, this.Ps = n, this.Vs = r, this.gs = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.As = function(e, n) {
        return new t(R.xt, n, Zt(), Zt(), Zt());
    }, t;
}(), ne = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.ps = t, this.removedTargetIds = e, this.key = n, this.ys = r;
}, re = function(t, e) {
    this.targetId = t, this.bs = e;
}, ie = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = R.xt), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, oe = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.vs = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.Ss = ae(), 
        /** See public getters for explanations of these fields. */
        this.Ds = R.xt, this.Cs = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.Fs = !0;
    }
    return Object.defineProperty(t.prototype, "ms", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.Cs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.Ds;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Ns", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.vs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ks", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.Fs;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.$s = function(t) {
        t.Ot() > 0 && (this.Fs = !0, this.Ds = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.Ms = function() {
        var t = Zt(), e = Zt(), n = Zt();
        return this.Ss.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                Ee();
            }
        })), new ee(this.Ds, this.Cs, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.Ls = function() {
        this.Fs = !1, this.Ss = ae();
    }, t.prototype.Os = function(t, e) {
        this.Fs = !0, this.Ss = this.Ss.nt(t, e);
    }, t.prototype.xs = function(t) {
        this.Fs = !0, this.Ss = this.Ss.remove(t);
    }, t.prototype.Bs = function() {
        this.vs += 1;
    }, t.prototype.qs = function() {
        this.vs -= 1;
    }, t.prototype.Us = function() {
        this.Fs = !0, this.Cs = !0;
    }, t;
}(), se = /** @class */ function() {
    function t(t) {
        this.Qs = t, 
        /** The internal state of all tracked targets. */
        this.Ws = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.js = Ft(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ks = ue(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Gs = new A(Ie)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.zs = function(t) {
        for (var e = 0, n = t.ps; e < n.length; e++) {
            var r = n[e];
            t.ys instanceof mt ? this.Hs(r, t.ys) : t.ys instanceof gt && this.Ys(r, t.key, t.ys);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.Ys(s, t.key, t.ys);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Js = function(t) {
        var e = this;
        this.Xs(t, (function(n) {
            var r = e.Zs(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.ti(n) && r.$s(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.qs(), r.Ns || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.Ls(), r.$s(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.qs(), r.Ns || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.ti(n) && (r.Us(), r.$s(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.ti(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.ei(n), r.$s(t.resumeToken));
                break;

              default:
                Ee();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.Xs = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ws.forEach((function(t, r) {
            n.ti(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.si = function(t) {
        var e = t.targetId, n = t.bs.count, r = this.ii(e);
        if (r) {
            var i = r.target;
            if (i.Pe()) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new b(i.path);
                this.Ys(e, o, new gt(o, m.S()));
            } else _e(1 === n); else this.ni(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.ei(e), this.Gs = this.Gs.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.ri = function(t) {
        var e = this, n = new Map;
        this.Ws.forEach((function(r, i) {
            var o = e.ii(i);
            if (o) {
                if (r.ms && o.target.Pe()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new b(o.target.path);
                    null !== e.js.get(s) || e.hi(i, s) || e.Ys(i, s, new gt(s, t));
                }
                r.ks && (n.set(i, r.Ms()), r.Ls());
            }
        }));
        var r = Zt();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ks.forEach((function(t, n) {
            var i = !0;
            n.Ft((function(t) {
                var n = e.ii(t);
                return !n || 2 /* LimboResolution */ === n.Ze || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new te(t, n, this.Gs, this.js, r);
        return this.js = Ft(), this.Ks = ue(), this.Gs = new A(Ie), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Hs = function(t, e) {
        if (this.ti(t)) {
            var n = this.hi(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.Zs(t).Os(e.key, n), this.js = this.js.nt(e.key, e), this.Ks = this.Ks.nt(e.key, this.oi(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.Ys = function(t, e, n) {
        if (this.ti(t)) {
            var r = this.Zs(t);
            this.hi(t, e) ? r.Os(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.xs(e), this.Ks = this.Ks.nt(e, this.oi(e).delete(t)), n && (this.js = this.js.nt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Ws.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.ni = function(t) {
        var e = this.Zs(t).Ms();
        return this.Qs.ai(t).size + e.Ps.size - e.gs.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Bs = function(t) {
        this.Zs(t).Bs();
    }, t.prototype.Zs = function(t) {
        var e = this.Ws.get(t);
        return e || (e = new oe, this.Ws.set(t, e)), e;
    }, t.prototype.oi = function(t) {
        var e = this.Ks.get(t);
        return e || (e = new A(Ie), this.Ks = this.Ks.nt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.ti = function(t) {
        var e = null !== this.ii(t);
        return e || me("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.ii = function(t) {
        var e = this.Ws.get(t);
        return e && e.Ns ? null : this.Qs.ui(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.ei = function(t) {
        var e = this;
        this.Ws.set(t, new oe), this.Qs.ai(t).forEach((function(n) {
            e.Ys(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.hi = function(t, e) {
        return this.Qs.ai(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function ue() {
    return new I(b.k);
}

function ae() {
    return new I(b.k);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var he = function() {
    var t = {};
    return t[kt.ASCENDING.name] = "ASCENDING", t[kt.DESCENDING.name] = "DESCENDING", 
    t;
}(), ce = function() {
    var t = {};
    return t[bt.LESS_THAN.name] = "LESS_THAN", t[bt.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", 
    t[bt.GREATER_THAN.name] = "GREATER_THAN", t[bt.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", 
    t[bt.EQUAL.name] = "EQUAL", t[bt.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", t[bt.IN.name] = "IN", 
    t[bt.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", t;
}(), fe = /** @class */ function() {
    function t(t, e) {
        this.ci = t, this.options = e;
    }
    return t.prototype._i = function(t) {
        var e = void 0 === t.code ? h.UNKNOWN : Mt(t.code);
        return new c(e, t.message || "");
    }, 
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    t.prototype.li = function(t) {
        return this.options.di || L(t) ? t : {
            value: t
        };
    }, 
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */
    t.prototype.fi = function(t) {
        var e;
        return L(e = "object" == typeof t ? t.value : t) ? null : e;
    }, 
    /**
     * Returns an IntegerValue for `value`.
     */
    t.prototype.Wt = function(t) {
        return {
            integerValue: "" + t
        };
    }, 
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */
    t.prototype.jt = function(t) {
        if (this.options.di) {
            if (isNaN(t)) return {
                doubleValue: "NaN"
            };
            if (t === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (t === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: V(t) ? "-0" : t
        };
    }, 
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */
    t.prototype.Ti = function(t) {
        return O(t) ? this.Wt(t) : this.jt(t);
    }, 
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    t.prototype.F = function(t) {
        return this.options.di ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
            seconds: "" + t.seconds,
            nanos: t.nanoseconds
        };
    }, t.prototype.v = function(t) {
        var e = z(t);
        return new v(e.seconds, e.nanos);
    }, 
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    t.prototype.Ei = function(t) {
        return this.options.di ? t.toBase64() : t.toUint8Array();
    }, 
    /**
     * Returns a ByteString based on the proto string value.
     */
    t.prototype.Ii = function(t) {
        return this.options.di ? (_e(void 0 === t || "string" == typeof t), R.fromBase64String(t || "")) : (_e(void 0 === t || t instanceof Uint8Array), 
        R.fromUint8Array(t || new Uint8Array));
    }, t.prototype.toVersion = function(t) {
        return this.F(t.F());
    }, t.prototype.fromVersion = function(t) {
        return _e(!!t), m.v(this.v(t));
    }, t.prototype.wi = function(t, e) {
        return this.Ri(e || this.ci).child("documents").child(t).K();
    }, t.prototype.Ai = function(t) {
        var e = w.G(t);
        return _e(le(e)), e;
    }, t.prototype.mi = function(t) {
        return this.wi(t.path);
    }, t.prototype.tt = function(t) {
        var e = this.Ai(t);
        return _e(e.get(1) === this.ci.projectId), _e(!e.get(3) && !this.ci.database || e.get(3) === this.ci.database), 
        new b(this.Pi(e));
    }, t.prototype.Vi = function(t) {
        return this.wi(t);
    }, t.prototype.gi = function(t) {
        var e = this.Ai(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === e.length ? w.H : this.Pi(e);
    }, Object.defineProperty(t.prototype, "pi", {
        get: function() {
            return new w([ "projects", this.ci.projectId, "databases", this.ci.database ]).K();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ri = function(t) {
        return new w([ "projects", t.projectId, "databases", t.database ]);
    }, t.prototype.Pi = function(t) {
        return _e(t.length > 4 && "documents" === t.get(4)), t.M(5);
    }, 
    /** Creates an api.Document from key and fields (but no create/update time) */ t.prototype.yi = function(t, e) {
        return {
            name: this.mi(t),
            fields: e.proto.mapValue.fields
        };
    }, t.prototype.bi = function(t) {
        return {
            name: this.mi(t.key),
            fields: t.Re().mapValue.fields,
            updateTime: this.F(t.version.F())
        };
    }, t.prototype.vi = function(t, e) {
        var n = this.tt(t.name), r = this.fromVersion(t.updateTime), i = new dt({
            mapValue: {
                fields: t.fields
            }
        });
        return new mt(n, r, i, {
            hasCommittedMutations: !!e
        });
    }, t.prototype.Si = function(t) {
        _e(!!t.found), t.found.name, t.found.updateTime;
        var e = this.tt(t.found.name), n = this.fromVersion(t.found.updateTime), r = new dt({
            mapValue: {
                fields: t.found.fields
            }
        });
        return new mt(e, n, r, {});
    }, t.prototype.Di = function(t) {
        _e(!!t.missing), _e(!!t.readTime);
        var e = this.tt(t.missing), n = this.fromVersion(t.readTime);
        return new gt(e, n);
    }, t.prototype.Ci = function(t) {
        return "found" in t ? this.Si(t) : "missing" in t ? this.Di(t) : Ee();
    }, t.prototype.Fi = function(t) {
        var e;
        if ("targetChange" in t) {
            t.targetChange;
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var n = this.Ni(t.targetChange.targetChangeType || "NO_CHANGE"), r = t.targetChange.targetIds || [], i = this.Ii(t.targetChange.resumeToken), o = t.targetChange.cause, s = o && this._i(o);
            e = new ie(n, r, i, s || null);
        } else if ("documentChange" in t) {
            t.documentChange;
            var u = t.documentChange;
            u.document, u.document.name, u.document.updateTime;
            var a = this.tt(u.document.name), h = this.fromVersion(u.document.updateTime), c = new dt({
                mapValue: {
                    fields: u.document.fields
                }
            }), f = new mt(a, h, c, {}), l = u.targetIds || [], p = u.removedTargetIds || [];
            e = new ne(l, p, f.key, f);
        } else if ("documentDelete" in t) {
            t.documentDelete;
            var d = t.documentDelete;
            d.document;
            var y = this.tt(d.document), v = d.readTime ? this.fromVersion(d.readTime) : m.S(), g = new gt(y, v), w = d.removedTargetIds || [];
            e = new ne([], w, g.key, g);
        } else if ("documentRemove" in t) {
            t.documentRemove;
            var E = t.documentRemove;
            E.document;
            var _ = this.tt(E.document), b = E.removedTargetIds || [];
            e = new ne([], b, _, null);
        } else {
            if (!("filter" in t)) return Ee();
            t.filter;
            var I = t.filter;
            I.targetId;
            var T = I.count || 0, N = new Ut(T), A = I.targetId;
            e = new re(A, N);
        }
        return e;
    }, t.prototype.Ni = function(t) {
        return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : Ee();
    }, t.prototype.ki = function(t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return m.MIN;
        var e = t.targetChange;
        return e.targetIds && e.targetIds.length ? m.MIN : e.readTime ? this.fromVersion(e.readTime) : m.MIN;
    }, t.prototype.$i = function(t) {
        var e, n = this;
        if (t instanceof ht) e = {
            update: this.yi(t.key, t.value)
        }; else if (t instanceof lt) e = {
            delete: this.mi(t.key)
        }; else if (t instanceof ct) e = {
            update: this.yi(t.key, t.data),
            updateMask: this.Mi(t.se)
        }; else if (t instanceof ft) e = {
            transform: {
                document: this.mi(t.key),
                fieldTransforms: t.fieldTransforms.map((function(t) {
                    return n.Li(t);
                }))
            }
        }; else {
            if (!(t instanceof pt)) return Ee();
            e = {
                verify: this.mi(t.key)
            };
        }
        return t.Zt.Ht || (e.currentDocument = this.Oi(t.Zt)), e;
    }, t.prototype.xi = function(t) {
        var e = this, n = t.currentDocument ? this.Bi(t.currentDocument) : ut.NONE;
        if (t.update) {
            t.update.name;
            var r = this.tt(t.update.name), i = new dt({
                mapValue: {
                    fields: t.update.fields
                }
            });
            if (t.updateMask) {
                var o = this.qi(t.updateMask);
                return new ct(r, i, o, n);
            }
            return new ht(r, i, n);
        }
        if (t.delete) {
            var s = this.tt(t.delete);
            return new lt(s, n);
        }
        if (t.transform) {
            var u = this.tt(t.transform.document), a = t.transform.fieldTransforms.map((function(t) {
                return e.Ui(t);
            }));
            return _e(!0 === n.exists), new ft(u, a);
        }
        if (t.verify) {
            var h = this.tt(t.verify);
            return new pt(h, n);
        }
        return Ee();
    }, t.prototype.Oi = function(t) {
        return void 0 !== t.updateTime ? {
            updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
            exists: t.exists
        } : Ee();
    }, t.prototype.Bi = function(t) {
        return void 0 !== t.updateTime ? ut.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? ut.exists(t.exists) : ut.NONE;
    }, t.prototype.Qi = function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
        n.isEqual(m.MIN) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = this.fromVersion(e));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
        new st(n, r);
    }, t.prototype.Wi = function(t, e) {
        var n = this;
        return t && t.length > 0 ? (_e(void 0 !== e), t.map((function(t) {
            return n.Qi(t, e);
        }))) : [];
    }, t.prototype.Li = function(t) {
        var e = t.transform;
        if (e instanceof $) return {
            fieldPath: t.field.K(),
            setToServerValue: "REQUEST_TIME"
        };
        if (e instanceof tt) return {
            fieldPath: t.field.K(),
            appendMissingElements: {
                values: e.elements
            }
        };
        if (e instanceof et) return {
            fieldPath: t.field.K(),
            removeAllFromArray: {
                values: e.elements
            }
        };
        if (e instanceof nt) return {
            fieldPath: t.field.K(),
            increment: e.Qt
        };
        throw Ee();
    }, t.prototype.Ui = function(t) {
        var e = null;
        if ("setToServerValue" in t) _e("REQUEST_TIME" === t.setToServerValue), e = $.instance; else if ("appendMissingElements" in t) {
            var n = t.appendMissingElements.values || [];
            e = new tt(n);
        } else if ("removeAllFromArray" in t) {
            var r = t.removeAllFromArray.values || [];
            e = new et(r);
        } else "increment" in t ? e = new nt(this, t.increment) : Ee();
        var i = _.Z(t.fieldPath);
        return new ot(i, e);
    }, t.prototype.ji = function(t) {
        return {
            documents: [ this.Vi(t.path) ]
        };
    }, t.prototype.Ki = function(t) {
        _e(1 === t.documents.length);
        var e = t.documents[0];
        return _t.ve(this.gi(e)).xe();
    }, t.prototype.Gi = function(t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var e = {
            structuredQuery: {}
        }, n = t.path;
        null !== t.collectionGroup ? (e.parent = this.Vi(n), e.structuredQuery.from = [ {
            collectionId: t.collectionGroup,
            allDescendants: !0
        } ]) : (e.parent = this.Vi(n.L()), e.structuredQuery.from = [ {
            collectionId: n.B()
        } ]);
        var r = this.zi(t.filters);
        r && (e.structuredQuery.where = r);
        var i = this.Hi(t.orderBy);
        i && (e.structuredQuery.orderBy = i);
        var o = this.li(t.limit);
        return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Yi(t.startAt)), 
        t.endAt && (e.structuredQuery.endAt = this.Yi(t.endAt)), e;
    }, t.prototype.Ji = function(t) {
        var e = this.gi(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            _e(1 === r);
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = this.Xi(n.where));
        var u = [];
        n.orderBy && (u = this.Zi(n.orderBy));
        var a = null;
        n.limit && (a = this.fi(n.limit));
        var h = null;
        n.startAt && (h = this.tn(n.startAt));
        var c = null;
        return n.endAt && (c = this.tn(n.endAt)), new _t(e, i, u, s, a, "F" /* First */ , h, c).xe();
    }, t.prototype.en = function(t) {
        var e = this.sn(t.Ze);
        return null == e ? null : {
            "goog-listen-tags": e
        };
    }, t.prototype.sn = function(t) {
        switch (t) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return Ee();
        }
    }, t.prototype.xe = function(t) {
        var e, n = t.target;
        return (e = n.Pe() ? {
            documents: this.ji(n)
        } : {
            query: this.Gi(n)
        }).targetId = t.targetId, t.resumeToken.Ot() > 0 && (e.resumeToken = this.Ei(t.resumeToken)), 
        e;
    }, t.prototype.zi = function(t) {
        var e = this;
        if (0 !== t.length) {
            var n = t.map((function(t) {
                return t instanceof It ? e.in(t) : Ee();
            }));
            return 1 === n.length ? n[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: n
                }
            };
        }
    }, t.prototype.Xi = function(t) {
        var e = this;
        return t ? void 0 !== t.unaryFilter ? [ this.nn(t) ] : void 0 !== t.fieldFilter ? [ this.rn(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
            return e.Xi(t);
        })).reduce((function(t, e) {
            return t.concat(e);
        })) : Ee() : [];
    }, t.prototype.Hi = function(t) {
        var e = this;
        if (0 !== t.length) return t.map((function(t) {
            return e.hn(t);
        }));
    }, t.prototype.Zi = function(t) {
        var e = this;
        return t.map((function(t) {
            return e.on(t);
        }));
    }, t.prototype.Yi = function(t) {
        return {
            before: t.before,
            values: t.position
        };
    }, t.prototype.tn = function(t) {
        var e = !!t.before, n = t.values || [];
        return new Lt(n, e);
    }, 
    // visible for testing
    t.prototype.an = function(t) {
        return he[t.name];
    }, 
    // visible for testing
    t.prototype.un = function(t) {
        switch (t) {
          case "ASCENDING":
            return kt.ASCENDING;

          case "DESCENDING":
            return kt.DESCENDING;

          default:
            return;
        }
    }, 
    // visible for testing
    t.prototype.cn = function(t) {
        return ce[t.name];
    }, t.prototype._n = function(t) {
        switch (t) {
          case "EQUAL":
            return bt.EQUAL;

          case "GREATER_THAN":
            return bt.GREATER_THAN;

          case "GREATER_THAN_OR_EQUAL":
            return bt.GREATER_THAN_OR_EQUAL;

          case "LESS_THAN":
            return bt.LESS_THAN;

          case "LESS_THAN_OR_EQUAL":
            return bt.LESS_THAN_OR_EQUAL;

          case "ARRAY_CONTAINS":
            return bt.ARRAY_CONTAINS;

          case "IN":
            return bt.IN;

          case "ARRAY_CONTAINS_ANY":
            return bt.ARRAY_CONTAINS_ANY;

          case "OPERATOR_UNSPECIFIED":
          default:
            return Ee();
        }
    }, t.prototype.ln = function(t) {
        return {
            fieldPath: t.K()
        };
    }, t.prototype.dn = function(t) {
        return _.Z(t.fieldPath);
    }, 
    // visible for testing
    t.prototype.hn = function(t) {
        return {
            field: this.ln(t.field),
            direction: this.an(t.dir)
        };
    }, t.prototype.on = function(t) {
        return new Vt(this.dn(t.field), this.un(t.direction));
    }, t.prototype.rn = function(t) {
        return It.create(this.dn(t.fieldFilter.field), this._n(t.fieldFilter.op), t.fieldFilter.value);
    }, 
    // visible for testing
    t.prototype.in = function(t) {
        if (t.op === bt.EQUAL) {
            if (X(t.value)) return {
                unaryFilter: {
                    field: this.ln(t.field),
                    op: "IS_NAN"
                }
            };
            if (H(t.value)) return {
                unaryFilter: {
                    field: this.ln(t.field),
                    op: "IS_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: this.ln(t.field),
                op: this.cn(t.op),
                value: t.value
            }
        };
    }, t.prototype.nn = function(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = this.dn(t.unaryFilter.field);
            return It.create(e, bt.EQUAL, {
                doubleValue: NaN
            });

          case "IS_NULL":
            var n = this.dn(t.unaryFilter.field);
            return It.create(n, bt.EQUAL, {
                nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
          default:
            return Ee();
        }
    }, t.prototype.Mi = function(t) {
        var e = [];
        return t.fields.forEach((function(t) {
            return e.push(t.K());
        })), {
            fieldPaths: e
        };
    }, t.prototype.qi = function(t) {
        var e = (t.fieldPaths || []).map((function(t) {
            return _.Z(t);
        }));
        return it.Gt(e);
    }, t;
}();

/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */ function le(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */ var pe = /** @class */ function() {
    function t() {}
    return t.fn = function(e) {
        t.platform && Ee(), t.platform = e;
    }, t.Lt = function() {
        return t.platform || Ee(), t.platform;
    }, t;
}(), de = new r.Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function ye() {
    return de.logLevel;
}

function ve(t) {
    de.logLevel = t;
}

function me(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (de.logLevel <= r.LogLevel.DEBUG) {
        var o = n.map(we);
        de.debug.apply(de, e.__spreadArrays([ "Firestore (" + u + "): " + t ], o));
    }
}

function ge(t) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (de.logLevel <= r.LogLevel.ERROR) {
        var o = n.map(we);
        de.error.apply(de, e.__spreadArrays([ "Firestore (" + u + "): " + t ], o));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function we(t) {
    if ("string" == typeof t) return t;
    var e = pe.Lt();
    try {
        return e.Tn(t);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function Ee(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (" + u + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw ge(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function _e(t, e) {
    t || Ee();
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var be = /** @class */ function() {
    function t() {}
    return t.En = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
        return e;
    }, t;
}();

function Ie(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function Te(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function Ne(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ae = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.ci = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, Se = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "In", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.D = function(t) {
        return Ie(this.projectId, t.projectId) || Ie(this.database, t.database);
    }, t;
}(), De = /** @class */ function() {
    function t(t) {
        this.wn = t, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.Rn = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.wn(t), n = this.Rn[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (s.isEqual(t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.wn(t), r = this.Rn[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (r[i][0].isEqual(t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.Rn[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.wn(t), n = this.Rn[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.Rn[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        k(this.Rn, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.q = function() {
        return x(this.Rn);
    }, t;
}(), ke = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.An = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.qt = function(t, e, n) {
        for (var r = n.mn, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            if (o.key.isEqual(t)) {
                var s = r[i];
                e = o.qt(e, s);
            }
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.Bt = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = i.Bt(e, e, this.An));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = a.Bt(e, o, this.An));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.Pn = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.Bt(r.key, t.get(r.key));
            i && (n = n.nt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), Zt());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && Te(this.mutations, t.mutations, (function(t, e) {
            return t.isEqual(e);
        })) && Te(this.baseMutations, t.baseMutations, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), xe = /** @class */ function() {
    function t(t, e, n, r, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    i) {
        this.batch = t, this.Vn = e, this.mn = n, this.streamToken = r, this.gn = i
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r, i) {
        _e(e.mutations.length === r.length);
        for (var o = Yt(), s = e.mutations, u = 0; u < s.length; u++) o = o.nt(s[u].key, r[u].version);
        return new t(e, n, r, i, o);
    }, t;
}(), Re = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.pn = new A(Le.Ie), 
        // A set of outstanding references to a document sorted by target id.
        this.yn = new A(Le.bn)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.q = function() {
        return this.pn.q();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.vn = function(t, e) {
        var n = new Le(t, e);
        this.pn = this.pn.add(n), this.yn = this.yn.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Sn = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.vn(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.Dn = function(t, e) {
        this.Cn(new Le(t, e));
    }, t.prototype.Fn = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Dn(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Nn = function(t) {
        var e = this, n = b.EMPTY, r = new Le(n, t), i = new Le(n, t + 1), o = [];
        return this.yn.Ct([ r, i ], (function(t) {
            e.Cn(t), o.push(t.key);
        })), o;
    }, t.prototype.kn = function() {
        var t = this;
        this.pn.forEach((function(e) {
            return t.Cn(e);
        }));
    }, t.prototype.Cn = function(t) {
        this.pn = this.pn.delete(t), this.yn = this.yn.delete(t);
    }, t.prototype.$n = function(t) {
        var e = b.EMPTY, n = new Le(e, t), r = new Le(e, t + 1), i = Zt();
        return this.yn.Ct([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.Mn = function(t) {
        var e = new Le(t, 0), n = this.pn.Nt(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Le = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.Ln = e
        /** Compare by key then by ID */;
    }
    return t.Ie = function(t, e) {
        return b.k(t.key, e.key) || Ie(t.Ln, e.Ln);
    }, 
    /** Compare by ID then by key */ t.bn = function(t, e) {
        return Ie(t.Ln, e.Ln) || b.k(t.key, e.key);
    }, t;
}(), Ve = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.On = null, this.xn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Bn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.qn = !1, t((function(t) {
            e.Bn = !0, e.result = t, e.On && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.On(t);
        }), (function(t) {
            e.Bn = !0, e.error = t, e.xn && e.xn(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.qn && Ee(), this.qn = !0, this.Bn ? this.error ? this.Un(n, this.error) : this.Qn(e, this.result) : new t((function(t, i) {
            r.On = function(n) {
                r.Qn(e, n).next(t, i);
            }, r.xn = function(e) {
                r.Un(n, e).next(t, i);
            };
        }));
    }, t.prototype.Wn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.jn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.Qn = function(e, n) {
        return e ? this.jn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.Un = function(e, n) {
        return e ? this.jn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.Kn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Gn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.Kn(r);
    }, t;
}(), Oe = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.zn = new De((function(t) {
            return t.toString();
        })), this.Hn = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.Yn;
        },
        set: function(t) {
            this.Yn = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Jn = function(t, e) {
        this.Xn(), this.readTime = e, this.zn.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Zn = function(t, e) {
        this.Xn(), e && (this.readTime = e), this.zn.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.tr = function(t, e) {
        this.Xn();
        var n = this.zn.get(e);
        return void 0 !== n ? Ve.resolve(n) : this.er(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.sr(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Xn(), this.Hn = !0, this.ir(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.Xn = function() {}, 
    t;
}(), Pe = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Ce = /** @class */ function() {
    function t() {
        this.nr = [];
    }
    return t.prototype.rr = function(t) {
        this.nr.push(t);
    }, t.prototype.hr = function() {
        this.nr.forEach((function(t) {
            return t();
        }));
    }, t;
}(), Ue = /** @class */ function() {
    function t(t, e, n) {
        this.or = t, this.ar = e, this.ur = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.cr = function(t, e) {
        var n = this;
        return this.ar._r(t, e).next((function(r) {
            return n.lr(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.lr = function(t, e, n) {
        return this.or.tr(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].Bt(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.dr = function(t, e, n) {
        var r = Gt();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].Bt(t, e);
            }
            r = r.nt(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Tr = function(t, e) {
        var n = this;
        return this.or.getEntries(t, e).next((function(e) {
            return n.Er(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Er = function(t, e) {
        var n = this;
        return this.ar.Ir(t, e).next((function(r) {
            var i = n.dr(t, e, r), o = Ft();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new gt(t, m.S())), o = o.nt(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.MIN, return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.wr = function(t, e, n) {
        return e.Pe() ? this.Rr(t, e.path) : e.He() ? this.Ar(t, e, n) : this.mr(t, e, n);
    }, t.prototype.Rr = function(t, e) {
        // Just do a simple document lookup.
        return this.cr(t, new b(e)).next((function(t) {
            var e = zt();
            return t instanceof mt && (e = e.nt(t.key, t)), e;
        }));
    }, t.prototype.Ar = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = zt();
        return this.ur.Pr(t, i).next((function(s) {
            return Ve.forEach(s, (function(s) {
                var u = e.Le(s.child(i));
                return r.mr(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.nt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.mr = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.or.wr(t, e, n).next((function(n) {
            return r = n, o.ar.Vr(t, e);
        })).next((function(e) {
            return i = e, o.gr(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], h = a.key, c = r.get(h), f = a.Bt(c, c, o.An);
                    r = f instanceof mt ? r.nt(h, f) : r.remove(h);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                e.matches(n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.gr = function(t, e, n) {
        for (var r = Zt(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof ct && null === n.get(a.key) && (r = r.add(a.key));
        }
        var h = n;
        return this.or.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof mt && (h = h.nt(t, e));
            })), h;
        }));
    }, t;
}(), qe = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.pr = n, this.yr = r;
    }
    return t.br = function(e, n) {
        for (var r = Zt(), i = Zt(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), Me = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.vr = function(t) {
            return n.Sr(t);
        }, this.Dr = function(t) {
            return e.Cr(t);
        });
    }
    return t.prototype.Sr = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.Dr && this.Dr(t), t;
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */ Me.Fr = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var je = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, Fe = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.Nr = t, this.kr = e, this.$r = n, this.Mr = r, this.Lr = i, this.Or = 0, this.xr = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Br = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.Or = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.qr = function() {
        this.Or = this.Lr;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Ur = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.Or + this.Qr()), r = Math.max(0, Date.now() - this.Br), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && me("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Or + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.xr = this.Nr.Wr(this.kr, i, (function() {
            return e.Br = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Or *= this.Mr, this.Or < this.$r && (this.Or = this.$r), this.Or > this.Lr && (this.Or = this.Lr);
    }, t.prototype.cancel = function() {
        null !== this.xr && (this.xr.cancel(), this.xr = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.Qr = function() {
        return (Math.random() - .5) * this.Or;
    }, t;
}(), Ge = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.jr = t, this.kr = e, this.Kr = n, this.op = r, this.Gr = i, this.zr = new je, 
        this.then = this.zr.promise.then.bind(this.zr.promise), this.catch = this.zr.promise.catch.bind(this.zr.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.zr.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.Hr = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.Yr = setTimeout((function() {
            return e.Jr();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Xr = function() {
        return this.Jr();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.Yr && (this.clearTimeout(), this.zr.reject(new c(h.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.Jr = function() {
        var t = this;
        this.jr.Zr((function() {
            return null !== t.Yr ? (t.clearTimeout(), t.op().then((function(e) {
                return t.zr.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.Yr && (this.Gr(this), clearTimeout(this.Yr), this.Yr = null);
    }, t;
}(), Be = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.th = Promise.resolve(), 
        // The last retryable operation. Retryable operation are run in order and
        // retried with backoff.
        this.eh = Promise.resolve(), 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.sh = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.ih = [], 
        // visible for testing
        this.nh = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.rh = !1, 
        // List of TimerIds to fast-forward delays for.
        this.hh = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.oh = new Fe(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.ah = function() {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            t.uh("async_queue_retry" /* AsyncQueueRetry */);
        };
        var e = pe.Lt().window;
        e && e.addEventListener("visibilitychange", this.ah);
    }
    return Object.defineProperty(t.prototype, "_h", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.sh;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.Zr = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.lh = function(t) {
        this.dh(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.fh(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.Th = function(t) {
        return this.dh(), this.fh(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.Eh = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.dh(), this.sh ? [ 3 /*break*/ , 2 ] : (this.sh = !0, (n = pe.Lt().window) && n.removeEventListener("visibilitychange", this.ah), 
                    [ 4 /*yield*/ , this.Th(t) ]);

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.dh(), this.sh ? new Promise((function(t) {})) : this.fh(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype.Ih = function(t) {
        var n = this;
        this.dh(), this.sh || (this.eh = this.eh.then((function() {
            var r = new je, i = function() {
                return e.__awaiter(n, void 0, void 0, (function() {
                    var n;
                    return e.__generator(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return e.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , t() ];

                          case 1:
                            return e.sent(), r.resolve(), this.oh.reset(), [ 3 /*break*/ , 3 ];

                          case 2:
                            if ("IndexedDbTransactionError" !== (n = e.sent()).name) throw r.resolve(), n;
                            // Failure will be handled by AsyncQueue
                                                        return me("AsyncQueue", "Operation failed with retryable error: " + n), 
                            this.oh.Ur(i), [ 3 /*break*/ , 3 ];

                          case 3:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            };
            return n.Zr(i), r.promise;
        })));
    }, t.prototype.fh = function(t) {
        var e = this, n = this.th.then((function() {
            return e.rh = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.nh = t, e.rh = !1, ge("INTERNAL UNHANDLED ERROR: ", t.stack || t.message || ""), 
                t;
            })).then((function(t) {
                return e.rh = !1, t;
            }));
        }));
        return this.th = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned CancelablePromise can be used to cancel
     * the operation prior to its running.
     */
    t.prototype.Wr = function(t, e, n) {
        var r = this;
        this.dh(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.hh.indexOf(t) > -1 && (e = 0);
        var i = Ge.Hr(this, t, e, n, (function(t) {
            return r.wh(t);
        }));
        return this.ih.push(i), i;
    }, t.prototype.dh = function() {
        this.nh && Ee();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.Rh = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Ah = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.th ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.th) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.mh = function(t) {
        for (var e = 0, n = this.ih; e < n.length; e++) {
            if (n[e].kr === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Throws if no such operation exists. Pass TimerId.All to run
     *  all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.uh = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Ah().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.ih.sort((function(t, e) {
                return t.Kr - e.Kr;
            }));
            for (var n = 0, r = e.ih; n < r.length; n++) {
                var i = r[n];
                if (i.Xr(), "all" /* All */ !== t && i.kr === t) break;
            }
            return e.Ah();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Ph = function(t) {
        this.hh.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.wh = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.ih.indexOf(t);
        this.ih.splice(e, 1);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], s = Ie(n, i);
    return 0 === s ? Ie(r, o) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var Ke = /** @class */ function() {
    function t(t) {
        this.Vh = t, this.buffer = new A(ze), this.gh = 0;
    }
    return t.prototype.ph = function() {
        return ++this.gh;
    }, t.prototype.yh = function(t) {
        var e = [ t, this.ph() ];
        if (this.buffer.size < this.Vh) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            ze(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), Ye = {
    bh: !1,
    vh: 0,
    Sh: 0,
    Dh: 0
}, Qe = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.Ch = t, this.Fh = e, this.Nh = n;
    }
    return t.kh = function(e) {
        return new t(e, t.$h, t.Mh);
    }, t;
}();

Qe.Lh = -1, Qe.Oh = 1048576, Qe.xh = 41943040, Qe.$h = 10, Qe.Mh = 1e3, Qe.Bh = new Qe(Qe.xh, Qe.$h, Qe.Mh), 
Qe.DISABLED = new Qe(Qe.Lh, 0, 0);

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */
var Ze = /** @class */ function() {
    function t(t, e) {
        this.qh = t, this.jr = e, this.Uh = !1, this.Qh = null;
    }
    return t.prototype.start = function(t) {
        this.qh.Wh.Ch !== Qe.Lh && this.jh(t);
    }, t.prototype.stop = function() {
        this.Qh && (this.Qh.cancel(), this.Qh = null);
    }, Object.defineProperty(t.prototype, "Kh", {
        get: function() {
            return null !== this.Qh;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.jh = function(t) {
        var e = this, n = this.Uh ? 3e5 : 6e4;
        me("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.Qh = this.jr.Wr("lru_garbage_collection" /* LruGarbageCollection */ , n, (function() {
            return e.Qh = null, e.Uh = !0, t.Gh(e.qh).then((function() {
                return e.jh(t);
            })).catch(ir);
        }));
    }, t;
}(), We = /** @class */ function() {
    function t(t, e) {
        this.zh = t, this.Wh = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */;
    }
    return t.prototype.Hh = function(t, e) {
        return this.zh.Yh(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, 
    /** Returns the nth sequence number, counting in order from the smallest. */ t.prototype.Jh = function(t, e) {
        var n = this;
        if (0 === e) return Ve.resolve(Me.Fr);
        var r = new Ke(e);
        return this.zh.Xs(t, (function(t) {
            return r.yh(t.sequenceNumber);
        })).next((function() {
            return n.zh.Xh(t, (function(t) {
                return r.yh(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, 
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.Zh = function(t, e, n) {
        return this.zh.Zh(t, e, n);
    }, 
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.to = function(t, e) {
        return this.zh.to(t, e);
    }, t.prototype.eo = function(t, e) {
        var n = this;
        return this.Wh.Ch === Qe.Lh ? (me("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        Ve.resolve(Ye)) : this.so(t).next((function(r) {
            return r < n.Wh.Ch ? (me("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.Wh.Ch), 
            Ye) : n.io(t, e);
        }));
    }, t.prototype.so = function(t) {
        return this.zh.so(t);
    }, t.prototype.io = function(t, e) {
        var n, i, o, s, u, a, h, c = this, f = Date.now();
        return this.Hh(t, this.Wh.Fh).next((function(e) {
            // Cap at the configured max
            return e > c.Wh.Nh ? (me("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.Wh.Nh + " from " + e), 
            i = c.Wh.Nh) : i = e, s = Date.now(), c.Jh(t, i);
        })).next((function(r) {
            return n = r, u = Date.now(), c.Zh(t, n, e);
        })).next((function(e) {
            return o = e, a = Date.now(), c.to(t, n);
        })).next((function(t) {
            return h = Date.now(), ye() <= r.LogLevel.DEBUG && me("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - f) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (h - a) + "ms\nTotal Duration: " + (h - f) + "ms"), 
            Ve.resolve({
                bh: !0,
                vh: i,
                Sh: o,
                Dh: t
            });
        }));
    }, t;
}();

/** Implements the steps for LRU garbage collection. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function He(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = Je(e)), e = Xe(t.get(n), e);
    return Je(e);
}

/** Encodes a single segment of a resource path into the given result */ function Xe(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Je(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function $e(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (_e(e >= 2), 2 === e) return _e("" === t.charAt(0) && "" === t.charAt(1)), 
    w.H;
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);
        switch ((s < 0 || s > n) && Ee(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            Ee();
        }
        o = s + 2;
    }
    return new w(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */
/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */ var tn = /** @class */ function() {
    function t(e) {
        this.db = e, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.no(i.getUA()) && ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
        /**
     * Opens the specified database, creating or upgrading it if necessary.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
     * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
     * mechanism, as only version-upgrade transactions are allowed to do things like create
     * objectstores.
     */;
    }
    return t.ro = function(e, n, r) {
        return me("SimpleDb", "Opening database:", e), new Ve((function(i, o) {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            var s = window.indexedDB.open(e, n);
            s.onsuccess = function(e) {
                var n = e.target.result;
                i(new t(n));
            }, s.onblocked = function() {
                o(new c(h.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, s.onerror = function(t) {
                var e = t.target.error;
                "VersionError" === e.name ? o(new c(h.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o(e);
            }, s.onupgradeneeded = function(t) {
                me("SimpleDb", 'Database "' + e + '" requires upgrade from version:', t.oldVersion);
                var n = t.target.result;
                r.createOrUpgrade(n, s.transaction, t.oldVersion, Dn).next((function() {
                    me("SimpleDb", "Database upgrade to version " + Dn + " complete");
                }));
            };
        })).Wn();
    }, 
    /** Deletes the specified database. */ t.delete = function(t) {
        return me("SimpleDb", "Removing database:", t), sn(window.indexedDB.deleteDatabase(t)).Wn();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ t.ho = function() {
        if ("undefined" == typeof window || null == window.indexedDB) return !1;
        if (t.oo()) return !0;
        // In some Node environments, `window` is defined, but `window.navigator` is
        // not. We don't support IndexedDB persistence in Node if the
        // isMockPersistence() check above returns false.
                if (void 0 === window.navigator) return !1;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var e = i.getUA(), n = t.no(e), r = 0 < n && n < 10, o = t.ao(e), s = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || s);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.oo = function() {
        var t;
        return "undefined" != typeof __PRIVATE_process && "YES" === (null === (t = __PRIVATE_process.__PRIVATE_env) || void 0 === t ? void 0 : t.uo);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ t.co = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.no = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.ao = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, t.prototype._o = function(t) {
        this.db.onversionchange = function(e) {
            return t(e);
        };
    }, t.prototype.runTransaction = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a;
            return e.__generator(this, (function(h) {
                switch (h.label) {
                  case 0:
                    i = "readonly" === t, o = 0, s = function() {
                        var t, s, a, h, c;
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                ++o, t = rn.open(u.db, i ? "readonly" : "readwrite", n), e.label = 1;

                              case 1:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return e.trys.push([ 1, 3, , 4 ]), s = r(t).catch((function(e) {
                                    // Abort the transaction if there was an error.
                                    return t.abort(e), Ve.reject(e);
                                })).Wn(), a = {}, s.catch((function() {})), [ 4 /*yield*/ , t.lo ];

                              case 2:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                e.sent(), s), a) ];

                              case 3:
                                return h = e.sent(), c = "FirebaseError" !== h.name && o < 3, me("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", h.message, c), 
                                c ? [ 3 /*break*/ , 4 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(h)
                                } ];

                              case 4:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, u = this, h.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , s() ];

                  case 2:
                    if ("object" == typeof (a = h.sent())) return [ 2 /*return*/ , a.value ];
                    h.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db.close();
    }, t;
}(), en = /** @class */ function() {
    function t(t) {
        this.do = t, this.fo = !1, this.To = null;
    }
    return Object.defineProperty(t.prototype, "Bn", {
        get: function() {
            return this.fo;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Eo", {
        get: function() {
            return this.To;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.do = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.fo = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.Io = function(t) {
        this.To = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return sn(this.do.delete());
    }, t;
}(), nn = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, h.UNAVAILABLE, "IndexedDB transaction failed: " + e) || this).name = "IndexedDbTransactionError", 
        n;
    }
    return e.__extends(n, t), n;
}(c), rn = /** @class */ function() {
    function t(t) {
        var e = this;
        this.transaction = t, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.wo = new je, this.transaction.oncomplete = function() {
            e.wo.resolve();
        }, this.transaction.onabort = function() {
            t.error ? e.wo.reject(new nn(t.error)) : e.wo.resolve();
        }, this.transaction.onerror = function(t) {
            var n = an(t.target.error);
            e.wo.reject(new nn(n));
        };
    }
    return t.open = function(e, n, r) {
        return new t(e.transaction(r, n));
    }, Object.defineProperty(t.prototype, "lo", {
        get: function() {
            return this.wo.promise;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.wo.reject(t), this.aborted || (me("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new on(e);
    }, t;
}(), on = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (me("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (me("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), sn(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t) {
        return me("SimpleDb", "ADD", this.store.name, t, t), sn(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return sn(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), me("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return me("SimpleDb", "DELETE", this.store.name, t), sn(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return me("SimpleDb", "COUNT", this.store.name), sn(this.store.count());
    }, t.prototype.Ro = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.Ao(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.mo = function(t, e) {
        me("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.Po = !1;
        var r = this.cursor(n);
        return this.Ao(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.Vo = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.Ao(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.po = function(t) {
        var e = this.cursor({});
        return new Ve((function(n, r) {
            e.onerror = function(t) {
                var e = an(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.Ao = function(t, e) {
        var n = [];
        return new Ve((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new en(i), s = e(i.primaryKey, i.value, o);
                    if (s instanceof Ve) {
                        var u = s.catch((function(t) {
                            return o.done(), Ve.reject(t);
                        }));
                        n.push(u);
                    }
                    o.Bn ? r() : null === o.Eo ? i.continue() : i.continue(o.Eo);
                } else r();
            };
        })).next((function() {
            return Ve.Kn(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.Po ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * A controller for iterating over a key range or index. It allows an iterate
 * callback to delete the currently-referenced object, or jump to a new key
 * within the key range or index.
 */
/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function sn(t) {
    return new Ve((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = an(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var un = !1;

function an(t) {
    var e = tn.no(i.getUA());
    if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var r = new c("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return un || (un = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw r;
            }), 0)), r;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var hn = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.serializer = e, this.ur = n, this.yo = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.bo = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.vo = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return _e("" !== e.uid), new t(e.t() ? e.uid : "", n, r, i);
    }, t.prototype.So = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return ln(t).Vo({
            index: Vn.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.Do = function(t, e, n) {
        return this.Co(t).next((function(e) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return e.lastStreamToken = n.toBase64(), dn(t).put(e);
        }));
    }, t.prototype.Fo = function(t) {
        return this.Co(t).next((function(t) {
            return R.fromBase64String(t.lastStreamToken);
        }));
    }, t.prototype.No = function(t, e) {
        return this.Co(t).next((function(n) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return n.lastStreamToken = e.toBase64(), dn(t).put(n);
        }));
    }, t.prototype.ko = function(t, e, n, r) {
        var i = this, o = pn(t), s = ln(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(u) {
            _e("number" == typeof u);
            for (var a = new ke(u, e, n, r), h = i.serializer.$o(i.userId, a), c = [], f = new A((function(t, e) {
                return Ie(t.K(), e.K());
            })), l = 0, p = r; l < p.length; l++) {
                var d = p[l], y = On.key(i.userId, d.key.path, u);
                f = f.add(d.key.path.L()), c.push(s.put(h)), c.push(o.put(y, On.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                c.push(i.ur.Mo(t, e));
            })), t.rr((function() {
                i.bo[u] = a.keys();
            })), Ve.Kn(c).next((function() {
                return a;
            }));
        }));
    }, t.prototype.Lo = function(t, e) {
        var n = this;
        return ln(t).get(e).next((function(t) {
            return t ? (_e(t.userId === n.userId), n.serializer.Oo(t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.xo = function(t, e) {
        var n = this;
        return this.bo[e] ? Ve.resolve(this.bo[e]) : this.Lo(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.bo[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.Bo = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return ln(t).Vo({
            index: Vn.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (_e(e.batchId >= r), o = n.serializer.Oo(e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.qo = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return ln(t).Vo({
            index: Vn.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.Uo = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return ln(t).Ro(Vn.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return e.serializer.Oo(t);
            }));
        }));
    }, t.prototype._r = function(t, e) {
        var n = this, r = On.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return pn(t).Vo({
            range: i
        }, (function(r, i, s) {
            var u = r[0], a = r[1], h = r[2], c = $e(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (u === n.userId && e.path.isEqual(c)) 
            // Look up the mutation batch in the store.
            return ln(t).get(h).next((function(t) {
                if (!t) throw Ee();
                _e(t.userId === n.userId), o.push(n.serializer.Oo(t));
            }));
            s.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Ir = function(t, e) {
        var n = this, r = new A(Ie), i = [];
        return e.forEach((function(e) {
            var o = On.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), u = pn(t).Vo({
                range: s
            }, (function(t, i, o) {
                var s = t[0], u = t[1], a = t[2], h = $e(u);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === n.userId && e.path.isEqual(h) ? r = r.add(a) : o.done();
            }));
            i.push(u);
        })), Ve.Kn(i).next((function() {
            return n.Qo(t, r);
        }));
    }, t.prototype.Vr = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = On.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), u = new A(Ie);
        return pn(t).Vo({
            range: s
        }, (function(t, e, o) {
            var s = t[0], a = t[1], h = t[2], c = $e(a);
            s === n.userId && r.U(c) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            c.length === i && (u = u.add(h)) : o.done();
        })).next((function() {
            return n.Qo(t, u);
        }));
    }, t.prototype.Qo = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(ln(t).get(e).next((function(t) {
                if (null === t) throw Ee();
                _e(t.userId === n.userId), r.push(n.serializer.Oo(t));
            })));
        })), Ve.Kn(i).next((function() {
            return r;
        }));
    }, t.prototype.Wo = function(t, e) {
        var n = this;
        return fn(t.jo, this.userId, e).next((function(r) {
            return t.rr((function() {
                n.Ko(e.batchId);
            })), Ve.forEach(r, (function(e) {
                return n.yo.Go(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.Ko = function(t) {
        delete this.bo[t];
    }, t.prototype.zo = function(t) {
        var e = this;
        return this.So(t).next((function(n) {
            if (!n) return Ve.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(On.prefixForUser(e.userId)), i = [];
            return pn(t).Vo({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = $e(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                _e(0 === i.length);
            }));
        }));
    }, t.prototype.Mn = function(t, e) {
        return cn(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Co = function(t) {
        var e = this;
        return dn(t).get(this.userId).next((function(t) {
            return t || new Ln(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function cn(t, e, n) {
    var r = On.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
    return pn(t).Vo({
        range: o,
        Po: !0
    }, (function(t, n, r) {
        var o = t[0], u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */ function fn(t, e, n) {
    var r = t.store(Vn.store), i = t.store(On.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0, a = r.Vo({
        range: s
    }, (function(t, e, n) {
        return u++, n.delete();
    }));
    o.push(a.next((function() {
        _e(1 === u);
    })));
    for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
        var l = f[c], p = On.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), h.push(l.key);
    }
    return Ve.Kn(o).next((function() {
        return h;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function ln(t) {
    return Xn.co(t, Vn.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function pn(t) {
    return Xn.co(t, On.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function dn(t) {
    return Xn.co(t, Ln.store);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ var yn = /** @class */ function() {
    function t(t) {
        this.Ho = t;
    }
    return t.prototype.next = function() {
        return this.Ho += 2, this.Ho;
    }, t.Yo = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Jo = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), vn = /** @class */ function() {
    function t(t, e) {
        this.yo = t, this.serializer = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.Xo = function(t) {
        var e = this;
        return this.Zo(t).next((function(n) {
            var r = new yn(n.highestTargetId);
            return n.highestTargetId = r.next(), e.ta(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.ea = function(t) {
        return this.Zo(t).next((function(t) {
            return m.v(new v(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.sa = function(t) {
        return wn(t.jo);
    }, t.prototype.ia = function(t, e, n) {
        var r = this;
        return this.Zo(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.F()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.ta(t, i);
        }));
    }, t.prototype.na = function(t, e) {
        var n = this;
        return this.ra(t, e).next((function() {
            return n.Zo(t).next((function(r) {
                return r.targetCount += 1, n.ha(e, r), n.ta(t, r);
            }));
        }));
    }, t.prototype.oa = function(t, e) {
        return this.ra(t, e);
    }, t.prototype.aa = function(t, e) {
        var n = this;
        return this.ua(t, e.targetId).next((function() {
            return mn(t).delete(e.targetId);
        })).next((function() {
            return n.Zo(t);
        })).next((function(e) {
            return _e(e.targetCount > 0), e.targetCount -= 1, n.ta(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.Zh = function(t, e, n) {
        var r = this, i = 0, o = [];
        return mn(t).Vo((function(s, u) {
            var a = r.serializer.ca(u);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.aa(t, a)));
        })).next((function() {
            return Ve.Kn(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.Xs = function(t, e) {
        var n = this;
        return mn(t).Vo((function(t, r) {
            var i = n.serializer.ca(r);
            e(i);
        }));
    }, t.prototype.Zo = function(t) {
        return gn(t.jo);
    }, t.prototype.ta = function(t, e) {
        return (n = t, Xn.co(n, Fn.store)).put(Fn.key, e);
        /**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */        var n;
    }, t.prototype.ra = function(t, e) {
        return mn(t).put(this.serializer._a(e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.ha = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.la = function(t) {
        return this.Zo(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.da = function(t, e) {
        var n = this, r = e.canonicalId(), i = IDBKeyRange.bound([ r, Number.NEGATIVE_INFINITY ], [ r, Number.POSITIVE_INFINITY ]), o = null;
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
                return mn(t).Vo({
            range: i,
            index: Mn.queryTargetsIndexName
        }, (function(t, r, i) {
            var s = n.serializer.ca(r);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        e.isEqual(s.target) && (o = s, i.done());
        })).next((function() {
            return o;
        }));
    }, t.prototype.fa = function(t, e, n) {
        var r = this, i = [], o = En(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var s = He(e.path);
            i.push(o.put(new jn(n, s))), i.push(r.yo.vn(t, e));
        })), Ve.Kn(i);
    }, t.prototype.Ta = function(t, e, n) {
        var r = this, i = En(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return Ve.forEach(e, (function(e) {
            var o = He(e.path);
            return Ve.Kn([ i.delete([ n, o ]), r.yo.Dn(t, e) ]);
        }));
    }, t.prototype.ua = function(t, e) {
        var n = En(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.Ea = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = En(t), i = Zt();
        return r.Vo({
            range: n,
            Po: !0
        }, (function(t, e, n) {
            var r = $e(t[1]), o = new b(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.Mn = function(t, e) {
        var n = He(e.path), r = IDBKeyRange.bound([ n ], [ Ne(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return En(t).Vo({
            index: jn.documentTargetsIndex,
            Po: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId The target ID of the TargetData entry to look up.
     * @return The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.ui = function(t, e) {
        var n = this;
        return mn(t).get(e).next((function(t) {
            return t ? n.serializer.ca(t) : null;
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function mn(t) {
    return Xn.co(t, Mn.store);
}

function gn(t) {
    return tn.co(t, Fn.store).get(Fn.key).next((function(t) {
        return _e(null !== t), t;
    }));
}

function wn(t) {
    return gn(t).next((function(t) {
        return t.highestListenSequenceNumber;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function En(t) {
    return Xn.co(t, jn.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _n = /** @class */ function() {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.serializer = t, this.ur = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.Jn = function(t, e, n) {
        return In(t).put(Tn(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.Zn = function(t, e) {
        var n = In(t), r = Tn(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.Ia(t, r);
        }));
    }, t.prototype.tr = function(t, e) {
        var n = this;
        return In(t).get(Tn(e)).next((function(t) {
            return n.wa(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.Ra = function(t, e) {
        var n = this;
        return In(t).get(Tn(e)).next((function(t) {
            var e = n.wa(t);
            return e ? {
                Aa: e,
                size: Nn(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Gt();
        return this.ma(t, e, (function(t, e) {
            var i = n.wa(e);
            r = r.nt(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.Pa = function(t, e) {
        var n = this, r = Gt(), i = new I(b.k);
        return this.ma(t, e, (function(t, e) {
            var o = n.wa(e);
            o ? (r = r.nt(t, o), i = i.nt(t, Nn(e))) : (r = r.nt(t, null), i = i.nt(t, 0));
        })).next((function() {
            return {
                Va: r,
                ga: i
            };
        }));
    }, t.prototype.ma = function(t, e, n) {
        if (e.q()) return Ve.resolve();
        var r = IDBKeyRange.bound(e.first().path.j(), e.last().path.j()), i = e._t(), o = i.It();
        return In(t).Vo({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var s = b.it(t); o && b.k(o, s) < 0; ) n(o, null), o = i.It();
            o && o.isEqual(s) && (
            // Key found in cache.
            n(o, e), o = i.wt() ? i.It() : null), 
            // Skip to the next key (if there is one).
            o ? r.Io(o.path.j()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.wt() ? i.It() : null;
        }));
    }, t.prototype.wr = function(t, e, n) {
        var r = this, i = zt(), o = e.path.length + 1, s = {};
        if (n.isEqual(m.MIN)) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var u = e.path.j();
            s.range = IDBKeyRange.lowerBound(u);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.j(), h = this.serializer.pa(n);
            s.range = IDBKeyRange.lowerBound([ a, h ], 
            /* open= */ !0), s.index = Un.collectionReadTimeIndex;
        }
        return In(t).Vo(s, (function(t, n, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var u = r.serializer.ya(n);
                e.path.U(u.key.path) ? u instanceof mt && e.matches(u) && (i = i.nt(u.key, u)) : s.done();
            }
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Returns the set of documents that have changed since the specified read
     * time.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.ba = function(t, e) {
        var n = this, r = Ft(), i = this.serializer.pa(e), o = In(t), s = IDBKeyRange.lowerBound(i, !0);
        return o.Vo({
            index: Un.readTimeIndex,
            range: s
        }, (function(t, e) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var o = n.serializer.ya(e);
            r = r.nt(o.key, o), i = e.readTime;
        })).next((function() {
            return {
                va: r,
                readTime: n.serializer.Sa(i)
            };
        }));
    }, 
    /**
     * Returns the read time of the most recently read document in the cache, or
     * SnapshotVersion.MIN if not available.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.Da = function(t) {
        var e = this, n = In(t), r = m.MIN;
        return n.Vo({
            index: Un.readTimeIndex,
            reverse: !0
        }, (function(t, n, i) {
            n.readTime && (r = e.serializer.Sa(n.readTime)), i.done();
        })).next((function() {
            return r;
        }));
    }, t.prototype.Ca = function(e) {
        return new t.Fa(this, !!e && e.Na);
    }, t.prototype.ka = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return bn(t).get(qn.key).next((function(t) {
            return _e(!!t), t;
        }));
    }, t.prototype.Ia = function(t, e) {
        return bn(t).put(qn.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.wa = function(t) {
        if (t) {
            var e = this.serializer.ya(t);
            return e instanceof gt && e.version.isEqual(m.S()) ? null : e;
        }
        return null;
    }, t;
}();

/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function bn(t) {
    return Xn.co(t, qn.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function In(t) {
    return Xn.co(t, Un.store);
}

function Tn(t) {
    return t.path.j();
}

/**
 * Retrusn an approximate size for the given document.
 */ function Nn(t) {
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw Ee();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ _n.Fa = /** @class */ function(t) {
    /**
     * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).$a = e, r.Na = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r.Ma = new De((function(t) {
            return t.toString();
        })), r;
    }
    return e.__extends(n, t), n.prototype.ir = function(t) {
        var e = this, n = [], r = 0, i = new A((function(t, e) {
            return Ie(t.K(), e.K());
        }));
        return this.zn.forEach((function(o, s) {
            var u = e.Ma.get(o);
            if (s) {
                var a = e.$a.serializer.La(s, e.readTime);
                i = i.add(o.path.L());
                var h = Nn(a);
                r += h - u, n.push(e.$a.Jn(t, o, a));
            } else if (r -= u, e.Na) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var c = e.$a.serializer.La(new gt(o, m.S()), e.readTime);
                n.push(e.$a.Jn(t, o, c));
            } else n.push(e.$a.Zn(t, o));
        })), i.forEach((function(r) {
            n.push(e.$a.ur.Mo(t, r));
        })), n.push(this.$a.updateMetadata(t, r)), Ve.Kn(n);
    }, n.prototype.er = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.$a.Ra(t, e).next((function(t) {
            return null === t ? (n.Ma.set(e, 0), null) : (n.Ma.set(e, t.size), t.Aa);
        }));
    }, n.prototype.sr = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.$a.Pa(t, e).next((function(t) {
            var e = t.Va;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.
            return t.ga.forEach((function(t, e) {
                n.Ma.set(t, e);
            })), e;
        }));
    }, n;
}(Oe);

var An = /** @class */ function() {
    function t() {
        this.Oa = new Sn;
    }
    return t.prototype.Mo = function(t, e) {
        return this.Oa.add(e), Ve.resolve();
    }, t.prototype.Pr = function(t, e) {
        return Ve.resolve(this.Oa.getEntries(e));
    }, t;
}(), Sn = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.B(), n = t.L(), r = this.index[e] || new A(w.k), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.B(), n = t.L(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new A(w.k)).j();
    }, t;
}(), Dn = 10, kn = /** @class */ function() {
    function t(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.createOrUpgrade = function(t, e, n, r) {
        var i = this;
        _e(n < r && n >= 0 && r <= Dn);
        var o = new rn(e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(Rn.store);
        }(t), function(t) {
            t.createObjectStore(Ln.store, {
                keyPath: Ln.keyPath
            }), t.createObjectStore(Vn.store, {
                keyPath: Vn.keyPath,
                autoIncrement: !0
            }).createIndex(Vn.userMutationsIndex, Vn.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(On.store);
        }(t), Bn(t), function(t) {
            t.createObjectStore(Un.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var s = Ve.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(jn.store), t.deleteObjectStore(Mn.store), t.deleteObjectStore(Fn.store);
        }(t), Bn(t)), s = s.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(Fn.store), n = new Fn(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, m.MIN.F(), 
                /*targetCount=*/ 0);
                return e.put(Fn.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, e) {
                return e.store(Vn.store).Ro().next((function(n) {
                    t.deleteObjectStore(Vn.store), t.createObjectStore(Vn.store, {
                        keyPath: Vn.keyPath,
                        autoIncrement: !0
                    }).createIndex(Vn.userMutationsIndex, Vn.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(Vn.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return Ve.Kn(i);
                }));
            }(t, o);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(zn.store, {
                    keyPath: zn.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (s = s.next((function() {
            return i.removeAcknowledgedMutations(o);
        }))), n < 6 && r >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(qn.store);
            }(t), i.addDocumentGlobal(o);
        }))), n < 7 && r >= 7 && (s = s.next((function() {
            return i.ensureSequenceNumbers(o);
        }))), n < 8 && r >= 8 && (s = s.next((function() {
            return i.createCollectionParentIndex(t, o);
        }))), n < 9 && r >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(Un.store);
                e.createIndex(Un.readTimeIndex, Un.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Un.collectionReadTimeIndex, Un.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (s = s.next((function() {
            return i.rewriteCanonicalIds(o);
        }))), s;
    }, t.prototype.addDocumentGlobal = function(t) {
        var e = 0;
        return t.store(Un.store).Vo((function(t, n) {
            e += Nn(n);
        })).next((function() {
            var n = new qn(e);
            return t.store(qn.store).put(qn.key, n);
        }));
    }, t.prototype.removeAcknowledgedMutations = function(t) {
        var e = this, n = t.store(Ln.store), r = t.store(Vn.store);
        return n.Ro().next((function(n) {
            return Ve.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.Ro(Vn.userMutationsIndex, i).next((function(r) {
                    return Ve.forEach(r, (function(r) {
                        _e(r.userId === n.userId);
                        var i = e.serializer.Oo(r);
                        return fn(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t) {
        var e = t.store(jn.store), n = t.store(Un.store);
        return wn(t).next((function(t) {
            var r = [];
            return n.Vo((function(n, i) {
                var o = new w(n), s = function(t) {
                    return [ 0, He(t) ];
                }(o);
                r.push(e.get(s).next((function(n) {
                    return n ? Ve.resolve() : function(n) {
                        return e.put(new jn(0, He(n), t));
                    }(o);
                })));
            })).next((function() {
                return Ve.Kn(r);
            }));
        }));
    }, t.prototype.createCollectionParentIndex = function(t, e) {
        // Create the index.
        t.createObjectStore(Gn.store, {
            keyPath: Gn.keyPath
        });
        var n = e.store(Gn.store), r = new Sn, i = function(t) {
            if (r.add(t)) {
                var e = t.B(), i = t.L();
                return n.put({
                    collectionId: e,
                    parent: He(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(Un.store).Vo({
            Po: !0
        }, (function(t, e) {
            var n = new w(t);
            return i(n.L());
        })).next((function() {
            return e.store(On.store).Vo({
                Po: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], $e(n));
                return i(r.L());
            }));
        }));
    }, t.prototype.rewriteCanonicalIds = function(t) {
        var e = this, n = t.store(Mn.store);
        return n.Vo((function(t, r) {
            var i = e.serializer.ca(r), o = e.serializer._a(i);
            return n.put(o);
        }));
    }, t;
}(), xn = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, Rn = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
Rn.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Rn.key = "owner";

var Ln = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Ln.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Ln.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var Vn = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via JsonProtoSerializer.toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ Vn.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
Vn.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
Vn.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
Vn.userMutationsKeyPath = [ "userId", "batchId" ];

var On = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, He(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, He(e), n ];
    }, t;
}();

On.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
On.PLACEHOLDER = new On;

var Pn = function(t, e) {
    this.path = t, this.readTime = e;
}, Cn = function(t, e) {
    this.path = t, this.version = e;
}, Un = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ Un.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
Un.readTimeIndex = "readTimeIndex", Un.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
Un.collectionReadTimeIndex = "collectionReadTimeIndex", Un.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var qn = 
/**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
function(t) {
    this.byteSize = t;
};

qn.store = "remoteDocumentGlobal", qn.key = "remoteDocumentGlobalKey";

var Mn = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

Mn.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Mn.keyPath = "targetId", 
/** The name of the queryTargets index. */
Mn.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
Mn.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var jn = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ jn.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
jn.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
jn.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
jn.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var Fn = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Fn.key = "targetGlobalKey", Fn.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var Gn = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ function Bn(t) {
    t.createObjectStore(jn.store, {
        keyPath: jn.keyPath
    }).createIndex(jn.documentTargetsIndex, jn.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Mn.store, {
        keyPath: Mn.keyPath
    }).createIndex(Mn.queryTargetsIndexName, Mn.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Fn.store);
}

Gn.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
Gn.keyPath = [ "collectionId", "parent" ];

var zn = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ zn.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
zn.keyPath = "clientId";

var Kn = e.__spreadArrays(e.__spreadArrays(e.__spreadArrays([ Ln.store, Vn.store, On.store, Un.store, Mn.store, Rn.store, Fn.store, jn.store ], [ zn.store ]), [ qn.store ]), [ Gn.store ]), Yn = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.xa = new Sn;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.Mo = function(t, e) {
        var n = this;
        if (!this.xa.has(e)) {
            var r = e.B(), i = e.L();
            t.rr((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.xa.add(e);
            }));
            var o = {
                collectionId: r,
                parent: He(i)
            };
            return Qn(t).put(o);
        }
        return Ve.resolve();
    }, t.prototype.Pr = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ Ne(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Qn(t).Ro(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push($e(o.parent));
            }
            return n;
        }));
    }, t;
}();

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A persisted implementation of IndexManager.
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function Qn(t) {
    return Xn.co(t, Gn.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ var Zn = /** @class */ function() {
    function t(t) {
        this.Ba = t;
    }
    /** Decodes a remote document from storage locally to a Document. */    return t.prototype.ya = function(t) {
        if (t.document) return this.Ba.vi(t.document, !!t.hasCommittedMutations);
        if (t.noDocument) {
            var e = b.it(t.noDocument.path), n = this.qa(t.noDocument.readTime);
            return new gt(e, n, {
                hasCommittedMutations: !!t.hasCommittedMutations
            });
        }
        if (t.unknownDocument) {
            var r = b.it(t.unknownDocument.path), i = this.qa(t.unknownDocument.version);
            return new wt(r, i);
        }
        return Ee();
    }, 
    /** Encodes a document for storage locally. */ t.prototype.La = function(t, e) {
        var n = this.pa(e), r = t.key.path.L().j();
        if (t instanceof mt) {
            var i = this.Ba.bi(t), o = t.hasCommittedMutations;
            return new Un(
            /* unknownDocument= */ null, 
            /* noDocument= */ null, i, o, n, r);
        }
        if (t instanceof gt) {
            var s = t.key.path.j(), u = this.Ua(t.version), a = t.hasCommittedMutations;
            return new Un(
            /* unknownDocument= */ null, new Pn(s, u), 
            /* document= */ null, a, n, r);
        }
        if (t instanceof wt) {
            var h = t.key.path.j(), c = this.Ua(t.version);
            return new Un(new Cn(h, c), 
            /* noDocument= */ null, 
            /* document= */ null, 
            /* hasCommittedMutations= */ !0, n, r);
        }
        return Ee();
    }, t.prototype.pa = function(t) {
        var e = t.F();
        return [ e.seconds, e.nanoseconds ];
    }, t.prototype.Sa = function(t) {
        var e = new v(t[0], t[1]);
        return m.v(e);
    }, t.prototype.Ua = function(t) {
        var e = t.F();
        return new xn(e.seconds, e.nanoseconds);
    }, t.prototype.qa = function(t) {
        var e = new v(t.seconds, t.nanoseconds);
        return m.v(e);
    }, 
    /** Encodes a batch of mutations into a DbMutationBatch for local storage. */ t.prototype.$o = function(t, e) {
        var n = this, r = e.baseMutations.map((function(t) {
            return n.Ba.$i(t);
        })), i = e.mutations.map((function(t) {
            return n.Ba.$i(t);
        }));
        return new Vn(t, e.batchId, e.An.toMillis(), r, i);
    }, 
    /** Decodes a DbMutationBatch into a MutationBatch */ t.prototype.Oo = function(t) {
        var e = this, n = (t.baseMutations || []).map((function(t) {
            return e.Ba.xi(t);
        })), r = t.mutations.map((function(t) {
            return e.Ba.xi(t);
        })), i = v.fromMillis(t.localWriteTimeMs);
        return new ke(t.batchId, i, n, r);
    }, 
    /** Decodes a DbTarget into TargetData */ t.prototype.ca = function(t) {
        var e, n = this.qa(t.readTime), r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.qa(t.lastLimboFreeSnapshotVersion) : m.MIN;
        return e = void 0 !== t.query.documents ? this.Ba.Ki(t.query) : this.Ba.Ji(t.query), 
        new Ct(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, n, r, R.fromBase64String(t.resumeToken));
    }, 
    /** Encodes TargetData into a DbTarget for storage locally. */ t.prototype._a = function(t) {
        var e, n = this.Ua(t.ts), r = this.Ua(t.lastLimboFreeSnapshotVersion);
        e = t.target.Pe() ? this.Ba.ji(t.target) : this.Ba.Gi(t.target);
        // We can't store the resumeToken as a ByteString in IndexedDb, so we
        // convert it to a base64 string for storage.
        var i = t.resumeToken.toBase64();
        // lastListenSequenceNumber is always 0 until we do real GC.
                return new Mn(t.targetId, t.target.canonicalId(), n, i, t.sequenceNumber, r, e);
    }, t;
}(), Wn = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.", Hn = /** @class */ function(t) {
    function n(e, n) {
        var r = this;
        return (r = t.call(this) || this).jo = e, r.Qa = n, r;
    }
    return e.__extends(n, t), n;
}(Ce), Xn = /** @class */ function() {
    function t(e, n, r, i, o, s, u, a) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, 
        this.Nr = s, this.Wa = a, this.ja = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Ka = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.Ga = null, 
        /** The client metadata refresh task. */
        this.za = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.Ha = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.Ya = function(t) {
            return Promise.resolve();
        }, !t.ho()) throw new c(h.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        if (this.yo = new tr(this, o), this.Ja = n + t.Xa, this.serializer = new Zn(u), 
        this.document = i.document, this.Za = new vn(this.yo, this.serializer), this.ur = new Yn, 
        this.or = new _n(this.serializer, this.ur), !i.window || !i.window.localStorage) throw new c(h.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        this.window = i.window, this.tu = this.window.localStorage;
    }
    return t.co = function(t, e) {
        if (t instanceof Hn) return tn.co(t.jo, e);
        throw Ee();
    }, 
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    t.prototype.start = function() {
        var t = this;
        return tn.ro(this.Ja, Dn, new kn(this.serializer)).then((function(e) {
            return t.eu = e, t.su();
        })).then((function() {
            return t.iu(), t.nu(), t.ru(), t.eu.runTransaction("readonly", [ Fn.store ], (function(t) {
                return wn(t);
            }));
        })).then((function(e) {
            t.hu = new Me(e, t.Wa);
        })).then((function() {
            t.ja = !0;
        })).catch((function(e) {
            return t.eu && t.eu.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.ou = function(t) {
        var n = this;
        return this.Ya = function(r) {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    return this.Kh ? [ 2 /*return*/ , t(r) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.au = function(t) {
        var n = this;
        this.eu._o((function(r) {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return null === r.newVersion ? [ 4 /*yield*/ , t() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.uu = function(t) {
        var n = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Nr.Zr((function() {
            return e.__awaiter(n, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.Kh ? [ 4 /*yield*/ , this.su() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.su = function() {
        var t = this;
        return this.eu.runTransaction("readwrite", Kn, (function(e) {
            return $n(e).put(new zn(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.cu(e).next((function(e) {
                    e || (t.isPrimary = !1, t.Nr.Zr((function() {
                        return t.Ya(!1);
                    })));
                }));
            })).next((function() {
                return t._u(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.lu(e).next((function() {
                    return !1;
                })) : !!n && t.du(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (!t.allowTabSynchronization) throw e;
            return me("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t.Nr.Zr((function() {
                return t.Ya(e);
            })), t.isPrimary = e;
        }));
    }, t.prototype.cu = function(t) {
        var e = this;
        return Jn(t).get(Rn.key).next((function(t) {
            return Ve.resolve(e.fu(t));
        }));
    }, t.prototype.Tu = function(t) {
        return $n(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.Eu = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return !this.isPrimary || this.Iu(this.Ha, 18e5) ? [ 3 /*break*/ , 2 ] : (this.Ha = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e) {
                        var r = t.co(e, zn.store);
                        return r.Ro().next((function(t) {
                            var e = n.wu(t, 18e5), i = t.filter((function(t) {
                                return -1 === e.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return Ve.forEach(i, (function(t) {
                                return r.delete(t.clientId);
                            })).next((function() {
                                return i;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    e.sent().forEach((function(t) {
                        n.window.localStorage.removeItem(n.Ru(t.clientId));
                    })), e.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.ru = function() {
        var t = this;
        this.za = this.Nr.Wr("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.su().then((function() {
                return t.Eu();
            })).then((function() {
                return t.ru();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ t.prototype.fu = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype._u = function(t) {
        var e = this;
        return Jn(t).get(Rn.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            if (null !== n && e.Iu(n.leaseTimestampMs, 5e3) && !e.Au(n.ownerId)) {
                if (e.fu(n) && e.networkEnabled) return !0;
                if (!e.fu(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new c(h.FAILED_PRECONDITION, Wn);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || $n(t).Ro().next((function(t) {
                return void 0 === e.wu(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && me("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.mu = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.ja = !1, this.Pu(), this.za && (this.za.cancel(), this.za = null), this.Vu(), 
                    this.gu(), [ 4 /*yield*/ , this.eu.runTransaction("readwrite", [ Rn.store, zn.store ], (function(e) {
                        return t.lu(e).next((function() {
                            return t.Tu(e);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return e.sent(), this.eu.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.pu(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.wu = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.Iu(t.updateTimeMs, e) && !n.Au(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.yu = function() {
        var t = this;
        return this.eu.runTransaction("readonly", [ zn.store ], (function(e) {
            return $n(e).Ro().next((function(e) {
                return t.wu(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, t.clearPersistence = function(n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t.ho() ? (r = n + t.Xa, [ 4 /*yield*/ , tn.delete(r) ]) : [ 2 /*return*/ , Promise.resolve() ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, Object.defineProperty(t.prototype, "Kh", {
        get: function() {
            return this.ja;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.bu = function(t) {
        return hn.vo(t, this.serializer, this.ur, this.yo);
    }, t.prototype.vu = function() {
        return this.Za;
    }, t.prototype.Su = function() {
        return this.or;
    }, t.prototype.Du = function() {
        return this.ur;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        me("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.eu.runTransaction(o, Kn, (function(o) {
            return i = new Hn(o, r.hu.next()), "readwrite-primary" === e ? r.cu(o).next((function(t) {
                return !!t || r._u(o);
            })).next((function(e) {
                if (!e) throw ge("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r.Nr.Zr((function() {
                    return r.Ya(!1);
                })), new c(h.FAILED_PRECONDITION, Pe);
                return n(i);
            })).next((function(t) {
                return r.du(o).next((function() {
                    return t;
                }));
            })) : r.Cu(o).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.hr(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.Cu = function(t) {
        var e = this;
        return Jn(t).get(Rn.key).next((function(t) {
            if (null !== t && e.Iu(t.leaseTimestampMs, 5e3) && !e.Au(t.ownerId) && !e.fu(t) && !t.allowTabSynchronization) throw new c(h.FAILED_PRECONDITION, Wn);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.du = function(t) {
        var e = new Rn(this.clientId, this.allowTabSynchronization, Date.now());
        return Jn(t).put(Rn.key, e);
    }, t.ho = function() {
        return tn.ho();
    }, 
    /**
     * Generates a string used as a prefix when storing data in IndexedDB and
     * LocalStorage.
     */
    t.Fu = function(t) {
        // Use two different prefix formats:
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var e = t.ci.projectId;
        return t.ci.In || (e += "." + t.ci.database), "firestore/" + t.persistenceKey + "/" + e + "/";
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ t.prototype.lu = function(t) {
        var e = this, n = Jn(t);
        return n.get(Rn.key).next((function(t) {
            return e.fu(t) ? (me("IndexedDbPersistence", "Releasing primary lease."), n.delete(Rn.key)) : Ve.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ t.prototype.Iu = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (ge("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, t.prototype.iu = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Ga = function() {
            t.Nr.Zr((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.su();
            }));
        }, this.document.addEventListener("visibilitychange", this.Ga), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.Vu = function() {
        this.Ga && (this.document.removeEventListener("visibilitychange", this.Ga), this.Ga = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.nu = function() {
        var t = this;
        "function" == typeof this.window.addEventListener && (this.Ka = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            t.Pu(), t.Nr.Zr((function() {
                return t.mu();
            }));
        }, this.window.addEventListener("unload", this.Ka));
    }, t.prototype.gu = function() {
        this.Ka && (this.window.removeEventListener("unload", this.Ka), this.Ka = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.Au = function(t) {
        try {
            var e = null !== this.tu.getItem(this.Ru(t));
            return me("IndexedDbPersistence", "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), 
            e;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return ge("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.Pu = function() {
        try {
            this.tu.setItem(this.Ru(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            ge("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ t.prototype.pu = function() {
        try {
            this.tu.removeItem(this.Ru(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.Ru = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, t;
}();

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The name of the main (and currently only) IndexedDB database. this name is
 * appended to the prefix provided to the IndexedDbPersistence constructor.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function Jn(t) {
    return t.store(Rn.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function $n(t) {
    return t.store(zn.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ Xn.Xa = "main";

var tr = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.Nu = null, this.qh = new We(this, e);
    }
    return t.prototype.Yh = function(t) {
        var e = this.ku(t);
        return this.db.vu().la(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.ku = function(t) {
        var e = 0;
        return this.Xh(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.Xs = function(t, e) {
        return this.db.vu().Xs(t, e);
    }, t.prototype.Xh = function(t, e) {
        return this.$u(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.Mu = function(t) {
        this.Nu = t;
    }, t.prototype.vn = function(t, e) {
        return er(t, e);
    }, t.prototype.Dn = function(t, e) {
        return er(t, e);
    }, t.prototype.Zh = function(t, e, n) {
        return this.db.vu().Zh(t, e, n);
    }, t.prototype.Go = function(t, e) {
        return er(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Lu = function(t, e) {
        return this.Nu.Mn(e) ? Ve.resolve(!0) : function(t, e) {
            var n = !1;
            return dn(t).po((function(r) {
                return cn(t, r, e).next((function(t) {
                    return t && (n = !0), Ve.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.to = function(t, e) {
        var n = this, r = this.db.Su().Ca(), i = [], o = 0;
        return this.$u(t, (function(s, u) {
            if (u <= e) {
                var a = n.Lu(t, s).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.tr(t, s).next((function() {
                        return r.Zn(s), En(t).delete([ 0, He(s.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return Ve.Kn(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.es(t.Qa);
        return this.db.vu().oa(t, n);
    }, t.prototype.Ou = function(t, e) {
        return er(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.$u = function(t, e) {
        var n, r = En(t), i = Me.Fr;
        return r.Vo({
            index: jn.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== Me.Fr && e(new b($e(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = u, n = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = Me.Fr;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== Me.Fr && e(new b($e(n)), i);
        }));
    }, t.prototype.so = function(t) {
        return this.db.Su().ka(t);
    }, t;
}();

function er(t, e) {
    return En(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new jn(0, He(t.path), e);
    }(e, t.Qa));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Local storage in the Firestore client. Coordinates persistence components
 * like the mutation queue and remote document cache to present a
 * latency-compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine.
 * Writes from the client are put into a queue as provisional Mutations until
 * they are processed by the RemoteStore and confirmed as having been written
 * to the server.
 *
 * The local store provides the local version of documents that have been
 * modified locally. It maintains the constraint:
 *
 *   LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously
 * acknowledged or rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the
 * applyChangeBatch method. It will be some version of a server-provided
 * document OR will be a server-provided document PLUS acknowledged mutations:
 *
 *   RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a
 * server base version, since it has LocalMutations added to it pending getting
 * an authoritative copy from the server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to
 * revert a LocalMutation that has already been applied to the LocalDocument
 * (typically done by replaying all remaining LocalMutations to the
 * RemoteDocument to re-apply).
 *
 * The LocalStore is responsible for the garbage collection of the documents it
 * contains. For now, it every doc referenced by a view, the mutation queue, or
 * the RemoteStore.
 *
 * It also maintains the persistence of mapping queries to resume tokens and
 * target ids. It needs to know this data about queries to properly know what
 * docs it would be allowed to garbage collect.
 *
 * The LocalStore must be able to efficiently execute queries against its local
 * cache of the documents, to provide the initial set of results before any
 * remote changes have been received.
 *
 * Note: In TypeScript, most methods return Promises since the implementation
 * may rely on fetching data from IndexedDB which is async.
 * These Promises will only be rejected on an I/O error or other internal
 * (unexpected) failure (e.g. failed assert) and always represent an
 * unrecoverable error (should be caught / reported by the async_queue).
 */ var nr = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.xu = e, 
        /**
             * The set of document references maintained by any local views.
             */
        this.Bu = new Re, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.qu = new I(Ie), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Uu = new De((function(t) {
            return t.canonicalId();
        })), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.Qu = m.MIN, this.persistence.yo.Mu(this.Bu), this.ar = t.bu(n), this.Wu = t.Su(), 
        this.Za = t.vu(), this.ju = new Ue(this.Wu, this.ar, this.persistence.Du()), this.xu.Ku(this.ju)
        /** Starts the LocalStore. */;
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, 
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    t.prototype.Gu = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n = this.ar, r = this.ju, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(e) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var i;
                        return o.ar.Uo(e).next((function(s) {
                            return i = s, n = o.persistence.bu(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            r = new Ue(o.Wu, n, o.persistence.Du()), n.Uo(e);
                        })).next((function(t) {
                            for (var n = [], o = [], s = Zt(), u = 0, a = i
                            // Union the old/new changed keys.
                            ; u < a.length; u++) {
                                var h = a[u];
                                n.push(h.batchId);
                                for (var c = 0, f = h.mutations; c < f.length; c++) {
                                    var l = f[c];
                                    s = s.add(l.key);
                                }
                            }
                            for (var p = 0, d = t; p < d.length; p++) {
                                var y = d[p];
                                o.push(y.batchId);
                                for (var v = 0, m = y.mutations; v < m.length; v++) {
                                    var g = m[v];
                                    s = s.add(g.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return r.Tr(e, s).next((function(t) {
                                return {
                                    zu: t,
                                    Hu: n,
                                    Yu: o
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return i = e.sent(), [ 2 /*return*/ , (this.ar = n, this.ju = r, this.xu.Ku(this.ju), 
                    i) ];
                }
            }));
        }));
    }, 
    /* Accept locally generated Mutations and commit them to storage. */ t.prototype.Ju = function(t) {
        var e, n = this, r = v.now(), i = t.reduce((function(t, e) {
            return t.add(e.key);
        }), Zt());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(o) {
            return n.ju.Tr(o, i).next((function(i) {
                e = i;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = t; u < a.length; u++) {
                    var h = a[u], c = h.ee(e.get(h.key));
                    null != c && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new ct(h.key, c, c.se(), ut.exists(!0)));
                }
                return n.ar.ko(o, r, s, t);
            }));
        })).then((function(t) {
            var n = t.Pn(e);
            return {
                batchId: t.batchId,
                zn: n
            };
        }));
    }, 
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    t.prototype.Do = function(t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(n) {
            var r = t.batch.keys(), i = e.Wu.Ca({
                Na: !0
            });
            return e.ar.Do(n, t.batch, t.streamToken).next((function() {
                return e.Xu(n, t, i);
            })).next((function() {
                return i.apply(n);
            })).next((function() {
                return e.ar.zo(n);
            })).next((function() {
                return e.ju.Tr(n, r);
            }));
        }));
    }, 
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    t.prototype.Zu = function(t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(n) {
            var r;
            return e.ar.Lo(n, t).next((function(t) {
                return _e(null !== t), r = t.keys(), e.ar.Wo(n, t);
            })).next((function() {
                return e.ar.zo(n);
            })).next((function() {
                return e.ju.Tr(n, r);
            }));
        }));
    }, 
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    t.prototype.qo = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
            return t.ar.qo(e);
        }));
    }, 
    /** Returns the last recorded stream token for the current user. */ t.prototype.Fo = function() {
        var t = this;
        return this.persistence.runTransaction("Get last stream token", "readonly", (function(e) {
            return t.ar.Fo(e);
        }));
    }, 
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    t.prototype.No = function(t) {
        var e = this;
        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", (function(n) {
            return e.ar.No(n, t);
        }));
    }, 
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    t.prototype.ea = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
            return t.Za.ea(e);
        }));
    }, 
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    t.prototype.tc = function(e) {
        var n = this, r = e.ts, i = this.qu;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(o) {
            var s = n.Wu.Ca({
                Na: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        i = n.qu;
            var u = [];
            e.Ts.forEach((function(e, s) {
                var a = i.get(s);
                if (a) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    u.push(n.Za.Ta(o, e.gs, s).next((function() {
                        return n.Za.fa(o, e.Ps, s);
                    })));
                    var h = e.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (h.Ot() > 0) {
                        var c = a.ss(h, r).es(o.Qa);
                        i = i.nt(s, c), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.ec(a, c, e) && u.push(n.Za.oa(o, c));
                    }
                }
            }));
            var a = Ft(), h = Zt();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
                        if (e.Is.forEach((function(t, e) {
                h = h.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            u.push(s.getEntries(o, h).next((function(t) {
                e.Is.forEach((function(i, h) {
                    var c = t.get(i);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.MIN) never add documents to
                    // cache.
                                        h instanceof gt && h.version.isEqual(m.MIN) ? (
                    // NoDocuments with SnapshotVersion.MIN are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.Zn(i, r), a = a.nt(i, h)) : null == c || h.version.D(c.version) > 0 || 0 === h.version.D(c.version) && c.hasPendingWrites ? (s.Jn(h, r), 
                    a = a.nt(i, h)) : me("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", c.version, " Watch version:", h.version), 
                    e.ws.has(i) && u.push(n.persistence.yo.Ou(o, i));
                }));
            }))), !r.isEqual(m.MIN)) {
                var c = n.Za.ea(o).next((function(t) {
                    return n.Za.ia(o, o.Qa, r);
                }));
                u.push(c);
            }
            return Ve.Kn(u).next((function() {
                return s.apply(o);
            })).next((function() {
                return n.ju.Er(o, a);
            }));
        })).then((function(t) {
            return n.qu = i, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.ec = function(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return _e(e.resumeToken.Ot() > 0), 0 === t.resumeToken.Ot() || (e.ts.C() - t.ts.C() >= this.sc || n.Ps.size + n.Vs.size + n.gs.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, 
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    t.prototype.ic = function(t) {
        for (var e = this, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.targetId;
            if (this.Bu.Sn(i.pr, o), this.Bu.Fn(i.yr, o), !i.fromCache) {
                var s = this.qu.get(o), u = s.ts, a = s.ns(u);
                // Advance the last limbo free snapshot version
                                this.qu = this.qu.nt(o, a);
            }
        }
        return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(n) {
            return Ve.forEach(t, (function(t) {
                return Ve.forEach(t.yr, (function(t) {
                    return e.persistence.yo.Dn(n, t);
                }));
            }));
        }));
    }, 
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    t.prototype.nc = function(t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(n) {
            return void 0 === t && (t = -1), e.ar.Bo(n, t);
        }));
    }, 
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    t.prototype.rc = function(t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", (function(n) {
            return e.ju.cr(n, t);
        }));
    }, 
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    t.prototype.hc = function(t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(n) {
            var r;
            return e.Za.da(n, t).next((function(i) {
                return i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                r = i, Ve.resolve(r)) : e.Za.Xo(n).next((function(i) {
                    return r = new Ct(t, i, 0 /* Listen */ , n.Qa), e.Za.na(n, r).next((function() {
                        return r;
                    }));
                }));
            }));
        })).then((function(n) {
            return null === e.qu.get(n.targetId) && (e.qu = e.qu.nt(n.targetId, n), e.Uu.set(t, n.targetId)), 
            n;
        }));
    }, 
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    t.prototype.da = function(t, e) {
        var n = this.Uu.get(e);
        return void 0 !== n ? Ve.resolve(this.qu.get(n)) : this.Za.da(t, e);
    }, 
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    t.prototype.oc = function(t, e) {
        var n = this, r = this.qu.get(t), i = e ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", i, (function(i) {
            // References for documents sent via Watch are automatically removed
            // when we delete a target's data from the reference delegate.
            // Since this does not remove references for locally mutated documents,
            // we have to remove the target associations for these documents
            // manually.
            // This operation needs to be run inside the transaction since EagerGC
            // uses the local view references during the transaction's commit.
            // Fortunately, the operation is safe to be re-run in case the
            // transaction fails since there are no side effects if the target has
            // already been removed.
            var o = n.Bu.Nn(t);
            return e ? Ve.resolve() : Ve.forEach(o, (function(t) {
                return n.persistence.yo.Dn(i, t);
            })).next((function() {
                n.persistence.yo.removeTarget(i, r);
            }));
        })).then((function() {
            n.qu = n.qu.remove(t), n.Uu.delete(r.target);
        }));
    }, 
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    t.prototype.ac = function(t, e) {
        var n = this, r = m.MIN, i = Zt();
        return this.persistence.runTransaction("Execute query", "readonly", (function(o) {
            return n.da(o, t.xe()).next((function(t) {
                if (t) return r = t.lastLimboFreeSnapshotVersion, n.Za.Ea(o, t.targetId).next((function(t) {
                    i = t;
                }));
            })).next((function() {
                return n.xu.wr(o, t, e ? r : m.MIN, e ? i : Zt());
            })).next((function(t) {
                return {
                    documents: t,
                    uc: i
                };
            }));
        }));
    }, 
    /**
     * Returns the keys of the documents that are associated with the given
     * target id in the remote table.
     */
    t.prototype.cc = function(t) {
        var e = this;
        return this.persistence.runTransaction("Remote document keys", "readonly", (function(n) {
            return e.Za.Ea(n, t);
        }));
    }, t.prototype.Xu = function(t, e, n) {
        var r = this, i = e.batch, o = i.keys(), s = Ve.resolve();
        return o.forEach((function(r) {
            s = s.next((function() {
                return n.tr(t, r);
            })).next((function(t) {
                var o = t, s = e.gn.get(r);
                _e(null !== s), (!o || o.version.D(s) < 0) && ((o = i.qt(r, o, e)) && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.Jn(o, e.Vn));
            }));
        })), s.next((function() {
            return r.ar.Wo(t, i);
        }));
    }, t.prototype.Gh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.eo(n, e.qu);
        }));
    }, t;
}();

/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */ nr.sc = 3e8;

/**
 * An implementation of LocalStore that provides additional functionality
 * for MultiTabSyncEngine.
 */
// PORTING NOTE: Web only.
var rr = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).persistence = e, i.ar = e.bu(r), i.Wu = e.Su(), 
        i.Za = e.vu(), i;
    }
    /** Starts the LocalStore. */    return e.__extends(n, t), n.prototype.start = function() {
        return this._c();
    }, 
    /** Returns the local view of the documents affected by a mutation batch. */ n.prototype.lc = function(t) {
        var e = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly", (function(n) {
            return e.ar.xo(n, t).next((function(t) {
                return t ? e.ju.Tr(n, t) : Ve.resolve(null);
            }));
        }));
    }, n.prototype.dc = function(t) {
        this.ar.Ko(t);
    }, n.prototype.uu = function(t) {
        this.persistence.uu(t);
    }, n.prototype.yu = function() {
        return this.persistence.yu();
    }, n.prototype.fc = function(t) {
        var e = this, n = this.qu.get(t);
        return n ? Promise.resolve(n.target) : this.persistence.runTransaction("Get target data", "readonly", (function(n) {
            return e.Za.ui(n, t).next((function(t) {
                return t ? t.target : null;
            }));
        }));
    }, 
    /**
     * Returns the set of documents that have been updated since the last call.
     * If this is the first call, returns the set of changes since client
     * initialization. Further invocations will return document changes since
     * the point of rejection.
     */
    n.prototype.ba = function() {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly", (function(e) {
            return t.Wu.ba(e, t.Qu);
        })).then((function(e) {
            var n = e.va, r = e.readTime;
            return t.Qu = r, n;
        }));
    }, 
    /**
     * Reads the newest document change from persistence and forwards the internal
     * synchronization marker so that calls to `getNewDocumentChanges()`
     * only return changes that happened after client initialization.
     */
    n.prototype._c = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t = this, [ 4 /*yield*/ , this.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                        return n.Wu.Da(t);
                    })) ];

                  case 1:
                    return t.Qu = e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n;
}(nr);

/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function ir(t) {
    return e.__awaiter(this, void 0, void 0, (function() {
        return e.__generator(this, (function(e) {
            if (t.code !== h.FAILED_PRECONDITION || t.message !== Pe) throw t;
            return me("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */ function or(t, e) {
    if (0 !== e.length) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + br(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function sr(t, e, n) {
    if (e.length !== n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires " + br(n, "argument") + ", but was called with " + br(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function ur(t, e, n) {
    if (e.length < n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires at least " + br(n, "argument") + ", but was called with " + br(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function ar(t, e, n, r) {
    if (e.length < n || e.length > r) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + br(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function hr(t, e, n, r) {
    dr(t, e, _r(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function cr(t, e, n, r) {
    void 0 !== r && hr(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function fr(t, e, n, r) {
    dr(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function lr(t, e, n, r) {
    void 0 !== r && fr(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function pr(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(vr(a));
        }
        var f = vr(r);
        throw new c(h.INVALID_ARGUMENT, "Invalid value " + f + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Arugment to validate.
 */
/** Helper to validate the type of a provided input. */ function dr(t, e, n, r) {
    if (!("object" === e ? yr(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = vr(r);
        throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function yr(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function vr(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : Ee();
}

function mr(t, e, n) {
    if (void 0 === n) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + _r(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function gr(t, e, n) {
    k(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new c(h.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function wr(t, e, n, r) {
    var i = vr(r);
    return new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + _r(n) + " argument to be a " + e + ", but it was: " + i);
}

function Er(t, e, n) {
    if (n <= 0) throw new c(h.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + _r(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function _r(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function br(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */ function Ir(t, e) {
    function n() {
        var t = "This constructor is private.";
        throw e && (t += " ", t += e), new c(h.INVALID_ARGUMENT, t);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return n.prototype = t.prototype, 
    // Copy any static methods/members
    Object.assign(n, t), n
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Helper function to assert Uint8Array is available at runtime. */;
}

function Tr() {
    if ("undefined" == typeof Uint8Array) throw new c(h.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Nr() {
    if (!pe.Lt().Tc) throw new c(h.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var Ar = /** @class */ function() {
    function t(t) {
        Nr(), this.Ec = t;
    }
    return t.fromBase64String = function(e) {
        sr("Blob.fromBase64String", arguments, 1), hr("Blob.fromBase64String", "string", 1, e), 
        Nr();
        try {
            return new t(R.fromBase64String(e));
        } catch (e) {
            throw new c(h.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (sr("Blob.fromUint8Array", arguments, 1), Tr(), !(e instanceof Uint8Array)) throw wr("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(R.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return sr("Blob.toBase64", arguments, 0), Nr(), this.Ec.toBase64();
    }, t.prototype.toUint8Array = function() {
        return sr("Blob.toUint8Array", arguments, 0), Tr(), this.Ec.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.Ec.isEqual(t.Ec);
    }, t;
}(), Sr = Ir(Ar, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), Dr = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        !function(t, e, n, r) {
            if (!(e instanceof Array) || e.length < 1) throw new c(h.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + br(1, "element") + ".");
        }(0, t);
        for (var n = 0; n < t.length; ++n) if (hr("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new c(h.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.Ic = new _(t);
    }
    return t.documentId = function() {
        return t.wc;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw wr("isEqual", "FieldPath", 1, e);
        return this.Ic.isEqual(e.Ic);
    }, t;
}();

// Public instance that disallows construction at runtime. This constructor is
// used when exporting Blob on firebase.firestore.Blob and will be called Blob
// publicly. Internally we still use Blob which has a type checked private
// constructor. Note that Blob and PublicBlob can be used interchangeably in
// instanceof checks.
// For our internal TypeScript code PublicBlob doesn't exist as a type, and so
// we need to use Blob as type and export it too.
/**
 * Internal Note: The backend doesn't technically support querying by
 * document ID. Instead it queries by the entire document name (full path
 * included), but in the cases we currently support documentId(), the net
 * effect is the same.
 */
Dr.wc = new Dr(_.X().K());

/**
 * Matches any characters in a field path string that are reserved.
 */
var kr = new RegExp("[~\\*/\\[\\]]"), xr = /** @class */ function() {
    function t(t) {
        this.Rc = t;
    }
    return t.delete = function() {
        return or("FieldValue.delete", arguments), Rr.instance;
    }, t.serverTimestamp = function() {
        return or("FieldValue.serverTimestamp", arguments), Lr.instance;
    }, t.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return ur("FieldValue.arrayUnion", arguments, 1), new Vr(t);
    }, t.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return ur("FieldValue.arrayRemove", arguments, 1), new Or(t);
    }, t.increment = function(t) {
        return hr("FieldValue.increment", "number", 1, t), sr("FieldValue.increment", arguments, 1), 
        new Pr(t);
    }, t.prototype.isEqual = function(t) {
        return this === t;
    }, t;
}(), Rr = /** @class */ function(t) {
    function n() {
        return t.call(this, "FieldValue.delete") || this;
    }
    return e.__extends(n, t), n;
}(xr);

/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
/** Singleton instance. */ Rr.instance = new Rr;

var Lr = /** @class */ function(t) {
    function n() {
        return t.call(this, "FieldValue.serverTimestamp") || this;
    }
    return e.__extends(n, t), n;
}(xr);

/** Singleton instance. */ Lr.instance = new Lr;

var Vr = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.arrayUnion") || this).Ac = e, n;
    }
    return e.__extends(n, t), n;
}(xr), Or = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.arrayRemove") || this).Ac = e, n;
    }
    return e.__extends(n, t), n;
}(xr), Pr = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this, "FieldValue.increment") || this).mc = e, n;
    }
    return e.__extends(n, t), n;
}(xr), Cr = Ir(xr, "Use FieldValue.<field>() instead."), Ur = /** @class */ function() {
    function t(t, e) {
        if (sr("GeoPoint", arguments, 2), hr("GeoPoint", "number", 1, t), hr("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new c(h.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new c(h.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.Pc = t, this.Vc = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.Pc;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.Vc;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.Pc === t.Pc && this.Vc === t.Vc;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.p = function(t) {
        return Ie(this.Pc, t.Pc) || Ie(this.Vc, t.Vc);
    }, t;
}(), qr = /^__.*__$/, Mr = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.se = e, this.fieldTransforms = n;
    }
    return t.prototype.gc = function(t, e) {
        var n = [];
        return null !== this.se ? n.push(new ct(t, this.data, this.se, e)) : n.push(new ht(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new ft(t, this.fieldTransforms)), n;
    }, t;
}(), jr = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.se = e, this.fieldTransforms = n;
    }
    return t.prototype.gc = function(t, e) {
        var n = [ new ct(t, this.data, this.se, e) ];
        return this.fieldTransforms.length > 0 && n.push(new ft(t, this.fieldTransforms)), 
        n;
    }, t;
}();

function Fr(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw Ee();
    }
}

/** A "context" object passed around while parsing user data. */ var Gr = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param dataSource Indicates what kind of API method this data came from.
     * @param methodName The name of the method the user called to create this
     *     ParseContext.
     * @param path A path within the object being parsed. This could be an empty
     *     path (in which case the context represents the root of the data being
     *     parsed), or a nonempty path (indicating the context represents a nested
     *     location within the data).
     * @param arrayElement Whether or not this context corresponds to an element
     *     of an array.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.pc = t, this.methodName = e, this.path = n, this.yc = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.bc(), this.yc = void 0 !== r && r, this.fieldTransforms = i || [], 
        this.se = o || [];
    }
    return t.prototype.vc = function(e) {
        var n = null == this.path ? null : this.path.child(e), r = new t(this.pc, this.methodName, n, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.se);
        return r.Sc(e), r;
    }, t.prototype.Dc = function(e) {
        var n = null == this.path ? null : this.path.child(e), r = new t(this.pc, this.methodName, n, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.se);
        return r.bc(), r;
    }, t.prototype.Cc = function(e) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // null.
        return new t(this.pc, this.methodName, 
        /*path=*/ null, 
        /*arrayElement=*/ !0, this.fieldTransforms, this.se);
    }, t.prototype.Fc = function(t) {
        var e = null === this.path || this.path.q() ? "" : " (found in field " + this.path.toString() + ")";
        return new c(h.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.se.find((function(e) {
            return t.U(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.U(e.field);
        }));
    }, t.prototype.bc = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (null !== this.path) for (var t = 0; t < this.path.length; t++) this.Sc(this.path.get(t));
    }, t.prototype.Sc = function(t) {
        if (0 === t.length) throw this.Fc("Document fields must not be empty");
        if (Fr(this.pc) && qr.test(t)) throw this.Fc('Document fields cannot begin and end with "__"');
    }, t;
}(), Br = function(t, e) {
    this.ci = t, this.key = e;
}, zr = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.Nc = e
        /** Parse document data from a non-merge set() call. */;
    }
    return t.prototype.kc = function(t, e) {
        var n = new Gr(0 /* Set */ , t, _.H);
        Yr("Data must be an object, but it was:", n, e);
        var r = this.$c(e, n);
        return new Mr(new dt(r), 
        /* fieldMask= */ null, n.fieldTransforms);
    }, 
    /** Parse document data from a set() call with '{merge:true}'. */ t.prototype.Mc = function(t, e, n) {
        var r = new Gr(2 /* MergeSet */ , t, _.H);
        Yr("Data must be an object, but it was:", r, e);
        var i, o, s = this.$c(e, r);
        if (n) {
            for (var u = new A(_.k), a = 0, f = n; a < f.length; a++) {
                var l = f[a], p = void 0;
                if (l instanceof Dr) p = l.Ic; else {
                    if ("string" != typeof l) throw Ee();
                    p = Zr(t, l);
                }
                if (!r.contains(p)) throw new c(h.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
                u = u.add(p);
            }
            i = it.Kt(u), o = r.fieldTransforms.filter((function(t) {
                return i.zt(t.field);
            }));
        } else i = it.Gt(r.se), o = r.fieldTransforms;
        return new Mr(new dt(s), i, o);
    }, 
    /** Parse update data from an update() call. */ t.prototype.Lc = function(t, e) {
        var n = this, r = new Gr(1 /* Update */ , t, _.H);
        Yr("Data must be an object, but it was:", r, e);
        var i = new A(_.k), o = dt._e();
        k(e, (function(e, s) {
            var u = Zr(t, e), a = r.Dc(u);
            if ((s = n.Oc(s, a)) instanceof Rr) 
            // Add it to the field mask, but don't add anything to updateData.
            i = i.add(u); else {
                var h = n.xc(s, a);
                null != h && (i = i.add(u), o.set(u, h));
            }
        }));
        var s = it.Kt(i);
        return new jr(o.he(), s, r.fieldTransforms);
    }, 
    /** Parse update data from a list of field/value arguments. */ t.prototype.Bc = function(t, e, n, r) {
        var i = new Gr(1 /* Update */ , t, _.H), o = [ Qr(t, e) ], s = [ n ];
        if (r.length % 2 != 0) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var u = 0; u < r.length; u += 2) o.push(Qr(t, r[u])), s.push(r[u + 1]);
        for (var a = new A(_.k), f = dt._e(), l = 0; l < o.length; ++l) {
            var p = o[l], d = i.Dc(p), y = this.Oc(s[l], d);
            if (y instanceof Rr) 
            // Add it to the field mask, but don't add anything to updateData.
            a = a.add(p); else {
                var v = this.xc(y, d);
                null != v && (a = a.add(p), f.set(p, v));
            }
        }
        var m = it.Kt(a);
        return new jr(f.he(), m, i.fieldTransforms);
    }, 
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    t.prototype.qc = function(t, e, n) {
        void 0 === n && (n = !1);
        var r = new Gr(n ? 4 /* ArrayArgument */ : 3 /* Argument */ , t, _.H);
        return this.xc(e, r);
    }, 
    /** Sends data through this.preConverter, handling any thrown errors. */ t.prototype.Oc = function(t, e) {
        try {
            return this.Nc(t);
        } catch (t) {
            var n = Wr(t);
            throw e.Fc(n);
        }
    }, 
    /**
     * Internal helper for parsing user data.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */
    t.prototype.xc = function(t, e) {
        if (Kr(t = this.Oc(t, e))) return Yr("Unsupported field value:", e, t), this.$c(t, e);
        if (t instanceof xr) 
        // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.
        return this.Uc(t, e), null;
        if (
        // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        e.path && e.se.push(e.path), t instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (e.yc && 4 /* ArrayArgument */ !== e.pc) throw e.Fc("Nested arrays are not supported");
            return this.Qc(t, e);
        }
        return this.Wc(t, e);
    }, t.prototype.$c = function(t, e) {
        var n = this, r = {};
        return x(t) ? 
        // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        e.path && e.path.length > 0 && e.se.push(e.path) : k(t, (function(t, i) {
            var o = n.xc(i, e.vc(t));
            null != o && (r[t] = o);
        })), {
            mapValue: {
                fields: r
            }
        };
    }, t.prototype.Qc = function(t, e) {
        for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
            var s = o[i], u = this.xc(s, e.Cc(r));
            null == u && (
            // Just include nulls in the array for fields being replaced with a
            // sentinel.
            u = {
                nullValue: "NULL_VALUE"
            }), n.push(u), r++;
        }
        return {
            arrayValue: {
                values: n
            }
        };
    }, 
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    t.prototype.Uc = function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Fr(e.pc)) throw e.Fc(t.Rc + "() can only be used with update() and set()");
        if (null === e.path) throw e.Fc(t.Rc + "() is not currently supported inside arrays");
        if (t instanceof Rr) {
            if (2 /* MergeSet */ !== e.pc) throw 1 /* Update */ === e.pc ? e.Fc("FieldValue.delete() can only appear at the top level of your update data") : e.Fc("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
                        e.se.push(e.path);
        } else if (t instanceof Lr) e.fieldTransforms.push(new ot(e.path, $.instance)); else if (t instanceof Vr) {
            var n = this.jc(t.Rc, t.Ac), r = new tt(n);
            e.fieldTransforms.push(new ot(e.path, r));
        } else if (t instanceof Or) {
            var i = this.jc(t.Rc, t.Ac), o = new et(i);
            e.fieldTransforms.push(new ot(e.path, o));
        } else if (t instanceof Pr) {
            var s = this.qc("FieldValue.increment", t.mc), u = new nt(this.serializer, s);
            e.fieldTransforms.push(new ot(e.path, u));
        } else Ee();
    }, 
    /**
     * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
     *
     * @return The parsed value
     */
    t.prototype.Wc = function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return this.serializer.Ti(t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = v.fromDate(t);
            return {
                timestampValue: this.serializer.F(n)
            };
        }
        if (t instanceof v) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new v(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: this.serializer.F(r)
            };
        }
        if (t instanceof Ur) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Ar) return {
            bytesValue: this.serializer.Ei(t)
        };
        if (t instanceof Br) return {
            referenceValue: this.serializer.wi(t.key.path, t.ci)
        };
        throw e.Fc("Unsupported field value: " + vr(t));
    }, t.prototype.jc = function(t, e) {
        var n = this;
        return e.map((function(e, r) {
            // Although array transforms are used with writes, the actual elements
            // being unioned or removed are not considered writes since they cannot
            // contain any FieldValue sentinels, etc.
            var i = new Gr(3 /* Argument */ , t, _.H);
            return n.xc(e, i.Cc(r));
        }));
    }, t;
}();

/**
 * A placeholder object for DocumentReferences in this file, in order to
 * avoid a circular dependency. See the comments for `DataPreConverter` for
 * the full context.
 */
/**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */
function Kr(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof v || t instanceof Ur || t instanceof Ar || t instanceof Br || t instanceof xr);
}

function Yr(t, e, n) {
    if (!Kr(n) || !yr(n)) {
        var r = vr(n);
        throw "an object" === r ? e.Fc(t + " a custom object") : e.Fc(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Qr(t, e) {
    if (e instanceof Dr) return e.Ic;
    if ("string" == typeof e) return Zr(t, e);
    throw new c(h.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */ function Zr(t, n) {
    try {
        return function(t) {
            if (t.search(kr) >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (Dr.bind.apply(Dr, e.__spreadArrays([ void 0 ], t.split("."))));
            } catch (e) {
                throw new c(h.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(n).Ic;
    } catch (n) {
        var r = Wr(n);
        throw new c(h.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + r);
    }
}

/**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */ function Wr(t) {
    return t instanceof Error ? t.message : t.toString();
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ var Hr = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.Nr = t, this.Kc = n, this.Gc = r, this.zc = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.Hc = 0, this.Yc = null, this.stream = null, this.oh = new Fe(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.Jc = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.Xc = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.Zc();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Jc() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.t_ = function() {
        this.state = 0 /* Initial */ , this.oh.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.e_ = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.Xc() && null === this.Yc && (this.Yc = this.Nr.Wr(this.Kc, 6e4, (function() {
            return t.s_();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.i_ = function(t) {
        this.n_(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.s_ = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                return this.Xc() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.n_ = function() {
        this.Yc && (this.Yc.cancel(), this.Yc = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.n_(), this.oh.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Hc++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.oh.reset() : n && n.code === h.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    ge(n.toString()), ge("Using maximum backoff delay to prevent overloading the backend."), 
                    this.oh.qr()) : n && n.code === h.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.zc._(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.r_(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.h_(n) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.r_ = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.o_(this.Hc), n = this.Hc;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.zc.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Hc === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.a_(e);
        }), (function(n) {
            e((function() {
                var e = new c(h.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.u_(e);
            }));
        }));
    }, t.prototype.a_ = function(t) {
        var e = this, n = this.o_(this.Hc);
        this.stream = this.c_(t), this.stream.__((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.__();
            }));
        })), this.stream.h_((function(t) {
            n((function() {
                return e.u_(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.Zc = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.oh.Ur((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.u_ = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return me("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.o_ = function(t) {
        var e = this;
        return function(n) {
            e.Nr.Zr((function() {
                return e.Hc === t ? n() : (me("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Xr = /** @class */ function(t) {
    function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return e.__extends(n, t), n.prototype.c_ = function(t) {
        return this.Gc.l_("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.oh.reset();
        var e = this.serializer.Fi(t), n = this.serializer.ki(t);
        return this.listener.d_(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.f_ = function(t) {
        var e = {};
        e.database = this.serializer.pi, e.addTarget = this.serializer.xe(t);
        var n = this.serializer.en(t);
        n && (e.labels = n), this.i_(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.T_ = function(t) {
        var e = {};
        e.database = this.serializer.pi, e.removeTarget = t, this.i_(e);
    }, n;
}(Hr), Jr = /** @class */ function(t) {
    function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.E_ = !1, 
        /**
             * The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             *
             * PersistentWriteStream manages propagating this value from responses to the
             * next request.
             */
        s.lastStreamToken = R.xt, s;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "I_", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.E_;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.E_ = !1, t.prototype.start.call(this);
    }, n.prototype.r_ = function() {
        this.E_ && this.w_([]);
    }, n.prototype.c_ = function(t) {
        return this.Gc.l_("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        _e(!!t.streamToken), this.lastStreamToken = this.serializer.Ii(t.streamToken), this.E_) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.oh.reset();
            var e = this.serializer.Wi(t.writeResults, t.commitTime), n = this.serializer.fromVersion(t.commitTime);
            return this.listener.R_(n, e);
        }
        // The first response is always the handshake response
                return _e(!t.writeResults || 0 === t.writeResults.length), this.E_ = !0, 
        this.listener.A_();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.m_ = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.pi, this.i_(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.w_ = function(t) {
        var e = this, n = {
            streamToken: this.serializer.Ei(this.lastStreamToken),
            writes: t.map((function(t) {
                return e.serializer.$i(t);
            }))
        };
        this.i_(n);
    }, n;
}(Hr), $r = /** @class */ function() {
    function t(t, e, n, r) {
        this.Nr = t, this.Gc = e, this.credentials = n, this.serializer = r;
    }
    return t.prototype.P_ = function(t) {
        return new Jr(this.Nr, this.Gc, this.credentials, this.serializer, t);
    }, t.prototype.V_ = function(t) {
        return new Xr(this.Nr, this.Gc, this.credentials, this.serializer, t);
    }, t.prototype.commit = function(t) {
        var e = this, n = {
            database: this.serializer.pi,
            writes: t.map((function(t) {
                return e.serializer.$i(t);
            }))
        };
        return this.g_("Commit", n).then((function(t) {
            return e.serializer.Wi(t.writeResults, t.commitTime);
        }));
    }, t.prototype.p_ = function(t) {
        var e = this, n = {
            database: this.serializer.pi,
            documents: t.map((function(t) {
                return e.serializer.mi(t);
            }))
        };
        return this.y_("BatchGetDocuments", n).then((function(n) {
            var r = Ft();
            n.forEach((function(t) {
                var n = e.serializer.Ci(t);
                r = r.nt(n.key, n);
            }));
            var i = [];
            return t.forEach((function(t) {
                var e = r.get(t);
                _e(!!e), i.push(e);
            })), i;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC. */ t.prototype.g_ = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.Gc.g_(t, e, r);
        })).catch((function(t) {
            throw t.code === h.UNAUTHENTICATED && n.credentials._(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ t.prototype.y_ = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.Gc.y_(t, e, r);
        })).catch((function(t) {
            throw t.code === h.UNAUTHENTICATED && n.credentials._(), t;
        }));
    }, t;
}(), ti = /** @class */ function() {
    function t(t) {
        this.b_ = t, 
        // The version of each document that was read during this transaction.
        this.v_ = Yt(), this.mutations = [], this.S_ = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.D_ = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.C_ = new Set;
    }
    return t.prototype.p_ = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (this.F_(), this.mutations.length > 0) throw new c(h.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , this.b_.p_(t) ];

                  case 1:
                    return [ 2 /*return*/ , ((n = e.sent()).forEach((function(t) {
                        t instanceof gt || t instanceof mt ? r.N_(t) : Ee();
                    })), n) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.gc(t, this.Zt(t))), this.C_.add(t);
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.gc(t, this.k_(t)));
        } catch (t) {
            this.D_ = t;
        }
        this.C_.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new lt(t, this.Zt(t)) ]), this.C_.add(t);
    }, t.prototype.commit = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (this.F_(), this.D_) throw this.D_;
                    return t = this.v_, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t = t.remove(e.key);
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        n.mutations.push(new pt(t, n.Zt(t)));
                    })), [ 4 /*yield*/ , this.b_.commit(this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return e.sent(), this.S_ = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.N_ = function(t) {
        var e;
        if (t instanceof mt) e = t.version; else {
            if (!(t instanceof gt)) throw Ee();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = m.S();
        }
        var n = this.v_.get(t.key);
        if (null !== n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new c(h.ABORTED, "Document version changed between two reads.");
        } else this.v_ = this.v_.nt(t.key, e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Zt = function(t) {
        var e = this.v_.get(t);
        return !this.C_.has(t) && e ? ut.updateTime(e) : ut.NONE;
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.k_ = function(t) {
        var e = this.v_.get(t);
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.C_.has(t) && e) {
            if (e.isEqual(m.S())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new c(h.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return ut.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return ut.exists(!0);
    }, t.prototype.write = function(t) {
        this.F_(), this.mutations = this.mutations.concat(t);
    }, t.prototype.F_ = function() {}, t;
}(), ei = /** @class */ function() {
    function t(t, e) {
        this.jr = t, this.M_ = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.L_ = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.O_ = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.x_ = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.B_ = function() {
        var t = this;
        0 === this.L_ && (this.q_("Unknown" /* Unknown */), this.O_ = this.jr.Wr("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.O_ = null, t.U_("Backend didn't respond within 10 seconds."), t.q_("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Q_ = function(t) {
        "Online" /* Online */ === this.state ? this.q_("Unknown" /* Unknown */) : (this.L_++, 
        this.L_ >= 1 && (this.W_(), this.U_("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.q_("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.W_(), this.L_ = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.x_ = !1), this.q_(t);
    }, t.prototype.q_ = function(t) {
        t !== this.state && (this.state = t, this.M_(t));
    }, t.prototype.U_ = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.x_ ? (ge(e), this.x_ = !1) : me("OnlineStateTracker", e);
    }, t.prototype.W_ = function() {
        null !== this.O_ && (this.O_.cancel(), this.O_ = null);
    }, t;
}(), ni = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    n, r, i, o) {
        var s = this;
        this.j_ = t, this.b_ = n, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.K_ = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.G_ = new Map, this.z_ = null, 
        /**
             * Set to true by enableNetwork() and false by disableNetwork() and indicates
             * the user-preferred network state.
             */
        this.networkEnabled = !1, this.isPrimary = !1, this.H_ = o, this.H_.Y_((function(t) {
            r.Zr((function() {
                return e.__awaiter(s, void 0, void 0, (function() {
                    return e.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.J_() ? (me("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.X_() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.Z_ = new ei(r, i), 
        // Create streams (but note they're not started yet).
        this.tl = this.b_.V_({
            __: this.el.bind(this),
            h_: this.sl.bind(this),
            d_: this.il.bind(this)
        }), this.nl = this.b_.P_({
            __: this.rl.bind(this),
            h_: this.hl.bind(this),
            A_: this.ol.bind(this),
            R_: this.R_.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.networkEnabled = !0, this.J_() ? (t = this.nl, [ 4 /*yield*/ , this.j_.Fo() ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return t.lastStreamToken = e.sent(), this.al() ? this.ul() : this.Z_.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.cl() ];

                  case 2:
                    // This will start the write stream if necessary.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this._l() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.Z_.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype._l = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.nl.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.tl.stop() ];

                  case 2:
                    return t.sent(), this.K_.length > 0 && (me("RemoteStore", "Stopping write stream with " + this.K_.length + " pending writes"), 
                    this.K_ = []), this.ll(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.mu = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return me("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, 
                    [ 4 /*yield*/ , this._l() ];

                  case 1:
                    return t.sent(), this.H_.mu(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.Z_.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.G_.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.G_.set(t.targetId, t), this.al() ? 
        // The listen will be sent in onWatchStreamOpen
        this.ul() : this.tl.Xc() && this.dl(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.fl = function(t) {
        this.G_.delete(t), this.tl.Xc() && this.Tl(t), 0 === this.G_.size && (this.tl.Xc() ? this.tl.e_() : this.J_() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.Z_.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.ui = function(t) {
        return this.G_.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.ai = function(t) {
        return this.El.ai(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.dl = function(t) {
        this.z_.Bs(t.targetId), this.tl.f_(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.Tl = function(t) {
        this.z_.Bs(t), this.tl.T_(t);
    }, t.prototype.ul = function() {
        this.z_ = new se(this), this.tl.start(), this.Z_.B_();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.al = function() {
        return this.J_() && !this.tl.Jc() && this.G_.size > 0;
    }, t.prototype.J_ = function() {
        return this.isPrimary && this.networkEnabled;
    }, t.prototype.ll = function() {
        this.z_ = null;
    }, t.prototype.el = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t = this;
            return e.__generator(this, (function(e) {
                return this.G_.forEach((function(e, n) {
                    t.dl(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.sl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                return this.ll(), 
                // If we still need the watch stream, retry the connection.
                this.al() ? (this.Z_.Q_(t), this.ul()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.Z_.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.il = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Mark the client as online since we got a message from the server
                    return this.Z_.set("Online" /* Online */), t instanceof ie && 2 /* Removed */ === t.state && t.cause ? [ 2 /*return*/ , this.Il(t) ] : (t instanceof ne ? this.z_.zs(t) : t instanceof re ? this.z_.si(t) : this.z_.Js(t), 
                    n.isEqual(m.MIN) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.j_.ea() ]);

                  case 1:
                    return r = e.sent(), n.D(r) >= 0 ? [ 4 /*yield*/ , this.wl(n) ] : [ 3 /*break*/ , 3 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                                      case 2:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                    e.sent(), e.label = 3;

                  case 3:
                    e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.wl = function(t) {
        var e = this, n = this.z_.ri(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.Ts.forEach((function(n, r) {
            if (n.resumeToken.Ot() > 0) {
                var i = e.G_.get(r);
                // A watched target might have been removed already.
                                i && e.G_.set(r, i.ss(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.Es.forEach((function(t) {
            var n = e.G_.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.G_.set(t, n.ss(R.xt, n.ts)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.Tl(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new Ct(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.dl(r);
            }
        })), this.El.tc(n);
    }, 
    /** Handles an error on a target */ t.prototype.Il = function(t) {
        var n = this, r = t.cause, i = Promise.resolve();
        return t.targetIds.forEach((function(t) {
            i = i.then((function() {
                return e.__awaiter(n, void 0, void 0, (function() {
                    return e.__generator(this, (function(e) {
                        // A watched target might have been removed already.
                        return this.G_.has(t) ? [ 2 /*return*/ , (this.G_.delete(t), this.z_.removeTarget(t), 
                        this.El.Rl(t, r)) ] : [ 2 /*return*/ ];
                    }));
                }));
            }));
        })), i;
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.cl = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Al() ? (t = this.K_.length > 0 ? this.K_[this.K_.length - 1].batchId : -1, 
                    [ 4 /*yield*/ , this.j_.nc(t) ]) : [ 3 /*break*/ , 5 ];

                  case 1:
                    return null !== (n = e.sent()) ? [ 3 /*break*/ , 2 ] : (0 === this.K_.length && this.nl.e_(), 
                    [ 3 /*break*/ , 4 ]);

                  case 2:
                    return this.ml(n), [ 4 /*yield*/ , this.cl() ];

                  case 3:
                    e.sent(), e.label = 4;

                  case 4:
                    e.label = 5;

                  case 5:
                    return this.Pl() && this.Vl(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.Al = function() {
        return this.J_() && this.K_.length < 10;
    }, 
    // For testing
    t.prototype.gl = function() {
        return this.K_.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.ml = function(t) {
        this.K_.push(t), this.nl.Xc() && this.nl.I_ && this.nl.w_(t.mutations);
    }, t.prototype.Pl = function() {
        return this.J_() && !this.nl.Jc() && this.K_.length > 0;
    }, t.prototype.Vl = function() {
        this.nl.start();
    }, t.prototype.rl = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                return this.nl.m_(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.ol = function() {
        var t = this;
        // Record the stream token.
                return this.j_.No(this.nl.lastStreamToken).then((function() {
            // Send the write pipeline now that the stream is established.
            for (var e = 0, n = t.K_; e < n.length; e++) {
                var r = n[e];
                t.nl.w_(r.mutations);
            }
        })).catch(ir);
    }, t.prototype.R_ = function(t, e) {
        var n = this, r = this.K_.shift(), i = xe.from(r, t, e, this.nl.lastStreamToken);
        return this.El.pl(i).then((function() {
            return n.cl();
        }));
    }, t.prototype.hl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(e) {
                // If the write stream closed due to an error, invoke the error callbacks if
                // there are pending writes.
                return t && this.K_.length > 0 ? [ 2 /*return*/ , (n = this.nl.I_ ? this.yl(t) : this.bl(t), 
                n.then((function() {
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    r.Pl() && r.Vl();
                }))) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.bl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                // Reset the token if it's a permanent error, signaling the write stream is
                // no longer valid. Note that the handshake does not count as a write: see
                // comments on isPermanentWriteError for details.
                return qt(t.code) ? [ 2 /*return*/ , (me("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.nl.lastStreamToken), 
                this.nl.lastStreamToken = R.xt, this.j_.No(R.xt).catch(ir)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.yl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i = this;
            return e.__generator(this, (function(e) {
                // Only handle permanent errors here. If it's transient, just let the retry
                // logic kick in.
                return qt(r = t.code) && r !== h.ABORTED ? (n = this.K_.shift(), [ 2 /*return*/ , (this.nl.t_(), 
                this.El.vl(n.batchId, t).then((function() {
                    return i.cl();
                }))) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Sl = function() {
        return new ti(this.b_);
    }, t.prototype.X_ = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this._l() ];

                  case 1:
                    return t.sent(), this.Z_.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.enableNetwork() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Dl = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.J_() ? (
                    // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                    // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                    // (since mutations are per-user).
                    me("RemoteStore", "RemoteStore restarting streams for new credential"), [ 4 /*yield*/ , this.X_() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.Cl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.isPrimary = t, t && this.networkEnabled ? [ 4 /*yield*/ , this.enableNetwork() ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    return e.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (n = t) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this._l() ];

                  case 3:
                    e.sent(), n = this.Z_.set("Unknown" /* Unknown */), e.label = 4;

                  case 4:
                    n, e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}();

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function ri(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function ii(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.t() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function oi(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var si = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fl = function(e, n, r) {
        var i = JSON.parse(r), o = "object" == typeof i && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), s = void 0;
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new c(i.error.code, i.error.message))), 
        o ? new t(e, n, i.state, s) : (ge("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.Nl = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), ui = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fl = function(e, n) {
        var r = JSON.parse(n), i = "object" == typeof r && -1 !== [ "not-current", "current", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), o = void 0;
        return i && r.error && ((i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new c(r.error.code, r.error.message))), 
        i ? new t(e, r.state, o) : (ge("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.Nl = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), ai = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fl = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Ht(), s = 0; i && s < r.activeTargetIds.length; ++s) i = O(r.activeTargetIds[s]), 
        o = o.add(r.activeTargetIds[s]);
        return i ? new t(e, o) : (ge("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), hi = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.Fl = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (ge("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), ci = /** @class */ function() {
    function t() {
        this.activeTargetIds = Ht();
    }
    return t.prototype.kl = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.$l = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Nl = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.j(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), fi = /** @class */ function() {
    function t(e, n, r, i, o) {
        if (this.Nr = e, this.platform = n, this.persistenceKey = r, this.Ml = i, this.El = null, 
        this.M_ = null, this.vr = null, this.Ll = this.Ol.bind(this), this.xl = new I(Ie), 
        this.Kh = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Bl = [], !t.ho(this.platform)) throw new c(h.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
                var s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.platform.window.localStorage, this.currentUser = o, this.ql = ri(this.persistenceKey, this.Ml), 
        this.Ul = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.xl = this.xl.nt(this.Ml, new ci), this.Ql = new RegExp("^firestore_clients_" + s + "_([^_]*)$"), 
        this.Wl = new RegExp("^firestore_mutations_" + s + "_(\\d+)(?:_(.*))?$"), this.jl = new RegExp("^firestore_targets_" + s + "_(\\d+)$"), 
        this.Kl = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.platform.window.addEventListener("storage", this.Ll);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.ho = function(t) {
        return !(!t.window || null == t.window.localStorage);
    }, t.prototype.start = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n, r, i, o, s, u, a, h, c, f, l = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.El.yu() ];

                  case 1:
                    for (t = e.sent(), n = 0, r = t; n < r.length; n++) (i = r[n]) !== this.Ml && (o = this.getItem(ri(this.persistenceKey, i))) && (s = ai.Fl(i, o)) && (this.xl = this.xl.nt(s.clientId, s));
                    for (this.Gl(), (u = this.storage.getItem(this.Kl)) && (a = this.zl(u)) && this.Hl(a), 
                    h = 0, c = this.Bl; h < c.length; h++) f = c[h], this.Ol(f);
                    return this.Bl = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.platform.window.addEventListener("unload", (function() {
                        return l.mu();
                    })), this.Kh = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Cr = function(t) {
        this.setItem(this.Ul, JSON.stringify(t));
    }, t.prototype.Yl = function() {
        return this.Jl(this.xl);
    }, t.prototype.Xl = function(t) {
        var e = !1;
        return this.xl.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, t.prototype.Zl = function(t) {
        this.td(t, "pending");
    }, t.prototype.ed = function(t, e, n) {
        this.td(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.sd(t);
    }, t.prototype.nd = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Xl(t)) {
            var n = this.storage.getItem(oi(this.persistenceKey, t));
            if (n) {
                var r = ui.Fl(t, n);
                r && (e = r.state);
            }
        }
        return this.rd.kl(t), this.Gl(), e;
    }, t.prototype.hd = function(t) {
        this.rd.$l(t), this.Gl();
    }, t.prototype.od = function(t) {
        return this.rd.activeTargetIds.has(t);
    }, t.prototype.ad = function(t) {
        this.removeItem(oi(this.persistenceKey, t));
    }, t.prototype.ud = function(t, e, n) {
        this._d(t, e, n);
    }, t.prototype.Gu = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.sd(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.Zl(t);
        }));
    }, t.prototype.ld = function(t) {
        this.dd(t);
    }, t.prototype.mu = function() {
        this.Kh && (this.platform.window.removeEventListener("storage", this.Ll), this.removeItem(this.ql), 
        this.Kh = !1);
    }, t.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return me("SharedClientState", "READ", t, e), e;
    }, t.prototype.setItem = function(t, e) {
        me("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, t.prototype.removeItem = function(t) {
        me("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.Ol = function(t) {
        var n = this;
        if (t.storageArea === this.storage) {
            if (me("SharedClientState", "EVENT", t.key, t.newValue), t.key === this.ql) return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Nr.Ih((function() {
                return e.__awaiter(n, void 0, void 0, (function() {
                    var n, r, i, o, s, u;
                    return e.__generator(this, (function(e) {
                        if (this.Kh) {
                            if (null !== t.key) if (this.Ql.test(t.key)) {
                                if (null == t.newValue) return n = this.fd(t.key), [ 2 /*return*/ , this.Td(n, null) ];
                                if (r = this.Ed(t.key, t.newValue)) return [ 2 /*return*/ , this.Td(r.clientId, r) ];
                            } else if (this.Wl.test(t.key)) {
                                if (null !== t.newValue && (i = this.Id(t.key, t.newValue))) return [ 2 /*return*/ , this.wd(i) ];
                            } else if (this.jl.test(t.key)) {
                                if (null !== t.newValue && (o = this.Rd(t.key, t.newValue))) return [ 2 /*return*/ , this.Ad(o) ];
                            } else if (t.key === this.Kl) {
                                if (null !== t.newValue && (s = this.zl(t.newValue))) return [ 2 /*return*/ , this.Hl(s) ];
                            } else t.key === this.Ul && (u = function(t) {
                                var e = Me.Fr;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    _e("number" == typeof n), e = n;
                                } catch (t) {
                                    ge("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(t.newValue)) !== Me.Fr && this.vr(u);
                        } else this.Bl.push(t);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "rd", {
        get: function() {
            return this.xl.get(this.Ml);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Gl = function() {
        this.setItem(this.ql, this.rd.Nl());
    }, t.prototype.td = function(t, e, n) {
        var r = new si(this.currentUser, t, e, n), i = ii(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.Nl());
    }, t.prototype.sd = function(t) {
        var e = ii(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, t.prototype.dd = function(t) {
        var e = {
            clientId: this.Ml,
            onlineState: t
        };
        this.storage.setItem(this.Kl, JSON.stringify(e));
    }, t.prototype._d = function(t, e, n) {
        var r = oi(this.persistenceKey, t), i = new ui(t, e, n);
        this.setItem(r, i.Nl());
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.fd = function(t) {
        var e = this.Ql.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.Ed = function(t, e) {
        var n = this.fd(t);
        return ai.Fl(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Id = function(t, e) {
        var n = this.Wl.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return si.Fl(new a(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Rd = function(t, e) {
        var n = this.jl.exec(t), r = Number(n[1]);
        return ui.Fl(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.zl = function(t) {
        return hi.Fl(t);
    }, t.prototype.wd = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            return e.__generator(this, (function(e) {
                return t.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this.El.md(t.batchId, t.state, t.error) ] : (me("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, t.prototype.Ad = function(t) {
        return this.El.Pd(t.targetId, t.state, t.error);
    }, t.prototype.Td = function(t, e) {
        var n = this, r = e ? this.xl.nt(t, e) : this.xl.remove(t), i = this.Jl(this.xl), o = this.Jl(r), s = [], u = [];
        return o.forEach((function(t) {
            i.has(t) || s.push(t);
        })), i.forEach((function(t) {
            o.has(t) || u.push(t);
        })), this.El.Vd(s, u).then((function() {
            n.xl = r;
        }));
    }, t.prototype.Hl = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.xl.get(t.clientId) && this.M_(t.onlineState);
    }, t.prototype.Jl = function(t) {
        var e = Ht();
        return t.forEach((function(t, n) {
            e = e.kt(n.activeTargetIds);
        })), e;
    }, t;
}(), li = /** @class */ function() {
    function t() {
        this.gd = new ci, this.pd = {}, this.El = null, this.M_ = null, this.vr = null;
    }
    return t.prototype.Zl = function(t) {
        // No op.
    }, t.prototype.ed = function(t, e, n) {
        // No op.
    }, t.prototype.nd = function(t) {
        return this.gd.kl(t), this.pd[t] || "not-current";
    }, t.prototype.ud = function(t, e, n) {
        this.pd[t] = e;
    }, t.prototype.hd = function(t) {
        this.gd.$l(t);
    }, t.prototype.od = function(t) {
        return this.gd.activeTargetIds.has(t);
    }, t.prototype.ad = function(t) {
        delete this.pd[t];
    }, t.prototype.Yl = function() {
        return this.gd.activeTargetIds;
    }, t.prototype.Xl = function(t) {
        return this.gd.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.gd = new ci, Promise.resolve();
    }, t.prototype.Gu = function(t, e, n) {
        // No op.
    }, t.prototype.ld = function(t) {
        // No op.
    }, t.prototype.mu = function() {}, t.prototype.Cr = function(t) {}, t;
}(), pi = function(t) {
    this.key = t;
}, di = function(t) {
    this.key = t;
}, yi = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.yd = e, this.bd = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.ms = !1, 
        /** Documents in the view but not in the remote target */
        this.vd = Zt(), 
        /** Document Keys that have local changes */
        this._s = Zt(), this.Sd = new Xt(t.Be.bind(t));
    }
    return Object.defineProperty(t.prototype, "Dd", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.yd;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.Cd = function(t, e) {
        var n = this, r = e ? e.Fd : new Jt, i = e ? e.Sd : this.Sd, o = e ? e._s : this._s, s = i, u = !1, a = this.query.je() && i.size === this.query.limit ? i.last() : null, h = this.query.Ke() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ut((function(t, e) {
            var c = i.get(t), f = e instanceof mt ? e : null;
            f && (f = n.query.matches(f) ? f : null);
            var l = !!c && n._s.has(c.key), p = !!f && (f.te || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n._s.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            c && f ? c.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.Nd(c, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.query.Be(f, a) > 0 || h && n.query.Be(f, h) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !c && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : c && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: c
            }), d = !0, (a || h) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.je() || this.query.Ke()) for (;s.size > this.query.limit; ) {
            var c = this.query.je() ? s.last() : s.first();
            s = s.delete(c.key), o = o.delete(c.key), r.track({
                type: 1 /* Removed */ ,
                doc: c
            });
        }
        return {
            Sd: s,
            Fd: r,
            kd: u,
            _s: o
        };
    }, t.prototype.Nd = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.te && e.hasCommittedMutations && !e.te;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.ir = function(t, e, n) {
        var r = this, i = this.Sd;
        this.Sd = t.Sd, this._s = t._s;
        // Sort changes based on type and query comparator
        var o = t.Fd.us();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return Ee();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.query.Be(t.doc, e.doc);
        })), this.$d(n);
        var s = e ? this.Md() : [], u = 0 === this.vd.size && this.ms ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.bd;
        return this.bd = u, 0 !== o.length || a ? {
            snapshot: new $t(this.query, t.Sd, i, o, t._s, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            Ld: s
        } : {
            Ld: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Od = function(t) {
        return this.ms && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.ms = !1, this.ir({
            Sd: this.Sd,
            Fd: new Jt,
            _s: this._s,
            kd: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Ld: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.xd = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.yd.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.Sd.has(t) && !this.Sd.get(t).te;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.$d = function(t) {
        var e = this;
        t && (t.Ps.forEach((function(t) {
            return e.yd = e.yd.add(t);
        })), t.Vs.forEach((function(t) {})), t.gs.forEach((function(t) {
            return e.yd = e.yd.delete(t);
        })), this.ms = t.ms);
    }, t.prototype.Md = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.ms) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.vd;
        this.vd = Zt(), this.Sd.forEach((function(e) {
            t.xd(e.key) && (t.vd = t.vd.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.vd.has(e) || n.push(new di(e));
        })), this.vd.forEach((function(t) {
            e.has(t) || n.push(new pi(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Bd = function(t) {
        this.yd = t.uc, this.vd = Zt();
        var e = this.Cd(t.documents);
        return this.ir(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.qd = function() {
        return $t.fs(this.query, this.Sd, this._s, 0 /* Local */ === this.bd);
    }, t;
}(), vi = /** @class */ function() {
    function t(t, e, n, r) {
        this.jr = t, this.Ud = e, this.updateFunction = n, this.zr = r, this.Qd = 5, this.oh = new Fe(this.jr, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.Wd = function() {
        this.jd();
    }, t.prototype.jd = function() {
        var t = this;
        this.oh.Ur((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                var t, n, r = this;
                return e.__generator(this, (function(e) {
                    return t = this.Ud.Sl(), (n = this.Kd(t)) && n.then((function(e) {
                        r.jr.Zr((function() {
                            return t.commit().then((function() {
                                r.zr.resolve(e);
                            })).catch((function(t) {
                                r.Gd(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.Gd(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.Kd = function(t) {
        try {
            var e = this.updateFunction(t);
            return !L(e) && e.catch && e.then ? e : (this.zr.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.zr.reject(t), null;
        }
    }, t.prototype.Gd = function(t) {
        var e = this;
        this.Qd > 0 && this.zd(t) ? (this.Qd -= 1, this.jr.Zr((function() {
            return e.jd(), Promise.resolve();
        }))) : this.zr.reject(t);
    }, t.prototype.zd = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !qt(e);
        }
        return !1;
    }, t;
}(), mi = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, gi = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Hd = !1;
}, wi = /** @class */ function() {
    function t(t, e, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    n, r, i) {
        this.j_ = t, this.Ud = e, this.Yd = n, this.currentUser = r, this.Jd = i, this.Xd = null, 
        this.Zd = new De((function(t) {
            return t.canonicalId();
        })), this.tf = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.ef = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.sf = new I(b.k), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.if = new Map, this.nf = new Re, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.rf = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.hf = new Map, this.af = yn.Jo(), this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "uf", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */ t.prototype.subscribe = function(t) {
        this.Xd = t;
    }, 
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the targetId of the query.
     */
    t.prototype.listen = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.cf("listen()"), (i = this.Zd.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    n = i.targetId, this.Yd.nd(n), r = i.view.qd(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.j_.hc(t.xe()) ];

                  case 2:
                    return o = e.sent(), s = this.Yd.nd(o.targetId), n = o.targetId, [ 4 /*yield*/ , this._f(t, n, "current" === s) ];

                  case 3:
                    r = e.sent(), this.uf && this.Ud.listen(o), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ , (this.Xd.d_([ r ]), n) ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype._f = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a, h;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.j_.ac(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return i = e.sent(), o = new yi(t, i.uc), s = o.Cd(i.documents), u = ee.As(n, r && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.ir(s, 
                    /* updateLimboDocuments= */ this.uf, u), this.lf(n, a.Ld), h = new mi(t, n, o), 
                    [ 2 /*return*/ , (this.Zd.set(t, h), this.tf.has(n) ? this.tf.get(n).push(t) : this.tf.set(n, [ t ]), 
                    a.snapshot) ];
                }
            }));
        }));
    }, 
    /** Stops listening to the query. */ t.prototype.fl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this.cf("unlisten()"), n = this.Zd.get(t), (r = this.tf.get(n.targetId)).length > 1 ? [ 2 /*return*/ , (this.tf.set(n.targetId, r.filter((function(e) {
                        return !e.isEqual(t);
                    }))), void this.Zd.delete(t)) ] : this.uf ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.Yd.hd(n.targetId), this.Yd.Xl(n.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.j_.oc(n.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        i.Yd.ad(n.targetId), i.Ud.fl(n.targetId), i.df(n.targetId);
                    })).catch(ir) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.df(n.targetId), [ 4 /*yield*/ , this.j_.oc(n.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    e.sent(), e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    t.prototype.write = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.cf("write()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.j_.Ju(t) ];

                  case 2:
                    return r = e.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if ("IndexedDbTransactionError" === (i = e.sent()).name) 
                    // If we can't persist the mutation, we reject the user callback and
                    // don't send the mutation. The user can then retry the write.
                    return [ 2 /*return*/ , (ge("SyncEngine", "Dropping write that cannot be persisted: " + i), 
                    void n.reject(new c(h.UNAVAILABLE, "Failed to persist write: " + i))) ];
                    throw i;

                  case 4:
                    return this.Yd.Zl(r.batchId), this.ff(r.batchId, n), [ 4 /*yield*/ , this.Tf(r.zn) ];

                  case 5:
                    return e.sent(), [ 4 /*yield*/ , this.Ud.cl() ];

                  case 6:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    t.prototype.runTransaction = function(t, e, n) {
        new vi(t, this.Ud, e, n).Wd();
    }, t.prototype.tc = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.cf("applyRemoteEvent()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.j_.tc(t) ];

                  case 2:
                    return n = e.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.Ts.forEach((function(t, e) {
                        var n = r.if.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        _e(t.Ps.size + t.Vs.size + t.gs.size <= 1), t.Ps.size > 0 ? n.Hd = !0 : t.Vs.size > 0 ? _e(n.Hd) : t.gs.size > 0 && (_e(n.Hd), 
                        n.Hd = !1));
                    })), [ 4 /*yield*/ , this.Tf(n, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , ir(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    t.prototype.Od = function(t, e) {
        this.cf("applyOnlineStateChange()");
        var n = [];
        this.Zd.forEach((function(e, r) {
            var i = r.view.Od(t);
            i.snapshot && n.push(i.snapshot);
        })), this.Xd.Ef(t), this.Xd.d_(n), this.onlineState = t;
    }, t.prototype.Rl = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s, u, a = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.cf("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.Yd.ud(t, "rejected", n), r = this.if.get(t), (i = r && r.key) ? (
                    // Since this query failed, we won't want to manually unlisten to it.
                    // So go ahead and remove it from bookkeeping.
                    this.sf = this.sf.remove(i), this.if.delete(t), this.If(), o = (o = new I(b.k)).nt(i, new gt(i, m.S())), 
                    s = Zt().add(i), u = new te(m.MIN, 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new A(Ie), o, s), [ 2 /*return*/ , this.tc(u) ]) : [ 4 /*yield*/ , this.j_.oc(t, /* keepPersistedTargetData */ !1).then((function() {
                        return a.df(t, n);
                    })).catch(ir) ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.pl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.cf("applySuccessfulWrite()"), n = t.batch.batchId, 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this.wf(n, /*error=*/ null), this.Rf(n), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.j_.Do(t) ];

                  case 2:
                    return r = e.sent(), this.Yd.ed(n, "acknowledged"), [ 4 /*yield*/ , this.Tf(r) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , ir(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.vl = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.cf("rejectFailedWrite()"), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this.wf(t, n), this.Rf(t), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.j_.Zu(t) ];

                  case 2:
                    return r = e.sent(), this.Yd.ed(t, "rejected", n), [ 4 /*yield*/ , this.Tf(r) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , ir(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    t.prototype.Af = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Ud.J_() || me("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    [ 4 /*yield*/ , this.j_.qo() ];

                  case 1:
                    return -1 === (n = e.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.hf.get(n) || []).push(t), 
                    this.hf.set(n, r), [ 2 /*return*/ ]);
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.Rf = function(t) {
        (this.hf.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.hf.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.mf = function(t) {
        this.hf.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new c(h.CANCELLED, t));
            }));
        })), this.hf.clear();
    }, t.prototype.ff = function(t, e) {
        var n = this.rf[this.currentUser.s()];
        n || (n = new I(Ie)), n = n.nt(t, e), this.rf[this.currentUser.s()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype.wf = function(t, e) {
        var n = this.rf[this.currentUser.s()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.rf[this.currentUser.s()] = n;
        }
    }, t.prototype.df = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.Yd.hd(t);
        for (var r = 0, i = this.tf.get(t); r < i.length; r++) {
            var o = i[r];
            this.Zd.delete(o), e && this.Xd.Pf(o, e);
        }
        if (this.tf.delete(t), this.uf) {
            var s = this.nf.$n(t);
            this.nf.Nn(t), s.forEach((function(t) {
                n.nf.Mn(t) || 
                // We removed the last reference for this key
                n.Vf(t);
            }));
        }
    }, t.prototype.Vf = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.sf.get(t);
        null !== e && (this.Ud.fl(e), this.sf = this.sf.remove(t), this.if.delete(e), this.If());
    }, t.prototype.lf = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof pi ? (this.nf.vn(i.key, t), this.gf(i)) : i instanceof di ? (me("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.nf.Dn(i.key, t), this.nf.Mn(i.key) || 
            // We removed the last reference for this key
            this.Vf(i.key)) : Ee();
        }
    }, t.prototype.gf = function(t) {
        var e = t.key;
        this.sf.get(e) || (me("SyncEngine", "New document in limbo: " + e), this.ef.push(e), 
        this.If());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.If = function() {
        for (;this.ef.length > 0 && this.sf.size < this.Jd; ) {
            var t = this.ef.shift(), e = this.af.next();
            this.if.set(e, new gi(t)), this.sf = this.sf.nt(t, e), this.Ud.listen(new Ct(_t.ve(t.path).xe(), e, 2 /* LimboResolution */ , Me.Fr));
        }
    }, 
    // Visible for testing
    t.prototype.pf = function() {
        return this.sf;
    }, 
    // Visible for testing
    t.prototype.yf = function() {
        return this.ef;
    }, t.prototype.Tf = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return r = [], i = [], o = [], this.Zd.forEach((function(e, u) {
                        o.push(Promise.resolve().then((function() {
                            var e = u.view.Cd(t);
                            return e.kd ? s.j_.ac(u.query, /* usePreviousResults= */ !1).then((function(t) {
                                var n = t.documents;
                                return u.view.Cd(n, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var e = n && n.Ts.get(u.targetId), o = u.view.ir(t, 
                            /* updateLimboDocuments= */ s.uf, e);
                            if (s.lf(u.targetId, o.Ld), o.snapshot) {
                                s.uf && s.Yd.ud(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), r.push(o.snapshot);
                                var a = qe.br(u.targetId, o.snapshot);
                                i.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(o) ];

                  case 1:
                    return e.sent(), this.Xd.d_(r), [ 4 /*yield*/ , this.j_.ic(i) ];

                  case 2:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.cf = function(t) {}, t.prototype.Dl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n = !this.currentUser.isEqual(t), this.currentUser = t, n ? (
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.mf("'waitForPendingWrites' promise is rejected due to a user change."), [ 4 /*yield*/ , this.j_.Gu(t) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    return r = e.sent(), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.Yd.Gu(t, r.Hu, r.Yu), [ 4 /*yield*/ , this.Tf(r.zu) ];

                  case 2:
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 4 /*yield*/ , this.Ud.Dl() ];

                  case 4:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.enableNetwork = function() {
        return this.Ud.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.Ud.disableNetwork();
    }, t.prototype.ai = function(t) {
        var e = this.if.get(t);
        if (e && e.Hd) return Zt().add(e.key);
        var n = Zt(), r = this.tf.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.Zd.get(s);
            n = n.kt(u.view.Dd);
        }
        return n;
    }, t;
}(), Ei = /** @class */ function(t) {
    function n(e, n, r, i, o) {
        var s = this;
        return (s = t.call(this, e, n, r, i, o) || this).j_ = e, 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        s.isPrimary = void 0, s;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "uf", {
        get: function() {
            return !0 === this.isPrimary;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.enableNetwork = function() {
        return this.j_.uu(!0), t.prototype.enableNetwork.call(this);
    }, n.prototype.disableNetwork = function() {
        return this.j_.uu(!1), t.prototype.disableNetwork.call(this);
    }, 
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */
    n.prototype.bf = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.j_.ac(t.query, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return n = e.sent(), r = t.view.Bd(n), [ 2 /*return*/ , (this.isPrimary && this.lf(t.targetId, r.Ld), 
                    r) ];
                }
            }));
        }));
    }, n.prototype.Od = function(e, n) {
        // If we are the primary client, the online state of all clients only
        // depends on the online state of the local RemoteStore.
        this.uf && 0 /* RemoteStore */ === n && (t.prototype.Od.call(this, e, n), this.Yd.ld(e)), 
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        this.uf || 1 /* SharedClientState */ !== n || t.prototype.Od.call(this, e, n);
    }, n.prototype.md = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.cf("applyBatchState()"), [ 4 /*yield*/ , this.j_.lc(t) ];

                  case 1:
                    return null === (i = e.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.Ud.cl() ];

                  case 2:
                    // If we are the primary client, we need to send this write to the
                    // backend. Secondary clients will ignore these writes since their remote
                    // connection is disabled.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    "acknowledged" === n || "rejected" === n ? (
                    // NOTE: Both these methods are no-ops for batches that originated from
                    // other clients.
                    this.wf(t, r || null), this.j_.dc(t)) : Ee(), e.label = 4;

                  case 4:
                    return [ 4 /*yield*/ , this.Tf(i) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 7 ];

                  case 6:
                    // A throttled tab may not have seen the mutation before it was completed
                    // and removed from the mutation queue, in which case we won't have cached
                    // the affected documents. In this case we can safely ignore the update
                    // since that means we didn't apply the mutation locally at all (if we
                    // had, we would have cached the affected documents), and so we will just
                    // see any resulting document changes via normal remote document updates
                    // as applicable.
                    me("SyncEngine", "Cannot apply mutation batch with id: " + t), e.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.Cl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u, a, h = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return !0 !== t || !0 === this.isPrimary ? [ 3 /*break*/ , 3 ] : (this.isPrimary = !0, 
                    [ 4 /*yield*/ , this.Ud.Cl(!0) ]);

                  case 1:
                    return e.sent(), n = this.Yd.Yl(), [ 4 /*yield*/ , this.vf(n.j()) ];

                  case 2:
                    for (r = e.sent(), i = 0, o = r; i < o.length; i++) s = o[i], this.Ud.listen(s);
                    return [ 3 /*break*/ , 7 ];

                  case 3:
                    return !1 !== t || !1 === this.isPrimary ? [ 3 /*break*/ , 7 ] : (this.isPrimary = !1, 
                    u = [], a = Promise.resolve(), this.tf.forEach((function(t, e) {
                        h.Yd.od(e) ? u.push(e) : a = a.then((function() {
                            return h.df(e), h.j_.oc(e, 
                            /*keepPersistedTargetData=*/ !0);
                        })), h.Ud.fl(e);
                    })), [ 4 /*yield*/ , a ]);

                  case 4:
                    return e.sent(), [ 4 /*yield*/ , this.vf(u) ];

                  case 5:
                    return e.sent(), this.Sf(), [ 4 /*yield*/ , this.Ud.Cl(!1) ];

                  case 6:
                    e.sent(), e.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.Sf = function() {
        var t = this;
        this.if.forEach((function(e, n) {
            t.Ud.fl(n);
        })), this.nf.kn(), this.if = new Map, this.sf = new I(b.k);
    }, 
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     */
    n.prototype.vf = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s, u, a, h, c, f, l, p, d;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    n = [], r = [], i = 0, o = t, e.label = 1;

                  case 1:
                    return i < o.length ? (s = o[i], u = void 0, (a = this.tf.get(s)) && 0 !== a.length ? [ 4 /*yield*/ , this.j_.oc(s, 
                    /*keepPersistedTargetData=*/ !0) ] : [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 14 ];

                  case 2:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    return e.sent(), [ 4 /*yield*/ , this.j_.hc(a[0].xe()) ];

                  case 3:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    u = e.sent(), h = 0, c = a, e.label = 4;

                  case 4:
                    return h < c.length ? (f = c[h], l = this.Zd.get(f), [ 4 /*yield*/ , this.bf(l) ]) : [ 3 /*break*/ , 7 ];

                  case 5:
                    (p = e.sent()).snapshot && r.push(p.snapshot), e.label = 6;

                  case 6:
                    return h++, [ 3 /*break*/ , 4 ];

                  case 7:
                    return [ 3 /*break*/ , 12 ];

                  case 8:
                    return [ 4 /*yield*/ , this.j_.fc(s) ];

                  case 9:
                    return d = e.sent(), [ 4 /*yield*/ , this.j_.hc(d) ];

                  case 10:
                    return u = e.sent(), [ 4 /*yield*/ , this._f(this.Df(d), s, 
                    /*current=*/ !1) ];

                  case 11:
                    e.sent(), e.label = 12;

                  case 12:
                    n.push(u), e.label = 13;

                  case 13:
                    return i++, [ 3 /*break*/ , 1 ];

                  case 14:
                    return [ 2 /*return*/ , (this.Xd.d_(r), n) ];
                }
            }));
        }));
    }, 
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    n.prototype.Df = function(t) {
        return new _t(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
    }, n.prototype.yu = function() {
        return this.j_.yu();
    }, n.prototype.Pd = function(t, n, r) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var i, o;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.isPrimary ? (
                    // If we receive a target state notification via WebStorage, we are
                    // either already secondary or another tab has taken the primary lease.
                    me("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    if (!this.tf.has(t)) return [ 3 /*break*/ , 8 ];
                    switch (n) {
                      case "current":
                      case "not-current":
                        return [ 3 /*break*/ , 2 ];

                      case "rejected":
                        return [ 3 /*break*/ , 5 ];
                    }
                    return [ 3 /*break*/ , 7 ];

                  case 2:
                    return [ 4 /*yield*/ , this.j_.ba() ];

                  case 3:
                    return i = e.sent(), o = te.Rs(t, "current" === n), [ 4 /*yield*/ , this.Tf(i, o) ];

                  case 4:
                    return e.sent(), [ 3 /*break*/ , 8 ];

                  case 5:
                    return [ 4 /*yield*/ , this.j_.oc(t, 
                    /* keepPersistedTargetData */ !0) ];

                  case 6:
                    return e.sent(), this.df(t, r), [ 3 /*break*/ , 8 ];

                  case 7:
                    Ee(), e.label = 8;

                  case 8:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.Vd = function(t, n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r, i, o, s, u, a, h, c, f, l, p = this;
            return e.__generator(this, (function(d) {
                switch (d.label) {
                  case 0:
                    if (!this.isPrimary) return [ 3 /*break*/ , 10 ];
                    r = 0, i = t, d.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], this.tf.has(o) ? (
                    // A target might have been added in a previous attempt
                    me("SyncEngine", "Adding an already active target " + o), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , this.j_.fc(o) ]) : [ 3 /*break*/ , 6 ];

                  case 2:
                    return s = d.sent(), [ 4 /*yield*/ , this.j_.hc(s) ];

                  case 3:
                    return u = d.sent(), [ 4 /*yield*/ , this._f(this.Df(s), u.targetId, 
                    /*current=*/ !1) ];

                  case 4:
                    d.sent(), this.Ud.listen(u), d.label = 5;

                  case 5:
                    return r++, [ 3 /*break*/ , 1 ];

                  case 6:
                    a = function(t) {
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return h.tf.has(t) ? [ 4 /*yield*/ , h.j_.oc(t, /* keepPersistedTargetData */ !1).then((function() {
                                    p.Ud.fl(t), p.df(t);
                                })).catch(ir) ] : [ 3 /*break*/ , 2 ];

                                // Release queries that are still active.
                                                              case 1:
                                // Release queries that are still active.
                                e.sent(), e.label = 2;

                              case 2:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, h = this, c = 0, f = n, d.label = 7;

                  case 7:
                    return c < f.length ? (l = f[c], [ 5 /*yield**/ , a(l) ]) : [ 3 /*break*/ , 10 ];

                  case 8:
                    d.sent(), d.label = 9;

                  case 9:
                    return c++, [ 3 /*break*/ , 7 ];

                  case 10:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, n;
}(wi), _i = function() {
    this.Cf = null, this.targetId = 0, this.Ff = [];
}, bi = /** @class */ function() {
    function t(t) {
        this.El = t, this.Nf = new De((function(t) {
            return t.canonicalId();
        })), this.onlineState = "Unknown" /* Unknown */ , this.kf = new Set, this.El.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        var e = t.query, n = !1, r = this.Nf.get(e);
        return r || (n = !0, r = new _i, this.Nf.set(e, r)), r.Ff.push(t), 
        // Run global snapshot listeners if a consistent snapshot has been emitted.
        t.Od(this.onlineState), r.Cf && t.$f(r.Cf) && this.Mf(), n ? this.El.listen(e).then((function(t) {
            return r.targetId = t, t;
        })) : Promise.resolve(r.targetId);
    }, t.prototype.fl = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o;
            return e.__generator(this, (function(e) {
                return n = t.query, r = !1, (i = this.Nf.get(n)) && (o = i.Ff.indexOf(t)) >= 0 && (i.Ff.splice(o, 1), 
                r = 0 === i.Ff.length), r ? [ 2 /*return*/ , (this.Nf.delete(n), this.El.fl(n)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.d_ = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.Nf.get(o);
            if (s) {
                for (var u = 0, a = s.Ff; u < a.length; u++) {
                    a[u].$f(i) && (e = !0);
                }
                s.Cf = i;
            }
        }
        e && this.Mf();
    }, t.prototype.Pf = function(t, e) {
        var n = this.Nf.get(t);
        if (n) for (var r = 0, i = n.Ff; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.Nf.delete(t);
    }, t.prototype.Ef = function(t) {
        this.onlineState = t;
        var e = !1;
        this.Nf.forEach((function(n, r) {
            for (var i = 0, o = r.Ff; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Od(t) && (e = !0);
            }
        })), e && this.Mf();
    }, t.prototype.Lf = function(t) {
        this.kf.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.Of = function(t) {
        this.kf.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.Mf = function() {
        this.kf.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), Ii = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.xf = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Bf = !1, this.qf = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.$f = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new $t(t.query, t.docs, t.cs, e, t._s, t.fromCache, t.ls, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Bf ? this.Uf(t) && (this.xf.next(t), o = !0) : this.Qf(t, this.onlineState) && (this.Wf(t), 
        o = !0), this.qf = t, o;
    }, t.prototype.onError = function(t) {
        this.xf.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Od = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.qf && !this.Bf && this.Qf(this.qf, t) && (this.Wf(this.qf), e = !0), 
        e;
    }, t.prototype.Qf = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.jf && n || t.docs.q() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Uf = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.qf && this.qf.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.ls && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Wf = function(t) {
        t = $t.fs(t.query, t.docs, t._s, t.fromCache), this.Bf = !0, this.xf.next(t);
    }, t;
}(), Ti = /** @class */ function() {
    function t() {}
    return t.prototype.Ku = function(t) {
        this.Kf = t;
    }, t.prototype.wr = function(t, e, n, i) {
        var o = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.Oe() || n.isEqual(m.MIN) ? this.Gf(t, e) : this.Kf.Tr(t, i).next((function(s) {
            var u = o.zf(e, s);
            return (e.je() || e.Ke()) && o.kd(e.ge, u, i, n) ? o.Gf(t, e) : (ye() <= r.LogLevel.DEBUG && me("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), e.toString()), 
            o.Kf.wr(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.nt(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.zf = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new A((function(e, n) {
            return t.Be(e, n);
        }));
        return e.forEach((function(e, r) {
            r instanceof mt && t.matches(r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.kd = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.D(r) > 0);
    }, t.prototype.Gf = function(t, e) {
        return ye() <= r.LogLevel.DEBUG && me("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", e.toString()), 
        this.Kf.wr(t, e, m.MIN);
    }, t;
}(), Ni = /** @class */ function() {
    function t(t, e) {
        this.ur = t, this.yo = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.ar = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Hf = 1, 
        /** The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             */
        this.lastStreamToken = R.xt, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Yf = new A(Le.Ie);
    }
    return t.prototype.So = function(t) {
        return Ve.resolve(0 === this.ar.length);
    }, t.prototype.Do = function(t, e, n) {
        var r = e.batchId, i = this.Jf(r, "acknowledged");
        return _e(0 === i), 
        // Verify that the batch in the queue is the one to be acknowledged.
        this.ar[i], this.lastStreamToken = n, Ve.resolve();
    }, t.prototype.Fo = function(t) {
        return Ve.resolve(this.lastStreamToken);
    }, t.prototype.No = function(t, e) {
        return this.lastStreamToken = e, Ve.resolve();
    }, t.prototype.ko = function(t, e, n, r) {
        var i = this.Hf;
        this.Hf++, this.ar.length > 0 && this.ar[this.ar.length - 1];
        var o = new ke(i, e, n, r);
        this.ar.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.Yf = this.Yf.add(new Le(a.key, i)), this.ur.Mo(t, a.key.path.L());
        }
        return Ve.resolve(o);
    }, t.prototype.Lo = function(t, e) {
        return Ve.resolve(this.Xf(e));
    }, t.prototype.Bo = function(t, e) {
        var n = e + 1, r = this.Zf(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Ve.resolve(this.ar.length > i ? this.ar[i] : null);
    }, t.prototype.qo = function() {
        return Ve.resolve(0 === this.ar.length ? -1 : this.Hf - 1);
    }, t.prototype.Uo = function(t) {
        return Ve.resolve(this.ar.slice());
    }, t.prototype._r = function(t, e) {
        var n = this, r = new Le(e, 0), i = new Le(e, Number.POSITIVE_INFINITY), o = [];
        return this.Yf.Ct([ r, i ], (function(t) {
            var e = n.Xf(t.Ln);
            o.push(e);
        })), Ve.resolve(o);
    }, t.prototype.Ir = function(t, e) {
        var n = this, r = new A(Ie);
        return e.forEach((function(t) {
            var e = new Le(t, 0), i = new Le(t, Number.POSITIVE_INFINITY);
            n.Yf.Ct([ e, i ], (function(t) {
                r = r.add(t.Ln);
            }));
        })), Ve.resolve(this.tT(r));
    }, t.prototype.Vr = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                b.st(i) || (i = i.child(""));
        var o = new Le(new b(i), 0), s = new A(Ie);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.Yf.Ft((function(t) {
            var e = t.key.path;
            return !!n.U(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.Ln)), !0);
        }), o), Ve.resolve(this.tT(s));
    }, t.prototype.tT = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Xf(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Wo = function(t, e) {
        var n = this;
        _e(0 === this.Jf(e.batchId, "removed")), this.ar.shift();
        var r = this.Yf;
        return Ve.forEach(e.mutations, (function(i) {
            var o = new Le(i.key, e.batchId);
            return r = r.delete(o), n.yo.Go(t, i.key);
        })).next((function() {
            n.Yf = r;
        }));
    }, t.prototype.Ko = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Mn = function(t, e) {
        var n = new Le(e, 0), r = this.Yf.Nt(n);
        return Ve.resolve(e.isEqual(r && r.key));
    }, t.prototype.zo = function(t) {
        return this.ar.length, Ve.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Jf = function(t, e) {
        return this.Zf(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Zf = function(t) {
        return 0 === this.ar.length ? 0 : t - this.ar[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Xf = function(t) {
        var e = this.Zf(t);
        return e < 0 || e >= this.ar.length ? null : this.ar[e];
    }, t;
}(), Ai = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.ur = t, this.eT = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new I(b.k), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Jn = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.eT(e);
        return this.docs = this.docs.nt(r, {
            Aa: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.ur.Mo(t, r.path.L());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Zn = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.tr = function(t, e) {
        var n = this.docs.get(e);
        return Ve.resolve(n ? n.Aa : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Gt();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.nt(t, e ? e.Aa : null);
        })), Ve.resolve(r);
    }, t.prototype.wr = function(t, e, n) {
        for (var r = zt(), i = new b(e.path.child("")), o = this.docs.lt(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.wt(); ) {
            var s = o.It(), u = s.key, a = s.value, h = a.Aa, c = a.readTime;
            if (!e.path.U(u.path)) break;
            c.D(n) <= 0 || h instanceof mt && e.matches(h) && (r = r.nt(h.key, h));
        }
        return Ve.resolve(r);
    }, t.prototype.sT = function(t, e) {
        return Ve.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.Ca = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.Fa(this);
    }, t.prototype.ka = function(t) {
        return Ve.resolve(this.size);
    }, t;
}();

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
Ai.Fa = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).$a = e, n;
    }
    return e.__extends(n, t), n.prototype.ir = function(t) {
        var e = this, n = [];
        return this.zn.forEach((function(r, i) {
            i ? n.push(e.$a.Jn(t, i, e.readTime)) : e.$a.Zn(r);
        })), Ve.Kn(n);
    }, n.prototype.er = function(t, e) {
        return this.$a.tr(t, e);
    }, n.prototype.sr = function(t, e) {
        return this.$a.getEntries(t, e);
    }, n;
}(Oe);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Si = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.iT = new De((function(t) {
            return t.canonicalId();
        })), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = m.MIN, 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.nT = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.rT = new Re, this.targetCount = 0, this.hT = yn.Yo();
    }
    return t.prototype.Xs = function(t, e) {
        return this.iT.forEach((function(t, n) {
            return e(n);
        })), Ve.resolve();
    }, t.prototype.ea = function(t) {
        return Ve.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.sa = function(t) {
        return Ve.resolve(this.nT);
    }, t.prototype.Xo = function(t) {
        return this.highestTargetId = this.hT.next(), Ve.resolve(this.highestTargetId);
    }, t.prototype.ia = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.nT && (this.nT = e), 
        Ve.resolve();
    }, t.prototype.ra = function(t) {
        this.iT.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.hT = new yn(e), this.highestTargetId = e), t.sequenceNumber > this.nT && (this.nT = t.sequenceNumber);
    }, t.prototype.na = function(t, e) {
        return this.ra(e), this.targetCount += 1, Ve.resolve();
    }, t.prototype.oa = function(t, e) {
        return this.ra(e), Ve.resolve();
    }, t.prototype.aa = function(t, e) {
        return this.iT.delete(e.target), this.rT.Nn(e.targetId), this.targetCount -= 1, 
        Ve.resolve();
    }, t.prototype.Zh = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.iT.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.iT.delete(s), o.push(r.ua(t, u.targetId)), 
            i++);
        })), Ve.Kn(o).next((function() {
            return i;
        }));
    }, t.prototype.la = function(t) {
        return Ve.resolve(this.targetCount);
    }, t.prototype.da = function(t, e) {
        var n = this.iT.get(e) || null;
        return Ve.resolve(n);
    }, t.prototype.fa = function(t, e, n) {
        this.rT.Sn(e, n);
        var r = this.persistence.yo, i = [];
        return r && e.forEach((function(e) {
            i.push(r.vn(t, e));
        })), Ve.Kn(i);
    }, t.prototype.Ta = function(t, e, n) {
        this.rT.Fn(e, n);
        var r = this.persistence.yo, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Dn(t, e));
        })), Ve.Kn(i);
    }, t.prototype.ua = function(t, e) {
        return this.rT.Nn(e), Ve.resolve();
    }, t.prototype.Ea = function(t, e) {
        var n = this.rT.$n(e);
        return Ve.resolve(n);
    }, t.prototype.Mn = function(t, e) {
        return Ve.resolve(this.rT.Mn(e));
    }, t;
}(), Di = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this.oT = {}, this.hu = new Me(0), this.ja = !1, this.ja = !0, this.yo = t(this), 
        this.Za = new Si(this), this.ur = new An, this.or = new Ai(this.ur, (function(t) {
            return e.yo.aT(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.mu = function() {
        // No durable state to ensure is closed on shutdown.
        return this.ja = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Kh", {
        get: function() {
            return this.ja;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.au = function() {
        // No op.
    }, t.prototype.Du = function() {
        return this.ur;
    }, t.prototype.bu = function(t) {
        var e = this.oT[t.s()];
        return e || (e = new Ni(this.ur, this.yo), this.oT[t.s()] = e), e;
    }, t.prototype.vu = function() {
        return this.Za;
    }, t.prototype.Su = function() {
        return this.or;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        me("MemoryPersistence", "Starting transaction:", t);
        var i = new ki(this.hu.next());
        return this.yo.uT(), n(i).next((function(t) {
            return r.yo.cT(i).next((function() {
                return t;
            }));
        })).Wn().then((function(t) {
            return i.hr(), t;
        }));
    }, t.prototype._T = function(t, e) {
        return Ve.Gn(Object.values(this.oT).map((function(n) {
            return function() {
                return n.Mn(t, e);
            };
        })));
    }, t;
}(), ki = /** @class */ function(t) {
    function n(e) {
        var n = this;
        return (n = t.call(this) || this).Qa = e, n;
    }
    return e.__extends(n, t), n;
}(Ce), xi = /** @class */ function() {
    function t(t) {
        this.persistence = t, this.Nu = null, this.lT = null;
    }
    return t.dT = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "fT", {
        get: function() {
            if (this.lT) return this.lT;
            throw Ee();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Mu = function(t) {
        this.Nu = t;
    }, t.prototype.vn = function(t, e) {
        return this.fT.delete(e), Ve.resolve();
    }, t.prototype.Dn = function(t, e) {
        return this.fT.add(e), Ve.resolve();
    }, t.prototype.Go = function(t, e) {
        return this.fT.add(e), Ve.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this, r = this.persistence.vu();
        return r.Ea(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.fT.add(t);
            }));
        })).next((function() {
            return r.aa(t, e);
        }));
    }, t.prototype.uT = function() {
        this.lT = new Set;
    }, t.prototype.cT = function(t) {
        var e = this, n = this.persistence.Su().Ca();
        // Remove newly orphaned documents.
                return Ve.forEach(this.fT, (function(r) {
            return e.TT(t, r).next((function(t) {
                t || n.Zn(r);
            }));
        })).next((function() {
            return e.lT = null, n.apply(t);
        }));
    }, t.prototype.Ou = function(t, e) {
        var n = this;
        return this.TT(t, e).next((function(t) {
            t ? n.fT.delete(e) : n.fT.add(e);
        }));
    }, t.prototype.aT = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.TT = function(t, e) {
        var n = this;
        return Ve.Gn([ function() {
            return n.persistence.vu().Mn(t, e);
        }, function() {
            return n.persistence._T(t, e);
        }, function() {
            return Ve.resolve(n.Nu.Mn(e));
        } ]);
    }, t;
}(), Ri = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var n = this;
            return e.__generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Yd = this.ET(t), this.persistence = this.IT(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.wT = this.RT(t), this.j_ = this.AT(t), this.Ud = this.mT(t), 
                    this.El = this.PT(t), this.VT = this.gT(t), this.Yd.M_ = function(t) {
                        return n.El.Od(t, 1 /* SharedClientState */);
                    }, this.Ud.El = this.El, [ 4 /*yield*/ , this.j_.start() ];

                  case 2:
                    return e.sent(), [ 4 /*yield*/ , this.Yd.start() ];

                  case 3:
                    return e.sent(), [ 4 /*yield*/ , this.Ud.start() ];

                  case 4:
                    return e.sent(), [ 4 /*yield*/ , this.Ud.Cl(this.El.uf) ];

                  case 5:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.gT = function(t) {
        return new bi(this.El);
    }, t.prototype.RT = function(t) {
        return null;
    }, t.prototype.AT = function(t) {
        return new nr(this.persistence, new Ti, t.pT);
    }, t.prototype.IT = function(t) {
        return new Di(xi.dT);
    }, t.prototype.mT = function(t) {
        var e = this;
        return new ni(this.j_, t.b_, t.jr, (function(t) {
            return e.El.Od(t, 0 /* RemoteStore */);
        }), t.platform.yT());
    }, t.prototype.ET = function(t) {
        return new li;
    }, t.prototype.PT = function(t) {
        return new wi(this.j_, this.Ud, this.Yd, t.pT, t.Jd);
    }, t.prototype.clearPersistence = function(t) {
        throw new c(h.FAILED_PRECONDITION, "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.");
    }, t;
}(), Li = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.initialize = function(n) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var r = this;
            return e.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, n) ];

                  case 1:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 4 /*yield*/ , this.persistence.ou((function(t) {
                        return e.__awaiter(r, void 0, void 0, (function() {
                            return e.__generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.El.Cl(t) ];

                                  case 1:
                                    return e.sent(), this.wT && (t && !this.wT.Kh ? this.wT.start(this.j_) : t || this.wT.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 2:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.AT = function(t) {
        return new rr(this.persistence, new Ti, t.pT);
    }, n.prototype.PT = function(t) {
        var e = new Ei(this.j_, this.Ud, this.Yd, t.pT, t.Jd);
        return this.Yd instanceof fi && (this.Yd.El = e), e;
    }, n.prototype.RT = function(t) {
        var e = this.persistence.yo.qh;
        return new Ze(e, t.jr);
    }, n.prototype.IT = function(t) {
        var e = Xn.Fu(t.bT), n = t.platform.vT(t.bT.ci);
        return new Xn(t.ST.synchronizeTabs, e, t.clientId, t.platform, Qe.kh(t.ST.cacheSizeBytes), t.jr, n, this.Yd);
    }, n.prototype.ET = function(t) {
        if (t.ST.DT && t.ST.synchronizeTabs) {
            if (!fi.ho(t.platform)) throw new c(h.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
            var e = Xn.Fu(t.bT);
            return new fi(t.jr, t.platform, e, t.clientId, t.pT);
        }
        return new li;
    }, n.prototype.clearPersistence = function(t) {
        var e = Xn.Fu(t);
        return Xn.clearPersistence(e);
    }, n;
}(Ri), Vi = /** @class */ function() {
    function t(t, e, n, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    r) {
        this.platform = t, this.bT = e, this.credentials = n, this.jr = r, this.clientId = be.En()
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return t.prototype.start = function(t, e) {
        var n = this;
        this.CT();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var r = new je, i = new je, o = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.l((function(s) {
            if (!o) return o = !0, me("FirestoreClient", "Initializing. user=", s.uid), n.FT(t, e, s, i).then(r.resolve, r.reject);
            n.jr.Zr((function() {
                return n.Dl(s);
            }));
        })), 
        // Block the async queue until initialization is done
        this.jr.Zr((function() {
            return r.promise;
        })), i.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.CT(), this.jr.enqueue((function() {
            return t.El.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.FT = function(t, n, r, i) {
        return e.__awaiter(this, void 0, void 0, (function() {
            var o, s, u, a, h = this;
            return e.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    return c.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , this.platform.NT(this.bT) ];

                  case 1:
                    return o = c.sent(), s = this.platform.vT(this.bT.ci), u = new $r(this.jr, o, this.credentials, s), 
                    [ 4 /*yield*/ , t.initialize({
                        jr: this.jr,
                        bT: this.bT,
                        platform: this.platform,
                        b_: u,
                        clientId: this.clientId,
                        pT: r,
                        Jd: 100,
                        ST: n
                    }) ];

                  case 2:
                    return c.sent(), this.persistence = t.persistence, this.Yd = t.Yd, this.j_ = t.j_, 
                    this.Ud = t.Ud, this.El = t.El, this.wT = t.wT, this.kT = t.VT, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.au((function() {
                        return e.__awaiter(h, void 0, void 0, (function() {
                            return e.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), i.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (a = c.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    i.reject(a), !this.$T(a)) throw a;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), 
                    this.FT(new Ri, {
                        DT: !1
                    }, r, i)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.$T = function(t) {
        return "FirebaseError" === t.name ? t.code === h.FAILED_PRECONDITION || t.code === h.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.CT = function() {
        if (this.jr._h) throw new c(h.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.Dl = function(t) {
        return this.jr.Rh(), me("FirestoreClient", "Credential Changed. Current user: " + t.uid), 
        this.El.Dl(t);
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.CT(), this.jr.enqueue((function() {
            return t.El.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.jr.Eh((function() {
            return e.__awaiter(t, void 0, void 0, (function() {
                return e.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.wT && this.wT.stop(), [ 4 /*yield*/ , this.Ud.mu() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.Yd.mu() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.mu() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.T(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.CT();
        var e = new je;
        return this.jr.Zr((function() {
            return t.El.Af(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.CT();
        var i = new Ii(t, e, n);
        return this.jr.Zr((function() {
            return r.kT.listen(i);
        })), i;
    }, t.prototype.fl = function(t) {
        var e = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.MT || this.jr.Zr((function() {
            return e.kT.fl(t);
        }));
    }, t.prototype.LT = function(t) {
        var e = this;
        return this.CT(), this.jr.enqueue((function() {
            return e.j_.rc(t);
        })).then((function(t) {
            if (t instanceof mt) return t;
            if (t instanceof gt) return null;
            throw new c(h.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)");
        }));
    }, t.prototype.OT = function(t) {
        var n = this;
        return this.CT(), this.jr.enqueue((function() {
            return e.__awaiter(n, void 0, void 0, (function() {
                var n, r, i;
                return e.__generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return [ 4 /*yield*/ , this.j_.ac(t, 
                        /* usePreviousResults= */ !0) ];

                      case 1:
                        return n = e.sent(), r = new yi(t, n.uc), i = r.Cd(n.documents), [ 2 /*return*/ , r.ir(i, 
                        /* updateLimboDocuments= */ !1).snapshot ];
                    }
                }));
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.CT();
        var n = new je;
        return this.jr.Zr((function() {
            return e.El.write(t, n);
        })), n.promise;
    }, t.prototype.ci = function() {
        return this.bT.ci;
    }, t.prototype.Lf = function(t) {
        var e = this;
        this.CT(), this.jr.Zr((function() {
            return e.kT.Lf(t), Promise.resolve();
        }));
    }, t.prototype.Of = function(t) {
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
        this.MT || this.kT.Of(t);
    }, Object.defineProperty(t.prototype, "MT", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.jr._h;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var e = this;
        this.CT();
        var n = new je;
        return this.jr.Zr((function() {
            return e.El.runTransaction(e.jr, t, n), Promise.resolve();
        })), n.promise;
    }, t;
}(), Oi = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.xT(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.xT(this.observer.error, t);
    }, t.prototype.BT = function() {
        this.muted = !0;
    }, t.prototype.xT = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Ci = /** @class */ function() {
    function t(t, e, n, r) {
        this.firestore = t, this.timestampsInSnapshots = e, this.qT = n, this.converter = r;
    }
    return t.prototype.UT = function(t) {
        switch (q(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return K(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.QT(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.WT(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new Ar(Y(t.bytesValue));

          case 7 /* RefValue */ :
            return this.jT(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return new Ur(t.geoPointValue.latitude, t.geoPointValue.longitude);

          case 9 /* ArrayValue */ :
            return this.KT(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.GT(t.mapValue);

          default:
            throw Ee();
        }
    }, t.prototype.GT = function(t) {
        var e = this, n = {};
        return k(t.fields || {}, (function(t, r) {
            n[t] = e.UT(r);
        })), n;
    }, t.prototype.KT = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.UT(t);
        }));
    }, t.prototype.WT = function(t) {
        switch (this.qT) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return P(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.UT(e);

          case "estimate":
            return this.QT(C(t));

          default:
            return null;
        }
    }, t.prototype.QT = function(t) {
        var e = z(t), n = new v(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.jT = function(t) {
        var e = w.G(t);
        _e(le(e));
        var n = new Se(e.get(1), e.get(3)), r = new b(e.M(5));
        return n.isEqual(this.firestore.zT) || 
        // TODO(b/64130202): Somehow support foreign references.
        ge("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.firestore.zT.projectId + "/" + this.firestore.zT.database + ") instead."), 
        new Gi(r, this.firestore, this.converter);
    }, t;
}(), Ui = Qe.Lh, qi = /** @class */ function() {
    function t(t) {
        var e, n;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new c(h.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else fr("settings", "non-empty string", "host", t.host), this.host = t.host, lr("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (gr("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling" ]), 
        lr("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        lr("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? ge("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && ge("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        lr("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Qe.xh; else {
            if (t.cacheSizeBytes !== Ui && t.cacheSizeBytes < Qe.Oh) throw new c(h.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Qe.Oh);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        lr("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling;
    }, t;
}(), Mi = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(n, r, i) {
        var o = this;
        if (void 0 === i && (i = new Ri), this.HT = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.YT = new Be, this.INTERNAL = {
            delete: function() {
                return e.__awaiter(o, void 0, void 0, (function() {
                    return e.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.JT(), [ 4 /*yield*/ , this.XT.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof n.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var s = n;
            this.HT = s, this.zT = t.ZT(s), this.tE = s.name, this.eE = new p(r);
        } else {
            var u = n;
            if (!u.projectId) throw new c(h.INVALID_ARGUMENT, "Must provide projectId");
            this.zT = new Se(u.projectId, u.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.tE = "[DEFAULT]", this.eE = new l;
        }
        this.sE = i, this.iE = new qi({}), this.nE = this.rE(this.zT);
    }
    return t.prototype.settings = function(t) {
        sr("Firestore.settings", arguments, 1), hr("Firestore.settings", "object", 1, t);
        var e = new qi(t);
        if (this.XT && !this.iE.isEqual(e)) throw new c(h.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.iE = e, void 0 !== e.credentials && (this.eE = function(t) {
            if (!t) return new l;
            switch (t.type) {
              case "gapi":
                var e = t.hE;
                // Make sure this really is a Gapi client.
                                return _e(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new y(e, t.V || "0");

              case "provider":
                return t.hE;

              default:
                throw new c(h.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.JT(), this.XT.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.JT(), this.XT.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.XT) throw new c(h.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1;
        return t && (void 0 !== t.experimentalTabSynchronization && ge("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n), 
        this.oE(this.sE, {
            DT: !0,
            cacheSizeBytes: this.iE.cacheSizeBytes,
            synchronizeTabs: r
        });
    }, t.prototype.clearPersistence = function() {
        return e.__awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return e.__generator(this, (function(r) {
                if (void 0 !== this.XT && !this.XT.MT) throw new c(h.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                return t = new je, [ 2 /*return*/ , (this.YT.lh((function() {
                    return e.__awaiter(n, void 0, void 0, (function() {
                        var n, r;
                        return e.__generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([ 0, 2, , 3 ]), n = this.aE(), [ 4 /*yield*/ , this.sE.clearPersistence(n) ];

                              case 1:
                                return e.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return r = e.sent(), t.reject(r), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), t.promise) ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "uE", {
        get: function() {
            return this.JT(), this.XT.MT;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.JT(), this.XT.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.JT(), Pi(t)) return this.cE(t);
        hr("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.cE(e);
    }, t.prototype.cE = function(t) {
        var e = this, n = new Oi({
            next: function() {
                t.next && t.next();
            },
            error: function(t) {
                throw Ee();
            }
        });
        return this.XT.Lf(n), function() {
            n.BT(), e.XT.Of(n);
        };
    }, t.prototype.JT = function() {
        return this.XT || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.oE(new Ri, {
            DT: !1
        }), this.XT;
    }, t.prototype.aE = function() {
        return new Ae(this.zT, this.tE, this.iE.host, this.iE.ssl, this.iE.forceLongPolling);
    }, t.prototype.oE = function(t, e) {
        var n = this.aE();
        return this.XT = new Vi(pe.Lt(), n, this.eE, this.YT), this.XT.start(t, e);
    }, t.prototype.rE = function(t) {
        var e = pe.Lt().vT(t);
        return new zr(e, (function(e) {
            if (e instanceof Gi) {
                var n = t, r = e.firestore.zT;
                if (!r.isEqual(n)) throw new c(h.INVALID_ARGUMENT, "Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                return new Br(t, e._E);
            }
            return e;
        }));
    }, t.ZT = function(t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new c(h.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        // Export the classes with a private constructor (it will fail if invoked
        // at runtime). Note that this still allows instanceof checks.
        // We're treating the variables as class names, so disable checking for lower
        // case variable names.
                if (!n || "string" != typeof n) throw new c(h.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new Se(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.HT) throw new c(h.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.HT;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return sr("Firestore.collection", arguments, 1), hr("Firestore.collection", "non-empty string", 1, t), 
        this.JT(), new Zi(w.G(t), this);
    }, t.prototype.doc = function(t) {
        return sr("Firestore.doc", arguments, 1), hr("Firestore.doc", "non-empty string", 1, t), 
        this.JT(), Gi.lE(w.G(t), this);
    }, t.prototype.collectionGroup = function(t) {
        if (sr("Firestore.collectionGroup", arguments, 1), hr("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.JT(), new Yi(new _t(w.H, t), this);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return sr("Firestore.runTransaction", arguments, 1), hr("Firestore.runTransaction", "function", 1, t), 
        this.JT().transaction((function(n) {
            return t(new ji(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.JT(), new Fi(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (ye()) {
              case r.LogLevel.DEBUG:
                return "debug";

              case r.LogLevel.SILENT:
                return "silent";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.setLogLevel = function(t) {
        switch (sr("Firestore.setLogLevel", arguments, 1), hr("Firestore.setLogLevel", "non-empty string", 1, t), 
        t) {
          case "debug":
            ve(r.LogLevel.DEBUG);
            break;

          case "error":
            ve(r.LogLevel.ERROR);
            break;

          case "silent":
            ve(r.LogLevel.SILENT);
            break;

          default:
            throw new c(h.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.dE = function() {
        return this.iE.timestampsInSnapshots;
    }, t;
}(), ji = /** @class */ function() {
    function t(t, e) {
        this.fE = t, this.TE = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        sr("Transaction.get", arguments, 1);
        var n = Ji("Transaction.get", t, this.fE);
        return this.TE.p_([ n._E ]).then((function(t) {
            if (!t || 1 !== t.length) return Ee();
            var r = t[0];
            if (r instanceof gt) return new zi(e.fE, n._E, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.EE);
            if (r instanceof mt) return new zi(e.fE, n._E, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.EE);
            throw Ee();
        }));
    }, t.prototype.set = function(t, e, n) {
        ar("Transaction.set", arguments, 2, 3);
        var r = Ji("Transaction.set", t, this.fE);
        n = Wi("Transaction.set", n);
        var i = to(r.EE, e, "Transaction.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.fE.nE.Mc(s, o, n.mergeFields) : this.fE.nE.kc(s, o);
        return this.TE.set(r._E, u), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof Dr ? (ur("Transaction.update", arguments, 3), 
        r = Ji("Transaction.update", t, this.fE), i = this.fE.nE.Bc("Transaction.update", e, n, o)) : (sr("Transaction.update", arguments, 2), 
        r = Ji("Transaction.update", t, this.fE), i = this.fE.nE.Lc("Transaction.update", e)), 
        this.TE.update(r._E, i), this;
    }, t.prototype.delete = function(t) {
        sr("Transaction.delete", arguments, 1);
        var e = Ji("Transaction.delete", t, this.fE);
        return this.TE.delete(e._E), this;
    }, t;
}(), Fi = /** @class */ function() {
    function t(t) {
        this.fE = t, this.IE = [], this.wE = !1;
    }
    return t.prototype.set = function(t, e, n) {
        ar("WriteBatch.set", arguments, 2, 3), this.RE();
        var r = Ji("WriteBatch.set", t, this.fE);
        n = Wi("WriteBatch.set", n);
        var i = to(r.EE, e, "WriteBatch.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.fE.nE.Mc(s, o, n.mergeFields) : this.fE.nE.kc(s, o);
        return this.IE = this.IE.concat(u.gc(r._E, ut.NONE)), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.RE(), "string" == typeof e || e instanceof Dr ? (ur("WriteBatch.update", arguments, 3), 
        r = Ji("WriteBatch.update", t, this.fE), i = this.fE.nE.Bc("WriteBatch.update", e, n, o)) : (sr("WriteBatch.update", arguments, 2), 
        r = Ji("WriteBatch.update", t, this.fE), i = this.fE.nE.Lc("WriteBatch.update", e)), 
        this.IE = this.IE.concat(i.gc(r._E, ut.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        sr("WriteBatch.delete", arguments, 1), this.RE();
        var e = Ji("WriteBatch.delete", t, this.fE);
        return this.IE = this.IE.concat(new lt(e._E, ut.NONE)), this;
    }, t.prototype.commit = function() {
        return this.RE(), this.wE = !0, this.IE.length > 0 ? this.fE.JT().write(this.IE) : Promise.resolve();
    }, t.prototype.RE = function() {
        if (this.wE) throw new c(h.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), Gi = /** @class */ function() {
    function t(t, e, n) {
        this._E = t, this.firestore = e, this.EE = n, this.XT = this.firestore.JT();
    }
    return t.lE = function(e, n, r) {
        if (e.length % 2 != 0) throw new c(h.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.K() + " has " + e.length);
        return new t(new b(e), n, r);
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this._E.path.B();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return new Zi(this._E.path.L(), this.firestore, this.EE);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this._E.path.K();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        if (sr("DocumentReference.collection", arguments, 1), hr("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new c(h.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = w.G(t);
        return new Zi(this._E.path.child(e), this.firestore);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw wr("isEqual", "DocumentReference", 1, e);
        return this.firestore === e.firestore && this._E.isEqual(e._E) && this.EE === e.EE;
    }, t.prototype.set = function(t, e) {
        ar("DocumentReference.set", arguments, 1, 2), e = Wi("DocumentReference.set", e);
        var n = to(this.EE, t, "DocumentReference.set"), r = n[0], i = n[1], o = e.merge || e.mergeFields ? this.firestore.nE.Mc(i, r, e.mergeFields) : this.firestore.nE.kc(i, r);
        return this.XT.write(o.gc(this._E, ut.NONE));
    }, t.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof Dr ? (ur("DocumentReference.update", arguments, 2), 
        n = this.firestore.nE.Bc("DocumentReference.update", t, e, r)) : (sr("DocumentReference.update", arguments, 1), 
        n = this.firestore.nE.Lc("DocumentReference.update", t)), this.XT.write(n.gc(this._E, ut.exists(!0)));
    }, t.prototype.delete = function() {
        return sr("DocumentReference.delete", arguments, 0), this.XT.write([ new lt(this._E, ut.NONE) ]);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        ar("DocumentReference.onSnapshot", arguments, 1, 4);
        var n, r = {
            includeMetadataChanges: !1
        }, i = 0;
        "object" != typeof t[i] || Pi(t[i]) || (gr("DocumentReference.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        lr("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++);
        var o = {
            includeMetadataChanges: r.includeMetadataChanges
        };
        return Pi(t[i]) ? n = t[i] : (hr("DocumentReference.onSnapshot", "function", i, t[i]), 
        cr("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), cr("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), 
        n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.AE(o, n);
    }, t.prototype.AE = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Oi({
            next: function(t) {
                if (e.next) {
                    var r = t.docs.get(n._E);
                    e.next(new zi(n.firestore, n._E, r, t.fromCache, t.hasPendingWrites, n.EE));
                }
            },
            error: r
        }), o = this.XT.listen(_t.ve(this._E.path), i, t);
        return function() {
            i.BT(), n.XT.fl(o);
        };
    }, t.prototype.get = function(t) {
        var e = this;
        return ar("DocumentReference.get", arguments, 0, 1), Xi("DocumentReference.get", t), 
        new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.JT().LT(e._E).then((function(t) {
                n(new zi(e.firestore, e._E, t, 
                /*fromCache=*/ !0, t instanceof mt && t.te, e.EE));
            }), r) : e.mE(n, r, t);
        }));
    }, t.prototype.mE = function(t, e, n) {
        var r = this.AE({
            includeMetadataChanges: !0,
            jf: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), !i.exists && i.metadata.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                e(new c(h.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? e(new c(h.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(i);
            },
            error: e
        });
    }, t.prototype.withConverter = function(e) {
        return new t(this._E, this.firestore, e);
    }, t;
}(), Bi = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), zi = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.fE = t, this._E = e, this.PE = n, this.VE = r, this.gE = i, this.EE = o;
    }
    return t.prototype.data = function(t) {
        if (ar("DocumentSnapshot.data", arguments, 0, 1), t = Hi("DocumentSnapshot.data", t), 
        this.PE) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.EE) {
                var e = new Ki(this.fE, this._E, this.PE, this.VE, this.gE);
                return this.EE.fromFirestore(e, t);
            }
            return new Ci(this.fE, this.fE.dE(), t.serverTimestamps, 
            /* converter= */ void 0).UT(this.PE.Re());
        }
    }, t.prototype.get = function(t, e) {
        if (ar("DocumentSnapshot.get", arguments, 1, 2), e = Hi("DocumentSnapshot.get", e), 
        this.PE) {
            var n = this.PE.data().field(Qr("DocumentSnapshot.get", t));
            if (null !== n) return new Ci(this.fE, this.fE.dE(), e.serverTimestamps, this.EE).UT(n);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this._E.path.B();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new Gi(this._E, this.fE, this.EE);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.PE;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Bi(this.gE, this.VE);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw wr("isEqual", "DocumentSnapshot", 1, e);
        return this.fE === e.fE && this.VE === e.VE && this._E.isEqual(e._E) && (null === this.PE ? null === e.PE : this.PE.isEqual(e.PE)) && this.EE === e.EE;
    }, t;
}(), Ki = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e.__extends(n, t), n.prototype.data = function(e) {
        return t.prototype.data.call(this, e);
    }, n;
}(zi), Yi = /** @class */ function() {
    function t(t, e, n) {
        this.pE = t, this.firestore = e, this.EE = n;
    }
    return t.prototype.where = function(e, n, r) {
        var i;
        sr("Query.where", arguments, 3), mr("Query.where", 3, r), function(t, e, n, r) {
            if (!e.some((function(t) {
                return t === r;
            }))) throw new c(h.INVALID_ARGUMENT, "Invalid value " + vr(r) + " provided to function Query.where() for its " + _r(2) + " argument. Acceptable values: " + e.join(", "));
        }(0, [ "<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any" ], 0, n);
        var o = Qr("Query.where", e), s = bt.G(n);
        if (o.J()) {
            if (s === bt.ARRAY_CONTAINS || s === bt.ARRAY_CONTAINS_ANY) throw new c(h.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + s.toString() + "' queries on FieldPath.documentId().");
            if (s === bt.IN) {
                this.yE(r, s);
                for (var u = [], a = 0, f = r; a < f.length; a++) {
                    var l = f[a];
                    u.push(this.bE(l));
                }
                i = {
                    arrayValue: {
                        values: u
                    }
                };
            } else i = this.bE(r);
        } else s !== bt.IN && s !== bt.ARRAY_CONTAINS_ANY || this.yE(r, s), i = this.firestore.nE.qc("Query.where", r, 
        // We only allow nested arrays for IN queries.
        /** allowArrays = */ s === bt.IN);
        var p = It.create(o, s, i);
        return this.vE(p), new t(this.pE.Ce(p), this.firestore, this.EE);
    }, t.prototype.orderBy = function(e, n) {
        var r;
        if (ar("Query.orderBy", arguments, 1, 2), cr("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = kt.ASCENDING; else {
            if ("desc" !== n) throw new c(h.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = kt.DESCENDING;
        }
        if (null !== this.pE.startAt) throw new c(h.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.pE.endAt) throw new c(h.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var i = Qr("Query.orderBy", e), o = new Vt(i, r);
        return this.SE(o), new t(this.pE.Fe(o), this.firestore, this.EE);
    }, t.prototype.limit = function(e) {
        return sr("Query.limit", arguments, 1), hr("Query.limit", "number", 1, e), Er("Query.limit", 1, e), 
        new t(this.pE.Ne(e), this.firestore, this.EE);
    }, t.prototype.limitToLast = function(e) {
        return sr("Query.limitToLast", arguments, 1), hr("Query.limitToLast", "number", 1, e), 
        Er("Query.limitToLast", 1, e), new t(this.pE.ke(e), this.firestore, this.EE);
    }, t.prototype.startAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        ur("Query.startAt", arguments, 1);
        var i = this.DE("Query.startAt", e, n, 
        /*before=*/ !0);
        return new t(this.pE.$e(i), this.firestore, this.EE);
    }, t.prototype.startAfter = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        ur("Query.startAfter", arguments, 1);
        var i = this.DE("Query.startAfter", e, n, 
        /*before=*/ !1);
        return new t(this.pE.$e(i), this.firestore, this.EE);
    }, t.prototype.endBefore = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        ur("Query.endBefore", arguments, 1);
        var i = this.DE("Query.endBefore", e, n, 
        /*before=*/ !0);
        return new t(this.pE.Me(i), this.firestore, this.EE);
    }, t.prototype.endAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        ur("Query.endAt", arguments, 1);
        var i = this.DE("Query.endAt", e, n, 
        /*before=*/ !1);
        return new t(this.pE.Me(i), this.firestore, this.EE);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw wr("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && this.pE.isEqual(e.pE);
    }, t.prototype.withConverter = function(e) {
        return new t(this.pE, this.firestore, e);
    }, 
    /** Helper function to create a bound from a document or fields */ t.prototype.DE = function(t, e, n, r) {
        if (mr(t, 1, e), e instanceof zi) {
            if (n.length > 0) throw new c(h.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
            var i = e;
            if (!i.exists) throw new c(h.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
            return this.CE(i.PE, r);
        }
        var o = [ e ].concat(n);
        return this.FE(t, o, r);
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype.CE = function(t, e) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var n = [], r = 0, i = this.pE.orderBy; r < i.length; r++) {
            var o = i[r];
            if (o.field.J()) n.push(Q(this.firestore.zT, t.key)); else {
                var s = t.field(o.field);
                if (P(s)) throw new c(h.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + o.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === s) {
                    var u = o.field.K();
                    throw new c(h.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.");
                }
                n.push(s);
            }
        }
        return new Lt(n, e);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.FE = function(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.pE.Ve;
        if (e.length > r.length) throw new c(h.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (r[o].field.J()) {
                if ("string" != typeof s) throw new c(h.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.pE.He() && -1 !== s.indexOf("/")) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var u = this.pE.path.child(w.G(s));
                if (!b.st(u)) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                var a = new b(u);
                i.push(Q(this.firestore.zT, a));
            } else {
                var f = this.firestore.nE.qc(t, s);
                i.push(f);
            }
        }
        return new Lt(i, n);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        ar("Query.onSnapshot", arguments, 1, 4);
        var n, r = {}, i = 0;
        return "object" != typeof t[i] || Pi(t[i]) || (gr("Query.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        lr("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++), Pi(t[i]) ? n = t[i] : (hr("Query.onSnapshot", "function", i, t[i]), cr("Query.onSnapshot", "function", i + 1, t[i + 1]), 
        cr("Query.onSnapshot", "function", i + 2, t[i + 2]), n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.NE(this.pE), this.AE(r, n);
    }, t.prototype.AE = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Oi({
            next: function(t) {
                e.next && e.next(new Qi(n.firestore, n.pE, t, n.EE));
            },
            error: r
        }), o = this.firestore.JT(), s = o.listen(this.pE, i, t);
        return function() {
            i.BT(), o.fl(s);
        };
    }, t.prototype.NE = function(t) {
        if (t.Ke() && 0 === t.Ve.length) throw new c(h.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }, t.prototype.get = function(t) {
        var e = this;
        return ar("Query.get", arguments, 0, 1), Xi("Query.get", t), this.NE(this.pE), new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.JT().OT(e.pE).then((function(t) {
                n(new Qi(e.firestore, e.pE, t, e.EE));
            }), r) : e.mE(n, r, t);
        }));
    }, t.prototype.mE = function(t, e, n) {
        var r = this.AE({
            includeMetadataChanges: !0,
            jf: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), i.metadata.fromCache && n && "server" === n.source ? e(new c(h.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(i);
            },
            error: e
        });
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.bE = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.pE.He() && -1 !== t.indexOf("/")) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var e = this.pE.path.child(w.G(t));
            if (!b.st(e)) throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
            return Q(this.firestore.zT, new b(e));
        }
        if (t instanceof Gi) {
            var n = t;
            return Q(this.firestore.zT, n._E);
        }
        throw new c(h.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + vr(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.yE = function(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new c(h.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new c(h.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.vE = function(t) {
        if (t instanceof It) {
            var e = [ bt.ARRAY_CONTAINS, bt.ARRAY_CONTAINS_ANY ], n = [ bt.IN, bt.ARRAY_CONTAINS_ANY ], r = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.Ge()) {
                var o = this.pE.Se();
                if (null !== o && !o.isEqual(t.field)) throw new c(h.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                var s = this.pE.De();
                null !== s && this.kE(t.field, s);
            } else if (i || r) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var u = null;
                if (i && (u = this.pE.ze(n)), null === u && r && (u = this.pE.ze(e)), null != u) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw u === t.op ? new c(h.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new c(h.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
            }
        }
    }, t.prototype.SE = function(t) {
        if (null === this.pE.De()) {
            // This is the first order by. It must match any inequality.
            var e = this.pE.Se();
            null !== e && this.kE(e, t.field);
        }
    }, t.prototype.kE = function(t, e) {
        if (!e.isEqual(t)) throw new c(h.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
    }, t;
}(), Qi = /** @class */ function() {
    function t(t, e, n, r) {
        this.fE = t, this.$E = e, this.ME = n, this.EE = r, this.LE = null, this.OE = null, 
        this.metadata = new Bi(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.ME.docs.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.ME.docs.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        ar("QuerySnapshot.forEach", arguments, 1, 2), hr("QuerySnapshot.forEach", "function", 1, t), 
        this.ME.docs.forEach((function(r) {
            t.call(e, n.xE(r));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new Yi(this.$E, this.fE, this.EE);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (gr("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), lr("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.ME.ds) throw new c(h.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.LE && this.OE === e || (this.LE = 
        /**
     * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
     *
     * Exported for testing.
     */
        function(t, e, n, r) {
            if (n.cs.q()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var i = 0;
                return n.docChanges.map((function(e) {
                    var o = new Ki(t, e.doc.key, e.doc, n.fromCache, n._s.has(e.doc.key), r);
                    return e.doc, {
                        type: "added",
                        doc: o,
                        oldIndex: -1,
                        newIndex: i++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var o = n.cs;
            return n.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var i = new Ki(t, e.doc.key, e.doc, n.fromCache, n._s.has(e.doc.key), r), s = -1, u = -1;
                return 0 /* Added */ !== e.type && (s = o.indexOf(e.doc.key), o = o.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (u = (o = o.add(e.doc)).indexOf(e.doc.key)), {
                    type: $i(e.type),
                    doc: i,
                    oldIndex: s,
                    newIndex: u
                };
            }));
        }(this.fE, e, this.ME, this.EE), this.OE = e), this.LE;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw wr("isEqual", "QuerySnapshot", 1, e);
        return this.fE === e.fE && this.$E.isEqual(e.$E) && this.ME.isEqual(e.ME) && this.EE === e.EE;
    }, t.prototype.xE = function(t) {
        return new Ki(this.fE, t.key, t, this.metadata.fromCache, this.ME._s.has(t.key), this.EE);
    }, t;
}(), Zi = /** @class */ function(t) {
    function n(e, n, r) {
        var i = this;
        if ((i = t.call(this, _t.ve(e), n, r) || this).BE = e, e.length % 2 != 1) throw new c(h.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.K() + " has " + e.length);
        return i;
    }
    return e.__extends(n, t), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.pE.path.B();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.pE.path.L();
            return t.q() ? null : new Gi(new b(t), this.firestore);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.pE.path.K();
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.doc = function(t) {
        if (ar("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = be.En()), hr("CollectionReference.doc", "non-empty string", 1, t), 
        "" === t) throw new c(h.INVALID_ARGUMENT, "Document path must be a non-empty string");
        var e = w.G(t);
        return Gi.lE(this.pE.path.child(e), this.firestore, this.EE);
    }, n.prototype.add = function(t) {
        sr("CollectionReference.add", arguments, 1), hr("CollectionReference.add", "object", 1, this.EE ? this.EE.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.BE, this.firestore, t);
    }, n;
}(Yi);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function Wi(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (gr(t, e, [ "merge", "mergeFields" ]), lr(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + vr(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new c(h.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + vr(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof Dr;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new c(h.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function Hi(t, e) {
    return void 0 === e ? {} : (gr(t, e, [ "serverTimestamps" ]), pr(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Xi(t, e) {
    cr(t, "object", 1, e), e && (gr(t, e, [ "source" ]), pr(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function Ji(t, e, n) {
    if (e instanceof Gi) {
        if (e.firestore !== n) throw new c(h.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw wr(t, "DocumentReference", 1, e);
}

function $i(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return Ee();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function to(t, e, n) {
    var r;
    return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [ r, n ];
}

var eo = Ir(Mi, "Use firebase.firestore() instead."), no = Ir(ji, "Use firebase.firestore().runTransaction() instead."), ro = Ir(Fi, "Use firebase.firestore().batch() instead."), io = Ir(Gi, "Use firebase.firestore().doc() instead."), oo = Ir(zi), so = Ir(Ki), uo = Ir(Yi), ao = Ir(Qi), ho = Ir(Zi, "Use firebase.firestore().collection() instead."), co = {
    Firestore: eo,
    GeoPoint: Ur,
    Timestamp: v,
    Blob: Sr,
    Transaction: no,
    WriteBatch: ro,
    DocumentReference: io,
    DocumentSnapshot: oo,
    Query: uo,
    QueryDocumentSnapshot: so,
    QuerySnapshot: ao,
    CollectionReference: ho,
    FieldPath: Dr,
    FieldValue: Cr,
    setLogLevel: Mi.setLogLevel,
    CACHE_SIZE_UNLIMITED: Ui
}, fo = /** @class */ function() {
    function t() {}
    return t.prototype.Y_ = function(t) {
        // No-op.
    }, t.prototype.mu = function() {
        // No-op.
    }, t;
}(), lo = /** @class */ function() {
    function t() {
        var t = this;
        this.qE = function() {
            return t.UE();
        }, this.QE = function() {
            return t.WE();
        }, this.jE = [], this.KE();
    }
    return t.prototype.Y_ = function(t) {
        this.jE.push(t);
    }, t.prototype.mu = function() {
        window.removeEventListener("online", this.qE), window.removeEventListener("offline", this.QE);
    }, t.prototype.KE = function() {
        window.addEventListener("online", this.qE), window.addEventListener("offline", this.QE);
    }, t.prototype.UE = function() {
        me("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.jE; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.WE = function() {
        me("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.jE; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.ho = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), po = /** @class */ function() {
    function t(t) {
        this.GE = t.GE, this.zE = t.zE;
    }
    return t.prototype.__ = function(t) {
        this.HE = t;
    }, t.prototype.h_ = function(t) {
        this.YE = t;
    }, t.prototype.onMessage = function(t) {
        this.JE = t;
    }, t.prototype.close = function() {
        this.zE();
    }, t.prototype.send = function(t) {
        this.GE(t);
    }, t.prototype.XE = function() {
        this.HE();
    }, t.prototype.ZE = function(t) {
        this.YE(t);
    }, t.prototype.tI = function(t) {
        this.JE(t);
    }, t;
}(), yo = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, vo = "gl-js/ fire/" + u, mo = /** @class */ function() {
    function t(t) {
        this.ci = t.ci;
        var e = t.ssl ? "https" : "http";
        this.eI = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.sI = function(t, e) {
        if (e) for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
        t["X-Goog-Api-Client"] = vo;
    }, t.prototype.g_ = function(t, e, n) {
        var r = this, i = this.iI(t);
        return new Promise((function(o, u) {
            var a = new s.XhrIo;
            a.listenOnce(s.EventType.COMPLETE, (function() {
                try {
                    switch (a.getLastErrorCode()) {
                      case s.ErrorCode.NO_ERROR:
                        var e = a.getResponseJson();
                        me("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case s.ErrorCode.TIMEOUT:
                        me("Connection", 'RPC "' + t + '" timed out'), u(new c(h.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case s.ErrorCode.HTTP_ERROR:
                        var n = a.getStatus();
                        if (me("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", a.getResponseText()), 
                        n > 0) {
                            var r = a.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var i = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(h).indexOf(e) >= 0 ? e : h.UNKNOWN;
                                }(r.status);
                                u(new c(i, r.message));
                            } else u(new c(h.UNKNOWN, "Server responded with status " + a.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        me("Connection", 'RPC "' + t + '" failed'), u(new c(h.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        Ee();
                    }
                } finally {
                    me("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var f = Object.assign({}, e);
            delete f.database;
            var l = JSON.stringify(f);
            me("Connection", "XHR sending: ", i + " " + l);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var p = {
                "Content-Type": "text/plain"
            };
            r.sI(p, n), a.send(i, "POST", l, p, 15);
        }));
    }, t.prototype.y_ = function(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.g_(t, e, n);
    }, t.prototype.l_ = function(t, e) {
        var n = [ this.eI, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], r = s.createWebChannelTransport(), o = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.ci.projectId + "/databases/" + this.ci.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.sI(o.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        i.isMobileCordova() || i.isReactNative() || i.isElectron() || i.isIE() || i.isUWP() || i.isBrowserExtension() || (o.httpHeadersOverwriteParam = "$httpHeaders");
        var u = n.join("");
        me("Connection", "Creating WebChannel: " + u + " " + o);
        var a = r.createWebChannel(u, o), f = !1, l = !1, p = new po({
            GE: function(t) {
                l ? me("Connection", "Not sending because WebChannel is closed:", t) : (f || (me("Connection", "Opening WebChannel transport."), 
                a.open(), f = !0), me("Connection", "WebChannel sending:", t), a.send(t));
            },
            zE: function() {
                return a.close();
            }
        }), d = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            a.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return d(s.WebChannel.EventType.OPEN, (function() {
            l || me("Connection", "WebChannel transport opened.");
        })), d(s.WebChannel.EventType.CLOSE, (function() {
            l || (l = !0, me("Connection", "WebChannel transport closed"), p.ZE());
        })), d(s.WebChannel.EventType.ERROR, (function(t) {
            l || (l = !0, me("Connection", "WebChannel transport errored:", t), p.ZE(new c(h.UNAVAILABLE, "The operation could not be completed")));
        })), d(s.WebChannel.EventType.MESSAGE, (function(t) {
            var e;
            if (!l) {
                var n = t.data[0];
                _e(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    me("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = xt[t];
                        if (void 0 !== e) return Mt(e);
                    }(o), u = i.message;
                    void 0 === s && (s = h.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    l = !0, p.ZE(new c(s, u)), a.close();
                } else me("Connection", "WebChannel received:", n), p.tI(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            p.XE();
        }), 0), p;
    }, 
    // visible for testing
    t.prototype.iI = function(t) {
        var e = yo[t];
        return this.eI + "/v1/projects/" + this.ci.projectId + "/databases/" + this.ci.database + "/documents:" + e;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Implements the Platform API for browsers and some browser-like environments
// (including ReactNative).
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function go(t) {
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
    !function(t, e) {
        t.INTERNAL.registerComponent(new o.Component("firestore", (function(t) {
            return function(t, e) {
                return new Mi(t, e, new Li);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, co)));
    }(t), t.registerVersion("@firebase/firestore", "1.14.2")
    /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */;
}

pe.fn(new (/** @class */ function() {
    function t() {
        this.Tc = "undefined" != typeof atob;
    }
    return Object.defineProperty(t.prototype, "document", {
        get: function() {
            // `document` is not always available, e.g. in ReactNative and WebWorkers.
            // eslint-disable-next-line no-restricted-globals
            return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
        get: function() {
            // `window` is not always available, e.g. in ReactNative and WebWorkers.
            // eslint-disable-next-line no-restricted-globals
            return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.NT = function(t) {
        return Promise.resolve(new mo(t));
    }, t.prototype.yT = function() {
        return lo.ho() ? new lo : new fo;
    }, t.prototype.vT = function(t) {
        return new fe(t, {
            di: !0
        });
    }, t.prototype.Tn = function(t) {
        return JSON.stringify(t);
    }, t.prototype.atob = function(t) {
        return atob(t);
    }, t.prototype.btoa = function(t) {
        return btoa(t);
    }, t;
}())), go(n), exports.__PRIVATE_registerFirestore = go;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function() { return setUserLogHandler; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    var newLevel = typeof level === 'string' ? levelStringToEnum[level] : level;
    instances.forEach(function (inst) {
        inst.logLevel = newLevel;
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return tmp_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return tmp_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebChannel", function() { return tmp_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrIo", function() { return tmp_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function() { return tmp_1; });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g,goog=goog||{},k=commonjsGlobal;function m(a){return "string"==typeof a}function aa(a){return "number"==typeof a}function n(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function ba(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return "array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return "object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return "array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return "function"}else return "null";
else if("function"==b&&"undefined"==typeof a.call)return "object";return b}function q(a){return "array"==p(a)}function ca(a){var b=p(a);return "array"==b||"object"==b&&"number"==typeof a.length}function r(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}var t="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=ea:u=fa;return u.apply(null,arguments)}
function v(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var w=Date.now||function(){return +new Date};function x(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yb=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)};}function y(){this.j=this.j;this.i=this.i;}var ha=0;y.prototype.j=!1;y.prototype.la=function(){if(!this.j&&(this.j=!0,this.G(),0!=ha)){var a=this[t]||(this[t]=++da);}};y.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()();};var ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
function ma(a){a:{var b=na;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:m(a)?a.charAt(b):a[b]}function oa(a){return Array.prototype.concat.apply([],arguments)}function pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return []}function qa(a){return /^[\s\xa0]*$/.test(a)}var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function z(a,b){return -1!=a.indexOf(b)}function sa(a,b){return a<b?-1:a>b?1:0}var A;a:{var ta=k.navigator;if(ta){var ua=ta.userAgent;if(ua){A=ua;break a}}A="";}function va(a,b,c){for(var d in a)b.call(c,a[d],d,a);}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function za(a){za[" "](a);return a}za[" "]=ba;function Aa(a,b){var c=Ba;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var Ca=z(A,"Opera"),B=z(A,"Trident")||z(A,"MSIE"),Da=z(A,"Edge"),Ea=Da||B,Fa=z(A,"Gecko")&&!(z(A.toLowerCase(),"webkit")&&!z(A,"Edge"))&&!(z(A,"Trident")||z(A,"MSIE"))&&!z(A,"Edge"),Ga=z(A.toLowerCase(),"webkit")&&!z(A,"Edge");function Ha(){var a=k.document;return a?a.documentMode:void 0}var Ia;
a:{var Ja="",Ka=function(){var a=A;if(Fa)return /rv:([^\);]+)(\)|;)/.exec(a);if(Da)return /Edge\/([\d\.]+)/.exec(a);if(B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ga)return /WebKit\/(\S+)/.exec(a);if(Ca)return /(?:Version)[ \/]?(\S+)/.exec(a)}();Ka&&(Ja=Ka?Ka[1]:"");if(B){var La=Ha();if(null!=La&&La>parseFloat(Ja)){Ia=String(La);break a}}Ia=Ja;}var Ba={};
function Ma(a){return Aa(a,function(){for(var b=0,c=ra(String(Ia)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=sa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||sa(0==h[2].length,0==l[2].length)||sa(h[2],l[2]);h=h[3];l=l[3];}while(0==b)}return 0<=b})}var Na;var Oa=k.document;
Na=Oa&&B?Ha()||("CSS1Compat"==Oa.compatMode?parseInt(Ia,10):5):void 0;var Pa=!B||9<=Number(Na),Qa=B&&!Ma("9"),Ra=function(){if(!k.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{k.addEventListener("test",ba,b),k.removeEventListener("test",ba,b);}catch(c){}return a}();function C(a,b){this.type=a;this.a=this.target=b;this.Ia=!0;}C.prototype.b=function(){this.Ia=!1;};function D(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Fa){a:{try{za(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else "mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:Sa[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b();}}x(D,C);var Sa={2:"touch",3:"pen",4:"mouse"};D.prototype.b=function(){D.N.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};var F="closure_listenable_"+(1E6*Math.random()|0),Ta=0;function Ua(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Ta;this.X=this.Z=!1;}function Va(a){a.X=!0;a.listener=null;a.proxy=null;a.src=null;a.da=null;}function Wa(a){this.src=a;this.a={};this.b=0;}Wa.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=Xa(a,b,d,e);-1<h?(b=a[h],c||(b.Z=!1)):(b=new Ua(b,this.src,f,!!d,e),b.Z=c,a.push(b));return b};function Ya(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Va(b),0==a.a[c].length&&(delete a.a[c],a.b--));}}
function Xa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return -1}var Za="closure_lm_"+(1E6*Math.random()|0),$a={};function bb(a,b,c,d,e){if(d&&d.once)return cb(a,b,c,d,e);if(q(b)){for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.za(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!1,d,e)}
function eb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=r(e)?!!e.capture:!!e;if(h&&!Pa)return null;var l=fb(a);l||(a[Za]=l=new Wa(a));c=l.add(b,c,d,h,f);if(c.proxy)return c;d=gb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ra||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(hb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function gb(){var a=ib,b=Pa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function cb(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)cb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.Aa(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!0,d,e)}
function jb(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else (d=r(d)?!!d.capture:!!d,c=db(c),a&&a[F])?(a=a.c,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Xa(f,c,d,e),-1<c&&(Va(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=fb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Xa(b,c,d,e)),(c=-1<a?b[a]:null)&&kb(c));}
function kb(a){if(!aa(a)&&a&&!a.X){var b=a.src;if(b&&b[F])Ya(b.c,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(hb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=fb(b))?(Ya(c,a),0==c.b&&(c.src=null,b[Za]=null)):Va(a);}}}function hb(a){return a in $a?$a[a]:$a[a]="on"+a}function lb(a,b){var c=a.listener,d=a.da||a.src;a.Z&&kb(a);return c.call(d,b)}
function ib(a,b){return a.X?!0:Pa?lb(a,new D(b,this)):(b=new D(b||n("window.event"),this),lb(a,b))}function fb(a){a=a[Za];return a instanceof Wa?a:null}var mb="__closure_events_fn_"+(1E9*Math.random()>>>0);function db(a){if("function"==p(a))return a;a[mb]||(a[mb]=function(b){return a.handleEvent(b)});return a[mb]}function G(){y.call(this);this.c=new Wa(this);this.J=this;this.B=null;}x(G,y);G.prototype[F]=!0;g=G.prototype;g.addEventListener=function(a,b,c,d){bb(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){jb(this,a,b,c,d);};
g.dispatchEvent=function(a){var b,c=this.B;if(c)for(b=[];c;c=c.B)b.push(c);c=this.J;var d=a.type||a;if(m(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else {var e=a;a=new C(d,c);ya(a,e);}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.a=b[f];e=nb(h,d,!0,a)&&e;}h=a.a=c;e=nb(h,d,!0,a)&&e;e=nb(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.a=b[f],e=nb(h,d,!1,a)&&e;return e};
g.G=function(){G.N.G.call(this);if(this.c){var a=this.c,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)Va(d[e]);delete a.a[c];a.b--;}}this.B=null;};g.za=function(a,b,c,d){return this.c.add(String(a),b,!1,c,d)};g.Aa=function(a,b,c,d){return this.c.add(String(a),b,!0,c,d)};
function nb(a,b,c,d){b=a.c.a[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.X&&h.capture==c){var l=h.listener,E=h.da||h.src;h.Z&&Ya(a.c,h);e=!1!==l.call(E,d)&&e;}}return e&&0!=d.Ia}var ob=k.JSON.stringify;function pb(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}pb.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};function qb(){this.b=this.a=null;}var sb=new pb(function(){return new rb},function(a){a.reset();});qb.prototype.add=function(a,b){var c=sb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};function tb(){var a=ub,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function rb(){this.next=this.b=this.a=null;}rb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};rb.prototype.reset=function(){this.next=this.b=this.a=null;};function vb(a){k.setTimeout(function(){throw a;},0);}function wb(a,b){xb||yb();zb||(xb(),zb=!0);ub.add(a,b);}var xb;function yb(){var a=k.Promise.resolve(void 0);xb=function(){a.then(Ab);};}var zb=!1,ub=new qb;function Ab(){for(var a;a=tb();){try{a.a.call(a.b);}catch(c){vb(c);}var b=sb;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a);}zb=!1;}function Cb(a,b){G.call(this);this.b=a||1;this.a=b||k;this.f=u(this.gb,this);this.g=w();}x(Cb,G);g=Cb.prototype;g.ba=!1;g.L=null;g.gb=function(){if(this.ba){var a=w()-this.g;0<a&&a<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-a):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(Db(this),this.start()));}};g.start=function(){this.ba=!0;this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=w());};function Db(a){a.ba=!1;a.L&&(a.a.clearTimeout(a.L),a.L=null);}
g.G=function(){Cb.N.G.call(this);Db(this);delete this.a;};function Eb(a,b,c){if("function"==p(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Fb(a,b,c){y.call(this);this.f=null!=c?u(a,c):a;this.c=b;this.b=u(this.$a,this);this.a=[];}x(Fb,y);g=Fb.prototype;g.ea=!1;g.U=null;g.Ta=function(a){this.a=arguments;this.U?this.ea=!0:Gb(this);};g.G=function(){Fb.N.G.call(this);this.U&&(k.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[]);};g.$a=function(){this.U=null;this.ea&&(this.ea=!1,Gb(this));};function Gb(a){a.U=Eb(a.b,a.c);a.f.apply(null,a.a);}function H(a){y.call(this);this.b=a;this.a={};}x(H,y);var Hb=[];function Ib(a,b,c,d){q(c)||(c&&(Hb[0]=c.toString()),c=Hb);for(var e=0;e<c.length;e++){var f=bb(b,c[e],d||a.handleEvent,!1,a.b||a);if(!f)break;a.a[f.key]=f;}}function Jb(a){va(a.a,function(b,c){this.a.hasOwnProperty(c)&&kb(b);},a);a.a={};}H.prototype.G=function(){H.N.G.call(this);Jb(this);};H.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kb(){}var I=new G;function Lb(a){C.call(this,"serverreachability",a);}x(Lb,C);function J(a){I.dispatchEvent(new Lb(I,a));}function Mb(a){C.call(this,"statevent",a);}x(Mb,C);function K(a){I.dispatchEvent(new Mb(I,a));}function Nb(a){C.call(this,"timingevent",a);}x(Nb,C);function Ob(a,b){if("function"!=p(a))throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){a();},b)}var Pb={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,La:7,TIMEOUT:8,sb:9};var Qb={jb:"complete",wb:"success",Ma:"error",La:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"};function Rb(){}Rb.prototype.a=null;function Sb(a){var b;(b=a.a)||(b=a.a={});return b}function Tb(){}var L={OPEN:"a",ib:"b",Ma:"c",rb:"d"};function Ub(){C.call(this,"d");}x(Ub,C);function Vb(){C.call(this,"c");}x(Vb,C);var Wb;function Xb(){}x(Xb,Rb);Wb=new Xb;function M(a,b,c){this.g=a;this.W=b;this.V=c||1;this.I=new H(this);this.O=Yb;a=Ea?125:void 0;this.P=new Cb(a);this.h=null;this.b=!1;this.l=this.D=this.f=this.F=this.v=this.R=this.i=null;this.j=[];this.a=null;this.A=0;this.c=this.w=null;this.o=-1;this.m=!1;this.J=0;this.B=null;this.s=this.S=this.H=!1;}var Yb=45E3,Zb={},$b={};g=M.prototype;g.setTimeout=function(a){this.O=a;};function ac(a,b,c){a.F=1;a.f=bc(N(b));a.l=c;a.H=!0;cc(a,null);}function dc(a,b,c,d){a.F=1;a.f=bc(N(b));a.l=null;a.H=c;cc(a,d);}
function cc(a,b){a.v=w();ec(a);a.D=N(a.f);fc(a.D,"t",a.V);a.A=0;a.a=a.g.$(a.g.Y()?b:null);0<a.J&&(a.B=new Fb(u(a.Ja,a,a.a),a.J));Ib(a.I,a.a,"readystatechange",a.cb);b=a.h?wa(a.h):{};a.l?(a.w||(a.w="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.a.ca(a.D,a.w,a.l,b)):(a.w="GET",a.a.ca(a.D,a.w,null,b));J(1);}g.cb=function(a){a=a.target;var b=this.B;b&&3==O(a)?b.Ta():this.Ja(a);};
g.Ja=function(a){try{if(a==this.a)a:{var b=O(this.a),c=this.a.ya(),d=this.a.T();if(!(3>b||3==b&&!Ea&&!this.a.aa())){this.m||4!=b||7==c||(8==c||0>=d?J(3):J(2));gc(this);var e=this.a.T();this.o=e;var f=this.a.aa();if(this.b=200==e){if(this.S&&!this.s){b:{if(this.a){var h=hc(this.a,"X-HTTP-Initial-Response");if(h&&!qa(h)){var l=h;break b}}l=null;}if(l)this.s=!0,ic(this,l);else {this.b=!1;this.c=3;K(12);P(this);jc(this);break a}}this.H?(kc(this,b,f),Ea&&this.b&&3==b&&(Ib(this.I,this.P,"tick",this.bb),this.P.start())):
ic(this,f);4==b&&P(this);this.b&&!this.m&&(4==b?this.g.na(this):(this.b=!1,ec(this)));}else 400==e&&0<f.indexOf("Unknown SID")?(this.c=3,K(12)):(this.c=0,K(13)),P(this),jc(this);}}}catch(E){}finally{}};function kc(a,b,c){for(var d=!0;!a.m&&a.A<c.length;){var e=lc(a,c);if(e==$b){4==b&&(a.c=4,K(14),d=!1);break}else if(e==Zb){a.c=4;K(15);d=!1;break}else ic(a,e);}4==b&&0==c.length&&(a.c=1,K(16),d=!1);a.b=a.b&&d;d||(P(a),jc(a));}
g.bb=function(){if(this.a){var a=O(this.a),b=this.a.aa();this.A<b.length&&(gc(this),kc(this,a,b),this.b&&4!=a&&ec(this));}};function lc(a,b){var c=a.A,d=b.indexOf("\n",c);if(-1==d)return $b;c=Number(b.substring(c,d));if(isNaN(c))return Zb;d+=1;if(d+c>b.length)return $b;b=b.substr(d,c);a.A=d+c;return b}g.cancel=function(){this.m=!0;P(this);};function ec(a){a.R=w()+a.O;mc(a,a.O);}function mc(a,b){if(null!=a.i)throw Error("WatchDog timer not null");a.i=Ob(u(a.ab,a),b);}
function gc(a){a.i&&(k.clearTimeout(a.i),a.i=null);}g.ab=function(){this.i=null;var a=w();0<=a-this.R?(2!=this.F&&(J(3),K(17)),P(this),this.c=2,jc(this)):mc(this,this.R-a);};function jc(a){a.g.Ca()||a.m||a.g.na(a);}function P(a){gc(a);var b=a.B;b&&"function"==typeof b.la&&b.la();a.B=null;Db(a.P);Jb(a.I);a.a&&(b=a.a,a.a=null,b.abort(),b.la());}function ic(a,b){try{a.g.Fa(a,b),J(4);}catch(c){}}function nc(a){if(a.C&&"function"==typeof a.C)return a.C();if(m(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function oc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||m(a))la(a,b,void 0);else {if(a.K&&"function"==typeof a.K)var c=a.K();else if(a.C&&"function"==typeof a.C)c=void 0;else if(ca(a)||m(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e);}else for(e in c=[],d=0,a)c[d++]=e;d=nc(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}}function Q(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof Q)for(c=a.K(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}g=Q.prototype;g.C=function(){pc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.K=function(){pc(this);return this.a.concat()};
function qc(a){a.b={};a.a.length=0;a.c=0;}function rc(a,b){R(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&pc(a));}function pc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];R(a.b,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],R(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}}g.get=function(a,b){return R(this.b,a)?this.b[a]:b};g.set=function(a,b){R(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b;};
g.forEach=function(a,b){for(var c=this.K(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};function R(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var sc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function S(a,b){this.b=this.j=this.f="";this.i=null;this.g=this.a="";this.h=!1;var c;a instanceof S?(this.h=void 0!==b?b:a.h,uc(this,a.f),this.j=a.j,vc(this,a.b),wc(this,a.i),this.a=a.a,xc(this,yc(a.c)),this.g=a.g):a&&(c=String(a).match(sc))?(this.h=!!b,uc(this,c[1]||"",!0),this.j=zc(c[2]||""),vc(this,c[3]||"",!0),wc(this,c[4]),this.a=zc(c[5]||"",!0),xc(this,c[6]||"",!0),this.g=zc(c[7]||"")):(this.h=!!b,this.c=new Ac(null,this.h));}
S.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Bc(b,Cc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(Bc(b,Cc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.a)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Bc(c,"/"==c.charAt(0)?Dc:Ec,!0));(c=this.c.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Bc(c,Fc));return a.join("")};
S.prototype.resolve=function(a){var b=N(this),c=!!a.f;c?uc(b,a.f):c=!!a.j;c?b.j=a.j:c=!!a.b;c?vc(b,a.b):c=null!=a.i;var d=a.a;if(c)wc(b,a.i);else if(c=!!a.a){if("/"!=d.charAt(0))if(this.b&&!this.a)d="/"+d;else {var e=b.a.lastIndexOf("/");-1!=e&&(d=b.a.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(z(e,"./")||z(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var l=e[h++];"."==l?d&&h==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&
h==e.length&&f.push("")):(f.push(l),d=!0);}d=f.join("/");}else d=e;}c?b.a=d:c=""!==a.c.toString();c?xc(b,yc(a.c)):c=!!a.g;c&&(b.g=a.g);return b};function N(a){return new S(a)}function uc(a,b,c){a.f=c?zc(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""));}function vc(a,b,c){a.b=c?zc(b,!0):b;}function wc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b;}else a.i=null;}function xc(a,b,c){b instanceof Ac?(a.c=b,Gc(a.c,a.h)):(c||(b=Bc(b,Hc)),a.c=new Ac(b,a.h));}
function T(a,b,c){a.c.set(b,c);}function fc(a,b,c){q(c)||(c=[String(c)]);Ic(a.c,b,c);}function bc(a){T(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}function Jc(a){return a instanceof S?N(a):new S(a,void 0)}function Kc(a,b,c,d){var e=new S(null,void 0);a&&uc(e,a);b&&vc(e,b);c&&wc(e,c);d&&(e.a=d);return e}function zc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Bc(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Lc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lc(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cc=/[#\/\?@]/g,Ec=/[#\?:]/g,Dc=/[#\?]/g,Hc=/[#\?@]/g,Fc=/#/g;function Ac(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b;}function U(a){a.a||(a.a=new Q,a.b=0,a.c&&tc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}g=Ac.prototype;
g.add=function(a,b){U(this);this.c=null;a=V(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Mc(a,b){U(a);b=V(a,b);R(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,rc(a.a,b));}function Nc(a,b){U(a);b=V(a,b);return R(a.a.b,b)}g.forEach=function(a,b){U(this);this.a.forEach(function(c,d){la(c,function(e){a.call(b,e,d,this);},this);},this);};
g.K=function(){U(this);for(var a=this.a.C(),b=this.a.K(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.C=function(a){U(this);var b=[];if(m(a))Nc(this,a)&&(b=oa(b,this.a.get(V(this,a))));else {a=this.a.C();for(var c=0;c<a.length;c++)b=oa(b,a[c]);}return b};g.set=function(a,b){U(this);this.c=null;a=V(this,a);Nc(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
g.get=function(a,b){if(!a)return b;a=this.C(a);return 0<a.length?String(a[0]):b};function Ic(a,b,c){Mc(a,b);0<c.length&&(a.c=null,a.a.set(V(a,b),pa(c)),a.b+=c.length);}g.toString=function(){if(this.c)return this.c;if(!this.a)return "";for(var a=[],b=this.a.K(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.C(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h);}}return this.c=a.join("&")};
function yc(a){var b=new Ac;b.c=a.c;a.a&&(b.a=new Q(a.a),b.b=a.b);return b}function V(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Gc(a,b){b&&!a.f&&(U(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Mc(this,d),Ic(this,e,c));},a));a.f=b;}function Qc(){}function Rc(){}x(Rc,Qc);function Sc(a){this.a=a;this.b=this.h=null;this.g=!1;this.i=null;this.c=-1;this.l=this.f=null;}g=Sc.prototype;g.M=null;function Uc(a){var b=a.a.F.a;if(null!=b)K(4),b?(K(10),Vc(a.a,a,!1)):(K(11),Vc(a.a,a,!0));else {a.b=new M(a,void 0,void 0);a.b.h=a.h;b=a.a;b=Wc(b,b.Y()?a.f:null,a.i);K(4);fc(b,"TYPE","xmlhttp");var c=a.a.j,d=a.a.I;c&&d&&T(b,c,d);dc(a.b,b,!1,a.f);}}g.$=function(a){return this.a.$(a)};g.abort=function(){this.b&&(this.b.cancel(),this.b=null);this.c=-1;};g.Ca=function(){return !1};
g.Fa=function(a,b){this.c=a.o;if(0==this.M){if(!this.a.o&&(a=a.a)){var c=hc(a,"X-Client-Wire-Protocol");this.l=c?c:null;this.a.j&&(a=hc(a,"X-HTTP-Session-Id"))&&(this.a.I=a);}if(b){try{var d=this.a.ja.a.parse(b);}catch(e){b=this.a;b.m=this.c;W(b,2);return}this.f=d[0];}else b=this.a,b.m=this.c,W(b,2);}else if(1==this.M)if(this.g)K(6);else if("11111"==b){if(K(5),this.g=!0,!B||10<=Number(Na))this.c=200,this.b.cancel(),K(11),Vc(this.a,this,!0);}else K(7),this.g=!1;};
g.na=function(){this.c=this.b.o;if(this.b.b)0==this.M?(this.M=1,Uc(this)):1==this.M&&(this.g?(K(11),Vc(this.a,this,!0)):(K(10),Vc(this.a,this,!1)));else {0==this.M?K(8):1==this.M&&K(9);var a=this.a;a.m=this.c;W(a,2);}};g.Y=function(){return this.a.Y()};g.ma=function(){return this.a.ma()};function Xc(){this.a=this.b=null;}function Yc(){this.a=new Q;}function Zc(a){var b=typeof a;return "object"==b&&a||"function"==b?"o"+(a[t]||(a[t]=++da)):b.charAt(0)+a}Yc.prototype.add=function(a){this.a.set(Zc(a),a);};Yc.prototype.C=function(){return this.a.C()};function $c(a,b){this.b=a;this.a=b;}function ad(a){this.g=a||bd;k.PerformanceNavigationTiming?(a=k.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(k.ka&&k.ka.Da&&k.ka.Da()&&k.ka.Da().zb);this.f=a?this.g:1;this.a=null;1<this.f&&(this.a=new Yc);this.b=null;this.c=[];}var bd=10;function cd(a,b){!a.a&&(z(b,"spdy")||z(b,"quic")||z(b,"h2"))&&(a.f=a.g,a.a=new Yc,a.b&&(dd(a,a.b),a.b=null));}function ed(a){return a.b?!0:a.a?a.a.a.c>=a.f:!1}
function fd(a){return a.b?1:a.a?a.a.a.c:0}function gd(a,b){a.b?a=a.b==b:a.a?(b=Zc(b),a=R(a.a.a.b,b)):a=!1;return a}function dd(a,b){a.a?a.a.add(b):a.b=b;}function hd(a,b){if(a.b&&a.b==b)a.b=null;else {var c;if(c=a.a)c=Zc(b),c=R(a.a.a.b,c);c&&rc(a.a.a,Zc(b));}}ad.prototype.cancel=function(){this.c=id(this);this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(la(this.a.C(),function(a){a.cancel();}),qc(this.a.a));};
function id(a){if(null!=a.b)return a.c.concat(a.b.j);if(null!=a.a&&0!=a.a.a.c){var b=a.c;la(a.a.C(),function(c){b=b.concat(c.j);});return b}return pa(a.c)}function jd(){}jd.prototype.stringify=function(a){return k.JSON.stringify(a,void 0)};jd.prototype.parse=function(a){return k.JSON.parse(a,void 0)};function kd(){this.a=new jd;}function ld(a,b,c){var d=c||"";try{oc(a,function(e,f){var h=e;r(e)&&(h=ob(e));b.push(d+f+"="+encodeURIComponent(h));});}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;}}function md(a,b){var c=new Kb;if(k.Image){var d=new Image;d.onload=v(nd,c,d,"TestLoadImage: loaded",!0,b);d.onerror=v(nd,c,d,"TestLoadImage: error",!1,b);d.onabort=v(nd,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=v(nd,c,d,"TestLoadImage: timeout",!1,b);k.setTimeout(function(){if(d.ontimeout)d.ontimeout();},1E4);d.src=a;}else b(!1);}function nd(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d);}catch(f){}}var od=k.JSON.parse;function X(a){G.call(this);this.headers=new Q;this.H=a||null;this.b=!1;this.s=this.a=null;this.A="";this.h=0;this.f="";this.g=this.w=this.l=this.v=!1;this.o=0;this.m=null;this.I=pd;this.D=this.F=!1;}x(X,G);var pd="",qd=/^https?$/i,rd=["POST","PUT"];g=X.prototype;
g.ca=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+a);b=b?b.toUpperCase():"GET";this.A=a;this.f="";this.h=0;this.v=!1;this.b=!0;this.a=new XMLHttpRequest;this.s=this.H?Sb(this.H):Sb(Wb);this.a.onreadystatechange=u(this.Ea,this);try{this.w=!0,this.a.open(b,String(a),!0),this.w=!1;}catch(f){sd(this,f);return}a=c||"";var e=new Q(this.headers);d&&oc(d,function(f,h){e.set(h,f);});d=ma(e.K());c=k.FormData&&a instanceof k.FormData;!(0<=
ja(rd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.a.setRequestHeader(h,f);},this);this.I&&(this.a.responseType=this.I);"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{td(this),0<this.o&&((this.D=ud(this.a))?(this.a.timeout=this.o,this.a.ontimeout=u(this.Ba,this)):this.m=Eb(this.Ba,this.o,this)),this.l=!0,this.a.send(a),this.l=!1;}catch(f){sd(this,f);}};
function ud(a){return B&&Ma(9)&&aa(a.timeout)&&void 0!==a.ontimeout}function na(a){return "content-type"==a.toLowerCase()}g.Ba=function(){"undefined"!=typeof goog&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8));};function sd(a,b){a.b=!1;a.a&&(a.g=!0,a.a.abort(),a.g=!1);a.f=b;a.h=5;vd(a);wd(a);}function vd(a){a.v||(a.v=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));}
g.abort=function(a){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),wd(this));};g.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),wd(this,!0));X.N.G.call(this);};g.Ea=function(){this.j||(this.w||this.l||this.g?xd(this):this.Za());};g.Za=function(){xd(this);};
function xd(a){if(a.b&&"undefined"!=typeof goog&&(!a.s[1]||4!=O(a)||2!=a.T()))if(a.l&&4==O(a))Eb(a.Ea,0,a);else if(a.dispatchEvent("readystatechange"),4==O(a)){a.b=!1;try{var b=a.T();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.A).match(sc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;f=h.substr(0,h.length-1);}e=!qd.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),
a.dispatchEvent("success");else {a.h=6;try{var l=2<O(a)?a.a.statusText:"";}catch(E){l="";}a.f=l+" ["+a.T()+"]";vd(a);}}finally{wd(a);}}}function wd(a,b){if(a.a){td(a);var c=a.a,d=a.s[0]?ba:null;a.a=null;a.s=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){}}}function td(a){a.a&&a.D&&(a.a.ontimeout=null);a.m&&(k.clearTimeout(a.m),a.m=null);}function O(a){return a.a?a.a.readyState:0}g.T=function(){try{return 2<O(this)?this.a.status:-1}catch(a){return -1}};
g.aa=function(){try{return this.a?this.a.responseText:""}catch(a){return ""}};g.Ua=function(a){if(this.a){var b=this.a.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return od(b)}};function hc(a,b){return a.a?a.a.getResponseHeader(b):null}g.ya=function(){return this.h};g.Xa=function(){return m(this.f)?this.f:String(this.f)};function yd(a){var b="";va(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n";});return b}function zd(a,b,c){a:{for(d in c){var d=!1;break a}d=!0;}if(d)return a;c=yd(c);if(m(a)){b=encodeURIComponent(String(b));c=null!=c?"="+encodeURIComponent(String(c)):"";if(b+=c){c=a.indexOf("#");0>c&&(c=a.length);d=a.indexOf("?");if(0>d||d>c){d=c;var e="";}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2];}return a}T(a,b,c);return a}function Ad(a){this.f=[];this.F=new Xc;this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null;this.Qa=this.P=0;this.Oa=!!n("internalChannelParams.failFast",a);this.ia=this.w=this.s=this.l=this.h=this.c=null;this.oa=!0;this.m=this.ra=this.O=-1;this.S=this.v=this.A=0;this.Na=n("internalChannelParams.baseRetryDelayMs",a)||5E3;this.Ra=n("internalChannelParams.retryDelaySeedMs",a)||1E4;this.Pa=n("internalChannelParams.forwardChannelMaxRetries",a)||2;this.qa=n("internalChannelParams.forwardChannelRequestTimeoutMs",
a)||2E4;this.Ka=a&&a.Ab||void 0;this.D=void 0;this.R=a&&a.supportsCrossDomainXhr||!1;this.H="";this.b=new ad(a&&a.concurrentRequestLimit);this.ja=new kd;this.o=a&&void 0!==a.backgroundChannelTest?a.backgroundChannelTest:!0;(this.W=a&&a.fastHandshake||!1)&&!this.o&&(this.o=!0);a&&a.forceLongPolling&&(this.oa=!1);this.fa=void 0;}g=Ad.prototype;g.wa=8;g.u=1;
function Bd(a){Cd(a);if(3==a.u){var b=a.P++,c=N(a.B);T(c,"SID",a.H);T(c,"RID",b);T(c,"TYPE","terminate");Dd(a,c);b=new M(a,b,void 0);b.F=2;b.f=bc(N(c));c=!1;k.navigator&&k.navigator.sendBeacon&&(c=k.navigator.sendBeacon(b.f.toString(),""));!c&&k.Image&&((new Image).src=b.f,c=!0);c||(b.a=b.g.$(null),b.a.ca(b.f));b.v=w();ec(b);}Ed(a);}
function Cd(a){a.w&&(a.w.abort(),a.w=null);a.a&&(a.a.cancel(),a.a=null);a.l&&(k.clearTimeout(a.l),a.l=null);Fd(a);a.b.cancel();a.h&&(aa(a.h)&&k.clearTimeout(a.h),a.h=null);}function Gd(a,b){a.f.push(new $c(a.Qa++,b));3==a.u&&Hd(a);}g.Ca=function(){return 0==this.u};function Hd(a){ed(a.b)||a.h||(a.h=!0,wb(a.Ha,a),a.A=0);}
function Id(a,b){if(fd(a.b)>=a.b.f-(a.h?1:0))return !1;if(a.h)return a.f=b.j.concat(a.f),!0;if(1==a.u||2==a.u||a.A>=(a.Oa?0:a.Pa))return !1;a.h=Ob(u(a.Ha,a,b),Jd(a,a.A));a.A++;return !0}
g.Ha=function(a){if(this.h)if(this.h=null,1==this.u){if(!a){this.P=Math.floor(1E5*Math.random());a=this.P++;var b=new M(this,a,void 0),c=this.i;this.J&&(c?(c=wa(c),ya(c,this.J)):c=this.J);null===this.g&&(b.h=c);var d;if(this.W)a:{for(var e=d=0;e<this.f.length;e++){b:{var f=this.f[e];if("__data__"in f.a&&(f=f.a.__data__,m(f))){f=f.length;break b}f=void 0;}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.f.length-1){d=e+1;break a}}d=1E3;}else d=1E3;d=Kd(this,b,d);e=N(this.B);T(e,
"RID",a);T(e,"CVER",22);this.o&&this.j&&T(e,"X-HTTP-Session-Id",this.j);Dd(this,e);this.g&&c&&zd(e,this.g,c);dd(this.b,b);this.W?(T(e,"$req",d),T(e,"SID","null"),b.S=!0,ac(b,e,null)):ac(b,e,d);this.u=2;}}else 3==this.u&&(a?Ld(this,a):0==this.f.length||ed(this.b)||Ld(this));};
function Ld(a,b){var c;b?c=b.W:c=a.P++;var d=N(a.B);T(d,"SID",a.H);T(d,"RID",c);T(d,"AID",a.O);Dd(a,d);a.g&&a.i&&zd(d,a.g,a.i);c=new M(a,c,a.A+1);null===a.g&&(c.h=a.i);b&&(a.f=b.j.concat(a.f));b=Kd(a,c,1E3);c.setTimeout(Math.round(.5*a.qa)+Math.round(.5*a.qa*Math.random()));dd(a.b,c);ac(c,d,b);}function Dd(a,b){a.c&&oc({},function(c,d){T(b,d,c);});}
function Kd(a,b,c){c=Math.min(a.f.length,c);var d=a.c?u(a.c.Sa,a.c,a):null;a:for(var e=a.f,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].b,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,E=0;E<c;E++){var Bb=e[E].b,Tc=e[E].a;Bb-=f;if(0>Bb)f=Math.max(0,e[E].b-100),l=!1;else try{ld(Tc,h,"req"+Bb+"_");}catch(Ud){d&&d(Tc);}}if(l){d=h.join("&");break a}}a=a.f.splice(0,c);b.j=a;return d}function Md(a){a.a||a.l||(a.S=1,wb(a.Ga,a),a.v=0);}
function Nd(a){if(a.a||a.l||3<=a.v)return !1;a.S++;a.l=Ob(u(a.Ga,a),Jd(a,a.v));a.v++;return !0}g.Ga=function(){this.l=null;this.a=new M(this,"rpc",this.S);null===this.g&&(this.a.h=this.i);this.a.J=0;var a=N(this.pa);T(a,"RID","rpc");T(a,"SID",this.H);T(a,"CI",this.ia?"0":"1");T(a,"AID",this.O);Dd(this,a);T(a,"TYPE","xmlhttp");this.g&&this.i&&zd(a,this.g,this.i);this.D&&this.a.setTimeout(this.D);dc(this.a,a,!0,this.ga);};
function Vc(a,b,c){var d=b.l;d&&cd(a.b,d);a.ia=a.oa&&c;a.m=b.c;a.B=Wc(a,null,a.ha);Hd(a);}
g.Fa=function(a,b){if(0!=this.u&&(this.a==a||gd(this.b,a)))if(this.m=a.o,!a.s&&gd(this.b,a)&&3==this.u){try{var c=this.ja.a.parse(b);}catch(f){c=null;}if(q(c)&&3==c.length){b=c;if(0==b[0])a:{if(!this.l){if(this.a)if(this.a.v+3E3<a.v)Fd(this),this.a.cancel(),this.a=null;else break a;Nd(this);K(18);}}else this.ra=b[1],0<this.ra-this.O&&37500>b[2]&&this.ia&&0==this.v&&!this.s&&(this.s=Ob(u(this.Ya,this),6E3));if(1>=fd(this.b)&&this.fa){try{this.fa();}catch(f){}this.fa=void 0;}}else W(this,11);}else if((a.s||
this.a==a)&&Fd(this),!qa(b))for(b=c=this.ja.a.parse(b),c=0;c<b.length;c++){var d=b[c];this.O=d[0];d=d[1];if(2==this.u)if("c"==d[0]){this.H=d[1];this.ga=d[2];var e=d[3];null!=e&&(this.wa=e);d=d[5];null!=d&&aa(d)&&0<d&&(this.D=1.5*d);this.o&&(d=a.a)&&((e=hc(d,"X-Client-Wire-Protocol"))&&cd(this.b,e),this.j&&(d=hc(d,"X-HTTP-Session-Id")))&&(this.I=d,T(this.B,this.j,d));this.u=3;this.c&&this.c.va();d=a;this.pa=Wc(this,this.Y()?this.ga:null,this.ha);d.s?(hd(this.b,d),(e=this.D)&&d.setTimeout(e),d.i&&(gc(d),
ec(d)),this.a=d):Md(this);0<this.f.length&&Hd(this);}else "stop"!=d[0]&&"close"!=d[0]||W(this,7);else 3==this.u&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?W(this,7):Bd(this):"noop"!=d[0]&&this.c&&this.c.ua(d),this.v=0);}};g.Ya=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,Nd(this),K(19));};function Fd(a){null!=a.s&&(k.clearTimeout(a.s),a.s=null);}
g.na=function(a){var b=null;if(this.a==a){Fd(this);this.a=null;var c=2;}else if(gd(this.b,a))b=a.j,hd(this.b,a),c=1;else return;this.m=a.o;if(0!=this.u)if(a.b)1==c?(b=w()-a.v,I.dispatchEvent(new Nb(I,a.l?a.l.length:0,b,this.A)),Hd(this)):Md(this);else {var d=a.c;if(3==d||0==d&&0<this.m||!(1==c&&Id(this,a)||2==c&&Nd(this)))switch(b&&0<b.length&&(a=this.b,a.c=a.c.concat(b)),d){case 1:W(this,5);break;case 4:W(this,10);break;case 3:W(this,6);break;default:W(this,2);}}};
function Jd(a,b){var c=a.Na+Math.floor(Math.random()*a.Ra);a.ma()||(c*=2);return c*b}function W(a,b){if(2==b){var c=null;a.c&&(c=null);var d=u(a.eb,a);c||(c=new S("//www.google.com/images/cleardot.gif"),k.location&&"http"==k.location.protocol||uc(c,"https"),bc(c));md(c.toString(),d);}else K(2);a.u=0;a.c&&a.c.ta(b);Ed(a);Cd(a);}g.eb=function(a){a?K(2):K(1);};function Ed(a){a.u=0;a.m=-1;if(a.c){if(0!=id(a.b).length||0!=a.f.length)a.b.c.length=0,pa(a.f),a.f.length=0;a.c.sa();}}
function Wc(a,b,c){var d=Jc(c);if(""!=d.b)b&&vc(d,b+"."+d.b),wc(d,d.i);else {var e=k.location,f;b?f=b+"."+e.hostname:f=e.hostname;d=Kc(e.protocol,f,+e.port,c);}a.V&&va(a.V,function(h,l){T(d,l,h);});b=a.j;c=a.I;b&&c&&T(d,b,c);T(d,"VER",a.wa);Dd(a,d);return d}g.$=function(a){if(a&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.");a=new X(this.Ka);a.F=this.R;return a};g.ma=function(){return !!this.c&&!0};g.Y=function(){return this.R};function Od(){}g=Od.prototype;g.va=function(){};
g.ua=function(){};g.ta=function(){};g.sa=function(){};g.Sa=function(){};function Pd(a){for(var b=arguments[0],c=1;c<arguments.length;c++){var d=arguments[c];if(0==d.lastIndexOf("/",0))b=d;else {var e;(e=""==b)||(e=b.length-1,e=0<=e&&b.indexOf("/",e)==e);e?b+=d:b+="/"+d;}}return b}function Qd(){if(B&&!(10<=Number(Na)))throw Error("Environmental error: no available transport.");}Qd.prototype.a=function(a,b){return new Y(a,b)};
function Y(a,b){G.call(this);this.a=new Ad(b);this.g=a;this.m=b&&b.fb?b.fb:Pd(this.g,"test");this.b=b&&b.messageUrlParams||null;a=b&&b.messageHeaders||null;b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.a.i=a;a=b&&b.initMessageHeaders||null;b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType});b&&b.xa&&(a?a["X-WebChannel-Client-Profile"]=b.xa:a={"X-WebChannel-Client-Profile":b.xa});
this.a.J=a;(a=b&&b.httpHeadersOverwriteParam)&&!qa(a)&&(this.a.g=a);this.l=b&&b.supportsCrossDomainXhr||!1;this.h=b&&b.sendRawJson||!1;(b=b&&b.httpSessionIdParam)&&!qa(b)&&(this.a.j=b,a=this.b,null!==a&&b in a&&(a=this.b,b in a&&delete a[b]));this.f=new Z(this);}x(Y,G);g=Y.prototype;g.addEventListener=function(a,b,c,d){Y.N.addEventListener.call(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){Y.N.removeEventListener.call(this,a,b,c,d);};
g.Va=function(){this.a.c=this.f;this.l&&(this.a.R=!0);var a=this.a,b=this.m,c=this.g,d=this.b||void 0;K(0);a.ha=c;a.V=d||{};a.o&&(a.F.b=[],a.F.a=!1);a.w=new Sc(a);null===a.g&&(a.w.h=a.i);c=b;a.g&&a.i&&(c=zd(b,a.g,a.i));a=a.w;a.i=c;b=Wc(a.a,null,a.i);K(3);c=a.a.F.b;null!=c?(a.f=c[0],a.M=1,Uc(a)):(fc(b,"MODE","init"),!a.a.o&&a.a.j&&fc(b,"X-HTTP-Session-Id",a.a.j),a.b=new M(a,void 0,void 0),a.b.h=a.h,dc(a.b,b,!1,null),a.M=0);};g.close=function(){Bd(this.a);};
g.Wa=function(a){if(m(a)){var b={};b.__data__=a;Gd(this.a,b);}else this.h?(b={},b.__data__=ob(a),Gd(this.a,b)):Gd(this.a,a);};g.G=function(){this.a.c=null;delete this.f;Bd(this.a);delete this.a;Y.N.G.call(this);};function Rd(a){Ub.call(this);var b=a.__sm__;if(b){a:{for(var c in b){a=c;break a}a=void 0;}(this.c=a)?(a=this.c,this.data=null!==b&&a in b?b[a]:void 0):this.data=b;}else this.data=a;}x(Rd,Ub);function Sd(){Vb.call(this);this.status=1;}x(Sd,Vb);function Z(a){this.a=a;}x(Z,Od);Z.prototype.va=function(){this.a.dispatchEvent("a");};
Z.prototype.ua=function(a){this.a.dispatchEvent(new Rd(a));};Z.prototype.ta=function(a){this.a.dispatchEvent(new Sd(a));};Z.prototype.sa=function(){this.a.dispatchEvent("b");};var Td=v(function(a,b){function c(){}c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Qd);/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Qd.prototype.createWebChannel=Qd.prototype.a;Y.prototype.send=Y.prototype.Wa;Y.prototype.open=Y.prototype.Va;Y.prototype.close=Y.prototype.close;Pb.NO_ERROR=0;Pb.TIMEOUT=8;Pb.HTTP_ERROR=6;Qb.COMPLETE="complete";Tb.EventType=L;L.OPEN="a";L.CLOSE="b";L.ERROR="c";L.MESSAGE="d";G.prototype.listen=G.prototype.za;X.prototype.listenOnce=X.prototype.Aa;X.prototype.getLastError=X.prototype.Xa;X.prototype.getLastErrorCode=X.prototype.ya;X.prototype.getStatus=X.prototype.T;X.prototype.getResponseJson=X.prototype.Ua;
X.prototype.getResponseText=X.prototype.aa;X.prototype.send=X.prototype.ca;var tmp={createWebChannelTransport:Td,ErrorCode:Pb,EventType:Qb,WebChannel:Tb,XhrIo:X};
var tmp_1 = tmp.createWebChannelTransport;
var tmp_2 = tmp.ErrorCode;
var tmp_3 = tmp.EventType;
var tmp_4 = tmp.WebChannel;
var tmp_5 = tmp.XhrIo;

/* harmony default export */ __webpack_exports__["default"] = (tmp);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

var name = "firebase";
var version = "7.14.2";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/create/firebase-create-user.modal.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/create/firebase-create-user.modal.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This is the proper way if you have submit button outside your ion-content form (typically in the ion-header or ion-footer) -->\n<!-- (ref: https://github.com/ionic-team/ionic/issues/16661) -->\n<form class=\"create-user-form ion-page\" [formGroup]=\"createUserForm\" (ngSubmit)=\"createUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>New User</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"create-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"5\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [display]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"userData.avatar\" [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"changeUserImage()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Last name</ion-label>\n          <ion-input type=\"text\" formControlName=\"lastname\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Date of Birth</ion-label>\n          <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"birthdate\" required></ion-datetime>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Phone number</ion-label>\n          <ion-input type=\"tel\" formControlName=\"phone\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">Experience in</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{skills[i].name}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n    <section class=\"user-languages-fields fields-section\">\n      <h5 class=\"section-header\">Languages</h5>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">English</span>\n            <span class=\"range-value\">{{ changeLangValue(createUserForm.controls.english.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"english\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">Spanish</span>\n            <span class=\"range-value\">{{ changeLangValue(createUserForm.controls.spanish.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"spanish\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">French</span>\n            <span class=\"range-value\">{{ changeLangValue(createUserForm.controls.french.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"french\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n    </section>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!createUserForm.valid\">CREATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/select-image/select-user-image.modal.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/select-image/select-user-image.modal.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Select an Avatar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"select-image-content\">\n  <ion-row class=\"images-wrapper\">\n    <ion-col size=\"4\" class=\"image-item\" *ngFor=\"let avatar of avatars\">\n      <app-image-shell [display]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"avatar.link\" [alt]=\"'avatar image'\" (click)=\"dismissModal(avatar)\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/update/firebase-update-user.modal.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/update/firebase-update-user.modal.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- This is the proper way if you have submit button outside your ion-content form (typically in the ion-header or ion-footer) -->\n<!-- (ref: https://github.com/ionic-team/ionic/issues/16661) -->\n<form class=\"update-user-form ion-page\" [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"dismissModal()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Update User</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"update-user-content\">\n    <ion-row class=\"select-user-image-row\">\n      <ion-col class=\"user-image-col\" size=\"5\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [display]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"selectedAvatar\" [alt]=\"'user image'\"></app-image-shell>\n        </app-aspect-ratio>\n        <ion-button class=\"change-image-btn\" color=\"secondary\" (click)=\"changeUserImage()\">\n          <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <section class=\"user-details-fields fields-section\">\n      <ion-list class=\"inputs-list\" lines=\"full\">\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Last name</ion-label>\n          <ion-input type=\"text\" formControlName=\"lastname\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Date of Birth</ion-label>\n          <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"DD MMMM YYYY\" formControlName=\"birthdate\" required></ion-datetime>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Phone number</ion-label>\n          <ion-input type=\"tel\" formControlName=\"phone\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"input-item\">\n          <ion-label color=\"secondary\" position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section class=\"user-experience-fields fields-section\">\n      <h5 class=\"section-header\">Experience in</h5>\n      <ion-row class=\"checkbox-tags rounded-checkbox-tags\">\n        <ion-item formArrayName=\"skills\" lines=\"none\" class=\"checkbox-tag rounded-tag\" *ngFor=\"let skill of skillsFormArray.controls; let i = index;\">\n          <ion-label class=\"tag-label\">{{skills[i].name}}</ion-label>\n          <ion-checkbox [formControlName]=\"i\"></ion-checkbox>\n        </ion-item>\n      </ion-row>\n    </section>\n\n    <section class=\"user-languages-fields fields-section\">\n      <h5 class=\"section-header\">Languages</h5>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">English</span>\n            <span class=\"range-value\">{{ changeLangValue(updateUserForm.controls.english.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"english\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">Spanish</span>\n            <span class=\"range-value\">{{ changeLangValue(updateUserForm.controls.spanish.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"spanish\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-label\">French</span>\n            <span class=\"range-value\">{{ changeLangValue(updateUserForm.controls.french.value) }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"french\" color=\"secondary\" min=\"1\" max=\"10\" step=\"1\"></ion-range>\n        </ion-col>\n      </ion-row>\n    </section>\n  </ion-content>\n\n  <ion-footer>\n    <ion-row class=\"form-actions-wrapper\">\n      <ion-col>\n        <ion-button class=\"delete-btn\" expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"deleteUser()\">DELETE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"submit-btn\" expand=\"block\" color=\"secondary\" type=\"submit\" fill=\"solid\" [disabled]=\"!updateUserForm.valid\">UPDATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-footer>\n</form>\n");

/***/ }),

/***/ "./src/app/firebase/firebase-integration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/firebase/firebase-integration.module.ts ***!
  \*********************************************************/
/*! exports provided: FirebaseIntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseIntegrationModule", function() { return FirebaseIntegrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/create/firebase-create-user.modal */ "./src/app/firebase/user/create/firebase-create-user.modal.ts");
/* harmony import */ var _user_update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/update/firebase-update-user.modal */ "./src/app/firebase/user/update/firebase-update-user.modal.ts");
/* harmony import */ var _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/select-image/select-user-image.modal */ "./src/app/firebase/user/select-image/select-user-image.modal.ts");













const firebaseRoutes = [
    {
        path: 'listing',
        loadChildren: () => __webpack_require__.e(/*! import() | listing-firebase-listing-module */ "listing-firebase-listing-module").then(__webpack_require__.bind(null, /*! ./listing/firebase-listing.module */ "./src/app/firebase/listing/firebase-listing.module.ts")).then(m => m.FirebaseListingPageModule)
    },
    {
        path: 'details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | user-details-firebase-user-details-module */ "user-details-firebase-user-details-module").then(__webpack_require__.bind(null, /*! ./user/details/firebase-user-details.module */ "./src/app/firebase/user/details/firebase-user-details.module.ts")).then(m => m.FirebaseUserDetailsPageModule)
    }
];
let FirebaseIntegrationModule = class FirebaseIntegrationModule {
};
FirebaseIntegrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(firebaseRoutes),
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]
        ],
        entryComponents: [
            _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_10__["FirebaseCreateUserModal"],
            _user_update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_11__["FirebaseUpdateUserModal"],
            _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_12__["SelectUserImageModal"]
        ],
        declarations: [
            _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_10__["FirebaseCreateUserModal"],
            _user_update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_11__["FirebaseUpdateUserModal"],
            _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_12__["SelectUserImageModal"]
        ]
    })
], FirebaseIntegrationModule);



/***/ }),

/***/ "./src/app/firebase/firebase-integration.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/firebase/firebase-integration.service.ts ***!
  \**********************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listing/firebase-listing.model */ "./src/app/firebase/listing/firebase-listing.model.ts");
/* harmony import */ var _user_firebase_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/firebase-user.model */ "./src/app/firebase/user/firebase-user.model.ts");
/* harmony import */ var _user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/select-image/user-image.model */ "./src/app/firebase/user/select-image/user-image.model.ts");










let FirebaseService = class FirebaseService {
    constructor(afs) {
        this.afs = afs;
    }
    /*
      Firebase User Listing Page
    */
    getListingDataSource() {
        return this.afs.collection('users').valueChanges({ idField: 'id' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(user => {
            const age = this.calcUserAge(user.birthdate);
            return Object.assign({ age }, user);
        })));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = [
                new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](),
                new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](),
                new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](),
                new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](),
                new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](),
                new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"]()
            ];
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    // Filter users by age
    searchUsersByAge(lower, upper) {
        // we save the dateOfBirth in our DB so we need to calc the min and max dates valid for this query
        const minDate = (dayjs__WEBPACK_IMPORTED_MODULE_5__(Date.now()).subtract(upper, 'year')).unix();
        const maxDate = (dayjs__WEBPACK_IMPORTED_MODULE_5__(Date.now()).subtract(lower, 'year')).unix();
        const listingCollection = this.afs.collection('users', ref => ref.orderBy('birthdate').startAt(minDate).endAt(maxDate));
        return listingCollection.valueChanges({ idField: 'id' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(user => {
            const age = this.calcUserAge(user.birthdate);
            return Object.assign({ age }, user);
        })));
    }
    /*
      Firebase User Details Page
    */
    // Concat the userData with the details of the userSkills (from the skills collection)
    getCombinedUserDataSource(userId) {
        return this.getUser(userId)
            .pipe(
        // Transformation operator: Map each source value (user) to an Observable (combineDataSources | throwError) which
        // is merged in the output Observable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(user => {
            if (user && user.skills) {
                // Map each skill id and get the skill data as an Observable
                const userSkillsObservables = user.skills.map(skill => {
                    return this.getSkill(skill).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
                });
                // Combination operator: Take the most recent value from both input sources (of(user) & forkJoin(userSkillsObservables)),
                // and transform those emitted values into one value ([userDetails, userSkills])
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(user),
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(userSkillsObservables)
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([userDetails, userSkills]) => {
                    // Spread operator (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
                    return Object.assign({}, userDetails, { skills: userSkills });
                }));
            }
            else {
                // Throw error
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('User does not have any skills.');
            }
        }));
    }
    getCombinedUserStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _user_firebase_user_model__WEBPACK_IMPORTED_MODULE_8__["FirebaseCombinedUserModel"]();
        this.combinedUserDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.combinedUserDataStore.load(dataSource);
        return this.combinedUserDataStore;
    }
    // tslint:disable-next-line:max-line-length
    getRelatedUsersDataSource(combinedUserDataSource) {
        return combinedUserDataSource
            .pipe(
        // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(user => !user.isShell), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(user => {
            if (user && user.skills) {
                // Get all users with at least 1 skill in common
                const relatedUsersObservable = this.getUsersWithSameSkill(user.id, user.skills);
                return relatedUsersObservable;
            }
            else {
                // Throw error
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Could not get related user');
            }
        }));
    }
    getRelatedUsersStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = [
            new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](),
            new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](),
            new _listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"]()
        ];
        this.relatedUsersDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.relatedUsersDataStore.load(dataSource);
        return this.relatedUsersDataStore;
    }
    /*
      Firebase Create User Modal
    */
    createUser(userData) {
        return this.afs.collection('users').add(Object.assign({}, userData));
    }
    /*
      Firebase Update User Modal
    */
    updateUser(userData) {
        return this.afs.collection('users').doc(userData.id).set(userData);
    }
    deleteUser(userKey) {
        return this.afs.collection('users').doc(userKey).delete();
    }
    /*
      Firebase Select User Image Modal
    */
    getAvatarsDataSource() {
        return this.afs.collection('avatars').valueChanges();
    }
    getAvatarsStore(dataSource) {
        // Use cache if available
        if (!this.avatarsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = [
                new _user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_9__["UserImageModel"](),
                new _user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_9__["UserImageModel"](),
                new _user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_9__["UserImageModel"](),
                new _user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_9__["UserImageModel"](),
                new _user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_9__["UserImageModel"]()
            ];
            this.avatarsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.avatarsDataStore.load(dataSource);
        }
        return this.avatarsDataStore;
    }
    /*
      FireStore utility methods
    */
    // Get list of all available Skills (used in the create and update modals)
    getSkills() {
        return this.afs.collection('skills').valueChanges({ idField: 'id' });
    }
    // Get data of a specific Skill
    getSkill(skillId) {
        return this.afs.doc('skills/' + skillId)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(a => {
            const data = a.payload.data();
            const id = a.payload.id;
            return Object.assign({ id }, data);
        }));
    }
    // Get data of a specific User
    getUser(userId) {
        return this.afs.doc('users/' + userId)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(a => {
            const userData = a.payload.data();
            const id = a.payload.id;
            const age = userData ? this.calcUserAge(userData.birthdate) : 0;
            return Object.assign({ id, age }, userData);
        }));
    }
    // Get all users who share at least 1 skill of the user's 'skills' list
    getUsersWithSameSkill(userId, skills) {
        // Get the users who have at least 1 skill in common
        // Because firestore doesn't have a logical 'OR' operator we need to create multiple queries, one for each skill from the 'skills' list
        const queries = skills.map(skill => {
            return this.afs.collection('users', ref => ref
                .where('skills', 'array-contains', skill.id))
                .valueChanges({ idField: 'id' });
        });
        // Combine all these queries
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(queries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((relatedUsers) => {
            // Flatten the array of arrays of FirebaseListingItemModel
            const flattenedRelatedUsers = [].concat(...relatedUsers);
            // Removes duplicates from the array of FirebaseListingItemModel objects.
            // Also remove the original user (userId)
            const filteredRelatedUsers = flattenedRelatedUsers
                .reduce((accumulatedUsers, user) => {
                if ((accumulatedUsers.findIndex(accumulatedUser => accumulatedUser.id === user.id) < 0) && (user.id !== userId)) {
                    return [...accumulatedUsers, user];
                }
                else {
                    // If the user doesn't pass the test, then don't add it to the filtered users array
                    return accumulatedUsers;
                }
            }, []);
            return filteredRelatedUsers;
        }));
    }
    calcUserAge(dateOfBirth) {
        return dayjs__WEBPACK_IMPORTED_MODULE_5__(Date.now()).diff(dayjs__WEBPACK_IMPORTED_MODULE_5__["unix"](dateOfBirth), 'year');
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], FirebaseService);



/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.model.ts":
/*!************************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.model.ts ***!
  \************************************************************/
/*! exports provided: FirebaseListingItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingItemModel", function() { return FirebaseListingItemModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


class FirebaseListingItemModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/app/firebase/user/create/firebase-create-user.modal.ts":
/*!********************************************************************!*\
  !*** ./src/app/firebase/user/create/firebase-create-user.modal.ts ***!
  \********************************************************************/
/*! exports provided: FirebaseCreateUserModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCreateUserModal", function() { return FirebaseCreateUserModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-user.model */ "./src/app/firebase/user/firebase-user.model.ts");
/* harmony import */ var _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select-image/select-user-image.modal */ "./src/app/firebase/user/select-image/select-user-image.modal.ts");









let FirebaseCreateUserModal = class FirebaseCreateUserModal {
    constructor(modalController, firebaseService) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.userData = new _firebase_user_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserModel"]();
        this.skills = [];
    }
    ngOnInit() {
        // default image
        this.userData.avatar = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
        this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_5__["CheckboxCheckedValidator"].minSelectedCheckboxes(1)),
            spanish: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            english: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            french: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.firebaseService.getSkills().subscribe(skills => {
            this.skills = skills;
            // create skill checkboxes
            this.skills.map(() => {
                this.createUserForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
            });
        });
    }
    get skillsFormArray() { return this.createUserForm.get('skills'); }
    changeLangValue(value) {
        switch (true) {
            case (value <= 3):
                return 'Novice';
            case (value > 3 && value <= 6):
                return 'Competent';
            case (value > 6):
                return 'Expert';
        }
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    createUser() {
        this.userData.name = this.createUserForm.value.name;
        this.userData.lastname = this.createUserForm.value.lastname;
        this.userData.birthdate = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.createUserForm.value.birthdate).unix(); // save it in timestamp
        this.userData.phone = this.createUserForm.value.phone;
        this.userData.email = this.createUserForm.value.email;
        this.userData.languages.spanish = this.createUserForm.value.spanish;
        this.userData.languages.english = this.createUserForm.value.english;
        this.userData.languages.french = this.createUserForm.value.french;
        // get the ids of the selected skills
        const selectedSkills = [];
        this.createUserForm.value.skills
            .map((value, index) => {
            if (value) {
                selectedSkills.push(this.skills[index].id);
            }
        });
        this.userData.skills = selectedSkills;
        this.firebaseService.createUser(this.userData)
            .then(() => {
            this.dismissModal();
        });
    }
    changeUserImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_8__["SelectUserImageModal"]
            });
            modal.onDidDismiss().then(avatar => {
                if (avatar.data != null) {
                    this.userData.avatar = avatar.data.link;
                }
            });
            yield modal.present();
        });
    }
};
FirebaseCreateUserModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] }
];
FirebaseCreateUserModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firebase-create-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firebase-create-user.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/create/firebase-create-user.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-create-user.modal.scss */ "./src/app/firebase/user/create/styles/firebase-create-user.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-create-user.shell.scss */ "./src/app/firebase/user/create/styles/firebase-create-user.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]])
], FirebaseCreateUserModal);



/***/ }),

/***/ "./src/app/firebase/user/create/styles/firebase-create-user.modal.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/create/styles/firebase-create-user.modal.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.create-user-content {\n  --background: var(--page-background);\n}\n\n.create-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.create-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.create-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.create-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9jcmVhdGUvc3R5bGVzL2ZpcmViYXNlLWNyZWF0ZS11c2VyLm1vZGFsLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FESUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNISjs7QURLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNIUjs7QURPSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ05OOztBRFFNO0VBQ0UsZUFBQTtBQ05SOztBRFdFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1RKOztBRFdJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNUTjs7QURjSTtFQUNFLCtCQUFBO0FDWk47O0FEZUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ2JOOztBRGtCSTtFQUNFLCtEQUFBO0VFeEVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QURsQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDb0JSOztBRGhCTTtFQUNFLDJDQUFBO0FDa0JSOztBRGhCUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FDa0JWOztBRGhCVTtFQUNFLHdDQUFBO0FDa0JaOztBRFhFO0VBQ0UsbUJBQUE7QUNhSjs7QURYSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDV047O0FEVE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ1dSOztBRFRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1dWOztBRFJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1VWOztBRE5NO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FEQUE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZ1wiO1xuXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG59XG5cbi5jcmVhdGUtdXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICB3aWR0aDogNGNoO1xuICAgICAgaGVpZ2h0OiA0Y2g7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1leHBlcmllbmNlLWZpZWxkcyB7XG4gICAgLmNoZWNrYm94LXRhZ3Mge1xuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAgIC5jaGVja2JveC10YWcge1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIC5yYW5nZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG5cbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLmNyZWF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmNyZWF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uY3JlYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5jcmVhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IDBweDtcbn0iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xuICAvLyBEZWZhdWx0IHZhbHVlc1xuICAtLWNoZWNrYm94LXRhZy1jb2xvcjogIzAwMDtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogIzAwMDtcblxuXHQuY2hlY2tib3gtdGFnIHtcbiAgICAvLyBSZXNldCB2YWx1ZXMgZnJvbSBJb25pYyAoaW9uLWl0ZW0pIHN0eWxlc1xuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcblx0XHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDhweDtcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xuXG4gICAgJi5yb3VuZGVkLXRhZyB7XG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDIuMnJlbTtcblx0XHR9XG5cblx0XHQmLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcblx0XHR9XG5cbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAudGFnLWxhYmVsIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgSW9uaWMgZGVmYXVsdCBzdHlsZVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuXHRcdC50YWctbGFiZWwge1xuXHRcdFx0bWFyZ2luOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblxuXHRcdGlvbi1jaGVja2JveCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdC8vIFRvIGhpZGUgdGhlIC5jaGVja2JveC1pY29uXG5cdFx0XHR3aWR0aDogMHB4O1xuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMHB4O1xuXHRcdFx0Ly8gV2UgY2FudCBzZXQgd2lkdGggYW5kIGhlaWdodCBmb3IgLmNoZWNrYm94LWljb24gLmNoZWNrYm94LWlubmVyLCBzbyBsZXRzIGhpZGUgaXQgY2hhbmdpbmcgaXRzIGNvbG9yXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/firebase/user/create/styles/firebase-create-user.shell.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/create/styles/firebase-create-user.shell.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9jcmVhdGUvc3R5bGVzL2ZpcmViYXNlLWNyZWF0ZS11c2VyLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9jcmVhdGUvc3R5bGVzL2ZpcmViYXNlLWNyZWF0ZS11c2VyLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/firebase/user/firebase-user.model.ts":
/*!******************************************************!*\
  !*** ./src/app/firebase/user/firebase-user.model.ts ***!
  \******************************************************/
/*! exports provided: FirebaseSkillModel, FirebaseUserModel, FirebaseCombinedUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseSkillModel", function() { return FirebaseSkillModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCombinedUserModel", function() { return FirebaseCombinedUserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");


class FirebaseSkillModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}
class FirebaseUserModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.skills = [
            '',
            '',
            ''
        ];
        this.languages = {
            spanish: 0,
            english: 0,
            french: 0
        };
    }
}
class FirebaseCombinedUserModel extends FirebaseUserModel {
    constructor() {
        super();
        this.skills = [
            new FirebaseSkillModel(),
            new FirebaseSkillModel(),
            new FirebaseSkillModel()
        ];
    }
}


/***/ }),

/***/ "./src/app/firebase/user/select-image/select-user-image.modal.ts":
/*!***********************************************************************!*\
  !*** ./src/app/firebase/user/select-image/select-user-image.modal.ts ***!
  \***********************************************************************/
/*! exports provided: SelectUserImageModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUserImageModal", function() { return SelectUserImageModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let SelectUserImageModal = class SelectUserImageModal {
    constructor(modalController, firebaseService) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
    }
    get isShell() {
        return (this.avatars && this.avatars.isShell) ? true : false;
    }
    ngOnInit() {
        const dataSource = this.firebaseService.getAvatarsDataSource();
        const dataStore = this.firebaseService.getAvatarsStore(dataSource);
        dataStore.state.subscribe((state) => {
            this.avatars = state;
        }, (error) => { });
    }
    dismissModal(avatar) {
        this.modalController.dismiss(avatar);
    }
};
SelectUserImageModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SelectUserImageModal.prototype, "isShell", null);
SelectUserImageModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-user-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-user-image.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/select-image/select-user-image.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/select-user-image.modal.scss */ "./src/app/firebase/user/select-image/styles/select-user-image.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/select-user-image.shell.scss */ "./src/app/firebase/user/select-image/styles/select-user-image.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], SelectUserImageModal);



/***/ }),

/***/ "./src/app/firebase/user/select-image/styles/select-user-image.modal.scss":
/*!********************************************************************************!*\
  !*** ./src/app/firebase/user/select-image/styles/select-user-image.modal.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.select-image-content {\n  --background: var(--page-background);\n}\n\n.select-image-content .images-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2UubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLm1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDREY7O0FESUE7RUFDRSxvQ0FBQTtBQ0RGOztBREdFO0VBQ0UsdURBQUE7RUFFQSxxQ0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBDdXN0b20gdmFyaWFibGVzXG4vLyAvLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlbGVjdC1pbWFnZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5pbWFnZXMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlbGVjdC1pbWFnZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLnNlbGVjdC1pbWFnZS1jb250ZW50IC5pbWFnZXMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59Il19 */");

/***/ }),

/***/ "./src/app/firebase/user/select-image/styles/select-user-image.shell.scss":
/*!********************************************************************************!*\
  !*** ./src/app/firebase/user/select-image/styles/select-user-image.shell.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2Uuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9zZWxlY3QtaW1hZ2Uvc3R5bGVzL3NlbGVjdC11c2VyLWltYWdlLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/firebase/user/select-image/user-image.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/firebase/user/select-image/user-image.model.ts ***!
  \****************************************************************/
/*! exports provided: UserImageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImageModel", function() { return UserImageModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shell/data-store */ "./src/app/shell/data-store.ts");


class UserImageModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/app/firebase/user/update/firebase-update-user.modal.ts":
/*!********************************************************************!*\
  !*** ./src/app/firebase/user/update/firebase-update-user.modal.ts ***!
  \********************************************************************/
/*! exports provided: FirebaseUpdateUserModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUpdateUserModal", function() { return FirebaseUpdateUserModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validators/checkbox-checked.validator */ "./src/app/validators/checkbox-checked.validator.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase-user.model */ "./src/app/firebase/user/firebase-user.model.ts");
/* harmony import */ var _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-image/select-user-image.modal */ "./src/app/firebase/user/select-image/select-user-image.modal.ts");










let FirebaseUpdateUserModal = class FirebaseUpdateUserModal {
    constructor(modalController, alertController, firebaseService, router, ngZone) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.firebaseService = firebaseService;
        this.router = router;
        this.ngZone = ngZone;
        this.skills = [];
    }
    ngOnInit() {
        this.selectedAvatar = this.user.avatar;
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](dayjs__WEBPACK_IMPORTED_MODULE_5__["unix"](this.user.birthdate).format('DD/MMMM/YYYY'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_6__["CheckboxCheckedValidator"].minSelectedCheckboxes(1)),
            spanish: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.languages.spanish),
            english: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.languages.english),
            french: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.languages.french)
        });
        this.firebaseService.getSkills().subscribe(skills => {
            this.skills = skills;
            // create skill checkboxes
            this.skills.map((skill) => {
                let userSkillsIds = [];
                if (this.user.skills) {
                    userSkillsIds = this.user.skills.map(function (skillId) {
                        return skillId['id'];
                    });
                }
                // set the control value to 'true' if the user already has this skill
                const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](userSkillsIds.includes(skill.id));
                this.updateUserForm.controls.skills.push(control);
            });
        });
    }
    get skillsFormArray() { return this.updateUserForm.get('skills'); }
    changeLangValue(value) {
        switch (true) {
            case (value <= 3):
                return 'Novice';
            case (value > 3 && value <= 6):
                return 'Competent';
            case (value > 6):
                return 'Expert';
        }
    }
    dismissModal() {
        this.modalController.dismiss();
    }
    deleteUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do you want to delete ' + this.user.name + '?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => { }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.firebaseService.deleteUser(this.user.id)
                                .then(() => {
                                this.dismissModal();
                                this.ngZone.run(() => this.router.navigate(['firebase/listing'])).then();
                            }, err => console.log(err));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateUser() {
        this.user.avatar = this.selectedAvatar;
        this.user.name = this.updateUserForm.value.name;
        this.user.lastname = this.updateUserForm.value.lastname;
        this.user.birthdate = dayjs__WEBPACK_IMPORTED_MODULE_5__(this.updateUserForm.value.birthdate).unix(); // save it in timestamp
        this.user.phone = this.updateUserForm.value.phone;
        this.user.email = this.updateUserForm.value.email;
        this.user.languages.spanish = this.updateUserForm.value.spanish;
        this.user.languages.english = this.updateUserForm.value.english;
        this.user.languages.french = this.updateUserForm.value.french;
        // get the ids of the selected skills
        const selectedSkills = [];
        this.updateUserForm.value.skills
            .map((value, index) => {
            if (value) {
                selectedSkills.push(this.skills[index].id);
            }
        });
        this.user.skills = selectedSkills;
        const _a = this.user, { age } = _a, userData = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["age"]); // we don't want to save the age in the DB because is something that changes over time
        this.firebaseService.updateUser(userData)
            .then(() => this.modalController.dismiss(), err => console.log(err));
    }
    changeUserImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_9__["SelectUserImageModal"]
            });
            modal.onDidDismiss().then(avatar => {
                if (avatar.data != null) {
                    this.selectedAvatar = avatar.data.link;
                }
            });
            yield modal.present();
        });
    }
};
FirebaseUpdateUserModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _firebase_user_model__WEBPACK_IMPORTED_MODULE_8__["FirebaseUserModel"])
], FirebaseUpdateUserModal.prototype, "user", void 0);
FirebaseUpdateUserModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firebase-update-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firebase-update-user.modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/update/firebase-update-user.modal.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-update-user.modal.scss */ "./src/app/firebase/user/update/styles/firebase-update-user.modal.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/firebase-update-user.shell.scss */ "./src/app/firebase/user/update/styles/firebase-update-user.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], FirebaseUpdateUserModal);



/***/ }),

/***/ "./src/app/firebase/user/update/styles/firebase-update-user.modal.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/update/styles/firebase-update-user.modal.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.update-user-content {\n  --background: var(--page-background);\n}\n\n.update-user-content .select-user-image-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.update-user-content .select-user-image-row .user-image-col {\n  margin: 0px auto;\n  position: relative;\n}\n\n.update-user-content .select-user-image-row .user-image-col .user-image {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.update-user-content .select-user-image-row .change-image-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.update-user-content .select-user-image-row .change-image-btn .btn-icon {\n  font-size: 26px;\n}\n\n.update-user-content .fields-section {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.update-user-content .fields-section .section-header {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.update-user-content .user-details-fields .inputs-list {\n  padding: 0px var(--page-margin);\n}\n\n.update-user-content .user-details-fields .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.rounded-tag {\n  --border-radius: 2.2rem;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled {\n  opacity: 0.5;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag.item-interactive-disabled .tag-label {\n  opacity: 1;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag .tag-label {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag ion-checkbox {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags .checkbox-tag {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags {\n  background-color: var(--ion-color-lightest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.update-user-content .user-experience-fields .checkbox-tags.rounded-checkbox-tags .checkbox-tag.item-checkbox-checked {\n  --border-color: var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields {\n  padding-bottom: 0px;\n}\n\n.update-user-content .user-languages-fields .range-item-row {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.update-user-content .user-languages-fields .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper .submit-btn {\n  margin: 0px;\n}\n\n.form-actions-wrapper .delete-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci91cGRhdGUvc3R5bGVzL2ZpcmViYXNlLXVwZGF0ZS11c2VyLm1vZGFsLnNjc3MiLCIvVXNlcnMvZGF5YW5hL3dvcmsvaW9uaWMvdGVtcGxhdGVzL2lvbjRmdWxscHdhL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FESUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUNISjs7QURLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUNIUjs7QURPSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ05OOztBRFFNO0VBQ0UsZUFBQTtBQ05SOztBRFdFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQ1RKOztBRFdJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNUTjs7QURjSTtFQUNFLCtCQUFBO0FDWk47O0FEZUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ2JOOztBRGtCSTtFQUNFLCtEQUFBO0VFeEVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QURsQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FDb0JSOztBRGhCTTtFQUNFLDJDQUFBO0FDa0JSOztBRGhCUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FDa0JWOztBRGhCVTtFQUNFLHdDQUFBO0FDa0JaOztBRFhFO0VBQ0UsbUJBQUE7QUNhSjs7QURYSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FDV047O0FEVE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ1dSOztBRFRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1dWOztBRFJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQ1VWOztBRE5NO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FEQUE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZ1wiO1xuXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLWJhY2tncm91bmQtc2hhZGU6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLXRhZ3MtZ3V0dGVyOiA1cHg7XG59XG5cbi51cGRhdGUtdXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC5zZWxlY3QtdXNlci1pbWFnZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICB3aWR0aDogNGNoO1xuICAgICAgaGVpZ2h0OiA0Y2g7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWVsZHMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XG4gICAgLmlucHV0cy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cblxuICAudXNlci1leHBlcmllbmNlLWZpZWxkcyB7XG4gICAgLmNoZWNrYm94LXRhZ3Mge1xuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xuXG4gICAgICBAaW5jbHVkZSBjaGVja2JveC10YWcoKTtcblxuICAgICAgLmNoZWNrYm94LXRhZyB7XG4gICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xuICAgICAgJi5yb3VuZGVkLWNoZWNrYm94LXRhZ3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuXG4gICAgICAgIC5jaGVja2JveC10YWcge1xuICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAgICAgICAgICYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgIC5yYW5nZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAgIC5yYW5nZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAgIC5yYW5nZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG5cbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tYWN0aW9ucy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5kZWxldGUtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtdGFncy1ndXR0ZXI6IDVweDtcbn1cblxuLnVwZGF0ZS11c2VyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC51c2VyLWltYWdlLWNvbCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5zZWxlY3QtdXNlci1pbWFnZS1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnNlbGVjdC11c2VyLWltYWdlLXJvdyAuY2hhbmdlLWltYWdlLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbiAgbWFyZ2luOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IC5jaGFuZ2UtaW1hZ2UtYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGJvcmRlci1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgc29saWQgdmFyKC0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC5maWVsZHMtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWRldGFpbHMtZmllbGRzIC5pbnB1dHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1kZXRhaWxzLWZpZWxkcyAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpKTtcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XG4gIC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogI0ZGRjtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctY29sb3IpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5yb3VuZGVkLXRhZyB7XG4gIC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZy5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIC50YWctbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3MgLmNoZWNrYm94LXRhZyAudGFnLWxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLWZpZWxkcyAuY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIGlvbi1jaGVja2JveCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLS1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS10YWdzLWd1dHRlcikgMHB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIC5jaGVja2JveC10YWdzLnJvdW5kZWQtY2hlY2tib3gtdGFncyAuY2hlY2tib3gtdGFnIHtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS1maWVsZHMgLmNoZWNrYm94LXRhZ3Mucm91bmRlZC1jaGVja2JveC10YWdzIC5jaGVja2JveC10YWcuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnVwZGF0ZS11c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyAucmFuZ2UtaXRlbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4udXBkYXRlLXVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtZmllbGRzIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi51cGRhdGUtdXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy1maWVsZHMgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIgLnN1Ym1pdC1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5mb3JtLWFjdGlvbnMtd3JhcHBlciAuZGVsZXRlLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufSIsIkBtaXhpbiBjaGVja2JveC10YWcoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tY2hlY2tib3gtdGFnLWNvbG9yOiAjMDAwO1xuICAtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XG4gIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMDAwO1xuXG5cdC5jaGVja2JveC10YWcge1xuICAgIC8vIFJlc2V0IHZhbHVlcyBmcm9tIElvbmljIChpb24taXRlbSkgc3R5bGVzXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuXHRcdC0taW5uZXItcGFkZGluZy1zdGFydDogOHB4O1xuXHRcdC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XG5cbiAgICAmLnJvdW5kZWQtdGFnIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xuXHRcdH1cblxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kKTtcbiAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3IpO1xuXHRcdH1cblxuICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIC50YWctbGFiZWwge1xuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG5cdFx0LnRhZy1sYWJlbCB7XG5cdFx0XHRtYXJnaW46IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXG5cdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHQtLWJvcmRlci13aWR0aDogMHB4O1xuXHRcdFx0aGVpZ2h0OiAwcHg7XG5cdFx0XHQvLyBXZSBjYW50IHNldCB3aWR0aCBhbmQgaGVpZ2h0IGZvciAuY2hlY2tib3gtaWNvbiAuY2hlY2tib3gtaW5uZXIsIHNvIGxldHMgaGlkZSBpdCBjaGFuZ2luZyBpdHMgY29sb3Jcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/firebase/user/update/styles/firebase-update-user.shell.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/firebase/user/update/styles/firebase-update-user.shell.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXlhbmEvd29yay9pb25pYy90ZW1wbGF0ZXMvaW9uNGZ1bGxwd2Evc3JjL2FwcC9maXJlYmFzZS91c2VyL3VwZGF0ZS9zdHlsZXMvZmlyZWJhc2UtdXBkYXRlLXVzZXIuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci91cGRhdGUvc3R5bGVzL2ZpcmViYXNlLXVwZGF0ZS11c2VyLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci91cGRhdGUvc3R5bGVzL2ZpcmViYXNlLXVwZGF0ZS11c2VyLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shell/data-store.ts":
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/*! exports provided: ShellModel, DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModel", function() { return ShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");




class ShellModel {
    constructor() {
        this.isShell = false;
    }
}
class DataStore {
    constructor(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, { isShell: true })));
    }
    load(dataSourceObservable) {
        const dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable
            .subscribe((dataValue) => {
            this.timeline.next(dataValue);
        });
    }
    get state() {
        return this.timeline.asObservable();
    }
}


/***/ }),

/***/ "./src/app/validators/checkbox-checked.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/validators/checkbox-checked.validator.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxCheckedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function() { return CheckboxCheckedValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CheckboxCheckedValidator {
    static minSelectedCheckboxes(min) {
        const validator = (formArray) => {
            const totalSelected = formArray.controls
                // get a list of checkbox values (boolean)
                .map(control => control.value)
                // total up the number of checked checkboxes
                .reduce((prev, next) => next ? prev + next : prev, 0);
            // if the total is not greater than the minimum, return the error message
            return totalSelected >= min ? null : { required: true };
        };
        return validator;
    }
}


/***/ })

}]);
//# sourceMappingURL=firebase-firebase-integration-module-es2015.js.map