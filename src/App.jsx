import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Logo placeholder */}
      <div className="mb-8">
        {/* Replace the src with your program logo when ready */}
        <img 
          src="/logo.svg"
          alt="Meharjan-2024 Logo" 
          className="w-32 h-32 object-cover rounded-full shadow-lg" 
        />
      </div>
      
      {/* Event Title */}
      <h1 className="text-gray-800 text-4xl font-bold mb-4">Meharjan-2024</h1>
      
      {/* Subtitle */}
      <h2 className="text-gray-600 text-xl mb-8">Alathoorpadi Dars Fest</h2>
      
      {/* Coming Soon Text */}
      <p className="text-gray-700 text-lg font-semibold bg-yellow-200 p-4 rounded-lg shadow">
         Coming Soon...
      </p>
    </div>
  );
}

export default App;
