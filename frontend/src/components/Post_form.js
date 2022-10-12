import React, { useState } from "react";
import Header from "./Header";
// import { useNavigate } from "react-router-dom";

const Post_form = () => {
  const [datas, setDatas] = useState({
    title: "",
    description: "",
    article: "",
  });

  let postDatas = async () => {
    await fetch("/back", {
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
            // required="require"
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={(e) =>
              setDatas({ ...datas, description: e.target.value })
            }
            // required="require"
          />

          <label htmlFor="article">Article</label>
          <textarea
            name="article"
            id="article"
            cols="30"
            rows="10"
            onChange={(e) => setDatas({ ...datas, article: e.target.value })}
            // required="require"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Post_form;
