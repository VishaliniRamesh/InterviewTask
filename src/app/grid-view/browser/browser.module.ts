import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserRoutingModule } from './browser-routing.module';
import { BrowserComponent } from './browser/browser.component';
import { FormsModule } from '@angular/forms';
import { GridRoutingModule } from '../grid/grid-routing.module';


@NgModule({
  declarations: [
    BrowserComponent
  ],
  imports: [
    CommonModule,
    BrowserRoutingModule,
    FormsModule,
    GridRoutingModule
  ]
})
export class BrowserModule { }
