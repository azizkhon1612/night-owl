import React from "react";
import { FC } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import Title from "../components/Common/Title";
import Footer from "../components/Footer/Footer";


const Home: FC = () => {
  return (
    <>
      <Title value="Night Owl | Free Movie Website" />

      <div className="flex md:hidden justify-between items-center px-5 my-5">
        <Link to="/" className="flex gap-2 items-center">
          <LazyLoadImage
            src="/logo.png"
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="text-xl text-white font-medium tracking-wider uppercase">
            Moon<span className="text-primary">light</span>
          </p>
        </Link>

      </div>

      <div className="flex items-start">
 

        <div className="flex-grow md:pt-7 pt-0 pb-7 border-x md:px-[2vw] px-[4vw] border-gray-darken min-h-screen">
          <div className="flex justify-between md:items-end items-center">
            <div className="inline-flex gap-[40px] pb-[14px] border-b border-gray-darken relative">
 
            </div>
        
          </div>

          
        </div>

      </div>

     
    </>
  );
};

export default Home;
