import Navbar from "./components/Navbar.js";
import Back from "./components/Back.js";
import React, { useEffect, useState } from 'react';

function App() {

  const [bgHeight, setBgHeight] = useState('100vh');

  useEffect(() => {
    const calculateHeight = () => {
      const fullHeight = document.body.scrollHeight;
      setBgHeight(`${fullHeight}px`);
    };

    calculateHeight(); 
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);
  
  
  return (
    <div
      className="bg-cover"
      style={{
        minHeight: bgHeight,
        backgroundImage: "url('https://images.unsplash.com/photo-1603437873662-dc1f44901825?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWRzfGVufDB8fDB8fHww')"
      }}
    >
      <Back />
    </div>
  );
}

export default App;
