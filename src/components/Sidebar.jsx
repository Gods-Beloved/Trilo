import { useState } from "react";

function Sidebar() {
  const [active, setIsActive] = useState("Hotel");

  const handleNavItemClick = (tab) => {
    console.log(tab);
    setIsActive(tab);
  };

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li
          className={`side-nav__item side-nav__item${
            active === "Hotel" ? "--active" : ""
          }`}
          onClick={() => handleNavItemClick("Hotel")}
        >
          <a href="#" className="side-nav__link ">
            <svg className="side-nav__icon">
              <use xlinkHref="./sprite.svg#icon-home"></use>
            </svg>
            <span className="side-nav__title">Hotel</span>
          </a>
        </li>
        <li
          className={`side-nav__item side-nav__item${
            active === "Flight" ? "--active" : ""
          }`}
          onClick={() => handleNavItemClick("Flight")}
        >
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span className="side-nav__title">Flight</span>
          </a>
        </li>
        <li
          className={`side-nav__item side-nav__item${
            active === "Car Rental" ? "--active" : ""
          }`}
          onClick={() => handleNavItemClick("Car Rental")}
        >
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./sprite.svg#icon-key"></use>
            </svg>
            <span className="side-nav__title">Car Rental</span>
          </a>
        </li>
        <li
          className={`side-nav__item side-nav__item${
            active === "Tours" ? "--active" : ""
          }`}
          onClick={() => handleNavItemClick("Tours")}
        >
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./sprite.svg#icon-map"></use>
            </svg>
            <span className="side-nav__title">Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">&copy; 2017 by trillo. All Rights Reserved</div>
    </nav>
  );
}

export default Sidebar;
