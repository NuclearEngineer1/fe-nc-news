import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const dateObj = new Date(props.created_at);
  const dateString = dateObj.toString();

  return (
    <li>
      <h2>{props.title}</h2>
      <h3> Author: {props.author} </h3>
      <p>Created: {dateString}</p>
      <p>Topic: {props.topic}</p>
      <p> Votes: {props.votes} </p>
      <p> Comments: {props.comment_count}</p>
      <Link to={`article/${props.article_id}`}>
      <button onClick={() => props.setCurrentArticleID(props.article_id)}>
        Go to article
      </button>
      </Link>
    </li>
  );
};

export default ArticleCard;
