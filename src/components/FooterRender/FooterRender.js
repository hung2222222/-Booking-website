import "./FooterRender.css";
// import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../data/footer.json";
function FooterRender() {
  return (
    <div className="container footer-render">
      <div className="row footer-render__row">
        {Footer.map((item, i) => {
          return (
            <div key={i} className="col-md-2 footer-render__p">
              {item.col_values.map((child, i) => {
                return <p key={i}>{child}</p>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FooterRender;
