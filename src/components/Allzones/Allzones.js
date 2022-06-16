import React from "react";
import "./Allzones.css";
import { BsThreeDotsVertical } from "react-icons/bs";

function Allzones() {
  return (
    <div className="vinay-container">
      <div className="my-bg-container">
        <div className="all-zone-heading-container">
          <h1 className="my-heading">All Zones</h1>
          <button className="create-new-button">CREATE NEW</button>
        </div>

        <div className="all-zones-card-container">
          <div className="all-zones-left-card-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653546836/shopping_wodc4h.jpg"
              alt="shopping"
              className="all-zones-shopping-image"
            />
            <div>
              <p className="all-zones-card-heading">Diet foods</p>
              <p className="all-zones-card-description">
                Building No. 12, Whitefeilds, Hyderabad
              </p>
            </div>
          </div>
          <div className="all-zones-right-card-container">
            <div>
              <p className="all-zones-floor-heading">Floor</p>
              <p className="all-zones-floor-description">12th Floor</p>
            </div>
            <div>
              <p className="all-zones-floor-heading">Cameras</p>
              <p className="all-zones-floor-description">22, 23</p>
            </div>
            <BsThreeDotsVertical className="three-dot-icon" />
          </div>
        </div>
        <div className="all-zones-card-container">
          <div className="all-zones-left-card-container">
            <img
              src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653546836/shopping_wodc4h.jpg"
              alt="shopping"
              className="all-zones-shopping-image"
            />
            <div>
              <p className="all-zones-card-heading">Diet foods</p>
              <p className="all-zones-card-description">
                Building No. 12, Whitefeilds, Hyderabad
              </p>
            </div>
          </div>
          <div className="all-zones-right-card-container">
            <div>
              <p className="all-zones-floor-heading">Floor</p>
              <p className="all-zones-floor-description">12th Floor</p>
            </div>
            <div>
              <p className="all-zones-floor-heading">Cameras</p>
              <p className="all-zones-floor-description">22, 23</p>
            </div>
            <BsThreeDotsVertical className="three-dot-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allzones;
