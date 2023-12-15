import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import NRUserPost from "./NRUserPost";

export const NRUserPosts = ({ posts = [] }) => {
  const { url, path } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Switch>
          <Route path={`${path}/:postId`}>
            <NRUserPost posts={posts} />
          </Route>
          <Route>
            No post selected...
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default NRUserPosts;
