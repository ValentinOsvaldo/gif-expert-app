import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by Osvaldo Valentin</p>

      <nav className="footer-nav">
        <a
          href="https://github.com/ValentinOsvaldo"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/valentin-osvaldo/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Linkedin
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
