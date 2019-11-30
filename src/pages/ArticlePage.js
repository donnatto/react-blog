import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  if (!article) {
    return <NotFoundPage />
  }

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
      <h1>{article.name}</h1>
      {article.content.map((paragrapgh, key) => (
        <p key={key}>{paragrapgh}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
