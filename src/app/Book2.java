package app;
//import java.io.Serializable;

public class Book2  // implements Serializable 
{
    private long bookId;
    private String bookTitle;
    private String bookAuthor;
    private String locString;
    private int daysCheckOut;
    private boolean isCheckedOut;
    private boolean requestedForReserve;

public Book2(){}

public Book2(Long bookId, String bookTitle, String bookAuthor, String locString, 
    int daysCheckOut, boolean isCheckedOut, boolean requestedForReserve)
    {   
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.locString = locString;
        this.daysCheckOut = daysCheckOut;
        this.isCheckedOut = isCheckedOut;
        this.requestedForReserve = requestedForReserve;
    }

public long getBookId()
{
    return bookId;
}

public void setBookId(Long bookId)
{
    this.bookId = bookId;
}

public String getBookTitle()
{
    return bookTitle;
}

public void setBookTitle(String bookTitle)
{
    this.bookTitle = bookTitle;
}

public String getBookAuthor()
{
    return bookAuthor;
}

public void setBookAuthor(String bookAuthor)
{
    this.bookAuthor = bookAuthor;
}

public String getLocString()
{
    return locString;
}

public void setLocString(String locString)
{
    this.locString = locString;
}

public int getDaysCheckOut()
{
    return daysCheckOut;
}

public void setDaysCheckOut(int daysCheckOut)
{
    this.daysCheckOut = daysCheckOut;
}


public boolean getIsCheckedOut()
{
    return isCheckedOut;
}

public void setIsCheckedOut(boolean isCheckedOut)
{
    this.isCheckedOut = isCheckedOut;
}

public boolean getRequestedForReserve()
{
    return requestedForReserve;
}

public void setRequestedForReserve(boolean requestedForReserve)
{
    this.requestedForReserve = requestedForReserve;
}



}
