"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./register/index");
var index_3 = require("./_guards/index");
var doctors_list_component_1 = require("./doctors/doctors-list/doctors-list.component");
var add_doctor_component_1 = require("./doctors/add-doctor/add-doctor.component");
var doctor_details_component_1 = require("./doctors/doctor-details/doctor-details.component");
var doctor_search_component_1 = require("./doctors/doctor-search/doctor-search.component");
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: '', component: doctors_list_component_1.DoctorsListComponent, canActivate: [index_3.AuthGuard] },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'add', component: add_doctor_component_1.AddDoctorComponent, canActivate: [index_3.AuthGuard] },
    { path: 'doctors/:_id', component: doctor_details_component_1.DoctorDetailsComponent, canActivate: [index_3.AuthGuard] },
    { path: 'search', component: doctor_search_component_1.DoctorSearchComponent, canActivate: [index_3.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map