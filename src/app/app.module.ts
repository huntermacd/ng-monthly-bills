import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BillsListComponent } from './bills-list/bills-list.component';

import { BillsService } from './bills.service';
import { AddBillComponent } from './add-bill/add-bill.component';
import { billsReducer } from './app.reducer';
import { BillsEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    BillsListComponent,
    AddBillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot({ appState: billsReducer }),
    EffectsModule.forRoot([BillsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [BillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
