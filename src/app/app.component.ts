import { Component } from '@angular/core';

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
  title: any;

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

}
