import React from 'react';
import { useParams } from 'react-router-dom';

const Content = ({ news }) => {
  const { title } = useParams();
  
  // Handle edge case where news or title is undefined
  if (!news || !title) {
    return <p>Invalid request.</p>;
  }

  const article = news.find((article) => article.title === decodeURIComponent(title));

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default Content;
