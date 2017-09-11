import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, BehaviorSubject } from "rxjs/Rx";

import { Doctor } from '../_models/index';

@Injectable()
export class DoctorService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/doctors').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/doctors/' + _id).map((response: Response) => response.json());
    }

    create(doctor: Doctor) {
        return this.http.post('/doctors/create', doctor);
    }

    update(doctor: Doctor) {
        return this.http.put('/doctors/' + doctor._id, doctor);
    }

    delete(_id: string) {
        return this.http.delete('/doctors/' + _id);
    }
    addToList(doctor: Doctor, date: any, reason: any, user: any): Observable<any> {
        let visit: Object[] = doctor.visit;
        visit.push({ date: date, reason: reason, user: user });
        let dateString: String = JSON.stringify(date);
        console.log("DATA: ", dateString);
        console.log("visit: ", doctor.visit);
        return this.update(doctor);
    }
    removeFromList(doctor: any, visit: any, index: any): Observable<any> {
        let date: Object[] = doctor.visit;
        console.log("INDEX :", index, doctor)
        if (index !== -1) {
            date.splice(index, 1);
        }
        return this.update(doctor);
    }


}