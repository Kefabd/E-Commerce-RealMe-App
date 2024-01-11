import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-beige">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white hover:text-beige cursor-pointer">
          <Link href="/">MaroCosmetique</Link>
        </div>
        <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
