import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import {ColorService} from './services/color.service';
import {ForbiddenValidatorDirective} from './shared/forbidden-value.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayComponent } from './components/display/display.component';
import { FormComponent } from './components/form/form.components';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
