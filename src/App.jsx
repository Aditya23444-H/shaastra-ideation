import { useState } from "react";
import TestMenuComponent from "./navbarcomponents/TestMenuComponent";
import Clock from "./navbarcomponents/Clock";
import ClockToggle from "./buttons/ClockToggle";
import { ToggleContext } from "./ToggleContext";


const App = () => {

const [isClock,setIsClock] = useState(false);

  return (
  <ToggleContext.Provider value={{isClock,setIsClock}}>
    <div><ClockToggle/></div>
    <div className="w-full h-screen grid place-content-center">
      {isClock===true? <Clock/> :
      <TestMenuComponent/>}
    </div>
  </ToggleContext.Provider> );
};

export default App;