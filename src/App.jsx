import React from "react";
import Customers from "./screens/Customers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Icons from "./conponents/Sidebar/Icons";
import Sales from "./screens/Sales";
import UserContexProvider from "../src/Hleper/ContexProvider";
import Suplliers from "./screens/Suplliers";
import Suplliers_Purchases from "./screens/Suplliers_Purchases";
import Invoise_Purchase from "./screens/Invoise_Purchase";
import Make_Sale from "./screens/Make_Sale";
function App() {
  return (
    <UserContexProvider>
        <BrowserRouter>
      <div className="flex">
          <Icons />
          <Routes>
            <Route path="/" element={<Customers />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/suplliers" element={<Suplliers />} />
            <Route
              path="/suplliers_purchases"
              element={<Suplliers_Purchases />}
            />
            <Route path="/invoise_puschase" element={<Invoise_Purchase />} />
            <Route path="/make_sale" element={<Make_Sale />} />
          </Routes>
      </div>
        </BrowserRouter>
    </UserContexProvider>
  );
}

export default App;
