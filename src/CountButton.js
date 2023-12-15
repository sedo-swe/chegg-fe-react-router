import React, { useState } from "react";

function CountButton () {
  const [count, increaseCount] = useState(0);
  
  return (
    <div>
      
      <button onClick={() => increaseCount(count+1)}>Click Count: {count}</button>
    </div>
  );
}

export default CountButton;