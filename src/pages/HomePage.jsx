    // src/pages/HomePage.jsx
    import React from 'react';
    import logo from '../assets/sts-logo.png'; // Import your main logo image
    import DataCard from '../components/DataCard'; // Import the new DataCard component

    // --- MOCK DATA for testing card display ---
    // This will be replaced with actual Supabase data fetches later
    const mockMarketData = [
      {
        id: 1, type: 'stock', symbol: 'AAPL', current_price: 175.50, high_price: 176.00, low_price: 174.00, open_price: 174.50, prev_close_price: 175.20, volume: 120000000, timestamp: Date.now() - 3600000,
      },
      {
        id: 2, type: 'forex', symbol: 'EURUSD', current_price: 1.08543, high_price: 1.08600, low_price: 1.08400, open_price: 1.08500, prev_close_price: 1.08520, volume: null, timestamp: Date.now() - 1800000,
      },
      {
        id: 3, type: 'stock', symbol: 'GOOGL', current_price: 180.12, high_price: 181.00, low_price: 179.50, open_price: 180.00, prev_close_price: 179.80, volume: 85000000, timestamp: Date.now() - 900000,
      },
      {
        id: 4, type: 'forex', symbol: 'GBPUSD', current_price: 1.27189, high_price: 1.27250, low_price: 1.27000, open_price: 1.27100, prev_close_price: 1.27150, volume: null, timestamp: Date.now() - 450000,
      },
      {
        id: 5, type: 'stock', symbol: 'MSFT', current_price: 450.75, high_price: 451.00, low_price: 449.00, open_price: 449.50, prev_close_price: 450.00, volume: 95000000, timestamp: Date.now(),
      },
    ];

    const mockNewsArticles = [
      {
        id: 1, headline: 'Market Analysts Expect Tech Sector Growth Amidst AI Boom', summary: 'Experts predict continued strong performance from tech companies driven by advancements in artificial intelligence.', url: '#', image: '', source: 'Financial Times', published_at: Date.now() - 7200000,
      },
      {
        id: 2, headline: 'Central Bank Hints at Rate Cuts: Impact on Forex Markets', summary: 'Recent statements from the Federal Reserve indicate a potential shift in monetary policy, influencing major currency pairs.', url: '#', image: '', source: 'Reuters', published_at: Date.now() - 5400000,
      },
      {
        id: 3, headline: 'Renewable Energy Stocks Surge on New Legislation', summary: 'Government incentives for green energy are propelling renewable stock values to new highs, attracting significant investment.', url: '#', image: '', source: 'Bloomberg', published_at: Date.now() - 3600000,
      },
      {
        id: 4, headline: 'Global Inflation Concerns Persist: What It Means for Investors', summary: 'Ongoing supply chain issues and geopolitical tensions continue to fuel inflation fears, impacting global market stability.', url: '#', image: '', source: 'Wall Street Journal', published_at: Date.now() - 1800000,
      },
      {
        id: 5, headline: 'Breakthrough in Quantum Computing Could Revolutionize Finance', summary: 'A new development in quantum technology promises to transform financial modeling and high-frequency trading.', url: '#', image: '', source: 'TechCrunch', published_at: Date.now(),
      },
    ];
    // --- END MOCK DATA ---

    function HomePage() {
      return (
        <main className="flex-grow container mx-auto px-4 py-12 md:py-16 relative z-0"> {/* Adjusted top padding */}
          {/* Central Glowing Orb Background Effect */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
            <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
            <div className="w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          {/* Hero Section */}
          <section className="text-center py-8 relative z-10"> {/* Reduced vertical padding */}
            <img
              src={logo}
              alt="SuperTradeSignals Logo"
              // Adjusted margin-bottom for 50% reduction in space from header
              // 25% width, max 320px for good scaling, middle-aligned
              className="mx-auto mb-4 md:mb-6 w-1/4 max-w-xs"
            />
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              AI Powered Trading Insights
            </h2>
            {/* Removed: "SuperTradeSignals brings AI automation to your fingertips & streamline tasks." */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              This is v1 of the site, with more features coming soon!
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
                Get in touch
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full transition duration-300">
                View services
              </button>
            </div>
          </section>

          {/* Removed: Clients/Logos Section */}

          {/* Cards Section: Market Data */}
          <section className="py-16 md:py-24 relative z-10">
            <h3 className="text-4xl font-extrabold text-white text-center mb-12">Latest Market Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {mockMarketData.map(item => (
                <DataCard key={item.id} type={item.type} data={item} />
              ))}
            </div>
          </section>

          {/* Cards Section: Latest News */}
          <section className="py-16 md:py-24 relative z-10">
            <h3 className="text-4xl font-extrabold text-white text-center mb-12">Breaking News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {mockNewsArticles.map(article => (
                <DataCard key={article.id} type="news" data={article} />
              ))}
            </div>
          </section>

          {/* Removed: Small "Our Services" text at bottom */}

        </main>
      );
    }

    export default HomePage;
    