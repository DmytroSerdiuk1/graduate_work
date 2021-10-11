import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import './Header.scss'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import logo from '../../img/logo.png';

import { ActiveMenu } from '../../actions';

import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
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
                <FavoriteIcon style={{ fill: '#666' }}/>
                </NavLink>
              <NavLink exact className="header-link" to="/bag">
                <LocalMallIcon style={{ fill: '#666' }}/>
                {renderBagRound}
              </NavLink>
              <NavLink exact className="header-link" to="/profile">
                <PersonIcon style={{ fill: '#666' }}/>
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
