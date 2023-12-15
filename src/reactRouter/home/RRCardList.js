import React, { useEffect, useState } from "react";
import RRCard from "./RRCard";

import { fetchUsersWithPosts } from "../api";
import RRErrorMessage from "../common/RRErrorMessage";

export const RRCardList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    fetchUsersWithPosts(abortController.signal).then(setUsers).catch(setError);

    return () => abortController.abort();
  }, []);

  if (error) {
    return <RRErrorMessage error={error} />;
  }

  const list = users.map((user) => <RRCard key={user.id} user={user} />);

  return (
    <main className="container">
      <section className="row">{list}</section>
    </main>
  );
};

export default RRCardList;
