function Gallery() {
  return (
    <div className="gallery">
      <figure className="gallery__item">
        <img
          src="/img/hotel-1.jpg"
          alt="gallery of photo 1"
          className="gallery__photo"
        />
      </figure>
      <figure className="gallery__item">
        <img
          src="/img/hotel-2.jpg"
          alt="gallery of photo 2"
          className="gallery__photo"
        />
      </figure>
      <figure className="gallery__item">
        <img
          src="/img/hotel-3.jpg"
          alt="gallery of photo 3"
          className="gallery__photo"
        />
      </figure>
    </div>
  );
}

export default Gallery;
