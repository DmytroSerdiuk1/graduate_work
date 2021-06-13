import React from "react";
import RestoContext from '../RestoContext';

const WichRestoContext = () => (Wrapped) => {
  return (props) => {
    return (
      <RestoContext.Consumer>
        {
          (Resto) => {
            return <Wrapped {...props} RestoService={Resto}/>
          }
        }
      </RestoContext.Consumer>
    )
  }
}

export default WichRestoContext;
