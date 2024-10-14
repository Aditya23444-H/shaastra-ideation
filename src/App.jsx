import { useState } from "react";
import TestMenuComponent from "./navbarcomponents/TestMenuComponent";
import Clock from "./navbarcomponents/Clock";
import ClockToggle from "./buttons/ClockToggle";
import { ToggleContext } from "./ToggleContext";


const App = () => {

const [isClock,setIsClock] = useState(false);

  return (
  <ToggleContext.Provider value={{isClock,setIsClock}}>
    <div className="bg-[#9701d0] h-screen overflow-y-hidden w-full">
      <div><ClockToggle/></div>
      <div className="w-full h-full place-content-center">
        {isClock===true? <Clock/> :
        <TestMenuComponent/>}
      </div>
    </div>
  </ToggleContext.Provider> );
};

export default App;