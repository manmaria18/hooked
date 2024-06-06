import React, { Component } from "react";
//import Header from './Header'
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import NotFound from './NotFound';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {AccordionListTwo} from "./AccordionListTwo"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';

export default class SpecialHooksPage extends Component {
    render() {
        return (
            <div className="special-hooks-container">
                <h1 id="h1Blue"> CUSTOM HOOKS </h1>
                <AccordionListTwo/>

            </div>
        )
    }
}