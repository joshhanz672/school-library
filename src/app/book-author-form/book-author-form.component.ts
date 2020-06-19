import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-author-form',
  templateUrl: './book-author-form.component.html',
  styleUrls: ['./book-author-form.component.css']
})
export class BookAuthorFormComponent implements OnInit {

  constructor() { }

  log(x) {console.log(x);}

  ngOnInit(): void {
  }

  submitAuthor(fA)
  {
    console.log("book author:  ");
    console.log(fA);
    console.log(fA.value.bookAuthorReq.bookAuthor);
  }


}
