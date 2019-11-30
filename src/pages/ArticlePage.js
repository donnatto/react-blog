import React from 'react';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  if (!article) {
    return <h1>Article does not exist!</h1>
  }

  return (
    <>
      <h1>{article.name}</h1>
      {article.content.map((paragrapgh, key) => (
        <p key={key}>{paragrapgh}</p>
      ))}
    </>
  );
};

export default ArticlePage;
