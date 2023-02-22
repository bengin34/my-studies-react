import { useState } from "react";
import UseEffectS from "./Components/components13/UseEffectS";

function App() {
  const [toggleComponent, setToggleComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setToggleComponent(!toggleComponent)}>
        toggle component
      </button>
      {toggleComponent && <UseEffectS />}
    </div>
  );
}

export default App;
