webpackJsonp(["main"],{

/***/ "./ui-app lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ui-app lazy recursive";

/***/ }),

/***/ "./ui-app/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./ui-app/js/app.component.pug":
/***/ (function(module, exports) {

module.exports = "<sidebar-left></sidebar-left><main><topbar></topbar><div class=\"content\"><router-outlet></router-outlet></div></main>"

/***/ }),

/***/ "./ui-app/js/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: __webpack_require__("./ui-app/js/app.component.pug")
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./ui-app/js/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./ui-app/js/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./ui-app/js/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./ui-app/js/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_component__ = __webpack_require__("./ui-app/js/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_layout_module__ = __webpack_require__("./ui-app/js/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__ = __webpack_require__("./ui-app/js/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hotel_hotel_module__ = __webpack_require__("./ui-app/js/hotel/hotel.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { RebootUIModule } from '../../node_modules/reboot-ui/js2';








var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */], data: { breadcrumb: 'Dashboard', title: 'Dashboard' } },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_10__page_not_found_component__["a" /* PageNotFoundComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            // RebootUIModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_11__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_13__hotel_hotel_module__["a" /* HotelModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./ui-app/js/dashboard/dashboard.component.pug":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>"

/***/ }),

/***/ "./ui-app/js/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("./ui-app/js/dashboard/dashboard.component.pug"),
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./ui-app/js/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./ui-app/js/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("./ui-app/js/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_router_can_activate_service__ = __webpack_require__("./ui-app/js/shared/services/router-can-activate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ROUTES = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
        data: { breadcrumb: 'Dashboard', title: 'Dashboard' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_services_router_can_activate_service__["a" /* RounterCanActivateService */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__shared_services_router_can_activate_service__["a" /* RounterCanActivateService */]],
    }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot(ROUTES)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]
        ],
        providers: []
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel-index.component.pug":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2><pre>{{queryParams | json}}</pre><div *ngIf=\"size\" @slideInDown><h3 class=\"text-primary\">Total: {{size}}</h3><table class=\"table table-hover\"><thead><tr><th>ID</th><th>Name</th><th>Address</th><th>Zip</th></tr></thead><tbody><tr *ngFor=\"let hotel of hotels\"><td>{{hotel.id}}</td><td>{{hotel.name}}</td><td>{{hotel.address}}</td><td>{{hotel.zip}}</td></tr></tbody></table></div>"

/***/ }),

/***/ "./ui-app/js/hotel/hotel-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("./ui-app/js/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_slide__ = __webpack_require__("./ui-app/js/shared/animations/slide.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelIndexComponent = (function () {
    function HotelIndexComponent(hotelService, route) {
        this.hotelService = hotelService;
        this.route = route;
    }
    HotelIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.route.snapshot.data.title;
        this.queryParams = this.route.snapshot.queryParams;
        this.hotelService.list()
            .subscribe(function (response) {
            _this.hotels = response;
            _this.size = response.length;
        });
    };
    return HotelIndexComponent;
}());
HotelIndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hotel-index',
        template: __webpack_require__("./ui-app/js/hotel/hotel-index.component.pug"),
        animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations_slide__["a" /* slideInDown */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* HotelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* HotelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], HotelIndexComponent);

var _a, _b;
//# sourceMappingURL=hotel-index.component.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__("./ui-app/js/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotelResolveService = (function () {
    function HotelResolveService(service, router) {
        this.service = service;
        this.router = router;
    }
    HotelResolveService.prototype.resolve = function (route) {
        var _this = this;
        var id = route.params['id'];
        return this.service.get(id)
            .catch(function (e) {
            _this.router.navigate(['/not-found']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(false);
        });
    };
    return HotelResolveService;
}());
HotelResolveService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* HotelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* HotelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], HotelResolveService);

var _a, _b;
//# sourceMappingURL=hotel-resolve.service.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel-view.component.pug":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2><h4>ID: {{id}}</h4><pre>{{model | json}}</pre>"

/***/ }),

/***/ "./ui-app/js/hotel/hotel-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelViewComponent = (function () {
    function HotelViewComponent(route) {
        this.route = route;
    }
    HotelViewComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
        this.id = this.route.snapshot.params.id;
        this.model = this.route.snapshot.data.model;
    };
    return HotelViewComponent;
}());
HotelViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hotel-view',
        template: __webpack_require__("./ui-app/js/hotel/hotel-view.component.pug"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], HotelViewComponent);

var _a;
//# sourceMappingURL=hotel-view.component.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelComponent = (function () {
    function HotelComponent(route) {
        this.route = route;
    }
    HotelComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    return HotelComponent;
}());
HotelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hotel',
        template: "\n\t\t<h1>{{title}}</h1>\n\t\t<router-outlet></router-outlet>\n\t",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], HotelComponent);

var _a;
//# sourceMappingURL=hotel.component.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hotel_component__ = __webpack_require__("./ui-app/js/hotel/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotel_index_component__ = __webpack_require__("./ui-app/js/hotel/hotel-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_view_component__ = __webpack_require__("./ui-app/js/hotel/hotel-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./ui-app/js/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hotel_resolve_service__ = __webpack_require__("./ui-app/js/hotel/hotel-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_router_can_activate_service__ = __webpack_require__("./ui-app/js/shared/services/router-can-activate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ROUTES = [
    {
        path: 'hotel',
        component: __WEBPACK_IMPORTED_MODULE_1__hotel_component__["a" /* HotelComponent */],
        data: { breadcrumb: 'Hotel', title: 'Hotel' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_services_router_can_activate_service__["a" /* RounterCanActivateService */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_7__shared_services_router_can_activate_service__["a" /* RounterCanActivateService */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__hotel_index_component__["a" /* HotelIndexComponent */], data: { breadcrumb: 'Hotel index', title: 'Hotel index' } },
            {
                path: ':id/edit',
                component: __WEBPACK_IMPORTED_MODULE_3__hotel_view_component__["a" /* HotelViewComponent */],
                data: { title: 'Hotel view' },
                resolve: {
                    model: __WEBPACK_IMPORTED_MODULE_6__hotel_resolve_service__["a" /* HotelResolveService */]
                }
            }
        ]
    }
];
var HotelModule = (function () {
    function HotelModule() {
    }
    return HotelModule;
}());
HotelModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */].forRoot(ROUTES)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__hotel_component__["a" /* HotelComponent */],
            __WEBPACK_IMPORTED_MODULE_2__hotel_index_component__["a" /* HotelIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_3__hotel_view_component__["a" /* HotelViewComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_services_router_can_activate_service__["a" /* RounterCanActivateService */],
            __WEBPACK_IMPORTED_MODULE_6__hotel_resolve_service__["a" /* HotelResolveService */]
        ]
    })
], HotelModule);

//# sourceMappingURL=hotel.module.js.map

/***/ }),

/***/ "./ui-app/js/layout/breadcrumb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = JSON.parse(localStorage.getItem('prefixedBreadcrumbs'));
        }
    }
    //Store the breadcrumbs of the current route
    BreadcrumbService.prototype.store = function (breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    // Add a prefixed breadcrumb
    BreadcrumbService.prototype.storePrefixed = function (breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    };
    //Return the breadcrumbs
    BreadcrumbService.prototype.get = function () {
        return this.breadcrumbsChanged$;
    };
    // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
    BreadcrumbService.prototype.storeIfUnique = function (newBreadcrumb) {
        var isUnique = true;
        for (var _i = 0, _a = this.prefixedBreadcrumbs; _i < _a.length; _i++) {
            var crumb = _a[_i];
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    };
    return BreadcrumbService;
}());
BreadcrumbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BreadcrumbService);

//# sourceMappingURL=breadcrumb.service.js.map

/***/ }),

/***/ "./ui-app/js/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./ui-app/js/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_left_component__ = __webpack_require__("./ui-app/js/layout/sidebar-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topbar_component__ = __webpack_require__("./ui-app/js/layout/topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__ = __webpack_require__("./ui-app/js/layout/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__topbar_component__["a" /* TopbarComponent */], __WEBPACK_IMPORTED_MODULE_2__sidebar_left_component__["a" /* SidebarLeftComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__topbar_component__["a" /* TopbarComponent */], __WEBPACK_IMPORTED_MODULE_2__sidebar_left_component__["a" /* SidebarLeftComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__["a" /* BreadcrumbService */]]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "./ui-app/js/layout/sidebar-left.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ui-app/js/layout/sidebar-left.component.pug":
/***/ (function(module, exports) {

module.exports = "<a class=\"rb-brand\" href=\"main\" target=\"_self\"><img class=\"rb-brand-logo\" src=\"/image/logotop_resize.png\" alt=\"\"><img class=\"rb-brand-logo-mini\" src=\"/image/logo-mini_resize.png\" alt=\"\"></a><div class=\"rb-sidebar-menu-container\" rb-sidebar-left><ul class=\"rb-sidebar-menu\"><li class=\"rb-sidebar-label\">MENU</li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/\"><span>Home</span></a></li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/hotel\" [queryParams]=\"{ page: 1, size: 15 }\"><span>Hotel search</span></a></li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/hotel/78a9f2d0-de6d-4bd7-9c98-d207a8e13f8b/edit\"><span>Hotel edit</span></a></li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/dashboard\"><span>Dashboard</span></a></li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/not-create-this-page-yet\"><span>No page</span></a></li></ul></div><a class=\"rb-sidebar-toggle\" rb-sidebar-toggler><span><</span></a>"

/***/ }),

/***/ "./ui-app/js/layout/sidebar-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { RootScope, SidebarLeftService } from 'reboot-ui2';
// import { Authentication } from 'shared/services';
// let Ps = require('perfect-scrollbar');
// const scrollbarOptions = {
// 	minScrollbarLength: 30,
// 	suppressScrollX: true
// };
var SidebarLeftComponent = (function () {
    function SidebarLeftComponent(
        // private authentication: Authentication,
        el, 
        // private sidebarLeftService: SidebarLeftService,
        document) {
        this.el = el;
        this.document = document;
    }
    return SidebarLeftComponent;
}());
SidebarLeftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sidebar-left',
        template: __webpack_require__("./ui-app/js/layout/sidebar-left.component.pug"),
        styles: [__webpack_require__("./ui-app/js/layout/sidebar-left.component.less")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, Object])
], SidebarLeftComponent);

var _a;
//# sourceMappingURL=sidebar-left.component.js.map

/***/ }),

/***/ "./ui-app/js/layout/topbar.component.less":
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 109;\n  width: 100%;\n  display: block;\n  height: 50px;\n  background: #fff;\n  padding-left: 280px;\n  border-bottom: 1px solid #d1dae0;\n  line-height: 50px;\n  transition: padding 0.5s cubic-bezier(0.77, 0, 0.175, 1);\n}\n:host .breadcrumb {\n  padding: 0;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n:host .user-menu .dropdown-toggle {\n  padding: 0 1em;\n  display: block;\n  color: rgba(0, 0, 0, 0.65);\n  transition: all 0.2s;\n}\n:host .user-menu .dropdown-toggle:hover,\n:host .user-menu .dropdown-toggle:focus {\n  background: #e3e6e8;\n  text-decoration: none;\n}\n:host .user-menu .user-photo {\n  color: #fff;\n  display: inline-block;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 1;\n  text-align: center;\n  background: #abb3ba;\n  border-radius: 2.5em;\n  margin-right: 0.5em;\n  overflow: hidden;\n  vertical-align: middle;\n}\n:host .user-menu .user-photo > img {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n}\n:host .user-menu .dropdown-menu {\n  width: 100%;\n}\n:host h1 {\n  font-weight: 300;\n  margin-left: 20px;\n}\nbody.rb-sidebar-left-minimized :host {\n  padding-left: 80px;\n}\n"

/***/ }),

/***/ "./ui-app/js/layout/topbar.component.pug":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\" *ngIf=\"breadcrumbs &amp;&amp; breadcrumbs.length\"><li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\" [class.active]=\"last\"><a [routerLink]=\"breadcrumb.url\" [queryParams]=\"breadcrumb.queryParams\">{{breadcrumb.label}}</a></li></ul><ul class=\"rb-navbar-right\"><li class=\"user-menu\" ngbDropdown><a class=\"rb-navbar-menu\" ngbDropdownToggle><span class=\"user-photo\"><img src=\"/image/logo-mini_resize.png\"></span><span class=\"hidden-xs\">test@exciteholidays.com</span><span class=\"caret\"></span></a><ul class=\"dropdown-menu dropdown-menu-right\"><li><a href=\"logout\" target=\"_self\"><i class=\"m-r-5 ed-icon-power-off\"></i><span>Logout</span></a></li></ul></li></ul>"

/***/ }),

/***/ "./ui-app/js/layout/topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__("./ui-app/js/layout/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { RootScope} from 'reboot-ui2';
// import { Authentication } from 'shared/services';
var TopbarComponent = (function () {
    function TopbarComponent(breadcrumbService, activatedRoute, router
        // private rootScope: RootScope,
        // private authentication: Authentication
    ) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        breadcrumbService.get().subscribe(function (breadcrumbs) {
            _this.breadcrumbs = breadcrumbs;
        });
    }
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
        var ROUTE_MODEL_BREADCRUMB = 'model';
        // const ROUTE_PARAM_BREADCRUMB: string = 'breadcrumb';
        var PREFIX_BREADCRUMB = 'prefixBreadcrumb';
        //subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            //reset currentBreadcrumbs
            _this.currentBreadcrumbs = [];
            //get the root of the current route
            var currentRoute = _this.activatedRoute.root;
            //set the url to an empty string
            var url = '';
            //iterate from activated route to children
            while (currentRoute.children.length > 0) {
                var childrenRoutes = currentRoute.children;
                var breadCrumbLabel = '';
                //iterate over each children
                for (var _i = 0, childrenRoutes_1 = childrenRoutes; _i < childrenRoutes_1.length; _i++) {
                    var route = childrenRoutes_1[_i];
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* PRIMARY_OUTLET */]) {
                        return;
                    }
                    /*
                     Verify the custom data property 'breadcrumb'
                     is specified on the route or in its parameters.

                     Route parameters take precedence over route data
                     attributes.
                     */
                    if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.data[ROUTE_DATA_BREADCRUMB];
                    }
                    else if (route.snapshot.data.hasOwnProperty(ROUTE_MODEL_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.data[ROUTE_MODEL_BREADCRUMB].name;
                        // } else if(route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB)) {
                        // 	breadCrumbLabel = route.snapshot.params['breadcrumb'].replace(/_/g, ' ')
                    }
                    else {
                        //fallback to empty string
                        // breadCrumbLabel = 'empty_breadcrumb_name';
                        continue;
                    }
                    // Get the route's URL segment
                    var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                    url += "/" + routeURL;
                    // Cannot have parameters on a root route
                    if (routeURL.length == 0) {
                        route.snapshot.params = {};
                    }
                    // Add breadcrumb
                    var breadcrumb = {
                        label: breadCrumbLabel,
                        params: route.snapshot.params,
                        queryParams: route.snapshot.queryParams,
                        url: url
                    };
                    // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                    if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                        _this.breadcrumbService.storePrefixed(breadcrumb);
                    }
                    else {
                        _this.currentBreadcrumbs.push(breadcrumb);
                    }
                }
                _this.breadcrumbService.store(_this.currentBreadcrumbs);
            }
        });
    };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'topbar',
        template: __webpack_require__("./ui-app/js/layout/topbar.component.pug"),
        styles: [__webpack_require__("./ui-app/js/layout/topbar.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _c || Object])
], TopbarComponent);

var _a, _b, _c;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ "./ui-app/js/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-not-found',
        template: "\n\t\t<h1 class=\"text-center\">404</h1><h3 class=\"text-center\">PAGE NOT FOUND</h3>\n\t"
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./ui-app/js/shared/animations/slide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInDown; });
/* unused harmony export expand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");

var slideInDown = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInDown', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translate3d(0, 0, 0)', opacity: '1' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translate3d(0, -20px, 0)', opacity: '0' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translate3d(0, -20px, 0)', opacity: '0' }))
    ])
]);
var expand = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('expand', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ height: '0', overflow: 'hidden' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ height: '*' }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ overflow: 'hidden' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ height: '0' }))
    ])
]);
//# sourceMappingURL=slide.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/hotel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Hotel } from 'shared/types';
var HotelService = (function () {
    function HotelService(http) {
        this.http = http;
    }
    HotelService.prototype.list = function () {
        return this.http.get('/api/scm/v1/hotels')
            .catch(function (r) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(r.json()); })
            .map(function (r) { return r.json(); });
    };
    HotelService.prototype.get = function (id) {
        return this.http.get("api/scm/v1/hotels/" + id)
            .catch(function (r) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(r.json()); })
            .map(function (r) { return r.json(); });
    };
    return HotelService;
}());
HotelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HotelService);

var _a;
//# sourceMappingURL=hotel.service.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hotel_service__ = __webpack_require__("./ui-app/js/shared/services/hotel.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hotel_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_can_activate_service__ = __webpack_require__("./ui-app/js/shared/services/router-can-activate.service.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/router-can-activate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RounterCanActivateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RounterCanActivateService = (function () {
    function RounterCanActivateService(http, router) {
        this.http = http;
        this.router = router;
    }
    RounterCanActivateService.prototype.canActivate = function (route, state) {
        return this.getHead(state);
    };
    RounterCanActivateService.prototype.canActivateChild = function (childRoute, state) {
        return this.getHead(state);
    };
    RounterCanActivateService.prototype.getHead = function (state) {
        var _this = this;
        return this.http.head(state.url).map(function (r) { return true; }).catch(function () {
            _this.router.navigate(['/not-found']);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(false);
        })
            .toPromise();
    };
    return RounterCanActivateService;
}());
RounterCanActivateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], RounterCanActivateService);

var _a, _b;
//# sourceMappingURL=router-can-activate.service.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/shared-services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hotel_service__ = __webpack_require__("./ui-app/js/shared/services/hotel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedServicesModule = (function () {
    function SharedServicesModule() {
    }
    return SharedServicesModule;
}());
SharedServicesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [],
        exports: [],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__hotel_service__["a" /* HotelService */]
        ]
    })
], SharedServicesModule);

//# sourceMappingURL=shared-services.module.js.map

/***/ }),

/***/ "./ui-app/js/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_services_module__ = __webpack_require__("./ui-app/js/shared/services/shared-services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { RebootUIModule } from 'reboot-ui2';

var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
            // RebootUIModule,
            __WEBPACK_IMPORTED_MODULE_4__services_shared_services_module__["a" /* SharedServicesModule */],
        ],
        providers: []
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./ui-app/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_app_module__ = __webpack_require__("./ui-app/js/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./ui-app/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__js_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ui-app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map