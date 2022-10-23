import {useReducer} from 'react'

const InitialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'Inc':
            return state+2
            case 'Dec':
            return state-2
            case 'reset':
            return InitialState 
            default:
                return InitialState
    }
}
function Reducer () {
    const [state,dispatch] = useReducer(reducer,InitialState)
    return(
        <div>
            count : {state} <br></br>
            <button onClick={()=>dispatch('Inc')}>Increment</button>
            <button onClick={()=>dispatch('Dec')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Reducer