import React from "react";
import "./ProductMap.css"
import { Link } from "react-router-dom";
function ProductMap(props) {
const reed={
  Background:'red'
}
  return (
    <div className={"mapping"}>
      <div style={reed} className="switching">
        <img src="./assets/images/image2.png" alt="" />
      </div>
      <div className={"text-area"}> 
    <Link  to='/productHover1/products'><h1>{props.data.title}</h1> </Link>
        <p>{props.data.desc}</p>
      </div>
    </div>
  );
}

export default ProductMap;
