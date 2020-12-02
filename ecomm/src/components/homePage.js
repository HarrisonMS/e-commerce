import React from "react";
import "../styles/homePage.scss";
const HomePage = () => {
  return (
    <div className="hompage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SCARFS</h1>
            <span className="subtitle">SHOP</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">SHOP</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
