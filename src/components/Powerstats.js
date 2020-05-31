import React from 'react';
import LineProgress from './LineProgress';
import '../css/Powerstats.css';

export const Powerstats = ({ powerstats }) => (
  <ul className="list-powerstats">
    <li> <LineProgress titulo="Combat" color="green" value={verifyIsNull(powerstats.combat)} /></li>
    <li> <LineProgress titulo="Durability" color="blue" value={verifyIsNull(powerstats.durability)} /> </li>
    <li> <LineProgress titulo="Intelligence" color="red" value={verifyIsNull(powerstats.intelligence)} /></li>
    <li> <LineProgress titulo="Power" color="orange" value={verifyIsNull(powerstats.power)} /> </li>
    <li> <LineProgress titulo="Speed" color="purple" value={verifyIsNull(powerstats.speed)} /></li>
    <li> <LineProgress titulo="Strength" color="yellow" value={verifyIsNull(powerstats.strength)} /> </li>
  </ul>
);

const verifyIsNull = (data) => data === "null" ? 0 : data;