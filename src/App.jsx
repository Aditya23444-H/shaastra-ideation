import { useRef, useState } from "react";
import { ToggleContext } from "./ToggleContext";
import Homepage from "./pages/Homepage";
import { useScroll, useTransform, motion } from "framer-motion";
import About from "./pages/About";
import Timer from "./pages/Timer";
import Footer from "./pages/Footer";
import NavbarComponent from "./pages/NavbarComponent";

const App = () => {
  const [isClock,setIsClock] = useState(false);
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target:ref,
  });

  const x = useTransform(scrollYProgress, [0,1], ["0px", "-210vw"]);

  return (
  <ToggleContext.Provider value={{isClock,setIsClock}}>
    <section ref={ref} className="relative h-[400vh]"
    style={{ scrollBehavior: "smooth" }}>
      <div className="flex sticky top-0 h-screen w-max bg-[#45124d]">
      <motion.div
            variants={{
              hidden: { opacity:0, y:"100vh"},
              visible:{
                opacity:1,
                y:0,
                transition:{
                  duration:1, delay:3, type:"spring"
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className="w-[30vw] sticky left-0 h-full bg-[#45124d] z-20 flex box-shadow justify-center items-center">
              <NavbarComponent/>
            </motion.div>
        <motion.div style={{x}} className="flex relative h-screen w-max">
          <Homepage/>
          {/* <motion.div 
            variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
              when: "beforeChildren",
              staggerChildren: 0.2,
            },
          },
          }}
          initial="hidden"
          animate="visible"
          className="w-[30vw] h-full rounded-tr-md rounded-br-md z-20 bg-p6 flex justify-center items-center"> */}
          {/* </motion.div> */}
          <About/>
          <Timer/>
          <Footer/>
        </motion.div>
      </div>
    </section>
  </ToggleContext.Provider> );
};

export default App;
