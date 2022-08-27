import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

//lấy đối tượng từ json hiện ra  web và đưa icon ra theo tường đối tượng
import NavBar from "../../data/navBar.json";

function Navbar() {
  return (
    <div className="container-fluid contaner-navbar">
      <div className="row navbar-row">
        <div className="col-md-10">
          <h2 className="navabar-sl1"> Booking website</h2>
        </div>
        <div className="col-md-1 navbar-button">
          {/**tạo hai nút */}
          <button>Register</button>
        </div>
        <div className="col-md-1 navbar-button">
          <button>Login</button>
        </div>
      </div>
      <div className="navbar-sl">
        {NavBar.map((navbar, i) => {
          return (
            <p
              key={i}
              //tạo border cho  đối tượng có active
              className={navbar.active ? "active" : null}
              // style={{ border: "1px solid green" }}
            >
              {/* <i className='fa fa-bed>'></i> */}
              <i className={`fa ${navbar.icon}`}></i>
              {navbar.type}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default Navbar;
