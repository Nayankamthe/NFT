import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import { useParams } from "react-router-dom";
import products from "./Products";
import { Link } from "react-router-dom";

function AuctionList() {
  const { id } = useParams();
  return products
    .filter((data) => data.ProductToken === id)
    .map((data) => {
      return (
        <>
          <div className=" card container-fluid">
            <div className="header">
              <h2 className="navbar-brand">Auction Set</h2>
            </div>
            <div className="row">
              <section className="card container-fluid col-3">
                <div className="card">
                  <div className="card-header">
                    <img
                      src={data.ProductImage}
                      alt={data.NameOfProduct}
                      className=" card-img img-fluid"
                      style={{ height: "300", weight: "200" }}
                    />
                  </div>
                </div>
              </section>
              <section className=" card container-fluid col-9">
                <div className="row">
                  <div className="form ">
                    <div className="form-group my-3">
                      <label
                        htmlFor=".."
                        id="setPrice"
                        className="text-center me-2"
                      >
                        Set Price
                      </label>
                      <input type="text" />
                    </div>

                    <div className="form-group mx-5">
                      <Link to={`/AuctionBid/${data.ProductToken}`}>
                        <button className="btn btn-outline-primary">
                          List
                        </button>
                      </Link>
                      <button className="btn btn-outline-primary visually-hidden-focusable">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      );
    });
}
export default AuctionList;
