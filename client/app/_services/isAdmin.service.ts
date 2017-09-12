import { Injectable } from '@angular/core';
import { AuthenticationService } from "../_services/authentication.service";

@Injectable()
export class isAdminService {
    user: string;
    admin: boolean;
    userToCheck: object;

    constructor(
        private authenticationService: AuthenticationService,

    ) {
        this.userToCheck = {};
        this.user = authenticationService.getCurrentUser();
        console.log("USER: ", this.user);
        if (this.user != '') {
            this.userToCheck = this.userToObject(this.user)
        }
        else {
            alert('User empty');
        }
        this.isAdmin(this.userToCheck);
    }

    userToObject(value: string) {
        let user: Object = JSON.parse(value);
        return user;
    }

    isAdmin(value: any): any {
        if (value.username === "admin") {
            this.admin = true;
            console.log('admin', this.admin);
        }
        return null;
    }
}