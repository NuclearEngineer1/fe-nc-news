import { fetchArticles } from "../api-utils";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articleData) => {
      setArticles(articleData);
    });
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard
              {...article}
              setCurrentArticleID={props.setCurrentArticleID}
              currentArticleID={props.currentArticleID}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
