
import { useToggle } from '../ToggleContext';

const ClockToggle = () => {

  const {isClock,setIsClock} = useToggle()

  return (
    <>
      <button className='w-16 h-8 bg-red-400 rounded-full p-1' onClick={()=>setIsClock((prev)=>!prev)}>
        <div className={`bg-red-800 w-6 h-6 rounded-full transition-transform duration-200 ${isClock ? "translate-x-8":"translate-x-0"}`}></div>
      </button>
    </>
  )
}

export default ClockToggle;
