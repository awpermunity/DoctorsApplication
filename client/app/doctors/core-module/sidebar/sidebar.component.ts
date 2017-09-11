import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() admin: boolean;

  constructor() { }

  ngOnInit() {
    console.log('ADMIN STATUS', this.admin)
  }

}
