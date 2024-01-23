import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Make_Sale from "./screens/Make_Sale";
import  Navbar  from "./conponents/Navbar";
function App() {
  return (
      <BrowserRouter basename="/My-cafe">
        <div className="">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Make_Sale />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
