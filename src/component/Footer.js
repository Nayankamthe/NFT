import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
const Footer = () => {
  return (
    <>
      <div className="card container-fluid bg-dark position-sticky bottom-0 end-0">
        <div className="container-fluid" style={{ height: "50px" }}>
          <h3 className=" text-center text-white">
            {" "}
            All copyright reserve by NFT Foundation
          </h3>
        </div>
      </div>
    </>
  );
};
export default Footer;
