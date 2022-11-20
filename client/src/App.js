import React from "react";
import { Routes, BrowserRouter, Route, Link} from 'react-router-dom';
import Registration from "./components/Registration";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home"
import "./style.css";

function App() {

    return (
        <BrowserRouter>
        <div>
            <Header />
            <br/>
            <br/>
            <br/>
                <button type="button" id="homeBtn" className="btn-lg"><Link to="/">Home</Link></button>
                <p></p>
                <button type="button" id="logBtn" className="btn-lg"><Link to="/login">Login</Link></button>
                <p></p>
                <button type="button" id="regBtn" className="btn-lg"><Link to="/registration">Register
                </Link></button>
            <br/>
            <br/>

            <br/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Registration" element={<Registration />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
