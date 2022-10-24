import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

    <div
      className={`absolute z-30 shadow-md left-6 right-6 top-7 group bg-dark-lighten rounded-full ${
         "!rounded-3xl"
      }`}
    >
      <form className="relative" >
        <button className="absolute top-1/2 -translate-y-1/2 left-5">
          <BiSearch
            className="hover:text-white transition duration-300"
            size={25}
          />
        </button>
        <input
          className="w-full pl-14 pr-7 outline-none bg-transparent py-3 placeholder-gray-500 text-white"
          type="text"
          placeholder="Search..."
        />
      </form>
    </div>



