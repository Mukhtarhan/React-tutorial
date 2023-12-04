import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("mario");
  const handleClick = (temp) => {
    setName(temp);
  };

  return (
    <div>
      <h2>Home</h2>
      <p>{name}</p>
      <button onClick={() => handleClick("yoshi")}>Click me</button>
    </div>
  );
}

export default Home;
