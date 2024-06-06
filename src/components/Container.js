import React, { Component } from "react";
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import NotFound from './NotFound';
import RegularHooksPage from './RegularHooksPage'
import SpecialHooksPage from './SpecialHooksPage'
export default class Container extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/UsualHooks" element={<RegularHooksPage />} />
                    <Route path="/SpecialHooks" element={<SpecialHooksPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/*<!--<SimpleSnackbar /> >*/}
            </Router>
        )
    }
}

// // Define UsualComponent and SpecialComponent components as needed
// function UsualComponent() {
//     return <div>This is the Usual Component</div>;
// }
//
// function SpecialComponent() {
//     return <div>This is the Special Component</div>;
// }
