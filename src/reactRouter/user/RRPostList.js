import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";

import RRPost from "./RRPost";
import RRPostLink from "./RRPostLink";
import RRNoPostSelectedMessage from "./RRNoPostSelectedMessage";

/*
  TODO: Update the below so that the components show on the appropriate route.
  
  Hint: you can use the `useRouteMatch()` hook from "react-router-dom" to get the current URL path

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

export const RRPostList = ({ posts = [] }) => {
  const { path, url } = useRouteMatch();
  
  const postLinks = posts.map((post) => (
    <RRPostLink key={post.id} userId={post.userId} post={post} />
  ));

  console.log("In PostList, path:", path);
  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Route exact path={`${path}`}>
          <RRNoPostSelectedMessage />
        </Route>
        <Route path={`${path}/:postId`}>
          <RRPost posts={posts} />
        </Route>
      </div>
    </div>
  );
};

export default RRPostList;
