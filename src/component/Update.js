import React,{useState}from 'react'

const Update = () => {
    const [detail, setDetail] = useState({ id: 0, name: "akash", age: "26" ,degree:"btech cse" },)
    const up=()=>{
        setDetail({...detail,name:"keep doing this"})
    }
    return (
        <div>
            
            <h1>my name is: {detail.name}, age:{detail.age} degree:{detail.degree}</h1>
            <button onClick={up}>update button</button>
        </div>
    )
}

export default Update
