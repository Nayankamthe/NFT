import { React } from "react";
import { ReactDOM } from "react-dom";
import Routes from "./Routes";
// import "./bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Owner from "./Owner";
import AutionBid from "./AuctionBid";
import Main from "./Main";
import Explore from "./Explore";
import AuctionList from "./AuctionList";
import Home from "./Home";
import CreateNft from "./CreateNft";
import UserLogin from "./UserLogin";
import AuctionBid from "./AuctionBid";
import Countdown from "./Countdown";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes /> */}
      {/* <Countdown /> */}
      {/* <UserLogin /> */}

      <CreateNft />
      {/* <Home /> */}
      {/* <AuctionBid /> */}
      {/* <Main /> */}
      {/* <Explore /> */}
      {/* <AuctionList /> */}
      <Footer />
    </div>
  );
}

export default App;
