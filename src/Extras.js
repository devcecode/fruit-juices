import React from 'react'
import Item from './Item'
import './extras.css'
const Extras = () => {
  return (
    <div className="extras">
      <Item
        image="https://rutadelcafeperuano.com/wp-content/uploads/2018/03/NEYRA.png"
        title="Café"
        className="item"
        description="Café"
        price="S/ 5.00"
      />
      <Item
        image="https://tastesbetterfromscratch.com/wp-content/uploads/2010/06/Hersheys-Perfectly-Chocolate-Chocolate-Cake-13-500x500.jpg"
        title="keke"
        className="item"
        description="keke"
        price="S/ 5.00"
      />
      <Item
        image="https://cdn.statically.io/img/www.comeperuano.pe/wp-content/uploads/2020/03/tamales-2.jpg?quality=100&f=auto"
        title="Tamales"
        className="item"
        description="tamal"
        price="S/ 5.00"
      />
    </div>
  );
}

export default Extras