import "bootstrap/dist/css/bootstrap.css";
import TypeRender from "../../data/type.json";
import "./HotelRender.css";

//hiển thị image type
function HotelRender() {
  return (
    <div className="container">
      <div className="row hotel-row">
        <div>
          <h3>Borwse by property type</h3>
        </div>
        {TypeRender.map((type, i) => {
          return (
            <div key={i} className="col-md-2 hotel-img">
              <div>
                <img src={type.image} alt="img"></img>
              </div>
              <div className="hotel-name">
                <h4>{type.name}</h4>
                <p>{type.count} hotels</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HotelRender;
