// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const renderReadingTime = () => {
    if (!minutesToRead) return null;

    let emoji = "☕️";
    let count = Math.ceil(minutesToRead / 5);

    if (minutesToRead >= 30) {
      emoji = "🍱";
      count = Math.ceil(minutesToRead / 10);
    }

    return (
      <small>
        {emoji.repeat(count)} {minutesToRead} min read
      </small>
    );
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {renderReadingTime()}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
