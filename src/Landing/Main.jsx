import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";

function Main() {
  return (
    <div className="Main">
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<App />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
    </div>
  );
}

export default Main;
