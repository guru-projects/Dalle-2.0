import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Header />
          <main className="w-full sm:p-8 px-4 py-8 dark:bg-primary-dark min-h-[calc(100vh-73px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
