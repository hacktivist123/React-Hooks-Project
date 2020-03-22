import React, { useState } from 'react';
import './App.css';
function App() {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1);

  return (
    <div className='main'>
      <span>I am {age} Years Old</span>
      <div>
        <button onClick={handleClick}>Increase my age! </button>
      </div>
    </div>
  );
}

export default App;
