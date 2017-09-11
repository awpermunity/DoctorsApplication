import { Router } from "@angular/router";
import { Component, OnInit, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    ngOnInit() { }
    constructor(private router: Router) { }

    logout() {
        this.router.navigate(['/login'])

    }
}