    // src/components/Header.jsx
    import React from 'react';
    import smallLogo from '../assets/sts-logo.png'; // Make sure this path is correct

    function Header() {
      return (
        <header className="bg-transparent text-white p-4 relative z-10"> {/* Reduced vertical padding a bit */}
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo in the header (no longer using the h1 placeholder) */}
            <img src={smallLogo} alt="SuperTradeSignals Logo" className="h-10 w-auto" />
            <nav>
              <ul className="flex items-center space-x-6">
                <li><a href="#" className="hover:text-purple-400 transition duration-200 text-lg font-medium">Home</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-200 text-lg font-medium">Signals</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-200 text-lg font-medium">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-200 text-lg font-medium">Contact</a></li>
                {/* "Book a call" button removed as requested */}
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
    