import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Post_form from "./components/Post_form";
import Home from "./Home";
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Post_form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
