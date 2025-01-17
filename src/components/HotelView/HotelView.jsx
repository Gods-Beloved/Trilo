import CallToAction from "./details/CallToAction";
import Details from "./details/Details";
import Gallery from "./Gallery";
import Overview from "./overview/Overview";

function HotelView() {
  return (
    <main className="hotel-view">
      <Gallery />
      <Overview />
      <Details />
      <CallToAction />
    </main>
  );
}

export default HotelView;
