import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import Title from "../components/Common/Title";
import Footer from "../components/Footer/Footer";

import {
  getHomeMovies,
  getHomeTVs,
  getMovieBannerInfo,
  getTVBannerInfo,
} from "../services/home";
import { HomeFilms, Item } from "../shared/types";
import { useAppSelector } from "../store/hooks";

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
              <button
                onClick={() => {
                  setCurrentTab("tv");
                  localStorage.setItem("currentTab", "tv");
                }}
                className={`${
                  currentTab === "tv" &&
                  "text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-5"
                } transition duration-300 hover:text-white`}
              >
                TV Show
              </button>
              <button
                onClick={() => {
                  setCurrentTab("movie");
                  localStorage.setItem("currentTab", "movie");
                }}
                className={`${
                  currentTab === "movie" &&
                  "text-white font-medium after:absolute after:bottom-0 after:right-[9%] after:bg-white after:h-[3px] after:w-5"
                } transition duration-300 hover:text-white`}
              >
                Movie
              </button>
            </div>
            <div className="flex gap-6 items-center">
              {/* <div className="w-6 h-6 rounded-full border border-gray-lighten tw-flex-center cursor-pointer">
                <IoMdNotificationsOutline size={17} />
              </div> */}
             
              
            </div>
          </div>

          
        </div>

        <div className="shrink-0 max-w-[310px] w-full hidden lg:block px-6 top-0 sticky ">
          <SearchBox />
          
          <TrendingNow />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
