import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          path={`/singleArticle`}
          element={[
            <Header />,
            <SingleArticle currentArticleID={currentArticleID} />,
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
