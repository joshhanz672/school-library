import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'books', // <books> <div class ="books"> "#books"
    template: `<h2>{{ "Welcome to the University library - " + title }}</h2>
    <ul>
        <li *ngFor="let book of books">
            {{ book }}
        </li>

    </ul>
    <h3>More books to be added in the future</h3>

    `,
    providers: [BooksService]
})
export class BooksComponent implements OnInit{
    title="List of Books";
    books;

     bookId: number;
     bookTitle: string;
     bookAuthor: string;
     locRef: string;
     allowedCheckoutDays: number;
     isCheckedOut: boolean;
     putOnRequest: boolean;

   //books=["Erbschaft", "Calcooloos", "Drowrings", "El Beeblo", 
     //   "PSYC 01A (Concepts of Psychology) Lecture Notes", "BIOL 04A (Botany 1st semester) Lecture Notes"];
    
    /*getTitle()
    {
        return this.title;
    }
    */

    ;

    constructor(private router: Router, private booksService: BooksService) {
        this.books = booksService.getBooks();

        
    }



    ngOnInit(): void {
       // throw new Error("Method not implemented.");
       this.books = this.booksService.getBooks();
    }

    getAllBooks()
    {
        this.booksService.getBooks();
    }
}