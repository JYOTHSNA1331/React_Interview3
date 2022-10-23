import {useState,useEffect} from 'react'

function Effect(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log(count)
    })
    return(
        <div>
            count : {count} <br></br>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Effect