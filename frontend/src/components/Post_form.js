import React, { useState } from "react";
import Header from "./Header";

const Post_form = () => {
  const [datas, setDatas] = useState({
    title: "",
    description: "",
    article: "",
  });

  let postDatas = async () => {
    await fetch("/back/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    });
  };

  let handlePost = () => {
    postDatas();
  };
  return (
    <div className="form">
      <Header />
      <div className="content">
        <form onSubmit={handlePost}>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setDatas({ ...datas, title: e.target.value })}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={(e) =>
              setDatas({ ...datas, description: e.target.value })
            }
          />

          <label htmlFor="article">Article</label>
          <textarea
            name="article"
            id="article"
            cols="30"
            rows="10"
            onChange={(e) => setDatas({ ...datas, article: e.target.value })}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Post_form;
