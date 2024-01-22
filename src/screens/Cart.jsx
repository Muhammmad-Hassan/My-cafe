import React, { useContext, useState } from "react";
import axios from "axios";
import Context from "../Hleper/Context"

import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import {drop} from  "../Hleper/slice/CartSlice";
import { useDispatch } from "react-redux";

import CartItem from "./CartItem";

function Cart({active , setActive}) {
  const {expanded} = useContext(Context)
  const dipatch = useDispatch()
  const cartItem = useSelector((state) => state.cart.cart);
  const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  let totalPrice = cartItem.reduce(
    (total, food) => total + food.qty * Number(food.price),

    0
  );
  const placeOrder = async () => {
    let userEmail = localStorage.getItem("userEmail");
    console.log(userEmail);

    try {
      const result = await axios.post("http://127.0.0.1:5004/api/orderData", {
        order_data: cartItem,
        order_date: new Date().toString(),
      });
      dipatch(drop())
      console.log("Order Responce", result);
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <>
      <div
        className={`fixed top-32 right-0 bg-gray-200  ${expanded ? "w-[20vw]" : "w-[34vw]"}   p-5 h-full  ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 `}
      >
        <div className="">
          <div className="flex justify-between">
            <span className="font-bold text-xl text-gray-700">My Orders</span>{" "}
            <IoMdClose
              className="text-2xl p-1 hover:bg-orange-500 transition-all duration-200  cursor-pointer rounded-sm"
              onClick={() => setActive(!active)}
            />
          </div>
          <div className="flex ">
            <div className="flex items-center mt-1 justify-center  flex-col w-[60%]">
              <div className="flex me-auto">
                <input type="checkbox" className=" cursor-pointer" />
                <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Item Details
                </label>
              </div>
              <input
                className=" shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="address"
              />
            </div>
            <div className="flex items-center mt-1 justify-center flex-col w-[40%] ml-2">
              <label className="me-auto block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                type="number"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mt-1 justify-center flex-col ml-2">
              <label className="me-auto block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Total Quantity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                type="number"
                value={totalQty}
              />
            </div>
            <div className="flex items-center mt-1 justify-center flex-col  ml-2">
              <label className="me-auto block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Rate
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                type="number"
              />
            </div>
            <div className="flex items-center mt-1 justify-center flex-col ml-2">
              <label className="me-auto block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Total Amount
              </label>
              <input
                className="shadow  appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                type="number"
                value={totalPrice}
              />
            </div>
          </div>
        </div>
        <div className="w-full  h-[62%] overflow-y-scroll overflow-x-hidden ">
          {cartItem.length > 0 ? (
            cartItem.map((foodItems) => (
              <div
                key={foodItems.id}
                className={` ${expanded ? "w-[100%]" : "w-[80%]"}  shadow-lg rounded-lg flex p-3 border-solid border-gray-300 mt-2 border-2 `}
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
            <h4 className="text-center font-bold text-2xl text-gray-700 mt-10">
              The Cart is empty
            </h4>
          )}
          {/* <button
            className="bg-gray-300 mt-4 p-2 rounded-md  "
            onClick={placeOrder}
          >
            Place order
          </button> */}
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActive(!active)}
        className="rounded-full bg-white shadow-md text-5xl hover:scale-125 transition-all duration-200 p-3 fixed bottom-4  right-9 hover:cursor-pointer"
      />
    </>
  );
}

export default Cart;
