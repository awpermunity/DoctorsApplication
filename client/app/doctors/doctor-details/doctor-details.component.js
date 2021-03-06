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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var authentication_service_1 = require("../../_services/authentication.service");
var doctor_service_1 = require("../../_services/doctor.service");
var isAdmin_service_1 = require("../../_services/isAdmin.service");
var DoctorDetailsComponent = /** @class */ (function () {
    function DoctorDetailsComponent(doctorService, isAdminService, route, formBuilder, location, router, authenticationService) {
        this.doctorService = doctorService;
        this.isAdminService = isAdminService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.location = location;
        this.router = router;
        this.authenticationService = authenticationService;
        this.admin = this.isAdminService.admin;
    }
    DoctorDetailsComponent.prototype.ngOnInit = function () {
        this.loadDoctor();
        console.log("DATE: ", this.date);
    };
    DoctorDetailsComponent.prototype.buildDoctorForm = function () {
        return this.formBuilder.group({
            _id: [this.doctor._id, forms_1.Validators.required],
            name: [this.doctor.name, forms_1.Validators.required],
            speciality: [this.doctor.speciality, forms_1.Validators.required],
            city: [this.doctor.city, forms_1.Validators.required],
            visit: [this.doctor.visit]
        });
    };
    DoctorDetailsComponent.prototype.loadDoctor = function () {
        var _this = this;
        var _id = this.route.snapshot.params['_id'];
        this.doctorService.getById(_id).subscribe(function (doctor) {
            _this.doctor = doctor;
            _this.doctorForm = _this.buildDoctorForm();
        });
    };
    DoctorDetailsComponent.prototype.updateDoctor = function () {
        var _this = this;
        this.doctorService.update(this.doctorForm.value).subscribe(function () {
            _this.location.back();
        });
    };
    DoctorDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    DoctorDetailsComponent.prototype.addToList = function () {
        var date = this.date;
        var doctor = this.doctor;
        var reason = this.reason;
        var user = this.user;
        //prowizoryczny confirm (problem z materials)
        var x = confirm('click ok to confirm visit');
        if (x) {
            console.log('confirm true');
            this.doctorService.addToList(doctor, date, reason, user).subscribe(function () { });
        }
    };
    DoctorDetailsComponent.prototype.removevisit = function (visit) {
        var doctor = this.doctor;
        var index = this.doctor.visit.indexOf(visit);
        console.log('INDEKS', index);
        this.doctorService.removeFromList(doctor, visit, index).subscribe(function () { });
    };
    DoctorDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-doctor-details',
            templateUrl: './doctor-details.component.html',
            styleUrls: ['./doctor-details.component.css'],
        }),
        __metadata("design:paramtypes", [doctor_service_1.DoctorService,
            isAdmin_service_1.isAdminService,
            router_1.ActivatedRoute,
            forms_1.FormBuilder,
            common_1.Location,
            router_1.Router,
            authentication_service_1.AuthenticationService])
    ], DoctorDetailsComponent);
    return DoctorDetailsComponent;
}());
exports.DoctorDetailsComponent = DoctorDetailsComponent;
//# sourceMappingURL=doctor-details.component.js.map