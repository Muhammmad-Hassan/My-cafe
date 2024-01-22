import React, { useContext } from "react";
import Contex from "../Hleper/Context";

function Invoise_Purchase() {
  const { expanded } = useContext(Contex);
  // console.log(expanded)
  return (
    <div
      className={`h-[100vh] items-center ${
        expanded ? "custom-width" : "custom-width-small"
      }`}
    >
      <div className="h-[12%] bg-gray-200 flex items-center px-2">
        <h1 className="font-bold text-2xl  ">Invoise Purchase</h1>
      </div>
      <div className=" w-full p-2">
        <h4 className="font-bold ml-1">Customers Details</h4>
        <div className="flex flex-col">
          {/* top inputs */}
          <div className="w-[80%] flex">
            <div className="flex w-[100%]z">
              <div className=" w-full flex items-center mt-1 justify-center ">
                <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Purchase Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id="purchaseDate"
                  type="text"
                  placeholder="12/11/2023 11:03"
                />
              </div>
              <div className=" w-full flex items-center mt-1 justify-center">
                <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Sales Admin
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id="admin"
                  type="text"
                  placeholder="admin"
                />
              </div>
              <div className="flex w-full items-center mt-1 justify-center">
                <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Refrence No
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id="address"
                  type="text"
                  placeholder="address"
                />
              </div>
            </div>
          </div>
          {/* boatom inputs */}
          <div className="w-[100%] flex ">
            <div className="flex items-center mt-3 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Suplier
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id=""
                type="text"
                placeholder="Suplier"
              />
            </div>
            <div className="flex items-center mt-3 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Mobile No
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="mobileNo"
                type="number"
                placeholder="Mobile No"
              />
            </div>
            <div className="flex items-center mt-3 justify-center">
              <label className="block min-w-max mx-2 mt-2   text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="address"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="flex items-center mt-3 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Debit Balance
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="debitBalance"
                type="number"
                placeholder="Debit Balance"
              />
            </div>
          </div>
        </div>
      </div>
      {/* search and table */}
      <div className="w-[100%]">
        {/*search  */}
        <div className="h-16  flex items-center  bg-gray-200 w-[100%]">
          <div className="flex">
            <div className="flex flex-col ml-2">
              
              <label htmlFor="" className="font-bold">
                Items Details
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id=""
                type="number"
              />
            </div>
            <div className="flex flex-col ml-2">
              <label htmlFor="" className="font-bold">
                Unit
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id=""
                type="number"
              />
            </div>
            <div className="flex flex-col ml-2">
              <label htmlFor="" className="font-bold">
                Quantity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id=""
                type="number"
              />
            </div>
            <div className="flex flex-col ml-2">
              <label htmlFor="" className="font-bold">
                Rate
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id=""
                type="number"
              />
            </div>
            <div className="flex flex-col ml-2">
              <label htmlFor="" className="font-bold">
                Total
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id=""
                type="text"
              />
            </div>
            <div className="flex items-center ml-2 ">
              <button className="btn rounded-lg px-3 py-1 hover:opacity-80 transition-all bg-indigo-200 text-sm ml-1">
                Find
              </button>
              <button className="btn rounded-lg px-3 py-1 hover:opacity-80 transition-all  bg-indigo-200 text-sm ml-1">
                Clear
              </button>
            </div>
          </div>
        </div>
        {/* table */}
        <div className=" flex overflow-x-auto">
          <table className="border-collapse border border-slate-500   ... w-[80%]">
            <thead>
              <tr>
                <th className="border border-slate-600 border-opacity-40  ...">
                  {" "}
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Sr
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Full Name
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Mobile No
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Balance
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Is Locked
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Last Visit
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Profit
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-right">
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold  ">
                  {">"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {1}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"Customer1"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {""}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {0}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {""}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  <input type="checkbox" className="block m-auto " />
                </td>

                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {0}
                </td>

                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"History"}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-[20%] px-1">
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <label className="block min-w-max mx-2 mt-2 w-full text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Total Amount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id=""
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="block min-w-max mx-2 mt-2 w-full text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Previous
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id=""
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="block min-w-max mx-2 mt-2 w-full text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Total A
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id=""
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="block min-w-max mx-2 mt-2 w-full text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Discount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id=""
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="block min-w-max mx-2 mt-2 w-full text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Grand Total
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id=""
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="block min-w-max mx-2 mt-2 w-full  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  Paid Amount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id=""
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="block min-w-max mx-2 mt-2 w-full text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                  New Balance
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                  id=""
                  type="number"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoise_Purchase;
