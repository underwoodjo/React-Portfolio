// Here we have imported react, viteLogo and TypeAnimation from react-type-animation. We downloaded the react-type-animation from npmjs.com and followed the installation instructions.We copied the <TypeAnimation /> component from usage part of the page to make the text move as seen below. Make sure to npm run dev again once installing a new package.I also added the FaGithub and FaLinkedin icons from react-icons.
import React from "react";
import viteLogo from "/vite.svg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      {/* For the image we have it applied to the width of the full screen, as well as the height of the screen, we also set the object-cover so that the image is not stretched */}
      <img
        className="w-full h-screen object-cover"
        src="./src/componets/images/forest.jpeg"
      />
      {/* For the text, it is set as absolute so that it can be positioned on the image as well set it to top 1/2 of the screen which moved it halfway up the screen. The settings are placed in the DIV so it is applied to all the children */}
      <div className="absolute top-1/2 w-full text-center text-white text-3xl>">
        <h1 className="text-3xl">Hi, I'm Joanna</h1>
        <h2 className="text-2xl">I'm a...</h2>
        {/* Here we are using the react-type-animation library to make the text move across the screen */}
        <h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Web Developer",
              2000, // wait 2s before replacing Web Developer with focused in frontend development
              "focused in frontend development",
              2000,
              "and UX design",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        {/* Here we have applied the FaGithub and FaLinkedin icons, they are set to absolute so that they can be positioned on the image */}
        <div className="absolute flex justify-center w-full p-4 space-x-4">
          <FaLinkedin className="cursor-pointer" size ={20}/>
          <FaGithub className="cursor-pointer" size ={20}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
