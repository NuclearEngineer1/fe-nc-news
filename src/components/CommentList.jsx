import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { fetchComments } from "../api-utils"
import CommentAdder from "./CommentAdder";

const CommentList = (props) => {
  const { article_id } = useParams();

  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((res) => setCommentData(res)).catch((err) => console.log(err));
  }, [article_id]);

  return (
    <div>
      <h1>Comments</h1>
      <CommentAdder commentData={commentData} setCommentData={setCommentData} currentArticleID={props.currentArticleID} />
      <ul>
        {commentData.map((comment) => {
          return <CommentCard {...comment} key={comment.comment_id} />;
        })}
      </ul>
    </div>
  );
};

export default CommentList
