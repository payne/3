import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
// import { AstroComponentsModule } from '@astrouxds/angular';

import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule,
    // AstroComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }