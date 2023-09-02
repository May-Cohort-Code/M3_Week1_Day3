


function StudentList(){
    const myStudents = ['tiago',"Hadrien","Maria","Biljana","Marcos"]
   

    return(
        <div className="list">
            <h2>Student List</h2>
            <ul>
               {myStudents.map((element,index)=>{
                    return(
                        // Anytime we map and return JSX we need a unique key prop
                        <div key={element}>
                             <li>{element}</li>
                             <p>{index}</p>

                        </div>
                    )
               })}


              
            </ul>
        </div>
    )
}

export default StudentList