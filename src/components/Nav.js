import React from "react";
import {Link} from "react-router-dom";

const Nav = () => (
  <>
    <h2>Nav</h2>
    <ul>
      <li>
        <Link to={`/menu`}>Menu</Link>
      </li>
      <li>
        <Link to={`/order`}>Order</Link>
      </li>
      <li>
        <Link to={`/locations`}>Locations</Link>
      </li>
      <li>
        <Link to={`/about`}>About</Link>
      </li>
      <li>
        <Link to={`/contact`}>Contact</Link>
      </li>
    </ul>
  </>
);

export default Nav;
