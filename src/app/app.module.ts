import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BillsListComponent } from './bills-list/bills-list.component';

import { BillsService } from './bills.service';

@NgModule({
  declarations: [
    AppComponent,
    BillsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
