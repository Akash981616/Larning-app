import React,{useReducer} from 'react'
const initialState=0;
const reducer=(state,action)=>{
    if(action.type=== "INCREMENT"){
       return state +1;
    }
    
    else if(action.type=== "DECREMENT"){
       return state -1;
    }
    else if(action.type==="RESET"){
        return state =0;
    }
    
    return state;
}

const UseReducer1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={
                ()=>dispatch({type:"INCREMENT"})
            }>increment +++</button>
            <button onClick={
                ()=>dispatch({type:"DECREMENT"})
            }>decrement +++</button>
            <button onClick={
                ()=>dispatch({type:"RESET"})
            }>RESET+++</button>
        </>
    )
}

export default UseReducer1
