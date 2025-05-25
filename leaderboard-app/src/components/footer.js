import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          Developed with ❤️ by <a href="https://www.abisek.dev" target="_blank" rel="noopener noreferrer">Abhishek Nepal</a>
        </p>
        <div className="footer-links">
          <a href="https://github.com/absknpl" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/absknpl" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/abhishekn123" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <p className="footer-tech">
          Built with React, DnD, and Formula 1 passion. 
          This interactive tool showcases advanced React patterns including:
          drag-and-drop interfaces, complex state management, and responsive design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;