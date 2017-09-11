"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_helpers/index");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./_services/index");
var index_5 = require("./home/index");
var index_6 = require("./login/index");
var index_7 = require("./register/index");
var doctors_module_1 = require("./doctors/doctors.module");
var doctors_list_component_1 = require("./doctors/doctors-list/doctors-list.component");
var core_module_1 = require("./doctors/core-module/core-module");
var shared_module_1 = require("./doctors/shared-module/shared-module");
var doctor_service_1 = require("./_services/doctor.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                doctors_module_1.DoctorsModule,
                app_routing_1.routing,
                core_module_1.CoreModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.AlertComponent,
                index_5.HomeComponent,
                doctors_list_component_1.DoctorsListComponent,
                index_6.LoginComponent,
                index_7.RegisterComponent,
            ],
            providers: [
                doctors_module_1.DoctorsModule,
                index_1.customHttpProvider,
                index_3.AuthGuard,
                index_4.AlertService,
                index_4.AuthenticationService,
                index_4.UserService,
                doctor_service_1.DoctorService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map