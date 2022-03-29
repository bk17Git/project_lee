import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Help, About, Welcome, SplashScreen, AboutSharePost } from "./components";
import Home from "./container/Home";

const App = () => {
  const navigate = useNavigate();



  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-to-share-post" element={<AboutSharePost />} />
    </Routes>
  );
};

export default App;
