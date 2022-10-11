import React, { useState, useEffect } from "react";

const Card = ({ article }) => {
  return (
    <div className="card">
      <h2>{article.title}</h2>
      <h4>{article.created}</h4>
      <p>{article.description}</p>
    </div>
  );
};

export default Card;
