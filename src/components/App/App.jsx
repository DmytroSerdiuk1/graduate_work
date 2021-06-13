import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import RestoContext from '../RestoContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Page/Home"
import Header from '../Header';
import Bag from '../Page/Bag';
import Footer from '../Footer';
import Product from '../Page/Product';
import NotFound from '../Page/NotFound';
import Catalog from '../Page/Catalog';

import RestoApi from '../../api';

const restoApi = new RestoApi();

const App = () => {
    return (
        <RestoContext.Provider value={restoApi}>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/bag" component={Bag}/>
                        <Route exact path="/catalog/product/:id" component={Product}/>
                        <Route name="search" path="/catalog/:tag" component={Catalog} />
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </RestoContext.Provider>
    )
}

export default App
