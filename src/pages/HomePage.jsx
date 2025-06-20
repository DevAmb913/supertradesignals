// src/pages/HomePage.jsx
import React from 'react';

function HomePage() {
  return (
    <main className="flex-grow container mx-auto p-8">
      <section className="text-center my-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Unlock Your Trading Potential</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get real-time, actionable trade signals delivered straight to you. Simplify your decisions and amplify your gains.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          View Latest Signals
        </button>
      </section>

      <section className="my-12">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold text-gray-700 mb-2">High-Accuracy Signals</h4>
            <p className="text-gray-600">Leverage our advanced algorithms to identify prime trading opportunities across various markets.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Real-Time Delivery</h4>
            <p className="text-gray-600">Receive instant alerts so you never miss a critical market movement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold text-gray-700 mb-2">User-Friendly Interface</h4>
            <p className="text-gray-600">Access and manage signals effortlessly through our intuitive platform.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;