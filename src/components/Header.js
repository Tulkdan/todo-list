import React from 'react';
import logo from '../logo.svg';

const Header = () => (
  <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4">
    <div className="flex items-center flex-shrink-o text-black">
      <img src={logo} className="fill-current App-logo" alt="logo" />
      <nav className="font-semibold text-xl text-white tracking-tight">Todo list</nav>
    </div>
  </nav>
);

export default Header;