import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/home"}>home</Link>
        </li>
        <li>
          <Link to={"/Pages"}>pages</Link>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
