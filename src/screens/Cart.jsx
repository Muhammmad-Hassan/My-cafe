import React, { useContext, useState } from "react";
import axios from "axios";
import { MdOutlineFoodBank } from "react-icons/md";

import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
// import { drop } from "../Hleper/slice/CartSlice";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux";
import Context from "../Hleper/Context";

import CartItem from "./CartItem";

function Cart() {
  const { active, setActive } = useContext(Context);
  const dipatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cart);
  let totalPrice = cartItem.reduce(
    (total, food) => total + Number(food.qty) * Number(food.price),

    0
  );
  // const placeOrder = async () => {
  //   let userEmail = localStorage.getItem("userEmail");
  //   console.log(userEmail);

  //   try {
  //     const result = await axios.post("http://127.0.0.1:5004/api/orderData", {
  //       order_data: cartItem,
  //       order_date: new Date().toString(),
  //     });
  //     dipatch(drop());
  //     console.log("Order Responce", result);
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // };

  return (
    <>
      <div
        className={`fixed top-20 bg-white right-0 border-2 border-solid border-yellow-500 shadow-lg w-full lg:w-[24vw]   p-5 h-full  ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="h-[70px]">
          <div className="mb-4">
            <div className="flex justify-between  items-center  scroll-smooth">
              <span className="font-bold text-x  ">My Orders</span>
              {""}
              <IoMdClose
                className="text-2xl p-1 bg-red-600 fill-white hover:fill-red-500 hover:bg-white hover:outline outline-1 outline-red-500 transition-all duration-200  cursor-pointer rounded-sm"
                onClick={() => setActive(!active)}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="">Grand Total </h2>
            <span className="">Rs.{totalPrice}</span>
          </div>
        </div>
        <div className="w-full  h-[80%] overflow-y-scroll overflow-x-hidden ">
          {cartItem.length > 0 ? (
            cartItem.map((foodItems) => (
              <div
                key={foodItems.id}
                className={`shadow-lg rounded-lg flex p-3 border-solid border-gray-300 mt-2 border-2 `}
              >
                <CartItem
                  name={foodItems.name}
                  id={foodItems.id}
                  img={foodItems.img}
                  qty={foodItems.qty}
                  pricee={foodItems.price}
                  size={foodItems.size}
                />
              </div>
            ))
          ) : (
            <h4 className="text-center font-bold text-2xl  mt-10">
              The Cart is empty
            </h4>
          )}
          <button className="bg-gray-300 mt-4 ml-auto p-2 rounded-md  hover:shadow-md shadow-gray-400 transition-all duration-200">
          Place order
        </button>
        </div>
        
      </div>
     
    </>
  );
}

export default Cart;
