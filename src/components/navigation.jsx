import React from "react";

function navigation() {
  return (
    <>
      <nav className="container">
        <img src="./image/brand_logo.png" alt="logo" />
        <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Location</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
}

export default navigation;
