import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-sm">
      <div className="w-[90%] mx-auto py-7">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200">
          {/* Mentor Info */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold text-gray-800">Mentor</h1>
            <div className="text-gray-600 space-y-1">
              <p>A108 Adam Street</p>
              <p>New York, NY 535002</p>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <p className="font-medium">Phone:</p>
                <span>+1 5589 55488 55</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-medium">Email:</p>
                <span>mohsin@gmail.com</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-500">
              <i className="fa-brands fa-twitter text-lg hover:text-blue-400 transition"></i>
              <i className="fa-brands fa-facebook text-lg hover:text-blue-600 transition"></i>
              <i className="fa-brands fa-linkedin text-lg hover:text-blue-700 transition"></i>
              <i className="fa-brands fa-instagram text-lg hover:text-pink-500 transition"></i>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Useful Links
            </h1>
            <ul className="text-gray-600 space-y-2 mt-4">
              <li className="hover:text-gray-800 cursor-pointer">Home</li>
              <li className="hover:text-gray-800 cursor-pointer">About</li>
              <li className="hover:text-gray-800 cursor-pointer">Services</li>
              <li className="hover:text-gray-800 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Our Services
            </h1>
            <ul className="text-gray-600 space-y-2 mt-4">
              <li className="hover:text-gray-800 cursor-pointer">Web Design</li>
              <li className="hover:text-gray-800 cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Product Management
              </li>
              <li className="hover:text-gray-800 cursor-pointer">Marketing</li>
              <li className="hover:text-gray-800 cursor-pointer">
                Graphic Design
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Our Newsletter
            </h1>
            <p className="text-gray-600 mt-4">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Your email"
                className="w-full px-8 py-2 rounded-3xl border border-gray-300  focus:outline-none focus:ring-2 focus:ring-accent-color"
              />
              <button className="px-5 py-2 bg-accent-color rounded-3xl text-white  transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 pt-4">
          <p>© Copyright Mentor. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
