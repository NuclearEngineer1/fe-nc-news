export const fetchArticles = () => {
  return fetch('https://liams-nc-news.onrender.com/api/articles').then((res) => {
    return res.json();

  }).then((res) => { 
    return res.articles
   })
} 