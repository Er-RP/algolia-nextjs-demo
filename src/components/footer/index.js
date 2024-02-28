

import React from 'react';
import ContactInfo from './ContactInfo';

const Footer = () => {
 

  const FindInFast = [
    'Accessories',
    'Laptops & Computers',
    'Gaming',
    'Mac Computers',
    'pc Computers',
  ];

  const Information = [
    'About Us',
    'Contact Us',
    'Shopping Cart',
    'Wishlist',
    'All Collections',
    'Privacy & Policy',
    'Terms & Condition',
    'Shipping & return',
    'FQAs'
  ];

  const Quicklinks = [
    'Electronics',
    'Video Games',
    'Toys',
    'Clothing',
    'Home Products'
  ];

  return (
    <footer className="bg-secondary-800 text-primary-100 font-serif">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <div className="flex mt-4">
             <ContactInfo/>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Find in Fast</h2>
            <ul>
              {FindInFast.map((item, index) => (
                <li key={index} className="mb-2 hover:scale-105 duration-75 cursor-pointer hover:text-red-500">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Information</h2>
            <ul>
              {Information.map((item, index) => (
                <li key={index} className="mb-2 hover:scale-105 duration-75 cursor-pointer hover:text-red-500">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">In the Spotlight</h2>
            <ul>
              {Quicklinks.map((item, index) => (
                <li key={index} className="mb-2 hover:scale-105 duration-75 cursor-pointer hover:text-red-500">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-700 mt-8" />
        <p className="text-center text-sm mt-8">&copy; 2024 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;  
