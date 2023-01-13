import { fetchArticleByID } from "../api-utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../api-utils";
import CommentList from "./CommentList";

const SingleArticle = () => {
  const [currentArticle, setCurrentArticle] = useState({});
  const [isVoteError, setIsVoteError] = useState(false);
  const { article_id } = useParams();
  const [userViewVotes, setUserViewVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isArticleError, setIsArticleError] = useState(false);

  useEffect(() => {
    fetchArticleByID(article_id)
      .then((article) => {
        setCurrentArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("ERROOORR!!");
        setIsArticleError(true);
      });
  }, [article_id]);

  const dateObj = new Date(currentArticle.created_at);
  const dateString = dateObj.toString();

  const handleVoteClick = (increment) => {
    setUserViewVotes((userViewVotes) => userViewVotes + increment);
    patchVotes(currentArticle.article_id, increment).catch((err) => {
      console.log(err);
      setUserViewVotes((userViewVotes) => userViewVotes - increment);
      setIsVoteError(true);
    });
  };

  if (isVoteError) {
    return (
      <div>
        <h2>{currentArticle.title}</h2>
        <h3> Author: {currentArticle.author} </h3>
        <p>Created: {dateString}</p>
        <p>Topic: {currentArticle.topic}</p>
        <p>{currentArticle.body}</p>
        <p> Votes: {currentArticle.votes + userViewVotes} </p>
        <p> Sorry there was an internal server error involving your vote</p>
        <p> Comments: {currentArticle.comment_count}</p>
        <CommentList />
      </div>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isArticleError) {
    return <h1>404: article not found...</h1>;
  } else {
    return (
      <div>
        <h2>{currentArticle.title}</h2>
        <h3> Author: {currentArticle.author} </h3>
        <p>Created: {dateString}</p>
        <p>Topic: {currentArticle.topic}</p>
        <p>{currentArticle.body}</p>
        <p> Votes: {currentArticle.votes + userViewVotes} </p>
        <button
          onClick={() => {
            handleVoteClick(1);
          }}
        >
          👍
        </button>
        <button
          onClick={() => {
            handleVoteClick(-1);
          }}
        >
          👎
        </button>
        <p> Comments: {currentArticle.comment_count}</p>
        <CommentList />
      </div>
    );
  }
};

export default SingleArticle;
