import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentList from "./components/CommentList";

function App() {
  const [currentArticleID, setCurrentArticleID] = useState(0);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              setCurrentArticleID={setCurrentArticleID}
              currentArticleID={currentArticleID}
            />
          }
        />
        <Route
          path={`/article/:article_id`}
          element={
            <>
              <SingleArticle currentArticleID={currentArticleID} />
              <CommentList currentArticleID={currentArticleID} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
