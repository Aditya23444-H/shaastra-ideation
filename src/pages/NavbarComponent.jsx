import ClockToggle from '../buttons/ClockToggle'
import Clock from '../navbarcomponents/Clock'
import TestMenuComponent from '../navbarcomponents/TestMenuComponent'
import { useContext } from 'react'
import { ToggleContext } from '../ToggleContext'

export default function NavbarComponent() {
    const {isClock} = useContext(ToggleContext);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4">
      {/* <div><ClockToggle/></div> */}
      <div className="w-full h-screen grid place-content-center">
        {isClock===true? <Clock/> :
        <TestMenuComponent/>}
      </div>
    </div>
  )
}
