function Description() {
  return (
    <div className="description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul className="list">
        <li className="list__item">Close to the beach</li>
        <li className="list__item">Breakfast included</li>
        <li className="list__item">Free airpot shuttle</li>
        <li className="list__item">Free wifi in all rooms</li>
        <li className="list__item">Air Conditioning and heating</li>
        <li className="list__item">Pets Allowed</li>
        <li className="list__item">We Speak all languagues</li>
        <li className="list__item">Perfect for families</li>
        {/* <li className="list__item">Close to the beach</li> */}
      </ul>
      <div className="recommend">
        <p className="recommend__count">
          Lucy and 3 other friends recommend this hotel
        </p>
        <div className="recommend__friends">
          <img
            src="./img/user-3.jpg"
            alt="Friend 1"
            className="recommend__photo"
          />
          <img
            src="./img/user-4.jpg"
            alt="Friend 2"
            className="recommend__photo"
          />
          <img
            src="./img/user-5.jpg"
            alt="Friend 3"
            className="recommend__photo"
          />
          <img
            src="./img/user-6.jpg"
            alt="Friend 4"
            className="recommend__photo"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
