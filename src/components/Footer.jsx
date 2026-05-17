import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black/80  text-gray-400 px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Wanderlust
            </h1>

            <p className="mt-4 max-w-xl">
              Your gateway to extraordinary travel experiences around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-white mb-3 tracking-wide">NEWSLETTER</h3>

              <p className="mb-4 text-sm">
                Subscribe for exclusive travel deals and inspiration.
              </p>

              <div className="flex items-center bg-gray-800 px-4 py-3 rounded-md">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-transparent outline-none flex-1 text-sm"
                />

                <button className="text-white text-lg">↗</button>
              </div>
            </div>
            <div>
              <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>

              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/destinations" className="hover:text-white">
                    Destinations
                  </Link>
                </li>

                <li>
                  <Link href="/myBooking" className="hover:text-white">
                    My Bookings
                  </Link>
                </li>

                <li>
                  <Link href="/profile" className="hover:text-white">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>

              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Help Center</li>

                <li className="hover:text-white cursor-pointer">
                  Terms of Service
                </li>

                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>

              <ul className="space-y-2">
                <li>01798546510</li>
                <li>mdtanzid.525@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2026 Tanzid Mondol. All rights reserved.
            </p>
            <div className="flex gap-5 mt-4 md:mt-0 text-white text-xl">
              <a
                href="https://x.com"
                target="_blank"
                className="hover:text-[#15A1BF]"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-[#15A1BF]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[#15A1BF]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
