import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch, useParams } from "react-router-dom";

import PostView from "./PostView";

function PostListNestedRoute() {
  // const routeMatchOutput = useRouteMatch();
  // console.log(routeMatchOutput);

  const [posts, setPosts] = useState([]);
  const {userId} = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    async function loadPosts() {
        console.log("Path:", path);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const postsFromAPI = await response.json();
        console.log("postsFromAPI:", postsFromAPI);
        setPosts(postsFromAPI);
    }
    loadPosts();
  }, [userId]);

  if (posts) {
    return (
        <Switch>
          <Route exact path={path}>
            <p>Here are a list of the user’s posts</p>
              <div className="post-list">
                <ul style={{listStyle: 'none'}}>
                    {posts.map((post, index) => 
                        // <PostView key={index} post={post} />
                        <li><Link to={`/users/${userId}/posts/${post.id}`}>{post.title}</Link></li>
                        
                    )}
                </ul>
            </div>
          </Route>
          <Route path={`${path}/:postId`}>
            <p>Here is a single post</p>
            {{posts}[0]}
          </Route>
        </Switch>
      );
  }
  return (
    <Switch>
      <Route exact path={path}>
        <p>No posts: Here are a list of the user’s posts</p>
      </Route>
      <Route path={`${path}/:postId`}>
        <p>No posts: Here is a single post</p>
      </Route>
    </Switch>
  );
  
}

export default PostListNestedRoute;
