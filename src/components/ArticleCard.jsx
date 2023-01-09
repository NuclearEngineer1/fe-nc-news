const ArticleCard = (article) => {
  const dateObj = new Date(article.created_at)
  const dateString = dateObj.toString()

  return (  
  <div>
    <h1>{article.title}</h1>
    <h2> Author: {article.author} </h2>
    <p>Created at: {dateString}</p>
    <p>Topic: {article.topic}</p>
    <p> Votes: {article.votes} </p>
    <p> Comments: {article.comment_count}</p>
    </div>
  );
  
}

export default ArticleCard
