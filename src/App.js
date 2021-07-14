import React,{useState} from "react"
import "./style.css"




function Counter(){

let [score,setScore]=useState(0)                    
    return(
        <div>
            <h1 style={{textAlign:"center"}}> Counter Application </h1>
            <h4> The value of score is {score} . </h4>
            <button onClick={()=>score<25?setScore(score+1):""}>Increment</button>
            <button onClick={()=>score>0?setScore(score-1):""}>Decrement</button>
            <button onClick={()=>{setScore(0)}}>Reset</button>

        </div>

    )
    }

    export default Counter
