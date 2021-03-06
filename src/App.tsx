import React from 'react';
import style from './App.module.scss';
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {Sidebar} from "./components/sidebar/Sidebar";
// import frontEnd from "./assets/images/frontend.jpg";
// import photo from "./assets/images/photo.jpg";

const App = () => {
    return (
        <>
            <Sidebar/>
            <div className={style.mainContent}>
                {/*<div className={style.logo}>*/}
                {/*    <h1>*/}
                {/*        <a href="#">*/}
                {/*            <img src={photo} alt="logo"/>*/}
                {/*        </a>*/}
                {/*    </h1>*/}
                {/*</div>*/}
                <Main/>
                <Skills/>
                <Works/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
