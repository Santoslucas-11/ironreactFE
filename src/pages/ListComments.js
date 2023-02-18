import React, { useState } from "react";
import { addComment } from "../api";

function ListComments() {
  const [comments, setComments] = useState([]);

  

  function renderComments() {
    return comments.map((comment, index) => (
      <Comment key={index} author={comment.author} text={comment.text} />
    ));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.elements.author.value;
    const description = event.target.elements.text.value;
    await addComment({ title, description });
    event.target.reset();
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>{renderComments()}</ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="author" required />
        </div>
        <div>
          <label htmlFor="text">Comment:</label>
          <textarea id="text" required></textarea>
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

function Comment(props) {
  return (
    <li>
      <strong>{props.author}:</strong> {props.text}
    </li>
  );
}

export default ListComments;
