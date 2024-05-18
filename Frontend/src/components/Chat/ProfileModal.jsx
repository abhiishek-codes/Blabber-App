import React from "react";

const ProfileModal = ({ name, email, pic }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-slate-300 w-[85vw] h-[55vh] sm:w-[60vw]  md:w-[53vw] md:h-[55vh]
    rounded-lg shadow-lg flex flex-col items-center justify-center gap-y-6"
        >
          <h1 className="text-xl sm:text-3xl tracking-wide">{name}</h1>
          <img
            src={pic}
            alt="Profile Pic"
            className="w-40 h-440 rounded-full"
          />
          <h1 className="text-xl sm:text-2xl tracking-wide ">
            Email : {email}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
