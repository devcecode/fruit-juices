import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";

import Jugos from "./Jugos";
import Sandwiches from "./Sandwiches";
import EnsaladaFrutas from "./EnsaladaFrutas";
import Extras from "./Extras";

import './explore.css'
import { useDispatch } from "react-redux";

const Explore = () => {
  const dispatch = useDispatch()
  const [activeLink, setActiveLink] = useState('jugos')

  const [ activeExplore, setActiveExplore ] = useState('jugos')
  useEffect(() => {
    dispatch({
      type: 'SET_ACTIVE',
      payload: 'explore__active'
    })
  }, [])
  return (
    <Router>
      <div className="explore">
        <div className="explore__container">
          <div className="explore__menu">
            <ul>
              <li>
                <a
                  href="#"
                  className={`${activeLink === "jugos" ? "active" : null}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("jugos");
                    setActiveExplore("jugos");
                  }}
                >
                  Jugos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${activeLink === "sandwiches" ? "active" : null}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("sandwiches");
                    setActiveExplore("sandwiches");
                  }}
                >
                  Sandwiches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${
                    activeLink === "ensalada-frutas" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("ensalada-frutas");
                    setActiveExplore("ensalada-frutas");
                  }}
                >
                  Ensalada Frutas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${activeLink === "extras" ? "active" : null}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("extras");
                    setActiveExplore("extras");
                  }}
                >
                  Extras
                </a>
              </li>
            </ul>
          </div>
          <div className="explore__content">
            {activeExplore === "jugos" ? <Jugos /> : null}
            {activeExplore === "sandwiches" ? <Sandwiches /> : null}
            {activeExplore === "ensalada-frutas" ? <EnsaladaFrutas /> : null}
            {activeExplore === "extras" ? <Extras /> : null}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Explore;
