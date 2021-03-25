import React from 'react'
import Item from './Item'

import './sandwiches.css'

const Sandwiches = () => {
  return (
    <div className="sandwiches">
      <Item
        image="https://cdn.kiwilimon.com/recetaimagen/14209/11960.jpg"
        title="Sandwich de Pollo"
        className="item"
        description="Pollo, Papa, Tomate, Cebolla, Lechuga"
        price="S/ 3.00"
      />
      <Item
        image="https://assets.kraftfoods.com/recipe_images/opendeploy/124311_640x428.jpg"
        title="Sandwich de Huevo"
        className="item"
        description="Huevo, Jamon, Lechuga Tomate"
        price="S/ 2.50"
      />
      <Item
        image="https://i.pinimg.com/originals/aa/4e/a7/aa4ea72608c81bb46f91087e73b85072.jpg"
        title="Sandwich de Lomo"
        className="item"
        description="Lomo, papa, cebolla"
        price="S/ 4.00"
      />
      <Item
        image="https://previews.123rf.com/images/margouillat/margouillat1401/margouillat140100687/25280891-s%C3%A1ndwich-de-hot-dog.jpg"
        title="Sandwich de Hotdog"
        className="item"
        description="Hotdog, Lechuga"
        price="S/ 2.00"
      />
    </div>
  );
}

export default Sandwiches