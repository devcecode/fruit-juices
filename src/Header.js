import React, {useState} from 'react'
import { Link } from "react-router-dom";

import HistoryIcon from "@material-ui/icons/History";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import ExploreIcon from "@material-ui/icons/Explore";
import RoomIcon from "@material-ui/icons/Room";
import "./header.css";
import { useSelector } from 'react-redux';

const Header = () => {
  

  let exploreActive = "";
  let mapActive = "";
  let historyActive = "";

  const state = useSelector(state => state.active)

  if(state === 'explore__active') {
    exploreActive = state
  }
  if (state === "map__active") {
    mapActive = state
  }
  if (state === "history__active") {
    historyActive = state
  }
  
  const lola =
    window.location.pathname !== "/" ? (
      <div className="header">
        <div className="header__container">
          <div className="logo">
            <Link to="/explore" className="header__link">
              {/* <FastfoodOutlinedIcon className="header__icon" /> */}
              <StorefrontIcon className="header__icon" />
            </Link>
          </div>
          <div className="main__navigation">
            <ul>
              <li>
                <Link to="/explore" className={`header__link ${exploreActive}`}>
                  {exploreActive !== "explore__active" ? (
                    <ExploreOutlinedIcon className="header__icon" />
                  ) : (
                    <ExploreIcon className="header__icon" />
                  )}
                  {/* <HomeOutlinedIcon className="header__icon" /> */}
                </Link>
              </li>
              <li>
                <Link to="/map" className={`header__link ${mapActive}`}>
                  {/* <WhatsAppIcon className="header__icon" /> */}
                  {/* <QueryBuilderOutlinedIcon className="header__icon" /> */}

                  {mapActive !== "map__active" ? (
                    <RoomOutlinedIcon className="header__icon" />
                  ) : (
                    <RoomIcon className="header__icon" />
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <div className="plus__navigation">
            <Link to="/history" className={`header__link ${historyActive}`}>
              <HistoryIcon className="header__icon" />
            </Link>
          </div>
        </div>
      </div>
    ) : null;
  
  return lola
}

export default Header