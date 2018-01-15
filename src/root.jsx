import React, {Component} from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import styled from "styled-components";
import App from "./app.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";

const RootContainer = styled.div`
    box-sizing: border-box;
    background: lavender;
    display: flex;
    flex-direction: column;    
    margin: 0 5vh;
`;


const Root = () => (
    <Router>
        <RootContainer>
            <div>
                <span><Link to = "/">Home</Link></span>
                <span><Link to = "/about">About</Link></span>
                <span><Link to = "/contact">Contact</Link></span>                
            </div>
            <div>
                <Route exact path = "/" component = {App}/>
                <Route exact path = "/about" component = {About}/>
                <Route exact path = "/contact" component = {Contact}/>
            </div>
            <Footer/>
        </RootContainer>
    </Router>
);

export default Root;