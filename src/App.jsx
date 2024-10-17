import { useState } from "react";
import { ToggleContext } from "./ToggleContext";
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {

const [isClock,setIsClock] = useState(false);

  return (
  <ToggleContext.Provider value={{isClock,setIsClock}}>
    <div className="flex flex-row h-screen w-max overflow-y-hidden"> 
      <Home/>
      <About/>
    </div>
  </ToggleContext.Provider> );
};

export default App;