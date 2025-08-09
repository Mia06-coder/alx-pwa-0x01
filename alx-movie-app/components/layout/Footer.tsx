import React from "react";

const Footer: React.FC = () => (
  <footer className="text-center p-4 bg-gray-800 text-white">
    <div className="container mx-auto">
      <small>
        &copy; {new Date().getFullYear()} ALX Movie App. All rights reserved.
      </small>
    </div>
  </footer>
);

export default Footer;
