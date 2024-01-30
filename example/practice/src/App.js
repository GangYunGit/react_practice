import './App.css';

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span>몇 번 눌렸니? {count}</span>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default App;
