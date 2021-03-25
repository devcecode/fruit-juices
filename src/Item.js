import React from "react";
import './item.css'

const Item = ({ image, title, description, price }) => {
  return (
    <div className="item">
      <div className="item__container">
        <img src={image} alt="" />
        <div className="item__description">
          <h2>{title}</h2>
          <p><small>Descripción:</small>{description}</p>
          <p><small>Precio:</small>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
