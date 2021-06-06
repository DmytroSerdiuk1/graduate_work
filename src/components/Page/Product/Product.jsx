import React, { Component } from "react";
import { Container } from "react-bootstrap";

import './Product.scss';

class Product extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <div className="product">
        <Container>
          <div className="product-about row">
            <div className="product-about__left">
              <h2>{this.props.match.params.id}</h2>
            </div>
            <div className="product-about__right">

            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Product;
