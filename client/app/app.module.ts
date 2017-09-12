import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { DoctorsModule } from './doctors/doctors.module';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { CoreModule } from "./doctors/core-module/core-module";
import { SharedModule } from "./doctors/shared-module/shared-module";
import { DoctorService } from './_services/doctor.service';
// import { ConfirmationDialog } from './confirm/confirmation-dialog';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        DoctorsModule,
        routing,
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        DoctorsListComponent,
        LoginComponent,
        RegisterComponent,
        // ConfirmationDialog


    ],
    providers: [
        DoctorsModule,
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        DoctorService,

    ],

    bootstrap: [AppComponent]
})

export class AppModule { }