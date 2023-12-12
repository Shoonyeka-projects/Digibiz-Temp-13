import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import Serevices from './pages/Serevices';
import About from './pages/About';
import Team from './pages/Team';
import Choose from './pages/Choose';
import Contact from './pages/Contact';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/services"}`} component={Serevices} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team} />
                <Route exact path={`${process.env.PUBLIC_URL + "/choose"}`} component={Choose} />
                <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}