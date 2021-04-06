import React from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../Page/Home"
const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={Home}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
