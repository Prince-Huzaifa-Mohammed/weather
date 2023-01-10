import * as React from "react";

const Navbar = () => {
  return (
    <div className="header-box">
      <header className="container">
        <div className="logo">
          <h1>Where in the world?</h1>
        </div>
        <div className="dark-mode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>

          <p className="dark-mode__text">Dark Mode</p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
