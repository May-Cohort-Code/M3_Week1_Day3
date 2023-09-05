function BookCard({oneBook,deleteBook}){

    return(
        <div style={{ border: 'solid black', marginBottom: '4px' }}>
                        <h3>{oneBook.title}</h3>
                        <h3>{oneBook.author}</h3>
                        <button onClick={() => { deleteBook(oneBook.id) }}>Delete Book</button>
                        {oneBook.title.charAt(0) === "T" && <p> book starts with a capital T</p>}
                    </div>
    )
}

export default BookCard