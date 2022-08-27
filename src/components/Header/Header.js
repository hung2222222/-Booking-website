import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../pages/search/Search";
import { Link } from "react-router-dom";
// import CalendarComp from "../CalendarComp/CalendarComp";
import SearchDate from "../SearchDate/SearchDate";
// function SearchRender() {
//   location.replace("../../pages/search");
// }
function Header() {
  return (
    <div className="borderHeader">
      <div className="borderHeader1">
        <div>
          <h1>A lifetime of discounts? it's Genius</h1>
          <p>
            Get rewared for your travel - unlock instant siving of 10% of more
            with a tree accond
          </p>
          <div>
            <button className="heard-button">Sign in/Register</button>
          </div>
        </div>

        {/**chia cột tạo input và search */}
        <div className="container-fluid">
          <div className="row borderform">
            <div className="col-md-3">
              <span className="fa fa-bed" />
              <input type="text" placeholder="where are you going?"></input>
            </div>
            <div className="col-md-4">
              <SearchDate />
            </div>
            <div className="col-md-4">
              <span className="fa fa-female" />
              <input
                type="text"
                placeholder="1 adult 0 children 1 room"
                style={{ marginLeft: "4px" }}
              ></input>
            </div>
            {/**tạo button */}
            <div className="col-md-1 ">
              <Link to="/search">
                <button className="heard-button">Search</button>
              </Link>

              {/* <button onClick={SearchRender()}>Search</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
