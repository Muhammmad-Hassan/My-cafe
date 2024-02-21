import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiRestaurantLine } from "react-icons/ri";
import Context from "../Hleper/Context.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItem = useSelector((state) => state.cart.cart);

  const { active, setActive } = useContext(Context);
  const totalItems = cartItem.reduce((total, item) => total + 1, 0);

  return (
    <div>
      <div
        className={`h-20 fixed top-0 w-[100%] shadow-xl bg-yellow-500 flex items-center justify-between px-2 z-30 `}
      >
        <Link to={"/"} className=" bg-inherit">
          <h1 className="font-bold ml-3 text-4xl flex items-center bg-inherit gap-1  sh">
            Cafe
          </h1>
        </Link>
        <div className="flex bg-yellow-500 items-center justify-center mr-3">
          <Link to={"/signup"} className=" bg-inherit">
            <button className="px-2 py-1.5 transition-all duration-200 rounded-md bg-yellow-500 hover:text-white  font-medium border border-black m-2">
              Sign Up
            </button>
          </Link>
          <Link to={"/login"} className=" bg-inherit">
            <button className="px-2 py-1.5 transition-all duration-200 rounded-md bg-yellow-500 hover:text-white  font-medium border border-black m-2">
              Login
            </button>
          </Link>
          <div className="rounded-full flex fixed bottom-5 right-7">
            <FaShoppingCart
              onClick={() => setActive(!active)}
              className="rounded-full  bg-yellow-500 shadow-lg text-5xl hover:scale-110 transition-all duration-200 p-3  hover:cursor-pointer"
            />
            <span className={` ${totalItems !=0 && "bg-red-400"} bg-yellow-500  shadow-xl shadow-black absolute -right-1 rounded-full   text-sm w-5 h-5 text-center `}>
              {totalItems}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
