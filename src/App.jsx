import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid place-content-center h-screen'>
      <div className='bg-green-300 rounded-full w-32 z-10'>kark</div>
      <nav className=''>
        <div className='navlist flex flex-row justify-between items-center'>
          <ul className='flex items-center mr-16 bg-red-900'>
            <li><a>event1</a></li>
            <li><a>event2</a></li>
            <li><a>event3</a></li>
            <li><a>event4</a></li>
            <li><a>event5</a></li>
            <li><a>event6</a></li>
            <li><a>event7</a></li>
            <li><a>event8</a></li>
          </ul>
          <div className='circle rounded-full bg-red-400 aspect-square w-min flex justify-between items-center p-3'>menu</div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default App
