import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="app">
      <h1>React Electron Boilerplate</h1>
      <p>This is a simple boilerplate for using React with Electron</p>
      <button onClick={() => setCounter((data) => data + 1)}>
        Counter: {counter}
      </button>
    </div>
  );
};

export default App;
