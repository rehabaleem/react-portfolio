import React, { useState } from "react";
import "./header.css";
function Header() {
  const [showModel, setshowModel] = useState(false);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div></div>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact </a>
          </li>
        </ul>
      </nav>
      <div></div>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModel(false);
                }}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
export default Header;
