import React from "react"
import "./App.css"
import { store } from "./store/Store"
import {Provider} from "react-redux"
import Form2 from "./component/Form2"


store.subscribe(()=>console.log(store))
const App = () => {
   
  return (
    <div>
    <h1>Redux</h1>
  
    <Form2/>

    </div>
  )
}

export default App
