import Serch from "../../data/search.json";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchList.css";

function SearchList() {
  return (
    <div className="container search">
      <div className="row search-row">
        <div className="col-md-3 ">
          <div className="search-list">
            <div>
              <h5>search</h5>
            </div>
            <div>
              <p className="search-list__p" style={{ marginBottom: "-2px" }}>
                Destination
              </p>
              <input className="input" type="text"></input>
            </div>
            <div>
              <p className="search-list__p" style={{ marginBottom: "-2px" }}>
                Check-in Date
              </p>
              <input
                className="input"
                type="text"
                placeholder="06/24/2022 to 06/24/2022"
              ></input>
            </div>
            <div>
              <p className="search-list__p" style={{ fontSize: "80%" }}>
                Options
              </p>
              <div className="menu-in">
                <label>
                  <tr>
                    <td>Min price per night</td>
                    <td>
                      <input className="inpu" type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>max price per night</td>
                    <td>
                      <input className="inpu" type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Adult</td>
                    <td>
                      <input
                        className="inpu"
                        type="number"
                        placeholder="1"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Children</td>
                    <td>
                      <input
                        className="inpu"
                        type="number"
                        placeholder="0"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Room</td>
                    <td>
                      <input
                        className="inpu"
                        type="number"
                        placeholder="1"
                      ></input>
                    </td>
                  </tr>
                </label>
              </div>
            </div>

            <div>
              <button>Serch</button>
            </div>
          </div>
        </div>
        <div className="col-md-9 search-popup">
          <div className="row">
            {Serch.map((search) => {
              return (
                <div className="col-md-12">
                  <div className="row search-row_md">
                    <div className="col-md-4">
                      <img
                        style={{ width: "90%" }}
                        src={search.image_url}
                        alt="img"
                      />
                    </div>
                    <div className="col-md-5 search-md5">
                      <h4>{search.name}</h4>
                      <p>{search.distance} from center</p>
                      <p>{search.description}</p>
                      <p className="search-tag">{search.tag}</p>
                      <p className="search-type">{search.type}</p>
                      <p className="search-free" style={{ fontWeight: "bold" }}>
                        Free cancellation
                      </p>
                      {search.free_cancel && (
                        <p className="search-free">
                          You can cancel later, so lock in this great price
                          today!
                        </p>
                      )}
                    </div>
                    <div className="col-md-3">
                      <h5 className="search-rate">
                        {search.rate_text} <span>{search.rate}</span>
                      </h5>
                      <div className="search-price">
                        <p
                          className="search-price__p"
                          style={{ fontSize: "200%" }}
                        >
                          ${search.price}
                        </p>
                        <p className="search-text">inclucdes taxes and fees</p>
                        <button>See avaliabilty</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchList;
