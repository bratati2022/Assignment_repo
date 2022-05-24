import React, { useEffect, useState } from "react";

import Link from "@mui/material/Link";

import Container from "@mui/material/Container";
import axios from "axios";

const Collection = () => {
  const [carDetails, setcarDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cardetails").then((res) => {
      setcarDetails(res.data);
    });
  }, []);

  return (
    <Container component="main" maxWidth="s">
      <div className="row">
        <ul className="auction-list mb-4 pl-5 d-flex align-items-center">
          <select className="sec">
            <option value="All Auctions">All Auctions</option>
          </select>
          <select name="make" className="sec">
            <option value="BMW">BMW</option>
          </select>
          <li>
            <a>
              Make <i className="fa fa-caret-down"></i>
            </a>
            <ul className="list-drop-scrolled">
              <li className="li-input">
                <input type="text" />
              </li>
              <li>
                <a>BMW</a>
              </li>
            </ul>
          </li>
          <li>
            <p className="reset-filter mb-0">
              <a> Reset Filters</a>
            </p>
          </li>
        </ul>
      </div>
      <div className="row">
        {carDetails.map((data) => (
          <div className="col-lg-4 col-sm-6 col-xs-12" key={data.id}>
            <div className="">
              <div className="">
                <img
                  className="car_collection"
                  src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="post"
                />
              </div>
              <div className="block_txt mb-0">
                <h6>
                  <br />
                  {`${data.year} ${data.model} ${data.company} `}
                </h6>
                <h6>Auction-End-Date {`${data.auctiontime}`}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Collection;
