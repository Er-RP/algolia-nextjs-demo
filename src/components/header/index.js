import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryLogo from "../../icons/primaryLogo";
import CartSVG from "../../icons/cart";
import MegaMenu from "./megaMenu";

const Header = () => {
  const catRef = useRef()
  const [topValue,setTopValue]=useState(0)
  useEffect(()=>{
  const fromTopOffset = catRef?.current?.offsetHeight
 fromTopOffset && fromTopOffset !== topValue && setTopValue(fromTopOffset)
  },[catRef?.current])
  return (
    <div  className="sticky top-0 px-6  grid grid-cols-[70px,1fr,80px] items-center gap-5  shrink-0 h-auto primary_header border-b-4 border-b-accent">
      
      <div className="md:order-2">
        <div className="hidden md:block">
        <div ref={catRef} className="peer cursor-pointer py-2 w-fit">
          <p >Browse</p>
        </div>
        <div className={`hidden hover:block px-2 border-t-4 border-t-accent peer-hover:block transition-all absolute left-0 bg-background text-text w-full text-lg`}
          style={{top: topValue ? topValue + "px" :"0px"}}
          >
    <div className='px-4 py-1 rounded-md shadow-sm shadow-text w-full h-[80vh] min-h-96 max-h-[700px]'>
            <MegaMenu/>
            </div>
          </div>
          </div>
      </div>
      <div className="md:order-1">
        <Link to="/">
          <PrimaryLogo />
        </Link>
      </div>
      <div className="text-right justify-self-end order-3">
        <Link to="/cart">
          <CartSVG />
        </Link>
      </div>
    </div>
  );
};

export default Header;
