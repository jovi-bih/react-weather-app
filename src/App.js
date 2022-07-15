import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by {""}
          <a
            href="https://github.com/jovi-bih/react-weather-app"
            target="-blank"
          >
            Bih Jovi
          </a>
          {""} and is {""}
          <a
            href="https://github.com/jovi-bih/react-weather-app"
            target="-blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
