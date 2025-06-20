    // src/App.jsx
    import React from 'react';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import HomePage from './pages/HomePage';

    function App() {
      return (
        // Added font-sans and antialiased for consistent font rendering across the app
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white font-sans antialiased">
          <Header />
          <HomePage />
          <Footer />
        </div>
      );
    }

    export default App;
    