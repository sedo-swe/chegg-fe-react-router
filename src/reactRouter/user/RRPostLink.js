import React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
/*
  TODO: Change the below to be a link that goes to the specific post route using the post id. Hint: you can use the `useRouteMatch()` hook from "react-router-dom" to get the current URL path
*/

export const RRPostLink = ({ key, userId, post }) => {
  const { path, url } = useRouteMatch();
  
  return (
    <Route>
      <li className="list-group-item text-truncate">
        <Link to={`${url}/${post.id}`}>{post.title}</Link>
      </li>
    </Route>
  );
};

export default RRPostLink;
