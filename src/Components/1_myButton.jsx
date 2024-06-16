import React, { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function reset(){
    setCount(0);
  }

  return (
    <div>
      <button style={{marginRight:"10px", marginTop:"5px"}}onClick={handleClick}>Button Clicked {count} Times</button>
      <button onClick={reset}>Reset</button>
      
    </div>
  );
}

export default MyButton;
