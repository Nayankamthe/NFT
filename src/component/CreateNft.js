import React, { usestate } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import products from "./Products";

function CreateNft() {
  // return products.push(
  //   {{products.NameOfProduct}:${txtName},${products.ProductToken}:${(products.length)+1},
  // ${products.Produnctdiscription}:${txtdes}, ${products.ProductImage}:${"../assets/"+${img.value}},${products.OnwerName}:${txtOwner},
  // ${products.MineBy}:${txtOwner}});

  return (
    <div className="container container-fluid col-9">
      <div className="header">
        <h3 className="align-content-center">Create NFT</h3>
      </div>
      <div className="box my-3  card shadow ">
        <form>
          <div className="form-group text-primary">
            <label id="lblName">Name</label>
            <div>
              <input type="text" id="txtName" className="form-control" />
            </div>
          </div>
          <div className="form-group text-primary">
            <label id="lbldes">Description</label>
            <div>
              <textarea name="" id="txtdes" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="form-group text-primary">
            <label id="lblOwner">Owner</label>
            <div>
              <input type="text" id="txtOwner" className="form-control" />
            </div>
          </div>
          <div className="form-group my-3 text-primary">
            <label>Image/GIF Upload</label>
            <div className=" my-2">
              <input type="file" id="img" className="btn btn-outline-primary" />
            </div>
          </div>
          <div className="form-group my-3 text-primary">
            <label>NFT is for</label>
            <div className=" my-2">
              <select id="selectNft" className="btn btn-outline-primary">
                <option value="List" id="optList">
                  List
                </option>
                <option value="Auction" id="optAuction">
                  Auction
                </option>
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
            <div className="form-group my-3 text-primary">
              <label>Select Date and time For Auction</label>
              <div className=" my-2">
                <input
                  type="datetime-local"
                  id="txtdateTime"
                  className="btn btn-outline-primary form-control"
                />
              </div>
            </div>

            <div className="form-group my-2">
              <button className="btn btn-outline-success">Mint NFT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateNft;
