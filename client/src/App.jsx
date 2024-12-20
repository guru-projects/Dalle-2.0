import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

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
        <Link
          to="/login"
          className="font-inter font-medium bg-[#6469ff] text-white rounded-md px-4 py-2">
          Login
        </Link>
        <Link
          to="/register"
          className="font-inter font-medium bg-[#6469ff] text-white rounded-md px-4 py-2">
          Register
        </Link>
      </header>
      <main className="w-full sm:p-8 px-4 py-8 bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </main>
    </BrowserRouter>
  );
};

export default App;
