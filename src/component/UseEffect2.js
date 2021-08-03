import React,{useState,useEffect} from 'react'

const UseEffect2 = () => {

    const [width, setWidth] = useState(window.screen.width)
    const ScreenSize=()=>{
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        
        window.addEventListener("resize",ScreenSize)
        return () => {
            console.log(" read and delelte")
            window.addEventListener("resize",ScreenSize)
        }
    })
    return (
        <div>
            the six=zw of screen is 
            <h1>{width}</h1>
        </div>
    )
}

export default UseEffect2
