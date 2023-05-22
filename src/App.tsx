import React, {useState} from "react";
import "./App.css";
import {Gallery} from "./components/index";

function App() {
    const [count, setCount] = useState(0);

    return <Gallery/>;
}

export default App;
