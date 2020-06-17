import { HttpModule} from '@angular/http';
import { BookModule } from './book/book.module';
import { BooksService } from './books.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Book2Module } from './book2/book2.module';
import { PostService } from './services/post.service';
import { GetService } from './services/get.service';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
//import { ContactFormComponent } from './contact-form/contact-form.component';
import { BookReqFormComponent } from './book-req-form/book-req-form.component';
import { PostsComponent } from './posts/posts.component';
import { GetsComponent } from './gets/gets.component';
import { InputFormatDirective } from './input-format.directive';
//import { BookReqFormComponent } from './book-req-form/book-req-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    PostsComponent,
    GetsComponent,
    InputFormatDirective,
    BookReqFormComponent 
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BookModule,
    Book2Module,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  providers: [    
    PostService,
    GetService,
    BooksService
  ],   
  bootstrap: [AppComponent, BookReqFormComponent]
})
export class AppModule { }
