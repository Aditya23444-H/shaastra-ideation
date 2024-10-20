import { FaHome, FaSearch, FaUser, FaCog, FaInfoCircle } from 'react-icons/fa';

const TestMenuComponent = () => {
  const menuItems = [
    { icon: <FaHome />, label: 'Home', link: '/' },
    { icon: <FaSearch />, label: 'Search', link: '/search' },
    { icon: <FaUser />, label: 'Profile', link: '/profile' },
    { icon: <FaCog />, label: 'Settings', link: '/settings' },
    { icon: <FaInfoCircle />, label: 'About', link: '/about' },
    { icon: <FaInfoCircle />, label: 'About', link: '/about' },
  ];

  const radius = 150; // Radius of the circular menu in pixels

  return (
    <div className="relative w-64 group hover:animate-pause h-64 mx-auto animate-spinRight">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <a href="/" className="flex flex-col animate-spinLeft text-border-small group-hover:animate-pause items-center justify-center w-96 h-96 bg-p5 text-white text-3xl font-bold font-bangers rounded-full shadow-lg">
          <span>Welcome</span><span>to</span><span>Shaastra &apos;25</span>
        </a>
      </div>

      {menuItems.map((item, index) => {
        const angle = (index / menuItems.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <a
            key={index}
            href={item.link}
            className="absolute  flex flex-col items-center justify-center w-16 h-16 bg-p7a1 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:bg-blue-600"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            }}
          >
            <div className='animate-spinLeft group-hover:animate-pause'>{item.icon}</div>
            {/* <span className="text-xs animate-spinLeft mt-1">{item.label}</span> */}
          </a>
        );
      })}
    </div>
  );
};

export default TestMenuComponent;
