import React, { Component } from "react";
import { Container } from "react-bootstrap";

import CatalogCard from "../../CatalogCard/CatalogCard";
import './Catalog.scss'

const arrs = ["Asdasd", "Asdd asd", "asdasdasd", '', '', "", "", ""];

class Catalog extends Component {
  render() {
    return (
      <Container>
        <div className="catalog d-flex">
          <div className="catalog-left">
            <p className="catalog-left__title">Раздел</p>
            <select className="catalog-left__drops" name="section">
              <option value="value1" defaultValue>Гостинные</option>
              <option value="value2">Значение 2</option>
              <option value="value3">Значение 3</option>
            </select>
            <select className="catalog-left__drops" name="type">
              <option value="value1" defaultValue>Мягкая мебель</option>
              <option value="value2">Значение 2</option>
              <option value="value3">Значение 3</option>
            </select>
            <select className="catalog-left__drops" name="product">
              <option value="value1" defaultValue>Диваны</option>
              <option value="value2">Значение 2</option>
              <option value="value3">Значение 3</option>
            </select>
            <p className="catalog-left__title">Цена</p>
            <p className="catalog-left__title">Бренд</p>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle2">Динс</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle1" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle1">Кускен</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle5" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle5">Эби</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle3" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle3">Реджио</label>
            </div>
            <div className="catalog-left__checkbox">
              <input type="checkbox" id="vehicle4" name="vehicle2" value="Car"></input>
              <label htmlFor="vehicle4">Сайле</label>
            </div>
          </div>
          <div className="catalog-right row">
           {
              arrs.map((el, i) => {
                return <CatalogCard key={i} col={4} id={i} title="Валенсия Beige" price={2500} link={`/catalog/product/${i}`} stock={50} weightOBJ={{width: "12", depth: "16", height: "123"}}/>
              })
            }
          </div>
        </div>
      </Container>
    );
  }
}

export default Catalog;
