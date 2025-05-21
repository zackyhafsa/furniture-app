import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center px-[5%] py-6 fixed top-0 right-0 left-0 bg-white z-[9999]">
      <div>
        <img src="./logo.svg" alt="logo" width={120} />
      </div>
      <ul className="flex gap-10 max-md:hidden max-lg:gap-5 max-lg:text-sm">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Furniture</a>
        </li>
        <li>
          <a href="#">Partnerships</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <div className="flex gap-5 max-lg:text-sm items-center max-md:hidden">
        <a href="#" className="bg-greenlight text-text rounded-md px-6 py-3">
          Sign Up
        </a>
        <div className="bg-text p-3 rounded-md">
          <ShoppingBag color="white" size={20} />
        </div>
      </div>
      <Menu
        className="md:hidden rounded-full hover:bg-gray-300 active:bg-gray-400 w-11 h-11 p-2"
        onClick={handleOpen}
        size={30}
      />
      {open && (
        <div className="absolute bg-white top-full right-0 w-60 text-center rounded-md p-5 space-y-3">
          <ul className="flex  flex-col md:hidden">
            <li className="hover:bg-gray-200 py-3 rounded-md transition-all ease-in-out duration-300">
              <a href="#">About Us</a>
            </li>
            <li className="hover:bg-gray-200 py-3 rounded-md transition-all ease-in-out duration-300">
              <a href="#">Furniture</a>
            </li>
            <li className="hover:bg-gray-200 py-3 rounded-md transition-all ease-in-out duration-300">
              <a href="#">Partnerships</a>
            </li>
            <li className="hover:bg-gray-200 py-3 rounded-md transition-all ease-in-out duration-300">
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div className="flex flex-col gap-5 max-lg:text-sm items-center  md:hidden">
            <a
              href="#"
              className="bg-greenlight hover:bg-lime-300 transition-all ease-in-out duration-300 text-text rounded-md px-6 py-3 w-full"
            >
              Sign Up
            </a>
            <div className="bg-text border hover:border-text p-3 rounded-md w-full text-white hover:text-text hover:bg-white transition-all ease-in-out duration-300">
              <ShoppingBag size={20} className="mx-auto" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
