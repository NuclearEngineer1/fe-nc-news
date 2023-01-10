import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const dateObj = new Date(props.created_at);
  const dateString = dateObj.toString();

  return (
    <li key={props.article_id}>
      <h2>{props.title}</h2>
      <h3> Author: {props.author} </h3>
      <p>Created at: {dateString}</p>
      <p>Topic: {props.topic}</p>
      <p> Votes: {props.votes} </p>
      <p> Comments: {props.comment_count}</p>
      <Link to={"/singleArticle"}>
      <button onClick={() => props.setCurrentArticleID(props.article_id)}>
        Go to article
      </button>
      </Link>
    </li>
  );
};

export default ArticleCard;
