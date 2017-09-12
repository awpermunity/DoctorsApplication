import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from "../../_services/authentication.service";
import { Doctor } from '../../_models/index';
import { DoctorService } from '../../_services/doctor.service';
import { isAdminService } from '../../_services/isAdmin.service'
@Component({
  moduleId: module.id,
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  doctor: Doctor;
  doctorForm: FormGroup;
  date: Date;
  admin: boolean;
  user: string;
  userToCheck: Object;
  visit: Object;
  reason: string;

  constructor(
    private doctorService: DoctorService,
    private isAdminService: isAdminService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.admin = this.isAdminService.admin;
  }

  ngOnInit() {
    this.loadDoctor();
    console.log("DATE: ", this.date);
  }

  buildDoctorForm() {
    return this.formBuilder.group({
      _id: [this.doctor._id, Validators.required],
      name: [this.doctor.name, Validators.required],
      speciality: [this.doctor.speciality, Validators.required],
      city: [this.doctor.city, Validators.required],
      visit: [this.doctor.visit]
    })
  }

  loadDoctor() {
    const _id = this.route.snapshot.params['_id'];
    this.doctorService.getById(_id).subscribe(doctor => {
      this.doctor = doctor;
      this.doctorForm = this.buildDoctorForm();
    })
  }

  updateDoctor() {
    this.doctorService.update(this.doctorForm.value).subscribe(() => {
      this.location.back();
    });
  }
  goBack(): void {
    this.location.back();
  }
  addToList() {
    let date: Date = this.date;
    let doctor = this.doctor;
    let reason: String = this.reason;
    let user: String = this.user
    //prowizoryczny confirm (problem z materials)
    let x: any = confirm('click ok to confirm visit')
    if (x) {
      console.log('confirm true')
      this.doctorService.addToList(doctor, date, reason, user).subscribe(() => { })
    }

  }


  removevisit(visit: any) {
    let doctor = this.doctor;
    let index: number = this.doctor.visit.indexOf(visit);
    console.log('INDEKS', index)
    this.doctorService.removeFromList(doctor, visit, index).subscribe(() => { })
  }
}


