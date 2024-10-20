import TestMenuComponent from "../navbarcomponents/TestMenuComponent";
import Clock from "../navbarcomponents/Clock";
import ClockToggle from "../buttons/ClockToggle";
import { useToggle } from '../ToggleContext';


const Home = () => {
    const {isClock,setIsClock} = useToggle()

    return (
        <div className="bg-p9 h-full w-screen relative">
            <div><ClockToggle/></div>
            <div className="w-full h-full place-content-center">
                {isClock===true? <Clock/> :
                <TestMenuComponent/>}
            </div>
        </div>
    )
}

export default Home;