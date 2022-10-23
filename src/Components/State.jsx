import { useState } from "react";

function State(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default State