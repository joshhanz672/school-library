package app;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


/*
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
*/

//import org.springframework.web.bind.annotation.RestController;

//@RestController
//@RequestMapping(value = "http://localhost:8080/books") //Put in the books2 API for Springboot
public class book2Controller{
private List<Book2> books = new ArrayList<Book2>();

book2Controller()
{
  this.books = buildBooks();

}


@RequestMapping(method = RequestMethod.POST)
public List<Book2> saveBook2(@RequestBody Book2 book2) {
Long nextBookId = 0L;
if (this.books.size() != 0) {
Book2 lastBook = this.books.stream().skip(this.books.size() - 1).findFirst().orElse(null);
nextBookId = lastBook.getBookId() + 1;
}
book2.setBookId(nextBookId);
this.books.add(book2);
return this.books;
}


public List<Book2> deleteBook2(@PathVariable Long id) {
  for(Iterator<Book2> itr=this.books.iterator();itr.hasNext();)
  {
  Book2 book = itr.next();
  Long inId = book.getBookId();
  if(inId == (id)){
  itr.remove();
  }
  }
  return this.books;
  }

List<Book2> buildBooks() {
  List<Book2> bks = new ArrayList<>();
  Book2 bks1 = buildBook(10L, "Thesaurus", "Roget", "AB200", 0, false, false);
  Book2 bks2 = buildBook(20L, "My Kingdom", "Shakespeare, Robert", "QE250", 10, false, false);
  Book2 bks3 = buildBook(30L, "Das Lowercase", "Marks, Wilhelm", "JC150", 10, false, false);
  bks.add(bks1);
  bks.add(bks2);
  bks.add(bks3);
  return bks;
  }

  Book2 buildBook(Long bookId, String bookTitle, String bookAuthor, String locString, 
  int daysCheckOut, boolean isCheckedOut, boolean requestedForReserve)
   {
    Book2 bk = new Book2(bookId, bookTitle, bookAuthor, locString, 
    daysCheckOut, isCheckedOut, requestedForReserve);
    return bk;
    }



}