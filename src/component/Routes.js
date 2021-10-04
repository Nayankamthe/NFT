import { React } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Footer from "./Footer";
import Owner from "./Owner";
import Transaction from "./Transaction";
import AuctionList from "./AuctionList";
import AuctionBid from "./AuctionBid";
import Setting from "./Setting";
import CarouselEffect from "./CarouselEffect";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Categary" component={Main} />
      {/* <Route path="/Footer" component={Footer} /> */}
      <Route path="/Owner" component={Owner} />
      <Route path="/Setting" component={Setting} />
      <Route path="/Item/Owner" component={Owner} />
      <Route path="/Item/Transaction" component={Transaction} />
      <Route path="/Item/Item/Transaction" component={Transaction} />
      <Route path="/AuctionBid/:id" component={AuctionBid} />
      <Route path="/ItemDetails/:id" component={AuctionList} />
      <Route path="/AuctionBid/Owner" component={Owner} />
      <Route path="/Transaction" component={Transaction} />
      {/* <Route path="/Explore" component={Main} /> */}
    </Switch>
  );
};

export default Routes;
