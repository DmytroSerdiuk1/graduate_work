import React from "react";

import "./Loader.scss"

const Loader = () => {
  return (
    <div className="load-wrapper d-flex align-items-center justify-content-center">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}



export default Loader;
