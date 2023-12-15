import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});

  // Use `useParams()` and `useEffect()`
  // Load profile data from https://jsonplaceholder.typicode.com/users/${userId}
  const userId = useParams().userId;
  useEffect(() => {
    const abortController = new AbortController();

    async function loadUser() {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`,
                { signal: abortController.signal }
            );
            const userFromAPI = await response.json();
            setUser(userFromAPI)
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("Aborted", error);
            } else {
                throw error;
            }
        }
    }
    loadUser();

    return () => {
        abortController.abort();
    }
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
  return "Loading...";
}

export default UserProfile;