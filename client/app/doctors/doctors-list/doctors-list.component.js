"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../_guards/index");
var index_2 = require("../../_services/index");
var doctor_service_1 = require("../../_services/doctor.service");
var isAdmin_service_1 = require("../../_services/isAdmin.service");
var DoctorsListComponent = /** @class */ (function () {
    function DoctorsListComponent(doctorService, isAdminService, router, authGuard, authenticationService) {
        this.doctorService = doctorService;
        this.isAdminService = isAdminService;
        this.router = router;
        this.authGuard = authGuard;
        this.authenticationService = authenticationService;
        this.doctors = [];
        this.admin = this.isAdminService.admin;
        console.log('ADMINEK', this.admin);
    }
    DoctorsListComponent.prototype.ngOnInit = function () {
        this.loadAllDoctors();
    };
    DoctorsListComponent.prototype.userToObject = function (value) {
        var user = JSON.parse(value);
        return user;
    };
    DoctorsListComponent.prototype.isAdmin = function (value) {
        if (value.username === "admin") {
            this.admin = true;
            console.log('ADMINNN', this.admin);
        }
        return null;
    };
    DoctorsListComponent.prototype.loadAllDoctors = function () {
        var _this = this;
        this.doctorService.getAll().subscribe(function (doctors) { _this.doctors = doctors; });
    };
    DoctorsListComponent.prototype.goToDoctorDetails = function (doctor) {
        this.router.navigate(['/doctors', doctor._id]);
    };
    DoctorsListComponent.prototype.removeDoctor = function (doctor, event) {
        var _this = this;
        event.stopPropagation();
        this.doctorService.delete(doctor._id).subscribe(function () {
            _this.loadAllDoctors();
        });
    };
    DoctorsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'doctors-list',
            templateUrl: './doctors-list.component.html',
            styleUrls: ['./doctors-list.component.css'],
            providers: [doctor_service_1.DoctorService]
        }),
        __metadata("design:paramtypes", [doctor_service_1.DoctorService,
            isAdmin_service_1.isAdminService,
            router_1.Router,
            index_1.AuthGuard,
            index_2.AuthenticationService])
    ], DoctorsListComponent);
    return DoctorsListComponent;
}());
exports.DoctorsListComponent = DoctorsListComponent;
//# sourceMappingURL=doctors-list.component.js.map