import './App.css';
import BooksList from './components/BooksList';
import Summary from './components/Summary';
import booksData from './books.json'
import { useState } from 'react'

function App() {
  const [books, setBooks] = useState(booksData)
  console.log(books.length)

  function consoleHello(){
    console.log("Hello")
  }
  function deleteBook(bookId) {
    const filteredBooks = books.filter((book) => {
        return bookId !== book.id
    })

    setBooks(filteredBooks)
}

  return (
    <div className='App'>
      <BooksList deleteBook={deleteBook} setBooks={setBooks} books = {books}></BooksList>
      <Summary books={books}></Summary>
    </div>

  )
}

export default App;
