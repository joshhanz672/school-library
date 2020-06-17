export class Book2{
    bookId: number;
     bookTitle: string;
     bookAuthor: string;
     locRef: string;
     allowedCheckoutDays: number;
     isCheckedOut: boolean;
     putOnRequest: boolean;

     constructor(bookId: number, bookTitle: string, bookAuthor: string, 
        locRef: string, allowedCheckoutDays: number, isCheckedOut: boolean, putOnRequest: boolean) { 
            this.bookId = bookId;
            this.bookTitle = bookTitle;
            this.bookAuthor = bookAuthor;
            this.locRef = locRef;
            this.allowedCheckoutDays = allowedCheckoutDays;
            this.putOnRequest = putOnRequest;
        }

}