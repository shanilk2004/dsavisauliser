import React, { useState } from 'react';
import './bubblesort.css'



const MyVisualizer = () => {
  
  
    const [array, setArray] = useState([50, 20, 80, 40]); // Your data

  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div 
          key={index} 
          className="bar" 
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default MyVisualizer;