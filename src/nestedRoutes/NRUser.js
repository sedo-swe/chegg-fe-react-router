import React, { useState, useEffect } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import NRUserPosts from "./NRUserPosts";
import NRUserProfile from "./NRUserProfile";

export const NRUser = ({ users = [] }) => {
  const { userId } = useParams();
  const { path, url } = useRouteMatch();
  const [ posts, setPosts ] = useState([]);
  
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      const postsFromAPI = await response.json();
      setPosts(postsFromAPI);
    }
    loadPosts();
  }, [userId]);

  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`${url}`} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path={`${path}`}>
              <NRUserProfile user={user} />
            </Route>
            <Route path={`${path}/posts`}>
              <NRUserPosts posts={user.posts} />
            </Route>
          </Switch>
        </div>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default NRUser;
