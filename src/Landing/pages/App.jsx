import React from "react";
import Card from "../../components/UIElements/Card";
import "./App.css";
function App() {
  const DAA = [
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`,
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`, // Added
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`, // Added
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`, // Added
    `./img/img (${Math.ceil(Math.random() * 15)}).jpg`, // Added
  ];
  return (
    <div className="App">
      {DAA.map((e, index) => {
        return (
          <Card key={index}>
            <img src={e} alt={`Image ${index + 1}`} />
            <h1>Animal</h1>
            <h2>Price: {Math.round(Math.random() * 150)}$</h2>
          </Card>
        );
      })}
    </div>
  );
}
export default App;
