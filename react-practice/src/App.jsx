{/*import React from 'react'
import { useState } from "react";
import './App.css'

// Main App
export default function App() {
  const [state, setState] = React.useState({
    name: "",
    password: "",
    isLoading: false,
  });

  const onInput = (id) => {
    
  };

  const createUser = React.useCallback(() => {
    console.log(state, "name");
  }, [state.name]);

  return (
    <main>
      <h1>{state.isLoading ? "Please wait" : ""}</h1>

      <h3>My name: {state.name}</h3>
      <input onBlur={onInput("name")} placeholder="Enter your name" />

      <h3>My password: {state.password}</h3>
      <input
        onBlur={onInput("password")}
        placeholder="Enter your password"
      />

      <button onClick={createUser}>Get Name</button>
    </main>
  );
}*/}


import React, { useCallback, useState } from "react";
import "./App.css";

// Main App
export default function App() {
  const [state, setState] = useState({
    name: "",
    password: "",
    isLoading: false,
  });

  // reusable input handler
  const onInput = (id) => (e) => {
    setState((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  const createUser = useCallback(() => {
    console.log(state.name);
  }, [state.name]);

  return (
    <main>
      <h1>{state.isLoading ? "Please wait..." : ""}</h1>

      <h3>My name: {state.name}</h3>
      <input
        onBlur={onInput("name")}
        placeholder="Enter your name"
      />

      <h3>My password: {state.password}</h3>
      <input
        onBlur={onInput("password")}
        placeholder="Enter your password"
        type="password"
      />

      <button onClick={createUser}>Submit</button>
    </main>
  );
}


