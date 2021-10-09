import React, { usestate } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function UserLogin() {
  return (
    <div className="container-fluid card">
      <div className="header">
        <h3 className="align-content-center"> Select the Wallet</h3>
      </div>
      <div className="container-fluid">
        <div className="box card shadow">
          <form>
            <div className="form-group my-3 text-primary">
              <label></label>
              <div className=" my-2">
                <select value="" id="" className="btn btn-outline-primary">
                  <span></span>
                  <option value="Metamask">Metamask</option>
                  <span></span>
                  <option value="coinbase">Conibase Wallet</option>
                  <span></span>
                  <option value="WalletConnect">Wallet connect</option>
                  <span></span>
                  <option value="Dapper">Dapper</option>
                  <span></span>
                  <option value="Formatic">Formatic</option>
                  <span></span>
                  <option value="Kaikas">Kaikas</option>
                </select>

                {/* {market === "Auction" && (
                <React.Fragment>
                  <label>Type of Auction</label>
                  <select
                    value={auctionType}
                    onChange={(e) => setAuctionType(e.target.value)}
                  >
                    <option value="0">English</option>
                  </select>
                </React.Fragment>
              )} */}
                {/* {market === "Auction" && auctionType === "0" && (
                <React.Fragment>
                  <label>Bid Increment</label>
                  <input
                    required
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={bidIcrement}
                    onChange={(e) => setBidIncrement(e.target.value)}
                  />

                  <label>Starting Price in ETH</label>
                  <input
                    required
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </React.Fragment>
              )} */}
                {/* {market === "Auction" && (
                <React.Fragment>
                  <label>Duration (in seconds)</label>
                  <input
                    required
                    type="number"
                    min="60"
                    step="60"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </React.Fragment>
              )}
              {market === "Sell" && (
                <React.Fragment>
                  <label>Price in ETH</label>
                  <input
                    required
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </React.Fragment>
              )} */}
              </div>
              <div className="form-group my-2">
                <button className="btn btn-outline-success">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default UserLogin;
