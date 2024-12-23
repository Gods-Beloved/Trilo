import Review from "./Review";

function UserReviews() {
  return (
    <div className="user-reviews">
      <Review
        image="img/user-1.jpg"
        rating={7.8}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
"
        name={"Nick Smith"}
        date={"Feb 23rd, 2024"}
      />
      <Review
        image="img/user-2.jpg"
        rating={9.4}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
"
        name={"Alex Boala"}
        date={"September 23rd, 2024"}
      />
      <button className="btn-inline">
        Show all <span>&rarr;</span>
      </button>
    </div>
  );
}

export default UserReviews;
