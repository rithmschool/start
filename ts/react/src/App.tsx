import { useState } from "react";
import "./App.css";


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount(count => count + 1);
  }

  return (
    <div className="App">
      <main>
        <h1>Rithm React Starter</h1>
        <p>
          <button
            className="btn btn-primary"
            onClick={ incrCount }>
            Clicked: { count }
          </button>
        </p>
        <p>
          Edit <code>src/App.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default App;
