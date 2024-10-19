// import { useState } from "react";
import "./App.css";
import { Component } from "./components/ViewSize";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to site</h1>
        <div>
          <h3> If screen size more than 500 redirect to desktop view</h3>
        </div>
        <Component />
      </div>
    </>
  );
}

export default App;
