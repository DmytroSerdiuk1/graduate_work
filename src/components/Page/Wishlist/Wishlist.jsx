import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import BagCard from "../../BagCard";

class Wishlist extends Component {
  render() {
    return <Container>
      {
        this.props.wishlist.map((el) => {
           return this.props.catalog.filter(e => e._id === el).map(card => {
             return (
              <BagCard key={card._id} id={card._id} data={card}/>
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

export default connect(mapStateToProps)(Wishlist);
