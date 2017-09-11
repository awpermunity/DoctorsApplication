import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthGuard } from "../../_guards/auth.guard";
import { AuthenticationService } from "../../_services/authentication.service";
import { Doctor } from '../../_models/index';
import { DoctorService } from '../../_services/doctor.service';

@Component({
  moduleId: module.id,
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctor: Doctor;
  doctorForm: FormGroup;
  date: Date;
  admin: boolean;
  user: string;
  userToCheck: Object;
  visit: Object;
  notAdmin: boolean;
  reason: string;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private authGuard: AuthGuard,
    private authenticationService: AuthenticationService
  ) {
    this.admin = false;
    this.notAdmin = false;
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
    this.loadDoctor();
    console.log("DATE: ", this.date);


  }
  userToObject(value: string) {
    console.log('userParse', value)
    let user: Object = JSON.parse(value);
    console.log('userParse', user)
    return user;

  }

  isAdmin(value: any): any {
    if (value.username === "admin") {
      this.admin = true;
      console.log('admin', this.admin);

    }
    return null;

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
    this.doctorService.addToList(doctor, date, reason, user).subscribe(() => { })
  }

  removevisit(visit: any) {
    let doctor = this.doctor;
    let index: number = this.doctor.visit.indexOf(visit);
    console.log('INDEKS', index)
    this.doctorService.removeFromList(doctor, visit, index).subscribe(() => { })
  }
}

