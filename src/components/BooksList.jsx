import booksData from '../books.json'
import { useState } from 'react'
import BookCard from './BookCard'

function BooksList(props) {
    console.log(props)
    // const [books, setBooks] = useState(booksData)

    // console.log(props)

   

    return (
        <div>
            {props.books.map((oneBook) => {
                return (
                    <BookCard key={oneBook.id} oneBook={oneBook} deleteBook={props.deleteBook}></BookCard>
                    // <div key={oneBook.id} style={{ border: 'solid black', marginBottom: '4px' }}>
                    //     <h3>{oneBook.title}</h3>
                    //     <h3>{oneBook.author}</h3>
                    //     <button onClick={() => { props.deleteBook(oneBook.id) }}>Delete Book</button>
                    //     {oneBook.title.charAt(0) === "T" && <p> book starts with a capital T</p>}
                    // </div>
                    )
            })}
            <button onClick={() => { props.setBooks(booksData) }}>Repopulate all Books</button>
            <button onClick={() => { props.setBooks([]) }}>Delete All Books</button>
            {/* <button onClick={props.consoleHello}>Say Hello</button> */}
        </div>
    )
}

export default BooksList

