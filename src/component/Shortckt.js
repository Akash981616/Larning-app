import React ,{useState}from 'react'

const Shortckt = () => {
    const [demo, setdemo] = useState("")
    return (
        <div>
            <h1 className="row1">
            {demo ||"kumar"}
            </h1>
        </div>
    )
}

export default Shortckt
