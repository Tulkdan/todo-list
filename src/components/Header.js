import React from 'react';
import logo from '../logo.svg';

const Header = () => (
  <nav className="flex bg-gray-800 p-4">
    <div className="flex items-center flex-shrink-o text-black w-full">
      <img src={logo} className="fill-current App-logo" alt="logo" />
      <nav className="font-semibold text-xl text-white tracking-tight w-full">Todo list</nav>
    </div>
  </nav>
);

export default Header;