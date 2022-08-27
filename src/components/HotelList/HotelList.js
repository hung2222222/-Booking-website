import "./HotelList.css";
import Hotel_list from "../../data/hotel_list.json";
import "bootstrap/dist/css/bootstrap.css";

//hiển thị danh sách khách sạn và thông tin cụ thê
function HotelList() {
  return (
    <div className="container hotel-list">
      <div className="row hotel-list__row">
        <h3> Homes guests love</h3>
        {Hotel_list.map((item, i) => {
          return (
            <div key={i} className="col-md-3">
              <div className="hotelList-img">
                <img src={item.image_url} alt="img"></img>
              </div>
              <div className="hotel-list__footer">
                <a href="/detail">{item.name}</a>
                <p>{item.city}</p>
                <p className="hoel-list__p"> Starting from {item.price}$</p>

                <p>
                  {" "}
                  <span> {item.rate}</span>
                  {item.type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HotelList;
