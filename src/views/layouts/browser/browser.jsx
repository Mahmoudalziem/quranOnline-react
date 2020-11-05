import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/// Handling Components

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';
class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Footer />
            </Router>
        );
    }
}

export default App;