import { Injectable, OnInit, Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DoctorService } from '../../_services/doctor.service';
import { DoctorSearchService } from './doctor-search.service';
import { Doctor } from '../../_models/doctor';
import { Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'doctor-search',
  templateUrl: './doctor-search.component.html',
  styleUrls: ['./doctor-search.component.css'],
  providers: [DoctorService, DoctorSearchService]
})

export class DoctorSearchComponent implements OnInit {
  doctors: Doctor[];
  filteredDoctors: Array<Doctor> = [];
  private doctorsUrl = 'http://localhost:3000/doctors';
  doctor = {};


  constructor(private http: Http,
    private doctorsService: DoctorService,
    private router: Router, private doctorSearchService: DoctorSearchService) { }


  ngOnInit() {
    this.loadDoctors();

  }
  loadDoctors(): void {
    this.doctorsService.getAll().subscribe(doctors => {
      this.doctors = doctors;
      this.doctorSearchService.setDoctors(this.doctors);
    });
  }

  goToDetails(doctor: Doctor): void {
    console.log("doctor: ", doctor._id);

    this.router.navigate(['/doctors', doctor._id])
  }


  changeCity(event: any) {
    this.doctorSearchService.filterByType(event.target.value, 'city');
    this.filteredDoctors = [];

    setTimeout(() => {
      this.filteredDoctors = this.doctorSearchService.getFilteredDoctors();
      console.log(this.filteredDoctors);
    }, 100);
  }
  changeName(event: any) {
    this.doctorSearchService.filterByType(event.target.value, 'name');
    this.filteredDoctors = [];

    setTimeout(() => {
      this.filteredDoctors = this.doctorSearchService.getFilteredDoctors();
      console.log(this.filteredDoctors);
    }, 100);
  }
  changeSpeciality(event: any) {
    this.doctorSearchService.filterByType(event.target.value, 'speciality');
    this.filteredDoctors = [];

    setTimeout(() => {
      this.filteredDoctors = this.doctorSearchService.getFilteredDoctors();
      console.log(this.filteredDoctors);
    }, 100);
  }

  changeDate(event: any) {
    this.doctorSearchService.filterByType(event.target.value, 'date');
    this.filteredDoctors = [];

    setTimeout(() => {
      this.filteredDoctors = this.doctorSearchService.getFilteredDoctors();
      console.log(this.filteredDoctors);
    }, 100);
  }
}
