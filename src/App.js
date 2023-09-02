import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import StudentList from './components/StudentList';
import ProjectList from './components/ProjectList';
import MovieList from './components/MovieList';
import BooksList from './components/BooksList';
import Spinner from './components/Spinner';

function App() {

  if(3>5 && 2>1){

  }

  let myArray = ["Hadrien","Tiago","Kiruba"]

 const newArray = myArray.map((element)=>{
    return element + " is in Web Dev Bootcamp"
  })

  //console.log(newArray)

  const filteredArray = myArray.filter((element)=>{
    return !(element === "Tiago")
  })


 // console.log(filteredArray)

    const [theme, setTheme] = useState('light')
    const [isLoading,setIsloading] = useState(false)
    // 1. conditional if else for the return of a component
    if(isLoading){
      return(
        <div className='App'>
           <Spinner></Spinner>

        </div>
      )
    }
    else{
      return(
        <div className='App'>
        <MovieList></MovieList>
        {/* <BooksList></BooksList> */}

     </div>

      )
    }
  // return (
  //   <div className={"App " + theme}>
  //    {/* <Counter name="Hardrien"></Counter>
  //     <input onClick={(event)=>{console.log(event)}} type="text" />

  //     <select onChange={(event)=>{setTheme(event.target.value)}}>
  //       <option value="light">Light</option>
  //       <option value="dark">Dark</option>
  //     </select> */}
  //     {/* <StudentList></StudentList> */}
  //     {/* <ProjectList></ProjectList> */}
  //     <Spinner></Spinner>
  //     {/* <MovieList></MovieList> */}
  //     {/* <BooksList></BooksList> */}
  //   </div>
  // );
}

export default App;
