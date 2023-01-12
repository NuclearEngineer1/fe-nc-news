import { fetchArticles, fetchTopics } from "../api-utils";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import "../CSS_files/ArticleList.css";

const ArticleList = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState("All");
  const [topics, setTopics] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  const handleChangeTopic = (event) => {
    setIsLoading(true);
    setCurrentTopic(event.target.value);
  };

  const handleChangeSortBy = (event) => {
    setIsLoading(true);
    setSortBy(event.target.value);
  };

  const handleChangeOrderBy = (event) => {
    setIsLoading(true);
    setOrderBy(event.target.value);
  };

  useEffect(() => {
    fetchArticles(currentTopic, sortBy, orderBy)
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentTopic, sortBy, orderBy]);

  useEffect(() => {
    fetchTopics().then((topicData) => {
      setTopics(topicData.map((topic) => topic.slug));
    });
  }, []);

  return (
    <div>
      <label htmlFor="topics">Filter by topic &nbsp;&nbsp;</label>

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

      <label htmlFor="sort_by">Sort by &nbsp;&nbsp;</label>

      <select
        value={sortBy}
        onChange={handleChangeSortBy}
        name="sortBy"
        id="sortBy"
      >
        <option value="title">title</option>
        <option value="topic">topic</option>
        <option value="author">author</option>
        <option value="created_at">date</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>

      <label htmlFor="orderBy">Order&nbsp;&nbsp;</label>

      <select
        value={orderBy}
        onChange={handleChangeOrderBy}
        name="orderBy"
        id="orderBy"
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
      
      {isLoading ? (
        <p> Loading...</p>
      ) : (
        <ul class="ArticleList">
          {articles.map((article) => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default ArticleList;
