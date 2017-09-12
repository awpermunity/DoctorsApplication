"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shared_module_1 = require("./shared-module/shared-module");
var doctor_details_component_1 = require("./doctor-details/doctor-details.component");
var router_1 = require("@angular/router");
var doctor_search_component_1 = require("./doctor-search/doctor-search.component");
var forms_1 = require("@angular/forms");
var add_doctor_component_1 = require("./add-doctor/add-doctor.component");
var core_module_1 = require("./core-module/core-module");
var isAdmin_service_1 = require("../_services/isAdmin.service");
var DoctorsModule = /** @class */ (function () {
    function DoctorsModule() {
    }
    DoctorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                core_module_1.CoreModule
            ],
            exports: [doctor_details_component_1.DoctorDetailsComponent, doctor_search_component_1.DoctorSearchComponent, add_doctor_component_1.AddDoctorComponent],
            declarations: [doctor_details_component_1.DoctorDetailsComponent, doctor_search_component_1.DoctorSearchComponent, add_doctor_component_1.AddDoctorComponent],
            providers: [isAdmin_service_1.isAdminService]
        })
    ], DoctorsModule);
    return DoctorsModule;
}());
exports.DoctorsModule = DoctorsModule;
//# sourceMappingURL=doctors.module.js.map