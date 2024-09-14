"use client";  

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search functionality here
    console.log('Search Term:', searchTerm);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <>
      {/* Top Header */}
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <Link href="/">Philatelist Hub</Link>
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="w-1/2 flex items-center mx-auto"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full px-3 py-1 text-black rounded-md"
            />
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
              Search
            </button>
          </form>

         

          {/* Profile Option */}
          <div className="relative ml-4">
            <button
              onClick={toggleProfileDropdown}
              className="text-white flex items-center"
            >
              Profile
            </button>
            {profileDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg py-2 z-50">
                <li>
                  <Link href="/profile">View Profile</Link>
                </li>
                <li>
                  <Link href="/npda">Account </Link>
                </li>
              </ul>
            )}
          </div>

           {/* Sell Option */}
           <Link href="/sell">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
              Sell
            </button>
          </Link>
        </div>
      </header>

      {/* Main Navbar */}
      <nav className="bg-gray-900 p-2">
        <div className="container mx-auto flex justify-around items-center">
          {/* Navigation Links */}
          <ul className="flex items-center space-x-6 text-white ">
            <li className="flex-none">
              <Link href="/">Home</Link>
            </li>
            <li className="relative flex-grow text-center">
              <button
                onClick={toggleDropdown}
                className="hover:text-gray-300 cursor-pointer"
              >
                Items
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg py-2 z-50">
                  <li>
                    <Link href="/items/stamps">Stamps</Link>
                  </li>
                  <li>
                    <Link href="/items/envelops">Envelops</Link>
                  </li>
                  <li>
                    <Link href="/items/letters">Letters</Link>
                  </li>
                  
                </ul>
              )}
            </li>
            <li className="flex-none text-center">
              <Link href="/community">Community</Link>
            </li>
            <li className="flex-none text-center">
              <Link href="/about">About Us</Link>
            </li>
            <li className="flex-none text-center">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
