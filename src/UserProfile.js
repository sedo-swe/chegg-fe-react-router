import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch, useParams } from "react-router-dom";
import PostListNestedRoute from "./PostListNestedRoute";

function UserProfile() {
  const [user, setUser] = useState({});
  const {userId} = useParams();

  useEffect(() => {
    async function loadUser() {
      console.log(`UserId in UserProfile: ${userId}`);
      const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI)
    }
    loadUser();
  }, [userId]);

  // No need to change anything below here
  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading User Profile...";
}

export default UserProfile;