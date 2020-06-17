import { Injectable } from '@angular/core';
import { Book2 } from "./book2";
import { Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class Book2Service {
private apiUrl = 'http://localhost:8080/books';
  http: any;

findAll(): Promise<Array<Book2>> {
  return this.http.get(this.apiUrl)
  .toPromise()
  .then(response => response.json() as Book2[])
  .catch(this.handleError);
  }
  
createBook2(book2: Book2): Promise<Array<Book2>>
{ 
  let bookHeaders = new Headers({ 'Content-Type' : 'application/json' }); 
  return this.http.post(this.apiUrl, JSON.stringify(book2), { headers: bookHeaders})
  .toPromise()
  .then(response => response.json() as Book2[])
  .catch(this.handleError);
}

deleteBook2ById(id: number): Promise<Array<Book2>> {
  const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then(response => response.json() as Book2[])
 .catch(this.handleError);
}

constructor() { 
  }

  private handleError(error: any): Promise<Array<any>>
  {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
