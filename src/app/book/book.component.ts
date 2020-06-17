import { Book2Service } from './../book2/book2.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  locRef: string;
  allowedCheckoutDays: number;
  isCheckedOut: boolean;
  putOnRequest: boolean;

  /*
  constructor(bookId: number, bookTitle: string, bookAuthor: string, 
    locRef: string, allowedCheckoutDays: number, isCheckedOut: boolean, putOnRequest: boolean) { 
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.locRef = locRef;
        this.allowedCheckoutDays = allowedCheckoutDays;
        this.putOnRequest = putOnRequest;
    }
    */

  constructor(private router: Router, private Book2Service: Book2Service) { }

  ngOnInit(): void {
    
  }

   

}
