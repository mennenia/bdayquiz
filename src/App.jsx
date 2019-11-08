import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QuizOverview } from "./QuizOverview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuizOverview />
      </header>
    </div>
  );
}

export default App;
