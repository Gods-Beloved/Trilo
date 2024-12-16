import HotelView from "./HotelView/HotelView";
import Sidebar from "./Sidebar";

function Content() {
  return (
    <div className="content">
      <Sidebar />
      <HotelView />
    </div>
  );
}

export default Content;
