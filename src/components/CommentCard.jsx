import { deleteComment } from "../api-utils";

const CommentCard = (props) => {
  const dateObj = new Date(props.created_at);
  const dateString = dateObj.toString();

  const handleDeleteComment = () => {
    if (props.author === "tickle122") {
      console.log(props.commentData)
      console.log(props.comment_id)
      const commentIndex = props.commentData.findIndex(
        (comment) => comment.comment_id === props.comment_id
      );
      console.log(commentIndex)
      props.setCommentData((commentData) => {
        return commentData.filter(comment => comment.comment_id !== props.comment_id);
      });
      deleteComment(props.comment_id).catch((err) => console.log(err));
    }
  }


  return (
    <li>
      <h2>Author: {props.author} </h2>
      <p>Created: {dateString}</p>
      <p>{props.body}</p>
      <p> Votes: {props.votes} </p>
      <button onClick={handleDeleteComment}>Delete Comment</button>
    </li>
  );
};

export default CommentCard;
