import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentList from "./components/CommentList";

function App() {
  return (
    <BrowserRouter>
      <Header class="Header"/>
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList/>
          }
        />
        <Route
          path={`/article/:article_id`}
          element={
            <>
              <SingleArticle/>
              <CommentList/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
