import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from './prime/prime.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OdTableComponent } from './components/od-table/od-table.component';
import { ErrorCompComponent } from './components/error-comp/error-comp.component';
import { HomeComponent } from './components/home/home.component';
import {ProductService} from "./service/productservice";
import { CreateOrderComponent } from './components/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OdTableComponent,
    ErrorCompComponent,
    HomeComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeModule,
    HttpClientModule
  ],
  providers: [MessageService,ProductService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
