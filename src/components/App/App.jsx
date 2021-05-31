import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

import Home from "../Page/Home"
import Header from '../Header';
import Bag from '../Page/Bag';
import Footer from '../Footer';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/bag" component={Bag}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
