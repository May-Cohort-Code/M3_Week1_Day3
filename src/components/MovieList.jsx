import { useState } from "react";

import movieData from '../movies-data.json'


function MovieList(){

    const [movies,setMovies] = useState(movieData)
    console.log(movies)

    function showScore(score){
        if(score>9){
            return <span>Critically Acclaimed</span>
        }
        else if(score<9 && score>7){
            return <span>This is a great movie</span>
        }
        else{
            return <span>Bad Movie Dont Watch</span>
        }
    }

    function deleteMovie(movieId){
        const filteredMovies = movies.filter((oneMovie)=>{
            return oneMovie._id !== movieId
        })
        setMovies(filteredMovies)

    }
    let omar = {
        name:"Omar",
        isTeacher:true
    }
    
    return(
        <div>
            {omar.isTeacher &&( 
                <div>
                    <h1>Yes you are a teacher</h1>
                    <p>tiago</p>
                    <p>MultiLine Conditional Rendering</p>
                </div>
            )}
            {}
            <h2>Movie List</h2>
            {movies.map((oneMovie)=>{
                return(
                    <div key={oneMovie._id} className="MovieCard">
                        <h3>{oneMovie.title}</h3>
                        <p>Director: {oneMovie.director}</p>
                        <p>Rating: {oneMovie.IMDBRating}</p>
                        {showScore(oneMovie.IMDBRating)}
                        {oneMovie.hasOscars ? <p>Movie has an oscar</p>: <p>Movie does not have an oscar</p>}
                        <button onClick={()=>{deleteMovie(oneMovie._id)}} className="btn-delete">Delete Movie</button>
                    </div>
                )
            })}
    <button onClick={()=>{setMovies([])}}>delete all movies</button>
    <button onClick={()=>{setMovies(movieData)}}>repopulate</button>
        </div>
    )
}

export default MovieList


if(true){

}
else{

}
//exercise:

// 1. import the data from books.json file

// 2. create a state with the intial value being the books you just imported

// 3. map through the books and display the author and the title

// 4. create a function to delete 1 book and the button to click to delete the book

// 5. Bonus: create a button to repopulate all the books


//exercise 2:

// conditionally render if the movie has above 9: "This movie is critically aclaimed"