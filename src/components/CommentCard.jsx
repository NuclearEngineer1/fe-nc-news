import { deleteComment } from "../api-utils";
import { useState } from "react"
import "../CSS_files/CommentCard.css"

const CommentCard = (props) => {
  const dateObj = new Date(props.created_at);
  const dateString = dateObj.toString();

  const [deleteCommentError, setDeleteCommentError] = useState(false);

  const handleDeleteComment = () => {
    if (props.author === "tickle122") {
      const commentIndex = props.commentData.findIndex(
        (comment) => comment.comment_id === props.comment_id
      );
      const comment = props.commentData.filter(
        (comment) => comment.comment_id === props.comment_id
      )[0];
      console.log(comment)
      console.log(commentIndex);
      props.setCommentData((commentData) => {
        return commentData.filter(
          (comment) => comment.comment_id !== props.comment_id
        );
      });
      deleteComment(props.comment_id).catch((err) => {
        props.setCommentData((commentData) => {
          return [ comment, ...commentData ];
        });
        setDeleteCommentError(true);
        console.log(err);
      });
    }
  };

  return (
    <li class="CommentCard">
      <p>Author: &nbsp; {props.author} </p>
      <p>Created: &nbsp; {dateString}</p>
      <p>{props.body}</p>
      <p> Votes: &nbsp; {props.votes} </p>
      <button onClick={handleDeleteComment}>Delete Comment</button>}
    </li>
  );
};

export default CommentCard;
