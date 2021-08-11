import React, { useState } from "react";

function Navigation({ setBg }) {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const showSideMenu = openSideMenu ? "translate-x-0" : "-translate-x-full";
  const [showColor, setShowColor] = useState(false);

  return (
    <div className="">
      <div className="z-0 bg-gray-300 flex text-center justify-center text-gray-700 p-3 font-bold text-lg">
        <button
          onClick={() => setOpenSideMenu(true)}
          className="p-2 text-xs sm:text-base hover:bg-blue-500 border rounded-xl border-2 border-gray-700"
        >
          Change Button 2 Background
        </button>
      </div>

      <div
        className={`${showSideMenu} absolute top-0 min-h-screen w-96 z-50 bg-gray-100 text-black transition duration-200`}
      >
        <div className="mx-2 p-2 justify-between flex items-center border-b border-gray-300">
          <p className="flex mx-auto py-5 text-lg font-bold">
            Change Background
          </p>
        </div>
        <div className="grid grid-cols-2 m-3 p-2 gap-5 ">
          <div
            onClick={() => {
              setShowColor(true);
            }}
            className="bg-bgcolors bg-cover h-20 rounded-lg"
          ></div>
          <p className="">Color</p>
          {showColor ? (
            <>
              <div
                onClick={() => {
                  setBg("bg-indigo-300");
                  setOpenSideMenu(false);
                }}
                className="bg-indigo-300 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => {
                  setBg("bg-blue-500");
                  setOpenSideMenu(false);
                }}
                className="bg-blue-500 h-20 rounded-lg text-blue-500"
              >
                blue
              </div>
              <div
                onClick={() => {
                  setBg("bg-yellow-300");
                  setOpenSideMenu(false);
                }}
                className="bg-yellow-300 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => {
                  setBg("bg-red-500");
                  setOpenSideMenu(false);
                }}
                className="bg-red-500 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => {
                  setBg("bg-pink-500");
                  setOpenSideMenu(false);
                }}
                className="bg-pink-500 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => {
                  setBg("bg-green-500");
                  setOpenSideMenu(false);
                }}
                className="bg-green-500 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => {
                  setBg("bg-gray-300");
                  setOpenSideMenu(false);
                }}
                className="bg-gray-300 h-20 rounded-lg"
              ></div>
              <div
                onClick={() => {
                  setBg("bg-custom2");
                  setOpenSideMenu(false);
                }}
                className="bg-custom2 h-20 rounded-lg"
              >
                <p className="mx-12 mt-6">Default</p>
              </div>{" "}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
