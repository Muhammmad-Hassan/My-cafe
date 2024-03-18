import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Make_Sale from "./screens/Make_Sale";
import ContextProvider from "./Hleper/ContextProvider";
import Navbar from "./conponents/Navbar";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter basename="/My-cafe">
        <div className="checking">
          <Toaster />

          <Navbar />
          <Routes>
            <Route path="/" element={<Make_Sale />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
