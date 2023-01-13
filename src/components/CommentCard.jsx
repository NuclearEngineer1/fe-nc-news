import { deleteComment } from "../api-utils";
import "../CSS_files/CommentCard.css";

const CommentCard = (props) => {
  const dateObj = new Date(props.created_at);
  const dateString = dateObj.toString();

  const handleDeleteComment = () => {
    if (props.author === "tickle122") {

      const currComment = {
        author: props.author,
        created_at: props.created_at,
        body: props.body,
        votes: props.votes,
        comment_id: props.comment_id,
      };
      props.setCommentData((commentData) => {
        return commentData.slice(1, commentData.length)
      });
      
      deleteComment(props.comment_id).catch((err) => {
        props.setCommentData((commentData) => {
          return [currComment, ...commentData];
        });
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
      <button onClick={handleDeleteComment}>Delete Comment</button>
    </li>
  );
};

export default CommentCard;
