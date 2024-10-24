import { FaHome, FaSearch, FaUser, FaCog, FaInfoCircle } from "react-icons/fa";
import { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import { motion } from "framer-motion";

const TestMenuComponent = () => {
  const { setIsMoved, isMoved } = useContext(ToggleContext);

  const menuItems = [
    { icon: <FaHome />, label: "Home", link: "/" },
    { icon: <FaSearch />, label: "Search", link: "/search" },
    { icon: <FaUser />, label: "Profile", link: "/profile" },
    { icon: <FaCog />, label: "Settings", link: "/settings" },
    { icon: <FaInfoCircle />, label: "About", link: "/about" },
    { icon: <FaInfoCircle />, label: "About", link: "/about" },
  ];

  const radius = 150; // Radius of the circular menu in pixels

  return (
    <motion.div
      initial={{ scale: 0.2, x: -80 }}
      animate={{
        scale: isMoved ? 1 : 0.2, // Trim height
      }}
      transition={{ duration: 0.5 }}
      className={`relative w-64 group hover:animate-pause h-64 mx-auto ${
        isMoved && "animate-spinRight"
      }`}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={() => {
          setIsMoved(!isMoved);
        }}
      >
        <div className="flex flex-col animate-spinLeft text-border-small group-hover:animate-pause items-center justify-center w-96 h-96 bg-p5 text-white text-3xl font-bold font-bangers rounded-full shadow-lg">
          {/* <span>Welcome</span><span>to</span><span>Shaastra &apos;25</span> */}
        </div>
      </div>

      {menuItems.map((item, index) => {
        const angle = (index / menuItems.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: !isMoved ? 0 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={item.link}
              className="absolute  flex flex-col items-center justify-center w-16 h-16 bg-[#7a1775] text-white rounded-full shadow-lg transform transition-transform duration-300 hover:bg-blue-600"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                pointerEvents:`${isMoved?"":"none"}`
              }}
            >
              <div
                className={`${
                  isMoved && "animate-spinLeft"
                } group-hover:animate-pause`}
              >
                {item.icon}
              </div>
              {/* <span className="text-xs animate-spinLeft mt-1">{item.label}</span> */}
            </a>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TestMenuComponent;
