function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link ">
            <svg className="side-nav__icon">
              <use xlinkHref="./sprite.svg#icon-home"></use>
            </svg>
            <span className="side-nav__title">Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./sprite.svg#icon-aircraft-take-off"></use>
            </svg>
            <span className="side-nav__title">Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./sprite.svg#icon-key"></use>
            </svg>
            <span className="side-nav__title">Car Rental</span>
          </a>
        </li>
        <li className="side-nav__item">
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
