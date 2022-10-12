import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article_page from "./components/Article_page";
import Post_form from "./components/Post_form";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Post_form />} />
        <Route path="/article/:id" element={<Article_page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
