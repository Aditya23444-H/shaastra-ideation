import { useEffect, useState } from "react";


export default function Timer() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-01-02T23:59:59').getTime();

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      setDays(Math.floor(timeRemaining/(1000*60*60*24)));
      setHours(Math.floor((timeRemaining%(1000*60*60*24))/(1000*60*60)));
      setMinutes(Math.floor((timeRemaining%(1000*60*60))/(1000*60)));
      setSeconds(Math.floor((timeRemaining%(1000*60))/1000))

      if(timeRemaining <=0){
        clearInterval(countdownInterval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    },1000)

    return () => clearInterval(countdownInterval);
  },[])

  const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked); // Toggle the clicked state
    };

  return (
    <div className="w-[80vw] bg-transparent h-full relative p-5 box-border flex flex-col">
      <p className="text-transparent font-bangers text-border-small mb-2 h-[4.5rem] w-full p-10"></p>
      <div className={`card ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="bg-p6 countDownCard h-full w-full rounded-xl text-white flex flex-col justify-evenly items-center font-black font-bangers text-border">
        <div className="h-full countDownBox w-full rounded-xl text-white flex flex-col justify-evenly items-center font-black font-bangers text-border">
        <div className=" text-8xl">
       <span>{days} days : &nbsp;</span>
       <span>{hours} h : &nbsp;</span>
       <span>{minutes} min : &nbsp;</span>
       <span>{seconds} s</span>
       </div>
       <div className="text-7xl text-center">
        <p className="text-purple-400 mb-8">3rd JANUARAY, 2025</p>
        <p className="text-white text-7xl font-bangers mb-4">EXCITEMENT IS BREWING. ARE YOU IN?</p>
       </div>
       </div>
      </div>
      <div className="titleCard rounded-lg bg-p6 flex flex-col justify-evenly items-center">
        <p className="text-9xl text-white font-bangers text-border font-black">SHAASTRA &apos;25</p>
        <p className="text-7xl text-purple-300 font-bangers text-border font-bold">COUNTDOWN BEGINS!! <span className="text-5xl">(PLZ HOVER)</span></p>
      </div>
      </div>
    </div>
  )
}

//24*60*60*1000*1.5
