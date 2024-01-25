import React from "react";
import viteLogo from "/vite.svg";
// import Navbar from './componets/Navbar';
// import images from './componets/images';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="./src/componets/images/mountains.jpeg"
      />
      <div className="text-on-image">
        <h1>Hi, I'm Joanna!</h1>
      </div>
    </div>
  );
};

export default Main;
