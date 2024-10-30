import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {

  const [state,setstate]=useState("")

  const handleSubmit=()=>{

  }

  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const apiKey = 'YOUR_GOOGLE_SHEETS_API_KEY';
    const sheetId = '1LejVzHWhrO4cnqbzDWiYTleL_fcLLVtxY36kNqG5G24';
    const range = 'Sheet1!A:D'; // Update range based on your sheet structure

    try {
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
      );
      
      const rows = response.data.values;
      const foundRow = rows.find(row => row[0] === number); // assuming "Number" is in the first column
      
      if (foundRow) {
        setResult({
          name: foundRow[1],
          data1: foundRow[2],
          data2: foundRow[3],
        });
      } else {
        setResult(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    //   {/* Logo placeholder */}
    //   <div className="mb-8">
    //     {/* Replace the src with your program logo when ready */}
    //     <img 
    //       src="/logo.svg"
    //       alt="Meharjan-2024 Logo" 
    //       className="w-32 h-32 object-cover rounded-full shadow-lg" 
    //     />
    //   </div>
      
    //   {/* Event Title */}
    //   <h1 className="text-gray-800 text-4xl font-bold mb-4">Meharjan-2024</h1>
      
    //   {/* Subtitle */}
    //   <h2 className="text-gray-600 text-xl mb-8">Alathurpadi Dars Fest</h2>
      
    //   {/* Coming Soon Text */}
    //   <p className="text-gray-700 text-lg font-semibold bg-yellow-200 p-4 rounded-lg shadow">
    //      Coming Soon...
    //   </p>
    // </div>

// <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
//   {/* Page Header */}
//   <header className="text-center mb-8">
//     <h1 className='text-4xl font-bold text-cyan-600 mb-2'>Alathurpadi Dars Fest <span className='text-red-400'>Mehrajan 2024</span></h1>
//     <p className='text-gray-600'>Enter your chest number below to see your results.</p>
//   </header>

//   {/* Input Section */}
//   <div className="flex items-center space-x-4 mb-8">
//     <input 
//       type="text" 
//       className='p-2 border border-cyan-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400' 
//       placeholder='Enter your chest No' 
//       onChange={(e)=>{setstate(e.target.value)}}
//     />
//     <button
//     onClick={handleSubmit}
//      className='bg-cyan-600 text-white p-2 rounded-md hover:bg-cyan-700 transition'>
//       Go
    
//     </button>
//   </div>

//   {/* Result Display (Example Static Content) */}
//   <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-8 text-center">
//     <h2 className="text-xl font-semibold text-gray-700">Results</h2>
//     <p className="text-gray-500 mt-2">Your result will appear here.</p>
//     {/* This could be replaced with dynamic content based on search results */}
//   </div>

//   {/* Additional Content */}
//   <section className="text-center">
//     <h3 className="text-lg font-medium text-gray-700 mb-2">Top Performers</h3>
//     <ul className="text-gray-600 space-y-1">
//       <li>Chest No. 101 - fulaan</li>
//       <li>Chest No. 202 - fulaan2</li>
//       <li>Chest No. 303 - fulaan3</li>
//       {/* Additional top performers can be added here */}
//     </ul>
//   </section>

//   {/* Footer */}
//   <footer className='mt-12 text-center text-gray-500'>
//     <p>&copy; 2024 Competition Results. All rights reserved.</p>
//   </footer>
// </div>
<div className="search-container">
<input
  type="text"
  value={number}
  onChange={(e) => setNumber(e.target.value)}
  placeholder="Enter number"
  className="p-2 border border-gray-300 rounded"
/>
<button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded ml-2">
  Search
</button>

{result ? (
  <div className="result mt-4">
    <p><strong>Name:</strong> {result.name}</p>
    <p><strong>Data1:</strong> {result.data1}</p>
    <p><strong>Data2:</strong> {result.data2}</p>
  </div>
) : (
  number && <p className="mt-4">No results found for this number.</p>
)}
</div>

  );
}

export default App;
