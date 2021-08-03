import React, { useState, useEffect } from "react";

const UseEffect1 = () => {const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `Chats`;
    }
  },[count]);
  console.log("hello");
  
  return (
    <div>
      <h1>counter</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffect1;
