import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import BagCard from "../../BagCard";
import {toggleWichlist} from "../../../actions";

class Wishlist extends Component {
  render() {
    return <Container>
      {
        this.props.wishlist.map((el) => {
           return this.props.catalog.filter(e => e._id === el).map(card => {
             return (
              <BagCard key={card._id} id={card._id} data={card} eventFunc={this.props.toggleWichlist}/>
             )
           })
        })
      }
    </Container>;
  }
}


const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
    catalog: state.catalog
  }
}
const MapDispatchToProps = {
  toggleWichlist: toggleWichlist
}

export default connect(mapStateToProps, MapDispatchToProps)(Wishlist);
