import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import axios from "axios";

const Collection = () => {
  const companyname = new Set();
  const [carDetails, setcarDetails] = useState([]);
  const [company, setCompany] = useState([...companyname]);
  // const [users, setUsers] = useState([]);

  const handleSearch = () => {
    const search_result = company.filter();
    console.log(search_result);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/cardetails").then((res) => {
      setcarDetails(res.data);
      console.log(res.data);
      res.data.map((details) => companyname.add(details.company));
      setCompany([...companyname]);
    });
  }, []);
  // var timer;
  // function fnSearch() {
  //   console.log("fnSearch called");
  // }

  // function fnDebounce() {
  //   clearTimeout(timer);
  //   timer = setTimeout(function () {
  //     fnSearch();
  //   }, 1000);
  // }

  return (
    <Container component="main" maxWidth="s">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Auctions
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Maker
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <input
                  type="text"
                  className="dropdown-item"
                  id="dropdown-input"
                  onChange={handleSearch}
                />

                {company.map((details) => (
                  <div className="">
                    <option>{details}</option>
                  </div>
                ))}
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Reset filters
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
