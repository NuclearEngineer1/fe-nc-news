import { fetchArticles } from "../api-utils";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import "../CSS_files/ArticleList.css"

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchArticles().then((articleData) => {
      setArticles(articleData)
      setIsLoading(false);
    });
  }, [articles]);


  if (isLoading) {
    return <div>Loading...</div>;
  } else {
  
    return (
      <div>
        <ul class="ArticleList">
          {articles.map((article) => {
            return (
              <ArticleCard
                {...article}
                key={article.article_id}
              />
            );
          })}
        </ul>
      </div>
    );
  };
  
}

export default ArticleList;
