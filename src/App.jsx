import { useState } from "react";
import TestMenuComponent from "./navbarcomponents/TestMenuComponent";
import Clock from "./navbarcomponents/Clock";

const App = () => {
  const [isClock, setIsClock] = useState(false);

  return (
  <>
    <div>
      <button onClick={() => {setIsClock(previousValue => !previousValue )}}>Switch</button>
    </div>
    <div className="w-full h-screen grid place-content-center">
      {isClock===true? <Clock/> :
      <TestMenuComponent/>}
    </div>
  </> );
};

export default App;