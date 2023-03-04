import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-9xl font-bold text-white mb-8 animate-bounce">404</h1>
      <h2 className="text-xl md:text-3xl font-semibold text-white mb-8 text-center">Page Not Found</h2>
      <p className="text-lg md:text-xl text-white mb-8 text-center">Sorry, the page you are looking for does not exist.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/">Go Back to Home</Link> 
      </button>
    </div>
  );
};

export default PageNotFound;
