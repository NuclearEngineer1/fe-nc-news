import { fetchArticleByID } from "../api-utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dateObj = new Date(currentArticle.created_at);
  const dateString = dateObj.toString();
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleByID(article_id).then((article) => {
      setCurrentArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h2>{currentArticle.title}</h2>
        <h3> Author: {currentArticle.author} </h3>
        <p>Created: {dateString}</p>
        <p>Topic: {currentArticle.topic}</p>
        <p>{currentArticle.body}</p>
        <p> Votes: {currentArticle.votes} </p>
        <p> Comments: {currentArticle.comment_count}</p>
      </div>
    );
  }
};

export default SingleArticle;
