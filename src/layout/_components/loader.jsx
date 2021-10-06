import React from "react";
// import Lottie from "react-lottie";
// import images from "../../apis/images";

const Loader = () => {
  return (
    <div className="loader-main">
      <div className="loader">
        <div className="note-0"></div>
        <div className="note-1"></div>
        <div className="note-2"></div>
        <div className="note-3"></div>
        <div className="note-4"></div>
      </div>
      <div className="status">Loading...</div>
    </div>
  );
};

export default Loader;
