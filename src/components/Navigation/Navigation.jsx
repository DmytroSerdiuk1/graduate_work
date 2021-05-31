import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';

import kitchen from '../../img/kitchen-icon.png';
import bedroom from '../../img/bedroom-icon.png';
import livingroom from '../../img/livingroom-icon.png';
import closet from '../../img/closet-icon.png';
import office from '../../img/office-icon.png';
import childrensroom from '../../img/childrensroom-icon.png';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav d-flex justify-content-around">
        <NavLink className="nav-link" to="/catalog/kitchen">
          <img src={kitchen} alt="icon" />
          Кухни
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/bedroom">
          <img src={bedroom} alt="icon" />
          Спальни
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/livingroom">
          <img src={livingroom} alt="icon" />
          Гостинные
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/closet">
          <img src={closet} alt="icon" />
          Прихожие
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/office">
          <img src={office} alt="icon" />
          Офисная мебель
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/childrensroom">
          <img src={childrensroom} alt="icon" />
          Детская
        </NavLink>
        <NavLink className="nav-link" to="">
          Акция
        </NavLink>
      </nav>
    );
  }
}

export default Navigation;
