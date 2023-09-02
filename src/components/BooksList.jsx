import booksData from '../books.json'
import { useState } from 'react'

function BooksList(){
    const [books,setBooks] = useState(booksData)
    console.log(books)

    function deleteBook(bookId){
        const filteredBooks = books.filter((book)=>{
            return bookId !== book.id
        })

        setBooks(filteredBooks)
    }

    return(
        <div>
            {books.map((oneBook)=>{
                return(
                    <div style={{border:'solid black'}} key={oneBook.id}>
                        <h3>{oneBook.title}</h3>
                        <h3>{oneBook.author}</h3>
                        <button onClick={()=>{deleteBook(oneBook.id)}}>Delete Book</button>
                        {oneBook.title.charAt(0)==="T" &&  <p> book starts with a capital T</p>}
                    </div>

                )
            })}
            <button onClick={()=>{setBooks(booksData)}}>Repopulate all Books</button>
            <button onClick={()=>{setBooks([])}}>Delete All Books</button>

        </div>
    )
}

export default BooksList


//exercise 3:

// if the book starts with a T then print <p> book starts with a capital T</p>