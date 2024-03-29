import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../Hleper/slice/CartSlice";

function CartItem({ name, img, id, qty, pricee, size }) {
  const dipatch = useDispatch();

  let price = pricee * qty;
  return (
    <>
      <div>
        <img
          src={img}
          className="img w-[80px] h-[50px] rounded-sm hover:scale-110 cursor-pointer transition-all duration-200"
        />
      </div>
      <div className="flex flex-col w-full justify-between ml-2">
        <div className="flex flex-row justify-between items-center">
          <p>{name}</p> <p>{size}</p>{" "}
          <MdDelete
            onClick={() => dipatch(removeFromCart({ id }))}
            className=" fill-red-600 outline outline-1 outline-red-600 rounded-sm cursor-pointer text-xl hover:scale-110 transition-all duration-200"
          />
        </div>
        <div className="flex justify-between">
          <p>Rs.{price}</p>
          <div className="flex items-center justify-between w-14">
            <AiOutlinePlus
              onClick={() => dipatch(incrementQty({ id }))}
              className="text-xl hover:scale-110 transition-all duration-100 p-1 bg-yellow-500  cursor-pointer rounded-sm"
            />
            <span className="text-sm">{qty}</span>
            <AiOutlineMinus
              onClick={() => dipatch(decrementQty({ id }))}
              className=" text-xl  bg-yellow-500 
             cursor-pointer rounded-sm hover:scale-110 transition-all duration-100 p-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
