import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Submit from "./Pages/Submit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
