import React from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";

import { deletePost } from "../api";
import RRNoPostSelectedMessage from "./RRNoPostSelectedMessage";

export const RRPost = ({ posts }) => {
  const { postId, userId } = useParams(); // TODO: This ID will need to be pulled from parameters.
  const { path, url } = useRouteMatch();

  const post = posts.find((post) => post.id === Number(postId));
  const history = useHistory();

  const handleDelete = async (id) => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      await deletePost(id);
      // TODO: After the post is deleted, send the user to the home page.
      history.push(`/`);
    }
  };

  if (post) {
    return (
      <article className="col-12 p-4 border">
        <h3 className="display-4 mb-4">{post.title}</h3>
        <p>{post.body}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete Post
        </button>
      </article>
    );
  }
  return <RRNoPostSelectedMessage />;
};

export default RRPost;
