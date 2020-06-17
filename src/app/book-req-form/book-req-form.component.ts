import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-req-form',
  templateUrl: './book-req-form.component.html',
  styleUrls: ['./book-req-form.component.css']
})
export class BookReqFormComponent implements OnInit {

  constructor() { }

  log(x) {console.log(x);}

  ngOnInit(): void {
  }

  submitTitle(f)
  {
    /**
     * Expected action
     * fetch('http://localhost:8080/books/bybooktitle/{bybooktitle}')
  .then(response => response.json())
  .then(json => console.log(json))

  @GetMapping("/books/bybooktitle/{bybooktitle}")
     */
    console.log(f);
  }

  submitAuthor(f)
  {
    console.log(f);
  }

  submitLOC(f)
  {
    console.log(f);
  }

}
