import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { EventEmitter } from '@angular/core';
import { Doctor } from '../../_models/doctor';
import { DoctorService } from '../../_services/doctor.service';
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'add-doctor',
    templateUrl: './add-doctor.component.html',
    styleUrls: ['../doctor-details/doctor-details.component.css']
})
export class AddDoctorComponent implements OnInit {
    doctorForm: FormGroup;
    doctor: Doctor[] = [];

    @Output()
    doctorAdded: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private doctorService: DoctorService,
        private formBuilder: FormBuilder,
        private router: Router,

    ) { }

    ngOnInit(): void {
        this.doctorForm = this.buildDoctorForm();
    }

    buildDoctorForm() {
        return this.formBuilder.group({
            name: ['', Validators.required],
            speciality: ['', Validators.required],
            city: ['', Validators.required],
            visit: [[]]
        })
    }

    addDoctor() {
        console.log(this.doctorForm.value);
        this.doctorService.create(this.doctorForm.value).subscribe(() => {
            this.doctorAdded.emit();
        });

    }
}