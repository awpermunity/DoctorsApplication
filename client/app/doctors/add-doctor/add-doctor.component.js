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
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var doctor_service_1 = require("../../_services/doctor.service");
var router_1 = require("@angular/router");
var AddDoctorComponent = /** @class */ (function () {
    function AddDoctorComponent(doctorService, formBuilder, router) {
        this.doctorService = doctorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.doctor = [];
        this.doctorAdded = new core_2.EventEmitter();
    }
    AddDoctorComponent.prototype.ngOnInit = function () {
        this.doctorForm = this.buildDoctorForm();
    };
    AddDoctorComponent.prototype.buildDoctorForm = function () {
        return this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            speciality: ['', forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            visit: [[]]
        });
    };
    AddDoctorComponent.prototype.addDoctor = function () {
        var _this = this;
        console.log(this.doctorForm.value);
        this.doctorService.create(this.doctorForm.value).subscribe(function () {
            _this.doctorAdded.emit();
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_2.EventEmitter)
    ], AddDoctorComponent.prototype, "doctorAdded", void 0);
    AddDoctorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-doctor',
            templateUrl: './add-doctor.component.html',
            styleUrls: ['../doctor-details/doctor-details.component.css']
        }),
        __metadata("design:paramtypes", [doctor_service_1.DoctorService,
            forms_1.FormBuilder,
            router_1.Router])
    ], AddDoctorComponent);
    return AddDoctorComponent;
}());
exports.AddDoctorComponent = AddDoctorComponent;
//# sourceMappingURL=add-doctor.component.js.map