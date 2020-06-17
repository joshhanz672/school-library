import { AppComponent } from './../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Book2RoutingModule } from './book2-routing.module';
import { Book2ListComponent } from './book2-list/book2-list.component';


@NgModule({
  declarations: [Book2ListComponent],
  imports: [
    CommonModule,
    Book2RoutingModule
  ]
})
export class Book2Module { }
