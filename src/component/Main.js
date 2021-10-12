import React from "react";
import ReactDOM from "react-dom";
import Owner from "./Owner";
import { Link } from "react-router-dom";

import products from "./Products";
import { useParams } from "react-router-dom";

function Main() {
  const { id } = useParams();
  console.log("I", id);
  var getbasevalue = JSON.parse(localStorage.getItem("setbasevalue"));
  console.log(getbasevalue);

  // var a = [];
  // a = JSON.parse(localStorage.getItem("bidArray"));
  // console.log(a);

  const items = products.map((data) => {
    const myfunction = () => {
      if (data.ProductToken === id) {
        var a = JSON.parse(localStorage.getItem("bid"));
      }
      return Math.max(a);
    };
    return (
      <div className="card p-md-3">
        <img
          src={data.ProductImage}
          width="100px"
          height="250px"
          alt="Product"
          className="card-img-top"
        />
        <Link to={`/AuctionBid/${data.ProductToken}`}>
          <button className="btn btn-outline-primary my-1 ">Bid </button>
        </Link>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h6 className="card-title">Mined by:{data.MineBy} </h6>
              <h6 className=" card-sub-title">Name:{data.NameOfProduct}</h6>
            </div>
            <div className="col-auto">
              <h6 className="card-title">Ehter:{getbasevalue}</h6>
              <h6 className="card-title">{myfunction()}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <body className="container-fluid px-4 my-3 ">
      <div className="header">
        <h2 className="navbar-brand">NFT's</h2>
      </div>
      <div className="row ">
        <div className=" card col-2 my-0">
          <div className="row">
            <div className="card my-4">
              <img
                src="../../public/assets/img7.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">Time remain!</div>
            </div>
          </div>
          <div className="row">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="Item/Owner">
                  Owner Name
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Item/Transaction">
                  Transection Details
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card col-10 px-4">
          <div className="row row-cols-auto row-cols-1 row-cols-md-3 g-4 my-1 ">
            {items}
          </div>
        </div>
      </div>
    </body>
  );
}
export default Main;
