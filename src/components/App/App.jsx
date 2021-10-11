import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Switch, Route, useLocation } from "react-router-dom";

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
import {catalogLoad, catalogFetchError} from "../../actions"



const App = ({catalogLoad, RestoService, catalogFetchError, load}) => {
    const [error, setError] = useState(false);
    const [loades, setLoad] = useState(true);
    const [apiError, setApiError] = useState(false)
    const location = useLocation();

    useEffect(() => {
        async function fetchData () {
            await RestoService.getCards().then(res => {
                catalogLoad(res)
                setLoad(false)
            }).catch(res => {
                setApiError(true)
                setError(true)
                setLoad(false)
            });
        }
        fetchData();
    }, [RestoService, catalogLoad]);

    useEffect(()=>{
        console.log(location);
    }, [location])

    if(loades){
        return <div>Load....</div>
    }

    if(apiError) {
        return <div>
            Отсуствует подключение к серверу API
        </div>
    }

    if(error){
        return <div>ERROR {error}</div>
    }

    return (
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
    )
}

const mapDispatchToProps = {
    catalogLoad,
    catalogFetchError
}
const mapStateToProps = (state) => {
    return {
      catalog: state.catalog,
      load: state.catalogLoad
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(WichRestoContext()(App))
