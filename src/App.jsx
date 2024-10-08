import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      <section className="card-list">{cards}</section>
    </>
  );
}

export default App;
