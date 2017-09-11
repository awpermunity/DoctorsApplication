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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var doctor_service_1 = require("../../_services/doctor.service");
var doctor_search_service_1 = require("./doctor-search.service");
var router_1 = require("@angular/router");
var DoctorSearchComponent = /** @class */ (function () {
    function DoctorSearchComponent(http, doctorsService, router, doctorSearchService) {
        this.http = http;
        this.doctorsService = doctorsService;
        this.router = router;
        this.doctorSearchService = doctorSearchService;
        this.filteredDoctors = [];
        this.doctorsUrl = 'http://localhost:3000/doctors';
        this.doctor = {};
    }
    DoctorSearchComponent.prototype.ngOnInit = function () {
        this.loadDoctors();
    };
    DoctorSearchComponent.prototype.loadDoctors = function () {
        var _this = this;
        this.doctorsService.getAll().subscribe(function (doctors) {
            _this.doctors = doctors;
            _this.doctorSearchService.setDoctors(_this.doctors);
            //this.getDoctorCities();
        });
    };
    DoctorSearchComponent.prototype.goToDetails = function (doctor) {
        console.log("doctor: ", doctor._id);
        this.router.navigate(['/doctors', doctor._id]);
    };
    DoctorSearchComponent.prototype.changeCity = function (event) {
        var _this = this;
        this.doctorSearchService.filterByType(event.target.value, 'city');
        this.filteredDoctors = [];
        setTimeout(function () {
            _this.filteredDoctors = _this.doctorSearchService.getFilteredDoctors();
            console.log(_this.filteredDoctors);
        }, 100);
    };
    DoctorSearchComponent.prototype.changeName = function (event) {
        var _this = this;
        this.doctorSearchService.filterByType(event.target.value, 'name');
        this.filteredDoctors = [];
        setTimeout(function () {
            _this.filteredDoctors = _this.doctorSearchService.getFilteredDoctors();
            console.log(_this.filteredDoctors);
        }, 100);
    };
    DoctorSearchComponent.prototype.changeSpeciality = function (event) {
        var _this = this;
        this.doctorSearchService.filterByType(event.target.value, 'speciality');
        this.filteredDoctors = [];
        setTimeout(function () {
            _this.filteredDoctors = _this.doctorSearchService.getFilteredDoctors();
            console.log(_this.filteredDoctors);
        }, 100);
    };
    DoctorSearchComponent.prototype.changeDate = function (event) {
        var _this = this;
        this.doctorSearchService.filterByType(event.target.value, 'date');
        this.filteredDoctors = [];
        setTimeout(function () {
            _this.filteredDoctors = _this.doctorSearchService.getFilteredDoctors();
            console.log(_this.filteredDoctors);
        }, 100);
    };
    DoctorSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'doctor-search',
            templateUrl: './doctor-search.component.html',
            styleUrls: ['./doctor-search.component.css'],
            providers: [doctor_service_1.DoctorService, doctor_search_service_1.DoctorSearchService]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            doctor_service_1.DoctorService,
            router_1.Router, doctor_search_service_1.DoctorSearchService])
    ], DoctorSearchComponent);
    return DoctorSearchComponent;
}());
exports.DoctorSearchComponent = DoctorSearchComponent;
//# sourceMappingURL=doctor-search.component.js.map