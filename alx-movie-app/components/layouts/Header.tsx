import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className=" p-4 bg-gray-800 text-white">
      <nav className="container flex flex-col gap-2 sm:flex-row sm:justify-between items-center">
        <h1 className="text-2xl font-black">Movie App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="">Movies</Link>
          </li>{" "}
          <li>
            <Link href="">Films</Link>
          </li>{" "}
          <li>
            <Link href="">Series</Link>
          </li>{" "}
          <li>
            <Link href="">Animation</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
