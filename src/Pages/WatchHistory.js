import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHistory } from "../Services/allApi";

function WatchHistory() {
  const [watchHistory,setWatchHistory] = useState([])
  const watchSearchHistory = async()=>{
    // get watch history api
    const {data} = await getHistory()
    setWatchHistory(data)
    // console.log(data);
  }

  useEffect(()=>{
    watchSearchHistory()
  },[])
  console.log(watchHistory);
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
            {
              watchHistory.length>0 ?
              watchHistory.map((history,index)=>{
                return <tr>
                <td>{index + 1}</td>
                <td>{history?.caption}</td>
                <td> <Link to={history?.embeddedLink} target="blank">{history?.embeddedLink}</Link></td>
                <td>{history?.timeStamb}</td>
            </tr>

              })
            
            :<p>nothing to display</p>
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
