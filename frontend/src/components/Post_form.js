import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";

const Post_form = () => {
  const [datas, setDatas] = useState({
    title: "",
    description: "",
    article: "",
  });

  const post = () => {
    console.log(datas);
    axios
      .post("/back", {
        title: datas.title,
        description: datas.description,
        article: datas.article,
      })
      .then((result) => {
        console.log(datas);
        alert("C'est bon c'est en DB");
        setDatas({
          title: "",
          description: "",
          article: "",
        });
      });
  };

  const handlTitle = (e) => {
    setDatas({
      ...datas,
      title: e.target.value,
    });
    console.log(datas);
  };

  const handlDescription = (e) => {
    setDatas({
      ...datas,
      description: e.target.value,
    });
    console.log(datas);
  };

  const handlArticle = (e) => {
    setDatas({
      ...datas,
      article: e.target.value,
    });
    console.log(datas);
  };

  return (
    <div className="form">
      <Header />
      <div className="content">
        <form onSubmit={post()}>
          <label for="title">Titre</label>
          <input
            type="text"
            name="title"
            id="title"
            value={datas.title}
            onChange={handlTitle}
            required
          />

          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={datas.description}
            onChange={handlDescription}
            required
          />

          <label for="article">Article</label>
          <textarea
            name="article"
            value={datas.article}
            onChange={handlArticle}
            required
          />

          <input type="submit" value="Post" />
        </form>
      </div>
    </div>
  );
};

export default Post_form;
