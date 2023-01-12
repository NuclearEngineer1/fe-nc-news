import { fetchArticles, fetchTopics } from "../api-utils";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import "../CSS_files/ArticleList.css"

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState("All");
  const [topics, setTopics] = useState([]);

  const handleChangeTopic = (event) => {
    setIsLoading(true);
    setCurrentTopic(event.target.value);
  };

  useEffect(() => {
    fetchArticles(currentTopic).then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, [currentTopic]);

  useEffect(() => {
    fetchTopics().then((topicData) => {
      setTopics(topicData.map((topic) => topic.slug));
    });
  }, []);

  return (
    <div>
      <label htmlFor="topics">Choose a topic:</label>

      <select
        value={currentTopic}
        onChange={handleChangeTopic}
        name="topics"
        id="topics"
      >
        <option value="All">All</option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      {isLoading ? (
        <p> Loading...</p>
      ) : (
        <ul>
          {articles.map((article) => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default ArticleList;
