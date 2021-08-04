import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './Product.scss';
import Loader from '../../Loader';
import WichRestoContext from '../../WichRestoContext';

import './Product.scss'

import FavoriteIcon from '@material-ui/icons/Favorite';
import ProductSlider from "../../ProductSlider/ProductSlider";
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { connect } from "react-redux";
import {addToWishList} from '../../../actions'

class Product extends Component {
  state = {
    loaded: false,
    error: false,
    productData: null
  }

  async componentDidMount(){
    const data = await this.props.RestoService.getCard(this.props.match.params.id);

    this.setState({
      productData: data,
      loaded: true,
      error: false
    })
  }

  render() {
    if(!this.state.loaded){
      return (
        <Container>
          <Loader/>
        </Container>
      )
    }

    
    const wishlistColor = this.state.productData.wishlist ? <FavoriteIcon style={{color: "red"}}/> : <FavoriteBorderIcon style={{color: "#414141"}}/>;
    return (
      <div className="product">
        <Container>
          <div className="product-about row">
            <div className="product-about__left col-7">
              <ProductSlider data={this.state.productData.img}/>
            </div>
            <div className="product-about__right col-5">
              <div className="product-about__star-wrapper mb-2">
                <button>
                  <StarIcon/>
                </button>
                <button>
                  <StarIcon/>
                </button>
                <button>
                  <StarIcon/>
                </button>
                <button>
                  <StarIcon/>
                </button>
                <button>
                  <StarIcon/>
                </button>
              </div>
              <h3 className="product-name">{this.state.productData.name}</h3>
              <p className="mt-1 product-tag">{this.state.productData.tags[0]}</p>
              <div className="product-about__right-wrapper d-flex align-items-center">
                <div className="product-price mt-2">{this.state.productData.price}₽</div>
                <button className="product-button ml-3 mr-2">Купить</button>
                <button onClick={() => this.props.addToWishList(this.state.productData._id)} className="product-addwishlist d-flex align-items-center">
                  {wishlistColor}
                  <p>Добавить в желаемое</p>
                </button>
              </div>
              <div className="product-description-wrapper">
                <h6 className="mt-2">Опис</h6>
                <p className="product-description">{this.state.productData.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({catalog: state.catalog})
const mapDispatchToProps = {
  addToWishList
}

export default connect(mapStateToProps, mapDispatchToProps)(WichRestoContext()(Product));
