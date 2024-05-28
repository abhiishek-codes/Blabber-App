import React from "react";
import HomeVideo from "url:../assets/home1.mp4";
import Global from "url:../assets/home2.mp4";
import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="bg-bgcolor h-full pt-2 md:pt-0 overflow-y-hidden">
      <div className="pt-2 mx-auto flex flex-col items-center justify-center gap-y-4 md:gap-y-6 text-white max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Blabber The Chat App
        </h1>
        <p className="text-md md:text-lg tracking-wide font-medium text-center px-4 pt-1">
          Blabber Makes it easy and fun to stay in touch & communicate anywhere
          anyplace with anyone
        </p>
        <div className="flex items-center justify-center w-full gap-x-2 overflow-hidden flex-1">
          <div className="flex-1 max-w-lg p-2 hidden md:block">
            <video loop autoPlay muted className="w-full h-auto rounded-lg">
              <source src={HomeVideo} type="video/mp4" />
            </video>
          </div>
          <div className="flex-1 max-w-lg p-2">
            <video loop autoPlay muted className="w-full h-auto rounded-lg">
              <source src={Global} type="video/mp4" />
            </video>
          </div>
        </div>
        <Link to="/login">
          <button className="bg-bgbutton px-10 py-2 rounded-sm transform-cpu active:scale-75 duration-300 tracking-wide text-black hover:bg-white hover:text-black font-[Mona]">
            Start Journey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
