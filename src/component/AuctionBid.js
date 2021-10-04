import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import products from "./Products";
import { Link } from "react-router-dom";

function AuctionBid() {
  const { id } = useParams();
  return products
    .filter((data) => data.ProductToken === id)
    .map((data) => {
      return (
        <>
          <section className="container-fluid my-3 ">
            <div className="row">
              <div className="col-2">
                <div className="card img-fluid ">
                  <div className="card-header ">
                    <img
                      className="card-img-top"
                      src={data.ProductImage}
                      alt={data.NameOfProduct}
                    />
                  </div>
                  <div className="card-body mx-lg-auto align-middle">
                    <Link to={"/Owner"}>
                      <button className="btn btn-outline-primary">
                        {data.OwnerName}
                      </button>
                    </Link>
                    <div className="align-middle mx-auto ">
                      <h6 className=" my-1 align-items-center ">
                        {data.NameOfProduct}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-10">
                <div className="row">
                  <div className="container">
                    <div className="card ">
                      <div
                        className="card-header"
                        style={{ width: "100%", height: "200px" }}
                      ></div>
                      <div className="card-body ">
                        <div className="container " style={{ align: "center" }}>
                          <button
                            type="button"
                            style={{ marginRight: "3px" }}
                            className="btn btn-success"
                          >
                            Avg Selling
                          </button>
                          <button
                            type="button"
                            style={{ marginRight: "3px" }}
                            className="btn btn-success"
                          >
                            Prev selling
                          </button>
                          <button
                            type="button"
                            style={{ marginRight: "3px" }}
                            className="btn btn-success"
                          >
                            Curr Bid
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="box">
                    <form>
                      <div className="row row-cols-2">
                        <div className="col">
                          <input
                            type="text"
                            placeholder="Bid Price"
                            className="text-primary form-control"
                          />
                        </div>
                        <div className="col">
                          <button className="btn btn-outline-primary form-control">
                            Bid
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    });
}
export default AuctionBid;
