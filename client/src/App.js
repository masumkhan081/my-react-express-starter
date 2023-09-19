import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/customers";
import Salesman from "./components/salesman";

export default function App() {
  const [viewSalesman, setView] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Express Starter</h1>
      </header>
      <button onClick={() => setView(!viewSalesman)}>Toggle View</button>
      {viewSalesman ? <Salesman /> : <Customers />}
    </div>
  );
}
