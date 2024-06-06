import React, { Component } from "react";
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './NotFound';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "@mui/material";

export default class Main extends Component {
    render() {
        return (
            <div className="carousel-container">
                <Carousel showThumbs={false}>
                    <div style={{height:"700px",width:"1550px"}}>
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210714205336/Things-You-Should-Know-About-React-Hooks.png" alt="Image 1" />
                        <Link href={"/UsualHooks"}>
                            <p style={{fontFamily:"Copperplate Gothic Light", background: '#39A7FF',fontSize:30 }} className="legend">Learn how to use React Hooks here</p>
                        </Link>
                    </div>
                    <div style={{height:"600px",width:"1550px"}}>
                        <img src="https://www.syncfusion.com/blogs/wp-content/uploads/2022/04/Implementing-React-Custom-Hooks-A-Complete-Guide.png" alt="Image 2" />
                        <Link href={"/SpecialHooks"}>
                            <p style={{fontFamily:"Copperplate Gothic Light", background: '#39A7FF',fontSize:30 }} className="legend">Learn how to customize React hooks</p>
                        </Link>
                    </div>
                    {/* Add more slides as needed */}
                </Carousel>
            </div>
        )
    }
}