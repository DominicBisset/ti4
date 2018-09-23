import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleListComponent } from './toggleList.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleListComponent
  ],
  exports: [
    ToggleListComponent
  ]
})
export class SharedModule { } 
