import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent, LogoutComponent],
  declarations: [SidebarComponent, LogoutComponent]
})
export class CoreModule {
  @Input() admin: boolean
}
