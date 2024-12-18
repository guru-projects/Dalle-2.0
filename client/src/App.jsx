import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white border-b border-b-[#e6ebf4] sm:px-8 px-4 py-4">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white rounded-md px-4 py-2">
          Create
        </Link>
      </header>
      <main className="w-full sm:p-8 px-4 py-8 bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create-post" element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
