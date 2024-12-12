import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/* Pages */

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <RouterScrollTop />
    </>
  );
}

export default App;
