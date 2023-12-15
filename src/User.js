import React from "react";
import { Route, Link, Switch, useParams } from "react-router-dom";

import UserProfile from "./UserProfile";
import PostListNestedRoute from "./PostListNestedRoute";

function User() {
    const {userId} = useParams();
    return (
        <section>
            <hr />
            <Link to={`/users/${userId}`}>Profile</Link>
            <Link to={`/users/${userId}/posts`}>Posts</Link>
            <Switch>
                <Route path={"/users/:userId/posts"}>
                    <PostListNestedRoute />
                </Route>
                <Route path={"/users/:userId"}>
                    <UserProfile />
                </Route>
            </Switch>
        </section>
    );
}

export default User;