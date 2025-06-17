import React from 'react';

const Footer = () => (
  <footer className="custom-footer py-3 mt-auto position-relative bottom-0 end-0 w-100">
    <div className="container text-center">
      <small>&copy; {new Date().getFullYear()} TimeCapsule. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
