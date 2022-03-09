// Imports
import React from "react";
import { useState } from "react";

// Function to render a simple counter
function App() {
  let [ counter, changeCounter ] = useState(1)
  // making the update function global to modify in the console
  window.changeCounter = changeCounter
  return (
    <div>
      {/* use the counter in multiple tags */}
      <h1>This is my big header counter: {counter}</h1>
      <h4>This is my little header counter: {counter}</h4>
    </div>
    

  )
}

export default App;