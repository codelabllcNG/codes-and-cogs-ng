import React from "react";

function Navbar() {
  return (
    <div
      id="nav-div"
      className="flex justify-between bg-gray-500 text-white p-10"
    >
      <div className="bg-red-600">Logo </div>
      <ul className="flex bg-red-600 p-2 ">
        <li className="flex bg-green-600 mr-4">Home</li>
        <li className="flex bg-cyan-600 mr-4">About</li>
        <li className="flex bg-blue-900 mr-4">Contact</li>
        <li className="flex bg-black ">Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
