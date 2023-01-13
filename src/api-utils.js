import axios from "axios";

const API = axios.create({ baseURL: "https://liams-nc-news.onrender.com/api" });

export const fetchArticles = (currentTopic, sortBy, orderBy) => {
  let url = "https://liams-nc-news.onrender.com/api/articles";
  if (currentTopic === "All") {
    url = `https://liams-nc-news.onrender.com/api/articles?sort_by=${sortBy}&order=${orderBy}`
  } else {
    url = `https://liams-nc-news.onrender.com/api/articles?topic=${currentTopic}&sort_by=${sortBy}&order=${orderBy}`
  };
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.articles;
    });
};

export const fetchArticleByID = (id) => {
  return fetch(`https://liams-nc-news.onrender.com/api/articles/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};

export const fetchComments = (article_id) => {
  return fetch(
    `https://liams-nc-news.onrender.com/api/articles/${article_id}/comments`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.comments;
    });
};


export const fetchTopics = () => {
  return fetch(
    "https://liams-nc-news.onrender.com/api/topics"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.topics;
    });
};

export const patchVotes = (article_id, voteCount) => {
  return API.patch(`/articles/${article_id}`, {
    inc_votes: voteCount,
  });
};

export const postComment = (body, article_id) => {
  return API.post(`/articles/${article_id}/comments`, {
    username: "tickle122",
    body: body,
  });
};

export const deleteComment = (comment_id) => {
  return API.delete(`/comments/${comment_id}`);
};
