import "./CityRender.css";
import CtyRenderJson from "../../data/city.json";
import "bootstrap/dist/css/bootstrap.css";
import HotelRender from "../HotelRender/HotelRender";
import HotelList from "../HotelList/HotelList";

//hiển thị cty tòn trang home
function CtyRender() {
  return (
    <div className="container contain-img">
      <div className="row">
        {/** sử dụng map để lấy dữ liệu từ file json */}
        {CtyRenderJson.map((city, i) => {
          return (
            <div key={i} className="col-md-4 city-row">
              <div className="absolute">
                {/**hiển thị name và subtext */}
                <h3>{city.name}</h3>
                <p>{city.subText}</p>
              </div>
              <div className="city-img">
                {/**hiển thị hình ảnh city */}
                <img src={city.image} alt="img"></img>
              </div>
            </div>
          );
        })}
      </div>
      <HotelRender />
      <HotelList />
    </div>
  );
}
export default CtyRender;
