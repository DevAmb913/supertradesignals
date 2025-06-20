// src/App.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; // Ensure this path is correct

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('items') // Replace 'items' with your table name if different
          .select('*');

        if (error) {
          throw error;
        }
        setItems(data);
      } catch (err) {
        console.error('Error fetching data:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <p className="text-gray-600 text-xl">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-red-100 flex items-center justify-center p-4">
        <p className="text-red-800 text-xl font-bold">Error: {error}</p>
        <p className="text-red-600 mt-2">Please ensure your Supabase project is set up and the 'items' table has RLS turned OFF or public read policies configured.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <h1 className="text-white text-5xl font-extrabold tracking-tight text-center mb-12">
        SuperTradeSignals!
      </h1>
      {items.length === 0 ? (
        <p className="text-white text-center text-2xl">No public items found. Add some in Supabase!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-400 mt-4">Created: {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;