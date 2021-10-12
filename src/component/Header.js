import React from "react";
import ReactDOM from "react-dom";
import { AbstractNav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <button
          data-target="#navitems"
          data-toggle="collapse"
          type="button"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon me-auto"></span>
        </button>
        <div className="navbar-brand mx-5">
          <a href="#" className="navbar-brand">
            NFT Auction
          </a>
        </div>
        <div id="navitems" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="fa fa-home"></span>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Categary">
                <span className=" fa fa-twitter"></span>
                Categary
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Owner">
                <span className="fa fa-shoe-prints"></span>Owner
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Footer">
                <span className="fa fa-shoe-prints"></span>About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Setting">
                <span className="fa fa-shoe-prints"></span>Settings
              </Link>
            </li>
            <li className="nav-item position-absolute top-0 end-0 ">
              <Link className="nav-link" to="/UserLogin">
                <span className="fa fa-shoe-prints"></span>Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
