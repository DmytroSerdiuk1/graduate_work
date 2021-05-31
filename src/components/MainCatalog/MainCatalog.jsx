import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CatalogCard from "../CatalogCard/CatalogCard";

import './MainCatalog.scss'

class MainCatalog extends Component {
  constructor(){
    super();
    this.Arr = ["Asdasd", "Asdd asd", "asdasdasd", '', '', "", "", ""];
  }
  render() {
    return (
      <section className="catalog">
        <Container>
          <h6 className="catalog-title">Хиты продаж</h6>
          <div className="catalog-wraper row">
            {
              this.Arr.map((el, i) => {
                return <CatalogCard key={i} title="Валенсия Beige" price={2500} link={`/catalog/${i}`} stock={50} weightOBJ={{width: "12", depth: "16", height: "123"}}/>
              })
            }
          </div>
        </Container>
      </section>
    );
  }
}

export default MainCatalog;
