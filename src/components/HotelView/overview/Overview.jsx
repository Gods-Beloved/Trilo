import Location from "./Location";
import Rating from "./Rating";
import Stars from "./Stars";

function Overview() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Linda Dor</h1>
      <Stars />
      <Location />
      <Rating />
    </div>
  );
}

export default Overview;
