import fetchArticles from "../api-utils";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
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
            <li key={article.article_id}>
              <ArticleCard {...article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
