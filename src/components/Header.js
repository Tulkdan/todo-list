import React from 'react';
import logo from '../logo.svg';

const Header = props => (
  <nav className="flex bg-gray-800 p-4">
    <div className="flex items-center flex-shrink-o text-black w-full">
      <img src={logo} className="fill-current App-logo" alt="logo" />
      <nav className="w-full text-white">
        <span className="font-semibold text-xl tracking-tight">Todo list</span>
        <div className="float-right">
          { props.user &&
            <button
              className="bg-red-600 hover:bg-red-700 font-bold rounded py-2 px-4 focus:outline-none focus:shadow-outline"
              onClick={props.signOut}
            >
              Log Out
            </button>
          }
        </div>
      </nav>
    </div>
  </nav>
);

export default Header;