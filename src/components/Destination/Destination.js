import React, { useState } from "react";
import { FaPeopleCarry } from "react-icons/fa";
import { useParams } from "react-router";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import ridersData from "../Home/ridersData";
import "./Destination.css";

const Destination = () => {
  document.title = "Destination";
  const [searchValue, setSearchValue] = useState("");
  console.log("search value", searchValue);
  const { id } = useParams();
  const [getVehicle, setGetVehicle] = useState(false);
  const {
    title,
    title2,
    title3,
    imgUrl,
    imgUrl2,
    imgUrl3,
    price,
    price2,
    price3,
    capacity,
  } = getVehicle;
  const handleSearch = (e) => {
    if (e.target.name === "form") {
      setSearchValue({
        from: e.target.value,
      });
    }
    if (e.target.name === "to") {
      setSearchValue({
        to: e.target.value,
      });
    }
    const getItem = ridersData.find((pd) => pd.id == id);
    setGetVehicle(getItem);
    console.log(getVehicle);
  };

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <div className="row destination-container">
        {getVehicle ? (
          <div className="main-search-container">
            <div className=" search-container">
              <div className="search-value">
                <li>Mirpur</li>
                <li>Dhanmondhi</li>
              </div>
            </div>
            <div className=" conditional-detail">
              <img src={imgUrl} alt="" />
              <h2>{title}</h2>
              <h3>
                <FaPeopleCarry />
              </h3>
              <h4>{capacity}</h4>
              <p>${price}</p>
            </div>
            <div className=" conditional-detail">
              <img src={imgUrl2} alt="" />
              <h2>{title2}</h2>
              <h3>
                <FaPeopleCarry />
              </h3>
              <h4>{capacity}</h4>
              <p>${price2}</p>
            </div>
            <div className=" conditional-detail">
              <img src={imgUrl3} alt="" />
              <h2>{title3}</h2>
              <h3>
                <FaPeopleCarry />
              </h3>
              <h4>{capacity}</h4>
              <p>${price3}</p>
            </div>
          </div>
        ) : (
          <div className="col-md-4  pick-box  ">
            <div className="pick-form">
              <form action="" onSubmit={handleSearch}>
                <label For="from">Pick From</label>
                <br />
                <input
                  type="text"
                  name="from"
                  id="from"
                  placeholder="Pick From"
                />
                <br />
                <label For="to">To</label>
                <br />
                <input type="text" name="from" id="to" placeholder="To" />
                <br />
                <label For="date">Set Date</label>
                <br />
                <input type="date" name="date" id="date" />
                <br />
                <label For="time">When</label>
                <br />
                <input type="time" name="time" id="time" />
                <br />
                <input onClick={handleSearch} type="button" value="Search" />
              </form>
            </div>
          </div>
        )}
        <div className="col-md-6 pb-5">
          <GoogleMaps></GoogleMaps>
        </div>
      </div>
    </div>
  );
};

export default Destination;
