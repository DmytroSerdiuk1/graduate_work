import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import './Header.scss'

import logo from '../../img/logo.png';

import { ActiveMenu } from '../../actions';

import wishlist from '../../img/wishlist-icon.png';
import bag from '../../img/bag.png';
import profile from '../../img/profile-icon.png';
import menu from '../../img/menu-icon.png';
import Navigation from "../Navigation";
import { connect } from "react-redux";

class Header extends Component {
  constructor(){
    super();
    this.isTrue = false
  }


  render() {
    const renderBagRound = this.props.cart.length ? <div className="header-link_round"></div> : null
    return (
      <header className="header pt-3 pb-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button onClick={this.props.menuActivs} className="header-burger d-lg-none mr-3">
                <img src={menu} alt="" />
              </button>
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </div>

            <div className="link-icon d-flex">
              <NavLink exact className="header-link" to="/wishlist">
                <img src={wishlist} alt="" />
              </NavLink>
              <NavLink exact className="header-link" to="/bag">
                <img src={bag} alt="" />
                {renderBagRound}
              </NavLink>
              <NavLink exact className="header-link" to="/profile">
                <img src={profile} alt="" />
              </NavLink>
            </div>
          </div>

          <Navigation/>
        </Container>
      </header>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    menuActive: state.menuActive,
    cart: state.bag
  }
}

const mapDispatchToProps = {
  menuActivs: ActiveMenu
}

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
