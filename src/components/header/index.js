import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 flex gap-5 shrink-0 h-auto bg-secondary-800">
      <Link to="/" className="italic font-mono">
        Home
      </Link>
      <Link to="/browse">Landing</Link>
      <Link to="/my_product/100">Detail</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Header;
