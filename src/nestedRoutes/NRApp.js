import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NRUsers from "./NRUsers";
import NRUser from "./NRUser";
import users from "./data.json";

function NRApp() {
  return (
    <Router>
        <br /><br /><br />
        <hr className="solid" />
        <hr className="solid" />
        <div className="App">
            <Route exact={true} path="/">
                <NRUsers users={users} />
            </Route>
            <Route path="/users/:userId">
                <NRUser users={users} />
            </Route>
        </div>
    </Router>
  );
}

export default NRApp;
