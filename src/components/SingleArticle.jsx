import { fetchArticleByID } from '../api-utils'
import { useEffect, useState } from "react"

const SingleArticle = (props) => {
  const [currentArticle, setCurrentArticle] = useState({})
  const dateObj = new Date(currentArticle.created_at);
  const dateString = dateObj.toString();


  useEffect(() => {
    fetchArticleByID(props.currentArticleID).then((article) => {
      setCurrentArticle(article)
    })
  }, [props.currentArticleID])


  return (
    <div>
    <h2>{currentArticle.title}</h2>
    <h3> Author: {currentArticle.author} </h3>
    <p>Created at: {dateString}</p>
    <p>Topic: {currentArticle.topic}</p>
      <p>{currentArticle.body}</p>
    <p> Votes: {currentArticle.votes} </p>
    <p> Comments: {currentArticle.comment_count}</p>
    </div>
  )

}

export default SingleArticle