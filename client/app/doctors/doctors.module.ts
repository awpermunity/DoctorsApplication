import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { SharedModule } from './shared-module/shared-module';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { RouterModule } from '@angular/router'
import { DoctorSearchComponent } from './doctor-search/doctor-search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { CoreModule } from './core-module/core-module';
import { isAdminService } from "../_services/isAdmin.service";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  exports: [DoctorDetailsComponent, DoctorSearchComponent, AddDoctorComponent],
  declarations: [DoctorDetailsComponent, DoctorSearchComponent, AddDoctorComponent],
  providers: [isAdminService]

})
export class DoctorsModule { }
