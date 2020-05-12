import React from 'react';
import './App.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills />
        </div>
    );
}

export default App;
