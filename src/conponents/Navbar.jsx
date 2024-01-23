import React from "react";
import { RiRestaurantLine } from "react-icons/ri";
function Navbar() {
  return (
    <div>
      <div
        className={`h-20 fixed top-0 w-full ml-0 shadow-xl shadow-amber-300 flex items-center px-2 z-30 `}
      >
        <h1 className="font-bold ml-3 text-4xl flex items-center bg-inherit gap-1  sh">
          Cafe
          
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
