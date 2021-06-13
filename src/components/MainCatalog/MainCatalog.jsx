import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CatalogCard from "../CatalogCard/CatalogCard";

import Loader from '../Loader';

import './MainCatalog.scss'
import WichRestoContext from "../WichRestoContext/WichRestoContext";

class MainCatalog extends Component {
  constructor(){
    super();
    this.state = {
      cards: [],
      error: false,
      loaded: false
    }
  }

  async componentDidMount(){
    const value = await this.props.RestoService.getCards();
    this.setState({
      cards: value,
      error: false,
      loaded: true
    })
  }

  componentDidCatch(){
    this.setState({
      error: true,
      loader: false
    })
  }

  render() {
    if(!this.state.loaded){
      return <Loader/>
    }

    return (
      <section className="catalog">
        <Container>
          <h6 className="catalog-title">Хіти продажу</h6>
          <div className="catalog-wraper row">
            {
              this.state.cards.map((el, i) => {
                return <CatalogCard 
                  img={el.img}
                  key={el._id} 
                  id={el._id} 
                  title={el.name}
                  price={el.price} 
                  stock={el.stock} 
                  weightOBJ={el.weight}/>
              })
            }
          </div>
        </Container>
      </section>
    );
  }
}

export default WichRestoContext()(MainCatalog);
