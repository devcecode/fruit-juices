import React from 'react'
import Item from './Item'

import './ensalada-de-fruta.css'
const EnsaladaFrutas = () => {
  return (
    <div className="ensalada__frutas">
      <Item
        image="https://fitfoodiefinds.com/wp-content/uploads/2020/05/saladsq.jpg"
        title="Ensalada de Fruta"
        className="item"
        description="Papaya"
        price="S/ 3.00"
      />
    </div>
  );
}

export default EnsaladaFrutas