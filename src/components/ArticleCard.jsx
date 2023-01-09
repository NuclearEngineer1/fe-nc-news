const ArticleCard = (article) => {
  const dateObj = new Date(article.created_at)
  const dateString = dateObj.toString()

  return (  
  <li>
    <h2>{article.title}</h2>
    <h3> Author: {article.author} </h3>
    <p>Created at: {dateString}</p>
    <p>Topic: {article.topic}</p>
    <p> Votes: {article.votes} </p>
    <p> Comments: {article.comment_count}</p>
    </li>
  );
  
}

export default ArticleCard
