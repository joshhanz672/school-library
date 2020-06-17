import { Book2Service } from './../book2.service';
import { Component, OnInit, Input } from '@angular/core';
import { Book2 } from "../book2";
import { Router } from '@angular/router';


@Component({
  selector: 'app-book2-list',
  templateUrl: './book2-list.component.html',
  styleUrls: ['./book2-list.component.css'],
  providers: [Book2Service]
})
export class Book2ListComponent implements OnInit {
//private books: Book2[];
public books: Book2[];


  constructor(private router: Router,
    private book2Service: Book2Service) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.book2Service.findAll().then(
      books => {
    this.books = books;
    },
    err => {
    console.log(err);
    }
   );
    }

    createBook2() {
      /*
        bookId: number;
        bookTitle: string;
        bookAuthor: string;
        locRef: string;
        allowedCheckoutDays: number;
        isCheckedOut: boolean;
        putOnRequest: boolean;
      */

      let bookId = (<HTMLInputElement>document.getElementById('bookId')).value;
      let bookTitle = (<HTMLInputElement>document.getElementById('bookTitle')).value;
      let bookAuthor = (<HTMLInputElement>document.getElementById('bookAuthor')).value;
      let locRef = (<HTMLInputElement>document.getElementById('locRef')).value;
      let allowedCheckoutDays = (<HTMLInputElement>document.getElementById('allowedCheckoutDays')).value;
      let isCheckedOut = (<HTMLInputElement>document.getElementById('isCheckedOut')).value;
      let putOnRequest = (<HTMLInputElement>document.getElementById('putOnRequest')).value;

      let book = new Book2(Number(bookId), bookTitle, bookAuthor, locRef, 
          Number(allowedCheckoutDays), Boolean(isCheckedOut), Boolean(putOnRequest));
      this.book2Service.createBook2(book).then(
      books => {
      this.books = books;
      },
      err => {
      console.log(err);
      }
      );
      }

     deleteBook2(book2: Book2) {
      this.book2Service.deleteBook2ById(book2.bookId).then(
      books => {
      this.books = books;
      },
      err => {
      console.log(err);
      }
      );
      }

}
