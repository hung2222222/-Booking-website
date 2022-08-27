import DetailJson from "../../data/detail.json";
import NavBar from "../../components/Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "./Detail.css";
import FooterRender from "../../components/FooterRender/FooterRender";
import FromRender from "../../components/FromRender/FromRender";
const Detail = () => {
  return (
    <div>
      <NavBar />
      <div className="container detail">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-9">
            <h1>{DetailJson.name}</h1>
            <p>
              <i className="fa fa-map-marker"></i> {DetailJson.address}
            </p>
            <p className="detail-distance">{DetailJson.distance}</p>
            <p className="detail-price">{DetailJson.price}</p>
          </div>
          <div className="col-md-3">
            <button className="detail-bt">Reserve of Book Now!</button>
          </div>
        </div>
        <div className="row">
          {DetailJson.photos.map((detail) => {
            return (
              <div className="col-md-4 ">
                <img className="detail-img" src={detail} alt="img" />
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-8">
              <h1>{DetailJson.title}</h1>
              <p>{DetailJson.description}</p>
            </div>
            <div className="col-md-4 detail-nine">
              <h5 style={{ marginTop: "20px" }}>Perfect for a 9-night stay!</h5>
              <p>
                Located in the real heart of krakow, this property has a an
                excellentm location score of 9.8!
              </p>
              <div className="row">
                <div className="col-md-2">
                  <p
                    className=""
                    style={{ marginTop: "30px", fontWeight: "bold" }}
                  >
                    ${DetailJson.nine_night_price}
                  </p>
                </div>
                <div className="col-md-10">
                  <p style={{ marginTop: "30px" }}>(9 nights)</p>
                </div>
              </div>

              <button>Reserve of Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <FromRender />
      <FooterRender />
    </div>
  );
};

export default Detail;
