import { fetchArticles, fetchTopics } from "../api-utils";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState("All");
  const [topics, setTopics] = useState([]);

  const handleChangeTopic = (event) => {
    setIsLoading(true)
    setCurrentTopic(event.target.value);
  };

  fetchTopics().then((topicData) => {
    setTopics(topicData.map((topic) => topic.slug));
  });

  useEffect(() => {
    fetchArticles(currentTopic).then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, [articles, currentTopic]);


  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <label htmlFor="topics">Choose a topic:</label>

        <select onChange={handleChangeTopic} name="topics" id="topics">
          <option value="All">All</option>
          {topics.map((topic) => (
            <option value={topic}>{topic}</option>
          ))}
        </select>
        <ul>
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
  }
};

export default ArticleList;
