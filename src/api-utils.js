export const fetchArticles = () => {
  return fetch('https://liams-nc-news.onrender.com/api/articles').then((res) => {
    return res.json();

  }).then((res) => { 
    return res.articles
   })
} 

export const fetchArticleByID = (id) => { 
    return fetch(`https://liams-nc-news.onrender.com/api/articles/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res
      });
}