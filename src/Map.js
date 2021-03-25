import React, { useEffect } from 'react'
import './map.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

import { useDispatch } from "react-redux";

const Map = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE",
      payload: "map__active",
    });
  }, []);
  return (
    <div className="map">
      <div className="map__sections">
        <div className="telephone" className="map__section telephone">
          <h2>
            <WhatsAppIcon className="map__icon" /> Teléfono
          </h2>
          <p className="map__paragraph__whatsapp">044 - 000000</p>
        </div>
        <div className="Horary" className="map__section horary">
          <h2>
            <QueryBuilderOutlinedIcon className="map__icon" /> Horario
          </h2>
          <p className="map__paragraph__horary">
            Lunes a Domingo 8:00 am - 5:00 pm
          </p>
        </div>
        <div className="Location" className="map__section location">
          <h2>
            <RoomOutlinedIcon className="map__icon" /> Dirección
          </h2>
          <p className="map__paragraph__direction">
            Calle Atahualpa, 220 Huanchaco Tradicional, Trujillo 13001
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2245317719903!2d-79.12170918462373!3d-8.078568394183563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3bfce742e179%3A0x565e866bbdf80e90!2sHuanchaco!5e0!3m2!1ses!2spe!4v1616689377006!5m2!1ses!2spe"
        frameborder="0"
        style={{ border: 0, outline: "none" }}
        allowfullscreen=""
        aria-hidden={true}
        tabindex="0"
        className="my__map"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map
