import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CatalogCard from "../CatalogCard/CatalogCard";

import './MainCatalog.scss'

const arrs = ["Asdasd", "Asdd asd", "asdasdasd", '', '', "", "", ""];

class MainCatalog extends Component {
  constructor(){
    super();
    this.state = {
      cards: [],
      error: false,
      loader: true
    }
  }

  componentDidMount(){
    this.setState({
      cards: arrs,
      error: false,
      loader: false
    })
  }

  componentDidCatch(){
    this.setState({
      error: true,
      loader: false
    })
  }

  render() {
    return (
      <section className="catalog">
        <Container>
          <h6 className="catalog-title">Хиты продаж</h6>
          <div className="catalog-wraper row">
            {
              this.state.cards.map((el, i) => {
                return <CatalogCard key={i} id={i} title="Валенсия Beige" price={2500} link={`/catalog/product/${i}`} stock={50} weightOBJ={{width: "12", depth: "16", height: "123"}}/>
              })
            }
          </div>
        </Container>
      </section>
    );
  }
}

export default MainCatalog;
