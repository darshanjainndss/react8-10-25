import { useState } from "react";
function Counter(props){
const [count,setcount]=useState(props.value)


    return(<>
    <h1>count :{count }</h1>
    <button onClick={()=>setcount(count+1)}>increment</button>
    <button onClick={()=>setcount(count-1)}>decrement</button>
        
    </>)
}
export default Counter