import { Injectable } from '@angular/core';
import { Doctor } from "../../_models/doctor";
import * as moment from 'moment';

@Injectable()
export class DoctorSearchService {
    private doctors: Array<Doctor> = [];
    private filteredDoctors: Array<Doctor> = [];
    private filteredByDateValue: string = '';
    private filteredByCityValue: string = '';
    private filteredByNameValue: string = '';
    private filteredBySpecialityValue: string = '';

    constructor() { }

    setDoctors(doctors: Doctor[]) {
        this.doctors = doctors;
    }

    filterByCity(value: string) {
        this.filteredByCityValue = value;
    }

    filterByName(value: string) {
        this.filteredByNameValue = value;
    }

    filterBySpeciality(value: string) {
        this.filteredBySpecialityValue = value;
    }

    filterByDate(value: string) {
        let $inputDate = moment(value);
        this.filteredDoctors = this.doctors.filter(doctor => {
            return doctor.visit.every((visit) => {
                console.log('visit', moment(visit.date));
                return !$inputDate.isSame(moment(visit.date))
            }) || !doctor.visit.length;
        });
    }

    filterByType(value: string, type: string) {
        switch (type) {
            case 'city': this.filterByCity(value); break;
            case 'name': this.filterByName(value); break;
            case 'speciality': this.filterBySpeciality(value); break;
            case 'date': this.filterByDate(value); break;
        }
    }

    makeFilteredDoctors() {
        if (this.filteredByCityValue) {
            this.filteredDoctors = this.doctors.filter(doctor => {
                return new RegExp(this.filteredByCityValue, 'gi').test(doctor['city']);
            });
        }
        if (this.filteredByNameValue) {
            this.filteredDoctors = this.doctors.filter(doctor => {
                return new RegExp(this.filteredByNameValue, 'gi').test(doctor['name']);
            });

        }
        if (this.filteredBySpecialityValue) {
            this.filteredDoctors = this.doctors.filter(doctor => {
                return new RegExp(this.filteredBySpecialityValue, 'gi').test(doctor['speciality']);
            })
        }
    }

    getFilteredDoctors() {
        this.makeFilteredDoctors();
        return this.filteredDoctors;
    }
}