import { BookComponent } from './book/book.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'school-library';
 
  books = [
    { id: 1, name: 'book1 '},
    { id: 2, name: 'book2 '},
    { id: 3, name: 'book3 '}
  ]; 

  bookId: number;
  title: any;
  author: any;
  locNum: any;


  trackBook(index, book){
    return book ? book.id : undefined;  
  } 
   
task = {
  title: 'review Applications',
  assignee: {
    // name: 'Jorjbushjit Singh' 
    name: 'Jorjbushjit Singh' 
  }
}  

  /*
  onAdd() {
    this.books.push({ id: 4, name: 'book4' });
  }*/ 

  /*
  onChange(book) {
    
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);
    

    //course.name = 'UPDATED';
  }
  */

 getAllBooks()
 {
   console.log('Asking for all books in library');
 }

 getOneBookById(myId: Number)
 {
  console.log('Searching for book by id number:  ' + myId);
  console.log('Searching for book by id number:  ' + this.bookId);
 }

 getOneBookByTitle(myTitle: Text)
 {
  console.log('Searching for book by title:  ' + myTitle);
  console.log('Searching for book by title:  ' + this.title);
 }

 getOneBookByAuthor(myAuthor: Text)
 {
  console.log('Searching for book by author:  ' + myAuthor);
  console.log('Searching for book by author:  ' + this.author);
 }

 getOneBookByLOCNum(myLOCNum: Text)
 {
  console.log('Searching for book by Library of Congress ID:  ' + myLOCNum);
  console.log('Searching for book by Library of Congress ID:  ' + this.locNum);
 }

 /* Add a book using the JSON format in an HTML form*/
 addBookByForm()
 {
  console.log('Attempting to add the requested book.');
 }

 /* Remove a book by Id number, pass in an id number */
 removeBookByID(myId: Number)
 {
  console.log('Attempting to remove the requested book by id.' + this.bookId);
 }

/* Update an existing book using the JSON format in an HTML form*/
updateBookByForm()
{
 console.log('Attempting to update the requested book.');
}


}
