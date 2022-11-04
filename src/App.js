import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Main />
        </BrowserRouter>
    )
}

export default App