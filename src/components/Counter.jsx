import {useState} from 'react'

// 1. import useState from react


function Counter(props){
    // count is where the state is stored
    // setCount is the updater function
    // useState(0) gives my state the intial value
    const [count,setCount] = useState(0)

    //NEVER update the state directly
    function increaseCount(){
        setCount((prevCount)=> prevCount+1)
    }

    function decreaseCount(){
        setCount(count-1)
    }
    return(
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {count} times</p>

            <button onClick={()=>{setCount(count-1)}}> - </button>
            <button onClick={increaseCount}> + </button>
        </div>
    )
}

export default Counter