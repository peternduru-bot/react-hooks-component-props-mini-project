// src/components/App.js
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import posts from "../data/blog";

function App() {
  return (
    <div>
      <Header name="My Personal Blog" />
      <About about="This is my blog about React and coding!" />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
