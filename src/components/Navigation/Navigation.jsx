import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';

import kitchen from '../../img/kitchen-icon.png';
import bedroom from '../../img/bedroom-icon.png';
import livingroom from '../../img/livingroom-icon.png';
import closet from '../../img/closet-icon.png';
import office from '../../img/office-icon.png';
import childrensroom from '../../img/childrensroom-icon.png';
import { connect } from "react-redux";
import { ActiveMenu } from '../../actions';

class Navigation extends Component {
  render() {
    const adaptiveActive = this.props.menuActive ? 'nav-active' : ''

    return (
      <nav className={`nav d-flex justify-content-around ${adaptiveActive}`}>
        <NavLink className="nav-link" to="/catalog/kitchen">
          <img src={kitchen} alt="icon" />
          Кухні
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/bedroom">
          <img src={bedroom} alt="icon" />
          Спальні
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/livingroom">
          <img src={livingroom} alt="icon" />
          Вітальні
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/closet">
          <img src={closet} alt="icon" />
          Прихожі
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/office">
          <img src={office} alt="icon" />
          Офісні меблі
        </NavLink>
        <NavLink className="nav-link"  to="/catalog/childrensroom">
          <img src={childrensroom} alt="icon" />
          Дитяча
        </NavLink>
        <NavLink className="nav-link" to="">
          Акції
        </NavLink>
      </nav>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    menuActive: state.menuActive
  }
}

const mapDispatchToProps = {
  menuActivs: ActiveMenu
}


export default connect(mapStatetoProps, mapDispatchToProps)(Navigation);
