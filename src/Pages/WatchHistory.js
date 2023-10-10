import React from "react";
import { Link } from "react-router-dom";

function WatchHistory() {
  return (
    <>
      <div className="container d-flex justify-content-between mt-5">
        <h4>Watch history</h4>
        <Link to="/homepage" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <i className="fa-solid fa-left-long"></i> Back to home
        </Link>
      </div>
      <div className="mb-5 mt-5 container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>caption</th>
              <th>URL</th>
              <th>Timestamp</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>vijay</td>
              <td> <Link to='https://www.youtube.com/watch?v=Po3jStA673E&pp=ygUFdmlqYXk%3D' target="blank">https://www.youtube.com/watch?v=Po3jStA673E&pp=ygUFdmlqYXk%3D</Link></td>
              <td>12/09/21</td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
