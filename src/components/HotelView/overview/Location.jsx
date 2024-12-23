function Location() {
  return (
    <div className="overview__location">
      <svg className="overview__locIcon">
        <use xlinkHref="/sprite.svg#icon-location-pin"></use>
      </svg>
      <button className="btn-inline">Greater Accra</button>
    </div>
  );
}

export default Location;
