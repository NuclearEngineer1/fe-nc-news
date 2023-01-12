import { deleteComment } from "../api-utils";
import {useState} from "react"

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
          return { comment, ...commentData };
        });
        setDeleteCommentError(true);
        console.log(err);
      });
    }
  };

  return (
    <li>
      <h2>Author: {props.author} </h2>
      <p>Created: {dateString}</p>
      <p>{props.body}</p>
      <p> Votes: {props.votes} </p>
      {deleteCommentError ? (
        <p> Sorry, there was an error deleting your comment.</p>
      ) : (
        <button onClick={handleDeleteComment}>Delete Comment</button>
      )}
    </li>
  );
};

export default CommentCard;
