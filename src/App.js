import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
