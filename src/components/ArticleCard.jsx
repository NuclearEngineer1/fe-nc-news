import { Link } from "react-router-dom";
import "../CSS_files/ArticleCard.css"

const ArticleCard = (props) => {
  const dateObj = new Date(props.created_at);
  const dateString = dateObj.toString();

  return (
    <li class="ArticleCard">
      <h2>{props.title}</h2>
      <p>
        <b>Author:&nbsp;</b> {props.author}{" "}
      </p>
      <p>
        <b>Created:&nbsp;</b> {dateString}
      </p>
      <p>
        <b>Topic:&nbsp;</b> {props.topic}
      </p>
      <p> <b> Votes:&nbsp; </b> {props.votes} </p>
      <p> <b> Comments:&nbsp; </b> {props.comment_count}</p>
      <Link to={`article/${props.article_id}`}>
        <button> <b> Go to article </b> </button>
      </Link>
    </li>
  );
};

export default ArticleCard;
