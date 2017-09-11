import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorSearchComponent } from "./doctors/doctor-search/doctor-search.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: DoctorsListComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'add', component: AddDoctorComponent, canActivate: [AuthGuard] },
    { path: 'doctors/:_id', component: DoctorDetailsComponent, canActivate: [AuthGuard] },
    { path: 'search', component: DoctorSearchComponent, canActivate: [AuthGuard] },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);