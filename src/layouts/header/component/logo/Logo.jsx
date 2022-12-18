import React from "react";
import "./Logo.scss";
import { NavLink } from "react-router-dom";

const name="Phan thị ngọc anh"
function Logo(props) {
  return (
    <div className="logo">
      <NavLink className="logo--link" to="/shop">
        {name.slice("").pop}
      </NavLink>
    </div>
  );
}

Logo.propTypes = {};

export default Logo;
