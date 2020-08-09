import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import {PortalModule} from '@angular/cdk/portal';

import { MdePopoverModule } from '@material-extended/mde';

import { AppComponent } from './app.component';

import { ThemePickerModule } from './shared/components/theme-picker/theme-picker.module';
import { GithubComponent } from './shared/components/github/github.component';

import { ErrorModule } from './pages/error/error.module';


export const MaterialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ...MaterialModules,
    PortalModule,
    MdePopoverModule,
    ThemePickerModule
  ],
  declarations: [
    AppComponent,
    GithubComponent
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
