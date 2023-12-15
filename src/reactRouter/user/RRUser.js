import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom";

import RRUserProfile from "./RRUserProfile";
import { fetchUserWithPosts } from "../api";
import RRPostList from "./RRPostList";
import RRPostsNav from "./RRPostsNav";
import RRErrorMessage from "../common/RRErrorMessage";

export const RRUser = () => {
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const { userId } = useParams(); // TODO: This ID will need to be pulled from parameters.
  const { path, url } = useRouteMatch();

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  // TODO: Change the link below to go back to the home page.

  if (error) {
    return (
      <RRErrorMessage error={error}>
        <p>
          <Route>
            <Link to="/">Return Home</Link>
          </Route>
        </p>
      </RRErrorMessage>
    );
  }

  /*
    TODO: In the below section, update the links to work appropriately with React Router.

    TODO: You'll need to add nested routes below.

    The <PostList /> component should show on the following route:
    /users/:userId/posts

    The <UserProfile /> component should show on the following route:
    /users/:userId
  */
  return (
    <section className="container">
      <RRPostsNav />
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link"><Link to={`${url}`}>Profile</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><Link to={`${url}/posts`}>Posts</Link></a>
          </li>
        </ul>

        {user.id ? (
          <div className="p-4 border border-top-0">
            <Switch>
              <Route path={`${path}/posts`}>
                <RRPostList posts={user.posts} />
              </Route>
              <Route exact={true} path={`${path}`}>
                <RRUserProfile user={user} />
              </Route>
            </Switch>
          </div>
        ) : (
          <div className="p-4 border border-top-0">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RRUser;
