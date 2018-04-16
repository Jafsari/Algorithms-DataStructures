class Book{
    constructor(author,genre){
      this.author = author;
      this.genre = genre;
    }
  }
  class BookReader{
    constructor(){
      this.currentBook = null;
      this.books = {};
    }
    add(title,Author,Genre){
      if (this.books[title] === undefined){
        this.books[title] = new Book(Author,Genre);
      } else {
        console.log('This book is already in the system');
      }
    }
    remove(title){
      if (this.books[title]){
        delete this.books[title];
      } else {
        console.log('This book is not inside of the system');
      }
    }
    find(title){
      return this.books[title];
    }
    open(title){
      if(this.books[title]){
        this.currentBook = this.books[title];
      }
    }
  }
  
  var bookReader = new BookReader();
  bookReader.add('Harry Potter','J.K. Rowling','Realistic');
  bookReader.add('To Kill a Mockingbird','Harper Lee','Literature');
  
  console.log(bookReader);
  