import React from "react"
import { Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { ChatPage } from "../src/pages/ChatPage";
const App = () => {
   
  return (
    <div className="App">
 
   <Route path="/" component={Home} exact/>
   <Route path="/chat" component={ChatPage} />

    </div>
  );
}

export default App
