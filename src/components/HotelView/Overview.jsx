function Overview() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Linda Dor</h1>
      <div className="overview__stars">
        <svg className="overview__starIcon">
          <use xlinkHref="/sprite.svg#icon-star"></use>
        </svg>
        <svg className="overview__starIcon">
          <use xlinkHref="/sprite.svg#icon-star"></use>
        </svg>
        <svg className="overview__starIcon">
          <use xlinkHref="/sprite.svg#icon-star"></use>
        </svg>
        <svg className="overview__starIcon">
          <use xlinkHref="/sprite.svg#icon-star"></use>
        </svg>
        <svg className="overview__starIcon">
          <use xlinkHref="/sprite.svg#icon-star"></use>
        </svg>
        <svg className="overview__starIcon">
          <use xlinkHref="/sprite.svg#icon-star"></use>
        </svg>
      </div>
      <div className="overview__location">
        <svg className="overview__locIcon">
          <use xlinkHref="/sprite.svg#icon-location-pin"></use>
        </svg>
        <button className="btn-inline">Greater Accra</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  );
}

export default Overview;
