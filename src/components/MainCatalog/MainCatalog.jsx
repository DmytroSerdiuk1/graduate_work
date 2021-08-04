import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CatalogCard from "../CatalogCard/CatalogCard";
import {connect} from "react-redux"
import {catalogLoad} from "../../actions"

import Loader from '../Loader';

import './MainCatalog.scss'

class MainCatalog extends Component {
  constructor(){
    super();
    this.state = {
      cards: [],
      error: false,
      loaded: false
    }
  }

  componentDidMount(){
    this.setState({
      cards: this.props.catalog,
      error: false
    })
  }

  componentDidCatch(){
    this.setState({
      error: true,
      loader: false
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.catalog !== prevProps.catalog) {
      this.setState({
        cards: this.props.catalog
      })
    }
  }


  render() {
    if(this.props.load){
      return <Loader/>
    }

    return (
      <section className="catalog">
        <Container>
          <h6 className="catalog-title">Хіти продажу</h6>
          <div className="catalog-wraper row">
            {
              this.state.cards.map((el, i) => {
                return <CatalogCard 
                  key={el._id} 
                  id={el._id} 
                  data={el}
                />
              })
            }
          </div>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catalog: state.catalog,
    load: state.catalogLoad
  }
}

const mapDispatchToProps = {
  catalogLoad
}


export default connect(mapStateToProps, mapDispatchToProps)(MainCatalog);
