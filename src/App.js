import React from "react";
import "instantsearch.css/themes/satellite.css";
import { Form, Link, Outlet, useLoaderData } from "react-router-dom";

const App = () => {
  // const data = useLoaderData();
  // console.log("RP loader data : ", data);
  return (
    <div>
      <div className="m-5 flex gap-5 ">
        <Link to="/" className="italic font-mono">
          Home
        </Link>
        <Link to="/browse">Landing</Link>
        <Link to="/my_product/100">Detail</Link>
        <Link to="/cart">Cart</Link>
      </div>
      {/* <Form method="post">
        <input type="text" name="title"  className="b-1"/>
        <input type="text" name="description" />
        <button type="submit">New</button>
      </Form> */}
      <Outlet />
      <div className="m-5">Footer</div>
    </div>
  );
};

export default App;
