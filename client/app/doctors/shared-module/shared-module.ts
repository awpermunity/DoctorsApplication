import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { KeysPipe } from './pipes/keys-pipe.pipe'
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, KeysPipe
  ],
  declarations: [HeaderComponent, KeysPipe]
})
export class SharedModule { }
