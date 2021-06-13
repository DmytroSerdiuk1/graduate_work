import React, { Component } from "react";
import { Container } from "react-bootstrap";

import './Product.scss';
import Loader from '../../Loader';


import WichRestoContext from '../../WichRestoContext';

class Product extends Component {
  state = {
    productData: null,
    loaded: false,
    error: false
  }

  async componentDidMount(){
    const data = await this.props.RestoService.getCard(this.props.match.params.id)

    this.setState({
      productData: data,
      loaded: true,
      error: false
    })

    console.log(this.state.productData);
  }

  render() {
    if(!this.state.loaded){
      return (
        <Container>
          <Loader/>
        </Container>
      )
    }

    return (
      <div className="product">
        <Container>
          <div className="product-about row">
            <div className="product-about__left">
              <img src={this.state.productData.img} alt="" />
            </div>
            <div className="product-about__right">
              <h3 className="product-name">{this.state.productData.name}</h3>
              <p>{this.state.productData.tags[0]}</p>
              <div className="product-about__right-wrapper d-flex align-items-center">
                <div className="product-price">{this.state.productData.price}₽</div>
                <button>Купить</button>
                <div>
                  <img src="" alt="" />
                  <p>Добавить в желаемое</p>
                </div>
              </div>
              <div className="product-descripton-wrapper">
                <h4>Опис</h4>
                <p>{this.state.productData.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default WichRestoContext()(Product);
