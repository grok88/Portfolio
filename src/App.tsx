import React from 'react';
import './App.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contact />
        </div>
    );
}

export default App;
