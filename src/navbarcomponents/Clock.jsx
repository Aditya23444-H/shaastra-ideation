// src/components/CircularNavbar.jsx
import {useEffect, useState} from 'react';
import eventsData from '../utils/data.json';
import { clockFunction } from '../utils/clockFunction';

const eventsObject = eventsData.events;

const Clock = () => {
  const menuItems = [
      { icon: 3, link: '/3' },
      { icon: 4, link: '/4' },
      { icon: 5, link: '/5' },
      { icon: 6, link: '/6' },
      { icon: 7, link: '/7' },
      { icon: 8, link: '/8' },
      { icon: 9, link: '/9' },
      { icon: 10, link: '/10' },
      { icon: 11, link: '/11' },
      { icon: 12, link: '/12' },
      { icon: 1, link: '/1' },
      { icon: 2, link: '/2' },
  ];

  // const iconsBetweenAngle = 360/(menuItems.length);
  
  const [angle, setAngle] = useState(90);
  const [eventList, setEventList] = useState(eventsObject["12"]);

  useEffect(() => {
    // console.log("angle+180",angle+180);
    console.log("angle", angle);
  },[angle])



  const radius = 150; // Radius of the circular menu in pixels

  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute top-[-50%] flex w-full justify-center">
        { eventList.map((event, index) => {
          return <div key={index} className='bg-blue-500 w-32 h-10 rounded-md text-white mr-3 flex justify-center items-center'>{event}</div>
        })}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center w-96 h-96 bg-blue-500 text-white rounded-full shadow-lg">
          <div className="absolute" style={{width:"104px", height:"5px", backgroundColor:"white",
          transformOrigin:"100% 50%",
          transition:`all 1s ease-in-out`,
          transform:`rotate(${angle}deg)`,
          top:"50%",
          right:"50%"
          }}></div>
        </div>
      </div>

      {menuItems.map((item, index) => {
        const angle = (index / menuItems.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={index}
            // href={item.link}
            className="absolute  flex flex-col items-center justify-center w-16 h-16 bg-blue-400 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:bg-blue-600"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            }}
            onClick={() => {
            setEventList(eventsObject[item.icon.toString()])
            setAngle((prevAngle) => {
               return clockFunction(prevAngle, item.icon)
            }) 
}}
          >
            <div className='group-hover:animate-pause'>{item.icon}</div>
            {/* <span className="text-xs animate-spinLeft mt-1">{item.label}</span> */}
          </div>
        );
      })}
    </div>
  );
};

export default Clock;

