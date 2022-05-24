import React, { useState } from "react";
import "../App.css";
import Container from "@mui/material/Container";
import axios from "axios";
import { Navigate } from "react-router-dom";

const SubmitVehicle = () => {
  const [model, setModel] = useState("");
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [auctiontime, setAuctiontime] = useState("");
  let payload = {
    model: model,
    company: company,
    year: year,
    auctiontime: auctiontime,
    // image: image,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(payload);
    axios
      .post("http://localhost:3001/cardetails", payload)
      .then((res) => {
        console.log(res);
      })
      // Navigate('/collections')
      .catch((error) => {
        console.log((error.response || {}).data);
        return false;
      });
  };

  return (
    <>
      <Container component="main" maxWidth="s">
        <div className="colHead">
          <h2>Submit your Vehicle</h2>
          <p>
            Collector Chassis is a social platform for enthusiasts, hobbyists
            and collectors to showcase to showcase, spectate, buy and sell
            vintage, classic and special interest vehicles.
          </p>

          <strong>Choose: "Cool Collections" or "Awesome Auctions"</strong>
        </div>
        <div className="tab">
          <h2>Process</h2>
          <div className="tabButtons">
            <ul>
              <li className="tab1Btn active">Cool Collections</li>
              <li className="tab2Btn">Awesome Auctions</li>
            </ul>
          </div>
          <form style={{ margin: "10px", padding: "10px" }}>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label for="validationDefault01">Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="Model"
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label for="validationDefault02">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  placeholder="Company"
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label for="validationDefault03">Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="Year"
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label for="validationDefault04">Auction end time</label>
                <input
                  type="date"
                  className="form-control"
                  id="auction date"
                  placeholder="Auction end time"
                  onChange={(e) => setAuctiontime(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SubmitVehicle;
