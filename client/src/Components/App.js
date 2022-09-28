import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"

function App() {
  

  const onLogin = () => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Not logged in");
        }
      })
      .then((data) => setUser(data))
      .then(() => setLoggedIn(true));
  };

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
