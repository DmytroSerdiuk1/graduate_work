import React, { Component } from "react";
import {Link} from 'react-router-dom';

import remove from '../../img/remove.png';
import tov from '../../img/tov.png';

import './BagCard.scss';

class BagCard extends Component {
  render() {
    return (
      <div className="bag-card w-100 d-flex justify-content-between">
        <div className="bag-card-img">
          <img src={tov} alt="" />
        </div>
        <div className="bag-card-center">
          <div className="bag-card-center__top d-flex justify-content-between">
            <Link to="/catalog" className="bag-card-title">
              Кускен Navy Blue
            </Link>
            <p className='bag-card-price'>16 990₽</p>
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
                <span>218 СМ</span>
                ×
                <span>218 СМ</span>
                ×
                <span>218 СМ</span>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <button className="bag-card-delete">
          <img src={remove} alt="" />
        </button>
      </div>
    );
  }
}

export default BagCard;
