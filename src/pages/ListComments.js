import React, { useState, useEffect } from "react";
import { getAllComments } from "../api";
import AddComment from "./AddComment";

function ListComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function handleGetAllComments() {
      const response = await getAllComments();
      setComments(response.data);
    }
    handleGetAllComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <AddComment />
      <>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment._id}>
                <h3>{comment.title}</h3>
                <h3>{comment.description}</h3>
              </li>
            );
          })}
        </ul>
      </>
    </div>
  );
}
export default ListComments;
