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
var moment = require("moment");
var DoctorSearchService = /** @class */ (function () {
    function DoctorSearchService() {
        this.doctors = [];
        this.filteredDoctors = [];
        this.filteredByDateValue = '';
        this.filteredByCityValue = '';
        this.filteredByNameValue = '';
        this.filteredBySpecialityValue = '';
    }
    DoctorSearchService.prototype.setDoctors = function (doctors) {
        this.doctors = doctors;
    };
    DoctorSearchService.prototype.filterByCity = function (value) {
        this.filteredByCityValue = value;
    };
    DoctorSearchService.prototype.filterByName = function (value) {
        this.filteredByNameValue = value;
    };
    DoctorSearchService.prototype.filterBySpeciality = function (value) {
        this.filteredBySpecialityValue = value;
    };
    DoctorSearchService.prototype.filterByDate = function (value) {
        var $inputDate = moment(value);
        this.filteredDoctors = this.doctors.filter(function (doctor) {
            return doctor.visit.every(function (visit) {
                console.log('visit', moment(visit.date));
                return !$inputDate.isSame(moment(visit.date));
            }) || !doctor.visit.length;
        });
    };
    DoctorSearchService.prototype.filterByType = function (value, type) {
        switch (type) {
            case 'city':
                this.filterByCity(value);
                break;
            case 'name':
                this.filterByName(value);
                break;
            case 'speciality':
                this.filterBySpeciality(value);
                break;
            case 'date':
                this.filterByDate(value);
                break;
        }
    };
    DoctorSearchService.prototype.makeFilteredDoctors = function () {
        var _this = this;
        if (this.filteredByCityValue) {
            this.filteredDoctors = this.doctors.filter(function (doctor) {
                return new RegExp(_this.filteredByCityValue, 'gi').test(doctor['city']);
            });
        }
        if (this.filteredByNameValue) {
            this.filteredDoctors = this.doctors.filter(function (doctor) {
                return new RegExp(_this.filteredByNameValue, 'gi').test(doctor['name']);
            });
        }
        if (this.filteredBySpecialityValue) {
            this.filteredDoctors = this.doctors.filter(function (doctor) {
                return new RegExp(_this.filteredBySpecialityValue, 'gi').test(doctor['speciality']);
            });
        }
    };
    DoctorSearchService.prototype.getFilteredDoctors = function () {
        this.makeFilteredDoctors();
        return this.filteredDoctors;
    };
    DoctorSearchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DoctorSearchService);
    return DoctorSearchService;
}());
exports.DoctorSearchService = DoctorSearchService;
//# sourceMappingURL=doctor-search.service.js.map