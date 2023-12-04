import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./Hero";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
