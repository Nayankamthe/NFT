import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ControlledTabs from "./ControlledTabs";
import products from "./Products";

function Owner() {
  const items = products.map((data) => {
    return (
      <div className="card ">
        <img
          src={data.ProductImage}
          width="180px"
          height="250px"
          alt="Product"
          className="card-img-top"
        />
        <Link to={`/ItemDetails/${data.ProductToken}`}>
          <button className="btn btn-outline-primary my-1 ">List </button>
        </Link>
        <div className="card-body cardti">
          <h6 className="card-title">Mined by:{data.MineBy} </h6>
          <h6 className=" card-subtitle">Name:{data.NameOfProduct}</h6>
        </div>
      </div>
    );
  });
  return (
    <body className="container-fluid px-4 my-3" id="#Owner">
      <div className="row ">
        <div className="col-2">
          <div className="row">
            <div className="card">
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
                <h3 className="nav-link " aria-current="page">
                  Nayan Kamthe
                </h3>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Transaction">
                  Transection Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Create">
                  Create NFTS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-10 px-4">
          <div className="row container-fluid">
            <ControlledTabs />
          </div>

          <div className="row row-cols-auto row-cols-1 row-cols-md-3 g-4 my-3">
            {items}
          </div>
        </div>
      </div>
    </body>
  );
}
export default Owner;
