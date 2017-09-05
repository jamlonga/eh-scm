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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./ui-app/js/app.component.pug":
/***/ (function(module, exports) {

module.exports = "<sidebar-left></sidebar-left><main><topbar></topbar><div class=\"content\"><router-outlet></router-outlet></div></main>"

/***/ }),

/***/ "./ui-app/js/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: __webpack_require__("./ui-app/js/app.component.pug")
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./ui-app/js/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
// import { RebootUIModule } from '../../node_modules/reboot-ui/js2';
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var shared_module_1 = __webpack_require__("./ui-app/js/shared/shared.module.ts");
var app_component_1 = __webpack_require__("./ui-app/js/app.component.ts");
var dashboard_component_1 = __webpack_require__("./ui-app/js/dashboard/dashboard.component.ts");
var page_not_found_component_1 = __webpack_require__("./ui-app/js/page-not-found.component.ts");
var layout_module_1 = __webpack_require__("./ui-app/js/layout/layout.module.ts");
var dashboard_module_1 = __webpack_require__("./ui-app/js/dashboard/dashboard.module.ts");
var hotel_module_1 = __webpack_require__("./ui-app/js/hotel/hotel.module.ts");
var ROUTES = [
    { path: '', component: dashboard_component_1.DashboardComponent, data: { breadcrumb: 'Dashboard', title: 'Dashboard' } },
    { path: 'not-found', component: page_not_found_component_1.PageNotFoundComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            // RebootUIModule.forRoot(),
            shared_module_1.SharedModule,
            router_1.RouterModule.forRoot(ROUTES),
            layout_module_1.LayoutModule,
            dashboard_module_1.DashboardModule,
            hotel_module_1.HotelModule
        ],
        declarations: [
            app_component_1.AppComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./ui-app/js/dashboard/dashboard.component.pug":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ui-app/js/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        template: __webpack_require__("./ui-app/js/dashboard/dashboard.component.pug"),
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./ui-app/js/dashboard/dashboard.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var shared_module_1 = __webpack_require__("./ui-app/js/shared/shared.module.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var dashboard_component_1 = __webpack_require__("./ui-app/js/dashboard/dashboard.component.ts");
var router_can_activate_service_1 = __webpack_require__("./ui-app/js/shared/services/router-can-activate.service.ts");
var ROUTES = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        data: { breadcrumb: 'Dashboard', title: 'Dashboard' },
        canActivate: [router_can_activate_service_1.RounterCanActivateService],
        canActivateChild: [router_can_activate_service_1.RounterCanActivateService],
    }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forRoot(ROUTES)
        ],
        exports: [
            dashboard_component_1.DashboardComponent
        ],
        declarations: [
            dashboard_component_1.DashboardComponent
        ],
        entryComponents: [
            dashboard_component_1.DashboardComponent
        ],
        providers: []
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel-index.component.pug":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-t-xs\"><h2 class=\"section-heading\">Hotel list</h2><div class=\"panel panel-default\" *ngIf=\"size\" @slideInDown><div class=\"panel-body\"><button class=\"btn btn-primary\" routerLink=\"/hotel/add\">Add hotel</button></div><table class=\"table table-hover\"><thead><tr><th>Hotel ID</th><th>Name</th><th>Address</th><th>Post code</th></tr></thead><tbody><tr *ngFor=\"let hotel of hotels\"><td><a [routerLink]=\"['/hotel', hotel.id, 'edit']\">{{hotel.id}}</a></td><td>{{hotel.name}}</td><td>{{hotel.address}}</td><td>{{hotel.postCode}}</td></tr></tbody></table><div class=\"panel-footer\">&nbsp;</div></div></div>"

/***/ }),

/***/ "./ui-app/js/hotel/hotel-index.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var services_1 = __webpack_require__("./ui-app/js/shared/services/index.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var slide_1 = __webpack_require__("./ui-app/js/shared/animations/slide.ts");
var HotelIndexComponent = (function () {
    function HotelIndexComponent(hotelService, route) {
        this.hotelService = hotelService;
        this.route = route;
    }
    HotelIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.route.snapshot.data.breadcrumb;
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
    core_1.Component({
        selector: 'hotel-index',
        template: __webpack_require__("./ui-app/js/hotel/hotel-index.component.pug"),
        animations: [slide_1.slideInDown]
    }),
    __metadata("design:paramtypes", [services_1.HotelService,
        router_1.ActivatedRoute])
], HotelIndexComponent);
exports.HotelIndexComponent = HotelIndexComponent;
//# sourceMappingURL=hotel-index.component.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel-resolve.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var services_1 = __webpack_require__("./ui-app/js/shared/services/index.ts");
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
            return rxjs_1.Observable.of(false);
        });
    };
    return HotelResolveService;
}());
HotelResolveService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [services_1.HotelService, router_1.Router])
], HotelResolveService);
exports.HotelResolveService = HotelResolveService;
//# sourceMappingURL=hotel-resolve.service.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel-view.component.pug":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid m-t-xs\"><h2 class=\"section-heading\">{{title}}</h2><ngb-alert type=\"success\" *ngIf=\"alert?.success\" (close)=\"alert = undefined\"><i class=\"bo-icon-check alert-icon\"></i><span>Hotel successfully saved.</span></ngb-alert><div class=\"m-b-xs\" *ngIf=\"model.id\"><span class=\"m-r-md\"><label>Hotel ID:&nbsp;</label><span class=\"form-control-static fill-dash\">{{model.id}}</span></span></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"panel panel-default\"><form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate autocomplete=\"off\"><div class=\"panel-body\"><div class=\"form-group\"><label>Hotel name</label><input class=\"form-control\" type=\"text\" placeholder=\"Hotel name\" formControlName=\"name\" tabindex=\"1\"></div><div class=\"form-group\"><label>Address</label><textarea class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" tabindex=\"1\"></textarea></div><div class=\"form-group\"><label>Post code</label><input class=\"form-control\" type=\"text\" placeholder=\"Post code\" formControlName=\"postCode\" tabindex=\"1\"></div></div><div class=\"panel-footer button-pane\"><button class=\"m-l-xs btn btn-primary\" type=\"submit\" [disabled]=\"form.disabled\" tabindex=\"1\">Save</button><button class=\"m-l-xs btn btn-default\" type=\"button\" [disabled]=\"form.disabled\" routerLink=\"/hotel\" tabindex=\"1\">Cancel</button></div></form></div></div><div class=\"col-md-6\"><pre>{{model | json}}</pre></div></div></div>"

/***/ }),

/***/ "./ui-app/js/hotel/hotel-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var hotel_service_1 = __webpack_require__("./ui-app/js/shared/services/hotel.service.ts");
var hotel_1 = __webpack_require__("./ui-app/js/shared/types/hotel.ts");
var HotelViewComponent = (function () {
    function HotelViewComponent(activatedRoute, hotelService, router) {
        this.activatedRoute = activatedRoute;
        this.hotelService = hotelService;
        this.router = router;
    }
    HotelViewComponent.prototype.ngOnInit = function () {
        var routeSnapshot = this.activatedRoute.snapshot;
        if (routeSnapshot.data.model) {
            this.model = routeSnapshot.data.model;
            this.title = this.model.name;
        }
        else {
            this.model = new hotel_1.Hotel;
            this.title = routeSnapshot.data.breadcrumb;
        }
        this.id = routeSnapshot.params.id;
        this.form = new forms_1.FormGroup({
            id: new forms_1.FormControl(this.model.id),
            name: new forms_1.FormControl(this.model.name),
            address: new forms_1.FormControl(this.model.address),
            postCode: new forms_1.FormControl(this.model.postCode)
        });
    };
    HotelViewComponent.prototype.onSubmit = function () {
        var _this = this;
        var params = this.form.value;
        this.form.disable();
        this.hotelService.save(params)
            .subscribe(function (response) {
            if (params.id) {
                window.scrollTo(0, 0);
                _this.model = response;
                _this.title = _this.model.name;
                _this.form.enable();
                _this.alert = { success: true };
            }
            else {
                _this.router.navigate(['/hotel', response.id, 'edit',]);
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    return HotelViewComponent;
}());
HotelViewComponent = __decorate([
    core_1.Component({
        selector: 'hotel-view',
        template: __webpack_require__("./ui-app/js/hotel/hotel-view.component.pug"),
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        hotel_service_1.HotelService,
        router_1.Router])
], HotelViewComponent);
exports.HotelViewComponent = HotelViewComponent;
//# sourceMappingURL=hotel-view.component.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var HotelComponent = (function () {
    function HotelComponent() {
    }
    return HotelComponent;
}());
HotelComponent = __decorate([
    core_1.Component({
        selector: 'hotel',
        template: "\n\t\t<router-outlet></router-outlet>\n\t",
    })
], HotelComponent);
exports.HotelComponent = HotelComponent;
//# sourceMappingURL=hotel.component.js.map

/***/ }),

/***/ "./ui-app/js/hotel/hotel.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var hotel_component_1 = __webpack_require__("./ui-app/js/hotel/hotel.component.ts");
var hotel_index_component_1 = __webpack_require__("./ui-app/js/hotel/hotel-index.component.ts");
var hotel_view_component_1 = __webpack_require__("./ui-app/js/hotel/hotel-view.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var shared_module_1 = __webpack_require__("./ui-app/js/shared/shared.module.ts");
var hotel_resolve_service_1 = __webpack_require__("./ui-app/js/hotel/hotel-resolve.service.ts");
var router_can_activate_service_1 = __webpack_require__("./ui-app/js/shared/services/router-can-activate.service.ts");
var ROUTES = [
    {
        path: 'hotel',
        component: hotel_component_1.HotelComponent,
        data: { breadcrumb: 'Hotel', title: 'Hotel' },
        canActivate: [router_can_activate_service_1.RounterCanActivateService],
        canActivateChild: [router_can_activate_service_1.RounterCanActivateService],
        children: [
            { path: '', component: hotel_index_component_1.HotelIndexComponent, data: { breadcrumb: 'Hotel list' } },
            { path: 'add', component: hotel_view_component_1.HotelViewComponent, data: { breadcrumb: 'Add hotel' } },
            {
                path: ':id/edit',
                component: hotel_view_component_1.HotelViewComponent,
                resolve: {
                    model: hotel_resolve_service_1.HotelResolveService
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
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forRoot(ROUTES),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        exports: [
            router_1.RouterModule
        ],
        declarations: [
            hotel_component_1.HotelComponent,
            hotel_index_component_1.HotelIndexComponent,
            hotel_view_component_1.HotelViewComponent
        ],
        providers: [
            router_can_activate_service_1.RounterCanActivateService,
            hotel_resolve_service_1.HotelResolveService
        ]
    })
], HotelModule);
exports.HotelModule = HotelModule;
//# sourceMappingURL=hotel.module.js.map

/***/ }),

/***/ "./ui-app/js/layout/breadcrumb.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new rxjs_1.Subject();
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BreadcrumbService);
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map

/***/ }),

/***/ "./ui-app/js/layout/layout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var shared_module_1 = __webpack_require__("./ui-app/js/shared/shared.module.ts");
var sidebar_left_component_1 = __webpack_require__("./ui-app/js/layout/sidebar-left.component.ts");
var topbar_component_1 = __webpack_require__("./ui-app/js/layout/topbar.component.ts");
var breadcrumb_service_1 = __webpack_require__("./ui-app/js/layout/breadcrumb.service.ts");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule],
        declarations: [topbar_component_1.TopbarComponent, sidebar_left_component_1.SidebarLeftComponent],
        exports: [topbar_component_1.TopbarComponent, sidebar_left_component_1.SidebarLeftComponent],
        providers: [breadcrumb_service_1.BreadcrumbService]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "./ui-app/js/layout/sidebar-left.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ui-app/js/layout/sidebar-left.component.pug":
/***/ (function(module, exports) {

module.exports = "<a class=\"rb-brand\" href=\"main\" target=\"_self\"><img class=\"rb-brand-logo\" src=\"/image/logotop_resize.png\" alt=\"\"><img class=\"rb-brand-logo-mini\" src=\"/image/logo-mini_resize.png\" alt=\"\"></a><div class=\"rb-sidebar-menu-container\" rb-sidebar-left><ul class=\"rb-sidebar-menu\"><li class=\"rb-sidebar-label\">MENU</li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/\"><span>Home</span></a></li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/hotel\" [queryParams]=\"{ page: 1, size: 15 }\"><span>Hotel list</span></a></li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/dashboard\"><span>Dashboard</span></a></li><li class=\"rb-sidebar-menu-item\"><a routerLink=\"/not-create-this-page-yet\"><span>No page</span></a></li></ul></div><a class=\"rb-sidebar-toggle\" rb-sidebar-toggler><span><</span></a>"

/***/ }),

/***/ "./ui-app/js/layout/sidebar-left.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
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
    core_1.Component({
        selector: 'sidebar-left',
        template: __webpack_require__("./ui-app/js/layout/sidebar-left.component.pug"),
        styles: [__webpack_require__("./ui-app/js/layout/sidebar-left.component.less")]
    }),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [core_1.ElementRef,
        Document])
], SidebarLeftComponent);
exports.SidebarLeftComponent = SidebarLeftComponent;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var breadcrumb_service_1 = __webpack_require__("./ui-app/js/layout/breadcrumb.service.ts");
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
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
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
                    if (route.outlet !== router_1.PRIMARY_OUTLET) {
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
    core_1.Component({
        selector: 'topbar',
        template: __webpack_require__("./ui-app/js/layout/topbar.component.pug"),
        styles: [__webpack_require__("./ui-app/js/layout/topbar.component.less")]
    }),
    __metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService,
        router_1.ActivatedRoute,
        router_1.Router
        // private rootScope: RootScope,
        // private authentication: Authentication
    ])
], TopbarComponent);
exports.TopbarComponent = TopbarComponent;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ "./ui-app/js/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'page-not-found',
        template: "\n\t\t<h1 class=\"text-center\">404</h1><h3 class=\"text-center\">PAGE NOT FOUND</h3>\n\t"
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./ui-app/js/shared/animations/slide.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
exports.slideInDown = animations_1.trigger('slideInDown', [
    animations_1.state('in', animations_1.style({ transform: 'translate3d(0, 0, 0)', opacity: '1' })),
    animations_1.transition('void => *', [
        animations_1.style({ transform: 'translate3d(0, -20px, 0)', opacity: '0' }),
        animations_1.animate('0.2s ease-in')
    ]),
    animations_1.transition('* => void', [
        animations_1.animate('0.2s ease-in', animations_1.style({ transform: 'translate3d(0, -20px, 0)', opacity: '0' }))
    ])
]);
exports.expand = animations_1.trigger('expand', [
    animations_1.transition('void => *', [
        animations_1.style({ height: '0', overflow: 'hidden' }),
        animations_1.animate('0.2s ease-in', animations_1.style({ height: '*' }))
    ]),
    animations_1.transition('* => void', [
        animations_1.style({ overflow: 'hidden' }),
        animations_1.animate('0.2s ease-in', animations_1.style({ height: '0' }))
    ])
]);
//# sourceMappingURL=slide.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/hotel.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var HotelService = (function () {
    function HotelService(http) {
        this.http = http;
    }
    HotelService.prototype.list = function () {
        return this.http.get('/api/scm/v1/hotels')
            .map(function (r) { return r.json(); })
            .catch(function (r) { return rxjs_1.Observable.throw(r.json()); });
    };
    HotelService.prototype.get = function (id) {
        return this.http.get("api/scm/v1/hotels/" + id)
            .map(function (r) { return r.json(); })
            .catch(function (r) { return rxjs_1.Observable.throw(r.json()); });
    };
    HotelService.prototype.save = function (params) {
        return this.http.post('api/scm/v1/hotels', params)
            .map(function (r) { return r.json(); })
            .catch(function (r) { return rxjs_1.Observable.throw(r.json()); });
    };
    return HotelService;
}());
HotelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./ui-app/js/shared/services/hotel.service.ts"));
__export(__webpack_require__("./ui-app/js/shared/services/router-can-activate.service.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/router-can-activate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
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
            return rxjs_1.Observable.throw(false);
        })
            .toPromise();
    };
    return RounterCanActivateService;
}());
RounterCanActivateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], RounterCanActivateService);
exports.RounterCanActivateService = RounterCanActivateService;
//# sourceMappingURL=router-can-activate.service.js.map

/***/ }),

/***/ "./ui-app/js/shared/services/shared-services.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var hotel_service_1 = __webpack_require__("./ui-app/js/shared/services/hotel.service.ts");
var SharedServicesModule = (function () {
    function SharedServicesModule() {
    }
    return SharedServicesModule;
}());
SharedServicesModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [],
        declarations: [],
        providers: [
            hotel_service_1.HotelService
        ]
    })
], SharedServicesModule);
exports.SharedServicesModule = SharedServicesModule;
//# sourceMappingURL=shared-services.module.js.map

/***/ }),

/***/ "./ui-app/js/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
// import { RebootUIModule } from 'reboot-ui2';
var shared_services_module_1 = __webpack_require__("./ui-app/js/shared/services/shared-services.module.ts");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [],
        exports: [
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            router_1.RouterModule,
            // RebootUIModule,
            shared_services_module_1.SharedServicesModule,
        ],
        providers: []
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./ui-app/js/shared/types/hotel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Hotel = (function () {
    function Hotel() {
    }
    return Hotel;
}());
exports.Hotel = Hotel;
//# sourceMappingURL=hotel.js.map

/***/ }),

/***/ "./ui-app/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./ui-app/js/app.module.ts");
var environment_1 = __webpack_require__("./ui-app/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ui-app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map