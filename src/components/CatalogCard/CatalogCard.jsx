import React, { Component } from "react";
import "./CatalogCard.scss"

import tov from '../../img/tov.png';
import { Link } from "react-router-dom";

import wishlist from '../../img/wishlist-icon.png';
import stockicon from '../../img/stock.png';

class CatalogCard extends Component {
  constructor(){
    super();

    this.state = {
      inBag: false,
      wichList: false
    }
  }

  render() {
    const {title, link, price, stock, weightOBJ} = this.props

    const renderStock = stock ? (
    <div className="catalog-card-stock d-flex align-items-center">
      <img src={stockicon} alt="" />
      <p className="ml-1">-{stock}%</p>
    </div>) : null;
    return(
      <div className="catalog-card d-flex align-items-center flex-column col-sm-6 col-md-4 col-xl-3">
        {renderStock}
        <button onClick={()=>{
          console.log(`${link} Is added in wishlist`);
        }} className='catalog-card-wishlist'>
          <img src={wishlist} alt="Add to wishlist" />
        </button>
        <img className="catalog-card-photo" src={tov} alt="" />
        <div className="card-text w-100">
          <Link to={link} className="catalog-card-title">{title}</Link>
          <p className="catalog-card-tag">Барные стулья</p>
          <div className="catalog-card-price">{Math.floor(price - price * stock / 100)} ₽</div>
        </div>
        <div className="catalog-card-hover w-100">
          <div className="catalog-card-sise">
            <p className="catalog-card-sise__text">Размеры</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="catalog-card-sise__uper">ШИРИНА</p>
                <div className="catalog-card-sise__value ">{weightOBJ.width} СМ</div>
              </div>
              ×
              <div>
                <p className="catalog-card-sise__uper">ГЛУБИНА</p>
                <div className="catalog-card-sise__value">{weightOBJ.depth} СМ</div>
              </div>
              ×
              <div>
                <p className="catalog-card-sise__uper">ВЫСОТА</p>
                <div className="catalog-card-sise__value">{weightOBJ.height} СМ</div>
              </div>
            </div>
          </div>
          <button onClick={()=>{
            this.setState({
              inBag: true
            })
            console.log(`${link} is added in bag`);
          }} className="catalog-card-button">Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default CatalogCard;
