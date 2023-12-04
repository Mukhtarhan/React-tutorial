import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome";
  const likes = 50;
  const person = { name: "Yoshi", age: 30 };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
