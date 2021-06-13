import React, { Component } from "react";
import { Container } from "react-bootstrap";

import './Error.scss'

class Error extends Component {
  constructor (props) {
    super(props);
    this.state =  {
      error: false
    };
  }

  componentDidCatch(){
    this.setState({
      error: true
    });
    console.error("Errors");
  }

  render() {
    if(this.state.error){
      return (
        <Container>
          <div className="error-wrapper">
           <h5 className="error-title text-center">Error!</h5>
          </div>
        </Container>
      )
    }

    return this.props.children
  }
}

export default Error;