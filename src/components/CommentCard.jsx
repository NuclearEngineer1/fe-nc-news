const CommentCard = (props) => {
  const dateObj = new Date(props.created_at);
  const dateString = dateObj.toString();

  return (
    <li key={props.article_id}>
      <h2>Author: {props.author} </h2>
      <p>Created: {dateString}</p>
      <p>{props.body}</p>
      <p> Votes: {props.votes} </p>
    </li>
  );
};

export default CommentCard;

