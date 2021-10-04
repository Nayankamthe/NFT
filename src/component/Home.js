import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import CarouselEffect from "./CarouselEffect";

function Home() {
  return (
    <>
      <body className="container-fluid">
        <div className="container-fluid">
          <CarouselEffect />
        </div>
      </body>
    </>
  );
}

export default Home;
