import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthGuard } from '../../_guards/index';
import { AuthenticationService } from '../../_services/index';

import { DoctorService } from "../../_services/doctor.service";
import { Doctor } from '../../_models/index';

@Component({
    moduleId: module.id,
    selector: 'doctors-list',
    templateUrl: './doctors-list.component.html',
    styleUrls: ['./doctors-list.component.css'],
    providers: [DoctorService]
})
export class DoctorsListComponent implements OnInit {
    doctors: Doctor[] = [];
    admin: boolean;
    user: string;
    userToCheck: object;

    constructor(
        private doctorService: DoctorService,
        private router: Router,
        private authGuard: AuthGuard,
        private authenticationService: AuthenticationService
    ) {
        this.admin = false;
        this.user = '';
        this.userToCheck = {};
        this.user = authenticationService.getCurrentUser();
        console.log("USER: ", this.user);
        if (this.user != '') {
            this.userToCheck = this.userToObject(this.user)
        }
        else {
            alert('User empty');
            this.router.navigate(['/login'])
        }
        console.log("userToCheck: ", this.userToCheck);
        this.isAdmin(this.userToCheck);
    }

    ngOnInit() {
        this.loadAllDoctors();
    }

    userToObject(value: string) {
        let user: Object = JSON.parse(value);
        return user;
    }

    isAdmin(value: any): any {
        if (value.username === "admin") {
            this.admin = true;
            console.log('ADMINNN', this.admin);

        }

        return null;
    }

    private loadAllDoctors() {
        this.doctorService.getAll().subscribe(doctors => { this.doctors = doctors; });
    }

    goToDoctorDetails(doctor: Doctor) {
        this.router.navigate(['/doctors', doctor._id])
    }

    removeDoctor(doctor: Doctor, event: any) {
        event.stopPropagation();
        this.doctorService.delete(doctor._id).subscribe(() => {
            this.loadAllDoctors();
        });
    }
}

