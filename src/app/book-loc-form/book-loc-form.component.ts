import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-loc-form',
  templateUrl: './book-loc-form.component.html',
  styleUrls: ['./book-loc-form.component.css']
})
export class BookLocFormComponent implements OnInit {

  constructor() { }

  log(x) {console.log(x);}

  ngOnInit(): void {
  }

  submitLOC(fL)
  {
    console.log("book LOC:  "); 
    console.log(fL);
    console.log(fL.value.bookLocReq.locId);
  }


}
