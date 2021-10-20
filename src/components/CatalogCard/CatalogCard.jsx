import React, { Component } from "react";
import "./CatalogCard.scss"

import { Link } from "react-router-dom";

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import stockicon from '../../img/stock.png';

import { addToCart, toggleWichlist } from '../../actions';
import { connect } from "react-redux";

class CatalogCard extends Component {
  constructor(){
    super();

    this.state = {
      inBag: false,
      wichList: false
    }
  }

  render() {
    const {name, price, stock, weight, img, wishlist, tags} = this.props.data;
    const {id, AddToWishList, AddToCart, col = 3} = this.props;

    const wishlistColor = wishlist ? <FavoriteIcon style={{color: "red"}}/> : <FavoriteBorderIcon style={{color: "#414141"}}/>;

    const renderStock = stock ? (
    <div className="catalog-card-stock d-flex align-items-center">
      <img src={stockicon} alt="" />
      <p className="ml-1">-{stock}%</p>
    </div>) : null;

    return(
      <div className={`catalog-card d-flex align-items-center flex-column col-sm-6 col-md-4 col-xl-${col}`}>
        {renderStock}
        <button onClick={() => AddToWishList(id)} className='catalog-card-wishlist'>
          {wishlistColor}
        </button>
        <img className="catalog-card-photo" src={img} alt="" />
        <div className="card-text w-100">
          <Link to={`/catalog/product/${id}`} className="catalog-card-title">{name}</Link>
          <p className="catalog-card-tag">{tags[0]}</p>
          <div className="catalog-card-price">{Math.floor(price - price * stock / 100)} ₽</div>
        </div>
        <div className="catalog-card-hover w-100">
          <div className="catalog-card-sise">
            <p className="catalog-card-sise__text">Розміри</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="catalog-card-sise__uper">ШИРИНА</p>
                <div className="catalog-card-sise__value ">{weight.width} СМ</div>
              </div>
              ×
              <div>
                <p className="catalog-card-sise__uper">ГЛИБИНА</p>
                <div className="catalog-card-sise__value">{weight.depth} СМ</div>
              </div>
              ×
              <div>
                <p className="catalog-card-sise__uper">ВИСОТА</p>
                <div className="catalog-card-sise__value">{weight.height} СМ</div>
              </div>
            </div>
          </div>
          <button onClick={() => AddToCart(this.props.data)} className="catalog-card-button">Добавити в корзину</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = {
  AddToCart: addToCart,
  AddToWishList: toggleWichlist
}


export default connect(mapStateToProps, mapDispatchToProps)(CatalogCard);
