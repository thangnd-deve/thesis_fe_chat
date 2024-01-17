import React from 'react';
import Link from 'next/link';
import { HiOutlineHome, HiOutlineUser, HiOutlineCog, HiOutlineLogout } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-10 rounded-tr-md">
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/" className="flex items-center text-xl p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <HiOutlineHome className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/users" className="flex items-center text-xl p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <HiOutlineUser className="mr-2" />
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="flex items-center text-xl p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <HiOutlineCog className="mr-2" />
              Settings
            </Link>
          </li>
          <li className="mb-4">
            <button className="flex items-center text-xl p-2 rounded-lg hover:bg-gray-700 transition-colors text-red-500">
              <HiOutlineLogout className="mr-2" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div >
  );
};

export default Sidebar;