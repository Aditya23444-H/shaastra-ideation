import { useState } from 'react'; 
import TestMenuComponent from "../navbarcomponents/TestMenuComponent";
import Clock from "../navbarcomponents/Clock";
import ClockToggle from "../buttons/ClockToggle";


const Home = () => {
    const [isClock,setIsClock] = useState(false);

    return (
        <div className="bg-[#9701d0] h-full w-screen">
            <div><ClockToggle/></div>
            <div className="w-full h-full place-content-center">
                {isClock===true? <Clock/> :
                <TestMenuComponent/>}
            </div>
        </div>
    )
}

export default Home;