import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Make_Sale from "./screens/Make_Sale";
function App() {
  return (
      <BrowserRouter basename="/My-cafe">
        <div className="">
          <Routes>
            <Route path="/" element={<Make_Sale />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
