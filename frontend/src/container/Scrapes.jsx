import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Latest,
  Footer
} from "../components";

const Scrapes = () => {

  return (
    <div>
      <div className="h-full pt-2">
        <Routes>
          <Route path="/" element={<Latest />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Scrapes;
