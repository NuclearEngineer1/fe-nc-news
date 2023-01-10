import { postComment } from "../api-utils";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CommentAdder = (props) => {
  const { article_id } = useParams();
  const [commentBody, setCommentBody] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props.commentData);
    props.setCommentData((currComments) => {
      return [
        {
          author: "tickle122",
          body: commentBody,
          created_at: Date.now(),
          votes: 0,
          article_id: article_id,
        },
        ...currComments,
      ];
    });
    setCommentBody("");
    postComment(commentBody, article_id).catch((err) => {
      console.log(err);
      setIsError(true)
      props.setCommentData((currComments) => {
        return currComments.slice(1, currComments.length)
      });
    });
  };

  if (isError) {
    return (
      <div>
        <p>Sorry there was a problem uploading your comment to the server</p>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Add comment (max 250 characters):</label>

          <input
            onChange={(event) => setCommentBody(event.target.value)}
            type="text"
            maxLength="250"
          ></input>

          <input type="submit" value="Add Comment"></input>
        </form>
      </div>
    );
  }
};

export default CommentAdder;
