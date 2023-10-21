

import { LOGO_URL } from "../utils/constant";


const Header = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-green-500 text-3xl font-semibold hover:text-green-400"
        >
          <img src={LOGO_URL} alt="Food Logo" className="h-12" />
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="text-white">
          <a href="/cart" className="relative group flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 3v12h10V3H7zm0 12V7m0 0v8m3-8v8m5 0v-8"
              />
            </svg>
            <span>Cart</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded-full absolute -top-2 -right-2 group-hover:bg-green-600 group-hover:text-white">
              0
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

