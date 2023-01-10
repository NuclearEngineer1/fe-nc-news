import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { fetchComments } from "../api-utils";

const CommentList = () => {
  const { article_id } = useParams();

  const [commentData, setCommentData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then((res) => {
      setCommentData(res);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Comments</h1>
        <ul>
          {commentData.map((comment) => {
            return <CommentCard {...comment} />;
          })}
        </ul>
      </div>
    );
  }
};

export default CommentList;
