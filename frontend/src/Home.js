import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";

const Home = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  let getArticles = async () => {
    let response = await fetch("/back");
    let data = await response.json();
    setArticles(data);
  };

  return (
    <div className="home">
      <Header />
      <div className="content">
        <div className="add_button">
          <Link to="/add">
            <button className="add">Créez un article</button>
          </Link>
        </div>

        {articles.map((article) => (
          <Link to={"/article/" + article.id} className="articles_links">
            <Card key={article.id} article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
