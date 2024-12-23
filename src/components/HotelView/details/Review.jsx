function Review({ text, name, date, rating, image }) {
  return (
    <figure className="review">
      <blockquote className="review__text">{text}</blockquote>
      <figcaption className="review__user">
        <img src={image} alt="user" className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{name}</p>
          <p className="review_user-date">{date}</p>
        </div>
        <div className="review__rating">{rating}</div>
      </figcaption>
    </figure>
  );
}

export default Review;
