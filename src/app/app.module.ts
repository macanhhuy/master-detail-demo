import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { FullWidthCellRenderer } from './full-width-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    FullWidthCellRenderer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
