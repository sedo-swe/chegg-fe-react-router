import React from "react";
import "./App.css"

function PostView ({ post, deletePost }) {
    return (
        <li className="post">
            {post.type === "Text" ? (
                <p>
                    {post.content}
                </p>
            ) : (
                <p>
                    <img id="content" name="content" src={post.content} />
                </p>
            )}
            <button name="delete" onClick={deletePost}>Delete</button>
        </li>
    );
}

export default PostView;