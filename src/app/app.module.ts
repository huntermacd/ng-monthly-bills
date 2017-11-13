import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    FormsModule
  ],
  providers: [BillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
