import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import RRHeader from "./common/RRHeader";
import RRNotFound from "./common/RRNotFound";
import RRCardList from "./home/RRCardList";
import RRUser from "./user/RRUser";

function RRApp() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  return (
    <Router>
      <br /><br /><br />
      <hr className="solid" />
      <b>Ch08. React Router</b>
      <hr className="solid" />
      <Fragment>
        <RRHeader />
        <Route exact={true} path="/">
          <RRCardList />
        </Route>
        <Route path="/users/:userId">
          <RRUser />
        </Route>
        <Route>
          <RRNotFound />
        </Route>
      </Fragment>
    </Router>
  );
}

export default RRApp;
