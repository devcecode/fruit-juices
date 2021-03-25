import React from 'react'
import Item from './Item'
import './jugos.css'

const Jugos = () => {
  return (
    <div className="jugos">
      <Item
        image="https://image.freepik.com/foto-gratis/vaso-jugo-papaya-puesto-sobre-piso-marmol-blanco_1150-28077.jpg"
        title="Jugo de Papaya"
        className="item"
        description="Papaya"
        price="S/ 3.00"
      />
      <Item
        image="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/imujer/b/batido-de-sandia%201.jpg"
        title="Jugo de Sandilla"
        className="item"
        description="Sandilla"
        price="S/ 2.00"
      />
      <Item
        image="https://t2.uc.ltmcdn.com/images/1/2/5/img_como_hacer_batido_de_fresa_7521_600.jpg"
        title="Jugo de Fresa"
        className="item"
        description="Fresa, Leche"
        price="S/ 5.00"
      />
      <Item
        image="https://www.recetas-guatemala.com/base/stock/Recipe/227-image/227-image_web.jpg"
        title="Jugo de Mango"
        className="item"
        description="Mango"
        price="S/ 2.00"
      />
      {/* <Item
        image="https://img-global.cpcdn.com/recipes/ed59416c1ba2c7e7/751x532cq70/jugo-surtido-foto-principal.jpg"
        title="Jugo Mixto"
        className="item"
        description="Papaya, Platano, Fresa, Pera"
        price="S/ 4.00"
      /> */}
      <Item
        image="https://files.wapa.pe/Wapa/2019/03/28/jugo-de-pera-portada-1553734838.jpg"
        title="Jugo de pera"
        className="item"
        description="Piña"
        price="S/ 3.00"
      />
    </div>
  );
}

export default Jugos