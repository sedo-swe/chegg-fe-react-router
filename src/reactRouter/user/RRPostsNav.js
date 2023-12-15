import React from "react";
import { Link, Route } from "react-router-dom";

// TODO: Change the link below to go back to the home page.

export const RRPostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Route>
          <Link to="/" className="btn btn-link">Go Home</Link>
        </Route>
      </li>
    </ol>
  </nav>
);

export default RRPostsNav;
