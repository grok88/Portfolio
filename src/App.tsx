import React from 'react';
import './App.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
