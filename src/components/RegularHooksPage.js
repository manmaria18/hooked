import React, { Component } from "react";
//import Header from './Header'
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import NotFound from './NotFound';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import {AccordionListOne} from './AccordionListOne';
import "./PagesStyles.css"; // Import the CSS file

export default class RegularHooksPage extends Component {
    render() {
        return (
            <div className="regular-hooks-container">
                <h1> REGULAR HOOKS </h1>
                <AccordionListOne />
            </div>
        )
    }
}