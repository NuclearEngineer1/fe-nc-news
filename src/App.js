import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentList from "./components/CommentList";

function App() {
  const [currentArticleID, setCurrentArticleID] = useState(3);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={[
            <Header />,
            <ArticleList
              setCurrentArticleID={setCurrentArticleID}
              currentArticleID={currentArticleID}
            />,
          ]}
        />
        <Route
          path={`/article/:article_id`}
          element={[
            <Header />,
            <SingleArticle />,
            <CommentList />
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
