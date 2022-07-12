import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const listOfArticles = posts.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      minutes={article.minutes}
      date={article.date}
      preview={article.preview}
    />
  ));
  return <main>{listOfArticles}</main>;
}

export default ArticleList;
