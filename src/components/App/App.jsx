import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Page/Home"
import Header from '../Header';
import Bag from '../Page/Bag';
import Footer from '../Footer';
import Product from '../Page/Product';
import NotFound from '../Page/NotFound';
import Catalog from '../Page/Catalog';


import Register from '../Page/Register/Register';
import Wishlist from '../Page/Wishlist/Wishlist';
import WichRestoContext from '../WichRestoContext';
import { connect } from 'react-redux';
import {catalogLoad} from "../../actions"


const App = ({catalogLoad, RestoService, load}) => {
    
    useEffect(() => {
        async function fetchData () {
            const value = await RestoService.getCards();
            catalogLoad(value)
        }
        fetchData();
    }, [RestoService, catalogLoad]);

    if(load){
        return <div>loaded...</div>
    }

    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/bag" component={Bag}/>
                    <Route exact path="/catalog/product/:id" component={Product}/>
                    <Route name="search" path="/catalog/:tag" component={Catalog} />
                    <Route name="search" path="/profile/register" component={Register} />
                    <Route name="search" path="/wishlist" component={Wishlist} />
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

const mapDispatchToProps = {
    catalogLoad
}
const mapStateToProps = (state) => {
    return {
      catalog: state.catalog,
      load: state.catalogLoad
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(WichRestoContext()(App))
