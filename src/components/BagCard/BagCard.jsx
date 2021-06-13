import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import remove from '../../img/remove.png';
import {removeFromCart} from '../../actions';

import './BagCard.scss';

class BagCard extends Component {
  render() {
    return (
      <div className="bag-card w-100 d-flex justify-content-between">
        <div className="bag-card-img">
          <img src={this.props.data.img} alt="" />
        </div>
        <div className="bag-card-center">
          <div className="bag-card-center__top d-flex justify-content-between">
            <Link to={`/catalog/product/${this.props.id}`} className="bag-card-title">
              {this.props.data.name}
            </Link>
            <p className='bag-card-price'>{this.props.data.price}₽</p>
          </div>
          <div className="bag-card-center__bottom mt-3 d-flex justify-content-between">
            <div className="bag-card-value d-flex">
              <p className="bag-card-tag">Количество:</p>
              <span className='bag-card-values'>1</span>
            </div>
            <div className="bag-card-size d-flex">
              <p className="bag-card-tag">
                Размер(Ш×Д×В):
              </p>
              <div className="bag-card-values">
                <span>{this.props.data.weight.width} СМ</span>
                ×
                <span>{this.props.data.weight.depth} СМ</span>
                ×
                <span>{this.props.data.weight.height} СМ</span>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <button onClick={()=> {
          this.props.removeCart(this.props.id)
        }} className="bag-card-delete">
          <img src={remove} alt="" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({bag}) => {
  return {
    bag: bag
  }
}

const mapDispatchToProps = {
  removeCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(BagCard);
