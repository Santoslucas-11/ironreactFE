import React, { useState } from 'react';

function ListComments() {
  const [comments, setComments] = useState([]);

  function addComment(comment) {
    setComments([...comments, comment]);
  }

  function renderComments() {
    return comments.map((comment, index) => (
      <Comment key={index} author={comment.author} text={comment.text} />
    ));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const author = event.target.elements.author.value;
    const text = event.target.elements.text.value;
    addComment({ author, text });
    event.target.reset();
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>{renderComments()}</ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Name:</label>
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