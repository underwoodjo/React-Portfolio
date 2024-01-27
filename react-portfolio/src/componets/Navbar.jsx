// To get started, imported react, downloaded react-icons and followed the installation instructions. The ran npm run dev again once installing a new package. Then we copied the <AiOutlineMenu /> component from usage part of the page to make the hamburger menu as seen below. Next we imported <AiOutlineHome />, <AiOutlineProject /> and <AiOutlineMail />. These all put out icons on the page.
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
// added useState to the import above, set as false by default. useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. useState is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together. 
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("testing state");
  };
//   Below, we have applied our icons to the navbar. We have also applied the hamburger menu to the mobile view. We have also applied the links to the icons. <AiOutlineMenu /> is the hamburger menu. <AiOutlineHome />, <AiOutlineProject /> and <AiOutlineMail /> are the icons. The hrefs are the links to the icons. The className is the styling for the icons. The onClick is the function that makes the hamburger menu work. The <div> is the styling for the hamburger menu. The <a> tags are the links for the hamburger menu. The className is the styling for the hamburger menu. The <span> is the text for the hamburger menu. We applied md:hidden to the hamburger/<AiOutlineMenu /> so that it only shows up on the mobile view. It disappears when the screen gets larger and then re-appears when the screen gets smaller. When the screen gets larger the side nav icons appear. {nav ? (Here is where we inserted the function/setting for the hamburger menu) : ("") } The part applied after the colons sets in motion for the side nav bar to appear
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/40 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-20">
        {/* We used a column to organize the icons */}
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
    </div>
   </div>
  );
};
export default Navbar;
