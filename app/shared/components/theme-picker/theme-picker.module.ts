import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ThemePickerComponent } from './theme-picker.component';

import { ThemeStorage } from './theme-picker.service';
import { StyleManager } from './style-manager.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ThemePickerComponent
    ],
  declarations: [
    ThemePickerComponent
  ],
  providers: [
    StyleManager,
    ThemeStorage
  ],
})
export class ThemePickerModule { }