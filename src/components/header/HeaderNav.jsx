function HeaderNav() {
  return (
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="/sprite.svg#icon-bookmark"></use>
        </svg>
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="/sprite.svg#icon-chat"></use>
        </svg>
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__user-box">
        <img src="/img/user.jpg" alt="" className="user-nav__user-photo" />
        <span className="user-nav__user-name">James Godwill Arkoh</span>
      </div>
    </nav>
  );
}

export default HeaderNav;
