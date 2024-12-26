import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Errors from "./Errors";
import Description from "./Description";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<Errors />} />
        <Route path="/movie/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default Home;