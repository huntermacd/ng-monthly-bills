import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BillsListComponent } from './bills-list/bills-list.component';

import { BillsService } from './bills.service';
import { AddBillComponent } from './add-bill/add-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsListComponent,
    AddBillComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
