import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";

function Transaction() {
  return (
    <section className="container-fluid my-3 ">
      <div className="row">
        <div className="col-2">
          <div className="card img-fluid ">
            <div className="card-header ">
              <img className="card-img-top" src="..." alt="" />
            </div>
          </div>
        </div>
        <div className="col-10">
          <h3>Transection Details</h3>
          <table className="table table-hover table-info">
            <thead>
              <tr>
                <th>Transection type</th>
                <th>Transection From</th>
                <th>transection To</th>
                <th>Product Token</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
export default Transaction;
