import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Article_page = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    getArticle();
  }, []);

  let { id } = useParams();

  let getArticle = async () => {
    let response = await fetch(`/back/article/${id}`);

    let data = await response.json();

    setArticle(data);
  };

  return (
    <div className="articl_page">
      <Header />
      <div className="content">
        <div className="title">
          <h1>{article.title}</h1>
        </div>
        <div className="date">
          <h3>{article.created}</h3>
        </div>
        <div className="article">
          <p>{article.article}</p>
        </div>
      </div>
    </div>
  );
};

export default Article_page;
