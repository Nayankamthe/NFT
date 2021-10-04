import React, { useState } from "react";
import { Tabs, Tab, Sonnect } from "react-bootstrap";

function ControlledTabs() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-0 container-fluid"
    >
      <Tab eventKey="home" title="TOTAL SALE">
        {/* <Sonnet /> */}
        <div className="card">
          <div className=" card-header">
            <h3> TOTAL SALE</h3>
          </div>
        </div>
      </Tab>
      <Tab eventKey="AVG SALE PRICE" title="AVG SALE PRICE">
        {/* <Sonnet /> */}
        <div className="card">
          <div className=" card-header">
            <h3> AVG SALE PRICE</h3>
          </div>
        </div>
      </Tab>
      <Tab eventKey="ITEM SOLD" title="ITEM SOLD">
        {/* <Sonnet /> */}
        <div className="card">
          <div className=" card-header">
            <h3> ITEM SOLD</h3>
          </div>
        </div>
      </Tab>
      <Tab eventKey="ITEM BROUGHT" title="ITEM BROUGHT">
        {/* <Sonnet /> */}
        <div className="card">
          <div className=" card-header">
            <h3>ITEM BROUGHT</h3>
          </div>
        </div>
      </Tab>
      <Tab eventKey="ITEM LIST" title="ITEM LIST">
        {/* <Sonnet /> */}
        <div className="card">
          <div className=" card-header">
            <h3> ITEM LIST</h3>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
