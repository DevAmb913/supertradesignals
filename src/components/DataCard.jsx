    // src/components/DataCard.jsx
    import React from 'react';

    // Helper function for consistent gradient class based on type
    const getGradientClass = (type) => {
      switch (type) {
        case 'stock':
          return 'from-blue-500 to-cyan-400';
        case 'forex':
          return 'from-green-500 to-lime-400';
        case 'crypto':
          return 'from-purple-500 to-pink-400';
        case 'news':
          return 'from-yellow-500 to-orange-400';
        default:
          return 'from-gray-500 to-gray-400';
      }
    };

    // Helper to get a simple icon based on type
    const getIcon = (type) => {
      switch (type) {
        case 'stock': return '📈';
        case 'forex': return '💱';
        case 'crypto': return '💎';
        case 'news': return '📰';
        default: return '✨';
      }
    };

    function DataCard({ type, data }) {
      const gradientClass = getGradientClass(type);
      const icon = getIcon(type);

      return (
        // Card container with 3D-like hover effect and relative positioning for pseudo-elements
        <div className="relative p-0.5 rounded-xl overflow-hidden shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:scale-[1.02] hover:shadow-2xl group
                    transform perspective-1000 rotateY-0 rotateX-0 hover:rotateY-3 hover:rotateX-3
                    "
             style={{ willChange: 'transform' }}> {/* will-change for performance */}

          {/* Gradient border effect (before pseudo-element for background gradient) */}
          <div className={`absolute inset-0.5 bg-gradient-to-br ${gradientClass} rounded-[calc(0.75rem-1px)] opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
          <div className={`absolute inset-0.5 bg-gradient-to-br ${gradientClass} rounded-[calc(0.75rem-1px)] opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>


          {/* Inner content div with dark background */}
          <div className="relative bg-gray-900 bg-opacity-95 backdrop-blur-md rounded-xl p-6 flex flex-col h-full z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{icon}</span>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${type === 'news' ? 'bg-yellow-600' : 'bg-purple-600'} text-white`}>
                {type.toUpperCase()}
              </span>
            </div>

            {type !== 'news' ? (
              // Stock/Forex/Crypto Data Display
              <>
                <h3 className="text-2xl font-bold text-white mb-2">{data.symbol || 'N/A'}</h3>
                <p className="text-gray-300 mb-1">Price: <span className="font-semibold text-lg text-green-400">${data.current_price?.toFixed(5) || 'N/A'}</span></p>
                <div className="text-gray-400 text-sm grid grid-cols-2 gap-x-4 gap-y-1 mt-auto">
                  <span>High: ${data.high_price?.toFixed(5) || 'N/A'}</span>
                  <span>Low: ${data.low_price?.toFixed(5) || 'N/A'}</span>
                  <span>Open: ${data.open_price?.toFixed(5) || 'N/A'}</span>
                  <span>Close: ${data.prev_close_price?.toFixed(5) || 'N/A'}</span>
                  {data.volume && <span>Volume: {data.volume.toLocaleString() || 'N/A'}</span>}
                  {data.timestamp && <span className="col-span-2">Time: {new Date(data.timestamp).toLocaleTimeString()}</span>}
                </div>
              </>
            ) : (
              // News Article Display
              <>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight flex-grow">{data.headline || 'No Headline'}</h3>
                <p className="text-gray-400 text-sm line-clamp-3 mb-3">{data.summary || 'No summary available.'}</p>
                <div className="mt-auto flex justify-between items-center text-gray-500 text-xs">
                  <span>Source: {data.source || 'Unknown'}</span>
                  <span>{new Date(data.published_at).toLocaleDateString() || 'N/A'}</span>
                </div>
                <a href={data.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 hover:text-blue-300 transition duration-200 self-start text-sm font-medium">Read More &rarr;</a>
              </>
            )}
          </div>
        </div>
      );
    }

    export default DataCard;
    