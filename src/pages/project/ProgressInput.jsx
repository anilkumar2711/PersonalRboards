// import React, { useState } from 'react';


// const ProgressInput = () => {
//   const [inputValue, setInputValue] = useState('');
//   const maxLength = 100; // Set maximum characters limit

//   // Handle input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   // Calculate the progress percentage
//   const progress = (inputValue.length / maxLength) * 100;

//   return (
//     <div className="w-80 p-4">
//       {/* Input field */}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         maxLength={maxLength}
//         className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder={`Type up to ${maxLength} characters`}
//       />

//       {/* Progress bar */}
//       <div className="w-full h-2 bg-gray-200 mt-2 rounded-md">
//         <div
//           className="h-full bg-green-500 rounded-md transition-all duration-300"
//           style={{ width: `${progress}%` }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProgressInput;
