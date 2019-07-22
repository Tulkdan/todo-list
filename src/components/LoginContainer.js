import React from 'react';

const LoginContainer = props => (
  <div className="flex container mx-auto lg:px-20 sm:px-5 justify-center">
    <div className="w-full max-w-xl shadow-xl p-6 mt-10">
      <span className="text-4xl">Looks like you're not logged in...</span>
      <div className="flex items-center">
        <button
          className="bg-blue-500 w-full hover:bg-blue-700 
            text-white font-bold py-2 px-4 rounded 
            focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => props.login()}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  </div>
);

export default LoginContainer;